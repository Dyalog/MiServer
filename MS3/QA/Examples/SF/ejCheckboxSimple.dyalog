 msg←Test dummy;message

 message←Selenium.Find'message'

 :Trap 90 ⋄ Selenium.Click'ejcb1'
 :Else ⋄ msg←'Unable to click on checkbox' ⋄ →0
 :EndTrap

 :If {'check'≡message.Text}Selenium.Retry ⍬ ⍝ Wait to see if it gets populated
     Selenium.Click'ejcb1'
 :AndIf {'uncheck'≡message.Text}Selenium.Retry ⍬ ⍝ Wait to see if it gets populated
     msg←''
 :Else
     msg←'Check/UnCheck failed.'
 :EndIf