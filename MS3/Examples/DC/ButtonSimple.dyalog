:Class ButtonSimple : MiPageSample
⍝ Control:: _DC.Button
⍝ Description:: Create a button with a callback
    
    ∇ Compose;button
      :Access public 
     
     ⍝ Create a button with a caption of 'Press me!' and an id/name of 'btnPressMe'
      button←'btnPressMe' Add _.Button 'Press me!'
      button.On 'click' 'CallbackPgm'
 
     'output' Add _.div ⍝ a div to contain output, updated by CallbackPgm 
    ∇

    ∇ r←CallbackPgm
      :Access Public   
      r←'#output' Replace 'Thank You!'
    ∇
    
:EndClass
