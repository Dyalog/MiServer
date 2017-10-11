 msg←Test dummy;output;Has;Transitions
 output←Find'output'
 Has←{∧/∨/¨(⊂⍣(1=≡⍵)⊢⍵)⍷¨⊂output.GetAttribute⊂'style'}
 Transitions←{
     ~0=⍴msg←'Wrong initial style'/⍨Has ⍵:msg
     ~0=⍴msg←'Missing transistion'/⍨~Has ⍵⊣⎕DL 0.1⊣Click ⍺:msg
     ~0=⍴msg←'Wrong final style'/⍨Has ⍵⊣⎕DL 1:msg
     ''
 }

 :If 1 ⍝ for consistency and easy of inserting more tests

 :AndIf 0=⍴msg←'Toggle'Transitions'position'

 :AndIf 0=⍴msg←'Toggle'Transitions'position'

 :AndIf 0=⍴msg←'Hide'Transitions'position' 'opacity'

 :AndIf 0=⍴msg←'Show'Transitions'opacity'

 :EndIf