 msg←Test dummy;name;result
⍝ Test /Examples/DC/InputGridSimple

 {'opts'Selenium.SendKeys ⍵ ⋄ ⎕DL 0.2}¨'F',Selenium.Keys.(Down Return) ⍝ Auto-complete using F, down-arrow, enter
 Selenium.Click'btnPressMe'

 result←Selenium.Find'output'
 {0≠⍴result.Text}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If result.Text≢'You selected "Four"!'
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf