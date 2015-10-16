 msg←Test dummy;output;m
 ⎕DL 2 ⍝ Wait until first output appears
 output←Selenium.Find'result'
 {0≠⍴output.Text}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 m←7≠⍴1⊃⎕VFI{(¯1+⍵⍳⎕UCS 13)↑⍵}output.Text ⍝ ⎕TS on each line
 msg←m/'Expected output was not produced.'