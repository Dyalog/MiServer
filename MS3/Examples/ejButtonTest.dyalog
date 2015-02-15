:Class ejButtonTest : MiPage

  ∇ Render;b
    :Access Public
    :If _Request.IsPost
      Add'You clicked me!'
    :Else
      b←(Add _HTML.Form).Add _SF.ejButton'Click Me!'
      'type'b.Option'ej.ButtonType.Button'
      b.On'click' 'myCallback'
    :EndIf
  ∇

  ∇ r←myCallback
    :Access public
    r←Execute'alert("Ding!")'
  ∇

:EndClass