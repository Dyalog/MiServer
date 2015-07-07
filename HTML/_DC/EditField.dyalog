:class EditField : #._html.input
⍝ Description:: Dyalog text input field widget
⍝ Constructor:: name [value [attr1=data1 attr2=data2 ...]]
⍝ name  - the id/name for the input field
⍝ value - the
⍝ attr  - one of 'submit' (default), 'reset', or 'button'
⍝ Public Fields::
⍝ Text - the text to appear on the button

⍝ HTML:: <input id=⍵[1] value=⍵[2]

    ∇ make args;att
      :Access public
      :Implements constructor
      args←eis args
      name value att←3↑args,(2=⍴args)↓UNDEF''
      Set att
      id←name
      type←'text'
     
    ∇
:endclass