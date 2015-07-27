:Class ejDateTimePicker : #._SF._ejWidget
⍝ Description:: Syncfusion DatePicker widget
⍝ Constructor:: [date] [format]
⍝ date          -  date in JavaScript format (see: http://www.w3schools.com/js/js_dates.asp)  (default 6↑⎕TS)
⍝ format        -  (default 'yyyy/MM/dd')
⍝ Public Fields::
⍝ Label    - string of text to appear next to the input field
⍝ LabelPos - position of label relative to the date input field ('left' (default) or 'right')
⍝ Examples::
⍝ ejDateTimePicker
⍝ ejDateTimePicker '17:53:59 11/27/66 (GMT-5)'
⍝ ejDateTimePicker (2000 1 1)('dd-MMM-yyyy hh:mm:ss')

    :Field Public Shared Readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejDateTimePicker.html'
    :Field Public Shared Readonly ApiLevel←2
    :Field Public Shared Readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejDateTimePicker.html'
    :Field Public Shared ReadOnly IntEvt←'change'  'close'  'create'  'destroy'  'focusIn'  'focusOut'  'open'
    :field public Label←''
    :field public LabelPos←'left'  ⍝ valid are 'left' 'right'


    ∇ make0
      :Access Public
      JQueryFn←Uses←'ejDateTimePicker'
      ContainerType←'input'
      :Implements Constructor
      Container.type←'text'
      InternalEvents←IntEvt
    ∇

    ∇ make args;val;fmt
      :Access Public
      JQueryFn←Uses←'ejDateTimePicker'
      ContainerType←'input'
      :Implements Constructor
      (val fmt)←args defaultArgs(6↑⎕TS)'dd-MMM-yyyy hh:mm:ss'
      ('value' 'dateTimeFormat')Set(('⍎new Date("',(⍕val),'")')fmt)
      Container.type←'text'
      InternalEvents←IntEvt
    ∇
:EndClass