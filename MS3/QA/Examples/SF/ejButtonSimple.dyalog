 msg←ejButtonSimple;output

 Click'btnPushMe'
 output←Find'output'
 {0≠⍴output.Text}Retry ⍬ ⍝ Wait to see if it gets populated
 msg←(output.Text≢'Thanks!')/'Expected output was not produced.'