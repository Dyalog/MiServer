:Class ejTimePicker : #._SF._ejWidget
    :Field Public Shared ReadOnly DocBase←'http://help.syncfusion.com/js/api/ejTimePicker.html'
    :Field Public Shared ReadOnly ApiLevel←2
    :Field Public Shared ReadOnly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejTimePicker.html'
    ∇ make0
      :Access Public
      JQueryFn←Uses←'ejTimePicker'
      ContainerTag←'input'
      :Implements Constructor
      Container.type←'text'
    ∇
        
    ∇ make args;n
      :Access Public
      JQueryFn←Uses←'ejTimePicker'
      ContainerTag←'input'
      :Implements Constructor :base args
     
      :If (≡args)∊0 1 ⋄ args←,⊂args ⋄ :EndIf
      n←¯1+⊃⍴args
      (n↑'value' 'timeFormat')Option 1↓args
      Container.type←'text'
    ∇
:EndClass
