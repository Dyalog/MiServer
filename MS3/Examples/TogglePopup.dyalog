:Class TogglePopup : MiPageSample ⍝ EAWC : MiPage : HtmlPage
    ∇ Render;ct
      :Access Public
      :If isPost
          Add'You clicked me!'
      :Else
          ct←⎕NEW p
          ct.Add'Click ',(bn←⎕NEW ejToggleButton),' to toggle status.'
          bn.On'click' 'myCallback'('mybutt' 'ejModel')
          Add ct
          Wp←Add ejWaitingPopup'' 'Waiting...'
          'showOnInit'Wp.Option _false
      :EndIf
    ∇

    ∇ r←myCallback;active
      :Access public
      r←⍬
      active←_true≡_PageData.mybutt.model.showOnInit
      'showOnInit'Wp.Update _true _false[1+active] ⍝ Need Brian's post-render option setting mechanism
    ∇

:EndClass