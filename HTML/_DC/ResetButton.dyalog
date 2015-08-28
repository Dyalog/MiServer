﻿:class ResetButton : #._html.button
⍝ Description:: Dyalog Submit Button widget
⍝ Constructor:: [content [name [value [attrs]]]]
⍝ content - the content of the button (what shows up on the button's face)
⍝ name  - the id/name for the button
⍝ value - the value for the button, this is what's returned to the server
⍝ attr  - attribute(s) for the button
⍝ Public Fields:: None

    ∇ Make0
      :Access public
      :Implements constructor
      type←'reset'
    ∇

    ∇ Make args;n;v
      :Access public
      :Implements constructor
      args←eis⍣(~0∊⍴args)⊢args
      (Content name value attrs)←args defaultArgs''UNDEF UNDEF''
      type←'reset'
    ∇

    ∇ r←Render
      :Access public
      SetInputName
      r←⎕BASE.Render
    ∇

:endclass