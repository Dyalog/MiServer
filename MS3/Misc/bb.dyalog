:Class bb : MiPageSample

    ∇ Compose
      :Access public
      cb←Add _.ejCheckBox
      cb.(Label Checked)←'Check It Out! ' 1
      cb.On'change' 0 '' 'alert(JSON.stringify(this.element.attr("id")))'
    ∇

:EndClass