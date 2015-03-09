:Class ejButtonTest : MiPage

    ∇ Render;f
      :Access Public
      b1←(f←Add _HTML.Form).Add _SF.ejButton'Click Me!'
      'type'b1.Option'ej.ButtonType.Button'
      b2←f.Add _SF.ejButton'Click Me!'
      'type' 'enabled'b2.Option'ej.ButtonType.Button'False
      (b1 b2).On¨⊂⊂'click' 'myCallback'
    ∇

    ∇ r←myCallback
      :Access public
      ∘∘∘
      r←Execute'alert("Ding!")'
    ∇

:EndClass