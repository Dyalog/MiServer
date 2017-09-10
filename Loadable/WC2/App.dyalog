:Class App

⍝ Class to be used with HTMLRenderer (Dyalog v16 and later)

    :field public _Renderer←''
    :field public _Url←''
    :field public _CallbackFn←'Callback'
    :field public _Config
    :field public _Request
    :field public _Args
    :field public Props
    :field public ReadOnly NL←⎕UCS 10
    :field public shared APLVersion←{⊃(//)⎕VFI ⍵/⍨2>+\'.'=⍵}2⊃#.⎕WG 'APLVersion'

    begins←{⍺≡(⍴⍺)↑⍵}

    ∇ make1 appPath
      :Access public
      :Implements constructor
      ⎕SIGNAL makeCommon
    ∇

    ∇ r←makeCommon
      →0↓⍨0∊⍴r←(16>APLVersion)/⊂('EN' 11)('Message' 'Dyalog v16.0 or later is required to use HTMLRenderer-based features')
      Props←⎕NS''
      _Config←#.Boot.ms.Config
    ∇

    ∇ Run
      :Access public
      run&0
    ∇

    ∇ run arg
      :Access public
      _Renderer←⎕NEW'HTMLRenderer'(('Event'('onHTTPRequest' '__CallbackFn'))('URL'_PageName))
      :If ~0∊⍴props←_Renderer.PropList∩Props.⎕NL ¯2
          {_Renderer⍎⍺,'←⍵'}/¨{⍵(Props⍎⍵)}¨props
      :EndIf
      _Renderer.Wait
    ∇

    ∇ Render
      :Access public
      _Renderer.HTML←⎕BASE.Render
    ∇

    ∇ {r}←{args}Add content
      :Access public
      :If 0=⎕NC'args' ⋄ args←⊢ ⋄ :EndIf
      r←args ⎕BASE.Add content
    ∇

    ∇ r←__CallbackFn args;ext;mimeType;filename;url;mask;cbdata;request;int;handler;content
      :Access public
      r←args
      →0⍴⍨0∊⍴8⊃args
      request←⎕NEW #.WC2.HtmlRenderRequest(args(819⌶_PageName))
      :If 0∊⍴request.Page ⍝ initialization
          r[4 5 6 7]←1 200 'OK' 'text/html'
          r[10]←⊂⎕BASE.Render
          r[9]←⊂NL,⍨∊NL,⍨¨'Content-Type: ' 'Content-Length: ',⍕¨r[7 10]
      :ElseIf ~0∊⍴ext←(819⌶)1↓⊃¯1↑1 ⎕NPARTS request.Page  ⍝ need to handle case where another MiPage is requested
          :If #.Files.Exists filename←∊1 ⎕NPARTS _Config #.MiServer.Virtual request.Page
              :If ' '∨.≠handler←⊃_Config.MappingHandlers.handler/⍨<\_Config.MappingHandlers.ext≡¨⊂'.',ext
                  (mimeType content)←⍎'filename #.MappingHandlers.',handler,' request'
              :Else
                  mimeType←#.Boot.ms.Config.ContentTypes tableLookup ext
                  content←{{(⎕NUNTIE ⍵)⊢⎕NREAD ⍵,(⎕DR' '),¯1}⍵ ⎕NTIE 0}filename
              :EndIf
              r[7]←mimeType
              r[4 5 6]←1 200 'OK'
              r[9]←⊂NL,⍨∊NL,⍨¨'Content-Type: ' 'Content-Length: ',⍕¨mimeType(≢10⊃r)
              r[10]←⊂content
          :Else
              r[4 5 6 7]←1 404 'NOT FOUND' ''
              r[9 10]←⊂''
          :EndIf
      :ElseIf request.isAPLJax
          _Args←args
          _Request←request
          ⎕THIS #.MiServer.MoveRequestData _Request
          _what←_Request.GetData'_what'
          _event←_Request.GetData'_event'
          _value←_Request.GetData'_value'
          _selector←_Request.GetData'_selector'
          _target←_Request.GetData'_target'
          _currentTarget←_Request.GetData'_currentTarget'
          _callback←_Request.GetData'_callback'
     
          :If _CallbackFn≢'Callback'
              r←⍎'_Args ',_CallbackFn,' _Request'  ⍝ did you specify your own HTMLRenderer callback function?
          :Else
              cbdata←Callback
              r[10]←⊂UnicodeToHtml #.JSON.toAPLJAX cbdata ⍝ we expect an APLJAX-style response
              r[4 5 6 7]←1 200 'OK' 'application/json'
              r[9]←⊂NL,⍨∊NL,⍨¨'Content-Type: ' 'Content-Length: ',¨⍕¨'application/json'(≢10⊃r)
          :EndIf
      :EndIf
    ∇          
    
    
    ∇ file HandleMSP REQ;⎕TRAP;inst;class;z;props;lcp;args;i;ts;date;n;expired;data;m;oldinst;names;html;sessioned;page;root;MS3;token;mask;resp;t;RESTful;APLJax;flag;path;name;ext;list;fn
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
              1 Log'Method "',fn,'" not found (or not public) in page "',REQ.Page,'"'
              REQ.Fail 500
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
          :ElseIf (0=Config.Production) ⋄ ⎕TRAP←(800 'C' '→FAIL')(811 'E' '⎕SIGNAL 801')(813 'E' '⎕SIGNAL 803')(812 'S')(85 'N')(0 'E' '⍎#.Boot.Oops') ⍝ enable development debug framework
          :EndIf
     
          :If flag←APLJax
          :AndIf flag←inst.{6::0 ⋄ _DebugCallbacks}⍬
          :EndIf
     
          :Trap 85   ⍝ we use 85⌶ because "old" MiPages use REQ.Return internally (and don't return a result)...
              resp←flag Debugger'inst.',fn,(MS3⍱RESTful)/' REQ'  ⍝ ... whereas "new" MiPages return the HTML they generate
              resp←(#.JSON.toAPLJAX⍣APLJax)resp
              inst._TimedOut←0
     
              :If RESTful
                  :If ~∨/(⊂'content-type')(≡#.Strings.nocase)¨REQ.Response.Headers[;1]
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
    ∇


    ∇ r←Callback;_context;_found;_valence
      :Access public overridable
      r←''
      :If ''≢_callback
          _context←''
          :While ~_found←3=⎕NC _context,_callback
              :If ~0∊⍴_context
                  :If (,'#')≡⍕⍎_context ⍝ popped up to root and still not found?
                      :Leave
                  :EndIf
              :EndIf
              _context,←'##.'
          :EndWhile
          :If _found
              _valence←|1 2⊃⎕AT _context,_callback
              r←⍎('_Args '/⍨_valence=2),_context,_callback,' _Request'/⍨_valence>0
          :Else
              ⎕←'Callback function not found: ',_callback
          :EndIf
      :EndIf
    ∇

    ∇ r←UnicodeToHtml txt;u;ucs
      :Access public shared
    ⍝ converts chars ⎕UCS >127 to HTML safe format
      r←,⎕FMT txt
      u←127<ucs←⎕UCS r
      (u/r)←(~∘' ')¨↓'G<&#ZZZ9;>'⎕FMT u/ucs
      r←∊r
    ∇

    tableLookup←{(⍺[;2],⊂'')[⍺[;1]⍳⊆,⍵]}

:EndClass
⍝)(!UnicodeToHtml!!0 0 0 0 0 0 0!0
