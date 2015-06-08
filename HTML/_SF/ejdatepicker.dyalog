:Class ejDatePicker : #._SF._ejWidget
    :Field Public Shared ReadOnly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejDatePicker.html'
    :Field Public Shared ReadOnly ApiLevel←2
    :Field Public Shared ReadOnly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejDatePicker.html'
    ∇ make0
      :Access Public
      JQueryFn←Uses←'ejDatePicker'
      ContainerType←'input'
      :Implements Constructor
      Container.type←'text'
    ∇
    ∇ make args;n
    ⍝ Selector [value [dateFormat]]
      :Access Public
      JQueryFn←Uses←'ejDatePicker'
      ContainerType←'input'
      :Implements Constructor :base args
     
      :If (≡args)∊0 1 ⋄ args←,⊂args ⋄ :EndIf
      n←¯1+⊃⍴args
      (n↑'value' 'dateFormat')Option 1↓args
      Container.type←'text'
    ∇
:EndClass
