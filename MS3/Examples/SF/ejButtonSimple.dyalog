:Class ejButtonSimple : MiPageSample
⍝ Control:: _SF.ejButton
⍝ Description::  two buttons, one en/disables the other and another that displays an alert

    ∇ Compose
      :Access Public
     
     ⍝ The first button (b1)
      b1←'b1'Add _SF.ejButton'Toggle its state →'
      'type'b1.Set'ej.ButtonType.Button'
      b1.On'click' 'myCallback'
     
     ⍝ The second button (b2)
      b2←Add _SF.ejButton'Show alert'
      b2.id←'b2'
      'type' 'enabled'b2.Set'ej.ButtonType.Button'_false
      b2.On'click' 'myCallback'
    ∇

    ∇ r←myCallback
      :Access public
     ⍝ This callback simply flips b2's state when b1 is clicked
      :If 'b1'≡_what
          r←'enabled'b2.Update⊃_true _false~b2.GetOption'enabled'
      :Else
          r←Execute'alert("Hi there!")'
      :EndIf
     
    ∇

:EndClass
                                        