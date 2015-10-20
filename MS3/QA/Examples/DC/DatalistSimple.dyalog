 msg←Test dummy;name;result
⍝ Test /Examples/DC/InputGridSimple

 'opts'∘Selenium.SendKeys¨'F',Selenium.Keys.(Down Return) ⍝ Auto-complete using F, down-arrow, enter
 Selenium.Click'btnPressMe'

 msg←'output'Selenium.WaitFor'You selected "Four"!'