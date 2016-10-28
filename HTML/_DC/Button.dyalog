:class Button : #._html.button
⍝ Description:: Dyalog Button widget
⍝ Constructor:: [content [name [value [attrs]]]]
⍝ content - the content of the button (what shows up on the button's face)
⍝ name  - the id/name for the button
⍝ value - the value for the button, this is what's returned to the server
⍝ attr  - attribute(s) for the button
⍝ Public Fields:: None
⍝ Notes::
⍝ The default type for this button is 'button', not 'submit' which is the default for the native HTML5 button

    ∇ Make0
      :Access public
      :Implements constructor
      type←'button'
      Content←'OK'
    ∇

    ∇ Make args
      :Access public
      :Implements constructor
      args←eis⍣(~0∊⍴args)⊢args
      (Content name value attrs)←args defaultArgs'OK'UNDEF UNDEF''
      type←'button'
    ∇

    ∇ r←Render
      :Access public
      SetInputName
      r←⎕BASE.Render
    ∇

:endclass
