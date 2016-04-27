 msg←Test dummy;X;O;output;R;C

 (X O)←'XO'
 output←Find'output'
 R←'board_r'∘,
 C←{∊⍕¨⍺,'c',⍵}

 ⍝ Check that X is the first player
 :If 0=⍴msg←'output'WaitFor X

 ⍝ Check that an X is put onto the board
     Click R 1 C 1
 :AndIf 0=⍴msg←(R 1 C 1)WaitFor X

 ⍝ Check that the next player is O
 :AndIf 0=⍴msg←output WaitFor O

 ⍝ Check that an X is put onto the board
     Click R 3 C 3
 :AndIf 0=⍴msg←(R 3 C 3)WaitFor O

 ⍝ Check that the re return to the first player
 :AndIf 0=⍴msg←output WaitFor X

 ⍝ Check that the board is cleared
     Click'reset'
     msg←(R 1 C 1)WaitFor'   '
 :EndIf
