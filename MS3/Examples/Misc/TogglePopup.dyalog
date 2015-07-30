:Class TogglePopup : MiPageSample
    ∇ Compose
      :Access Public
      Add'Click '
      bn←Add _.ejToggleButton
      Add' to toggle status.'
      bn.On'click' ''('show' '#mywp' 'ejModel' 'showOnInit')
      Wp←Add _.ejWaitingPopup'Waiting...'
      Wp.id←'mywp'
      'showOnInit'Wp.Set _false
    ∇

    ∇ r←APLJax
      :Access public
      ∘∘∘
      r←'showOnInit'Wp.Update _true _false[1+_true≡Get'show']
    ∇

:EndClass