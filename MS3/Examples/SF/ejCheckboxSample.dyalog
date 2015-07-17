:Class ejCheckboxSample : MiPageSample

    ∇ Compose
      :Access Public
      h←(cb1←'cb1'Add _.ejCheckBox'Check Me! ').On'change' 'myCallback'('state' 'model' 'checked')
      h.JavaScript←'alert(argument.model.checked)'
      'value'cb1.Set'checked'
    ∇

    ∇ r←myCallback
      :Access public
      r←Execute'alert("Checked")'
    ∇

:EndClass