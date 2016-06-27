 msg←Test dummy

 input←'TagName'Find'input'
 output←Find'output'

 input SendKeys'rank off'
 :If 0=⍴msg←output WaitFor'No matching records found'

     input SendKeys Backspace
     0=⍴msg←∊∪output WaitFor¨'⍴⍴XA' 'Dyalog' 'FinnAPL' '((((⍴⍴XA1)-⍴⍴XA2)⍴1),⍴XA2)⍴XA2'
 :EndIf
