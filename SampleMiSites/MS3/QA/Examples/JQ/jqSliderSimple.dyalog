 msg←Test dummy;handle;output;Msg;SlideUntil

 output←Find'output'
 Msg←/∘'Could not move slider'~
 SlideUntil←{∨/output.Text⍷⍨⍕⍵⊣handle DragAndDropToOffset ⍺ 0}

 :If 1 ⍝ for consistency and easy of inserting more tests

     handle←'CssSelector'Find'#Default span'
 :AndIf 0=⍴msg←output WaitFor'Default Slider changed to 0'⊣Click handle

 :AndIf 0=⍴msg←Msg{60 SlideUntil 100}Retry ⍬

     handle←'CssSelector'Find'#Ranged span'
 :AndIf 0=⍴msg←output WaitFor'Ranged Slider changed to 20 40'⊣Click handle

 :AndIf 0=⍴msg←Msg{60 SlideUntil 100 40}Retry ⍬

     handle←⊃⌽⌷'CssSelectors'Find'#Ranged span'
 :AndIf 0=⍴msg←Msg{¯60 SlideUntil 100 0}Retry ⍬

 :EndIf
