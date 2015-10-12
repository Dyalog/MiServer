:Class EditFieldSimple : MiPageSample
⍝ Control:: _DC.EditField _DC.Button _html.label
⍝ Description:: Collect input and echo it on a button press

    ∇ Compose;btn;F1;label;name
      :Access Public
     
      F1←'myform'Add _.Form ⍝ Create a form
      label←('for"name"')F1.Add _.label'Please enter your name'
      name←'name'F1.Add _.EditField
      done←'done'F1.Add _.Button'Done'
      done.On'click' 'CallbackFn'
     
      'result'F1.Add _.div ⍝ a div to contain output, updated by CallbackFn
    ∇

    ∇ r←CallbackFn
      :Access Public 
      r←'#result'Replace _.p('Hello, ',(Get'name'),'!')
    ∇

:EndClass