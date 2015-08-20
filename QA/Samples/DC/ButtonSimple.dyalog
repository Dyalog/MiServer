 msg←ButtonSimple;result;output
⍝ Test /Examples/DC/ButtonSimple

 Click'btnPressMe'

 output←Find'output'
 {0≠⍴output.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If output.Text≢'Thank You!'
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf