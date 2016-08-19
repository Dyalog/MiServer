:Class ejColorPicker : #._SF._ejWidget
⍝ Description:: Syncfusion ColorPicker widget
⍝ Constructor:: [color [palette]]
⍝ color      -  initial color
⍝ palette    -  (default 'yyyy/MM/dd')
⍝ Public Fields::
⍝ Color    - string of text to appear next to the input field
⍝ Palette  - position of label relative to the date input field ('left' (default) or 'right')

    :Field Public Shared Readonly DocBase←'http://help.syncfusion.com/js/api/ejColorPicker.html'
    :Field Public Shared ReadOnly ApiLevel←3
    :Field Public Shared Readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejColorPicker.html'
    :Field public Shared ReadOnly IntEvt←'change' 'close' 'create' 'destroy' 'open' 'select'

    :field public Color←''
    :field public Palette←''

    ∇ make0
      :Access Public
      JQueryFn←Uses←'ejColorPicker'
      :Implements Constructor
      InternalEvents←IntEvt
    ∇

    ∇ make args
    ⍝ Selector [value [palette]]
      :Access Public
      JQueryFn←Uses←'ejColorPicker'
      :Implements Constructor
      (Color Palette)←args defaultArgs'' ''
      InternalEvents←IntEvt
    ∇

    ∇ r←Render
    ⍝ If inline, container should be a div, else it should be a text input
      :Access Public
      :If 'true'≢⍕⎕THIS.GetOption'displayInline'
          ContainerTag←'input'
          Container.NoEndTag←1
          Container.type←'text'
      :EndIf
      ('value' 'palette')Set Color Palette
      r←⎕BASE.Render
    ∇

:EndClass