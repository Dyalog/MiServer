:Class ejDatePicker : #._SF._ejWidget
⍝ Description:: Syncfusion DatePicker widget
⍝ Constructor:: [date [format]]
⍝ date          -  date in JavaScript format (see: http://www.w3schools.com/js/js_dates.asp)  (default 3↑⎕TS)
⍝ format        -  (default 'yyyy/MM/dd')
⍝ Public Fields::
⍝ Label    - string of text to appear next to the input field
⍝ LabelPos - position of label relative to the date input field ('left' (default) or 'right')
⍝ Examples::
⍝ ejDatePicker
⍝ ejDatePicker '27-Nov-1966'
⍝ ejDatePicker (2000 1 1)('dd-MMM-yyyy')

    :Field Public Shared ReadOnly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejDatePicker.html'
    :Field Public Shared ReadOnly ApiLevel←3
    :Field Public Shared ReadOnly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejDatePicker.html'
    :Field Public Shared ReadOnly IntEvt←'beforeDateCreate'  'change'  'close'  'create'  'destroy'  'focusIn'  'focusOut'  'open'  'select'
    :field public Label←''
    :field public LabelPos←'left'  ⍝ valid are 'left' 'right'


    ∇ make0
      :Access Public
      JQueryFn←Uses←'ejDatePicker'
      ContainerTag←'input'
      :Implements Constructor
      Container.type←'text'
      InternalEvents←IntEvt
    ∇

    ∇ make args;val;fmt
    ⍝ Selector [value [dateFormat]]
      :Access Public
      JQueryFn←Uses←'ejDatePicker'
      ContainerTag←'input'
      :Implements Constructor
      (val fmt)←args defaultArgs(3↑⎕TS)'yyyy/MM/dd'
      ('value' 'dateFormat')Set(('⍎new Date("',(⍕val),'")')fmt)
      Container.type←'text'
      InternalEvents←IntEvt
    ∇

    ∇ r←Render
      :Access public
      SetId
      r←⎕BASE.Render
      :If Label≢''
          r←r((LabelPos≡'right'){⍺⍺:⍺,⍵ ⋄ ⍵,⍺})(⎕NEW #._html.label(Label('for'id))).Render
      :EndIf
    ∇

:EndClass