 msg←Test dummy

 'input'SendKeys'rank off',Enter
 :If 0=⍴msg←'output'WaitFor'No matching idioms found'

     'input'SendKeys Backspace Enter
     msg←⊃∪'dyal' 'finn'WaitFor¨⊂'⍴⍴XA'
 :EndIf