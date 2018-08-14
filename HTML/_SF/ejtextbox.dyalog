﻿:Class ejTextBox : #._SF._ejWidget

    :Field Public Shared Readonly DocBase←'https://help.syncfusion.com/js/textboxes/overview'
    :Field Public Shared Readonly ApiLevel←1
    :Field Public Shared Readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejTextBoxes.html'
    :Field Public Shared Readonly IntEvt←'change' 'create' 'destroy' 'focusIn' 'focusOut'

    :Field Public Type←'Numeric' ⍝ Numeric|Currency|Percentage
    :Field Public value←''       

    ∇ make
      :Access Public
      Uses←'ejTextBoxes'
      ContainerTag←'input'
      :Implements Constructor    
      Container.type←'text'
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access Public                
      ⍝ args: Type [value]
      args←eis args ⍝ Enclose if simple
      (Type value)←args,(⍴args)↓'Numeric' ''
      Uses←'ejTextBoxes'
      ContainerTag←'input'
      :Implements Constructor    
      Container.type←'text'
      InternalEvents←IntEvt
    ∇
    
    ∇ r←Render
      :Access Public
     
      Container.NoEndTag←1
      'Invalid Type set for ejTextBox'⎕SIGNAL((⊂Type)∊'Numeric' 'Currency' 'Percentage')↓11
      JQueryFn←'ej',Type,'Textbox'
      :If value≢'' ⋄ 'value'Set value ⋄ :EndIf
      r←⎕BASE.Render
    ∇

:EndClass
