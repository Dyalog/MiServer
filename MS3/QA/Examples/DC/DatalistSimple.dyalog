 msg←Test dummy
⍝ Test /Examples/DC/InputGridSimple

 'opts'∘SendKeys¨'F'(Down Tab Enter) ⍝ Auto-complete using F, down-arrow, enter

 msg←'output'WaitFor'You selected "Four"!'