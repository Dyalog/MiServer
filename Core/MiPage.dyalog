:Class MiPage : #.HtmlPage

    ⍝∇:require =\HtmlPage.dyalog
    ⍝∇:require =\JSON.dyalog

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
    :field public _
⍝    :field public Tag←#.HtmlElement
    :field public shared _true←#.JSON.true     ⍝ same definition as in #.JSON
    :field public shared _false←#.JSON.false   ⍝ same definition as in #.JSON

    _used←'' ⍝ keep track of what's been used

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
      (_html _HTML _JQ _SF _JQM _JSS _DC _)←#.(_html _HTML _JQ _SF _JQM _JSS _DC _)
      _PageData←⎕NS''
    ∇

    ∇ {r}←Render;b
      :Access public
      :If ''≢OnLoad
          Use'JQuery'
      :EndIf
      b←RenderBody
      :If ~0∊⍴_Styles
          {(Head.Insert _html.link).Set(('href'⍵)('rel' 'stylesheet')('type' 'text/css'))}¨∪⌽_Styles
      :EndIf
      :If ~0∊⍴_Scripts
          {(Head.Add _html.script).Set('src'⍵)}¨∪_Scripts
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

    ∇ {r}←Wrap
      :Access public
      r←Render
    ∇

    ∇ Use resources;n;ind;t;x
      :Access public
      resources←{2>|≡⍵:,⊂⍵ ⋄ ⍵}resources
      :For x :In resources
          :If ~(⊂x)∊_used
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
              _used,←⊂x
          :EndIf
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
          r←,proto
      :Else
          r←_PageData⍎names
⍝!!! BPB - not sure if we need this - it messes up multiple values for select(combolist) controls
⍝          :If 1<|≡r
⍝              r←∊r
⍝          :EndIf
          :If 0 2∊⍨10|⎕DR proto
              r←∊r
          :Else
              r←{0::⍵ ⋄ 0∊⍴⍵:⍬ ⋄ w←⍵ ⋄ ((w='-')/w)←'¯' ⋄ ⊃(//)⎕VFI w}r
          :EndIf
      :EndIf
    ∇

    ∇ r←{proto}SessionGet names
      :Access public
      proto←{6::⍵ ⋄ proto}''
      names←,⍕names
      names←#.Strings.deb names
      :If ' '∊names
          names←{⎕ML←3 ⋄ ⍵⊂⍨⍵≠' '}names
          r←proto∘SessionGet¨names
      :ElseIf 2≠_Request.Session.⎕NC names
          r←proto
      :Else
          r←_Request.Session⍎names
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
      content←(⎕NEW #.HtmlElement(''content)).Render
      r←⊂('replace'selector)('data'content)
    ∇
    ∇ r←selector Append content
      :Access public
      content←(⎕NEW #.HtmlElement(''content)).Render
      r←⊂('append'selector)('data'content)
    ∇
    ∇ r←selector Prepend content
      :Access public
      content←(⎕NEW #.HtmlElement(''content)).Render
      r←⊂('prepend'selector)('data'content)
    ∇
    ∇ r←Execute content
      :Access public
      r←⊂('execute'content)
    ∇

    ∇ r←name Assign data
      :Access public
      r←⊂('assign'name)('data'data)
    ∇

    :endsection

    :section Position
    ∇ ref Position args;inds;mask;parameters;my;at;of;collision;within;q
      :Access public shared
      ⍝ ref  - a reference to an instance of anything based on HtmlElement
      ⍝ args - position information per jQueryUI's Position widget http://api.jqueryui.com/position/
      ⍝        can be in any of the following forms
      ⍝      1) positional (my at of collision within)  N.B. we don't use the "using" parameter
      ⍝         example:  myDiv Position 'left top' 'right bottom' '#otherElement'
      ⍝                   positions myDiv's top left corner at the bottom right corner of the element with id "otherElement"
      ⍝      2) paired
      ⍝                   myDiv Position 'my' 'left top' 'at' 'right bottom' 'of' '#otherElement'
      ⍝                   myDiv Position ('my' 'left top') ('at' 'right bottom') ('of' '#otherElement')
      ⍝                   myDiv Position 3 2⍴'my' 'left top' 'at' 'right bottom' 'of' '#otherElement'
      ⍝ Note: positional arguments are in form horizontal (left center right) vertical (top center bottom)
     
      parameters←'my' 'at' 'of' 'collision' 'within'
      q←{1⌽'''''',{⍵/⍨1+''''=⍵}⍕⍵}
      :If isInstance ref
          :If 2=⍴⍴args ⍝ matrix
              args←,args
          :ElseIf 3=≡args
              args←⊃,/args
          :EndIf
          args←eis args
          inds←parameters⍳args
          :If ∨/mask←inds≤⍴parameters
              :If mask≡(2×+/mask)⍴1 0
                  parameters←mask/args
                  args←(1⌽mask)/args
              :EndIf
          :Else
              parameters←(⍴args)↑parameters
          :EndIf
          parameters(ref{⍺⍺⍎'Position.',⍺,'←',q ⍵})¨args
          ref.Uses,←⊂'JQueryUI'
          ref.Use
      :EndIf
    ∇
    :endsection

    :section Event Handling Support
    ∇ r←isPost
      :Access public
      r←{0::0 ⋄ _Request.isPost}⍬
    ∇

    ∇ r←isAPLJax
      :Access public
      r←{0::0 ⋄ _Request.isAPLJAX}⍬
    ∇

    ∇ r←sel Css args ⍝ JQuery css cover
      :Access public
      r←(sel #._JSS.JQuery'css')args
    ∇

    ∇ r←sel Val args ⍝ JQuery val cover
      :Access public
      r←(sel #._JSS.JQuery'val')args
    ∇

    ∇ r←sel Attr args ⍝ JQuery attr cover
      :Access public
      r←(sel #._JSS.JQuery'attr')args
    ∇

    ∇ r←sel RemoveAttr args ⍝ JQuery removeAttr cover
      :Access public
      r←(sel #._JSS.JQuery'removeAttr')args
    ∇

    ∇ r←sel Html args ⍝ JQuery html cover
      :Access public
      r←(sel #._JSS.JQuery'html')args
    ∇

    :endsection

    ∇ Debug;⎕TRAP
      :Access public
      ⎕TRAP←0⍴⎕TRAP
      ∘∘∘
    ∇


:EndClass