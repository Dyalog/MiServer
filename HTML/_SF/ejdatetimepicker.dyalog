:Class ejDateTimePicker : #._SF._ejWidget
⍝ Description:: Syncfusion DateTimePicker widget
⍝ Constructor:: [datetime [format]]
⍝ datetime      -  datetime in either JavaScript format or n↑⎕TS (see: http://www.w3schools.com/js/js_dates.asp)  (default 6↑⎕TS)
⍝ format        -  datetime format, a combination of a date format and a time format (default 'dd-MMM-yyyy hh:mm:ss')
⍝ Public Fields::
⍝ DateTime      - Datetime in either JavaScript format or n↑⎕TS
⍝ Format        - Datetime format, a combination of a date format and a time format (default 'dd-MMM-yyyy hh:mm:ss')
⍝ Examples::
⍝ ejDateTimePicker
⍝ ejDateTimePicker '17:53:59 11/27/66 (GMT-5)'
⍝ ejDateTimePicker (1999 12 31 23 59 59)('dd-MMM-yyyy hh:mm:ss')

    :Field Public Shared Readonly DocBase←'https://help.syncfusion.com/js/datetimepicker/overview'
    :Field Public Shared Readonly ApiLevel←2
    :Field Public Shared Readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejDateTimePicker.html'
    :Field Public Shared ReadOnly IntEvt←'change'  'close'  'create'  'destroy'  'focusIn'  'focusOut'  'open'
    :field public DateTime←''
    :field public Format←'dd-MMM-yyyy hh:mm:ss'


    ∇ make0
      :Access Public
      JQueryFn←Uses←'ejDateTimePicker'
      ContainerTag←'input'
      :Implements Constructor
      Container.type←'text'
      InternalEvents←IntEvt
      DateTime←6↑⎕TS
    ∇

    ∇ make args;val;fmt
      :Access Public
      JQueryFn←Uses←'ejDateTimePicker'
      ContainerTag←'input'
      :Implements Constructor
      (DateTime Format)←args defaultArgs(6↑⎕TS)'dd-MMM-yyyy hh:mm:ss'
      Container.type←'text'
      InternalEvents←IntEvt
    ∇

    ∇ r←Render;dt
      :Access public
      Container.NoEndTag←1
      SetId
      :If 0∊⍴DateTime ⋄ DateTime←6↑⎕TS ⋄ :EndIf
      :If (0 2∊⍨10|⎕DR DateTime) ⋄ dt←'"',DateTime,'"'
      :Else ⋄ dt←1↓∊','∘,∘⍕¨DateTime-(⍴,DateTime)↑0 1 ⍝ adjust for JavaScript having 0-origin months (Jan-Dec = 0-11)
      :EndIf
      ('value' 'dateTimeFormat')Set((⊂'new Date(',dt,')')Format)
      r←⎕BASE.Render
    ∇
:EndClass
