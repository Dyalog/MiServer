:Class hourglass : MiPageSample

    ∇ Compose
      :Access public
      (Add _.Button'Hourglass').On'click' 'myCallback'
      Add #.HTMLUtils.HtmlSafeText'   '
      ((Add _.Button'No Hourglass').On'click' 'myCallback').Hourglass←0
    ∇

    ∇ r←myCallback
      :Access public
      ⎕DL 5
      r←Execute'alert("Ta Da!")'
    ∇
:EndClass