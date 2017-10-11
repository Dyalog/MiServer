 msg←Test dummy;Fi;lis;locs;output;To;After
 Fi←{⍎(⍕⍵)∩⎕D,','}    ⍝ Fix input
 lis←⌷'CssSelectors'Find'#sort li'
 locs←{Fi ⍵}¨lis.Location
 output←Find'output'
 To←{lis[⍺]DragAndDropToOffset(⍵⊃locs)-Fi lis[⍺].Location}
 After←{0=⍴msg←output WaitFor⍕⍺⊣⎕dl 0.1}
 :If 1⊣msg←''

 :AndIf 2 3 4 5 1 After 1 To 5
 :AndIf 5 2 3 4 1 After 5 To 1
 :AndIf 5 3 4 2 1 After 2 To 4
 :AndIf 'reversed'After 3 To 3
 :AndIf 1 5 4 3 2 After 1 To 1
 :AndIf 1 2 5 4 3 After 2 To 2
 :AndIf 1 2 3 5 4 After 3 To 3
 :AndIf 'restored'After 4 To 4

 :EndIf