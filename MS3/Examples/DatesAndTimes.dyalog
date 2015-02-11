:Class DatesAndTimes : Dyalog14 
 
    :Field Public dp←'Wednesday February 11, 2015'
    :Field Public tp←'10:45'
    :Field Public dtp←'2015-02-09 3:45 PM'
    
    ⍝ Date/Time Format codes (each one is used at least once in the example):
    ⍝ ss: (seconds)
    ⍝ mm: (minutes)
    ⍝ hh: hours(12), HH: hours(24)
    ⍝ tt: AM or PM
    ⍝ MMM: Feb, MMMM: February, MM: 05 (month)
    ⍝ d:7, dd:07, dddd:Monday  (date)
    ⍝ yyyy: 2015 (year)

    ∇ Render;f;dtpc;tpc;dpc;docn;controls
      :Access Public
     
      controls←'Date' 'Time' 'DateTime'
      docn←{⎕NEW _html.a(('<p>View documentation for ',⍵,'</p>')('href="',(⍎'_SF.ej',⍵,'Picker.ApiLink'),'"'))}¨controls
     
      f←Add Form
     
      f.Add h3'SyncFusion Date and Time Pickers'
      dpc←⎕NEW _SF.ejDatePicker('#dp'dp'dddd MMMM d, yyyy')
      'width' 'showRoundedCorner' 'enableAnimation'dpc.Option 25,2/#.JSON.true
      tpc←⎕NEW _SF.ejTimePicker('#tp'tp'HH:mm')
      'width' 'showRoundedCorner' 'enableAnimation'dpc.Option 250,2/#.JSON.true
      dtpc←⎕NEW _SF.ejDateTimePicker('#dtp'dtp'yyyy-MM-d h:mm tt')
      'width' 'showRoundedCorner' 'enableAnimation'dpc.Option 250,2/#.JSON.true
     
      f.Add _HTML.Table ((dpc tpc dtpc),[1.5]docn) ⍝ ('valign=bottom')
      f.Add br
     
      f.Add InputSubmit'submit' 'OK'
     
      :If IsPost ⍝ was it a POST request?
          Add br
          Add _HTML.Table((controls,[1.5]dp tp dtp))
      :EndIf
    ∇

:EndClass