 msg←Test dummy;X;O

 (X O)←'XO'

 ⍝ Check that X is the first player
 :If 0=⍴msg←'xo'WaitFor X

 ⍝ Check that an X is put onto the board
     Click'A1'
 :AndIf 0=⍴msg←'A1'WaitFor X

 ⍝ Check that the next player is O
 :AndIf 0=⍴msg←'xo'WaitFor O

 ⍝ Check that an X is put onto the board
     Click'C3'
 :AndIf 0=⍴msg←'C3'WaitFor O

 ⍝ Check that the re return to the first player
 :AndIf 0=⍴msg←'xo'WaitFor X

 ⍝ Check that the board is cleared
     Click'reset'
     msg←'A1'WaitFor'   '
 :EndIf