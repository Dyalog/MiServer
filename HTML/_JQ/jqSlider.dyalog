﻿:Class jqSlider : #._JQ._jqUIWidget

⍝ Description:: jQueryUI Slider widget
⍝ Constructor:: [min [max [value(s)]]]
⍝ min - the minimum value for the slider (default ⍬)
⍝ max - the maximum value for the slider (default ⍬)
⍝ value(s) - zero or more values for the slider (default ⍬)
⍝ Public Fields::
⍝ Values - zero or more values for the slider
⍝ Min - the minimum value for the slider (default ⍬)
⍝ Max - the maximum value for the slider (default ⍬)

    :field public shared readonly DocBase←'https://jqueryui.com/slider/'
    :field public shared readonly ApiLevel←3
    :field public shared readonly IntEvt←'change' 'create' 'slide' 'start' 'stop'
    :field public Values←⍬
    :field public Min←⍬
    :field public Max←⍬


    ∇ Make
      :Access public
      :Implements constructor
      JQueryFn←'slider'
      InternalEvents←IntEvt
    ∇

    ∇ Make1 arg
      :Access public
      :Implements constructor
      JQueryFn←'slider'
      Min Max←2↑arg,(⍴arg)↓⍬ ⍬
      Values←2↓arg
      InternalEvents←IntEvt
    ∇

    ∇ r←Render
      :Access public
      :If ⍬≢Min ⋄ 'min'Set Min ⋄ :EndIf
      :If ⍬≢Max ⋄ 'max'Set Max ⋄ :EndIf
      :Select ⊃⍴,Values
      :Case 0
      :Case 1
          'value'Set⊃Values
      :Else
          'values'Set,Values
      :EndSelect
      r←⎕BASE.Render
    ∇

:EndClass