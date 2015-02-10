:Class DatesAndTimes : Dyalog14 
 
    :Field Public dp←'2015-02-09'
    :Field Public tp←'10:45'
    :Field Public dtp←'2015-02-09 10:45'

    ∇ Render;f;dtpc;tpc;dpc
      :Access Public
     
      f←Add Form
      f.Add h3'SyncFusion Date and Time Pickers'
     
      dpc←f.Add _SF.ejDatePicker('#dp'dp'yyyy-MM-dd')
      'showRoundedCorner'dpc.Option #.JSON.true
      tpc←f.Add _SF.ejTimePicker('#tp'tp'hh:mm')
      dtpc←f.Add _SF.ejDateTimePicker('#dtp'dtp'yyyy-MM-dd hh:mm')
     
      f.Add br
     
      f.Add InputSubmit'submit' 'OK'
     
      :If IsPost ⍝ was it a POST request?
          Add br
          Add p('You picked ',⍕dp tp dtp)
      :EndIf
    ∇

:EndClass