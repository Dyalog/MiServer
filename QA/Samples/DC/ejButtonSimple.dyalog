 msg←ejButtonSimple;result;output
⍝ Test /Examples/DC/ejButtonSimple

 Click'btnPushMe'

 output←Find'output'
 {0≠⍴output.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If output.Text≢'You pushed me!'
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf
⍝)(!ejButtonSimple!DanB2!2015 8 19 17 49 55 0