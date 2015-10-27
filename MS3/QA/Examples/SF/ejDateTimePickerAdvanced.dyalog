 msg←Test dummy;ts;in;out

 K←Selenium.Keys

 ts←∊⍕¨100+1↓¯2↓⎕TS
 ts[1 4 7 10]←'// :'
 (in out)←(⍕¨1 ¯1+⊃⎕TS),¨⊂ts

 'in'∘SendKeys¨K.End('Shift'K.Home)(in,K.Tab,out,K.Enter)

 :If 0∊⍴msg←'output'WaitFor'Going back in time?' 'Input validation failed'

     'out'∘SendKeys¨K.Home('Control' 'Shift'K.Right)('Shift'K.Left)(⍕2+⊃⎕TS)K.Enter

     msg←'output'WaitFor'The difference in days is: 3'
 :EndIf
