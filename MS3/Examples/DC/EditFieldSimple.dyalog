:Class EditFieldSimple : MiPageSample
⍝ Control:: _DC.EditField _DC.Button _html.label
⍝ Description:: Collect input and echo it on a button press

    ∇ Render;btn;frm;label;name
      :Access Public
     
      (frm←Add _.Form).id←'myform' ⍝ Create a form
      label←('for' 'name')frm.Add _.label'Please enter your name'
      name←'name'frm.Add _.EditField
      btn←frm.Add _.Button'Done'
      btn.On'click' 'CallbackFn'
     
      'result'frm.Add _.div ⍝ a div to contain output, updated by CallbackFn
    ∇

    ∇ r←CallbackFn
      :Access Public
     
      r←'#result'Replace _.p('Hello, ',(Get'name'),'!')
    ∇

:EndClass