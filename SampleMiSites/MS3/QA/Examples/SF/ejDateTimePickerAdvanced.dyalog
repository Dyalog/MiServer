 msg←Test dummy;ts;in;out

 ts←∊⍕¨100+1↓¯2↓⎕TS
 ts[1 4 7 10]←'// :'
 (in out)←(⍕¨1 ¯1+⊃⎕TS),¨⊂ts

 'in'∘SendKeys¨End(Shift Home)(in,Tab,out,Enter)

 :If 0∊⍴msg←'output'WaitFor'Going back in time?' 'Input validation failed'

     'out'∘SendKeys¨Home(Control Shift Right)(Shift Left)(⍕2+⊃⎕TS)Enter

     msg←'output'WaitFor'The difference in days is: 3'
 :EndIf
