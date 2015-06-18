:class HtmlPage : #.HtmlElement

    :field public Head
    :field public Body
    :field public Scripts
    :field public Styles

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

    ∇ r←RenderPage b;scr;mask
      :Access public
      :If ~0∊⍴scr←∪Scripts
      :AndIf ∨/mask←{0∊⍴⍵}¨scr.Content
          Head.Add¨⌽mask/scr
      :EndIf
      :If ~0∊⍴Styles
          Head.Add¨Style¨∪⌽Styles
      :EndIf
      Content←(Head.Render),b
      r←'<!DOCTYPE html>',⎕BASE.Render
    ∇

    ∇ r←Render;s;b;mask;scr;sty
      :Access public
      :If ~0∊⍴scr←∪Scripts
      :AndIf ∨/mask←{~0∊⍴⍵}¨scr.Content
          Body.Add¨mask/scr
      :EndIf
      b←Body.Render
      :If ~0∊⍴scr←∪Scripts
      :AndIf ∨/mask←{0∊⍴⍵}¨scr.Content
          Head.Add¨mask/scr
      :EndIf
      :If ~0∊⍴sty←∪⌽Styles
          Head.Add¨Style¨sty
      :EndIf
      Content←(Head.Render),b
      r←'<!DOCTYPE html>',⎕BASE.Render
    ∇

    ∇ _init
      :Access public
      Body←⎕NEW #.HtmlElement'body'
      Head←⎕NEW #.HtmlElement'head'
      (Body Head)._PageRef←⎕THIS
      Scripts←''
      Styles←''
      Handlers←''
      Content←Head,Body
    ∇

    ∇ {r}←{attr}Add what;c
      :Access public
      :If 0=⎕NC'attr' ⋄ attr←'' ⋄ :EndIf
      :If isClass⊃what
          :If #._html.script∊c←∊⎕CLASS⊃what
              r←Scripts,←{(⎕NEW(⊃⍵)((⊃⍣(2=⊃⍴⍵))1↓⍵))}what
          :ElseIf #._JQ.Handler∊c
              r←Body.Handlers,←{(⎕NEW(⊃⍵)((⊃⍣(2=⊃⍴⍵))1↓⍵))}what
              r.Selectors←'html'
          :ElseIf ⊃∨/c∊¨⊂#._html.(title style meta link noscript base) ⍝ elements that belong exclusively or primarily in the <head> element
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
              r←Scripts,←{(⎕NEW(⊃⍵)((⊃⍣(2=⊃⍴⍵))1↓⍵))}what
          :ElseIf ⊃∨/c∊¨⊂#._html.(title style meta link noscript base) ⍝ elements that belong exclusively or primarily in the <head> element
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
      r.Selectors←'html'
    ∇

    ∇ {r}←New what
      :Access public
      r←⎕NEW what
      r._PageRef←⎕THIS
    ∇

    ∇ r←isClass ao
      :Access public
      r←9.4∊⎕NC⊂'ao'
    ∇

    dtlb←{⍵{((∨\⍵)∧⌽∨\⌽⍵)/⍺}' '≠⍵}

    ∇ r←ScriptFollows
      :Access public
     ⍝ treat following commented lines in caller as a script, lines beginning with ⍝⍝ are stripped out
      r←{⎕ML←1 ⋄ ∊{'⍝'=⊃⍵:'' ⋄ ' ',dtlb ⍵}¨1↓¨⍵/⍨∧\'⍝'=⊃¨⍵}dtlb¨(1+2⊃⎕LC)↓⎕NR 2⊃⎕SI
    ∇
    ∇ r←Style style
      :Access public
      r←{(⎕NEW #._html.link).Set(('href'⍵)('rel' 'stylesheet')('type' 'text/css'))}style
    ∇

:endclass