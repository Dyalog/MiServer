:Class MiPage : #.HtmlPage

    ⍝∇:require =\HtmlPage.dyalog
    ⍝∇:require =\JSON.dyalog

    :Field Public _PageName←'' ⍝ Page file name
    :Field Public _PageDate←'' ⍝ Page saved date
    :field Public _Request     ⍝ HTTPRequest
    :field Public _Scripts←''
    :field Public _Styles←''
    :field public _Serialized←1 ⍝ serialized forms to return in _PageData
    :field Public _event        ⍝ set by APLJAX callback - event that was triggered
    :field Public _what         ⍝ set by APLJAX callback - name or id of the triggering element
    :field Public _value        ⍝ set by APLJAX callback - value of the triggering element
    :field Public _selector     ⍝ set by APLJAX callback - CSS/jQuery selector for the element that triggered the event
    :field Public _callback     ⍝ set by APLJAX callback - name of the callback function
    :field public _PageData
    :field public _AjaxResponse←''
    :field public _DebugCallbacks←0
    :field public OnLoad←''     ⍝ page equivalent to ⎕LX

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
      _PageData←⎕NS''
    ∇

    ∇ {r}←Render;b
      :Access public
      :If ''≢OnLoad
          Use'JQuery'
      :EndIf
      b←RenderBody
      :If ~0∊⍴_Styles
          {(Head.Insert _html.link).Set(('href=',⍵)('rel' 'stylesheet')('type' 'text/css'))}¨∪⌽_Styles
      :EndIf
      :If ~0∊⍴_Scripts
          {(Head.Add _html.script).Set('src=',⍵)}¨∪_Scripts
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
      resources←eis resources
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
      names←eis names
      names←,⍕names
      names←#.Strings.deb names
      :If ' '∊names
          names←{⎕ML←3 ⋄ ⍵⊂⍨⍵≠' '}names
          r←proto∘Get¨names
      :ElseIf 2≠_PageData.⎕NC names
          r←,proto
      :Else
          r←_PageData⍎names
          :If 2=≡r
              :If 1=⍴,r
                  r←⊃r
              :EndIf
          :EndIf
          r←#.JSON.toAPL r
⍝          :If ~isChar proto
⍝              r←{0::⍵ ⋄ 0∊⍴⍵:⍬ ⋄ w←⍵ ⋄ ((w='-')/w)←'¯' ⋄ ⊃(//)⎕VFI w}r
⍝          :EndIf
      :EndIf
    ∇

    ∇ r←{proto}GetRaw names
      :Access public
      proto←{6::⍵ ⋄ proto}''
      names←eis names
      names←,⍕names
      names←#.Strings.deb names
      :If ' '∊names
          names←{⎕ML←3 ⋄ ⍵⊂⍨⍵≠' '}names
          r←proto∘Get¨names
      :ElseIf 2≠_PageData.⎕NC names
          r←,proto
      :Else
          r←_PageData⍎names
          :If 2=≡r
              :If 1=⍴,r
                  r←⊃r
              :EndIf
          :EndIf
          :If ~isChar proto
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

    ∇ r←_id
      :Access public
      ⍝ as there seems to be a problem with at least some Syncfusion widgets
      ⍝ being able to provide the id (or name) of the triggering element, we try to obtain it from _what or _selector
      r←''
      :Trap 0
          :If 0∊⍴r←_what
          :AndIf '#'=⊃_selector
              r←1↓_selector
          :EndIf
      :EndTrap
    ∇

    ∇ Respond arg
      :Access public
      ∘∘∘
    ∇

    ∇ r←renderContent content;c
      r←''
      content←eis content
      :While ~0∊⍴content
          :Select ≡c←⊃content
          :Case 0
              :If isClass c
                  :Select ⊃⍴content
                  :Case 1
                      r,←(⎕NEW c).Render
                  :Case 2
                      r,←(⎕NEW c(2⊃content)).Render
                  :Else
                      r,←(⎕NEW c(1↓content)).Render
                  :EndSelect
              :ElseIf isInstance c
                  r,←c.Render
              :Else
                  r,←(⎕NEW #.HtmlElement(''content)).Render
              :EndIf
              content←''
          :Case 1
              :If isClass⊃c
                  r,←(⎕NEW(⊃c)(1↓c)).Render
              :ElseIf isInstance⊃c
                  ∘∘∘ ⍝ should not happen! (I think)
              :Else
                  r,←(⎕NEW #.HtmlElement(''c)).Render
              :EndIf
              content←1↓content
          :Else
              r,←renderContent c
              content←1↓content
          :EndSelect
      :EndWhile
    ∇

    ∇ r←selector Replace content
      :Access public
      r←⊂('replace'selector)('data'(renderContent content))
    ∇
    ∇ r←selector Append content
      :Access public
      r←⊂('append'selector)('data'(renderContent content))
    ∇
    ∇ r←selector Prepend content
      :Access public
      r←⊂('prepend'selector)('data'(renderContent content))
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