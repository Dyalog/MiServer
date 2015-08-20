 msg←DatalistSimple;name;result
⍝ Test /Examples/DC/InputGridSimple

 {'opts'SendKeys ⍵ ⋄ ⎕DL 0.2}¨'F',Keys.(Down Return) ⍝ Auto-complete using F, down-arrow, enter
 Click'btnPressMe'

 result←Find'output'
 {0≠⍴result.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If result.Text≢'You selected "Four"!'
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf