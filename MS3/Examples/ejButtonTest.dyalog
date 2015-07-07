:Class ejButtonTest : MiPageSample

    ∇ Render;f
      :Access Public
      ⍝f←Add _HTML.Form ⍝ Hello?
      b1←Add _SF.ejButton'Click Me!'
      b1.id←'b1'
      'type'b1.Set'ej.ButtonType.Button'
      b2←Add _SF.ejButton'Click Me!'
      b2.id←'b2'
      'type' 'enabled'b2.Set'ej.ButtonType.Button'_false
      b1.On'click' 'myCallback'
      b2.On'click' 'myCallback'
    ∇

    ∇ r←myCallback
      ∘∘∘
      :Access public
      :If 'b1'≡_what
          r←'enabled'b2.Update(_true _false)['ft'⍳⊃⍕b2.GetOption'enabled']
      :Else
          r←Execute'alert("Ding!")'
      :EndIf
     
    ∇

:EndClass
                                        