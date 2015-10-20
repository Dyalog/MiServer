 msg←Test dummy;data
⍝ Test /Examples/DC/InputGridSimple

 data←'Morten' 'Kromberg'(1↓∊'/',¨⌽3↑⎕TS) ⍝ It's my birthday every day!
 'fname' 'lname' 'bdate'Selenium.SendKeys¨data
 Selenium.Click'ClickMe'
 msg←'output'Selenium.WaitFor'Hi Morten Kromberg. Happy Birthday!'