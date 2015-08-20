:Class SelectSimple : MiPageSample
⍝ Control::     _.DC.Select
⍝ Description:: Create a simple drop-down
⍝

    FRUITS←'Apples' 'Bananas' 'Grapes' 'Oranges' 'Pears' 'Pineapples' 'Plums'

    ∇ Compose;frm;single;multi;btn
      :Access public
     
      Add _.h2'Please pick some fruits'
     
      frm←'myform'Add _.Form
      'fruit'frm.Add _.Select FRUITS
      btn←'btnPressMe'frm.Add _.Button'Pick'
      btn.On'click' 'onPick'
      'output'Add _.div
    ∇

     
    ∇ r←onPick;selected
      ⍝ Called when the Pick button is pressed
      :Access Public
     
      selected←Get'fruit'
      r←'#output'Replace _.p('You picked: ',(⍕selected),(0=⍴selected)/'nothing')
    ∇

:EndClass