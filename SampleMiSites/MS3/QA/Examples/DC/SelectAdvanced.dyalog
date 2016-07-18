 msg←Test dummy
⍝ Test /Examples/DC/SelectAdvanced

⍝ Ensure 'multi' (the selection list) is there:
 :If 0∊⍴msg←'selection list not there'/⍨0≡Find'multi'

   ⍝ Grab the 2 elements already chosen:
     Click'PressMe'
 :AndIf 0∊⍴msg←'output'WaitFor'You picked: Bananas Pears'

   ⍝ Make a single selection:
     'multi'SelectItemText'~' 'Grapes'
     Click'PressMe'
 :AndIf 0∊⍴msg←'output'WaitFor'You picked: Grapes'

   ⍝ Make another selection:
     'multi'SelectItemText'Pears'
     Click'PressMe'
     msg←'output'WaitFor'You picked: Grapes Pears'
 :EndIf