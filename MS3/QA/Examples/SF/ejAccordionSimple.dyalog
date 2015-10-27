 msg←Test dummy;output;ok
 :Trap 0
     1 Selenium.ejAccordionTab'First' 'p1'
     1 Selenium.ejAccordionTab'Second' 'p2'
     msg←''
 :Else
     msg←'Accordion Selection Failed'
 :EndTrap