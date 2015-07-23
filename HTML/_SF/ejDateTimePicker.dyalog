:Class ejDateTimePicker : #._SF._ejWidget
    :Field Public Shared Readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejDateTimePicker.html'
    :Field Public Shared Readonly ApiLevel←2
    :Field Public Shared Readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejDateTimePicker.html'
    
    ∇ make0
      :Access Public
      :Implements Constructor
      init
    ∇

    ∇ init
      JQueryFn←Uses←'ejDateTimePicker'
      ContainerType←'input'
      Container.type←'text'
    ∇

    ∇ make args;n
      :Access Public
      :Implements Constructor 
      init
      :If (≡args)∊0 1 ⋄ args←,⊂args ⋄ :EndIf
      n←¯1+⊃⍴args
      (n↑'value' 'dateTimeFormat')Set 1↓args
    ∇

:EndClass