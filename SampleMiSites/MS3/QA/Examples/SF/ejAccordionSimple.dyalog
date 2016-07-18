 msg←Test dummy;p1;p2

 (p1 p2)←'Ut sed viverra velit.' 'Ac malesuada ante.'

 :If 0=⍴msg←'p1'WaitFor p1'First section not found'

     Wait 500 ⍝ Wait for animation
     'LinkText'Click'Second'
 :AndIf 0=⍴msg←'p2'WaitFor p2'Second section failed to expand'

     Wait 500 ⍝ Wait for animation
     'LinkText'Click'First'
     msg←'p1'WaitFor p1'First section failed to expand'
 :EndIf