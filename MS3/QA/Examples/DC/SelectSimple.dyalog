 msg←SelectSimple;name;result;pick;afruit
⍝ Test /Examples/DC/SelectSimple

 afruit←'Grapes'
 'fruit'Select afruit
 Click'btnPressMe'

 result←Find'output'
 {0≠⍴result.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If result.Text≢'You picked: ',afruit
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf