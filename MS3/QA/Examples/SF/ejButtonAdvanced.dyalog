 msg←ejButtonAdvanced;result;message;txt
⍝ Test /Examples/DC/ejButtonAdvanced

 message←Find'message'
 msg←'The message should have been empty to start with'
 :If {0∊⍴message.Text}Retry ⍬
⍝ Try clicking the 2nd button - this should not do anything

     Click'btn2'
     msg←'There should not have been any message produced'
 :AndIf {0∊⍴message.Text}Retry ⍬

⍝ Click the 1st button to enable the 2nd one
     Click'btn1'
     msg,←' on the 2nd click'
 :AndIf 0∊⍴message.Text

⍝ The 2nd button should be enabled now
     Click'btn2'
     msg←'Expected message was not produced.'
     {0≠⍴message.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
     txt←message.Text
 :AndIf txt startsWith'You pressed the'

⍝ Wait a second, push again to get a new msg
     msg←'Text did not change'
     Click'btn2'
 :AndIf {txt{(⍺≢⍵)∧~0∊⍴⍵}message.Text}Retry ⍬

⍝ Click the 1st button to disable the 2nd one
     Click'btn1'
     msg←'Text was not removed'
 :AndIf {0∊⍴message.Text}Retry ⍬

⍝ Try the 2nd button again, it should not work
     Click'btn2'
     msg←'Text should be empty'
 :AndIf {0∊⍴message.Text}Retry ⍬
⍝ Looks OK
     msg←''
 :EndIf