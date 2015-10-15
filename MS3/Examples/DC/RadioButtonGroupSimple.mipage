:Class RadioButtonGroupSimple : MiPageSample
⍝ Control:: _DC.RadioButtonGroup
⍝ Description:: Select modes of transport using a RadioButtonGroup
    
    ∇ Compose;button;frm
      :Access public 
     
     ⍝ Create a button with a caption of 'Press me!' and an id/name of 'btnPressMe'
      frm←Add _.Form
      button←'Transport'frm.Add _.RadioButtonGroup('Train' 'Plane' 'Automobile' 'Riverboat' 'Submarine')
      button.On'change' 'CallbackFn'
      'output'frm.Add _.div ⍝ a div to contain output, updated by CallbackFn
    ∇

    ∇ r←CallbackFn
      :Access Public   
     
      r←'#output'Replace _.p'You selected: ',Get'Transport'
    ∇
    
:EndClass
