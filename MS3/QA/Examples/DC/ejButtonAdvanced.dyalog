 msg←ejButtonAdvanced;result;message;wt;txt;b2
⍝ Test /Examples/DC/ejButtonAdvanced

 GoTo URL,'/Examples/SF/ejButtonAdvanced'

 message←Find'message'
 msg←'The message should have been empty to start with'
 :If 0∊⍴message.Text
⍝ Try clicking the 2nd button - this should not do anything
     wt←333

     b2←Find'btn2'
     msg←'B2 should be disabled'
 :AndIf ~b2.Enabled

     Click'btn2' ⋄ Wait wt
     msg←'There should not have been any message produced'
 :AndIf 0∊⍴message.Text

⍝ Click the 1st button to enable the 2nd one
     Click'btn1' ⋄ Wait wt
     msg,←' on the 2nd click'
 :AndIf 0∊⍴message.Text

⍝ The 2nd button should be enabled now
     msg←'B2 should be enabled'
 :AndIf b2.Enabled
     Click'btn2' ⋄ Wait wt
     msg←'Expected message was not produced.'
     {0≠⍴message.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
     txt←message.Text
 :AndIf txt startsWith'You pressed the'

⍝ Wait a second, push again to get a new msg
     Wait 1100
     msg←'Text did not change'
     Click'btn2' ⋄ Wait wt
 :AndIf message.Text≢txt

⍝ Click the 1st button to disable the 2nd one
     msg←'B2 should be disabled'
 :AndIf ~b2.Enabled
     Click'btn1' ⋄ Wait wt
     msg←'Text was not removed'
 :AndIf 0∊⍴message.Text

⍝ Try the 2nd button again, it should not work
     Click'btn2' ⋄ Wait wt
     msg←'B2 should be disabled'
 :AndIf ~b2.Enabled
     msg←'Text should be empty'
 :AndIf 0∊⍴message.Text
⍝ Looks OK
     msg←''
 :EndIf
⍝)(!ejButtonAdvanced!DanB2!2015 8 20 7 51 22 0