 msg←Test dummy;tabs;i;section;tabids
 :If 0=⍴tabs←⌷'CssSelectors'Find'#tab1 li'
     msg←'Tab control not found' ⋄ →0
 :EndIf
 tabids←(⌷'CssSelectors'Find'#tab1 div').GetAttribute⊂⊂'id'
 :For i :In ⍳⍴tabs
     tabs[i].Click
     section←Find i⊃tabids
     :If i=1 ⍝ 1st tab loads external content
         msg←section WaitFor'Lorem ipsum'
     :Else
         msg←section WaitFor tabs[i].Text ⍝ Text on tab should appear
     :EndIf
     :If 0≠⍴msg
         msg←msg,' (tab #',(⍕i),')' ⋄ →0
     :EndIf
 :EndFor
 msg←''