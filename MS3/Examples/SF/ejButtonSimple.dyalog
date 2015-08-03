:Class ejButtonSimple : MiPageSample
⍝ Control:: _SF.ejButton
⍝ Description:: basic button

    ∇ Compose
      :Access Public
     
      bn←'type' 'ej.ButtonType.Button'Add _SF.ejButton'Push me!'
      bn.On'click'
    ∇

    ∇ r←APLJax
      :Access public
    ⍝ When the clicks the button we display an alert
      r←Execute'alert("You pushed me!")'
    ∇
:EndClass
                                        
