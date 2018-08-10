:Class MiServer
⍝ This is the core web server class - do not modify it!
⍝ Customized web servers should be based on this class - e.g.  :Class MyServer : MiServer

    :Field Public Config

    :Field Public TID←¯1                ⍝ Thread ID Server is running under
    :Field Public BlockSize←640000      ⍝ Blocksize when returning files

    :Field Public SessionHandler←⎕NS ''
    :Field Public Authentication←⎕NS ''
    :Field Public Logger←⎕NS ''
    :Field Public Application←⎕NS ''
    :Field Public PageTemplates←⍬
    :Field Public Encoders←⍬  ⍝ pointers to instances of content encoders
    :Field Public Datasources←⍬
    :Field Public StartTime←⍬
    :field Public Connections←⍬ ⍝ list of connections
    :Field ServerName

    ⎕TRAP←0/⎕TRAP ⋄ (⎕ML ⎕IO)←1 1

    unicode←80=⎕DR 'A'
    NL←(CR LF)←⎕UCS 13 10
    FindFirst←{(⍺⍷⍵)⍳1}
    setting←{0=⎕NC ⍵:⍺ ⋄ ⍎⍵}
    endswith←{(,⍺){⍵≡⍺↑⍨-⍴⍵},⍵}

      bit←{⎕IO←0  ⍝ used by Log
          0=⍺:0 ⍝ all bits turned off
          ¯1=⍺:1 ⍝ all bits turned on
          (⌈2⍟⍵)⊃⌽((1+⍵)⍴2)⊤⍺}

    :section Override
