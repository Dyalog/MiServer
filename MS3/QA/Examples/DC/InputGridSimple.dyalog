 msg←Test dummy;data
⍝ Test /Examples/DC/InputGridSimple

 data←'Morten' 'Kromberg'(⍕1↓∊'/',¨⌽3↑⎕TS) ⍝ It's my birthday every day!
 'fname' 'lname' 'bdate'SendKeys¨data
 Click'ClickMe'
 msg←'output'WaitFor'Hi Morten Kromberg. Happy Birthday!'