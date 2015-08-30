:Class ejDatePickerSimple : MiPageSample
⍝ Control:: _SF.ejDatePicker
⍝ Description:: Pick a date in yyyy/MM/dd format

    ∇ Compose;rte;frm
      :Access Public
     
      frm←'myform'Add _.Form
      rte←'dp1'frm.Add _.ejDatePicker(2 23 2015)'yyyy/MM/dd'
      rte.On'change' 'myCallBack'
      'message'frm.Add _.div
    ∇
    
    ∇ r←myCallBack;date
      :Access Public 
     
      date←Get _what
      r←'#message'Replace'You selected: ',date
    ∇


:EndClass

