:Class ejButtonTest : MiPageSample

    ∇ Render;f
      :Access Public
      b1←(f←Add _HTML.Form).Add _SF.ejButton'b1' 'Click Me!'
      'type'b1.Set'ej.ButtonType.Button'
      b2←f.Add _SF.ejButton'b2' 'Click Me!'
      'type' 'enabled'b2.Set'ej.ButtonType.Button'_false
      (b1 b2).On¨⊂⊂'click' 'myCallback'
    ∇

    ∇ r←myCallback
      :Access public
      r←Execute'alert("Ding!")'
    ∇

:EndClass