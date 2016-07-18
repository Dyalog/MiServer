:class InputSubmit : #._html.input
⍝ Description:: Dyalog input submit button widget
⍝ Constructor:: [value]
⍝ value    - value for the input (this is displayed on the button)

    ∇ Make
      :Access public
      :Implements constructor :base
      (value type)←'Submit' 'submit'
    ∇

    ∇ Make1 args;n;v
      :Access public
      :Implements constructor :base
      args←eis args
      value←⊃1↑args defaultArgs,⊂'Submit'
      type←'submit'
    ∇
:endclass