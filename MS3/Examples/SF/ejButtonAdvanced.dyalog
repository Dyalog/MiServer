:Class ejButtonAdvanced : MiPageSample
⍝ Control:: _SF.ejButton
⍝ Description:: Toggle availablility of one button with another

    ∇ Compose
      :Access Public
     
     ⍝ The first button (b1)
      b1←'btn1' Add _SF.ejButton 'Toggle its state →'
      b1.On  'click' 'myCallback'
     
     ⍝ The second button (b2)
      b2←Add _SF.ejButton'Show message'
      b2.id←'btn2'
      'type' 'enabled'  b2.Set  'ej.ButtonType.Button'  _false
      b2.On  'click' 'myCallback'

     ⍝ A place to write the message
      Add _.br
      'message' Add _.div
    ∇

    ∇ r←myCallback
      :Access public 
     ⍝ This callback simply flips b2's state when b1 is clicked
      :If 'btn1'≡_what
          r←'enabled' b2.Update ⊃ _true _false ~ b2.GetOption 'enabled'
          r,←'#message' Replace ''
      :Else
          r←'#message' Replace 'You pressed the right button at ',1↓,'<:>,ZI2' ⎕FMT 3↑3↓⎕TS
      :EndIf
     
    ∇

:EndClass
                                        