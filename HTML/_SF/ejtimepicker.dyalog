:Class ejTimePicker : #._SF._ejWidget
    :Field Public Shared ReadOnly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejTimePicker.html'
    :Field Public Shared ReadOnly ApiLevel←2
    :Field Public Shared ReadOnly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejTimePicker.html'

    ∇ make0
      :Access Public
      :Implements Constructor
      init
    ∇

    ∇ init
      JQueryFn←Uses←'ejTimePicker'
      ContainerType←'input'
      Container.type←'text'
    ∇

    ∇ make args;n
      :Access Public
      :Implements Constructor 
      init
      :If (≡args)∊0 1 ⋄ args←,⊂args ⋄ :EndIf
      n←⍴args
      (n↑'value' 'timeFormat')Set args
    ∇

:EndClass