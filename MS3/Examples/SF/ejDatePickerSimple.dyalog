:Class ejDatePickerSimple : MiPageSample
⍝ Control:: _SF.ejDatePicker
⍝ Description:: Pick a date in yyyy/MM/dd format

    ∇ Compose;dp
      :Access Public
      dp←'dp'Add _.ejDatePicker(3↑⎕TS)'yyyy/MM/dd'
      dp.On'change' 'myCallBack'('newdate' 'argument' 'value')
      'message'Add _.div
    ∇

    ∇ r←myCallBack;date
      :Access Public
      r←'#message'Replace'You selected: ','No date returned'Get'newdate'
    ∇


:EndClass