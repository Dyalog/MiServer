:Class ejTimePicker : #._SF._ejWidget
    :Field Public Shared ReadOnly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTimePicker.html'
    :Field Public Shared ReadOnly ApiLevel←2
    ∇ make0
      :Access Public
      JQueryFn←Uses←'ejTimePicker'
      ContainerType←'input'
      :Implements Constructor
      Container.type←'text'
    ∇
        
    ∇ make args;n
      :Access Public
      JQueryFn←Uses←'ejTimePicker'
      ContainerType←'input'
      :Implements Constructor :base args
     
      :If (≡args)∊0 1 ⋄ args←,⊂args ⋄ :EndIf
      n←¯1+⊃⍴args
      (n↑'value' 'timeFormat')Option 1↓args
      Container.type←'text'
    ∇
:EndClass
