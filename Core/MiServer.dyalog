﻿:Class MiServer

    :Field Public Config

    :Field Public TID←¯1                ⍝ Thread ID Server is running under
    :Field Public BlockSize←640000      ⍝ Blocksize when returning files

    :Field Public SessionHandler←⎕NS ''
    :Field Public Authentication←⎕NS ''
    :Field Public Logger←⎕NS ''
    :Field Public Application←⎕NS ''

    :field Public Encoders←⍬  ⍝ pointers to instances of content encoders
    :field Public Datasources←⍬

    ⎕TRAP←0/⎕TRAP ⋄ (⎕ML ⎕IO)←1 1

    unicode←80=⎕DR 'A'
    NL←(CR LF)←⎕UCS 13 10
    FindFirst←{(⍺⍷⍵)⍳1}
    enlist←{⎕ML←1 ⋄ ∊⍵}
    fromutf8←{0::(⎕AV,'?')[⎕AVU⍳⍵] ⋄ 'UTF-8' ⎕UCS ⍵} ⍝ Turn raw UTF-8 input into text
    toutf8←{'UTF-8' ⎕UCS ⍵}                          ⍝ Turn text into UTF-8 byte stream
    setting←{0=⎕NC ⍵:⍺ ⋄ ⍎⍵}
    endswith←{(,⍺){⍵≡⍺↑⍨-⍴⍵},⍵}
    I85←{}

      bit←{⎕IO←0  ⍝ used by Log
          0=⍺:0 ⍝ all bits turned off
          ¯1=⍺:1 ⍝ all bits turned on
          (⌈2⍟⍵)⊃⌽((1+⍵)⍴2)⊤⍺}

    :section Override
⍝ ↓↓↓--- Methods which are usually overridden ---

    ∇ onServerStart
      :Access Public Overridable
    ⍝ Handle any server startup processing
    ∇

    ∇ onSessionStart req
      :Access Public Overridable
    ⍝ Process a new session
    ∇

    ∇ onSessionEnd session
      :Access Public Overridable
    ⍝ Handle the end of a session
    ∇

    ∇ onIdle
      :Access Public Overridable
    ⍝ Idle time handler - called when the server has gone idle for a period of time
    ∇

    ∇ Error req
      :Access Public Overridable
    ⍝ Handle trapped errors
      req.Response.HTML←'<font face="APL385 Unicode" color="red">',(⊃,/⎕DM,¨⊂'<br/>'),'</font>'
      req.Fail 500 ⍝ Internal Server Error
      1 Log ⎕DM
    ∇

    ∇ level Log msg
      :Access Public overridable
    ⍝ Logs server messages
    ⍝ levels implemented in MildServer are:
    ⍝ 1-error/important, 2-warning, 4-informational, 8-transaction (GET/POST)
      :If Config.LogMessageLevel bit level ⍝ if set to display this level of message
          ⎕←msg ⍝ display it
      :EndIf
    ∇

    ∇ Cleanup
      :Access Public overridable
    ⍝ Perform any site specific cleanup
    ∇

⍝ ↑↑↑--- End of Overridable methods ---
    :endsection


