 msg←Test dummy;output
 Selenium.Click'Transport_3'
 output←Selenium.Find'output'
 {0≠⍴output.Text}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If output.Text≢'You selected: Automobile'
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf