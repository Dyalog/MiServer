:Class TogglePopup : MiPageSample ⍝ EAWC : MiPage : HtmlPage
    ∇ Render;ct;CliDa;h
      :Access Public
      :If _Request.IsPost
          Add'You clicked me!'
      :Else
          ct←Add Form
          ct.Add'Click ',(bn←⎕NEW ejToggleButton),' to toggle status.'
          ⍝bn.On'click' 'myCallback'('mybutt' 'ejModel')
          Add ct
          Wp←Add ejWaitingPopup'#mywp' 'Waiting...'
          'showOnInit'Wp.Option _false
          h←Add Handler
          CliDa←'MyDa' '#mywp' 'ejModel' 'showOnInit'
          h.(Selectors Events Callback ClientData)←'bn' 'click' 'myCallback'CliDa
      :EndIf
    ∇

    ∇ r←myCallback;active
      :Access public
      r←⍬
      active←_true≡_PageData.MyDa
      'showOnInit'Wp.Update _true _false[1+active] ⍝ Need Brian's post-render option setting mechanism
    ∇

:EndClass