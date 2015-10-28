 msg←Test dummy
⍝ Test /Examples/DC/InputGridSimple

 'opts'SendKeys'F',Selenium.Keys.(Down Enter) ⍝ Auto-complete using F, down-arrow, enter
 Click'btnPressMe'

 msg←'output'WaitFor'You selected "Four"!'