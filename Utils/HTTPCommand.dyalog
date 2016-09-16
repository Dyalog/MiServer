:Class HTTPCommand
⍝ Issue an HTTP Command
⍝ Public Fields are:
⍝   Command  - the HTTP command to issue, typically 'GET' 'POST' 'PUT etc
⍝   URL      - the URL to direct the command at
⍝              format is:  [HTTP[S]://][user:pass@]url[:port][/page[?params]]
⍝   Params   - the parameters to pass with the command
⍝              this can either be a URLEncoded character vector, or a namespace containing the named parameters
⍝              for 'GET' you can pass parameters either in the URL or in Params (they will be appended to the URL)
⍝   Headers  - any additional HTTP headers to send with the request (all the obvious headers like 'content-length' are precomputed)
⍝              a vector of 2-element (header-name value) vectors or a matrix of [;1] header-name [;2] values
⍝   Cert     - if using a SSL, this is an instance of the X509Cert class
⍝   SSLFlags - if using SSL, these are the SSL flags as described in the Conga documentation
⍝   Priority - if using SSL, this is the GNU TLS priority string (generally you won't change this from the default)
⍝   LocalDRC - if set, this is a reference to the DRC namespace from Conga - otherwise, we look for DRC in the workspace root
⍝   WaitTime - time (in seconds) to wait for the response (default 30)
⍝
⍝   Methods Run and Get return a namespace containing the variables:
⍝   data          - the response message payload
⍝   httpver       - the server HTTP version
⍝   httpstatus    - the response HTTP status code (200 means OK)
⍝   httpstatusmsg - the response HTTP status message
⍝   headers       - the response HTTP headers
⍝   peercert      - the server (peer) certificate if running secure
⍝   rc            - the Conga return code (0 means no error)

    ⎕ML←⎕IO←1

    :field public Command←'GET'
    :field public Cert←⍬
    :field public SSLFlags←32
    :field public shared LocalDRC←''
    :field public URL←''
    :field public Params←''
    :field public Headers←''
    :field public Priority←'NORMAL:!CTYPE-OPENPGP'
    :field public shared WaitTime←30


    ∇ make
      :Access public
      :Implements constructor
    ∇

    ∇ make1 args
      :Access public
      :Implements constructor
      ⍝ args - [Command URL Params Headers Cert SSLFlags Priority]
      args←eis args
      Command URL Params Headers Cert SSLFlags Priority←7↑args,(⍴args)↓Command URL Params Headers Cert SSLFlags Priority
    ∇

    ∇ r←Run
      :Access public
      :If 0∊⍴Cert
          r←(Command HTTPCmd)URL Params Headers
      :Else
          r←(Cert SSLFlags Priority)(Command HTTPCmd)URL Params Headers
      :EndIf
    ∇

    ∇ r←Get args
      :Access public shared
      r←('GET'HTTPCmd)args
    ∇

    ∇ r←{certs}(cmd HTTPCmd)args;url;parms;hdrs;urlparms;p;b;secure;port;host;page;x509;flags;priority;pars;auth;req;err;chunked;chunk;buffer;chunklength;done;data;datalen;header;headerlen;status;httpver;httpstatus;httpstatusmsg;rc;dyalog;FileSep;donetime
⍝ issue an HTTP command
⍝ certs - optional [X509Cert [SSLValidation [Priority]]]
⍝ args  - [1] URL in format [HTTP[S]://][user:pass@]url[:port][/page]
⍝         {2} parameters is using POST - either a namespace or URL-encoded string
⍝         {3} HTTP headers in form {↑}(('hdr1' 'val1')('hdr2' 'val2'))
⍝ Makes secure connection if left arg provided or URL begins with https:
     
⍝ Result: (conga return code) (HTTP Status) (HTTP headers) (HTTP body) [PeerCert if secure]
      r←⎕NS''
      (rc httpver httpstatus httpstatusmsg header data peercert)←¯1 '' 400(⊂'bad request')(0 2⍴⊂'')''⍬
     
      :If 0∊⍴LocalDRC
          :Select ⊃#.⎕NC'DRC'
          :Case 9
              LDRC←#.DRC
          :Case 0
              FileSep←'/\'[1+'Win'≡3↑1⊃#.⎕WG'APLVersion']
              dyalog←{⍵,(-FileSep=¯1↑⍵)↓FileSep}2 ⎕NQ'.' 'GetEnvironment' 'DYALOG'
              'DRC'⎕CY dyalog,'ws/conga' ⍝ runtime needs full workspace path
              :If {0::1 ⋄ 0⊣⍎'DRC'}''
                  ⎕←'Conga namespace DRC not found or defined'
                  →0
              :EndIf
              LDRC←DRC
          :Else
              ⎕←'Conga namespace DRC not found or defined'
              →0
          :EndSelect
      :ElseIf 9=⎕NC'LocalDRC'
          LDRC←LocalDRC
      :Else
          LDRC←⍎⍕LocalDRC
      :EndIf
     
      {}LDRC.Init''
      args←eis args
     
      (url parms hdrs)←args,(⍴args)↓''(⎕NS'')''
      urlparms←''
      cmd←uc,cmd
     
      :If 'GET'≡cmd
          urlparms←parms
          parms←''
      :EndIf
     
      parms←URLEncode parms
      urlparms←{('?'=1↑⍵)↓'?',⍵}URLEncode urlparms
     
     GET:
      p←(∨/b)×1+(b←'//'⍷url)⍳1
      secure←{6::⍵ ⋄ ⍵∨0<⍴,certs}(lc(p-2)↑url)≡'https:'
      port←(1+secure)⊃80 443 ⍝ Default HTTP/HTTPS port
      url←p↓url              ⍝ Remove HTTP[s]:// if present
      (host page)←'/'split url,(~'/'∊url)/'/'    ⍝ Extract host and page from url
     
      :If 0=⎕NC'certs' ⋄ certs←'' ⋄ :EndIf
     
      :If secure
          x509 flags priority←3↑certs,(⍴,certs)↓(⎕NEW LDRC.X509Cert)32 'NORMAL:!CTYPE-OPENPGP'  ⍝ 32=Do not validate Certs
          pars←('x509'x509)('SSLValidation'flags)('Priority'priority)
      :Else ⋄ pars←''
      :EndIf
     
      :If '@'∊host ⍝ Handle user:password@host...
          auth←'Authorization: Basic ',(b64Encode(¯1+p←host⍳'@')↑host),NL
          host←p↓host
      :Else ⋄ auth←''
      :EndIf
     
      (host port)←port{(⍴⍵)<ind←⍵⍳':':⍵ ⍺ ⋄ (⍵↑⍨ind-1)(1⊃2⊃⎕VFI ind↓⍵)}host ⍝ Check for override of port number
     
      hdrs←makeHeaders hdrs
      hdrs←'User-Agent'(hdrs addHeader)'Dyalog/Conga'
      hdrs←'Accept'(hdrs addHeader)'*/*'
     
      :If ~0∊⍴parms
          :If cmd≡'POST'
              hdrs←'Content-Length'(hdrs addHeader)⍴parms
              hdrs←'Content-Type'(hdrs addHeader)'application/x-www-form-urlencoded'
          :EndIf
      :EndIf
     
      hdrs←'Accept-Encoding'(hdrs addHeader)'gzip, deflate'
     
      req←(uc cmd),' ',(page,urlparms),' HTTP/1.1',NL,'Host: ',host,NL
      req,←fmtHeaders hdrs
      req,←auth
     
      donetime←⌊⎕AI[3]+1000×WaitTime ⍝ time after which we'll time out
     
      :If 0=⊃(err cmd)←2↑rc←LDRC.Clt''host port'Text' 100000,pars ⍝ 100,000 is max receive buffer size
      :AndIf 0=⊃rc←LDRC.Send cmd(req,NL,parms)
     
          chunked chunk buffer chunklength←0 '' '' 0
          done data datalen headerlen header←0 ⍬ 0 0 ⍬
          :Repeat
              :If ~done←0≠1⊃rc←LDRC.Wait cmd 5000            ⍝ Wait up to 5 secs
                  :If rc[3]∊'Block' 'BlockLast'             ⍝ If we got some data
                      :If chunked
                          chunk←4⊃rc
                      :ElseIf 0<⍴data,←4⊃rc
                      :AndIf 0=headerlen
                          (headerlen header)←DecodeHeader data
                          :If 0<headerlen
                              data←headerlen↓data
                              :If chunked←∨/'chunked'⍷header getHeader'Transfer-Encoding'
                                  chunk←data
                                  data←''
                              :Else
                                  datalen←⊃(toNum header getHeader'Content-Length'),¯1 ⍝ ¯1 if no content length not specified
                              :EndIf
                          :EndIf
                      :EndIf
                  :Else
                      ⎕←rc ⍝ Error?
                      ∘∘∘  ⍝ !! Intentional !!
                  :EndIf
                  :If chunked
                      buffer,←chunk
                      :While done<¯1≠⊃(len chunklength)←getchunklen buffer
                          :If (⍴buffer)≥4+len+chunklength
                              data,←chunklength↑(len+2)↓buffer
                              buffer←(chunklength+len+4)↓buffer
                              :If done←0=chunklength ⍝ chunked transfer can add headers at the end of the transmission
                                  header←header⍪2⊃DecodeHeader buffer
                              :EndIf
                          :EndIf
                      :EndWhile
                  :Else
                      done←done∨'BlockLast'≡3⊃rc                        ⍝ Done if socket was closed
                      :If datalen>0
                          done←done∨datalen≤⍴data ⍝ ... or if declared amount of data rcvd
                      :Else
                          done←done∨(∨/'</html>'⍷data)∨(∨/'</HTML>'⍷data)
                      :EndIf
                  :EndIf
              :ElseIf 100=1⊃rc ⍝ timeout?
                  done←⎕AI[3]>donetime
                  ⎕←'tick'
              :EndIf
          :Until done
     
          :If 0=1⊃rc
              :Trap 0 ⍝ If any errors occur, abandon conversion
                  :Select header getHeader'content-encoding' ⍝ was the response compressed?
                  :Case 'deflate'
                      data←fromutf8 LDRC.flate.Inflate 120 156{(2×⍺≡2↑⍵)↓⍺,⍵}256|83 ⎕DR data ⍝ append 120 156 signature because web servers strip it out due to IE
                  :Case 'gzip'
                      data←fromutf8 256|¯3(219⌶)83 ⎕DR data
                  :Else
                      :If ∨/'charset=utf-8'⍷header getHeader'content-type'
                          data←'UTF-8'⎕UCS ⎕UCS data ⍝ Convert from UTF-8
                      :EndIf
                  :EndSelect
     
                  :If {(⍵[3]∊'12357')∧'30 '≡⍵[1 2 4]}4↑{⍵↓⍨⍵⍳' '}(⊂1 1)⊃header ⍝ redirected? (HTTP status codes 301, 302, 303, 305, 307)
                      →GET⍴⍨0<⍴url←'location'{(⍵[;1]⍳⊂⍺)⊃⍵[;2],⊂''}header ⍝ use the "location" header field for the URL
                  :EndIf
     
              :EndTrap

              httpver httpstatus httpstatusmsg←{⎕ML←3 ⋄ ⍵⊂⍨{⍵∨2<+\~⍵}⍵≠' '}(⊂1 1)⊃header
              header↓⍨←1
     
              :If secure ⋄ peercert←⊂LDRC.GetProp cmd'PeerCert' ⋄ :EndIf
          :EndIf
     
          r.(rc httpver httpstatus httpstatusmsg headers data peercert)←(1⊃rc)httpver(toNum httpstatus)httpstatusmsg header data peercert
     
      :Else
          ⎕←'Connection failed ',,⍕rc
          r.rc←1⊃rc
      :EndIf
     
      {}LDRC.Close cmd
    ∇

    NL←⎕UCS 13 10
    fromutf8←{0::(⎕AV,'?')[⎕AVU⍳⍵] ⋄ 'UTF-8'⎕UCS ⍵} ⍝ Turn raw UTF-8 input into text
    utf8←{3=10|⎕DR ⍵: 256|⍵ ⋄ 'UTF-8' ⎕UCS ⍵}
    sint←{⎕io←0 ⋄ 83=⎕DR ⍵:⍵ ⋄ 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 ¯128 ¯127 ¯126 ¯125 ¯124 ¯123 ¯122 ¯121 ¯120 ¯119 ¯118 ¯117 ¯116 ¯115 ¯114 ¯113 ¯112 ¯111 ¯110 ¯109 ¯108 ¯107 ¯106 ¯105 ¯104 ¯103 ¯102 ¯101 ¯100 ¯99 ¯98 ¯97 ¯96 ¯95 ¯94 ¯93 ¯92 ¯91 ¯90 ¯89 ¯88 ¯87 ¯86 ¯85 ¯84 ¯83 ¯82 ¯81 ¯80 ¯79 ¯78 ¯77 ¯76 ¯75 ¯74 ¯73 ¯72 ¯71 ¯70 ¯69 ¯68 ¯67 ¯66 ¯65 ¯64 ¯63 ¯62 ¯61 ¯60 ¯59 ¯58 ¯57 ¯56 ¯55 ¯54 ¯53 ¯52 ¯51 ¯50 ¯49 ¯48 ¯47 ¯46 ¯45 ¯44 ¯43 ¯42 ¯41 ¯40 ¯39 ¯38 ¯37 ¯36 ¯35 ¯34 ¯33 ¯32 ¯31 ¯30 ¯29 ¯28 ¯27 ¯26 ¯25 ¯24 ¯23 ¯22 ¯21 ¯20 ¯19 ¯18 ¯17 ¯16 ¯15 ¯14 ¯13 ¯12 ¯11 ¯10 ¯9 ¯8 ¯7 ¯6 ¯5 ¯4 ¯3 ¯2 ¯1[utf8 ⍵]}
    lc←(819⌶) ⍝ lower case conversion
    uc←1∘lc
    dlb←{(+/∧\' '=⍵)↓⍵} ⍝ delete leading blanks
    split←{(p↑⍵)((p←¯1+⍵⍳⍺)↓⍵)} ⍝ split ⍵ on first occurrence of ⍺
    h2d←{⎕IO←0 ⋄ 16⊥'0123456789abcdef'⍳lc ⍵} ⍝ hex to decimal
    getchunklen←{¯1=len←¯1+⊃(NL⍷⍵)/⍳⍴⍵:¯1 ¯1 ⋄ chunklen←h2d len↑⍵ ⋄ (⍴⍵)<len+chunklen+4:¯1 ¯1 ⋄ len chunklen}
    eis←{⍺←1 ⋄ ,(⊂⍣(⍺=|≡⍵))⍵} ⍝ enclose if simple
    toNum←{0∊⍴⍵:⍬ ⋄ 1⊃2⊃⎕VFI ⍕⍵}
    getHeader←{(⍺[;2],⊂'∘∘∘')⊃⍨(lc ¨⍺[;1])⍳eis lc ⍵}
    addHeader←{'∘∘∘'≡⍺⍺ getHeader ⍺:⍺⍺⍪⍺ ⍵ ⋄ ⍺⍺} ⍝ add a header unless it's already defined
    makeHeaders←{⎕ML←1 ⋄ 0∊⍴⍵:0 2⍴⊂'' ⋄ 2=⍴⍴⍵:⍵ ⋄ ↑2 eis ⍵}
    fmtHeaders←{⎕ML←1 ⋄ 0∊⍴⍵:'' ⋄ ∊{0∊⍴2⊃⍵:'' ⋄ NL,⍨(firstCaps 1⊃⍵),': ',⍕2⊃⍵}¨↓⍵}
    firstCaps←{1↓{(¯1↓0,'-'=⍵) (819⌶)¨ ⍵}'-',⍵}
      b64Encode←{ ⍝ Base64 Encode
          raw←⊃,/11∘⎕DR¨⍵
          cols←6
          rows←⌈(⊃⍴raw)÷cols
          mat←rows cols⍴(rows×cols)↑raw
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[⎕IO+2⊥⍉mat],(4|-rows)⍴'='}

    ∇ r←DecodeHeader buf;len;d;i
      ⍝ Decode HTTP Header
      r←0(0 2⍴⊂'')
      :If 0<i←⊃{((NL,NL)⍷⍵)/⍳⍴⍵}buf
          len←(¯1+⍴NL,NL)+i
          d←(⍴NL)↓¨{(NL⍷⍵)⊂⍵}NL,len↑buf
          d←↑{((p-1)↑⍵)((p←⍵⍳':')↓⍵)}¨d
          d[;1]←lc¨d[;1]
          d[;2]←dlb¨d[;2]
          r←len d
      :EndIf
    ∇

    ∇ r←{name}URLEncode data;⎕IO;z;ok;nul;m;enlist;noname
      :Access Public Shared
      noname←0
      :If 9.1=⎕NC⊂'data'
          data←{0∊⍴t←⍵.⎕NL ¯2:'' ⋄ ↑⍵{⍵(⍕,⍺⍎⍵)}¨t}data
      :Else
          :If 1≥|≡data
              :If noname←0=⎕NC'name' ⋄ name←'' ⋄ :EndIf
              data←name data
          :EndIf
      :EndIf
      nul←⎕UCS ⎕IO←0
      enlist←{⎕ML←1 ⋄ ∊⍵}
      ok←nul,enlist ⎕UCS¨(⎕UCS'aA0')+⍳¨26 26 10
     
      z←⎕UCS'UTF-8'⎕UCS enlist nul,¨,data
      :If ∨/m←~z∊ok
          (m/z)←↓'%',(⎕D,⎕A)[⍉16 16⊤⎕UCS m/z]
          data←(⍴data)⍴1↓¨{(⍵=nul)⊂⍵}enlist z
      :EndIf
     
      r←noname↓¯1↓enlist data,¨(⍴data)⍴'=&'
    ∇

:EndClass
