:Class ejCheckBoxTest : MiPage

  ∇ Render;f
    :Access Public
    (f←Add _HTML.Form).Add _SF.ejCheckBox
    f.Add _SF.ejButton'Click'
  ∇

:EndClass