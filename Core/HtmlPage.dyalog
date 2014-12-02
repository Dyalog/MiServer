﻿:class HtmlPage : #.HtmlElement

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
      r←Head.Render
      r←'<!DOCTYPE html>',(⎕NEW #._html.html(Head.Render,b)).Render
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
      Content←Head
      Content,←⊂b
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
    ∇

    ∇ {r}←{attr}Add what;c
      :Access public
      attr←{6::⍵ ⋄ attr}''
      :If isClass⊃what
          :If #._html.script∊c←⎕CLASS⊃what
              scripts,←what
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
      r←{(⎕NEW #._html.link).SetAttr(('href'⍵)('rel' 'stylesheet')('type' 'text/css'))}style
    ∇

:endclass