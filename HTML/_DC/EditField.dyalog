:class EditField : #._html.input
⍝ Description:: Dyalog text input field widget
⍝ Constructor:: name [value [attr1=data1 attr2=data2 ...]]
⍝ name  - the id/name for the input field
⍝ value - the initial value for the input field
⍝ attr  - attribute(s) for the input field
⍝ Public Fields:: None
⍝ Notes::
⍝ If either the id or name are undefined, the undefined one is set to the same value as the defined one
⍝ If both id and name are undefined, a unique id is generated and the name is set to it as well

    ∇ make0
      :Access public
      :Implements constructor
      type←'text'
    ∇

    ∇ make args;att
      :Access public
      :Implements constructor
      args←eis args
      name value att←args defaultArgs UNDEF UNDEF''
      Set att
      type←'text'
    ∇

    ∇ r←Render
      :Access public
      SetInputName
      r←⎕BASE.Render
    ∇

:endclass