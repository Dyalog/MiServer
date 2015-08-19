:Class ButtonSimple : MiPageSample
⍝ Control::     _.DC.Button
⍝ Description:: Create a button with a callback
    
    ∇ Compose;button
      :Access public 
     
     ⍝ Create a button with a caption of 'this' and an id/name of 'myname'
      button←'btnPressMe'Add _.Button'Press me!'
      button.On'click' 'CallbackFn'
      'output'Add _.div ⍝ a div to contain output, updated by CallbackFn
      'output'Add _.p'For more advanced button features, see the Syncfusion button.'
    ∇

    ∇ r←CallbackFn
      :Access Public   
      r←'#output'Replace _.p'Thank You!'
    ∇
    
:EndClass