⍝ ↓↓↓--- Methods which are usually overridden ---

    ∇ onServerLoad
      :Access Public Overridable
    ⍝ Handle any server initialization prior to starting
    ∇

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

    ∇ onHandleRequest req
      :Access Public Overridable
    ⍝ Called whenever a new request comes in
    ∇

    ∇ onHandleMSP req
      :Access Public Overridable
    ⍝ Called when MiPage invoked
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
      onServerLoad
      TID←RunServer&⍬
    ∇

    ∇ End
    ⍝ Called by destructor
      :Access Public
      {0:: ⋄ Logger.Stop ⍬}⍬
      :If 0≠⎕NC'ServerName'
          'Not running'⎕SIGNAL(#.DRC.Exists ServerName)↓11
          {}#.DRC.Close ServerName
          :Trap 6 ⍝ ⎕TSYNC may not return a value if the thread doesn't, so handle the possible VALUE ERROR
              {}⎕TSYNC ⎕TID~⍨TID∩⎕TNUMS
          :EndTrap
      :EndIf
      Cleanup ⍝ overridable
      TID←¯1
    ∇
    :endsection

    ∇ r←RunServer arg;Stop;StartTime;⎕TRAP;idletime;wres;rc;obj;evt;data;conx;ts
      ⍝ Simple HTTP (Web) Server framework
      ⍝ Assumes Conga available in #.DRC and uses #.HTTPRequest
      ⍝ arg: dummy
      ⍝ certs: RootCertDir, ServerCert, ServerKey (optional: runs Secure server)
     
      Stop←0
      StartTime←⎕TS
     
      :If Config.TrapErrors>0
          ⎕TRAP←#.DrA.TrapServer
          #.DrA.NoUser←1+#.DrA.MailRecipient∨.≠' '
      :EndIf ⍝ Trap MiServer Errors. See HandleMSP for Page Errors.
     
      onServerStart ⍝ meant to be overridden
     
      idletime←#.Dates.DateToIDN ⎕TS
     
      :While ~Stop
          wres←#.DRC.Wait ServerName Config.WaitTimeout ⍝ Wait for WaitTimeout before timing out
          ⍝ wres: (return code) (object name) (command) (data)
          (rc obj evt data)←4↑wres
          :Select rc
          :Case 0 ⍝ Good data from RPC.Wait
              :Select evt
     
              :Case 'Error'
                  :If ServerName≡obj
                      Stop←1
                  :Else
                      ConnectionDelete obj
                  :EndIf
                  :If 0≠4⊃wres
                      (1+(4⊃wres)∊1008 1105 1119)Log'RunServer: DRC.Wait reported error ',(⍕#.Conga.Error 4⊃wres),' on ',2⊃wres
                  :EndIf
     
              :Case 'Connect'
                  ConnectionNew obj
     
              :CaseList 'HTTPHeader' 'HTTPTrailer' 'HTTPChunk' 'HTTPBody'
                  :If 0≢conx←1 ConnectionUpdate obj
                      {}conx{{}⍺ HandleRequest ⍵}&wres
                  :Else
                      ∘∘∘ ⍝!!! debug !!!
                  :EndIf
     
              :Case 'Timeout'
                  SessionHandler.HouseKeeping ⎕THIS
                  :If 0<Config.IdleTimeout ⍝ if an idle timeout (in seconds) has been specified
                  :AndIf Config.IdleTimeout<86400×-/(ts←#.Dates.DateToIDN ⎕TS)idletime ⍝ has it passed?
                      onIdle
                      idletime←ts
                  :EndIf
     
              :Case 'Closed'
                  ConnectionDelete obj
     
              :Else ⍝ unhandled event
                  2 Log'Unhandled Conga event:'
                  2 Log wres
              :EndSelect
     
          :Case 1010 ⍝ Object Not found
              1 Log'Object ''',ServerName,''' has been closed - Web Server shutting down'
              →0
     
          :Else
              1 Log'Conga wait failed:'
              1 Log wres
          :EndSelect
     
          ConnectionCleanup
     
      :EndWhile
     
     RESUME: ⍝ Error Trapped and logged
      {}#.DRC.Close ServerName
      1 Log r←'Web server ''',ServerName,''' stopped '
      :If Config.CloseOnCrash
          ⎕OFF
      :EndIf
      →0
    ∇

⍝ --- Connection management ---

    ∇ ConnectionNew objname;z;rc
      :Hold 'Connections'
          Connections,⍨←conx←⎕NS''
          conx.(CongaObjectName PeerCert)←objname''
          conx.(Active LastActive)←1(3⊃⎕AI)
          :If 0=1⊃z←#.DRC.GetProp conx.CongaObjectName'PeerAddr'
              conx.PeerAddr←2⊃z
          :Else
              conx.PeerAddr←'Unknown'
          :EndIf
     
          :If Config.Secure
              (rc z)←2↑#.DRC.GetProp conx.CongaObjectName'PeerCert'
              :If rc=0
                  conx.PeerCert←z
              :Else
                  1 Log'Unable to obtain peer certificate over secure connection - request ignored'
                  conx←0
              :EndIf
          :EndIf
      :EndHold
    ∇

    ∇ conx←ConnectionGet objname;n;i
    ⍝ needs to be called within a "held" environment
      conx←0
      :If 0≠n←⍴Connections
      :AndIf n≥i←Connections.CongaObjectName⍳⊂objname
          conx←i⊃Connections
      :EndIf
    ∇

    ∇ conx←state ConnectionUpdate objname;n;i
      :Hold 'Connections'
          :If 0≢conx←ConnectionGet objname
              conx.(Active LastActive)←state(3⊃⎕AI)
          :EndIf
      :EndHold
    ∇

    ∇ {congaClose}ConnectionDelete con
    ⍝ assumes Conga connection is closed elsewhere
      :If 0=⎕NC'congaClose' ⋄ congaClose←0 ⋄ :EndIf
      :Hold 'Connections'
          :If 9=⎕NC'con'
              :If congaClose
                  #.DRC.Close con.CongaObjectName
              :EndIf
              Connections~←con
          :Else
              :If congaClose
                  #.DRC.Close con
              :EndIf
              :If ~0∊⍴Connections
                  Connections/⍨←Connections.CongaObjectName≢¨⊂con
              :EndIf
          :EndIf
      :EndHold
    ∇

    ∇ ConnectionCleanup;mask
      →0
      :Hold 'Connections'
          :If ~0∊⍴Connections
          :AndIf 0≠+/mask←Connections.Active<10000<⎕AI[3]-Connections.LastActive
              #.DRC.Close¨mask/Connections.CongaObjectName
              Connections/←~mask
          :EndIf
      :EndHold
    ∇

    :section Constructor/Destructor

    ∇ Make config;CongaVersion;rc;allocated;port;ports
      :Access Public
      :Implements Constructor
     
      SessionHandler.GetSession←{}   ⍝ So we can always
      SessionHandler.HouseKeeping←{} ⍝    call these fns
      Authentication.Authenticate←{} ⍝    without worrying
      Logger.Log←{}
      Logger.Stop←{}
      Logger.Start←{}
      Config←config
     
      PageTemplates←#.Pages.⎕NL ¯9.4
     
      allocated←0
      :For port :In ports←∪Config.(Port,Ports)
          :If allocated←0=1⊃,AllocatePort port
              Config.Port←port
              :Leave
          :EndIf
      :EndFor
      ('Unable to allocate any TCP/IP port in ',1↓∊⍕¨',',¨ports)⎕SIGNAL(~allocated)/11
      {}#.DRC.SetProp'.' 'EventMode' 1 ⍝ report Close/Timeout as events
      {}#.DRC.SetProp ServerName'FIFOMode' 1
      {}#.DRC.SetProp ServerName'DecodeBuffers' 15
     
      #.HtmlElement.RenderBugDefault←Config.RenderBug
    ∇

    ∇ UnMake
      :Implements Destructor
      :Trap 0 ⋄ End ⋄ :EndTrap
    ∇

    ∇ r←AllocatePort port;ipv;server;msg
    ⍝ Starts Conga server, allocates TCP/IP port
     
      :If Config.Secure
          :If ∧/(~0∊⍴)¨Config.(CertFile KeyFile)
          :AndIf ⊃∧/#.Files.Exists¨Config.(CertFile KeyFile)
              {}#.DRC.SetProp'.' 'RootCertDir'Config.RootCertDir
              server←1⊃#.DRC.X509Cert.ReadCertFromFile Config.CertFile
              server.KeyOrigin←'DER'Config.KeyFile
              →(0≠1⊃r←#.DRC.Srv'' ''port'http' 10000('X509'server)('SSLValidation'Config.SSLFlags))⍴0 ⍝ Must have Conga v2.1
              1 Log'Starting secure server using certificate ',Config.CertFile
          :Else
              1 Log'Invalid certificate parameters'
              r←1
              →0
          :EndIf
      :Else
          →(0≠1⊃r←#.DRC.Srv'' ''port'http' 10000)⍴0
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

    ∇ inst MoveRequestData REQ;data;m;i;lcp;props;args;mask
      :Access public shared
      inst._PageData←⎕NS''
      :If 0≠1↑⍴data←{⍵[⍋↑⍵[;1];]}REQ.Arguments⍪REQ.Data
          :If 0∊m←1,2≢/data[;1]
              data←(m/data[;1]),[1.5]m⊂data[;2]
          :EndIf
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
              :Trap 0
                  args[;1]←inst._PageData PrepareJSONTargets args[;1]
                  ⍎'inst._PageData.(',(⍕args[;1]),')←(⊃⍣(1=⍬⍴⍴args))args[;2]'
              :EndTrap
          :EndIf
      :EndIf
    ∇

    ∇ r←conns HandleRequest arg;rc;obj;evt;data;REQ;res;startsize;length;ext;filename;enc;encodeMe;cacheMe;which;encoderc;html;enctype;status;response;hdr;done;offset;z
    ⍝ conns - connection namespace
    ⍝ arg [1] conga rc [2] object name [3] event [4] data
      r←0
      arg←,⊆arg
      (rc obj evt data)←4↑arg,(⍴arg)↓0 '' '' ''
      :Select evt
      :Case 'HTTPHeader'
          conns.Req←⎕NEW #.HTTPRequest data
      :Case 'HTTPBody'
          conns.Req.ProcessBody data
      :Case 'HTTPChunk'
          conns.Req.ProcessChunk data
      :Case 'HTTPTrailer'
          conns.Req.ProcessTrailer data
      :EndSelect
     
      →0↓⍨conns.Req.Complete ⍝ exit if request is not complete
     
      REQ←conns.Req
      REQ.Server←⎕THIS ⍝ Request will also contain reference to the Server
      res←REQ.Response
      startsize←length←0
     
      :If 200=res.Status
          :If 2=conns.⎕NC'PeerAddr' ⋄ REQ.PeerAddr←conns.PeerAddr ⋄ :EndIf       ⍝ Add Client Address Information
          8 Log REQ.(PeerAddr Method Page)
     
          :If 2=conns.⎕NC'PeerCert' ⋄ REQ.PeerCert←conns.PeerCert ⋄ :EndIf       ⍝ Add Client Cert Information
     
          REQ.OrigPage←REQ.Page ⍝ capture the original page
          REQ.Page←Config.DefaultPage{∧/⍵∊'/\':'/',⍺ ⋄ '/\'∊⍨¯1↑⍵:⍵,⍺ ⋄ ⍵}REQ.Page ⍝ no page specified? use the default
          REQ.Page,←(~'.'∊{⍵/⍨⌽~∨\'/'=⌽⍵}REQ.Page)/Config.DefaultExtension ⍝ no extension specified? use the default
          ext←⊃¯1↑#.Files.SplitFilename filename←Config Virtual REQ.Page
     
          SessionHandler.GetSession REQ
          Authentication.Authenticate REQ
          :If REQ.Response.Status≠401 ⍝ Authentication did not fail
              :If Config.AllowedHTTPMethods∊⍨⊂REQ.Method
                  onHandleRequest REQ ⍝ overridable
                  :If REQ.Page endswith Config.DefaultExtension ⍝ MiPage?
                      filename HandleMSP REQ
                  :Else
                      :If REQ.Method≡'get'
                          REQ.ReturnFile filename
                      :Else
                          REQ.Fail 501 ⍝ Service Not Implemented
                      :EndIf
                  :EndIf
              :Else
                  REQ.Fail 501 ⍝ Service Not Implemented
              :EndIf
          :EndIf
     
          enc←','#.Utils.penclose' '~⍨REQ.GetHeader'accept-encoding' ⍝ check if client supports encoding
          encodeMe←(~0∊⍴enc)∧Config.UseContentEncoding  ⍝ initialize a flag whether to encode this response, don't compresss if running as a handler
          encodeMe>←(⊂ext)∊'png' 'gif' 'jpg' ⍝ don't try to compress compressed graphics, should probably add zip files, etc
          cacheMe←0
     
          :If 1=res.File ⍝ See HTTPRequest.ReturnFile
              (startsize length)←0,2 ⎕NINFO res.HTML
              encodeMe←0
          :EndIf
     
          :If (200=res.Status)∧encodeMe ⍝ if our HTTP status is 200 (OK) and we're okay to encode
          :AndIf 1024<⍴res.HTML ⍝ don't bother compressing less than 1K
          :AndIf 0≠which←⊃Encoders.Encoding{(⍴⍺){(⍺≥⍵)/⍵}⍺⍳⍵}enc ⍝ try to match what encodings they accept to those we provide
              (encoderc html)←Encoders[which].Compress res.HTML
              :If 0=encoderc
                  length←startsize←⍴res.HTML
                  :If startsize>⍴html ⍝ did we save anything by compressing
                      length←⍴res.HTML←html ⍝ use it
                      res.Headers⍪←'Content-Encoding'(enctype←Encoders[which].Encoding)
                      4 Log'Used ',enctype,' compression on "',REQ.Page,'", transmitted% = ',2⍕length{⎕DIV←1 ⋄ ⍺÷⍵}startsize
                  :Else
                      4 Log'Compression not used on "',REQ.Page,'", startsize = ',(⍕startsize),', compressed length = ',⍕length
                  :EndIf
              :ElseIf 0=res.File
                  2 Log'Compression failed'
                  length←⍴res.HTML ⍝ otherwise, send uncompressed
              :EndIf
          :ElseIf 0=res.File
              startsize←length←⍴res.HTML←∊res.HTML
          :EndIf
     
          :If (200=res.Status)∧cacheMe ⍝ if cacheable, set expires
          :AndIf 0<Config.HTTPCacheTime
              res.Headers⍪←'Expires'(Config.HTTPCacheTime #.Dates.HTTPDate ⎕TS)
          :EndIf
      :EndIf
     
      res.Headers⍪←{0∊⍴⍵:'' '' ⋄ 'Server'⍵}Config.Server
      status←(⊂'HTTP/1.1'),res.((⍕Status)StatusText)
      :If res.File
          response←''res.HTML
      :Else
          response←res.HTML
          :If 160=⎕DR response
              response←'UTF-8'⎕UCS response
          :EndIf
      :EndIf
      done←length≤offset←⍴res.HTML
      res.MSec-⍨←⎕AI[3]
      res.Bytes←startsize length
  
      :If 0≠1⊃z←#.DRC.Send obj(status,res.Headers response)
          (1+(1⊃z)∊1008 1119)Log'"HandleRequest" closed socket ',obj,' due to error: ',(⍕z),' sending response'
      :EndIf
     
      conns.(LastActive Active)←0
     
      :If REQ.CloseConnection
          ConnectionDelete conns
      :Else
          conns.Active←0
      :EndIf
     
      8 Log REQ.PeerAddr status
      Logger.Log REQ
    ∇

    ∇ file HandleMSP REQ;⎕TRAP;inst;class;z;props;lcp;args;i;ts;date;n;expired;data;m;oldinst;names;html;sessioned;page;root;MS3;token;mask;resp;t;RESTful;APLJax;flag;path;name;ext;list;fn;msg
    ⍝ Handle a "MiServer Page" request
      path name ext←#.Files.SplitFilename file
     RETRY:
     
      :If 1≠n←⊃⍴list←''#.Files.List file ⍝ does the file exist?
          :If 0=n ⍝ no match
              :If Config.RESTful ⍝ check for RESTful URI
                  (list file)←Config FindRESTfulURI REQ
                  n←⊃⍴list
              :EndIf
          :Else ⍝ multiple matches??
              1 Log'Multiple matching files found for "',file,'"?'
          :EndIf
          :If 1≠n
              :If 0=n
              :AndIf #.Files.DirExists Config.AppRoot,REQ.OrigPage↓⍨'/\'∊⍨⊃REQ.OrigPage
                  →0⍴⍨CheckDirectoryBrowser REQ
              :EndIf
              REQ.Fail 404 ⋄ →0
          :EndIf
      :EndIf
     
      date←∊list[1;3]
     
      MS3←RESTful←expired←0
      APLJax←REQ.isAPLJax
     
      :If sessioned←326=⎕DR REQ.Session ⍝ do we think we have a session handler active?
      :AndIf 0≠⍴REQ.Session.Pages     ⍝ Look for existing Page in Session
      :AndIf (n←⍴REQ.Session.Pages)≥i←REQ.Session.Pages._PageName⍳⊂REQ.Page
          inst←i⊃REQ.Session.Pages ⍝ Get existing instance
          :If expired←inst._PageDate≢date  ⍝ Timestamp unchanged?
          :AndIf expired←(⎕SRC⊃⊃⎕CLASS inst)≢(1 #.Files.ReadText file)~⊂''
              oldinst←inst
              REQ.Session.Pages~←inst
              4 Log'Page: ',REQ.Page,' ... has been updated ...'
          :EndIf
      :AndIf ~expired
          4 Log'Using existing instance of page: ',REQ.Page
          :If 9=⎕NC'#.HtmlPage'
              :If MS3←∨/(∊⎕CLASS inst)∊#.HtmlPage ⋄ inst._Request←REQ ⋄ :EndIf
          :EndIf
          :If 9=⎕NC'#.RESTfulPage'
              :If RESTful←∨/(∊⎕CLASS inst)∊#.RESTfulPage
                  inst._Request←REQ
              :EndIf
          :EndIf
      :Else
          :Trap 11 22 92
              inst←Config.AppRoot LoadMSP file ⍝ ⎕NEW ⎕SE.SALT.Load file,' -target=#.Pages'
          :Case 11 ⋄ REQ.Fail 500 ⋄ 1 Log'Domain Error trying to load "',file,'"' ⋄ →0 ⍝ Domain Error: HTTP Internal Error
          :Case 22 ⋄ REQ.Fail 404 ⋄ 1 Log'File not found - "',file,'"' ⋄ →0 ⍝ File Name Error: HTTP Page not found
          :Case 92 ⋄ REQ.Response.HTML,←'<p>Unable to load page ',REQ.Page,' due to a translation error.<br/>This is typically caused by trying to load a page containing Unicode characters when running MiServer under a Classic (not Unicode) version of Dyalog APL.</p>'
              REQ.Fail 500 ⋄ →0
          :EndTrap
          4 Log'Creating new instance of page: ',REQ.Page
          inst._PageName←REQ.Page
          inst._PageDate←date
          MS3←RESTful←0
          :If 9=⎕NC'#.HtmlPage'
              :If MS3←∨/(∊⎕CLASS inst)∊#.HtmlPage
              :OrIf RESTful←∨/(∊⎕CLASS inst)∊#.RESTfulPage
                  inst.(_Request _PageRef)←REQ inst
                  :If 0≡REQ.RESTfulReq
                      REQ.RESTfulReq←''
                  :EndIf
              :EndIf
          :EndIf
     
              ⍝ ======= Expiration (newer version of page is available) Logic =======
              ⍝ If RESTful or not sessioned, let anything through
              ⍝ If sessioned and expired, let it though
              ⍝ If sessioned but not expired, check if GET
          :If RESTful<sessioned>expired
          :AndIf ~REQ.isGet
              inst._TimedOut←1
          :EndIf
     
          :If sessioned ⋄ REQ.Session.Pages,←inst ⋄ inst.Session←REQ.Session.ID ⋄ :EndIf
      :EndIf
     
      :If sessioned ⋄ token←REQ.(Page,⍕Session.ID)
      :ElseIf ~0∊⍴REQ.PeerAddr ⋄ token←REQ.(Page,PeerAddr)
      :Else ⋄ token←⍕⎕TID
      :EndIf
     
    ⍝!!!BPB!!! Finish Me
      :If 0≠inst.⎕NC'Cacheable'
      :AndIf inst.Cacheable
      :AndIf ~0∊⍴inst._cache
          REQ.Response.HTML←inst._cache
          →0
      :EndIf
     
      :Hold token
          onHandleMSP REQ ⍝ overridable
     
          :If expired∧REQ.isPost ⍝ move old public fields (those beginning with '_' are excluded)
              {0:: ⋄ ⍎'inst.',⍵,'←oldinst.',⍵}¨⊃∩/{⍵/⍨'_'≠⊃¨⍵}¨(inst oldinst).⎕NL ¯2.2
          :EndIf
     
     ⍝ Move arguments / parameters into Public Properties
          inst MoveRequestData REQ
     
          fn←'Render'
          :If APLJax>RESTful ⍝ if it's an APLJax (XmlHttpRequest) request (but not web service)
              REQ.Response.NoWrap←1
              fn←'APLJax' ⍝ default callback function name
              :If MS3
                  inst._what←REQ.GetData'_what'
                  inst._event←REQ.GetData'_event'
                  inst._value←REQ.GetData'_value'
                  inst._selector←REQ.GetData'_selector'
                  inst._target←REQ.GetData'_target'
                  inst._currentTarget←REQ.GetData'_currentTarget'
                  inst._callback←REQ.GetData'_callback'
                  :If ~0∊⍴inst._callback ⍝ does the request specify a callback function?
                      fn←inst._callback
                  :EndIf
              :EndIf
          :ElseIf RESTful
              fn←'Respond'
          :ElseIf MS3
              fn←'Compose'
          :EndIf
     
          :If 3≠⌊|inst.⎕NC⊂fn            ⍝ and is it a public method?
              1 Log msg←'Method "',fn,'" not found (or not public) in page "',REQ.Page,'"'
              REQ.Fail 500 msg
              →0
          :EndIf
     
          :If MS3
              :If APLJax
                  inst._resetAjax
              :Else
                  inst._init ⍝ reset instance's content
              :EndIf
          :EndIf
     
          :If (1=Config.TrapErrors)∧9=⎕NC'#.DrA' ⋄ ⎕TRAP←#.DrA.TrapServer
          :ElseIf (0=Config.Production) ⋄ ⎕TRAP←(800 'C' '→FAIL')(811 'E' '⎕SIGNAL 801')(813 'E' '⎕SIGNAL 803')(812 'S')((85,99+⍳500)'N')(0 'E' '⍎#.Boot.Oops') ⍝ enable development debug framework
          :EndIf
     
          :If flag←APLJax
          :AndIf flag←inst.{6::0 ⋄ _DebugCallbacks}⍬
          :EndIf
     
          :Trap 85   ⍝ we use 85⌶ because "old" MiPages use REQ.Return internally (and don't return a result)...
              resp←flag Debugger'inst.',fn,(MS3⍱RESTful)/' REQ'  ⍝ ... whereas "new" MiPages return the HTML they generate
              resp←(#.JSON.toAPLJAX⍣APLJax)resp
              inst._TimedOut←0
     
              :If RESTful
                  :If ~(⊂'content-type')(∊#.Strings.nocase)REQ.Response.Headers[;1]
                      'Content-Type'REQ.SetHeader'application/json'
                      resp←1 #.JSON.fromAPL resp
                  :EndIf
              :EndIf
              REQ.Return resp
          :Else
              :If APLJax
                  1 Log'No result returned by callback method "',fn,'" in page "',REQ.Page,'"'
                  REQ.Return''
              :EndIf
          :EndTrap
     
          :If APLJax⍱RESTful
              'Content-Type'REQ.SetHeaderIfNotSet'text/html;charset=utf-8'
          :EndIf
     
          :If ~REQ.Response.NoWrap
              :If MS3∨RESTful
                  inst.Wrap
              :Else
                  inst.Wrap REQ
              :EndIf
          :ElseIf MS3>APLJax
              inst.Render
          :EndIf
      :EndHold
      →0
     
     FAIL:
      ⎕←'* Carrying on...'
      ⎕TRAP←0⍴⎕TRAP
      REQ.Fail 500 ⋄ →0
     
     RESUME: ⍝ RESUME is used by DrA
      ⎕TRAP←0/⎕TRAP ⍝ Let framework trapping take over
     
      :If #.DrA.UseHTTP ⋄ REQ.Fail 500 ⋄ →0 ⋄ :EndIf
     
      REQ.Title'Unhandled Execution Error'
      REQ.Style'Styles/error.css'
      html←'<h1>Server Error in ''',REQ.Page,'''.<hr width=100% size=1 color=silver></h1>'
      html,←'<h2><i>Unhandled Exception Error</i></h2>'
      html,←'<b>Description:</b> An unhandled exception occurred during the execution of the current web request.'
      :If #.DrA.Mode=2 ⍝ Allows editing
          html,←'<br><br><b>Edit page: <a href="/Admin/EditPage?FileName=',REQ.Page,'">',REQ.Page,'</a><br>'
      :EndIf
      html,←'<br><br><b>Exception Details:</b><br><br>'
      :If (#.DrA.Mode>0)∧0≠⍴#.DrA.LastFile ⋄ html,←#.DrA.(GenHTML LastFile)
      :Else ⋄ html,←'<code><font face="APL385 Unicode">',(⊃,/#.DrA.LastError,¨⊂'<br>'),'</font></code>'
      :EndIf
      REQ.Return html
    ∇

    ∇ CacheMSP file
      :Access public
     
    ∇

    ∇ inst←root LoadMSP file;path;name;ext;ns;class
      path name ext←#.Files.SplitFilename file
      ns←root NamespaceForMSP file
      inst←⎕NEW class←⎕SE.SALT.Load file,' -target=',⍕ns
     
      :If ~name(≡#.Strings.nocase)class←⊃¯1↑'.'#.Utils.penclose⍕class
          1 Log'Filename/Classname mismatch: ',file,' ≢ ',class
      :EndIf
    ∇

    ∇ ns←root NamespaceForMSP file;path;name;ext;rpath;tree;created;n;level;node;mask
    ⍝ because a MiSite can have a folder structure where files in different folders may have the same name
    ⍝ we construct a namespace hierarchy which mimics the folder hierarchy to contain MiPage instances
      path name ext←#.Files.SplitFilename file
      rpath←(⍴root)↓path
      ns←#.Pages
      tree←'/'#.Utils.penclose rpath
      created←(n←⍴tree)⍴0
     
      :For level :In ⍳n
          :Select ⊃ns.⎕NC⊂node←level⊃tree
          :Case 0
              :Trap 11
                  ns←⍎node ns.⎕NS''
              :Else
                  1 Log'Unable to create namespace in #.Pages for page in file "',file,'"'
                  ⎕SIGNAL 11
              :EndTrap
              ns⍎'(',(⍕PageTemplates),')←',∊'##.'∘,∘⍕¨PageTemplates
              created[level]←1
          :Case 9.1
              ns←ns⍎node
          :Else
              1 Log'Unable to create namespace in #.Pages for page in file "',file,'" due to name conflict'
              :While ∨/created  ⍝ clean up any created nodes
                  ns←ns.##
                  ns.⎕EX⊃(mask←⌽<\⌽created)/tree
                  created∧/←~mask
              :EndWhile
              ⎕SIGNAL 11
          :EndSelect
      :EndFor
    ∇

    :endsection

    :section Misc

    ∇ r←flag Debugger w
      :If flag
          ⎕←'* Callback debugging active on this page, press Ctrl-Enter to trace into Callback function'
          Debug ⎕STOP'Debugger'
      :EndIf
      :Trap 85
     Debug:r←1(85⌶)w
      :Else
          :If flag ⋄ ⍬ ⎕STOP'Debugger' ⋄ :EndIf
          ⎕SIGNAL 85
      :EndTrap
      :If flag ⋄ ⍬ ⎕STOP'Debugger' ⋄ :EndIf
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
              file←#.Files.Normalize path,('/\'∊⍨¯1↑path)↓(⍴t)↓page
          :EndIf
      :EndIf
    ∇

    ∇ r←isWin
      r←'Win'≡3↑1⊃'.'⎕WG'APLVersion'
    ∇

    ∇ (list filename)←Config FindRESTfulURI REQ;page;n;inds;i
    ⍝ RESTful URIs can be ambiguous
    ⍝ For example:  is /Misc/ws/ws
    ⍝    a call to /Misc/ws/ws.mipage
    ⍝    a call to /Misc/ws.mipage    with /ws as a parameter?
    ⍝ or a call to /Misc.mipage       with /ws/ws as a parameter?
    ⍝ This utility attempts to look up the folder structure to find the matching file
     
      inds←⌽{⍵/⍳⍴⍵}'/'=REQ.OrigPage
      :For i :In inds
          page←(i-1)↑REQ.OrigPage
          ⍝page←Config.DefaultPage{∧/⍵∊'/\':'/',⍺ ⋄ '/\'∊⍨¯1↑⍵:⍵,⍺ ⋄ ⍵}page ⍝ no page specified? use the default
          page,←(~'.'∊{⍵/⍨⌽~∨\'/'=⌽⍵}page)/Config.DefaultExtension ⍝ no extension specified? use the default
          filename←Config Virtual page
          :If 1=⊃⍴list←''#.Files.List filename
              REQ.RESTfulReq←i↓REQ.OrigPage
              REQ.Page←page
              →0
          :EndIf
      :EndFor
    ∇

    ∇ r←CheckDirectoryBrowser REQ;folder;file;F;filter;template;propagate;up;directory;inst;code;page;breadcrumb
    ⍝ checks if the requested URI is a browsable directory
      folder←page←{⍵,'/'/⍨~'/\'∊⍨¯1↑⍵}REQ.OrigPage
      r←up←0
      :Trap 0/0 ⍝!!! remove 0/ after testing
          :While r⍱0∊⍴folder
              :If #.Files.Exists file←Config.AppRoot,folder,'Folder.xml'
                  F←⎕NEW #.Boot.ConfigSpace file
                  :If F.Get'browsable' 1 0
                      filter←F.Get'filter'
                      template←{0∊⍴⍵:'MiPage' ⋄ ⍵}F.Get'template'
                      propagate←F.Get'propagate' 1 0
                      →0⍴⍨up>propagate
                      code←⊂':Class directorybrowser : #.Pages.',template
                      code,←'∇Compose' ':Access Public'
                      code,←⊂'Add #._html.title ''',(1↓⊃⌽('/'∘=⊂⊢)¯1↓page),''''
                      breadcrumb←(∊1∘↓,⍨((,\{'<a class="breadcrumb" href="',⍺,'">',⍵,'</a>'}¨⊢)⊃⊂⍨¯1⌽'/'=⊃))#.Files.SplitFilename page,filter
                      code,←⊂'Add #._html.h2 ''Directory Listing for ',breadcrumb,''''
                      code,←('''dirBrowser'' Add #._DC.DirectoryBrowser ''',page,''' ''',filter,''' ',(⍕propagate),' ',⍕up)'∇' ':EndClass'
                      inst←⎕NEW ⎕FIX code
                      inst._Request←REQ
                      inst.Compose
                      inst.Wrap
                      r←1
                  :EndIf
              :Else
                  up←1
                  folder←{⍵↓⍨-⊥⍨⍵≠'/'}¯1↓folder
              :EndIf
          :EndWhile
      :EndTrap
    ∇
    :endsection

:EndClass
