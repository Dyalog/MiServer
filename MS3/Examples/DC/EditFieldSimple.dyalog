:Class EditFieldSimple : MiPageSample
⍝ Control:: _DC.EditField
⍝ Description:: Collect text input from the user

    ∇ Render;btn;frm;label;name
      :Access Public
     
      (frm←Add _.Form).id←'myform'
      label←('for' 'name')frm.Add _.label'Please enter your name'
      name←'name'frm.Add _.EditField
      btn←frm.Add _.Button'Done'
      btn.On'click' 'CallbackFn'
     
      'result'frm.Add _.div
    ∇

    ∇ r←CallbackFn
      :Access Public
     
      r←'#result'Replace _.p('Hello, ',(Get'name'),'!')
    ∇

:EndClass