⍝ ↓↓↓--- Begin MildServer Core Code
    :section Start/Stop
    ∇ Run
      :Access Public
      ('Already Running on Thread',⍕TID)⎕SIGNAL(TID∊⎕TNUMS)/11
      TID←RunServer&⍬
    ∇

    ∇ End;tempfiles
    ⍝ Called by destructor
      :Access Public
      Logger.Stop ⍬
      :If 0=⎕NC'ServerName'
         ⍝!!! {}1 #.DRC.Init''
      :Else
          'Not running'⎕SIGNAL(#.DRC.Exists ServerName)↓11
          {}#.DRC.Close ServerName
          :Trap 6 ⍝ ⎕TSYNC may not return a value if the thread doesn't, so handle the possible VALUE ERROR
              {}⎕TSYNC ⎕TID~⍨TID∩⎕TNUMS
          :EndTrap
      :EndIf
      :If ~0∊⍴Config.TempFolder
          tempfiles←{(~⍵[;4])/⍵[;1]}#.Files.List Config.TempFolder
          :If 0≠⍴tempfiles←(tempfiles∨.≠¨'.')/tempfiles
              {}{0::'' ⋄ #.Files.Delete Config.TempFolder,⍵}¨tempfiles
          :EndIf
      :EndIf
      Cleanup ⍝ overridable
      TID←¯1
    ∇
    :endsection

    ∇ r←RunServer arg;RESUME;⎕TRAP;Common;cmd;name;port;wres;ref;nspc;sink;Stop;secure;certpath;flags;z;rc;rate;ErrorCount;idletime;msg;uid;ts;CMTid
      ⍝ Simple HTTP (Web) Server framework
      ⍝ Assumes Conga available in #.DRC and uses #.HTTPRequest
      ⍝ arg: dummy
      ⍝ certs: RootCertDir, ServerCert, ServerKey (optional: runs Secure server)
     
      Common←⎕NS'' ⋄ Stop←0 ⋄ WAITING←0
      CMTid←ConnectionMonitor&ServerName
     
      :If Config.TrapErrors>0
          ⎕TRAP←#.DrA.TrapServer
          #.DrA.NoUser←1+#.DrA.MailRecipient∨.≠' '
      :EndIf ⍝ Trap MiServer Errors. See HandleMSP for Page Errors.
     
      onServerStart ⍝ meant to be overridden
     
      idletime←#.Dates.DateToIDN ⎕TS
      :While ~Stop
          wres←#.DRC.Wait ServerName 20000 ⍝ Tick every 20 secs
          ⍝ wres: (return code) (object name) (command) (data)
     
          :Select 1⊃wres
          :Case 0 ⍝ Good data from RPC.Wait
              :Select 3⊃wres
     
              :Case 'Error'
                  :If ServerName≡2⊃wres
                      Stop←1
                  :EndIf
                  (1+(4⊃wres)∊1008 1105 1119)Log'RunServer: DRC.Wait reported error ',(⍕#.DRC.Error 4⊃wres),' on ',2⊃wres
     
                  ⎕EX SpaceName 2⊃wres
     
              :CaseList 'Block' 'BlockLast'
                  nspc←SpaceName 2⊃wres
                  :If 0=⎕NC nspc
                      :Trap 6 ⍝ VALUE ERROR - nspc could be erased if page goes away
                          nspc ⎕NS''
                          (⍎nspc).(Pos Buffer ContentLength Req)←0 '' 0 ''
                          :If 0=1⊃z←#.DRC.GetProp(2⊃wres)'PeerAddr' ⋄ (⍎nspc).PeerAddr←2⊃z
                          :Else ⋄ (⍎nspc).PeerAddr←'Unknown'
                          :EndIf
                          :If Config.Secure
                              rc z←#.DRC.GetProp(2⊃wres)'PeerCert'
                              :If rc=0 ⋄ (⍎nspc).PeerCert←z
                              :Else
                                  1 Log'Unable to obtain peer certificate over secure connection - request ignored'
                                  ⎕EX nspc
                              :EndIf
                          :EndIf
                      :EndTrap
                  :EndIf
     
                  :If 0≠⎕NC nspc
                      {}(⍎nspc){⎕EX nspc/⍨('BlockLast'≡3⊃⍵)∧⍺ HandleRequest(2↑⍵)}&wres[2 4 3] ⍝ Run page handler in new thread
                  :EndIf
              :Case 'Connect' ⍝ Ignore
     
              :Else
                  2 Log'Error ',⍕wres
              :EndSelect
     
          :Case 100 ⍝ Time out - put "housekeeping" code here
              SessionHandler.HouseKeeping ⎕THIS
              :If 0<Config.IdleTimeOut ⍝ if an idle timeout (in seconds) has been specified
              :AndIf Config.IdleTimeOut<86400×-/(ts←#.Dates.DateToIDN ⎕TS)idletime ⍝ has it passed?
                  onIdle
                  idletime←ts
              :EndIf
     
          :Case 1010 ⍝ Object Not found
              1 Log'Object ''',ServerName,''' has been closed - Web Server shutting down'
              ⎕TKILL CMTid
              →0
     
          :Else
              1 Log'#.DRC.Wait failed:'
              1 Log wres
          :EndSelect
     
      :EndWhile
     
     RESUME: ⍝ Error Trapped and logged
      ⎕TKILL CMTid
      {}#.DRC.Close ServerName
      1 Log r←'Web server ''',ServerName,''' stopped '
      →0
     
    ∇

    :section Constructor/Destructor

    ∇ Make config;CongaVersion;rc
      :Access Public
      :Implements Constructor
     
      SessionHandler.GetSession←{}   ⍝ So we can always
      SessionHandler.HouseKeeping←{} ⍝    call these fns
      Authentication.Authenticate←{} ⍝    without worrying
      Logger.Log←{}
      Logger.Stop←{}
      Logger.Start←{}
      :If {0::1 ⋄ 85⌶'0'}'' ⍝ Need a left arg?
          I85←1∘(85⌶)
      :Else
          I85←85⌶
      :EndIf
      Config←config
      :If 0≠⊃rc←¯1 #.DRC.Init''
          ('Unable to initialize Conga. rc=',,⍕rc)⎕SIGNAL 11
      :EndIf
     
      CongaVersion←{0::0 ⋄ ⊃⊃//⎕VFI ⍵}{(2>+\'.'=⍵)/⍵}⊃{⍵/⍨{∧/⍵∊'0123456789.'}¨⍵}(⊂'')~⍨{1↓¨(⍵=⍬⍴⍵)⊂⍵}' ',2 2⊃#.DRC.Describe'.'
      :If 2.2>CongaVersion
          'MiServer 3.0 requires Conga 2.2 or later'⎕SIGNAL 11
      :EndIf
     
      'Unable to allocate TCP/IP port'⎕SIGNAL(0≠1⊃,AllocatePort)/11
    ∇

    ∇ UnMake
      :Implements Destructor
      :Trap 0 ⋄ End ⋄ :EndTrap
    ∇

    ∇ r←AllocatePort;ipv;server
    ⍝ Starts Conga, allocates TCP/IP port
      ipv←'Protocol'Config.IPVersion
      :If Config.Secure
          :If ∧/(~0∊⍴)¨Config.(CertFile KeyFile)
          :AndIf ⊃∧/#.Files.Exists¨Config.(CertFile KeyFile)
              {}#.DRC.SetProp'.' 'RootCertDir'Config.RootCertDir
              server←#.DRC.X509Cert.ReadCertFromFile Config.CertFile
              server.KeyOrigin←'DER'Config.KeyFile
              →(0≠1⊃r←#.DRC.Srv'' ''Config.Port'Raw' 10000('X509'server)('SSLValidation'Config.SSLFlags)ipv)⍴0 ⍝ Must have Conga v2.1
              1 Log'Starting secure server using certificate ',Config.CertFile
          :Else
              1 Log'Invalid certificate parameters'
              r←1
              →0
          :EndIf
      :Else
          →(0≠1⊃r←#.DRC.Srv'' ''Config.Port'Raw' 10000 ipv)⍴0
      :EndIf
     
      ServerName←2⊃r
     
      ⍝ If running Linux, we may want to switch users (only root can allocate a port less than 1024)
     
      :If ~isWin
      :AndIf 0<⍴uid←''setting'Config.UserID'
          msg←'4001⌶''',uid,''' '
          :Trap 0
              {}4001⌶uid
          :Else
              1 Log msg,'failed.'
              :Return
          :EndTrap
          4 Log msg,'succeeded.'
      :EndIf
     
      4 Log'Web server ''',ServerName,''' started on port ',⍕Config.Port
      4 Log'Root folder: ',Config.Root
    ∇

    :endsection

    :section RequestHandling

    ∇ names←pagedata PrepareJSONTargets names;p;m;i;nss;z
     ⍝ See if names contain JSON indexed names like editcell[Name]
     ⍝     and if so convert them to editcell.Name and make sure editcell exists
     ⍝ /// Hack by Morten awaiting cleanup or approval by Brian
     
      :If 0≠⍴i←(¯1=⎕NC names)/⍳⍴names ⍝ all invalid APL names
          names[i]←('%5B' '%5D'⎕R(,¨'[]'))¨names[i]
      :AndIf 0≠⍴i←i/⍨m←(p←names[i]⍳¨'[')≠∘⊃∘⍴¨names[i] ⍝ ... which contain '['
          nss←∪z←(m/p-1)↑¨names[i] ⍝ all namespaces mentions
          nss pagedata.⎕NS¨⊂⍬      ⍝ prepare empty nss
          names[i]←¯1↓¨names[i]    ⍝ drop trailing ']'
          names[i,¨p]←'.'          ⍝ replace '[' by '.'
      :EndIf
    ∇

    ∇ r←conns HandleRequest arg;buf;m;Answer;obj;CMD;pos;req;Data;z;r;hdr;REQ;status;file;tn;length;done;offset;res;closed;sess;chartype;raw;enc;which;html;encoderc;encodeMe;startsize;cacheMe;root;page;filename;eoh;n;i
      ⍝ Handle a Web Server Request
      r←0
      obj buf←arg
      conns.Buffer,←buf
      conns.Handler←{6::conns.Handler←(⎕UCS'<env>')≡5↑conns.Buffer ⋄ conns.Handler}⍬ ⍝ are we serving as a mapping handler?
     
      :If 0=conns.Pos ⍝ is we haven't found the end of the header yet...
          eoh←⎕UCS(1+conns.Handler)⊃(NL,NL)('</env>') ⍝ end of header marker
          pos←(¯1+⍴eoh)+eoh FindFirst conns.Buffer
          :If pos≤⍴conns.Buffer ⍝ found the end of header
              conns.Pos←pos
              conns.Req←fromutf8 conns.(Pos↑Buffer)
          :Else
              :Return ⍝ haven't found end of header yet, go back for more
          :EndIf
      :EndIf
     
      :If 0<⍴conns.Req
          :If conns.Pos>i←(z←LF,'content-length:')FindFirst hdr←#.Strings.lc conns.Req
          :AndIf (⍴conns.Buffer)<conns.Pos+conns.ContentLength←⊃2⊃⎕VFI(¯1+z⍳CR)↑z←(¯1+i+⍴z)↓hdr
              :Return  ⍝ a content-length was specified but we haven't yet gotten what it says to ==> go back for more
          :EndIf
      :EndIf
     
      conns.Buffer←fromutf8 conns.(Pos↓Buffer)
     
      :If conns.Handler  ⍝ if we're running as a mapping handler
          conns.(Req Buffer)←MakeHTTPRequest conns.Req ⍝ fake MiServer out by building an HTTP request from what we've got
      :EndIf
     
⍝      :Hold 'Request'
     
      REQ←⎕NEW #.HTTPRequest conns.(Req Buffer)
      REQ.Server←⎕THIS ⍝ Request will also contain reference to the Server
     
      :If 2=conns.⎕NC'PeerAddr' ⋄ REQ.PeerAddr←conns.PeerAddr ⋄ :EndIf       ⍝ Add Client Address Information
      8 Log REQ.(PeerAddr Command Page)
     
      :If 2=conns.⎕NC'PeerCert' ⋄ REQ.PeerCert←conns.PeerCert ⋄ :EndIf       ⍝ Add Client Cert Information
     
      :If Config.Rest  ⍝ if running RESTful web service...
          n←+/∧\2>+\REQ.Page∊'/\'
          REQ.RestReq←n↓REQ.Page
          REQ.Page←n↑REQ.Page
      :EndIf
     
      REQ.Page←Config.DefaultPage{∧/⍵∊'/\':'/',⍺ ⋄ '/\'∊⍨¯1↑⍵:⍵,⍺ ⋄ ⍵}REQ.Page
      REQ.Page,←(~'.'∊{⍵/⍨⌽~∨\'/'=⌽⍵}REQ.Page)/Config.DefaultExtension
     
      SessionHandler.GetSession REQ
      Authentication.Authenticate REQ
     
      :If REQ.Response.Status≠401 ⍝ Authentication did not fail
     
          filename←Config Virtual REQ.Page
          :If Config.AllowedHttpCommands∊⍨⊂REQ.Command
     
              :If REQ.Page endswith Config.DefaultExtension ⍝ MiPage?
                  filename HandleMSP REQ
              :Else
                  :If REQ.Command≡'get'
                      REQ.ReturnFile filename
                  :Else
                      REQ.Fail 501 ⍝ Service Not Implemented
                  :EndIf
              :EndIf
          :Else
              REQ.Fail 501 ⍝ Service Not Implemented
          :EndIf
      :EndIf
     
      res←REQ.Response
     
      encodeMe←conns.Handler<Config.UseContentEncoding ⍝ initialize a flag whether to encode this response, don't compresss if running as a handler
      cacheMe←0
     
      :If 1=res.File ⍝ See HTTPRequest.ReturnFile
          :If 83=⎕DR file←res.HTML ⍝ if we returned a byte stream, just use it
              length←⍴file ⋄ tn←0
          :Else
              :Trap 22
                  tn←file ⎕NTIE tn←0
                  length←⎕NSIZE tn
                  res.HTML←⎕NREAD tn 83 BlockSize 0
                  cacheMe←0≠Config.HttpCacheTime ⍝ for now, cache all files if set to use caching
                  :If encodeMe
                      encodeMe∧←length<BlockSize ⍝ if we can read entire file and are we encoding...
                      encodeMe>←(⊂¯4↑file)∊'.png' '.gif' '.jpg' ⍝ don't try to compress compressed graphics, should probably add zip files, etc
                  :EndIf
              :Else
                  REQ.Fail 404
                  length←⍴res.HTML
                  res.File←0
              :EndTrap
          :EndIf
          startsize←length
      :EndIf
     
      :If (200=res.Status)∧encodeMe ⍝ if our HTTP status is 200 (OK) and we're okay to encode
      :AndIf 1024<⍴res.HTML ⍝ BPB used to be 0
      :AndIf 0≠⍴enc←{(⊂'')~⍨1↓¨(⍵=⊃⍵)⊂⍵}' '~⍨',',REQ.GetHeader'accept-encoding' ⍝ check if client supports encoding
      :AndIf 0≠which←⊃Encoders.Encoding{(⍴⍺){(⍺≥⍵)/⍵}⍺⍳⍵}enc ⍝ try to match what encodings they accept to those we provide
          (encoderc html)←Encoders[which].Compress res.HTML
          :If 0=encoderc
              length←startsize←⍴res.HTML
              :If startsize>⍴html ⍝ did we save anything by compressing
                  length←⍴res.HTML←html ⍝ use it
                  res.Headers⍪←'Content-Encoding'(Encoders[which].Encoding)
                  4 Log'Used compression, transmitted% = ',2⍕length{⎕DIV←1 ⋄ ⍺÷⍵}startsize
              :Else
                  4 Log'Compression not used on "',REQ.Page,'", startsize = ',(⍕startsize),', compressed length = ',⍕length
                  :If 83≠⎕DR res.HTML
                      res.HTML←toutf8 res.HTML
                  :EndIf
              :EndIf
          :ElseIf 0=res.File
              2 Log'Compression failed'
              length←⍴res.HTML←toutf8 res.HTML ⍝ otherwise, send uncompressed
          :EndIf
      :ElseIf 0=res.File
          startsize←length←⍴res.HTML←toutf8 res.HTML
      :EndIf
     
      :If (200=res.Status)∧cacheMe ⍝ if cacheable, set expires
      :AndIf 0<Config.HttpCacheTime
          res.Headers⍪←'Expires'(Config.HttpCacheTime #.Dates.HttpDate ⎕TS)
      :EndIf
      res.Headers⍪←{0∊⍴⍵:'' '' ⋄ 'Server'⍵}Config.Server
      status←res.((⍕Status),' ',StatusText)
      hdr←enlist{⍺,': ',⍵,NL}/res.Headers
      Answer←(toutf8((1+conns.Handler)⊃'HTTP/1.0 ' 'Status: '),status,NL,'Content-Length: ',(⍕length),NL,hdr,NL),res.HTML
      done←length≤offset←⍴res.HTML
      REQ.MSec-⍨←⎕AI[3]
      res.Bytes←startsize length
      :Repeat
          :If 0≠1⊃z←#.DRC.Send obj Answer done ⍝ Send response and
              (1+(1⊃z)∊1008 1119)Log'"Handlerequest" closed socket ',obj,' due to error: ',(⍕z),' sending response'
              done←1
          :EndIf
          closed←done
          :If ~done
              done←BlockSize>⍴Answer←⎕NREAD tn 83,BlockSize,offset
              offset+←⍴Answer
          :EndIf
      :Until closed ⍝ Everything sent
     
      :If res.File ⋄ ⎕NUNTIE tn ⋄ :EndIf
      8 Log REQ.PeerAddr status
      Logger.Log REQ
      r←1
 ⍝     :EndHold
    ∇

    ∇ file HandleMSP REQ;⎕TRAP;inst;class;z;props;lcp;args;i;ts;date;n;expired;data;m;oldinst;names;html;sessioned;page;root;fn;MS3;token;cb;mask;resp;t;RESTful;APLJax
    ⍝ Handle a "Mildserver Page" request
     RETRY:
      :If 0≡date←3⊃(,''#.Files.List file),0 0 0
          REQ.Fail 404 ⋄ →0
      :EndIf
     
      MS3←RESTful←0
     
      :If sessioned←326=⎕DR REQ.Session ⍝ do we think we have a session handler active?
      :AndIf 0≠⍴REQ.Session.Pages     ⍝ Look for existing Page in Session
      :AndIf (n←⍴REQ.Session.Pages)≥i←REQ.Session.Pages._PageName⍳⊂REQ.Page
          inst←i⊃REQ.Session.Pages ⍝ Get existing instance
          :If expired←inst._PageDate≢date  ⍝ Timestamp unchanged?
              oldinst←inst
              REQ.Session.Pages~←inst
              4 Log'Page: ',REQ.Page,' ... has been updated ...'
          :EndIf
      :AndIf ~expired
          4 Log'Using existing instance of page: ',REQ.Page
          :If 9=⎕NC'#.HtmlPage'
              :If MS3←∨/(∊⎕CLASS inst)∊#.HtmlPage ⋄ inst._Request←REQ ⋄ :EndIf
          :EndIf
          :If 9=⎕NC'#.RESTful'
              :If RESTful←∨/(∊⎕CLASS inst)∊#.RESTful ⋄ inst._Request←REQ ⋄ :EndIf
          :EndIf
      :Else                        ⍝ First use of Page in this Session, or page expired
          :If 0≠⍴z←#.Files.GetText file
              :Trap 11 22
                  class←⎕SE.SALT.Load file,' -target=#.Pages'
                  inst←⎕NEW class
              :Case 11 ⋄ REQ.Fail 500 ⋄ →0 ⍝ Domain Error: HTTP Internal Error
              :Case 22 ⋄ REQ.Fail 404 ⋄ →0 ⍝ File Name Error: HTTP Page not found
              :EndTrap
              4 Log'Creating new instance of page: ',REQ.Page
              inst._PageName←REQ.Page
              inst._PageDate←date
              MS3←RESTful←0
              :If 9=⎕NC'#.HtmlPage'
                  :If MS3←∨/(∊⎕CLASS inst)∊#.HtmlPage
                  :OrIf RESTful←∨/(∊⎕CLASS inst)∊#.RESTful
                      inst.(_Request _PageRef)←REQ inst
                  :EndIf
              :EndIf
              :If sessioned ⋄ REQ.Session.Pages,←inst ⋄ :EndIf
          :Else
              REQ.Fail 404 ⋄ →0
          :EndIf
      :EndIf
     
      :If sessioned ⋄ token←REQ.(Page,⍕Session.ID)
      :ElseIf ~0∊⍴REQ.PeerAddr ⋄ token←REQ.(Page,PeerAddr)
      :Else ⋄ token←⍕⎕TID
      :EndIf
     
      :Hold token
     
     ⍝ Move arguments / parameters into Public Properties
          inst._PageData←⎕NS''
          :If 0≠1↑⍴data←{⍵[⍋↑⍵[;1];]}REQ.Arguments⍪REQ.Data
              m←1,2≢/data[;1]
              data←(m/data[;1]),[1.5]m⊂data[;2]
              i←{⍵/⍳⍴⍵}1=⊃∘⍴¨data[;2]
              data[i;2]←⊃¨data[i;2]
              :If 0≠⍴lcp←props←('_'≠1⊃¨props)/props←(inst.⎕NL-2) ⍝ Get list of public properties (those beginning with '_' are excluded)
              :AndIf 0≠1↑⍴args←(data[;1]∊lcp)⌿data
                  args←(2⌈⍴args)⍴args
                  i←lcp⍳args[;1]
                  ⍎'inst.(',(⍕props[i]),')←args[;2]'
              :EndIf
              :If ∨/mask←'_'≠1⊃¨data[;1]
                  args←mask⌿data
                  args[;1]←inst._PageData PrepareJSONTargets args[;1]
                  ⍎'inst._PageData.(',(⍕args[;1]),')←args[;2]'
              :EndIf
          :EndIf
     
          fn←cb←'Render'
          :If APLJax←REQ.isAPLJax>RESTful ⍝ if it's an APLJax (XmlHttpRequest) request (but not web service)
              REQ.Response.NoWrap←1
              fn←cb←'APLJax' ⍝ default callback function name
              :If MS3
                  inst._what←REQ.GetData'_what'
                  inst._event←REQ.GetData'_event'
                  inst._value←REQ.GetData'_value'
                  :If ~0∊⍴t←REQ.GetData'_callback' ⍝ does the request specify a callback function
                      fn←cb←t
                  :EndIf
              :EndIf
          :Else
              :If MS3
                  cb←cb inst.{3=⌊|⎕NC⊂⍵:⍵ ⋄ ⍺}fn←(1+RESTful)⊃'Compose' 'Respond' ⍝ default function to call
              :EndIf
          :EndIf
     
          :If 3≠⌊|inst.⎕NC⊂cb            ⍝ and is it a public method?
              1 Log'Method "',fn,'" not found (or not public) in page "',REQ.Page,'"'
              REQ.Fail 500
          :EndIf
     
          :If MS3
              :If (⊂cb)∊'Render' 'Compose'
                  inst._init ⍝ reset instance's content
              :ElseIf APLJax
                  inst._resetAjax
              :EndIf
          :EndIf
     
          :If (1=Config.TrapErrors)∧9=⎕NC'#.DrA' ⋄ ⎕TRAP←#.DrA.TrapServer
          :ElseIf (0=Config.Production) ⋄ ⎕TRAP←(800 'C' '→FAIL')(811 'E' '⎕SIGNAL 801')(813 'E' '⎕SIGNAL 803')(812 'S')(0 'E' '⍎#.Boot.Oops') ⍝ enable development debug framework
          :EndIf
     
          :Trap 85   ⍝ we use 85⌶ because "old" MiPages use REQ.Return internally (and don't return a result)...
              resp←I85'inst.',cb,(MS3⍱RESTful)/' REQ'  ⍝ ... whereas "new" MiPages return the HTML they generate
              resp←(#.JSON.toAPLJAX⍣APLJax)resp
              REQ.Return resp
          :Else
              :If APLJax
                  1 Log'No result returned by callback method "',cb,'" in page "',REQ.Page,'"'
                  REQ.Return''
              :EndIf
          :EndTrap
     
          :If ~REQ.Response.NoWrap
              :If MS3∨RESTful
                  inst.Wrap
              :Else
                  inst.Wrap REQ
              :EndIf
              :If Config.FormatHtml
                  :Trap 0
                      REQ.Response.HTML←('.'⎕R'&'⍠'NEOL' 1⍠'EOL' 'LF')((⎕XML⍠'Whitespace' 'Preserve')⍣2)REQ.Response.HTML
                  :Else
                      ⎕←'*** ⎕XML failed'
                  :EndTrap
              :EndIf
          :EndIf
      :EndHold
      →0
     
     FAIL:
      ⎕TRAP←0⍴⎕TRAP
      REQ.Fail 500 ⋄ →0
     
     RESUME: ⍝ RESUME is used by DrA
      ⎕TRAP←0/⎕TRAP ⍝ Let framework trapping take over
     
      :If #.DrA.UseHTTP ⋄ REQ.Fail 500 ⋄ →0 ⋄ :EndIf
     
      REQ.Title'Unhandled Execution Error'
      REQ.Style'Styles/error.css'
      html←'h1'#.HTMLInput.Enclose'Server Error in ''',REQ.Page,'''.<hr width=100% size=1 color=silver>'
      html,←'<h2><i>Unhandled Exception Error</i></h2>'
      html,←'<b>Description:</b> An unhandled exception occurred during the execution of the current web request.'
      :If #.DrA.Mode=2 ⍝ Allows editing
          html,←'<br><br><b>Edit page: <a href="/Admin/EditPage?FileName=',REQ.Page,'">',REQ.Page,'</a><br>'
      :EndIf
      html,←'<br><br><b>Exception Details:</b><br><br>'
      :If (#.DrA.Mode>0)∧0≠⍴#.DrA.LastFile ⋄ html,←#.DrA.(GenHTML LastFile)
      :Else ⋄ html,←'code'#.HTMLInput.Enclose'<font face="APL385 Unicode">',(⊃,/#.DrA.LastError,¨⊂'<br>'),'</font>'
      :EndIf
      REQ.Return html
    ∇

    ∇ (req buffer)←MakeHTTPRequest req;x;v;s;p;l;m;n;i;c;h
⍝ kludge to get by ampersands in a POST - will be fixed when we build proper requests from MiServerCGI
      buffer←c←''
      :If (⍴req)≥i←1⍳⍨'>tsop<'⍷⌽req
          i←(⍴req)-i+5
          c←¯13↓(i+6)↓req
          req←(i↑req),'</env>'
      :EndIf
     
      :Trap 11
          x←⎕XML req
      :Else
          ∘∘∘
      :EndTrap
      v←'var'∘≡¨x[;2]
      v←{⎕ML←3 ⋄ (~<\'='=⍵)⊂⍵}¨v/x[;3]
      v←(∊2=⍴¨v)/v
      h←∊{0∊⍴⍵:'' ⋄ (#.Strings.lc{'HTTP_'≡5↑⍵:5↓⍵ ⋄ 'HTTPS_'≡6↑⍵:6↓⍵ ⋄ ⍵}⍺){('-',⍺)[('_',⍺)⍳⍺],': ',⍵,NL}⍵}/¨v
      ⍝ pull out special fields
      m p s n←(↑v)∘{3::2⊃⍵ ⋄ ⍺[;2]⊃⍨⍺[;1]⍳⊂1⊃⍵}¨↓'REQUEST_METHOD' 'PATH_INFO' 'SERVER_PROTOCOL' 'SERVER_NAME',[1.1]'GET' '' 'HTTP/1.0' 'localhost'
      (req buffer)←(m,' ',p,' ',s,NL,'Host: ',n,h,NL)c
    ∇

    :endsection

    :section Misc

    ∇ ConnectionMonitor server
    ⍝ Because AJAX calls don't send a "BlockLast" packet, we need to clean up connection namespaces that didn't get erased
      :While 1
          ⎕DL 5
          {}Common.{⎕EX(⎕NL ¯9)~'C',¨#.DRC.Names ⍵}server
      :EndWhile
    ∇

    ∇ r←SpaceName cmd
     ⍝ Generate namespace name from command name
      r←'Common.C',Subst(2⊃{1↓¨('.'=⍵)⊂⍵}'.',cmd)'-=' '_∆'
    ∇

    ∇ r←Subst arg;i;m;str;c;rep
      ⍝ Substitute character c in str with rep
      str c rep←arg
      i←c⍳str
      m←i≤⍴c
      (m/str)←rep[m/i]
      r←str
    ∇

    ∇ file←Config Virtual page;mask;f;ind;t;path;root
      :Access public shared
    ⍝ checks for virtual directory
      root←(-'/\'∊⍨¯1↑root)↓root←Config.Root
      page←('/\'∊⍨1↑page)↓page
      file←root,'/',page
      :If 0<⍴Config.Virtual
          ind←Config.Virtual.alias⍳⊂t←{(¯1+⍵⍳'/')⍴⍵}page
          :If ind≤⍴Config.Virtual.alias
              path←ind⊃Config.Virtual.path
              file←#.Files.unixfix path,('/\'∊⍨¯1↑path)↓(⍴t)↓page
          :EndIf
      :EndIf
    ∇

    ∇ r←isWin
      r←'Win'≡3↑1⊃'.'⎕WG'APLVersion'
    ∇

    :endsection

:EndClass