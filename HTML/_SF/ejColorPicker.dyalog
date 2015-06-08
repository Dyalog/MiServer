:Class ejColorPicker : #._SF._ejWidget
    :Field Public Shared Readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejColorPicker.html'
    :Field Public Shared ReadOnly ApiLevel←3
    :Field Public Shared Readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejColorPicker.html'

    ∇ make0
      :Access Public
      JQueryFn←Uses←'ejColorPicker'
     ⍝ ContainerType←'input'
      :Implements Constructor
     ⍝ Container.type←'text'
    ∇

    ∇ make args;n
    ⍝ Selector [value [palette]]
      :Access Public
      JQueryFn←Uses←'ejColorPicker'
     ⍝ ContainerType←'input'
      :Implements Constructor :Base args
     ⍝ Container.type←'text'
     
      :If (≡args)∊0 1 ⋄ args←,⊂args ⋄ :EndIf
      n←¯1+⊃⍴args
      (n↑'value' 'palette')Option 1↓args ⍝ Drop Selector
    ∇

    ∇ r←Render
    ⍝ If inline, container should be a div, else it should be a text input
      :Access Public
     
      :If 'true'≢⍕⎕THIS.GetOption'displayInline'
          ContainerType←'input'
          Container.type←'text'
      :EndIf
      r←⎕BASE.Render
    ∇
    
:EndClass