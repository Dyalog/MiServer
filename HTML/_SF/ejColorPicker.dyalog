:Class ejColorPicker : #._SF._ejWidget
    :Field Public Shared Readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejColorPicker.html'
    :Field Public Shared ReadOnly ApiLevel←2

    ∇ make0
      :Access Public
      JQueryFn←Uses←'ejColorPicker'
      ContainerType←'input'
      :Implements Constructor
      Container.type←'text'
    ∇

    ∇ make args;n
    ⍝ Selector [value [palette]]
      :Access Public
      JQueryFn←Uses←'ejColorPicker'
      ContainerType←'input'
      :Implements Constructor :base args
     
      :If (≡args)∊0 1 ⋄ args←,⊂args ⋄ :EndIf
      n←¯1+⊃⍴args
      (n↑'value' 'palette')Option 1↓args ⍝ Drop Selector
      Container.type←'text'
    ∇

:EndClass
