 msg←Test dummy;result;output
⍝ Test /Examples/DC/ButtonSimple

 Selenium.Click'btnPressMe'

 output←Selenium.Find'output'
 {0≠⍴output.Text}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If output.Text≢'Thank You!'
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf