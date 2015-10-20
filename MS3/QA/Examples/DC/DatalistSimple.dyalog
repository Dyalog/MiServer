 msg←Test dummy;name;result
⍝ Test /Examples/DC/InputGridSimple

 'opts'∘SendKeys¨'F',Selenium.Keys.(Down Return) ⍝ Auto-complete using F, down-arrow, enter
 Click'btnPressMe'

 msg←'output'WaitFor'You selected "Four"!'