 msg←Test dummy;Msg;slave;min;max;LeftUntil;RightUntil

 LeftUntil←{∨/(Find ⍺).Text≡⍕⍵⊣(⍎⍺)DragAndDropToOffset ¯60 0}
 RightUntil←{∨/(Find ⍺).Text≡⍕⍵⊣(⍎⍺)DragAndDropToOffset 60 0}

 Msg←/∘'Wrong limit'~
 (slave min max)←⌷'CssSelectors'Find'.ui-slider-handle'

 :If 1

 :AndIf 0=⍴msg←Msg{'slave'LeftUntil 20}Retry ⍬

 :AndIf 0=⍴msg←Msg{'slave'RightUntil 40}Retry ⍬

 :AndIf 0=⍴msg←Msg{'min'LeftUntil 0}Retry ⍬

 :AndIf 0=⍴msg←Msg{'slave'RightUntil 40}Retry ⍬

 :AndIf 0=⍴msg←Msg{'max'RightUntil 100}Retry ⍬

 :AndIf 0=⍴msg←Msg{'slave'RightUntil 100}Retry ⍬

 :EndIf