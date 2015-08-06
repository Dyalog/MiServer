:class codeSimple: MiPageSample
⍝ Control:: _html.code 
⍝ Description:: Embed a code fragment

    ∇ Compose
      :Access public 
      Add 'Format this computer code: {(⊥⍨' '=⍵)↓⍵}'
      Add _.br _.br
      Add 'It should become '
      Add _.code ' {(⊥⍨'' ''=⍵)↓⍵}'
    ∇

:endclass
