:Class ejDatePicker : #._SF._ejWidget
    :Field Public Shared ReadOnly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejDatePicker.html'
    :Field Public Shared ReadOnly ApiLevel←2
    :Field Public Shared ReadOnly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejDatePicker.html'
    :field public shared readonly IntEvt←'beforeDateCreate'  'change'  'close'  'create'  'destroy'  'focusIn'  'focusOut'  'open'  'select'

    ∇ make0
      :Access Public
      :Implements Constructor
      init
    ∇

    ∇ make args;val;fmt
    ⍝ Selector [value [dateFormat]]
      :Access Public
      :Implements Constructor
      init
      (val fmt)←args defaultArgs(3↑⎕TS)'yyyy/MM/dd'
      ('value' 'dateFormat')Set(('⍎new Date("',(⍕val),'")')fmt)
    ∇

    ∇ init
      JQueryFn←Uses←'ejDatePicker'
      ContainerType←'input'
      Container.type←'text'
      InternalEvents←IntEvt
    ∇

:EndClass