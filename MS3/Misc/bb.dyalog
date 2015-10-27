:Class bb : MiPageSample

    ∇ Compose
      :Access public
      :If isPost
          ∘∘∘
      :Else
          :With Add _.Form
              (Add _.input).(id name type)←2 1/'upload' 'file'
              Add _.SubmitButton'OK'
          :EndWith
      :EndIf
    ∇

:EndClass