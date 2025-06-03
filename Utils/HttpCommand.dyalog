:Class HttpCommand
⍝ General HTTP Commmand utility
⍝ Documentation is found at https://dyalog.github.io/HttpCommand/

    ⎕ML←⎕IO←1

    ∇ r←Version
    ⍝ Return the current version
      :Access public shared
      r←'HttpCommand' '5.9.1' '2025-03-08'
    ∇

⍝ Request-related fields
    :field public Command←'get'                    ⍝ HTTP command (method)
    :field public Method←'get'                     ⍝ synonym for Command
    :field public URL←''                           ⍝ requested resource
    :field public Params←''                        ⍝ request parameters
    :field public Headers←0 2⍴⊂''                  ⍝ request headers - name, value
    :field public ContentType←''                   ⍝ request content-type
    :field public Cookies←⍬                        ⍝ request cookies - vector of namespaces
    :field public Auth←''                          ⍝ authentication string
    :field public AuthType←''                      ⍝ authentication type
    :field public BaseURL←''                       ⍝ base URL to use when making multiple requests to the same host
    :field public ChunkSize←0                      ⍝ set to size of chunk if using chunked transfer encoding
    :field public shared HeaderSubstitution←''     ⍝ delimiters to indicate environment/configuration settings be substituted in headers, set to '' to disable


⍝ Proxy-related fields - only used if connecting through a proxy server
    :field public ProxyURL←''                      ⍝ address of the proxy server
    :field public ProxyAuth←''                     ⍝ authentication string, if any, for the proxy server
    :field public ProxyAuthType←''                 ⍝ authentication type, if any, for the proxy server
    :field public ProxyHeaders←0 2⍴⊂''             ⍝ any headers that the proxy server might need

⍝ Conga-related fields
    :field public BufferSize←200000                ⍝ Conga buffersize
    :field public WaitTime←5000                    ⍝ Timeout in ms on Conga Wait call
    :field public Cert←⍬                           ⍝ X509 instance if using HTTPS
    :field public SSLFlags←32                      ⍝ SSL/TLS flags - 32 = accept cert without checking it
    :field public Priority←'NORMAL:!CTYPE-OPENPGP' ⍝ GnuTLS priority string
    :field public PublicCertFile←''                ⍝ if not using an X509 instance, this is the client public certificate file
    :field public PrivateKeyFile←''                ⍝ if not using an X509 instance, this is the client private key file
    :field public shared LDRC                      ⍝ HttpCommand-set reference to Conga after CongaRef has been resolved
    :field public shared CongaPath←''              ⍝ path to user-supplied conga workspace (assumes shared libraries are in the same path)
    :field public shared CongaRef←''               ⍝ user-supplied reference to Conga library
    :field public shared CongaVersion←''           ⍝ Conga [major minor build]

