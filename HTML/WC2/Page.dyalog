:Class Page : #.MiPage

⍝ Class to be used with HTMLRenderer (Dyalog v16 and later)

    :field public _Renderer
    :field public _Url←''
    :field public _Interactive←0
    :field public _CallbackFn←'Callback'
    :field public _Config
    :field public _Request
    :field public _Args
    :field public Props
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
      _PageName←3⊃⎕SI,⊂'Page'
    ∇

    ∇ Close
      :Implements destructor
      :Trap 0
          _Renderer.Close
      :EndTrap
    ∇

    ∇ Run
      :Access public
      run&0
    ∇

    ∇ run arg
      :Access public
      _Renderer←⎕NEW'HTMLRenderer'(,⊂'Event'('HTTPRequest' '__CallbackFn'))
      :If ~0∊⍴props←_Renderer.PropList∩Props.⎕NL ¯2
          {_Renderer⍎⍺,'←⍵'}/¨{⍵(Props⍎⍵)}¨props
      :EndIf
      :If ~0∊⍴_Url ⋄ _Renderer.URL←_Url ⋄ :EndIf
      Render
      _Renderer.Wait
    ∇

    ∇ Render;html
      :Access public
      html←⎕BASE.Render
      _Renderer.HTML←html
    ∇

    ∇ {r}←{args}Add content
      :Access public
      :If 0=⎕NC'args' ⋄ args←⊢ ⋄ :EndIf
      r←args ⎕BASE.Add content
    ∇

    ∇ r←__CallbackFn args;ext;mimeType;filename;url;mask;cbdata;request;int
      :Access public
      ∘∘∘
      r←args
      →0⍴⍨0∊⍴8⊃args
      request←⎕NEW #.WC2.HtmlRenderRequest args
      :If 'ProcessRequest'≡3⊃args
          :If ~0∊⍴ext←(819⌶)1↓⊃¯1↑1 ⎕NPARTS request.Page  ⍝ need to handle case where another MiPage is requested
          :AndIf #.Files.Exists filename←∊1 ⎕NPARTS _Config #.MiServer.Virtual request.Page
              mimeType←#.Boot.ms.Config.ContentTypes tableLookup ext
              r[10]←⊂{{(⎕NUNTIE ⍵)⊢⎕NREAD ⍵,(⎕DR' '),¯1}⍵ ⎕NTIE 0}filename
              r[7]←mimeType
              r[4 5 6]←1 200 'OK'
              r[9]←⊂NL,⍨∊NL,⍨¨'Content-Type: ' 'Content-Length: ',⍕¨mimeType(≢10⊃r)
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
                  r[10]←⊂#.JSON.toAPLJAX cbdata ⍝ we expect an APLJAX-style response
                  r[4 5 6 7]←1 200 'OK' 'application/json'
                  r[9]←⊂NL,⍨∊NL,⍨¨'Content-Type: ' 'Content-Length: ',¨⍕¨'application/json'(≢10⊃r)
              :EndIf
          :EndIf
      :Else ⍝ got unexpected value in 3⊃args??
          ∘∘∘ ⍝ this should never happen
      :EndIf
      ∘∘∘
    ∇

    ∇ r←Callback;valence
      :Access public overridable
      r←''
      :If ''≢_callback
          :If 3=⎕NC _callback
              valence←|1 2⊃⎕AT _callback
              r←⍎('_Args '/⍨valence=2),_callback,' _Request'/⍨valence>0
          :EndIf
      :EndIf
    ∇

    tableLookup←{(⍺[;2],⊂'')[⍺[;1]⍳⊆,⍵]}

:EndClass
