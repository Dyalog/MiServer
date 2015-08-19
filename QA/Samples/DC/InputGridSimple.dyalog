 msg←InputGridSimple;data;result
⍝ Test /Examples/CS/InputGridSimple

 data←'Morten' 'Kromberg'(1↓∊'/',¨⌽3↑⎕TS)
 'fname' 'lname' 'bdate'SendKeys¨data
 Click'ClickMe'

 result←Find'result'
 {0≠⍴result.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If (Find'result').Text≢'Hi ',(1⊃data),' ',(2⊃data),'. Happy Birthday!'
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf