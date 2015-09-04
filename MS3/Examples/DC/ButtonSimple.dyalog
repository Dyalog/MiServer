﻿:Class ButtonSimple : MiPageSample
⍝ Control:: _DC.Button
⍝ Description:: A button with a callback
    
    ∇ Compose;button
      :Access public 
     
     ⍝ Create a button with a caption of 'Press me!' and an id/name of 'btnPressMe'
      button←'btnPressMe'Add _.Button'Press me!'
      button.On'click' 'CallbackFn'
      'output'Add _.div ⍝ a div to contain output, updated by CallbackFn
    ∇

    ∇ r←CallbackFn
      :Access Public   
      r←'#output'Replace _.p'Thank You!'
    ∇
    
:EndClass
