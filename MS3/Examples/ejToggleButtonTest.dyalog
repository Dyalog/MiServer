:Class ToggleButtonTest : MiPage

  ∇ Render;b
    :Access Public
    :If _Request.IsPost
      Add'You clicked me!'
    :Else
      F←(Add _HTML.Form).Add _SF.ejToggleBotton '' 'Toggle Me!' 'TOGGLED'
      F.On'click' 'myCallback'
    :EndIf
  ∇

  ∇ r←myCallback
    :Access public
    r←Execute'alert("Ding!")'
  ∇

:EndClass