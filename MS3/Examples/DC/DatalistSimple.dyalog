:Class DatalistSimple : MiPageSample
⍝ Control::     _.DC.Datalist
⍝ Description:: Show some data lists

    ∇ Compose;button;frm
      :Access Public 
     
      :With frm←'myform'Add _.Form ⍝ We need a form to get data back on callbacks
     
          Add _.p'A Datalist is an auto-completing drop-down:'
     
          'opts'Add _.Datalist('Tres' 'Three' 'Tre' 'Four')
     
          button←'btnPressMe'Add _.Button'Press me!'
          button.On'click' 'CallbackFn'
     
          'output'Add _.div ⍝ a div to contain output, updated by CallbackFn
      :EndWith
    ∇

    ∇ r←CallbackFn;data
      :Access Public          
     
      data←Get'opts'
      r←'#output'Replace _.p'You selected "',data,'"!'
    ∇

:EndClass

