:class HtmlPage : #.HtmlElement

    ⍝∇:require =\HtmlElement.dyalog

    :field public Head
    :field public Body
    :field public Scripts
    :field public StylesLinks

    ∇ make
      :Access public
      :Implements constructor
      _init
      Tag←'html'
    ∇

    ∇ r←RenderBody;scr;mask
    ⍝ Called by MiPage because rendering can add scripts to the head element
      :Access public
      :If ~0∊⍴scr←∪Scripts
      :AndIf ∨/mask←{~0∊⍴⍵}¨scr.Content
          Body.Add¨mask/scr
      :EndIf
      r←Body.Render
    ∇

    ∇ r←RenderPage b;scr;mask;content
      :Access public
      content←Content
      :If ~0∊⍴scr←∪Scripts
      :AndIf ∨/mask←{0∊⍴⍵}¨scr.Content
          Head.Add¨mask/scr
      :EndIf
      :If ~0∊⍴StylesLinks
          Head.Add¨StylesLinks
      :EndIf
      Content←(Head.Render),b
      r←'<!DOCTYPE html>',∊⎕BASE.Render
      Content←content
    ∇

    ∇ r←Render;s;b;mask;scr;sty;content;headContent
      :Access public
      content←Content
      headContent←Head.Content
      :If ~0∊⍴scr←∪Scripts
      :AndIf ∨/mask←{~0∊⍴⍵}¨scr.Content
          Body.Add¨mask/scr
      :EndIf
      b←Body.Render
      :If ~0∊⍴scr←∪Scripts
      :AndIf ∨/mask←{0∊⍴⍵}¨scr.Content
          Head.Add¨mask/scr
      :EndIf
      :If ~0∊⍴sty←∪⌽StylesLinks
          Head.Add¨StylesLinks
      :EndIf
      Content←(Head.Render),b
      r←'<!DOCTYPE html>',∊⎕BASE.Render
      Content←content
      Head.Content←headContent
    ∇

    ∇ _init
      :Access public
      Body←⎕NEW #.HtmlElement'body'
      Head←⎕NEW #.HtmlElement'head'
      (Body Head)._PageRef←⎕THIS
      Scripts←''
      StylesLinks←''
      Handlers←''
      Content←Head,Body
    ∇

    ∇ {r}←{attr}Add what;c
      :Access public
      :If 0=⎕NC'attr' ⋄ attr←'' ⋄ :EndIf
      :If isClass⊃what
⍝          :If #._html.script∊c←∊⎕CLASS⊃what
⍝              r←Scripts,←{(⎕NEW(⊃⍵)((⊃⍣(2=⊃⍴⍵))1↓⍵))}what
          :If #._JQ.Handler∊c←∊⎕CLASS⊃what
              r←Body.Handlers,←{(⎕NEW(⊃⍵)((⊃⍣(2=⊃⍴⍵))1↓⍵))}what
              :If 0∊⍴r.Selector ⋄ r.Selector←'html' ⋄ :EndIf ⍝ if no selector specified, use page level
          :ElseIf ⊃∨/c∊¨⊂#._html.(style link)
              r←StylesLinks,←attr New what
          :ElseIf ⊃∨/c∊¨⊂#._html.(title meta noscript base) ⍝ elements that belong exclusively or primarily in the <head> element
              r←attr Head.Add what
          :Else
              r←attr Body.Add what
          :EndIf
          r._PageRef←⎕THIS
      :Else
          r←attr Body.Add what
      :EndIf
    ∇

    ∇ {r}←{attr}Insert what;c
      :Access public
      :If 0=⎕NC'attr' ⋄ attr←'' ⋄ :EndIf
      :If isClass⊃what
          :If #._html.script∊c←∊⎕CLASS⊃what
              r←Scripts,⍨←{(⎕NEW(⊃⍵)((⊃⍣(2=⊃⍴⍵))1↓⍵))}what
          :ElseIf #._JQ.Handler∊c
              r←Body.Handlers,⍨←{(⎕NEW(⊃⍵)((⊃⍣(2=⊃⍴⍵))1↓⍵))}what
              :If 0∊⍴r.Selector ⋄ r.Selector←'html' ⋄ :EndIf ⍝ if no selector specified, use page level
          :ElseIf ⊃∨/c∊¨⊂#._html.(style link)
              r←StylesLinks,⍨←{(⎕NEW(⊃⍵)((⊃⍣(2=⊃⍴⍵))1↓⍵))}what
          :ElseIf ⊃∨/c∊¨⊂#._html.(title meta noscript base) ⍝ elements that belong exclusively or primarily in the <head> element
              r←attr Head.Insert what
          :Else
              r←attr Body.Insert what
          :EndIf
          r._PageRef←⎕THIS
      :Else
          r←attr Body.Insert what
      :EndIf
    ∇

    ∇ {r}←On args
      :Access public
      r←Body.On args
      r.Selector←'⍎document'
    ∇

    ∇ {r}←{attr}New what
      :Access public
      :If 0=⎕NC'attr' ⋄ attr←'' ⋄ :EndIf
      r←attr ⎕BASE.New what
      r._PageRef←⎕THIS
    ∇

    dtlb←{⍵{((∨\⍵)∧⌽∨\⌽⍵)/⍺}' '≠⍵}

    ∇ r←Style style
      :Access public
      r←{(⎕NEW #._html.link).Set(('href'⍵)('rel' 'stylesheet')('type' 'text/css'))}style
    ∇

:endclass
