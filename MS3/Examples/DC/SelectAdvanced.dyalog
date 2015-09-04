:Class SelectAdvanced : MiPageSample
⍝ Control::     _DC.Select
⍝ Description:: Select one or more fruits from a list.

    FRUITS←'Apples' 'Bananas' 'Grapes' 'Oranges' 'Pears' 'Pineapples' 'Plums'

    ∇ Compose;frm;mult;btn
      :Access public
     
      Add _.h2'Please pick some fruits'
     
      (frm←Add _.Form).id←'myform'
     
      mult←'multi' frm.Add _.Select (FRUITS(2 5)) ⍝ preselect 2nd and 5th fruit
      mult.Set 'multiple' 1               ⍝ Allow multiple selections
      mult.Set 'required' 1               ⍝ No call back unless there is a selection
      mult.Set 'size'(⊃⍴FRUITS)           ⍝ Make room for all the items
      mult.Set 'autofocus' 'true'         ⍝ Put the focus here
      frm.Add  _.br
     
      btn←'PressMe'frm.Add _.Button'Pick Fruits'
      btn.On'click' 'onPick'
      btn.style←'margin-top: 10px; margin-bottom: 10px;'
     
      'output'Add _.div
    ∇

    ∇ r←onPick;selected;selection
     ⍝ Called when the Pick button is pressed
      :Access Public
     ⍝ Because MS3 does not know the origin of the attribute it does not
     ⍝ know if it must be enclosed or not. For single selections we will receive
     ⍝ a simple character vector which we must enclose ourselves:
      selection←eis Get 'multi'
      selected←1↓∊' ',¨selection
      r←'#output'Replace _.p ('You picked: ',selected,(0=⍴selected)/'nothing')
    ∇
:EndClass