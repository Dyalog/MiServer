:Class ejDatePicker : #._SF._ejWidget
    :Field Public Shared ReadOnly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejDatePicker.html'
    :Field Public Shared ReadOnly ApiLevel←2
    :Field Public Shared ReadOnly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejDatePicker.html'
    :field public shared readonly IntEvt←'beforeDateCreate'  'change'  'close'  'create'  'destroy'  'focusIn'  'focusOut'  'open'  'select'
    ∇ make0
      :Access Public
      JQueryFn←Uses←'ejDatePicker'
      ContainerType←'input'
      :Implements Constructor
      Container.type←'text'
      InternalEvents←IntEvt
    ∇
    ∇ make args;n;val;fmt
    ⍝ Selector [value [dateFormat]]
      :Access Public
      JQueryFn←Uses←'ejDatePicker'
      ContainerType←'input'
      :Implements Constructor
      args←eis args
      (val fmt)←2↑args,(⍴args)↓(3↑⎕TS)'yyyy/MM/dd'
      ('value' 'dateFormat')Set(('⍎new Date("',(⍕val),'")')fmt)
      Container.type←'text'
      InternalEvents←IntEvt
    ∇
:EndClass