:Class sessiontest : MiPageSample

    ∇ Compose
      :Access Public
      (Add _.Button 'Click Me').On 'click'
      ((Add _.Form).Add _.Button 'Submit').type←'submit'
    ∇

    ∇ r←APLJax
      :Access Public
      ∘∘∘
    ∇

:EndClass