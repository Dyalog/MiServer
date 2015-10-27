 msg←Test dummy;ts;in;out
 dtp←Selenium.Find'dtp'

 ts←∊⍕¨100+1↓¯2↓⎕TS
 ts[1 4 7 10]←'// :'
 (in out)←(⍕¨1 ¯1+⊃⎕TS),¨⊂ts

 'in'SendKeys Selenium.Keys.(End,20/Backspace),in
 'out'SendKeys Selenium.Keys.(End,20/Backspace),out

 :If 0∊⍴msg←'output'WaitFor'Going back in time?' 'Input validation failed'
     'out'∘SendKeys¨Selenium.Keys.(Home,4/Delete),(⍕2+⊃⎕TS),Selenium.Keys.Tab
     msg←'output'WaitFor'The difference in days is: 3'
 :EndIf
