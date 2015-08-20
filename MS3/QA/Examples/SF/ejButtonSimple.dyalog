 msg←ejButtonSimple;result;output
⍝ Test /Examples/DC/ejButtonSimple

 Click'btnPushMe'

 output←Find'output'
 {0≠⍴output.Text}Retry ⍬ ⍝ Wait to see if it gets populated
 msg←(output.Text≢'You pushed me!')/'Expected output was not produced.'