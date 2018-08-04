:Class HttpCommand
⍝ Description::
⍝ HttpCommand is a stand alone utility to issue HTTP commands and return their
⍝ results.  HttpCommand can be used to retrieve the contents of web pages,
⍝ issue calls to web services, and communicate with any service which uses the
⍝ HTTP protocol for communications.
⍝
⍝ N.B. requires Conga - the TCP/IP utility library (see Notes below)
⍝
⍝ Overview::
⍝ HttpCommand can be used in two ways:
⍝   1) Create an instance of HttpCommand using ⎕NEW
⍝      This gives you very fine control to specify the command's parameters
⍝      You then use the Run method to execute the request
⍝
⍝        h←⎕NEW HttpCommand                       ⍝ create an instance
⍝        h.(Command URL)←'get' 'www.dyalog.com'   ⍝ set the command parameters
⍝        r←h.Run                                  ⍝ run the request
⍝
⍝   2) Alternatively you can use the "Get" or "Do" methods which make it
⍝      easier to execute some of the more common use cases.
⍝        r←HttpCommand.Get 'www.dyalog.com'
⍝        r←HttpCommand.Do 'get' 'www.dyalog.com'
⍝
⍝ Constructor::
⍝        cmd←⎕NEW HttpCommand [(Command [URL [Params [Headers [Cert [SSLFlags [Priority]]]]]])]
⍝
⍝ Constructor Arguments::
⍝ All of the constructor arguments are also exposed as Public Fields
⍝
⍝   Command  - the case-insensitive HTTP command to issue
⍝              typically one of 'GET' 'POST' 'PUT' 'OPTIONS' 'DELETE' 'HEAD'
⍝
⍝   URL      - the URL to direct the command at
⍝              format is:  [HTTP[S]://][user:pass@]url[:port][/page[?query_string]]
⍝
⍝   Params   - the parameters to pass with the command
⍝              this can either be a URLEncoded character vector, or a namespace
⍝              containing the named parameters
⍝
⍝   Headers  - a vector of 2-element (header-name value) vectors
⍝              or a matrix of [;1] header-name [;2] values
⍝
⍝              these are any additional HTTP headers to send with the request
⍝              or headers whose default values you wish to override
⍝              headers that HttpCommand will set by default are:
⍝               User-Agent     : Dyalog/Conga
⍝               Accept         : */*
⍝               Content-Type   : application/x-www-form-urlencoded
⍝               Content-Length : length of the request body
⍝               Accept-Encoding: gzip, deflate
⍝
⍝   Cert     - if using SSL, this is an instance of the X509Cert class (see Conga SSL documentation)
⍝
⍝   SSLFlags - if using SSL, these are the SSL flags as described in the Conga documentation
⍝
⍝   Priority - if using SSL, this is the GNU TLS priority string (generally you won't change this from the default)
⍝
⍝ Notes on Params and query_string:
⍝ When using the 'GET' HTTP command, you may specify parameters using either the query_string or Params
⍝ Hence, the following are equivalent
⍝     HttpCommand.Get 'www.someplace.com?userid=fred'
⍝     HttpComment.Get 'www.someplace.com' ('userid' 'fred')
⍝
⍝ Additional Public Fields::
⍝   LocalDRC - if set, this is a reference to the DRC namespace from Conga - otherwise, we look for DRC in the workspace root
⍝   WaitTime - time (in seconds) to wait for the response (default 30)
⍝
⍝
⍝ The methods that execute HTTP requests - Do, Get, and Run - return a namespace containing the variables:
⍝   Data          - the response message payload
⍝   HttpVer       - the server HTTP version
⍝   HttpStatus    - the response HTTP status code (200 means OK)
⍝   HttpMessage   - the response HTTP status message
⍝   Headers       - the response HTTP headers
⍝   PeerCert      - the server (peer) certificate if running secure
⍝   Redirections  - a vector (possibly empty) of redirection links
⍝   rc            - the Conga return code (0 means no error, ¯1 means failure to initialize Conga)
⍝   msg           - status/error msg (non-HTTP)  Empty indicates no non-HTTP error
⍝
⍝ Public Instance Methods::
⍝
⍝   result←Run            - executes the HTTP request
⍝   name AddHeader value  - add a header value to the request headers if it doesn't already exist
⍝
⍝ Public Shared Methods::
⍝
⍝   result←Get URL [Params [Headers [Cert [SSLFlags [Priority]]]]]
⍝
⍝   result←Do  Command URL [Params [Headers [Cert [SSLFlags [Priority]]]]]
⍝     Where the arguments are as described in the constructor parameters section.
⍝     Get and Do are shortcut methods to make it easy to execute an HTTP request on the fly.
⍝
⍝   r←Base64Decode vec     - decode a Base64 encoded string
⍝
⍝   r←Base64Encode vec     - Base64 encode a character vector
⍝
⍝   r←UrlDecode vec        - decodes a URL-encoded character vector
⍝
⍝   r←{name} UrlEncode arg - URL-encodes string(s)
⍝     name is an optional name
⍝     arg can be one of
⍝       - a character vector
⍝       - a vector of character vectors of name/value pairs
⍝       - a 2-column matrix of name/value pairs
⍝       - a namespace containing named variables
⍝     Examples:
⍝
⍝       UrlEncode 'Hello World!'
⍝ Hello%20World%21
⍝
⍝      'phrase' UrlEncode 'Hello World!'
⍝ phrase=Hello%20World%21
⍝
⍝       UrlEncode 'company' 'dyalog' 'language' 'APL'
⍝ company=dyalog&language=APL
⍝
⍝       UrlEncode 2 2⍴'company' 'dyalog' 'language' 'APL'
⍝ company=dyalog&language=APL
⍝
⍝       (ns←⎕NS '').(company language)←'dyalog' 'APL'
⍝       UrlEncode ns
⍝ company=dyalog&language=APL
⍝
⍝ Notes::
⍝ HttpCommand uses Conga for TCP/IP communications and supports both Conga 2 and Conga 3
⍝ Conga 2 uses the DRC namespace
⍝ Conga 3 uses either the Conga namespace or DRC namespace for backwards compatibility
⍝ HttpCommand will search for #.Conga and #.DRC and use them if they exist - or try to ⎕CY them if they do not
⍝ You can set the CongaRef public field to have HttpCommand use Conga or DRC located other than in the root of the workspace
⍝ Otherwise HttpCommand will attempt to copy Conga or DRC from the conga workspace supplied with Dyalog APL
⍝
⍝ Normally HttpCommand will specify a request header so that the server can use gzip or deflate compression in the response.
⍝ However, if you use the HEAD HTTP method, we do not do so, so that the content-length header will
⍝   reflect the uncompressed length of the response's body.
⍝   You can add the header manually if you want the compressed message length, e.g.:
⍝   r←HttpCommand.Do 'HEAD' 'someurl' '' (1 2⍴'Accept-Encoding' 'gzip, deflate')
⍝
⍝
⍝ Example Use Cases::
⍝
⍝ Retrieve the contents of a web page
⍝   result←HttpCommand.Get 'www.dyalog.com'
⍝
⍝ Update a record in a web service
⍝   cmd←⎕NEW HttpCommand                        ⍝ create an instance
⍝   cmd.(Command URL)←'PUT' 'www.somewhere.com' ⍝ set a couple of fields
⍝   (cmd.Params←⎕NS '').(id name)←123 'Fred'    ⍝ set the parameters for the "PUT" command
⍝   result←cmd.Run                              ⍝ and run it
⍝

    ⎕ML←⎕IO←1

    :field public Command←'GET'
    :field public Cert←⍬
    :field public SSLFlags←32
    :field public shared CongaRef←''
    :field public URL←''
    :field public Params←''
    :field public Headers←''
    :field public Priority←'NORMAL:!CTYPE-OPENPGP'
    :field public WaitTime←30
    :field public shared LDRC

    ∇ r←Version
      :Access public shared
      r←'HttpCommand' '2.1.7' '2018-07-31'
    ∇

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
          r←(Command HttpCmd)URL Params Headers
      :Else
          r←(Cert SSLFlags Priority)(Command HttpCmd)URL Params Headers
      :EndIf
    ∇

    ∇ r←Get args
    ⍝ Description::
    ⍝ Shortcut method to perform an HTTP GET request
    ⍝ args - [URL Params Headers Cert SSLFlags Priority]
      :Access public shared
      r←(⎕NEW ⎕THIS((⊂'GET'),eis args)).Run
    ∇

    ∇ r←Do args;cmd
    ⍝ Description::
    ⍝ Shortcut method to perform an HTTP request
    ⍝ args - [Command URL Params Headers Cert SSLFlags Priority]
      :Access public shared
      r←(⎕NEW ⎕THIS(eis args)).Run
    ∇

    ∇ LDRC←ResolveCongaRef CongaRef;z;failed
    ⍝ CongaRef could be a charvec, reference to the Conga or DRC namespaces, or reference to an iConga instance
      :Access public shared  ⍝!!! testing only  - remove :Access after testing
      LDRC←'' ⋄ failed←0
      :Select ⎕NC⊂'CongaRef' ⍝ what is it?
      :Case 9.1 ⍝ namespace?  e.g. CongaRef←DRC or Conga
     Try:
          :Trap 0
              :If 0≡⊃z←CongaRef.Init'' ⍝ DRC?
                  LDRC←CongaRef
                  {}LDRC.Init''
              :ElseIf 9.2=⎕NC⊂,'z'    ⍝ Conga?
                  LDRC←z
              :EndIf
          :Else ⍝ if HttpCommand is reloaded and re-executed in rapid succession, Conga initialization may fail, so we try twice
              :If failed
                  →0⊣LDRC←''
              :Else
                  →Try⊣failed←1
              :EndIf
          :EndTrap
      :Case 9.2 ⍝ instance?  e.g. CongaRef←Conga.Init ''
          LDRC←CongaRef ⍝ an instance is already initialized
      :Case 2.1 ⍝ variable?  e.g. CongaRef←'#.Conga'
          :Trap 0
              LDRC←ResolveCongaRef(⍎∊⍕CongaRef)
          :EndTrap
      :EndSelect
    ∇

    ∇ r←{certs}(cmd HttpCmd)args;url;parms;hdrs;urlparms;p;b;secure;port;host;page;x509;flags;priority;pars;auth;req;err;chunked;chunk;buffer;chunklength;done;data;datalen;header;headerlen;rc;dyalog;donetime;congaCopied;formContentType;ind;len;mode;obj;evt;dat;ref;nc;ns;n;class;clt;z;contentType;redirected;origHost;origPort;noHost;origSecure;msg;timedOut
⍝ issue an HTTP command
⍝ certs - optional [X509Cert [SSLValidation [Priority]]]
⍝ args  - [1] URL in format [HTTP[S]://][user:pass@]url[:port][/page[?query_string]]
⍝         {2} parameters is using POST - either a namespace or URL-encoded string
⍝         {3} HTTP headers in form {↑}(('hdr1' 'val1')('hdr2' 'val2'))
⍝ Makes secure connection if left arg provided or URL begins with https:
     
⍝ Result: (conga return code) (HTTP Status) (HTTP headers) (HTTP body) [PeerCert if secure]
      r←⎕NS''
      r.(rc msg HttpVer HttpStatus HttpMessage Headers Data PeerCert Redirections)←¯1 '' ''⍬''(0 2⍴⊂'')''⍬(0⍴⊂'')
     
      args←eis args
      (url parms hdrs)←args,(⍴args)↓''(⎕NS'')''
      →∆END↓⍨0∊⍴r.msg←(0∊⍴url)/'No URL specified' ⍝ exit early if no URL
     
      ⍝↓↓↓ Check is LDRC exists (VALUE ERROR (6) if not), and is LDRC initialized? (NONCE ERROR (16) if not)
      :If {6 16::1 ⋄ ''≡LDRC:1 ⋄ 0⊣LDRC.Version}''
          :If ~0∊⍴CongaRef  ⍝ did the user supply a reference to Conga?
              LDRC←ResolveCongaRef CongaRef
              →∆END↓⍨0∊⍴r.msg←(''≡LDRC)/'CongaRef (',(⍕CongaRef),') does not point to a valid instance of Conga'
          :Else
              ref nc←{1↑¨⍵{(×⍵)∘/¨⍺ ⍵}#.⎕NC ⍵}ns←'Conga' 'DRC'
              :If 9=⊃⌊nc
                  LDRC←ResolveCongaRef'#.',∊ref
                  →∆END↓⍨0∊⍴r.msg←(''≡LDRC)/'#.',(∊ref),' does not point to a valid instance of Conga'
              :Else
                  class←⊃⊃⎕CLASS ⎕THIS
                  dyalog←{⍵,'/'↓⍨'/\'∊⍨¯1↑⍵}2 ⎕NQ'.' 'GetEnvironment' 'DYALOG'
                  congaCopied←0
                  :For n :In ns
                      :Trap 0
                          n class.⎕CY dyalog,'ws/conga'
                          LDRC←ResolveCongaRef class⍎n
                          →∆END↓⍨0∊⍴r.msg←(''≡LDRC)/n,' was copied from [DYALOG]/ws/conga, but is not valid'
                          congaCopied←1
                          :Leave
                      :EndTrap
                  :EndFor
                  →∆END↓⍨0∊⍴r.msg←(~congaCopied)/'Neither Conga nor DRC were successfully copied from [DYALOG]/ws/conga'
              :EndIf
          :EndIf
      :EndIf
     
      url←,url
      cmd←uc,cmd
     
      (url urlparms)←{⍵{((¯1+⍵)↑⍺)(⍵↓⍺)}⍵⍳'?'}url
     
      :If 'GET'≡cmd   ⍝ if HTTP command is GET, all parameters are passed via the URL
          urlparms,←{0∊⍴⍵:⍵ ⋄ '&',⍵}UrlEncode parms
          parms←''
      :EndIf
     
      urlparms←{0∊⍴⍵:'' ⋄ ('?'=1↑⍵)↓'?',⍵}{⍵↓⍨'&'=⊃⍵}urlparms
     
      redirected←0
     
     GET:
      p←(∨/b)×1+(b←'//'⍷url)⍳1
      secure←{6::⍵ ⋄ ⍵∨0<⍴,certs}(lc(p-2)↑url)≡'https:'
      url←p↓url              ⍝ Remove HTTP[s]:// if present
      (host page)←'/'split url,(~'/'∊url)/'/'    ⍝ Extract host and page from url
      page←{w←⍵ ⋄ ((' '=w)/w)←⊂'%20' ⋄ ∊w}page   ⍝ convert spaces in page name to %20
     
      :If redirected∧noHost←0∊⍴host ⍝ if we're redirected and no host is specified in the location header...
          host←origHost ⍝ ...use original host
          secure←origSecure
          port←origPort
      :EndIf
     
      :If 0=⎕NC'certs' ⋄ certs←'' ⋄ :EndIf
     
      :If secure
          LDRC.X509Cert.LDRC←LDRC
          x509 flags priority←3↑certs,(⍴,certs)↓(⎕NEW LDRC.X509Cert)32 'NORMAL:!CTYPE-OPENPGP'  ⍝ 32=Do not validate Certs
          pars←('x509'x509)('SSLValidation'flags)('Priority'priority)
      :Else ⋄ pars←''
      :EndIf
     
      :If '@'∊host ⍝ Handle user:password@host...
          auth←'Authorization: Basic ',(Base64Encode(¯1+p←host⍳'@')↑host),NL
          host←p↓host
      :Else ⋄ auth←''
      :EndIf
     
      :If ~redirected∧noHost  ⍝ if not redirected and no host was specified in the location header
          :If (≢host)<ind←host⍳':' ⍝ then if there's no port specified in the host
              port←(1+secure)⊃80 443 ⍝ use the default HTTP/HTTPS port
          :Else
              :If 0=port←⊃toNum ind↓host
                  r.msg←'Invalid host/port - ',host
                  →∆END
              :EndIf
              host↑⍨←ind-1
          :EndIf
      :EndIf
     
      :If 0∊⍴host
          r.msg←'No host specified'
          →∆END
      :EndIf
     
      :If ~(port>0)∧(port≤65535)∧port=⌊port
          r.msg←'Invalid port - ',⍕port
          →∆END
      :EndIf
     
      hdrs←makeHeaders hdrs
      hdrs←'User-Agent'(hdrs addHeader)'Dyalog/Conga'
      hdrs←'Accept'(hdrs addHeader)'*/*'
     
      :If ~0∊⍴parms         ⍝ if we have any parameters
          :If cmd≢'GET'     ⍝ and not a GET command
              ⍝↓↓↓ specify the default content type (if not already specified)
              hdrs←'Content-Type'(hdrs addHeader)formContentType←'application/x-www-form-urlencoded'
              contentType←hdrs Lookup'Content-Type'
              :Select contentType
              :Case formContentType
                  parms←UrlEncode parms
              :Case 'application/json'
                  :If 1≥⍴⍴parms ⍝ if it's a simple charvec, it's already considered to be formated JSON
                  :AndIf ' '=1↑0⍴parms
                  :Else ⍝ otherwise, convert it
                      parms←1 ⎕JSON parms
                  :EndIf
              :EndSelect
              hdrs←'Content-Length'(hdrs addHeader)⍴parms
          :EndIf
      :EndIf
     
⍝↓↓↓ If using HEAD method, don't indicate we accept compressed responses
⍝    this was content-length in the response reflects the actual size of the response
⍝    The user can always add the header manually if he wants the compressed size
      :If 'HEAD'≢cmd
          hdrs←'Accept-Encoding'(hdrs addHeader)'gzip, deflate'
      :EndIf
     
      req←cmd,' ',(page,urlparms),' HTTP/1.1',NL,'Host: ',host,NL
      req,←fmtHeaders hdrs
      req,←auth
     
      donetime←⌊⎕AI[3]+1000×WaitTime ⍝ time after which we'll time out
     
      mode←'text' 'http'⊃⍨1+3≤⊃LDRC.Version ⍝ Conga 3.0 introduced native HTTP mode
     
     Go:
      :If 0=⊃(err clt)←2↑rc←LDRC.Clt''host port mode 100000,pars ⍝ 100,000 is max receive buffer size
     
          :If mode≡'http'
              :If 0≠1⊃LDRC.SetProp clt'DecodeBuffers' 15 ⍝ set advanced HTTP parsing
                  {}LDRC.Close clt ⍝ if that's not available
                  mode←'text'      ⍝ fall back to text mode
                  →Go
              :EndIf
          :EndIf
     
          :If 0=⊃rc←LDRC.Send clt(req,NL,parms)
              chunked chunk buffer chunklength←0 '' '' 0
              timedOut done data datalen headerlen header←0 0 ⍬ 0 0 ⍬
     
              :Repeat
                  :If ~done←0≠err←1⊃rc←LDRC.Wait clt 5000            ⍝ Wait up to 5 secs
                      (err obj evt dat)←4↑rc
                      :Select evt
              ⍝ Conga 3.0+ handling
                      :Case 'HTTPHeader'
                          r.(HttpVersion HttpStatus HttpMessage)←3↑dat
                          header←4⊃dat
                          datalen←⊃(toNum header Lookup'Content-Length'),¯1 ⍝ ¯1 if no content length not specified
                          chunked←∨/'chunked'⍷header Lookup'Transfer-Encoding'
                          done←(cmd≡'HEAD')∨chunked<datalen<1
                      :Case 'HTTPBody'
                          data←dat
                          done←1
                      :Case 'HTTPChunk'
                          data,←1⊃dat
                      :Case 'HTTPTrailer'
                          header⍪←dat
                          done←1
     
              ⍝ Pre-Conga 3.0 handling
                      :CaseList 'Block' 'BlockLast'             ⍝ If we got some data
                          :If chunked
                              chunk←4⊃rc
                          :ElseIf 0<⍴data,←4⊃rc
                          :AndIf 0=headerlen
                              (headerlen header)←DecodeHeader data
                              :If 0<headerlen
                                  data←headerlen↓data
                                  :If chunked←∨/'chunked'⍷header Lookup'Transfer-Encoding'
                                      chunk←data
                                      data←''
                                  :Else
                                      datalen←⊃(toNum header Lookup'Content-Length'),¯1 ⍝ ¯1 if no content length not specified
                                  :EndIf
                                  r.(HttpVer HttpStatus HttpMessage)←{⎕ML←3 ⋄ ⍵⊂⍨{⍵∨2<+\~⍵}⍵≠' '}(⊂1 1)⊃header
                                  header↓⍨←1
                              :EndIf
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
                              :If ~done←done∨(cmd≡'HEAD')∨'BlockLast'≡3⊃rc  ⍝ Done if socket was closed
                                  :If datalen>0
                                      done←done∨datalen≤⍴data ⍝ ... or if declared amount of data rcvd
                                  :Else
                                      done←done∨(∨/'</html>'⍷data)∨(∨/'</HTML>'⍷data)
                                  :EndIf
                              :EndIf
                          :EndIf
     
                      :Case 'Timeout'
                          timedOut←done←⎕AI[3]>donetime
     
                      :Case 'Error'
                          r.msg←'Conga error processing your request: ',,⍕rc
                          done←err←1
                      :Else  ⍝ This shouldn't happen
                          ⎕←r.msg←'*** Unhandled Conga event type - ',evt
                          ∘∘∘  ⍝ !! Intentional !!
                      :EndSelect
     
                  :ElseIf 100=err ⍝ timeout?
                      timedOut←done←⎕AI[3]>donetime
                  :Else           ⍝ some other error (very unlikely)
                      ⎕←'*** Conga wait error ',,⍕rc
                  :EndIf
              :Until done
     
              :If timedOut
                  r.(rc msg)←(⊃rc)'Request timed out before server responded'
                  →∆END
              :EndIf
     
              r.HttpStatus←toNum r.HttpStatus
              redirected←0
     
              :If 0=err
                  :Trap 0 ⍝ If any errors occur, abandon conversion
                      :Select header Lookup'content-encoding' ⍝ was the response compressed?
                      :Case 'deflate'
                          data←120 ¯100{(2×⍺≡2↑⍵)↓⍺,⍵}83 ⎕DR data ⍝ append 120 156 signature because web servers strip it out due to IE
                          data←fromutf8 256|¯2(219⌶)data
                      :Case 'gzip'
                          data←fromutf8 256|¯3(219⌶)83 ⎕DR data
                      :Else
                          :If ∨/'charset=utf-8'⍷header Lookup'content-type'
                              data←'UTF-8'⎕UCS ⎕UCS data ⍝ Convert from UTF-8
                          :EndIf
                      :EndSelect
                  :EndTrap
     
                  :If redirected←r.HttpStatus∊301 302 303 305 307 ⍝ redirected? (HTTP status codes 301, 302, 303, 305, 307)
                      url←header Lookup'location' ⍝ use the "location" header field for the URL
                      :If ~0∊⍴url
                          r.Redirections,←⊂url
                          (origHost origPort origSecure)←host port secure
                          {}LDRC.Close clt
                          →GET
                      :EndIf
                  :EndIf
     
                  :If secure
                  :AndIf 0=⊃z←LDRC.GetProp clt'PeerCert'
                      r.PeerCert←2⊃z
                  :EndIf
              :EndIf
     
              r.(Headers Data)←header data
     
          :Else
              r.msg←'Conga connection failed ',,⍕1↓rc
          :EndIf
          {}LDRC.Close clt
      :Else
          r.msg←'Conga client creation failed ',,⍕1↓rc
      :EndIf
     
      r.rc←1⊃rc
     
     ∆END:
      r.⎕DF 1⌽'][rc: ',(⍕r.rc),' | msg: "',r.msg,'"',(r.rc=0)/' | HTTP Status: ',(⍕r.HttpStatus),' "',r.HttpMessage,'" | ⍴Data: ',⍕⍴r.Data
     
    ∇

    NL←⎕UCS 13 10
    fromutf8←{0::(⎕AV,'?')[⎕AVU⍳⍵] ⋄ 'UTF-8'⎕UCS ⍵} ⍝ Turn raw UTF-8 input into text
    utf8←{3=10|⎕DR ⍵: 256|⍵ ⋄ 'UTF-8' ⎕UCS ⍵}
    sint←{⎕io←0 ⋄ 83=⎕DR ⍵:⍵ ⋄ 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 ¯128 ¯127 ¯126 ¯125 ¯124 ¯123 ¯122 ¯121 ¯120 ¯119 ¯118 ¯117 ¯116 ¯115 ¯114 ¯113 ¯112 ¯111 ¯110 ¯109 ¯108 ¯107 ¯106 ¯105 ¯104 ¯103 ¯102 ¯101 ¯100 ¯99 ¯98 ¯97 ¯96 ¯95 ¯94 ¯93 ¯92 ¯91 ¯90 ¯89 ¯88 ¯87 ¯86 ¯85 ¯84 ¯83 ¯82 ¯81 ¯80 ¯79 ¯78 ¯77 ¯76 ¯75 ¯74 ¯73 ¯72 ¯71 ¯70 ¯69 ¯68 ¯67 ¯66 ¯65 ¯64 ¯63 ¯62 ¯61 ¯60 ¯59 ¯58 ¯57 ¯56 ¯55 ¯54 ¯53 ¯52 ¯51 ¯50 ¯49 ¯48 ¯47 ¯46 ¯45 ¯44 ¯43 ¯42 ¯41 ¯40 ¯39 ¯38 ¯37 ¯36 ¯35 ¯34 ¯33 ¯32 ¯31 ¯30 ¯29 ¯28 ¯27 ¯26 ¯25 ¯24 ¯23 ¯22 ¯21 ¯20 ¯19 ¯18 ¯17 ¯16 ¯15 ¯14 ¯13 ¯12 ¯11 ¯10 ¯9 ¯8 ¯7 ¯6 ¯5 ¯4 ¯3 ¯2 ¯1[utf8 ⍵]}
    lc←(819⌶) ⍝ lower case conversion
    uc←1∘lc   ⍝ upper case conversion
    dlb←{(+/∧\' '=⍵)↓⍵} ⍝ delete leading blanks
    split←{(p↑⍵)((p←¯1+⍵⍳⍺)↓⍵)} ⍝ split ⍵ on first occurrence of ⍺
    h2d←{⎕IO←0 ⋄ 16⊥'0123456789abcdef'⍳lc ⍵} ⍝ hex to decimal
    getchunklen←{¯1=len←¯1+⊃(NL⍷⍵)/⍳⍴⍵:¯1 ¯1 ⋄ chunklen←h2d len↑⍵ ⋄ (⍴⍵)<len+chunklen+4:¯1 ¯1 ⋄ len chunklen}
    toNum←{0∊⍴⍵:⍬ ⋄ 1⊃2⊃⎕VFI ⍕⍵} ⍝ simple char to num
    makeHeaders←{0∊⍴⍵:0 2⍴⊂'' ⋄ 2=⍴⍴⍵:⍵ ⋄ ↑2 eis ⍵} ⍝ create header structure [;1] name [;2] value
    fmtHeaders←{0∊⍴⍵:'' ⋄ ∊{0∊⍴2⊃⍵:'' ⋄ NL,⍨(firstCaps 1⊃⍵),': ',⍕2⊃⍵}¨↓⍵} ⍝ formatted HTTP headers
    firstCaps←{1↓{(¯1↓0,'-'=⍵) (819⌶)¨ ⍵}'-',⍵} ⍝ capitalize first letters e.g. Content-Encoding
    addHeader←{'∘???∘'≡⍺⍺ Lookup ⍺:⍺⍺⍪⍺ ⍵ ⋄ ⍺⍺} ⍝ add a header unless it's already defined

    ∇ r←table Lookup name
    ⍝ lookup a name/value-table value by name, return '∘???∘' if not found
      :Access Public Shared
      r←table{(⍺[;2],⊂'∘???∘')⊃⍨(lc¨⍺[;1])⍳eis lc ⍵}name
    ∇

    ∇ name AddHeader value
    ⍝ add a header unless it's already defined
      :Access public
      Headers←makeHeaders Headers
      Headers←name(Headers addHeader)value
    ∇

    ∇ r←{a}eis w;f
    ⍝ enclose if simple
      :Access public shared
      f←{⍺←1 ⋄ ,(⊂⍣(⍺=|≡⍵))⍵}
      :If 0=⎕NC'a' ⋄ r←f w
      :Else ⋄ r←a f w
      :EndIf
    ∇

    ∇ r←Base64Encode w
    ⍝ Base64 Encode
      :Access public shared
      r←{⎕IO←0
          raw←⊃,/11∘⎕DR¨⍵
          cols←6
          rows←⌈(⊃⍴raw)÷cols
          mat←rows cols⍴(rows×cols)↑raw
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'[⎕IO+2⊥⍉mat],(4|-rows)⍴'='}w
    ∇

    ∇ r←Base64Decode w
    ⍝ Base64 Decode
      :Access public shared
      r←{
          ⎕IO←0
          {
              80=⎕DR' ':⎕UCS ⍵  ⍝ Unicode
              82 ⎕DR ⍵          ⍝ Classic
          }2⊥{⍉((⌊(⍴⍵)÷8),8)⍴⍵}(-6×'='+.=⍵)↓,⍉(6⍴2)⊤'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='{⍺⍳⍵∩⍺}⍵
      }w
    ∇

    ∇ r←DecodeHeader buf;len;d
      ⍝ Decode HTTP Header
      r←0(0 2⍴⊂'')
      :If 0<len←¯1+⊃{((NL,NL)⍷⍵)/⍳⍴⍵}buf
          d←(⍴NL)↓¨{(NL⍷⍵)⊂⍵}NL,len↑buf
          d←↑{((p-1)↑⍵)((p←⍵⍳':')↓⍵)}¨d
          d[;1]←lc¨d[;1]
          d[;2]←dlb¨d[;2]
          r←(len+4)d
      :EndIf
    ∇

    ∇ r←{name}UrlEncode data;⎕IO;z;ok;nul;m;noname
      ⍝ data is one of:
      ⍝      - a character vector to be encoded
      ⍝      - two character vectors of [name] [data to be encoded]
      ⍝      - a namespace containing variable(s) to be encoded
      ⍝ name is the optional name
      ⍝ r    is a character vector of the URLEncoded data
     
      :Access Public Shared
      ⎕IO←0
      noname←0
      :If 9.1=⎕NC⊂'data'
          data←{0∊⍴t←⍵.⎕NL ¯2:'' ⋄ ↑⍵{⍵(⍕,⍺⍎⍵)}¨t}data
      :Else
          :If 1≥|≡data
              :If noname←0=⎕NC'name' ⋄ name←'' ⋄ :EndIf
              data←name data
          :EndIf
      :EndIf
      nul←⎕UCS 0
      ok←nul,'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.~'
     
      z←⎕UCS'UTF-8'⎕UCS∊nul,¨,data
      :If ∨/m←~z∊ok
          (m/z)←↓'%',(⎕D,⎕A)[⍉16 16⊤⎕UCS m/z]
          data←(⍴data)⍴1↓¨{(⍵=nul)⊂⍵}∊z
      :EndIf
     
      r←noname↓¯1↓∊data,¨(⍴data)⍴'=&'
    ∇

    ∇ r←UrlDecode r;rgx;rgxu;i;j;z;t;m;⎕IO;lens;fill
      :Access public shared
      ⎕IO←0
      ((r='+')/r)←' '
      rgx←'[0-9a-fA-F]'
      rgxu←'%[uU]',(4×⍴rgx)⍴rgx ⍝ 4 characters
      r←(rgxu ⎕R{{⎕UCS 16⊥⍉16|'0123456789ABCDEF0123456789abcdef'⍳⍵}2↓⍵.Match})r
      :If 0≠⍴i←(r='%')/⍳⍴r
      :AndIf 0≠⍴i←(i≤¯2+⍴r)/i
          z←r[j←i∘.+1 2]
          t←'UTF-8'⎕UCS 16⊥⍉16|'0123456789ABCDEF0123456789abcdef'⍳z
          lens←⊃∘⍴¨'UTF-8'∘⎕UCS¨t  ⍝ UTF-8 is variable length encoding
          fill←i[¯1↓+\0,lens]
          r[fill]←t
          m←(⍴r)⍴1 ⋄ m[(,j),i~fill]←0
          r←m/r
      :EndIf
    ∇

    :Section Documentation Utilities
    ⍝ these are generic utilities used for documentation

    ∇ docn←ExtractDocumentationSections what;⎕IO;box;CR;sections;eis;matches
    ⍝ internal utility function
      ⎕IO←1
      eis←{(,∘⊂∘,⍣(1=≡,⍵))⍵}
      CR←⎕UCS 13
      box←{{⍵{⎕AV[(1,⍵,1)/223 226 222],CR,⎕AV[231],⍺,⎕AV[231],CR,⎕AV[(1,⍵,1)/224 226 221]}⍴⍵}(⍵~CR),' '}
      docn←1↓⎕SRC ⎕THIS
      docn←1↓¨docn/⍨∧\'⍝'=⊃¨docn ⍝ keep all contiguous comments
      docn←docn/⍨'⍝'≠⊃¨docn     ⍝ remove any lines beginning with ⍝⍝
      sections←{∨/'::'⍷⍵}¨docn
      :If ~0∊⍴what
          matches←∨⌿∨/¨(eis(819⌶what))∘.⍷(819⌶)sections/docn
          (sections docn)←((+\sections)∊matches/⍳≢matches)∘/¨sections docn
      :EndIf
      (sections/docn)←box¨sections/docn
      docn←∊docn,¨CR
    ∇

    ∇ r←Documentation
    ⍝ return full documentation
      :Access public shared
      r←ExtractDocumentationSections''
    ∇

    ∇ r←Describe
    ⍝ return description only
      :Access public shared
      r←ExtractDocumentationSections'Description::'
    ∇

    ∇ r←ShowDoc what
    ⍝ return documentation sections that contain what in their title
    ⍝ what can be a character scalar, vector, or vector of vectors
      :Access public shared
      r←ExtractDocumentationSections what
    ∇

    :EndSection

    ∇ r←Upgrade;z
    ⍝ loads the latest version from GitHub
      :Access public shared
      z←Get'https://raw.githubusercontent.com/Dyalog/library-conga/master/HttpCommand.dyalog'
      :If z.rc≠0
          r←z.(rc msg)
      :ElseIf z.HttpStatus≠200
          r←¯1(⍕z)
      :Else
          {}LDRC.Close'.' ⍝ close Conga
          LDRC←''         ⍝ reset local reference so that Conga gets reloaded
          :Trap 0
              ##.⎕FIX{⍵⊆⍨~⍵∊⎕UCS 13 10 65279}z.Data
              r←0 ''
          :Else
              r←¯1('Could not ⎕FIX new HttpCommand: ',2↓∊': '∘,¨⎕DMX.(EM Message))
          :EndTrap
      :EndIf
    ∇

:EndClass
