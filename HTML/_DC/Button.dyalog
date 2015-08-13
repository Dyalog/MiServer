:class Button : #._html.button
⍝ Description:: Dyalog Button widget
⍝ Constructor:: [content [name [value [attrs]]]]
⍝ content - the content of the button (what shows up on the button's face)
⍝ name  - the id/name for the button
⍝ value - the value for the button, this is what's returned to the server
⍝ attr  - attribute(s) for the button
⍝ Public Fields:: None
⍝ Notes::
⍝ If either the id or name are undefined, the undefined one is set to the same value as the defined one
⍝ If both id and name are undefined, a unique id is generated and the name is set to it as well
⍝ The default type for this button is 'button', not 'submit' which is the default for the native HTML5 button

    :field _content←''

    ∇ Make0
      :Access public
      :Implements constructor
      type←'button'
    ∇

    ∇ Make args;n;v
      :Access public
      :Implements constructor
      args←eis⍣(~0∊⍴args)⊢args
      (Content name value attrs)←args defaultArgs''UNDEF UNDEF''
      type←'button'
    ∇

    ∇ r←Render
      :Access public
      :If (⊂name)∊UNDEF''
          :If (⊂id)∊UNDEF''
              SetId
          :EndIf
          name←id
      :ElseIf UNDEF≡id
          id←name
      :EndIf
      r←⎕BASE.Render
    ∇

:endclass