 msg←Test dummy;data;result
⍝ Test /Examples/DC/InputGridSimple

 data←'Morten' 'Kromberg'(1↓∊'/',¨⌽3↑⎕TS) ⍝ It's my birthday every day!
 'fname' 'lname' 'bdate'Selenium.SendKeys¨data
 Selenium.Click'ClickMe'

 result←Selenium.Find'result'
 {0≠⍴result.Text}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If result.Text≢'Hi ',(1⊃data),' ',(2⊃data),'. Happy Birthday!'
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf