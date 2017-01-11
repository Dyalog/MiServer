 msg←Test dummy

 'opts'∘SendKeys¨'F'Down Tab ⍝ Auto-complete using F, down-arrow
 Click'btnPressMe'
 msg←'output'WaitFor'You selected "Four"!'
