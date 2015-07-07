:Class TogglePopup : MiPageSample ⍝ EAWC : MiPage : HtmlPage
    ∇ Compose;ct;CliDa;h
      :Access Public
      :If isPost
          Add'You clicked me!'
      :Else
          Add'Click '
          bn←Add ejToggleButton
          Add' to toggle status.'
          bn.On'click' 'myCallback'
          Wp←Add ejWaitingPopup'Waiting...'
          'showOnInit'Wp.Set _false
          CliDa←'MyDa' '#mywp' 'ejModel' 'showOnInit'
          h.(Selectors Events Callback ClientData)←'bn' 'click' 'myCallback'CliDa
      :EndIf
    ∇

    ∇ r←myCallback;active
      :Access public
      r←⍬
      active←_true≡_PageData.MyDa
      'showOnInit'Wp.SetOption _true _false[1+active] ⍝ Need Brian's post-render option setting mechanism
    ∇

:EndClass