 msg←Test dummy;output

 Selenium.Click'btnPushMe'
 output←Selenium.Find'output'
 {0≠⍴output.Text}Selenium.Retry ⍬ ⍝ Wait to see if it gets populated
 msg←(output.Text≢'Thanks!')/'Expected output was not produced.'