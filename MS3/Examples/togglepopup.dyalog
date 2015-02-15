:Class TogglePopup : Dyalog14 ⍝ EAWC : MiPage : HtmlPage

    ∇ Render;button;p;wp
      :Access Public
      :If _Request.IsPost
          Add'You clicked me!'
      :Else
          p←Add _html.p
          p.Add'Click '
          p.Add button←(Add _HTML.Form).Add _SF.ejToggleButton'' 'here'
          p.Add' to toggle status.'
          button.On'click' 'myCallback'('model' 'ejModel')
          Add wp←_SF.ejWaitingPopup(GenId'Waiting...')
      :EndIf
    ∇

    ∇ r←myCallback
      :Access public
      :If False≡PageData.model.showOnInit
        ⍝'showOnInit' wp.Prop True ⍝ Need Brian's post-render option setting mechanism
      :Else
        ⍝'showOnInit' wp.Prop False ⍝ Need Brian's post-render option setting mechanism
      :End
    ∇

:EndClass