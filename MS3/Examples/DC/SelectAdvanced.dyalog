:Class SelectAdvanced : MiPageSample
⍝ Control::     _.DC.Select
⍝ Description:: Use a Select control to allow multiple selections from a list.

    FRUITS←'Apples' 'Bananas' 'Grapes' 'Oranges' 'Pears' 'Pineapples' 'Plums'

    ∇ Compose;frm;multi;btn
      :Access public
     
      Add _.h2'Please pick some fruits'
     
      (frm←Add _.Form).id←'myform'
     
      multi←'multi'frm.Add _.Select(FRUITS(2 5)) ⍝ preselect 2nd and 5th fruit
      multi.Set'multiple' 1               ⍝ Allow multiple selections
      multi.Set'required' 1               ⍝ No call back unless there is a selection
      multi.Set'size'(⊃⍴FRUITS)           ⍝ Make room for all the items
      multi.Set'autofocus' 'true'         ⍝ Put the focus here
      frm.Add _.br
     
      btn←'PressMe'frm.Add _.Button'Pick Fruits'
      btn.On'click' 'onPick'
      btn.style←'margin-top: 10px; margin-bottom: 10px;'
     
      'output'Add _.div
    ∇

    ∇ r←onPick;selected
      ⍝ Called when the Pick button is pressed
      :Access Public
     
      selected←1↓∊' ',¨⊃Get'multi'
      r←'#output'Replace _.p('You picked: ',(⍕selected),(0=⍴selected)/'nothing')
    ∇
:EndClass