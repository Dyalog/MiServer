:Class ejButtonTest : MiPage

  ∇ Render
    :Access Public
      b←(Add _HTML.Form).Add _SF.ejButton'Click Me!'
      'type'b.Option'ej.ButtonType.Button'
      b.On'click' 'myCallback'
  ∇

  ∇ r←myCallback
    :Access public
∘∘∘
    r←Execute'alert("Ding!")'
  ∇

:EndClass