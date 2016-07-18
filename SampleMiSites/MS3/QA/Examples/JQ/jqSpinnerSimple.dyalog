 msg←Test dummy;Spin;HasValue

 HasValue←{'Wrong value'/⍨⍵≢{6::⍬ ⋄ ⊢⍎(Find ⍵).GetAttribute⊂'value'}⍺}
 Spin←{shy←⍵⊣Click('Simple' 'Preset'⍳⍵[1])⊃⌷'CssSelectors'Find'.ui-spinner-',⊃⌽⍵}

 :If 1 ⍝ for consistency and easy of inserting more tests

 :AndIf 0=⍴msg←'Simple'HasValue ⍬

 :AndIf 0=⍴msg←'Simple'HasValue 1⊣Spin'Simple' 'up'

 :AndIf 0=⍴msg←'output'WaitFor'Simple Spinner changed to 1'⊣Click'Update'

 :AndIf 0=⍴msg←'Simple'HasValue ¯1⊣Spin⍣2⊢'Simple' 'down'

 :AndIf 0=⍴msg←'Preset'HasValue 7

 :AndIf 0=⍴msg←'Preset'HasValue 10⊣Spin⍣4⊢'Preset' 'up'

 :AndIf 0=⍴msg←'output'WaitFor'Preset Spinner changed to 10'⊣Click'Update'

 :AndIf 0=⍴msg←'Preset'HasValue 0⊣Spin⍣11⊢'Preset' 'down'

 :EndIf