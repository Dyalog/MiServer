 msg←ejCheckboxSimple;message

 message←Find'message'

 :Trap 90 ⋄ Click'cb1'
 :Else ⋄ msg←'Unable to click on checkbox' ⋄ →0
 :EndTrap

 :If {'check'≡message.Text}Retry ⍬ ⍝ Wait to see if it gets populated
     Click'cb1'
 :AndIf {'uncheck'≡message.Text}Retry ⍬ ⍝ Wait to see if it gets populated
     msg←''
 :Else
     msg←'Check/UnCheck failed.'
 :EndIf