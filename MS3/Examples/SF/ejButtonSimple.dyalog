:Class ejButtonSimple : MiPageSample
⍝ Control:: _SF.ejButton
⍝ Description:: Insert a basic button

    ∇ Compose;bn
      :Access Public
     
      bn←Add _SF.ejButton'Push me!'
      bn.id←'btnPushMe'
      bn.On'click'

      'output' Add _.div
    ∇

    ∇ r←APLJax
      :Access public
    ⍝ When the clicks the button we display a message
      r←'#output' Replace 'You pushed me!'
    ∇
:EndClass
                                        
