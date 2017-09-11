:Class Page : #.MiPage

⍝ Class to be used with HTMLRenderer (Dyalog v16 and later)

    :field public _Renderer←''
    :field public _Url←''
    :field public _Interactive←0
    :field public _CallbackFn←'Callback'
    :field public _Config
    :field public _Request
    :field public _Args
    :field public Props
    :field public Coord←'ScaledPixel'
    :field public Size←⍬ ⍬
    :field public ReadOnly NL←⎕UCS 10
    :field public shared APLVersion←{⊃(//)⎕VFI ⍵/⍨2>+\'.'=⍵}2⊃#.⎕WG 'APLVersion'

    begins←{⍺≡(⍴⍺)↑⍵}

    ∇ make
      :Access public
      :Implements constructor
      ⎕SIGNAL makeCommon
    ∇

    ∇ make1 arg
        ⍝ args are: [1] HTML content [2] URL
      :Access public
      :Implements constructor
      arg←,⊆arg
      (content _Url)←2↑arg,(⍴arg)↓'' ''
      :If ~0∊⍴content ⋄ Add content ⋄ :EndIf
      ⎕SIGNAL makeCommon
    ∇

    ∇ r←makeCommon
      →0↓⍨0∊⍴r←(16>APLVersion)/⊂('EN' 11)('Message' 'Dyalog v16.0 or later is required to use HTMLRenderer-based features')
      Props←⎕NS''
      _Config←#.Boot.ms.Config
      _PageName←3⊃⎕SI,⊂'WC2Page'
    ∇

    ∇ Close
      :Implements destructor
      :Trap 0
          2 ⎕NQ _Renderer'Close'
      :EndTrap
    ∇

    ∇ Run
      :Access public
      :If 0∊⍴_Renderer
          run&0
      :Else
          Reset
          Render
      :EndIf
    ∇

    ∇ Reset
      :Access public
      Body.Content←''
      Head.Content←''
    ∇


    ∇ run arg
      :Access public
      _Renderer←⎕NEW'HTMLRenderer'(('Coord'Coord)('Size' Size)('Event'('onHTTPRequest' '__CallbackFn'))('URL'_PageName))
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

    ∇ {r}←{args}New content
      :Access public
      :If 0=⎕NC'args' ⋄ args←⊢ ⋄ :EndIf
      r←args ⎕BASE.New content
    ∇


    ∇ r←__CallbackFn args;ext;mimeType;filename;url;mask;cbdata;request;int;handler;content
      :Access public
      r←args
      →0⍴⍨0∊⍴8⊃args
      request←⎕NEW #.WC2.HtmlRenderRequest(args(819⌶_PageName))
      :If 0∊⍴request.Page ⍝ initialization
          r[4 5 6 7]←1 200 'OK' 'text/html'
          r[10]←⊂UnicodeToHtml ⎕BASE.Render
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
      r←,⍕txt
      u←127<ucs←⎕UCS r
      (u/r)←(~∘' ')¨↓'G<&#ZZZ9;>'⎕FMT u/ucs
      r←∊r
    ∇

    tableLookup←{(⍺[;2],⊂'')[⍺[;1]⍳⊆,⍵]}

:EndClass
⍝)(!UnicodeToHtml!!0 0 0 0 0 0 0!0
