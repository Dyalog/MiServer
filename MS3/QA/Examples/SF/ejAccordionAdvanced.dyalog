 msg←Test dummy;output;ok

 ok←0
 :Trap 0
     1 Selenium.ejAccordionTab'Second' 'p2'
     ok←{⍵≡(Selenium.Find'Which').Text}Selenium.Retry'You activated section 1'
 :EndTrap

 msg←(~ok)/'Accordion Selection Failed'
