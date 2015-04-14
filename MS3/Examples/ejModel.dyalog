:Class ejModel : MiPageSample
    ∇ Render
      :Access public
      b1←Add _SF.ejButton('b1' 'Button 1')
      b2←Add #._JQ.jqButton('b2' 'Button 2')
      b2.On'click' 'clicked'('b1model' '#b1' 'ejModel')
    ∇

    ∇ r←clicked
      :Access public
      ∘∘∘
    ∇
:EndClass