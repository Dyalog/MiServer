:Class MiPage : #.HtmlPage

    ⍝∇:require =\HtmlPage.dyalog
    ⍝∇:require =\JSON.dyalog

    :Field Public _PageName←'' ⍝ Page file name
    :Field Public _PageDate←'' ⍝ Page saved date
    :field Public _Request     ⍝ HTTPRequest
    :field Public _Scripts←''
    :field Public _Styles←''
    :field Public _CssReset←''    ⍝ location of CSS Reset file (if any)
    :field Public _CssOverride←'' ⍝ location of CSS Override file (if any)
    :field Public _Serialized←1   ⍝ serialized forms to return in _PageData
    :field Public _event          ⍝ set by APLJAX callback - event that was triggered
    :field Public _what           ⍝ set by APLJAX callback - name or id of the triggering element
    :field Public _value          ⍝ set by APLJAX callback - value of the triggering element
    :field Public _selector       ⍝ set by APLJAX callback - CSS/jQuery selector for the element that triggered the event
    :field Public _callback       ⍝ set by APLJAX callback - name of the callback function
    :field Public _target         ⍝ set by APLJAX callback - id of the target element
    :field Public _currentTarget  ⍝ set by APLJAX callback - id of the currentTarget element
    :field Public _PageData       ⍝ namespace containing any data passed via forms or URL
    :field Public _AjaxResponse←''
    :field Public _DebugCallbacks←0
    :field Public _TimedOut←0
    :field Public _cache←''       ⍝ cached content if page is marked cacheable
    :field Public OnLoad←''       ⍝ page equivalent to ⎕LX
    :field Public Charset←'UTF-8' ⍝ default charset
    :field Public Cacheable←0     ⍝ is the page cacheable?

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

    ∇ {r}←Render;b;styles
      :Access public
      Head.Insert #._html.meta''('charset=',⍕Charset)
      :If ''≢OnLoad
          Use'JQuery'
      :EndIf
      b←RenderBody
      styles←∪_Styles
      styles←styles,⍨{0∊⍴⍵:⍵ ⋄ ⊂⍵}_CssReset
      styles←styles,{0∊⍴⍵:⍵ ⋄ ⊂⍵}_CssOverride
      :If ~0∊⍴styles
          {Insert #._DC.StyleSheet ⍵}¨⌽∪styles
      :EndIf
      :If ~0∊⍴_Scripts
          {(Insert _html.script).Set('src=',⍵)}¨⌽∪_Scripts
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
      :If Cacheable ⋄ _cache←r ⋄ :EndIf
    ∇

    ∇ Use resources;n;ind;t;x;server
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
                  :If 0≠⎕NC'_Request.Server'
                      server←_Request.Server
                  :ElseIf 0≠⎕NC'#.Boot.ms'
                      server←#.Boot.ms
                  :EndIf
                  :If 0≠server.⎕NC⊂'Config.Resources'
                  :AndIf ~0∊n←1↑⍴server.Config.Resources
                      :If n≥ind←server.Config.Resources[;1]⍳⊂x
                          :If ~0∊⍴t←{(~0∘∊∘⍴¨⍵)/⍵}(⊂ind 2)⊃server.Config.Resources
                              _Scripts,⍨←t
                          :EndIf
                          :If ~0∊⍴t←{(~0∘∊∘⍴¨⍵)/⍵}(⊂ind 3)⊃server.Config.Resources
                              _Styles,⍨←t
                          :EndIf
                      :Else
                          1 server.Log _PageName,' references unknown resource: ',x
                      :EndIf
                  :EndIf
              :EndSelect
              _used,←⊂x
          :EndIf
      :EndFor
    ∇

    ∇ r←{proto}Get names;noproto;char
      :Access public
      :If noproto←0=⎕NC'proto' ⋄ proto←'' ⋄ :EndIf
      names←eis names
      names←,⍕names
      names←#.Strings.deb names
      :If ' '∊names
          names←{⎕ML←3 ⋄ ⍵⊂⍨⍵≠' '}names
          r←proto∘Get¨names
      :ElseIf ~(_PageData.⎕NC names)∊2 9
          r←,proto
      :Else
          r←_PageData⍎names
          :If 2≤≡r
              :If 1=⍴,r
                  r←⊃r
              :EndIf
          :EndIf
          :If noproto≥char←0=2|⎕DR proto
          :AndIf isString r
              r←#.JSON.toAPL r
          :EndIf
          :If noproto⍱char
              :If 1≠2|⎕DR r
                  r←,proto
              :EndIf
          :EndIf
      :EndIf
    ∇

    ∇ r←GetNames str
      :Access public
      →0⍴⍨0∊⍴r←_PageData.⎕NL-2 9
      →0⍴⍨0∊⍴str
      r←r/⍨r #.Strings.beginsWith¨⊂str
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
      :ElseIf 0=_Request.Session.⎕NC names
          r←proto
      :Else
          r←_Request.Session⍎names
          :If 1<|≡r ⋄ r←∊r ⋄ :EndIf
          :If ~0 2∊⍨10|⎕DR proto  ⍝ if the prototype is numeric
          :AndIf 0 2∊⍨10|⎕DR r    ⍝ and the element is character
              r←{0∊⍴⍵:⍬ ⋄ w←⍵ ⋄ ((w='-')/w)←'¯' ⋄ ⊃(//)⎕VFI w}r
          :EndIf
      :EndIf
    ∇

    ∇ _Close session ⍝ Called when the session ends
    ⍝ this method is specific to #.SimpleSessions and is called when a
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

    ∇ r←renderContent content;c
      :Access public shared
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
      r←⊂('execute'(renderContent content))
    ∇

    ∇ r←name Assign data
      :Access public
      r←⊂('assign'name)('data'data)
    ∇

    :endsection

    :section Position

    ∇ ref Position args;inds;mask;parameters;my;at;of;collision;within;q
      :Access public
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
          SetUse
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
      r←(sel #._JSS.JQuery'css')args
    ∇

    ∇ r←sel Val args ⍝ JQuery val cover
      r←(sel #._JSS.JQuery'val')args
    ∇

    ∇ r←sel Prop args ⍝ JQuery prop cover
      r←(sel #._JSS.JQuery'prop')args
    ∇

    ∇ r←sel Attr args ⍝ JQuery attr cover
      r←(sel #._JSS.JQuery'attr')args
    ∇

    ∇ r←sel RemoveAttr args ⍝ JQuery removeAttr cover
      r←(sel #._JSS.JQuery'removeAttr')args
    ∇

    ∇ r←sel Html args ⍝ JQuery html cover
      r←(sel #._JSS.JQuery'html')args
    ∇

    ∇ r←sel Show args ⍝ JQuery show cover
      r←(sel #._JSS.JQuery'show')args
    ∇

    ∇ r←sel Hide args ⍝ JQuery hide cover
      r←(sel #._JSS.JQuery'hide')args
    ∇

    ∇ r←sel Toggle args ⍝ JQuery toggle cover
      r←(sel #._JSS.JQuery'toggle')args
    ∇

    ∇ r←Submit sel ⍝ JQuery submit cover
      r←(sel #._JSS.JQuery'submit')''
    ∇

    :endsection

:EndClass
