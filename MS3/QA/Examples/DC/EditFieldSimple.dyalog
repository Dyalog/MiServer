 msg←EditFieldSimple;name;result
⍝ Test /Examples/DC/InputGridSimple

 'name'SendKeys name←'Brian'
 Click'done'

 result←Find'result'
 {0≠⍴result.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 :If result.Text≢'Hello, ',name,'!'
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf