:Class DatalistSimple : MiPageSample
⍝ Control::     _DC.Datalist
⍝ Description:: An auto-completeable drop-down

    ∇ Compose;button;frm
      :Access Public
     
      frm←'myform'Add _.Form ⍝ We need a form to get data back on callbacks
     
      frm.Add _.p'Hint: type "t" to get some auto-completed content.'
     
      'opts'frm.Add _.Datalist('Tres' 'Three' 'Tre' 'Four')
     
      button←'btnPressMe'frm.Add _.Button'Press me!'
      button.On'click' 'CallbackFn'
     
      'output'frm.Add _.div ⍝ a div to contain output, updated by CallbackFn
    ∇

    ∇ r←CallbackFn;data
      :Access Public
     
      data←Get'opts'
      r←'#output'Replace _.p'You selected "',data,'"!'
    ∇

:EndClass