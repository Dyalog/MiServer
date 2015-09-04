:Class ListManagerSimple : MiPageSample
⍝ Control::     _DC.ListManager
⍝ Description:: Select fruits by moving them from one list to another

    ∇ Compose
      :Access public 

      fruits←'Apples' 'Oranges' 'Pears' 'Bananas' 'Lemons' 'Raspberries'
      selected←⍬
     
      Add'Select some fruits by dragging them to the list on the right:'
     
      lm←'fruits'Add _.ListManager(fruits selected)
      lm.(Height Gap)←'150px' '10px'
     
      save←'btnSave'Add _.Button'Pick Fruits'
      save.On'click' 'onSave'('selected'lm.Right.getItems'') ⍝ Return items in the right box to onSave
      save.style←'margin-top: 10px;' ⍝ Some space above the button
      save.style←'margin-bottom: 10px;' ⍝ And below
     
      'output'Add _.div
    ∇

     
    ∇ r←onSave
      ⍝ Called when the Save button is pressed
      :Access Public
     
      selected←Get'selected'
      r←'#output'Replace _.p('You picked: ',(⍕selected),(0=⍴selected)/'nothing')
    ∇


:EndClass
