:Class ejColorPicker : #._SF._ejWidget
    :Field Public Shared Readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejColorPicker.html'
    :Field Public Shared ReadOnly ApiLevel←3

    ∇ make0
      :Access Public
      JQueryFn←Uses←'ejColorPicker'
      :Implements Constructor
    ∇

    ∇ make args;n
    ⍝ Selector [value [palette]]
      :Access Public
      JQueryFn←Uses←'ejColorPicker'
      :Implements Constructor :Base args
     
      :If (≡args)∊0 1 ⋄ args←,⊂args ⋄ :EndIf
      n←¯1+⊃⍴args
      (n↑'value' 'palette')Option 1↓args ⍝ Drop Selector
    ∇

    ∇ r←Render
    ⍝ If inline, container should be a div, else it should be a text input
      :If _true≢⎕THIS.GetOption'displayInline'
          ContainerType←'input'
          Container.Type←'text'
      :EndIf
      r←⎕BASE.Render
    ∇
    
:EndClass