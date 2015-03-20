:Class MiPage : #.HtmlPage

    ⍝∇:require =\HtmlPage.dyalog

    :Field Public _PageName←'' ⍝ Page file name
    :Field Public _PageDate←'' ⍝ Page saved date
    :field Public _Request     ⍝ HTTPRequest
    :field Public _Scripts←''
    :field Public _Styles←''
    :field public _Serialized←1         ⍝ serialized forms to return in _PageData
    :field Public _event        ⍝ set be APLJAX callback - event that was triggered
    :field Public _what         ⍝ set be APLJAX callback - id of the triggering element
    :field public _PageData
    :field public _AjaxResponse←''
    :field public OnLoad←''     ⍝ page equivalent to ⎕LX
    :field public _html ⍝ base HTML elements
    :field public _HTML ⍝ "Enhanced" HTML elements
    :field public _JQ   ⍝ JQuery/JQueryUI
    :field public _SF   ⍝ SyncFusion
    :field public _JQM  ⍝ JQueryMobile
    :field public _JSS  ⍝ JavaScript Snippets
    :field public _DC   ⍝ Dyalog Controls
    :field public Tag←#.HtmlElement
    :field public shared _true←{⍵⊣⍵.⎕DF'true'}⎕NS ''     ⍝ same definition as in #.JSON
    :field public shared _false←{⍵⊣⍵.⎕DF'false'}⎕NS ''   ⍝ same definition as in #.JSON

    ∇ Make
      :Access public
      :Implements constructor :Base
      MakeCommon
    ∇

    ∇ Make1 req
      :Access public
      _Request←req
      :Implements constructor :base
      MakeCommon
    ∇

    ∇ MakeCommon
      (_html _HTML _JQ _SF _JQM _JSS _DC)←#.(_html _HTML _JQ _SF _JQM _JSS _DC)
      _PageData←⎕NS''
    ∇

    ∇ {r}←Render;b
      :Access public
      :If ''≢OnLoad
          Use'JQuery'
      :EndIf
      b←RenderBody
      :If ~0∊⍴_Styles
          {(Head.Prepend _html.link).SetAttr(('href'⍵)('rel' 'stylesheet')('type' 'text/css'))}¨∪⌽_Styles
      :EndIf
      :If ~0∊⍴_Scripts
          {(Head.Add _html.script).SetAttr('src'⍵)}¨∪_Scripts
      :EndIf
      :If ~0∊⍴Handlers
          b,←∊Handlers.Render
      :EndIf
      :If ''≢OnLoad
          b,←(⎕NEW #._html.script('$(function(){',OnLoad,'});')).Render
      :EndIf
      r←RenderPage b
      :If 0≠⎕NC⊂'_Request.Response'
          _Request.Response.HTML←r
      :EndIf
    ∇

    ∇ Wrap
      :Access public
      Render
    ∇

    ∇ Use resources;n;ind;t;x
      :Access public
      resources←{2>|≡⍵:,⊂⍵ ⋄ ⍵}resources
      :For x :In resources
          :Select ⊃x
          :Case '⍎' ⍝ script
              _Scripts,←⊂1↓x
          :Case '⍕' ⍝ style sheet
              _Styles,←⊂1↓x
          :Else
              :If 0≠⎕NC⊂'_Request.Server.Config.Resources'
              :AndIf ~0∊n←1↑⍴_Request.Server.Config.Resources
                  :If n≥ind←_Request.Server.Config.Resources[;1]⍳⊂x
                      :If ~0∊⍴t←{(~0∘∊∘⍴¨⍵)/⍵}(⊂ind 2)⊃_Request.Server.Config.Resources
                          _Scripts,←t
                      :EndIf
                      :If ~0∊⍴t←{(~0∘∊∘⍴¨⍵)/⍵}(⊂ind 3)⊃_Request.Server.Config.Resources
                          _Styles,←t
                      :EndIf
                  :Else
                      1 _Request.Server.Log _PageName,' references unknown resource: ',x
                  :EndIf
              :EndIf
          :EndSelect
      :EndFor
    ∇

    ∇ r←{proto}Get names
      :Access public
      proto←{6::⍵ ⋄ proto}''
      names←,⍕names
      names←#.Strings.deb names
      :If ' '∊names
          names←{⎕ML←3 ⋄ ⍵⊂⍨⍵≠' '}names
          r←proto∘Get¨names
      :ElseIf 2≠_PageData.⎕NC names
          r←proto
      :Else
          r←_PageData⍎names
          :If 1<|≡r ⋄ r←∊r ⋄ :EndIf
          :If ~0 2∊⍨10|⎕DR proto
              r←{0∊⍴⍵:⍬ ⋄ w←⍵ ⋄ ((w='-')/w)←'¯' ⋄ ⊃(//)⎕VFI w}r
          :EndIf
      :EndIf
    ∇

    ∇ Close session ⍝ Called when the session ends
      :Access Public Overridable
    ∇

    :section APLJax  ⍝ used for building APLJAX responses
    ∇ _resetAjax
      :Access public
      _AjaxResponse←''
    ∇

    ∇ Respond arg
      :Access public
      ∘∘∘
    ∇

    ∇ r←selector Replace content
      :Access public
      :If 326=⎕DR content ⋄ content←(⎕NEW content).Render ⋄ :EndIf
      r←⊂('replace'selector)('data'content)
    ∇
    ∇ r←selector Append content
      :Access public
      :If 326=⎕DR content ⋄ content←(⎕NEW content).Render ⋄ :EndIf
      r←⊂('append'selector)('data'content)
    ∇
    ∇ r←selector Prepend content
      :Access public
      :If 326=⎕DR content ⋄ content←(⎕NEW content).Render ⋄ :EndIf
      r←⊂('prepend'selector)('data'content)
    ∇
    ∇ r←Execute content
      :Access public
      r←⊂('execute'content)
    ∇

    :endsection

    :section Event Handling Support
    ∇ r←a APL w
      :Access public
      r←a w
    ∇
    ∇ r←a JS w
      :Access public
      r←1 a w
    ∇
    ∇ r←a CSS w
      :Access public
      r←2 a w
    ∇
    ∇ r←a ATT w
      :Access public
      r←3 a w
    ∇

    ∇ r←IsPost
      :Access public
      r←{0::0 ⋄ _Request.IsPost}⍬
    ∇
    :endsection

    ∇ Debug;⎕TRAP
      :Access public
      ⎕TRAP←0⍴⎕TRAP
      ∘∘∘
    ∇


:EndClass