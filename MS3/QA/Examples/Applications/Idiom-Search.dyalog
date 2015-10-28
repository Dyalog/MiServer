 msg←Test dummy

 'input'SendKeys'rank off',Selenium.Keys.Enter
 :If 0=⍴msg←'output'WaitFor'No matching idioms found'

     'input'SendKeys Selenium.Keys.(Backspace,Enter)
     msg←⊃∪'dyal' 'finn'WaitFor¨⊂'⍴⍴XA'
 :EndIf