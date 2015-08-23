 msg←FieldsetSimple;data;result
⍝ Test /Examples/DC/InputGridSimple

 data←'Morten' 'Kromberg'
 'fname' 'lname'SendKeys¨data

 result←Find'result'
 {0≠⍴result.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If result.Text≢'Hi ',(1⊃data),' ',(2⊃data),'!'
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf