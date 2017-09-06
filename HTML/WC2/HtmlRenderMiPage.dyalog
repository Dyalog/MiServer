:Class HtmlRenderMiPage : #.MiPage

    (⎕IO ⎕ML ⎕WX)←1 1 3

    :field public _Renderer
    :field public _Url←''
    :field public _Interactive←0
    :field public _CallbackFn←'Callback'
    :field public _Config
    :field public _Request
    :field public _Args 
    :field public ReadOnly NL←⎕UCS 10

    begins←{⍺≡(⍴⍺)↑⍵}

    ∇ make
      :Access public
      :Implements constructor
      makeCommon
    ∇

    ∇ make1 arg
        ⍝ args are: [1] HTML content [2] URL
      :Access public
      :Implements constructor
      arg←,⊆arg
      (content _Url)←2↑arg,(⍴arg)↓'' ''
      :If ~0∊⍴content ⋄ Add content ⋄ :EndIf
      makeCommon
    ∇

    ∇ makeCommon
      _Renderer←⎕NEW⊂'HTMLRenderer'
      _Renderer.onHTTPRequest←'__CallbackFn'
      _Config←#.Boot.ms.Config
      _PageName←3⊃⎕SI,⊂'HtmlRenderMiPage'
      #.HtmlElement._interactive←_Interactive
    ∇

    ∇ SetInteractive
      :Implements trigger _Interactive
      #.HtmlElement._interactive←_Interactive
    ∇

    ∇ {r}←Wait
      :Access public
      Render
      :If ~0∊⍴_Url ⋄ _Renderer.URL←_Url ⋄ :EndIf
      r←_Renderer.Wait
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
      r←args
      request←⎕NEW #.HtmlRender.HtmlRenderRequest args
      :If 'ProcessRequest'≡3⊃args
          :If ~0∊⍴ext←(819⌶)1↓⊃¯1↑1 ⎕NPARTS request.Page  ⍝ need to handle case where another MiPage is requested
          :AndIf #.Files.Exists filename←∊1 ⎕NPARTS _Config #.MiServer.Virtual request.Page
              mimeType←#.Boot.ms.Config.ContentTypes tableLookup ext
              r[10]←⊂{{(⎕NUNTIE ⍵)⊢⎕NREAD ⍵,(⎕DR' '),¯1}⍵ ⎕NTIE 0}filename
              r[7]←mimeType
              r[4 5 6]←1 200 'OK'
              r[9]←⊂NL,⍨∊NL,⍨¨'Content-Type: ' 'Content-Length: ',⍕¨mimeType(≢10⊃r)
          :Else
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
     
              int←_Interactive
              _Interactive←0
     
              :If _CallbackFn≢'Callback'
                  r←⍎'_Args ',_CallbackFn,' _Request'  ⍝ did you specify your own HTMLRenderer callback function?
              :Else
                  cbdata←Callback
                  r[10]←⊂#.JSON.toAPLJAX cbdata ⍝ we expect an APLJAX-style response
                  r[4 5 6 7]←1 200 'OK' 'application/json'
                  r[9]←⊂NL,⍨∊NL,⍨¨'Content-Type: ' 'Content-Length: ',¨⍕¨'application/json'(≢10⊃r)
              :EndIf

              _Interactive←int

          :EndIf
      :Else ⍝ got unexpected value in 3⊃args??
          ∘∘∘ ⍝ this should never happen
      :EndIf
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
