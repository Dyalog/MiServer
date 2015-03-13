:Class datepicker : MiPageSample

    ∇ Render;f;dp
      :Access public
      f←Add Form
      dp←f.Add _SF.ejDatePicker
      dp.Container←'#dp'
      f.Add InputSubmit'submit' 'OK'
      :If IsPost ⍝ was it a POST request?
          Add br
          Add p('You picked ',Get'dp')
      :EndIf
    ∇

:EndClass