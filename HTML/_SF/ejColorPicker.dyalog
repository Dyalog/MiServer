:Class ejColorPicker : #._SF._ejWidget
    :Field Public Shared Readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejColorPicker.html'
    :Field Public Shared ReadOnly ApiLevel←3
    :Field Public Shared Readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejColorPicker.html'
    :Field public Shared ReadOnly IntEvt←'change' 'close' 'create' 'destroy' 'open' 'select'
    ∇ make0
      :Access Public
      JQueryFn←Uses←'ejColorPicker'
      :Implements Constructor            
      IntervalEvents←IntEvt
    ∇

    ∇ make args;n
    ⍝ Selector [value [palette]]
      :Access Public
      JQueryFn←Uses←'ejColorPicker'
      :Implements Constructor :Base args
      args←args defaultArgs'' ''
      ('value' 'palette')Set args ⍝ Drop Selector
      IntervalEvents←IntEvt
    ∇

    ∇ r←Render
    ⍝ If inline, container should be a div, else it should be a text input
      :Access Public
      :If 'true'≢⍕⎕THIS.GetOption'displayInline'
          ContainerType←'input'
          Container.type←'text'
      :EndIf
      r←⎕BASE.Render
      IntervalEvents←IntEvt
    ∇

:EndClass