⍝ Operational fields
    :field public SuppressHeaders←0                ⍝ set to 1 to suppress HttpCommand-supplied default request headers
    :field public MaxPayloadSize←¯1                ⍝ set to ≥0 to take effect
    :field public Timeout←10                       ⍝ seconds to wait for a response before timing out, negative means reset timeout if any activity
    :field public RequestOnly←¯1                   ⍝ set to 1 if you only want to return the generated HTTP request, but not actually send it
    :field public OutFile←''                       ⍝ name of file to send payload to (format is same as ⎕NPUT right argument)
    :field public Secret←1                         ⍝ suppress displaying credentials in Authorization header
    :field public MaxRedirections←10               ⍝ set to 0 if you don't want to follow any redirected references, ¯1 for unlimited
    :field public KeepAlive←1                      ⍝ default to not close client connection
    :field public TranslateData←0                  ⍝ set to 1 to translate XML or JSON response data
    :field public UseZip←0                         ⍝ zip request payload (0-no, 1-use gzip, 2-use deflate)
    :field public ZipLevel←1                       ⍝ default compression level (0-9)
    :field public shared Debug←0                   ⍝ set to 1 to disable trapping, 2 to stop just before creating client
    :field public readonly shared ValidFormUrlEncodedChars←'&=ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~*+~%'

    :field Client←''                               ⍝ Conga client ID
    :field ConxProps←''                            ⍝ when a client is made, its connection properties are saved so that if either changes, we close the previous client
    :field origCert←¯1                             ⍝ used to check if Cert changed between calls

    ∇ UpdateCommandMethod arg
      :Implements Trigger Command,Method
      :If (Command Method)∨.≢⊂arg.NewValue
          Command←Method←arg.NewValue
      :EndIf
    ∇

    ∇ make
    ⍝ No argument constructor
      :Access public
      :Implements constructor
    ∇

    ∇ make1 args;settings;invalid
    ⍝ Constructor arguments - [Command URL Params Headers Cert SSLFlags Priority]
      :Access public
      :Implements constructor
      →0⍴⍨0∊⍴args
      args←(eis⍣({9.1≠⎕NC⊂,'⍵'}⊃args)⊢args)
      :Select {⊃⎕NC⊂,'⍵'}⊃args
      :Case 2.1 ⍝ array
          Command URL Params Headers Cert SSLFlags Priority←7↑args,(⍴args)↓Command URL Params Headers Cert SSLFlags Priority
      :Case 9.1 ⍝ namespace
          :If 0∊⍴invalid←(settings←args.⎕NL ¯2.1 ¯9.1)~(⎕NEW⊃⊃⎕CLASS ⎕THIS).⎕NL ¯2.2
              args{⍎⍵,'←⍺⍎⍵'}¨settings
          :Else ⋄ ('Invalid HttpCommand setting(s): ',,⍕invalid)⎕SIGNAL 11
          :EndIf
      :Else ⋄ 'Invalid constructor argument'⎕SIGNAL 11
      :EndSelect
    ∇

    ∇ {ns}←initResult ns
    ⍝ initialize the namespace result
      :Access shared
      ns.(Command URL rc msg HttpVersion HttpStatus HttpMessage Headers Data PeerCert Redirections Cookies OutFile Elapsed BytesWritten)←'' '' ¯1 '' ''⍬''(0 2⍴⊂'')''⍬(0⍴⊂'')⍬'' 0 ¯1
      ns.GetHeader←{⎕IO←⎕ML←1 ⋄ ⍺←Headers ⋄ ⍺{1<|≡⍵:⍺∘∇¨⍵ ⋄ (⍺[;2],⊂'')⊃⍨⍺[;1](⍳{(⍵⍵ ⍺)⍺⍺(⍵⍵ ⍵)}{2::0(819⌶)⍵ ⋄ ¯3 ⎕C ⍵})⊆,⍵}⍵} ⍝ return header value or '' if not found
      ns.⎕FX'∇r←IsOK' 'r←0 2≡rc,⌊.01×HttpStatus' '∇'
    ∇

    ∇ Goodbye
      :Implements destructor
      {}{0::'' ⋄ LDRC.Names'.'⊣LDRC.Close ⍵}⍣(~0∊⍴Client)⊢Client
    ∇

    ∇ r←Config;i
    ⍝ Returns current configuration
      :Access public
      r←↑{6::⍵'not set' ⋄ ⍵(⍎⍵)}¨(⎕THIS⍎'⎕NL ¯2.2')~⊂'ValidFormUrlEncodedChars'
      :If (≢r)≥i←r[;1]⍳⊂'Auth'
      :AndIf Secret
          r[i;2]←⊂'>>> Secret setting is 1 <<<'
      :EndIf
    ∇

    ∇ r←Run
    ⍝ Attempt to run the HTTP command
      :Access public
      RequestOnly←0⌈RequestOnly
      Result←initResult #.⎕NS''
      :Trap Debug↓0
          r←(Cert SSLFlags Priority PublicCertFile PrivateKeyFile)HttpCmd Command URL Params Headers
      :Else ⍝ :Trap
          r←Result
          r.(rc msg)←¯1('Unexpected ',⊃{⍺,' at ',⍵}/2↑⎕DMX.DM)
      :EndTrap
      setDisplayFormat r
     exit:
    ∇

    ∇ r←Show;ro
    ⍝ Show the request to be sent to the server
      :Access public
      ro←RequestOnly
      RequestOnly←1
      r←Run
      RequestOnly←ro
    ∇

    ∇ {r}←setDisplayFormat r;rc;msg;stat;data
    ⍝ set the display format for the namespace result for most HttpCommand commands
      :If 9.1=nameClass r
          rc←'rc: ',⍕r.rc
          msg←' | msg: ',⍕r.msg
          stat←' | HTTP Status: ',(⍕r.HttpStatus),' "',r.HttpMessage,'"'
          data←' | ',{¯1≠r.BytesWritten:(⍕r.BytesWritten),' bytes written to ',r.OutFile ⋄ '≢Data: ',(⍕≢⍵),(9.1=nameClass ⍵)/' (namespace)'}r.Data
          r.⎕DF 1⌽'][',rc,msg,stat,data
      :EndIf
    ∇

    ∇ r←{requestOnly}Get args
    ⍝ Shared method to perform an HTTP GET request
    ⍝ args - [URL Params Headers Cert SSLFlags Priority]
      :Access public shared
      :If 0=⎕NC'requestOnly' ⋄ requestOnly←¯1 ⋄ :EndIf
      :If 2.1=nameClass⊃args ⋄ args←((⊂'GET'),eis args) ⋄ :EndIf
      →∆EXIT⍴⍨9.1=nameClass r←requestOnly New args
      r←r.Run
     ∆EXIT:
    ∇

    ∇ r←{requestOnly}Do args
    ⍝ Shared method to perform any HTTP request
    ⍝ args - [Command URL Params Headers Cert SSLFlags Priority]
      :Access public shared
      :If 0=⎕NC'requestOnly' ⋄ requestOnly←¯1 ⋄ :EndIf
      →∆EXIT⍴⍨9.1=nameClass r←requestOnly New args
      r←r.Run
     ∆EXIT:
    ∇

    ∇ r←{requestOnly}New args
    ⍝ Shared method to create new HttpCommand
    ⍝ args - [Command URL Params Headers Cert SSLFlags Priority]
    ⍝ requestOnly - initial setting for RequestOnly
      :Access public shared
      :If 0=⎕NC'requestOnly' ⋄ requestOnly←¯1 ⋄ :EndIf
      r←''
      :Trap Debug↓0
          :If 0∊⍴args
              r←##.⎕NEW ⊃⎕CLASS ⎕THIS
          :Else
              r←##.⎕NEW (⊃⊃⎕CLASS ⎕THIS)(eis⍣(9.1≠nameClass⊃args)⊢args)
          :EndIf
          r.RequestOnly←requestOnly
      :Else
          r←initResult #.⎕NS''
          r.(rc msg)←¯1 ⎕DMX.EM
          setDisplayFormat r
          →∆EXIT
      :EndTrap
     ∆EXIT:
    ∇

    ∇ r←{requestOnly}GetJSON args;cmd
    ⍝ Shared method to perform an HTTP request with JSON data as the request and response payloads
    ⍝ args - [URL] | [Command URL Params Headers Cert SSLFlags Priority]
      :Access public shared
      :If 0=⎕NC'requestOnly' ⋄ requestOnly←¯1 ⋄ :EndIf
     
      :If isSimpleChar args ⍝ simple character vector args?
      :AndIf (args≡'localhost')≥∧/args∊over lc ⎕A ⋄ args←'GET'args ⋄ :EndIf ⍝ localhost or only alphabetics?
     
      →∆EXIT⍴⍨9.1=nameClass cmd←requestOnly New args
      :If 0∊⍴cmd.Command ⋄ cmd.Command←(1+0∊⍴cmd.Params)⊃'POST' 'GET' ⋄ :EndIf
      :If ~(⊂lc cmd.Command)∊'get' 'head'
          :If 0∊⍴cmd.ContentType ⋄ cmd.ContentType←'application/json;charset=utf-8' ⋄ :EndIf
          :If ~0∊⍴cmd.Params
              :Trap Debug↓0
                  cmd.Params←JSONexport cmd.Params
              :Else
                  →∆DONE⊣r.(rc msg)←¯1 'Could not convert parameters to JSON format'
              :EndTrap
          :EndIf
      :EndIf
      r←cmd.Run
      →cmd.RequestOnly⍴∆EXIT
     
      :If r.rc=0
          →∆DONE⍴⍨204=r.HttpStatus ⍝ exit if "no content" HTTP status
          :If ¯1=r.BytesWritten ⍝ if not writing to file
              :If ∨/'application/json'⍷lc r.Headers getHeader'content-type'
                  JSONimport r
              :Else ⋄ →∆DONE⊣r.(rc msg)←¯2 'Response content-type is not application/json'
              :EndIf
          :EndIf
      :EndIf
     ∆DONE: ⍝ reset ⎕DF if messages have changed
      setDisplayFormat r
     ∆EXIT:
    ∇

    ∇ r←{ro}Fix args;z;url;target
    ⍝ retrieve and fix APL code loads the latest version from GitHub
    ⍝ args is:
    ⍝  [1] URL of code to fix - if the URL has 'github' (but not 'raw.githubusercontent.com') in it, we do some gratuitous massaging
    ⍝  [2] (optional) reference to namespace in which to fix the code (default ##)
    ⍝ example: HttpCommand.Fix 'github/Dyalog/Jarvis/Source/Jarvis.dyalog' #.
      :Access public shared
      (url target)←2↑(,⊆args),##
      :If 0=⎕NC'ro' ⋄ ro←0 ⋄ :EndIf
      r←z←ro Get{ ⍝ convert url if necessary
          ~∨/'github'⍷⍵:⍵ ⍝ if not github just
          ∨/'raw.githubusercontent.com'⍷⍵:⍵ ⍝ already refers to
          t←'/'(≠⊆⊢)⍵
          i←⍸<\∨/¨'github'∘⍷¨t
          'https://raw.githubusercontent.com',∊'/',¨(2↑i↓t),(⊂'master'),(2+i)↓t
      }url
      →ro⍴0
      :If z.rc≠0
          r←z.(rc msg)
      :ElseIf z.HttpStatus≠200
          r←¯1(⍕z)
      :Else
          :Trap 0
              r←0(⍕target{0::⍺.⎕FX ⍵ ⋄ ⍺.⎕FIX ⍵}{⍵⊆⍨~⍵∊⎕UCS 13 10 65279}z.Data)
          :Else
              r←¯1('Could not ⎕FIX file: ',2↓∊': '∘,¨⎕DMX.(EM Message))
          :EndTrap
      :EndIf
    ∇

    ∇ r←Init
      :Access Public
      r←(Initialize initResult ⎕NS'').(rc msg)
      r[1]×←~0∊⍴2⊃r ⍝ set to 0 if no error message from Conga initialization
    ∇

    ∇ r←Initialize r;ref;root;nc;n;ns;congaCopied;class;path
      ⍝↓↓↓ Check if LDRC exists (VALUE ERROR (6) if not), and is LDRC initialized? (NONCE ERROR (16) if not)
      r.msg←''
      :Hold 'HttpCommandInit'
          :If {6 16 999::1 ⋄ ''≡LDRC:1 ⋄ 0⊣LDRC.Describe'.'}''
              LDRC←''
              :If ~0∊⍴CongaRef  ⍝ did the user supply a reference to Conga?
                  :If 0∊⍴LDRC←r ResolveCongaRef CongaRef
                      r.msg,⍨←'Could not initialize Conga using CongaRef "',(⍕CongaRef),'" due to '
                      →∆END
                  :EndIf
              :Else
                  :For root :In ## #
                      ref nc←root{1↑¨⍵{(×⍵)∘/¨⍺ ⍵}⍺.⎕NC ⍵}ns←'Conga' 'DRC'
                      :If 9=⊃⌊nc ⋄ :Leave ⋄ :EndIf
                  :EndFor
     
                  :If 9=⊃⌊nc
                      :If 0∊⍴LDRC←r ResolveCongaRef(root⍎∊ref)
                          →∆END⊣r.msg,⍨←'Could not initialize Conga from "',(∊(⍕root)'.'ref),'" due to '
                      :EndIf
                      →∆COPY↓⍨{999::0 ⋄ 1⊣LDRC.Describe'.'}'' ⍝ it's possible that Conga was saved in a semi-initialized state
                  :Else
     ∆COPY:
                      class←⊃⊃⎕CLASS ⎕THIS
                      :If ~0∊⍴CongaPath
                          CongaPath←∊1 ⎕NPARTS CongaPath,'/'
                          →∆END↓⍨0∊⍴r.msg←(~⎕NEXISTS CongaPath)/'CongaPath "',CongaPath,'" does not exist'
                          →∆END↓⍨0∊⍴r.msg←(1≠1 ⎕NINFO CongaPath)/'CongaPath "',CongaPath,'" is not a folder'
                      :EndIf
                      congaCopied←0
                      :For n :In ns
                          :For path :In (1+0∊⍴CongaPath)⊃(⊂CongaPath)((dyalogRoot,'ws/')'') ⍝ if CongaPath specifiec, use it exclusively
                              :Trap Debug↓0
                                  n class.⎕CY path,'conga'
                                  LDRC←r ResolveCongaRef(class⍎n)
                                  :If 0∊⍴LDRC
                                      r.msg,⍨←n,' was copied from "',path,'conga", but encountered '
                                      →∆END
                                  :EndIf
                                  →∆COPIED⊣congaCopied←1
                              :EndTrap
                          :EndFor
                      :EndFor
                      →∆END↓⍨0∊⍴r.msg←(~congaCopied)/'neither Conga nor DRC were successfully copied'
     ∆COPIED:
                  :EndIf
              :EndIf
          :EndIf
          CongaVersion←LDRC.Version
          LDRC.X509Cert.LDRC←LDRC ⍝ reset X509Cert.LDRC reference
          :If 0≠⊃LDRC.SetProp'.' 'EventMode' 1
              r.msg←'Unable to set EventMode on Conga root'
          :EndIf
     ∆END:
      :EndHold
    ∇

    ∇ LDRC←r ResolveCongaRef CongaRef;failed;z
    ⍝ Attempt to resolve what CongaRef refers to
    ⍝ CongaRef can be a charvec, reference to the Conga or DRC namespaces, or reference to an iConga instance
    ⍝ LDRC is '' if Conga could not be initialized, otherwise it's a reference to the the Conga.LIB instance or the DRC namespace
     
      LDRC←'' ⋄ failed←0
      :Select nameClass CongaRef ⍝ what is it?
      :Case 9.1 ⍝ namespace?  e.g. CongaRef←DRC or Conga
     ∆TRY:
          :Trap Debug↓0
              :If 2 3≢⌊CongaRef.⎕NC'DllVer' 'Init'
                  r.msg←'it does not refer to a valid Conga interface'
                  →∆EXIT⊣LDRC←''
              :EndIf
              :If ∨/'.Conga'⍷⍕CongaRef ⍝ Conga?
                  LDRC←CongaPath CongaRef.Init'HttpCommand'
              :ElseIf 0≡⊃CongaRef.Init CongaPath ⍝ DRC?
                  LDRC←CongaRef
              :Else ⍝ should never get to here, but... (paranoia)
                  r.msg←'it does not refer to a valid Conga interface'
                  →∆EXIT⊣LDRC←''
              :End
          :Else ⍝ if HttpCommand is reloaded and re-executed in rapid succession, Conga initialization may fail, so we try twice
              :If failed
                  →∆EXIT⊣LDRC←''⊣r.msg←∊{⍺,(~0∊⍴⍵)/': ',⍵}/⎕DMX.(EM Message)
              :Else
                  →∆TRY⊣failed←1
              :EndIf
          :EndTrap
      :Case 9.2 ⍝ instance?  e.g. CongaRef←Conga.Init ''
          :If 3=⌊|CongaRef.⎕NC⊂'Clt' ⍝ if it looks like a valid Conga reference
              LDRC←CongaRef ⍝ an instance is already initialized
          :EndIf
      :Case 2.1 ⍝ variable?  e.g. CongaRef←'#.Conga'
          :Trap Debug↓0
              :If 9≠z←⎕NC⍕CongaRef
                  →∆EXIT⊣r.msg←'CongaRef ',(1+z=0)⊃'is invalid' 'was not found'
              :EndIf
              LDRC←r ResolveCongaRef(⍎∊⍕CongaRef)
          :Else
              r.msg←∊{⍺,(~0∊⍴⍵)/': ',⍵}/⎕DMX.(EM Message)
          :EndTrap
      :EndSelect
     ∆EXIT:
    ∇

    ∇ (rc secureParams)←CreateSecureParams certs;cert;flags;priority;public;private;nmt;msg;t
    ⍝ certs is:
    ⍝ cert     - X509Cert instance or (PublicCertFile PrivateKeyFile)
    ⍝ flags    - SSL flags
    ⍝ priority - GnuTLS priority
    ⍝ public   - PublicCertFile
    ⍝ private  - PrivateKeyFile
     
      certs←,⊆certs
      (cert flags priority public private)←5↑certs,(≢certs)↓'' 0 'NORMAL:!CTYPE-OPENPGP' '' ''
     
      LDRC.X509Cert.LDRC←LDRC ⍝ make sure the X509 instance points to the right LDRC
     
      :If 0∊⍴cert ⍝ if X509 (or public private) not supplied
     ∆CHECK:
    ⍝ if cert is empty, check PublicCertFile and PrivateKeyFile
          :If ∨/nmt←(~0∊⍴)¨public private ⍝ either file name not empty?
              :If ∧/nmt ⍝ if so, both need to be non-empty
                  :If ∨/t←{0::1 ⋄ ~⎕NEXISTS ⍵}¨public private ⍝ either file not exist?
                      →∆FAIL⊣msg←'Not found',4↓∊t/'PublicCertFile' 'PrivateKeyFile'{' and ',⍺,' "',(∊⍕⍵),'"'}¨public private
                  :EndIf
                  :Trap Debug↓0
                      cert←⊃LDRC.X509Cert.ReadCertFromFile public
                  :Else
                      →∆FAIL⊣msg←'Unable to decode PublicCertFile "',(∊⍕public),'" as certificate'
                  :EndTrap
                  cert.KeyOrigin←'DER'private
              :Else
                  →∆FAIL⊣msg←(⊃nmt/'PublicCertFile' 'PrivateKeyFile'),' is empty' ⍝ both must be specified
              :EndIf
          :Else
              cert←⎕NEW LDRC.X509Cert
          :EndIf
      :ElseIf 2=⍴cert ⍝ 2-element vector of public/private file names?
          public private←cert
          →∆CHECK
      :ElseIf {0::1 ⋄ 'X509Cert'≢{⊃⊢/'.'(≠⊆⊢)⍵}⍕⎕CLASS ⍵}cert
          →∆FAIL⊣msg←'Invalid certificate parameter'
      :EndIf
      secureParams←('x509'cert)('SSLValidation'flags)('Priority'priority)
      →rc←0
     ∆FAIL:(rc secureParams)←¯1 msg ⍝ failure
    ∇

    ∇ {r}←certs HttpCmd args;url;parms;hdrs;urlparms;p;b;secure;port;host;path;auth;req;err;done;data;datalen;rc;donetime;ind;len;obj;evt;dat;z;msg;timedOut;certfile;keyfile;simpleChar;defaultPort;cookies;domain;t;replace;outFile;toFile;startSize;options;congaPath;progress;starttime;outTn;secureParams;ct;forceClose;headers;cmd;file;protocol;conx;proxied;proxy;cert;noCT;simpleParms;noContentLength;connectionClose;tmpFile;tmpTn;redirected;encoding;compType;isutf8;boundary
    ⍝ issue an HTTP command
    ⍝ certs - X509Cert|(PublicCertFile PrivateKeyFile) SSLValidation Priority PublicCertFile PrivateKeyFile
    ⍝ args  - [1] HTTP method
    ⍝         [2] URL in format [HTTP[S]://][user:pass@]url[:port][/path[?query_string]]
    ⍝         {3} parameters is using POST - either a namespace or URL-encoded string
    ⍝         {4} HTTP headers in form {↑}(('hdr1' 'val1')('hdr2' 'val2'))
    ⍝         {5} cookies in form {↑}(('cookie1' 'val1')('cookie2' 'val2'))
    ⍝ Makes secure connection if left arg provided or URL begins with https:
     
    ⍝ Result: namespace containing (conga return code) (HTTP Status) (HTTP headers) (HTTP body) [PeerCert if secure]
      args←,⊆args
      (cmd url parms headers cookies)←args,(⍴args)↓'' ''(⎕NS'')'' ''
     
      :If 0∊⍴cmd ⋄ cmd←'GET' ⋄ :EndIf
     
      r←Result
      toFile←redirected←outTn←tmpTn←0 ⍝ initial settings
      tmpFile←''
     
      url←,url
      url←BaseURL makeURL url
      cmd←uc,cmd
     
    ⍝ Do some cursory parameter checking
      →∆END↓⍨0∊⍴r.msg←'No URL specified'/⍨0∊⍴url ⍝ exit early if no URL
      →∆END↓⍨0∊⍴r.msg←'URL is not a simple character vector'/⍨~isSimpleChar url
      →∆END↓⍨0∊⍴r.msg←'Cookies are not character'/⍨(0∊⍴cookies)⍱1↑isChar cookies
      →∆END↓⍨0∊⍴r.msg←'Headers are not character'/⍨(0∊⍴headers)⍱1↑isChar headers
     
      :If ~RequestOnly  ⍝ don't bother initializing Conga if only returning request
          →∆END↓⍨0∊⍴(Initialize r).msg
      :EndIf
     
     ∆GET:
     
    ⍝ do header initialization here because we may return here on a redirect
      :Trap 7
          hdrs←makeHeaders headers
      :Else
          →∆END⊣r.msg←'Improper header format'
      :EndTrap
     
      conx←ConxProps ConnectionProperties r.URL←url
      →∆END↓⍨0∊⍴r.msg←conx.msg
      (protocol secure auth host port path urlparms defaultPort)←conx.(protocol secure auth host port path urlparms defaultPort)
      secure∨←⍲/{0∊⍴⍵}¨certs[1 4] ⍝ we're also secure if we have a cert or a PublicCertFile
     
      :If proxied←~0∊⍴ProxyURL
          :If CongaVersion(~atLeast)3 4 1626 ⍝ Conga build that introduced proxy support
              →∆END⊣r.msg←'Conga version 3.4.1626 or later is required to use a proxy'
          :EndIf
          proxy←ConnectionProperties ProxyURL
          →∆END↓⍨0∊⍴r.msg←proxy.msg
          proxy.headers←makeHeaders ProxyHeaders
      :EndIf
     
      r.(Secure Host Port Path)←secure(lc host)port({{'/',¯1↓⍵/⍨⌽∨\'/'=⌽⍵}⍵↓⍨'/'=⊃⍵}path)
     
      :If ~SuppressHeaders
          hdrs←'Host'(hdrs addHeader)host,((~defaultPort)/':',⍕port)
          hdrs←'User-Agent'(hdrs addHeader)deb'Dyalog-',1↓∊'/',¨2↑Version
          hdrs←'Accept'(hdrs addHeader)'*/*'
          hdrs←'Accept-Encoding'(hdrs addHeader)'gzip, deflate'
     
          :If ~0∊⍴Auth
              :If (1<|≡Auth)∨':'∊Auth ⍝ (userid password) or userid:password
              :AndIf ('basic'≡lc AuthType)∨0∊⍴AuthType
                  Auth←Base64Encode ¯1↓∊(,⊆Auth),¨':'
                  AuthType←'Basic'
              :EndIf
              hdrs←'Authorization'(hdrs setHeader)deb AuthType,' ',⍕Auth
          :EndIf
     
          :If '∘???∘'≡hdrs getHeader'cookie' ⍝ if the user has specified a cookie header, it takes precedence
          :AndIf ~0∊⍴cookies←r applyCookies Cookies
              hdrs←'Cookie'(hdrs addHeader)formatCookies cookies
          :EndIf
     
          :If ~0∊⍴auth
              hdrs←'Authorization'(hdrs addHeader)auth
          :EndIf
     
          :If 0≠ChunkSize
              hdrs←'Transfer-Encoding'(hdrs addHeader)'chunked'
          :EndIf
     
          :If proxied
              :If ~0∊⍴ProxyAuth
                  :If (1<|≡ProxyAuth)∨':'∊ProxyAuth ⍝ (userid password) or userid:password
                  :AndIf ('basic'≡lc ProxyAuthType)∨0∊⍴ProxyAuthType
                      ProxyAuth←Base64Encode ¯1↓∊(,⊆ProxyAuth),¨':'
                      ProxyAuthType←'Basic'
                  :EndIf
                  proxy.headers←'Proxy-Authorization'(proxy.headers setHeader)deb ProxyAuthType,' ',⍕ProxyAuth
              :EndIf
              :If ~0∊⍴proxy.auth
                  proxy.headers←'Proxy-Authorization'(proxy.headers addHeader)proxy.auth
              :EndIf
          :EndIf
      :EndIf
     
      noCT←(0∊⍴ContentType)∧('∘???∘'≡hdrs getHeader'content-type') ⍝ no content-type specified
      :If noCT⍲0∊⍴parms ⍝ do we have any parameters or a content-type
          simpleParms←{2≠⎕NC'⍵':0 ⋄ 1≥|≡⍵}parms ⍝ simple vector or scalar and not a reference
     
          :If (⊆cmd)∊'GET' 'HEAD' ⍝ if the command is GET or HEAD
          :AndIf noCT
              ⍝ params needs to be URLEncoded and will be appended to the query string
              :If simpleParms
                  parms←∊⍕parms       ⍝ deal with possible numeric
                  parms←UrlEncode⍣(~∧/parms∊HttpCommand.ValidFormUrlEncodedChars)⊢parms ⍝ URLEncode if necessary
              :Else ⍝ parms is a namespace or a name/value pairs array
                  parms←UrlEncode parms
              :EndIf
     
              urlparms,←(0∊⍴urlparms)↓'&',parms
              parms←''
     
          :Else ⍝ not a GET or HEAD command or content-type has been specified
              :If ~SuppressHeaders
                  :If noCT ⍝ no content-type specified, try to work out what it should be
                      :If simpleParms ⍝ if parms is simple
                          :If (isJSON parms)∨isNum parms ⍝ and looks like JSON or is numeric
                              hdrs←'Content-Type'(hdrs addHeader)'application/json;charset=utf-8'
                          :Else
                              hdrs←'Content-Type'(hdrs addHeader)'application/x-www-form-urlencoded'
                          :EndIf
                      :Else ⍝ not simpleParms
                          hdrs←'Content-Type'(hdrs addHeader)'application/json;charset=utf-8'
                      :EndIf
                  :ElseIf ~0∊⍴ContentType ⍝ ContentType has been specified
                      hdrs←'Content-Type'(hdrs setHeader)ContentType ⍝ it overrides a pre-existing content-type header
                  :EndIf
              :EndIf
     
              simpleChar←{1<≢⍴⍵:0 ⋄ (⎕DR ⍵)∊80 82}parms
     
              :Select ⊃';'(≠⊆⊢)lc hdrs getHeader'Content-Type'
              :Case 'application/x-www-form-urlencoded'
                  :If ~simpleChar ⍝ if not simple character...
                  :OrIf ~∧/parms∊ValidFormUrlEncodedChars ⍝ or not valid URL-encoded
                      parms←UrlEncode parms ⍝ encode it
                  :EndIf
              :Case 'application/json'
                  :If ~isJSON parms ⍝ if it's not already JSON
                      parms←JSONexport parms ⍝ JSONify it
                  :Else
                      parms←SafeJSON parms
                  :EndIf
              :Case 'multipart/form-data'
                  :If 9.1≠nameClass parms ⍝ must be a namespace
                      →∆END⊣r.msg←'Params must be a namespace when using "multipart/form-data" content type'
                  :Else
                      boundary←50{⍵[?⍺⍴≢⍵]}⎕D,⎕A,⎕C ⎕A
                      hdrs←'Content-Type'(hdrs setHeader)'multipart/form-data; boundary=',boundary
                      (parms msg)←boundary multipart parms
                      :If ~0∊⍴msg
                          →∆END⊣r.msg←msg
                      :EndIf
                  :EndIf
              :Else
                  parms←∊⍕parms
              :EndSelect
     
              :Select UseZip
              :Case 1 ⍝ gzip
                  :Trap 0
                      parms←toChar 2⊃3 ZipLevel Zipper sint parms
                      hdrs←'Content-Encoding'(hdrs setHeader)'gzip'
                  :Else
                      r.msg←'gzip encoding on request payload failed'
                  :EndTrap
              :Case 2 ⍝ deflate
                  :Trap 0
                      parms←toChar 2⊃2 ZipLevel Zipper sint parms
                      hdrs←'Content-Encoding'(hdrs setHeader)'deflate'
                  :Else
                      r.msg←'deflate encoding on request payload failed'
                  :EndTrap
              :EndSelect
     
              :If RequestOnly>SuppressHeaders ⍝ Conga supplies content-length, but for RequestOnly we need to insert it
              :AndIf 0=ChunkSize
                  hdrs←'Content-Length'(hdrs addHeader)⍕⍴parms
              :EndIf
          :EndIf
      :EndIf
     
      hdrs⌿⍨←~0∊¨≢¨hdrs[;2] ⍝ remove any headers with empty values
     
      :If 0≠ChunkSize
          parms←ChunkSize Chunk parms
      :EndIf
     
      :If RequestOnly
          r←cmd,' ',(path,(0∊⍴urlparms)↓'?',urlparms),' HTTP/1.1',(∊{NL,⍺,': ',∊⍕⍵}/privatize environment hdrs),NL,NL,parms
          →∆EXIT
      :EndIf
     
      (outFile replace)←2↑{⍵,(≢⍵)↓'' 0}eis OutFile
      :If 0=outTn ⍝ if we don't already have an output file tied
          :If toFile←~0∊⍴outFile ⍝ if we're directing the response payload to file
              :Trap Debug↓0
                  outFile←1 ⎕NPARTS outFile
                  :If ~⎕NEXISTS⊃outFile
                      →∆END⊣r.msg←'Output file folder "',(⊃outFile),'" does not exist'
                  :EndIf
                  :If 0∊⍴∊1↓outFile ⍝ no file name specified, try to use the name from the URL
                      :If ~0∊⍴file←∊1↓1 ⎕NPARTS path
                          outFile←(⊃outFile),file
                      :Else ⍝ no file name specified and none in the URL
                          →∆END⊣r.msg←'No file name specified in OutFile or URL'
                      :EndIf
                  :EndIf
                  :If ⎕NEXISTS outFile←∊outFile
                      :If (0=replace)∧0≠2 ⎕NINFO outFile
                          →∆END⊣r.msg←'Output file "',outFile,'" is not empty'
                      :Else
                          outTn←outFile ⎕NTIE 0
                          {}0 ⎕NRESIZE⍣(1=replace)⊢outTn
                      :EndIf
                  :Else
                      outTn←outFile ⎕NCREATE 0
                  :EndIf
                  startSize←⎕NSIZE outTn
                  r.OutFile←outFile
                  tmpFile←tempFolder,'/',(∊1↓1 ⎕NPARTS outFile) ⍝ create temporary file to work with
                  tmpTn←tmpFile(⎕NCREATE⍠'Unique' 1)0 ⍝ create with a unique name
                  tmpFile←∊1 ⎕NPARTS ⎕NNAMES[⎕NNUMS⍳tmpTn;] ⍝ save the name for ⎕NDELETE later
              :Else
                  →∆END⊣r.msg←({⍺,(~0∊⍴⍵)/' (',⍵,')'}/⎕DMX.(EM Message)),' occurred while trying to initialize output file "',(⍕outFile),'"'
              :EndTrap
          :EndIf
      :EndIf
     
      secureParams←''
      :If secure
      :AndIf 0≠⊃(rc secureParams)←CreateSecureParams certs
          →∆END⊣r.(rc msg)←rc secureParams
      :EndIf
     
      :If proxied
          proxy.secureParams←''
          :If proxy.secure
          :AndIf 0≠⊃(rc proxy.secureParams)←CreateSecureParams'' 0
              →∆END⊣r.(rc msg)←rc('PROXY: ',proxy.secureParams)
          :EndIf
      :EndIf
     
      stopIf Debug=2
     
      :If ~0∊⍴Client                    ⍝ do we have a client already?
          :If 0∊⍴ConxProps              ⍝ should never happen (have a client but no connection properties)
              Client←''                 ⍝ reset client
          :ElseIf ConxProps.(Host Port Secure certs)≢r.(Host Port Secure),⊂certs ⍝ something's changed, reset
          ⍝ don't set message for same domain
              r.msg←(ConxProps.Host≢over{lc ¯2↑'.'(≠⊆⊢)⍵}r.Host)/'Connection properties changed, connection reset'
              {}{0::'' ⋄ LDRC.Close ⍵}Client
              Client←ConxProps←''
          :ElseIf 'Timeout'≢3⊃LDRC.Wait Client 0 ⍝ nothing changed, make sure client is alive
              Client←ConxProps←'' ⍝ connection dropped, reset
          :EndIf
      :EndIf
     
      starttime←⎕AI[3]
      donetime←⌊starttime+1000×|Timeout ⍝ time after which we'll time out
     
      :If 0∊⍴Client
          options←''
          :If CongaVersion atLeast 3 3
              options←⊂'Options'LDRC.Options.DecodeHttp
          :EndIf
     
          :If ~proxied
              :If 0≠⊃(err Client)←2↑rc←LDRC.Clt''host port'http'BufferSize,secureParams,options
                  Client←''
                  →∆END⊣r.(rc msg)←err('Conga client creation failed ',,⍕1↓rc)
              :EndIf
          :Else ⍝ proxied
              forceClose←1 ⍝ any error forces client to close, forceClose gets reset later if no proxy connection errors
              ⍝ connect to proxy
              :If 0≠⊃(err Client)←2↑rc←LDRC.Clt''proxy.host proxy.port'http'BufferSize proxy.secureParams,options
                  Client←''
                  →∆END⊣r.(rc msg)←err('Conga proxy client creation failed ',,⍕1↓rc)
              :EndIf
     
              ⍝ connect to proxied host
              :If 0≠err←⊃rc←LDRC.Send Client('CONNECT'(host,':',⍕port)'HTTP/1.1'proxy.headers'')
                  →∆END⊣r.(rc msg)←err('Proxy CONNECT failed: ',⍕1↓rc)
              :EndIf
     
              :If 0≠err←⊃rc←LDRC.Wait Client 1000
                  →∆END⊣r.(rc msg)←err('Proxy CONNECT wait failed: ',∊⍕1↓rc)
              :Else
                  (err obj evt dat)←4↑rc
                  :If evt≢'HTTPHeader'
                      →∆END⊣r.(rc msg)←err('Proxy CONNECT did not respond with HTTPHeader event: ',∊⍕1↓rc)
                  :EndIf
                  :If '200'≢2⊃dat
                      r.(msg HttpStatus HttpMessage Headers)←(⊂'Proxy CONNECT response failed'),1↓dat
                      r.HttpStatus←⊃toInt r.HttpStatus
                      datalen←⊃toInt{0∊⍴⍵:'¯1' ⋄ ⍵}r.GetHeader'Content-Length' ⍝ ¯1 if no content length not specified
                      →(datalen≠0)↓∆END,∆LISTEN
                  :EndIf
              :EndIf
     
              ⍝ if secure, upgrade to SSL
              :If proxied∧secure
                  cert←1 2⊃secureParams
              :AndIf 0≠err←⊃rc←LDRC.SetProp Client'StartTLS'(cert.AsArg,('SSLValidation' 0)('Address'host))
                  →∆END⊣r.(rc msg)←err('Proxy failed to upgrade to secure connection: ',∊⍕1↓rc)
              :EndIf
          :EndIf
     
          :If CongaVersion(~atLeast)3 3
          :AndIf 0≠err←⊃rc←LDRC.SetProp Client'DecodeBuffers' 15 ⍝ set to decode HTTP messages
              →∆END⊣r.(rc msg)←err('Could not set DecodeBuffers on Conga client "',Client,'": ',,⍕1↓rc)
          :EndIf
      :EndIf
     
      (ConxProps←⎕NS'').(Host Port Secure certs)←r.(Host Port Secure),⊂certs ⍝ preserve connection settings for subsequent calls
     
      :If 0=⊃rc←LDRC.Send Client(cmd(path,(0∊⍴urlparms)↓'?',urlparms)'HTTP/1.1'(environment hdrs)parms)
     
     ∆LISTEN:
          forceClose←~KeepAlive
          (timedOut done data progress noContentLength connectionClose)←0 0 ⍬ 0 0 0
     
          :Trap 1000 ⍝ in case break is pressed while listening
              :While ~done
                  :If ~done←0≠err←1⊃rc←LDRC.Wait Client WaitTime
                      (err obj evt dat)←4↑rc
                      :Select evt
                      :Case 'HTTPHeader'
                          :If 1=≡dat
                              →∆END⊣r.(rc Data msg)←¯1 dat'Conga failed to parse the response HTTP header' ⍝ HTTP header parsing failed?
                          :Else
                              r.(HttpVersion HttpStatus HttpMessage Headers)←4↑dat
                              r.HttpStatus←toInt r.HttpStatus
                              redirected←3=⌊0.01×r.HttpStatus
                              datalen←⊃toInt{0∊⍴⍵:'¯1' ⋄ ⍵}r.GetHeader'Content-Length' ⍝ ¯1 if no content length not specified
                              connectionClose←'close'≡lc r.GetHeader'Connection'
                              noContentLength←datalen=¯1
                              done←(cmd≡'HEAD')∨(0=datalen)∨204=r.HttpStatus
                              →∆END⍴⍨forceClose←r CheckPayloadSize datalen             ⍝ we have a payload size limit
                          :EndIf
                      :Case 'HTTPBody'
                          →∆END⍴⍨forceClose←r CheckPayloadSize(≢data)+≢dat
                          :If toFile>redirected ⍝ don't write redirect response payload to file
                              →∆END⍴⍨forceClose←r CheckPayloadSize(⎕NSIZE tmpTn)+≢dat
                              dat ⎕NAPPEND tmpTn
                              ⎕NUNTIE ⍬
                          :Else
                              data,←dat
                          :EndIf
                          done←~noContentLength ⍝ if not content-length specified and not chunked - keep listening
                      :Case 'HTTPChunk'
                          :If 1=≡dat
                              →∆END⊣r.(Data msg)←dat'Conga failed to parse the response HTTP chunk' ⍝ HTTP chunk parsing failed?
                          :ElseIf toFile>redirected ⍝ don't write redirect response payload to file
                              →∆END⍴⍨forceClose←r CheckPayloadSize(⎕NSIZE tmpTn)+≢1⊃dat
                              (1⊃dat)⎕NAPPEND tmpTn
                              ⎕NUNTIE ⍬
                          :Else
                              →∆END⍴⍨forceClose←r CheckPayloadSize(≢data)+≢1⊃dat
                              data,←1⊃dat
                          :EndIf
                      :Case 'HTTPTrailer'
                          :If 2≠≢⍴dat
                              →∆END⊣r.(Data msg)←dat'Conga failed to parse the response HTTP trailer' ⍝ HTTP trailer parsing failed?
                          :Else
                              r.Headers⍪←dat ⋄ done←1
                          :EndIf
                      :Case 'HTTPFail'
                          data,←dat
                          r.Data←data
                          r.msg←'Conga could not parse the HTTP reponse'
                          →∆END
                      :Case 'HTTPError'
                          data,←dat
                          r.Data←data
                          :If noContentLength∧connectionClose
                              r.(rc msg)←0 ''
                              done←1
                          :Else
                              rc.msg←'Response payload not completely received'
                              →∆END
                          :EndIf
                      :Case 'BlockLast' ⍝ BlockLast included for pre-Conga v3.4 compatibility for RFC7230 (Sec 3.3.3 item 7)
                          →∆END⍴⍨forceClose←r CheckPayloadSize(≢data)+≢dat
                          :If toFile<redirected
                              →∆END⍴⍨forceClose←r CheckPayloadSize(⎕NSIZE tmpTn)+≢dat
                              dat ⎕NAPPEND tmpTn
                              ⎕NUNTIE ⍬
                          :Else
                              data,←dat
                          :EndIf
                          done←1
                      :Case 'Timeout'
                          timedOut←⊃(done donetime progress)←Client checkTimeOut donetime progress
                      :Case 'Error'
                          :Select ⊃r.rc←4⊃rc
                          :Case 1135
                              r.msg←'Response header size exceeds BufferSize (',(⍕BufferSize),')'
                          :Else
                              r.msg←'Conga error processing your request: ',,⍕r.rc
                          :EndSelect
                          →∆END⊣forceClose←1
                      :Case 'Closed'
                          r.msg←'Socket closed by server'
                          done←forceClose←1
                          :If 0∊⍴r.HttpStatus
                              →∆END⊣r.rc←4⊃rc ⍝ set return code if closed before receiving HTTPHeader event
                          :EndIf
                      :Else
                          →∆END⊣r.msg←'Unhandled Conga event type: ',evt ⍝ This shouldn't happen
                      :EndSelect
                  :Else
                      r.msg←'Conga wait error ',,⍕rc ⍝ some other error (very unlikely)
                  :EndIf
              :EndWhile
          :EndTrap
     
          r.Elapsed←⎕AI[3]-starttime
     
          :If timedOut
              forceClose←1
              r.(rc msg)←100 'Request timed out before server responded'
              r.Data←data ⍝ return any partial payload
              →∆END
          :EndIf
     
          forceClose∨←connectionClose ⍝ if there's a 'Connection: close' header
     
          :If 0=err
              ct←lc r.GetHeader'content-type'
              isutf8←0<≢'charset\s*=\s*utf-8'⎕S'&'⍠1⊢ct←lc r.GetHeader'content-type'
              isutf8∨←(∨/'application/json'⍷ct)∧~∨/'charset'⍷ct ⍝ application/json defaults to UTF-8 unless other charset specified
              encoding←lc r.GetHeader'content-encoding' ⍝ response payload compressed?
              compType←¯2 ¯3 0['deflate' 'gzip'⍳⊂encoding]
     
     
              :If toFile≤redirected
                  :Trap Debug↓0 ⍝ If any errors occur, abandon conversion
                      :If ~0∊⍴data
                          :If ~0∊⍴encoding
                              :If 0≠compType
                                  data←256|compType Zipper 83 ⎕DR data ⍝ unzip
                                  data←⎕UCS data ⍝ try to translate
                              :Else
                                  r.msg←'Unhandled content-encoding: ',compType,', could not decode response payload'
                              :EndIf
                          :EndIf
                      :EndIf
     
                      :If isutf8
                          data←'UTF-8'⎕UCS ⎕UCS data
                          data←(65279=⎕UCS⊃data)↓data ⍝ drop off BOM, if any
                      :EndIf
                  :Else
                      r.rc←⎕DMX.EN
                      r.msg←⎕DMX.EM,' occurred during response payload conversion (Data was not converted)'
                      r.Data←data
                      →∆END
                  :EndTrap
     
                  :If TranslateData=1
                      :If ∨/∊'text/xml' 'application/xml'⍷¨⊂ct
                          r{0::⍺.(rc Data msg)←¯2 ⍵'Could not translate XML payload' ⋄ ⍺.Data←⎕XML ⍵}data
                      :ElseIf ∨/'application/json'⍷ct
                          r.Data←data
                          JSONimport r
                      :Else
                          r.Data←data
                      :EndIf
                  :Else
                      r.Data←data
                  :EndIf
     
              :Else ⍝ toFile and not redirected
                  :If ~0∊⍴encoding ⍝ content-encoding header?
                      :If 0≠compType
                          :If 0≠z←compType UnzipFile tmpTn
                              r.msg←(⎕EM z),' occurred when attempting to decompress response payload'
                          :EndIf
                      :Else
                          r.msg←'Unhandled content-encoding: ',compType,', could not decode response payload'
                      :EndIf
                  :EndIf
                  r.BytesWritten←⎕NSIZE tmpTn
                  (⎕NREAD tmpTn,83,(r.BytesWritten),0)⎕NAPPEND outTn
              :EndIf ⍝ ~toFile
     
              r.Cookies←parseCookies r.Headers r.Host(extractPath r.Path)
              Cookies←Cookies updateCookies r.Cookies
     
              :If (r.HttpStatus∊301 302 303 307 308)>0=MaxRedirections ⍝ if redirected and allowing redirections
                  :If MaxRedirections<.=¯1,≢r.Redirections ⋄ →∆END⊣r.(rc msg)←¯1('Too many redirections (',(⍕MaxRedirections),')')
                  :Else
                      :If ''≢url←r.GetHeader'location' ⍝ if we were redirected use the "location" header field for the URL
                          :If '/'=⊃url ⋄ url,⍨←host ⋄ :EndIf ⍝ if a relative redirection, use the current host
                          r.Redirections,←t←#.⎕NS''
                          t.(URL HttpVersion HttpStatus HttpMessage Headers Data)←r.(URL HttpVersion HttpStatus HttpMessage Headers Data)
                          {}LDRC.Close Client
                          cmd←(1+303=r.HttpStatus)⊃cmd'GET' ⍝ 303 (See Other) is always followed by a 'GET'. See https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/303
                          →∆GET
                      :Else
                          r.msg←'Redirection detected, but no "location" header supplied.' ⍝ should never happen from a properly functioning server
                      :EndIf
                  :EndIf
              :EndIf
              :If secure
              :AndIf 0=⊃z←LDRC.GetProp Client'PeerCert'
                  r.PeerCert←2⊃z
              :EndIf
          :EndIf
      :Else
          :If 1081=⊃rc ⍝ 1081 could be due to an error in Conga that fails on long URLs, so try sending request as a character vector
              :If 0=⊃rc←LDRC.Send Client(cmd,' ',(path,(0∊⍴urlparms)↓'?',urlparms),' HTTP/1.1',NL,(∊': 'NL,⍨¨⍤1⊢hdrs),NL,parms)
                  →∆LISTEN
              :EndIf
          :EndIf
          r.msg←'Conga error while attempting to send request: ',,⍕1↓rc
      :EndIf
      r.rc←1⊃rc ⍝ set the return code to the Conga return code
     ∆END:
      ⎕NUNTIE tmpTn,outTn
      {0:: ⋄ ⎕NDELETE ⍵}tmpFile
      Client←{0::'' ⋄ KeepAlive>forceClose:⍵ ⋄ ''⊣LDRC.Close ⍵}Client
     ∆EXIT:
    ∇

    ∇ r←size Chunk payload;l;n;last;lens;hlens;mask
      :Access public shared
    ⍝ Split payload into chunks for chunked transfer-encoding
      l←≢payload ⍝ payload length
      n←⌊l÷size  ⍝ number of whole chunk
      last←l-n×size ⍝ size of last chunk
      lens←(n⍴size),last,(last≠0)/0 ⍝ chunk lengths + 0 for terminating chunk
      hlens←d2h¨lens ⍝ hex lengths
      mask←0 1 0(⊢⊢⍤/(⍴⊢)⍴⊣),(2+≢¨hlens),lens,[1.1]2 ⍝ expansion mask
      r←mask\payload ⍝ expand payload
      r[⍸~mask]←2⌽∊NL∘,¨hlens,¨⊂NL ⍝ insert chunk information
    ∇

    ∇ rc←r CheckPayloadSize size
    ⍝ checks if payload exceeds MaxPayloadSize
      rc←0
      :If MaxPayloadSize≠¯1
      :AndIf size>MaxPayloadSize
          r.(rc msg)←¯1 'Payload length exceeds MaxPayloadSize'
          rc←1
      :EndIf
    ∇

    ∇ (timedOut donetime progress)←obj checkTimeOut(donetime progress);tmp;snap
    ⍝ check if request has timed out
      →∆EXIT↓⍨timedOut←⎕AI[3]>donetime ⍝ exit unless donetime hasn't passed
      →∆EXIT↓⍨Timeout<0                ⍝ if Timeout<0, reset donetime if there's progress
      →∆EXIT↓⍨0=⊃tmp←LDRC.Tree obj     ⍝ look at the current state of the connection
      snap←2 2⊃tmp                     ⍝ second element shoulf contain the state
      :If ~0∊⍴snap                     ⍝ if we have any...
          snap←(⊂∘⍋⌷⊢)↑(↑2 2⊃tmp)[;1]  ⍝ ...progress should be in elements [4 5]
      :EndIf
      →∆EXIT⍴⍨progress≡snap            ⍝ exit if nothing further received
      (timedOut donetime progress)←0(donetime+WaitTime)snap ⍝ reset ticker
     ∆EXIT:
    ∇

    ∇ {r}←type UnzipFile tn;data
      :Access public shared
    ⍝ Unzip an output file
    ⍝ type is compression type: ¯2 for gzip, ¯3 for deflate
    ⍝ tn is the tie number of the file to unzip
    ⍝ r is 0 for success or ⎕EN
      :Trap 0
          data←⎕NREAD tn 83,(⎕NSIZE tn),0
          data←⎕UCS 256|type Zipper data
          0 ⎕NRESIZE tn
          data ⎕NAPPEND tn
          ⎕NUNTIE ⍬
          r←0
      :Else
          r←⎕EN
      :EndTrap
    ∇

    ∇ (payload msg)←boundary multipart parms;name;value;filename;contentType;content;fileName
    ⍝ format multipart/form-data payload
    ⍝ parms is a namespace with named objects
    ⍝
      msg←payload←''
      :For name :In parms.⎕NL ¯2
          payload,←'--',boundary
          (value contentType fileName)←3↑(⊆parms⍎name),'' ''
          payload,←NL,'Content-Disposition: form-data; name="',name,'"'
          :If '@<'∊⍨⊃value
              :If ⎕NEXISTS 1↓value
              :AndIf 2=1 ⎕NINFO 1↓value
                  payload,←('@'=⊃value)/'; filename="',(∊¯2↑1 ⎕NPARTS value),'"'
                  (contentType content)←contentType readFile 1↓value
                  payload,←NL,'Content-Type: ',contentType,NL,NL
                  payload,←content,NL
              :Else
                  →0⊣msg←'File not found: "',(1↓value),'"'
              :EndIf
          :Else
              payload,←(~0∊⍴fileName)/'; filename="',(∊¯2↑1 ⎕NPARTS fileName),'"'
              payload,←(~0∊⍴contentType)/NL,'Content-Type: ',contentType
              payload,←NL,NL,(∊⍕value),NL
          :EndIf
      :EndFor
      payload,←'--',boundary,'--'
    ∇

    ∇ (contentType content)←contentType readFile filename;ext;tn
    ⍝ return file content in a manner consistent with multipart/form-data
      :Access public shared
      :If 0∊⍴contentType
          ext←⎕C 3⊃1 ⎕NPARTS filename
          :If ext≡'.txt' ⋄ contentType←'text/plain'
          :Else ⋄ contentType←'application/octet-stream'
          :EndIf
      :EndIf
      tn←filename ⎕NTIE 0
      content←⎕NREAD tn,(⎕DR''),¯1
      ⎕NUNTIE tn
    ∇

    NL←⎕UCS 13 10
    toChar←{(⎕DR'')⎕DR ⍵}
    fromutf8←{0::(⎕AV,'?')[⎕AVU⍳⍵] ⋄ 'UTF-8'⎕UCS ⍵} ⍝ Turn raw UTF-8 input into text
    utf8←{3=10|⎕DR ⍵: 256|⍵ ⋄ 'UTF-8' ⎕UCS ⍵}
    sint←{⎕IO←0 ⋄ 83=⎕DR ⍵:⍵ ⋄ 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 ¯128 ¯127 ¯126 ¯125 ¯124 ¯123 ¯122 ¯121 ¯120 ¯119 ¯118 ¯117 ¯116 ¯115 ¯114 ¯113 ¯112 ¯111 ¯110 ¯109 ¯108 ¯107 ¯106 ¯105 ¯104 ¯103 ¯102 ¯101 ¯100 ¯99 ¯98 ¯97 ¯96 ¯95 ¯94 ¯93 ¯92 ¯91 ¯90 ¯89 ¯88 ¯87 ¯86 ¯85 ¯84 ¯83 ¯82 ¯81 ¯80 ¯79 ¯78 ¯77 ¯76 ¯75 ¯74 ¯73 ¯72 ¯71 ¯70 ¯69 ¯68 ¯67 ¯66 ¯65 ¯64 ¯63 ¯62 ¯61 ¯60 ¯59 ¯58 ¯57 ¯56 ¯55 ¯54 ¯53 ¯52 ¯51 ¯50 ¯49 ¯48 ¯47 ¯46 ¯45 ¯44 ¯43 ¯42 ¯41 ¯40 ¯39 ¯38 ¯37 ¯36 ¯35 ¯34 ¯33 ¯32 ¯31 ¯30 ¯29 ¯28 ¯27 ¯26 ¯25 ¯24 ¯23 ¯22 ¯21 ¯20 ¯19 ¯18 ¯17 ¯16 ¯15 ¯14 ¯13 ¯12 ¯11 ¯10 ¯9 ¯8 ¯7 ¯6 ¯5 ¯4 ¯3 ¯2 ¯1[utf8 ⍵]}
    lc←{2::0(819⌶)⍵ ⋄ ¯3 ⎕C ⍵} ⍝ lower case conversion
    uc←{2::1(819⌶)⍵ ⋄ 1 ⎕C ⍵}  ⍝ upper case conversion
    ci←{(lc ⍺)⍺⍺ lc ⍵} ⍝ case insensitive operator
    deb←' '∘(1↓,(/⍨)1(⊢∨⌽)0,≠) ⍝ delete extraneous blanks
    dlb←{(+/∧\' '=⍵)↓⍵} ⍝ delete leading blanks
    dltb←{(⌽dlb)⍣2⊢⍵} ⍝ delete leading and trailing blanks
    iotaz←((≢⊣)(≥×⊢)⍳)
    nameClass←{⎕NC⊂,'⍵'} ⍝ name class of argument
    splitOnFirst←{(⍺↑⍨¯1+p)(⍺↓⍨p←⌊/⍺⍳⍵)} ⍝ split ⍺ on first occurrence of ⍵ (removing first ⍵)
    splitOn←≠⊆⊣ ⍝ split ⍺ on all ⍵ (removing ⍵)
    h2d←{⎕IO←0 ⋄ 16⊥'0123456789abcdef'⍳lc ⍵} ⍝ hex to decimal
    d2h←{⎕IO←0 ⋄ '0123456789ABCDEF'[((1∘⌈≢)↑⊢)16(⊥⍣¯1)⍵]} ⍝ decimal to hex
    getchunklen←{¯1=len←¯1+⊃(NL⍷⍵)/⍳⍴⍵:¯1 ¯1 ⋄ chunklen←h2d len↑⍵ ⋄ (⍴⍵)<len+chunklen+4:¯1 ¯1 ⋄ len chunklen}
    toInt←{0∊⍴⍵:⍬ ⋄ ~3 5∊⍨10|⎕DR t←1⊃2⊃⎕VFI ⍕⍵:⍬ ⋄ t≠⌊t:⍬ ⋄ t} ⍝ simple char to int
    fmtHeaders←{0∊⍴⍵:'' ⋄ (firstCaps¨⍵[;1])(,∘⍕¨⍵[;2])} ⍝ formatted HTTP headers
    firstCaps←{1↓uc@(¯1↓0,'-'∘=)lc '-',⍵} ⍝ capitalize first letters e.g. Content-Encoding
    getHeader←{⍺{1<|≡⍵:⍺∘∇¨⍵ ⋄ (⍺[;2],⊂'∘???∘')⊃⍨⍺[;1](⍳{(⍵⍵ ⍺)⍺⍺(⍵⍵ ⍵)}lc)⊆,⍵}⍵} ⍝ return header value(s) or '∘???∘' if not found
    tableGet←{⍺[;2]/⍨⍺[;1](≡ ci)¨⊂⍵}
    endsWith←{∧/⍵=⍺↑⍨-≢⍵}
    beginsWith←{∧/⍵=⍺↑⍨≢⍵}
    extractPath←{⍵↑⍨1⌈¯1+⊢/⍸'/'=⍵}∘,
    isChar←{1≥|≡⍵:0 2∊⍨10|⎕DR {⊃⍣(0∊⍴⍵)⊢⍵}⍵ ⋄ ∧/∇¨⍵}
    isSimpleChar←{1≥|≡⍵: isChar ⍵ ⋄ 0}
    isNum←{1 3 5 7∊⍨10|⎕DR ⍵}
    over←{(⍵⍵ ⍺)⍺⍺(⍵⍵ ⍵)}
    isJSON←{~0 2∊⍨10|⎕DR ⍵:0 ⋄ ~(⊃⍵)∊'-{["',⎕D:0 ⋄ {0::0 ⋄1⊣0 ⎕JSON ⍵}⍵} ⍝ test for JSONableness fails on APL that looks like JSON (e.g. '"abc"')
    stopIf←{1∊⍵:-⎕TRAP←0 'C' '⎕←''Stopped for debugging... (Press Ctrl-Enter)''' ⋄ shy←0} ⍝ faster alternative to setting ⎕STOP
    seconds←{⍵÷86400} ⍝ convert seconds to fractional day (for cookie max-age)
    atLeast←{a←(≢⍵)↑⍺ ⋄ ⊃((~∧\⍵=a)/a>⍵),1} ⍝ checks if ⍺ is at least version ⍵
    Zipper←219⌶
    tempFolder←739⌶0

      makeURL←{ ⍝ build URL from BaseURL (⍺) and URL (⍵)
          ~0∊⍴'^https?\:\/\/'⎕S 3⍠('IC' 1)⊢⍵:⍵  ⍝ URL begins with http:// or https://
          0∊⍴⍺:⍵        ⍝ no BaseURL
          t←'/'=⊃⍵      ⍝ URL begins with '/'?
          '/'=⊃⌽⍺:⍺,t↓⍵ ⍝ BaseURL ends with '/'
          ⍺,t↓'/',⍵     ⍝ insert '/' if not already there
      }

    ∇ r←makeHeaders w
      r←{
          0::¯1            ⍝ any error
          ¯1∊⍵:⍵
          0∊⍴⍵:0 2⍴⊂''     ⍝ empty
          1≥|≡⍵:∇{         ⍝ simple array
              2=⍴⍵:1⊂⍵     ⍝ degenerate case of scalar name and value ('n' 'v' ≡ 'nv')
              dlb¨¨((,⍵)((~∊)⊆⊣)NL)splitOnFirst¨':'
          }⍵
          2=⍴⍴⍵:{          ⍝ matrix
              0∊≢¨⍵[;1]:¯1 ⍝ no empty names
              0 1 1/0,,¨⍵  ⍝ ensure it's 2 columns
          }⍵
          3=|≡⍵:∇{         ⍝ depth 3
              2|≢⊃,/⍵:¯1   ⍝ ensure an even number of element
              ↑⍵
          }(eis,)¨⍵
          2=|≡⍵:∇{
              ∧/':'∊¨⍵:⍵ splitOnFirst¨':'
              ((0.5×⍴⍵),2)⍴⍵
          }⍵
          ¯1
      }w
      'Invalid Headers format'⎕SIGNAL 7/⍨r≡¯1
    ∇

    ∇ r←JSONexport data
      :Trap 11
          r←SafeJSON 1(3⊃⎕RSI,##).⎕JSON data ⍝ attempt to export
      :Else
          r←SafeJSON 1(3⊃⎕RSI,##).⎕JSON⍠'HighRank' 'Split'⊢data ⍝ Dyalog v18.0 and later
      :EndTrap
    ∇

      JSONimport←{
          0::⍵.(rc msg)←¯2 'Could not translate JSON payload'
          11::⍵.Data←0(3⊃⎕RSI,##).⎕JSON ⍵.Data
          ⍵.Data←0(3⊃⎕RSI,##).⎕JSON⍠'Dialect' 'JSON5'⊢⍵.Data}

    ∇ r←GetEnv var
    ⍝ return enviroment variable setting for var
      :Access public shared
      r←2 ⎕NQ'.' 'GetEnvironment'var
    ∇

    ∇ r←dyalogRoot
    ⍝ return path to interpreter
      r←{⍵,('/\'∊⍨⊢/⍵)↓'/'}{0∊⍴t←GetEnv'DYALOG':⊃1 ⎕NPARTS⊃2 ⎕NQ'.' 'GetCommandLineArgs' ⋄ t}''
    ∇

    ∇ ns←{ConxProps}ConnectionProperties url;p;defaultPort;ind;msg;protocol;secure;auth;host;port;path;urlparms
     
      :If 0=⎕NC'ConxProps' ⋄ ConxProps←'' ⋄ :EndIf
     
      ns←⎕NS''
      msg←''
      (protocol secure host path urlparms)←ConxProps parseURL url
     
      :If ~(⊂protocol)∊'' 'http:' 'https:'
          →∆END⊣msg←'Invalid protocol: ',¯1↓protocol
      :EndIf
     
      auth←''
      :If 0≠p←¯1↑⍸host='@' ⍝ Handle user:password@host...
          auth←('Basic ',(Base64Encode(p-1)↑host))
          host←p↓host
      :EndIf
     
   ⍝ This next section is a chicken and egg scenario trying to figure out
   ⍝ whether to use HTTPS as well as what port to use
     
      :If defaultPort←(≢host)<ind←host⍳':' ⍝ then if there's no port specified in the host
          port←(1+secure)⊃80 443 ⍝ use the default HTTP/HTTPS port
      :Else
          :If 0=port←⊃toInt ind↓host
              →∆END⊣msg←'Invalid host/port: ',host
          :EndIf
          host↑⍨←ind-1
      :EndIf
     
      :If 0∊⍴host
          →∆END⊣msg←'No host specified'
      :EndIf
     
      :If ~(port>0)∧(port≤65535)∧port=⌊port
          →∆END⊣msg←'Invalid port: ',⍕port
      :EndIf
     
      secure∨←(0∊⍴protocol)∧port=443 ⍝ if just port 443 was specified, without any protocol, use SSL
     
      :If defaultPort∧secure
          port←443
      :EndIf
     
      ns.(protocol secure auth host port path urlparms defaultPort)←protocol secure auth host port path urlparms defaultPort
     
     ∆END:
      ns.msg←msg
    ∇

    ∇ (protocol secure host path urlparms)←{conx}parseURL url;path;p;ind
    ⍝ Parses a URL and returns
    ⍝   secure - Boolean whether running HTTPS or not based on leading http://
    ⍝   host - domain or IP address
    ⍝   path - path on the host for the requested resource, if any
    ⍝   urlparms - URL query string, if any
      :If 0=⎕NC'conx' ⋄ conx←'' ⋄ :EndIf
      (url urlparms)←2↑(url splitOnFirst'?'),⊂''
      p←⍬⍴2+⍸<\'://'⍷url
      protocol←lc(0⌈p-2)↑url
      secure←protocol beginsWith'https:'
      url←p↓url                          ⍝ Remove HTTP[s]:// if present
      (host path)←url splitOnFirst'/'    ⍝ Extract host and path from url
      ind←host iotaz'@'                  ⍝ any credentials?
      host←(ind↑host),lc ind↓host        ⍝ host (domain) is case-insensitive (credentials are not)
      :If ~0∊⍴conx ⍝ if we have an existing connection
      :AndIf 0∊⍴protocol ⍝ and no protocol was specified
          secure←(conx.Host≡host)∧conx.Secure ⍝ use the protocol from the existing connection
      :EndIf
      path←'/',∊(⊂'%20')@(=∘' ')⊢path    ⍝ convert spaces in path name to %20
    ∇

    ∇ r←parseHttpDate date;d
    ⍝ Parses a RFC 7231 format date (Ddd, DD Mmm YYYY hh:mm:ss GMT)
    ⍝ returns Extended IDN format
    ⍝ this function does almost no validation of its input, we expect a properly formatted date
    ⍝ ill-formatted dates return ⍬
      :Trap 0
          d←{⍵⊆⍨⍵∊⎕A,⎕D}uc date
          r←1 0 1 1 1 1\toInt¨d[4 2 5 6 7]
          r[2]←(3⊃d)⍳⍨12 3⍴'JANFEBMARAPRMAYJUNJULAUGSEPOCTNOVDEC'
          r←TStoIDN r
      :Else
          r←⍬
      :EndTrap
    ∇

    ∇ idn←TStoIDN ts
    ⍝ Convert timestamp to extended IDN format
      :Trap 2 11 ⍝ syntax error if pre-v18.0, domain error if
          idn←¯1 1 ⎕DT⊂ts
      :Else
          idn←(2 ⎕NQ'.' 'DateToIDN'(3↑ts))+(24 60 60 1000⊥4↑3↓ts)÷86400000
      :EndTrap
    ∇

    ∇ ts←IDNtoTS idn
    ⍝ Convert extended IDN to timestamp
      :Trap 2 ⍝ syntax error if pre-v18.0
          ts←⊃1 ¯1 ⎕DT idn
      :Else
          ts←3↑2 ⎕NQ'.' 'IDNToDate'(⌊idn)
          ts,←⌊0.5+24 60 60 1000⊤86400000×1|⍬⍴idn
      :EndTrap
    ∇

    ∇ idn←Now
    ⍝ Return extended IDN for current time
      idn←TStoIDN ⎕TS
    ∇

    ∇ cookies←parseCookies(headers host path);cookie;segs;setcookie;seg;value;name;domain
    ⍝ Parses set-cookie headers into cookie array
    ⍝ Attempts to follow RFC6265 https://datatracker.ietf.org/doc/html/rfc6265
      cookies←⍬
      :For setcookie :In headers tableGet'set-cookie'
          segs←dltb¨¨2↑¨'='splitOnFirst⍨¨dltb¨setcookie splitOn';'
          (cookie←#.⎕NS'').(Name Value Host Domain Path HttpOnly Secure Expires SameSite Creation Other)←'' ''host'' '/' 0 0 '' ''Now''
          →∆NEXT⍴⍨0∊≢¨cookie.(Name Value)←⊃segs
          segs←1↓segs
     
          segs/⍨←⌽(⍳∘≢=⍳⍨)⌽lc⊃¨segs ⍝ select the last occurence of each attribute
          :For name value :In segs
              :Select lc name
              :Case 'expires'
                  :If ''≡cookie.Expires ⍝ if Expires was set already from MaxAge, MaxAge takes precedence
                      →∆NEXT⍴⍨0∊⍴cookie.Expires←parseHttpDate value ⍝ ignore cookies with invalid expires dates
                  :EndIf
              :Case 'max-age' ⍝ specifies number of seconds after which cookie expires
                  cookie.Expires←Now+seconds toInt value
              :Case 'domain' ⍝ RCF 6265 Sec. 5.2.3
                  →∆NEXT⍴⍨0∊⍴domain←lc value ⍝ cookies with empty domain values are ignored
                  :If domain≡host
                      domain←host
                  :ElseIf host endsWith domain←('.'=⊃domain)↓'.',domain
                      cookie.Domain←domain
                  :Else ⋄ →∆NEXT
                  :EndIf
              :Case 'path' ⍝ RCF 6265 Sec. 5.2.4
                  :If '/'=⊃value ⋄ cookie.Path←value ⋄ :EndIf
              :Case 'secure' ⋄ cookie.Secure←1
              :Case 'httponly' ⋄ cookie.HttpOnly←1
              :Case 'samesite' ⋄ cookie.SameSite←value
              :Else ⋄ cookie.Other,←⊂dltb¨name value ⍝ catch all in case something else was sent with cookie
              :EndSelect
          :EndFor
          cookies,←cookie
     ∆NEXT:
      :EndFor
    ∇

      NotExpired←{
          0∊⍴⍵.Expires:1
          Now≤⍵.Expires
      }

      domainMatch←{
      ⍝ ⍺ - host, ⍵ - cookie.(domain host)
          dom←(1+0∊⍴1⊃⍵)⊃⍵
          ⍺≡dom:1
          (⍺ endsWith dom)∧'.'=⊃dom
      }

      pathMatch←{
      ⍝ ⍺ - requested path, ⍵ - cookie path
          ⍺ beginsWith ⍵
      }

    ∇ cookies←cookies updateCookies new;cookie;ind
    ⍝ update internal cookies based on result of ParseCookies
      :If 0∊⍴cookies
          cookies←new
      :Else
          :For cookie :In new
              :If 0≠ind←cookies.Name iotaz⊂cookie.Name
                  :If 0∊⍴cookie.Value ⍝ deleted cookie?
                      cookie←(ind≠⍳≢cookies)/cookies
                  :Else
                      cookies[ind]←cookie
                  :EndIf
              :Else
                  cookies,←cookie
              :EndIf
          :EndFor
      :EndIf
      :If ~0∊⍴cookies
          cookies/⍨←NotExpired¨cookies ⍝ remove any expired cookies
      :EndIf
    ∇

    ∇ r←state applyCookies cookies;mask
    ⍝ return which cookies to send based on current request and
      r←⍬
      →0⍴⍨0∊⍴mask←1⍴⍨≢cookies ⍝ exit if no cookies
      →0↓⍨∨/mask∧←cookies.Secure≤state.Secure ⍝ HTTPS only filter
      →0↓⍨∨/mask←mask\state.Host∘domainMatch¨mask/cookies.(Domain Host)
      →0↓⍨∨/mask←mask\state.Path∘pathMatch¨mask/cookies.Path
      →0↓⍨∨/mask←mask\NotExpired¨mask/cookies
      r←mask/cookies
    ∇

    ∇ r←formatCookies cookies
      r←2↓∊cookies.('; ',Name,'=',Value)
    ∇

    ∇ {r}←name AddHeader value;hdrs
    ⍝ add a header unless it's already defined
      :Access public
      :Trap 7
          r←Headers←name(Headers addHeader)value
      :Else
          ⎕EM ⎕SIGNAL ⎕EN
      :EndTrap
    ∇

    ∇ hdrs←name(hdrs addHeader)value
    ⍝ add a header unless it's already defined
      hdrs←makeHeaders hdrs
      hdrs⍪←('∘???∘'≡hdrs getHeader name)⌿⍉⍪name value
    ∇

    ∇ {r}←name SetHeader value;ind
    ⍝ set a header value, overwriting any existing one
      :Access public
      :Trap 7
          r←Headers←name(Headers setHeader)value
      :Else
          ⎕EM ⎕SIGNAL ⎕EN
      :EndTrap
    ∇

    ∇ hdrs←name(hdrs setHeader)value;ind
      hdrs←makeHeaders hdrs
      ind←hdrs[;1](⍳ci)eis name
      hdrs↑⍨←ind⌈≢hdrs
      hdrs[ind;]←name(⍕value)
    ∇

    ∇ {r}←RemoveHeader name
    ⍝ remove a header
      :Access public
      :Trap 7
          Headers←makeHeaders Headers
      :Else
          ⎕EM ⎕SIGNAL ⎕EN
      :EndTrap
      Headers⌿⍨←Headers[;1](≢¨ci)eis name
      r←Headers
    ∇

    ∇ hdrs←environment hdrs;beg;end;escape;hits;regex
    ⍝ substitute any header names or values that begin with '$env:' with the named environment variable
      :If ~0∊⍴HeaderSubstitution
          (beg end)←2⍴HeaderSubstitution
          escape←'.^$*+?()[]{\|-'∘{m←∊(1+⍺∊⍨t←⌽⍵)↑¨1 ⋄ t←m\t ⋄ t[⍸~m]←'\' ⋄ ⌽t} ⍝ chars that need escaping in regex
          regex←(escape beg),'[[:alpha:]].*?',escape end
          hdrs←(⍴hdrs)⍴regex ⎕R{0∊⍴e←GetEnv(≢beg)↓(-≢end)↓⍵.Match:⍵.Match ⋄ e}⊢,hdrs
      :EndIf
    ∇

    ∇ hdrs←privatize hdrs
    ⍝ suppress displaying Authorization header value if Private=1
      :If Secret
          hdrs[⍸hdrs[;1](∊ci)'Authorization' 'Proxy-Authorization';2]←⊂'>>> Secret setting is 1 <<<'
      :EndIf
    ∇

    ∇ r←{a}eis w;f
    ⍝ enclose if simple
      f←{⍺←1 ⋄ ,(⊂⍣(⍺=|≡⍵))⍵}
      :If 0=⎕NC'a' ⋄ r←f w
      :Else ⋄ r←a f w
      :EndIf
    ∇

      base64←{(⎕IO ⎕ML)←0 1            ⍝ from dfns workspace - Base64 encoding and decoding as used in MIME.
          chars←'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
          bits←{,⍉(⍺⍴2)⊤⍵}             ⍝ encode each element of ⍵ in ⍺ bits, and catenate them all together
          part←{((⍴⍵)⍴⍺↑1)⊂⍵}          ⍝ partition ⍵ into chunks of length ⍺
          0=2|⎕DR ⍵:2∘⊥∘(8∘↑)¨8 part{(-8|⍴⍵)↓⍵}6 bits{(⍵≠64)/⍵}chars⍳⍵  ⍝ decode a string into octets
          four←{                       ⍝ use 4 characters to encode either
              8=⍴⍵:'=='∇ ⍵,0 0 0 0     ⍝   1,
              16=⍴⍵:'='∇ ⍵,0 0         ⍝   2
              chars[2∘⊥¨6 part ⍵],⍺    ⍝   or 3 octets of input
          }
          cats←⊃∘(,/)∘((⊂'')∘,)        ⍝ catenate zero or more strings
          cats''∘four¨24 part 8 bits ⍵
      }

    ∇ r←{cpo}Base64Encode w
    ⍝ Base64 Encode
    ⍝ Optional cpo (code points only) suppresses UTF-8 translation
    ⍝ if w is integer skip any conversion
      :Access public shared
      :If (⎕DR w)∊83 163 ⋄ r←base64 w
      :ElseIf 0=⎕NC'cpo' ⋄ r←base64'UTF-8'⎕UCS w
      :Else ⋄ r←base64 ⎕UCS w
      :EndIf
    ∇

    ∇ r←{cpo}Base64Decode w
    ⍝ Base64 Decode
    ⍝ Optional cpo (code points only) suppresses UTF-8 translation
      :Access public shared
      :If 0=⎕NC'cpo' ⋄ r←'UTF-8'⎕UCS base64 w
      :Else ⋄ r←⎕UCS base64 w
      :EndIf
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

    ∇ r←{name}UrlEncode data;⎕IO;format;noname;xlate;hex
      ⍝ data is one of:
      ⍝      - a simple character vector (no name supplied)
      ⍝      - an even number of name/data character vectors
      ⍝       'name' 'fred' 'type' 'student' > 'name=fred&type=student'
      ⍝      - a namespace containing variable(s) to be encoded
      ⍝ r    is a character vector of the URLEncoded data
     
      :Access Public Shared
      ⎕IO←0
      format←{
          1=≡⍵:⍺(,⍕⍵)
          ↑⍺∘{⍺(,⍕⍵)}¨⍵
      }
      :If 0=⎕NC'name' ⋄ name←'' ⋄ :EndIf
      noname←0
      :If 9.1=⎕NC⊂'data'
          data←⊃⍪/{0∊⍴t←⍵.⎕NL ¯2:'' ⋄ ⍵{⍵ format ⍺⍎⍵}¨t}data
      :Else
          :Select |≡data
          :CaseList 0 1
              :If 1≥|≡data
                  noname←0∊⍴name
                  data←name(,data)
              :EndIf
          :Case 3 ⍝ nested name/value pairs (('abc' '123')('def' '789'))
              data←⊃,/data
          :EndSelect
      :EndIf
      hex←'%',¨,∘.,⍨⎕D,6↑⎕A
      xlate←{
          i←⍸~⍵∊'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_.~*'
          0∊⍴i:⍵
          ∊({⊂∊hex['UTF-8'⎕UCS ⍵]}¨⍵[i])@i⊢⍵
      }
      data←xlate∘⍕¨data
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

    ∇ w←SafeJSON w;i;c;⎕IO
    ⍝ Convert Unicode chars to \uXXXX
      ⎕IO←0
      →0⍴⍨0∊⍴i←⍸127<c←⎕UCS w
      w[i]←{⊂'\u','0123456789ABCDEF'[¯4↑16⊥⍣¯1⊢⍵]}¨c[i]
      w←∊w
    ∇

    ∇ r←Documentation
    ⍝ return full documentation
      :Access public shared
      r←'See https://dyalog.github.io/HttpCommand/'
    ∇

    ∇ (rc msg)←Upgrade;latest;url;z;newer;ns;code;vers
    ⍝ loads the latest released version from GitHub
      :Access public shared
      (rc msg)←¯1 'Default message'
      :If 82=⎕DR''
          →0⊣msg←'Upgrade is not available on Classic interpreters'
      :EndIf
      :Trap Debug↓0
          latest←GetJSON'get' 'https://api.github.com/repos/Dyalog/HttpCommand/releases/latest'
          :If 0 200≢latest.(rc HttpStatus)
              →0⊣msg←'Unable to retrieve latest HttpCommand release: ',⍕latest
          :EndIf
          url←latest.Data.(assets.browser_download_url⊃⍨assets.name⍳⊂'HttpCommand.dyalog')
          z←Get url
          :If z.(rc HttpStatus)≢0 200
              →0⊣msg←'Unable to retrieve latest HttpCommand definition: ',⍕z
          :EndIf
          newer←{
              0∊⍴⍺:0      ⍝ same version
              (⊃⍺)>⊃⍵:1   ⍝ newer version
              (⊃⍺)=⊃⍵:(1↓⍺)∇ 1↓⍵
              ¯1          ⍝ older version
          }
          {}LDRC.Close'.' ⍝ close Conga
          LDRC←''         ⍝ reset local reference so that Conga gets reloaded
          :Trap Debug↓0
              ns←⎕NS''
              code←{⍵⊆⍨~⍵∊⎕UCS 13 10 65279}'UTF-8'⎕UCS ⎕UCS z.Data
              vers←(0 ns.⎕FIX code).Version Version
              :If 1=⊃newer/{2⊃'.'⎕VFI 2⊃⍵}¨vers
                  ##.⎕FIX code
                  (rc msg)←1(deb⍕,'Upgraded to' 'from',⍪vers)
              :Else
                  (rc msg)←0(deb⍕'Already using the most current version: ',2⊃vers)
              :EndIf
          :Else
              msg←'Could not ⎕FIX new HttpCommand: ',2↓∊': '∘,¨⎕DMX.(EM Message)
          :EndTrap
      :Else
          r←¯1('Unexpected ',⊃{⍺,' at ',⍵}/2↑⎕DMX.DM)
      :EndTrap
    ∇
:EndClass
