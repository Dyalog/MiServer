 msg←Test dummy;name;result
⍝ Test /Examples/DC/InputGridSimple

 'name'Selenium.SendKeys name←'Brian'
 Selenium.Click'done'

 result←Selenium.Find'result'
 {0≠⍴result.Text}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If result.Text≢'Hello, ',name,'!'
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf