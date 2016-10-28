 msg←Test dummy;X;O;R;C;At;Next

 (X O)←' line' ' circle'
 R←'board_r'∘,
 C←{∊⍕¨⍺,'c',⍵}
 At←{'Expected symbol did not appear'/⍨0≡'CssSelector'Find'#',⍵,⍺⊣Click ⍵}
 Next←{'next'WaitFor'Next: ',⍵}

 :If 1

 ⍝ Ready?
 :AndIf 0=⍴msg←'status'WaitFor'Go!'

 ⍝ X is the first player?
 :AndIf 0=⍴msg←Next'X'

 ⍝ X is put onto the board?
 :AndIf 0=⍴msg←X At R 2 C 2

 ⍝ Next player is O?
 :AndIf 0=⍴msg←Next'O'

 ⍝ O is put onto the board?
 :AndIf 0=⍴msg←O At R 2 C 3

 ⍝ Return to the first player?
 :AndIf 0=⍴msg←Next'X'

 ⍝ Keep playing
 :AndIf 0=⍴msg←X At R 1 C 3
 :AndIf 0=⍴msg←O At R 3 C 1
 :AndIf 0=⍴msg←X At R 1 C 1
 :AndIf 0=⍴msg←O At R 1 C 2
 :AndIf 0=⍴msg←X At R 3 C 3

 ⍝ X won?
 :AndIf 0=⍴msg←'status'WaitFor'X wins!'

 ⍝ Check that the board is cleared
 :AndIf 0=⍴msg←'status'WaitFor'Board cleared!'⊣Click'reset'

 :EndIf
