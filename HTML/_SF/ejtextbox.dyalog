:Class ejTextBox : #._SF._ejWidget

    :Field Public Shared Readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejTextBoxes.html'
    :Field Public Shared Readonly ApiLevel←1
    :Field Public Shared Readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejTextBoxes.html'

    :Field Public Type←'Numeric' ⍝ Numeric|Currency|Percentage
    :Field Public value←''       

    ∇ make
      :Access Public
      Uses←'ejTextBoxes'
      ContainerType←'input'
      :Implements Constructor    
      Container.type←'text'
    ∇

    ∇ make1 args
      :Access Public                
      ⍝ args: Type [value]
      args←eis args ⍝ Enclose if simple
      (Type value)←args,(⍴args)↓'Numeric' ''
      Uses←'ejTextBoxes'
      ContainerType←'input'
      :Implements Constructor    
      Container.type←'text'
    ∇
    
    ∇ r←Render
      :Access Public
     
      'Invalid Type set for ejTextBox'⎕SIGNAL((⊂Type)∊'Numeric' 'Currency' 'Percentage')↓11
      JQueryFn←'ej',Type,'Textbox'
      :If value≢'' ⋄ 'value'Set value ⋄ :EndIf
      r←⎕BASE.Render
    ∇

:EndClass
