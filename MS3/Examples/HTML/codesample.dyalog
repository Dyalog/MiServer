:class codesample: MiPageSample
⍝ Control:: HTML.code 
⍝ Description:: this is an example of use of code which defines a piece of computer code

    ∇ Compose
      :Access public 
      Add 'Format this computer code: {(⊥⍨' '=⍵)↓⍵}'
      Add _.br _.br
      Add 'It should become '
      Add _.code ' {(⊥⍨'' ''=⍵)↓⍵}'
    ∇

:endclass
