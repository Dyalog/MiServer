:class ejSlider : #._SF._ejWidget

⍝ Description:: Syncfusion Slider widget
⍝ Constructor:: [min [max [value(s)]]]
⍝ min - the minimum value for the slider (default ⍬)
⍝ max - the maximum value for the slider (default ⍬)
⍝ value(s) - zero or more values for the slider (default ⍬)
⍝ Public Fields::
⍝ Values - zero or more values for the slider
⍝ Min - the minimum value for the slider (default ⍬)
⍝ Max - the maximum value for the slider (default ⍬)

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejSlider.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly IntEvt←'change' 'create' 'destroy' 'slide' 'start' 'stop'
    :field public Values←⍬
    :field public Min←⍬
    :field public Max←⍬

    ∇ make
      :Access public
      JQueryFn←Uses←'ejSlider'
      :Implements constructor
      InternalEvents←IntEvt
      WidgetDef[5]←⊂'.ejSlider("option","value")'  ⍝ NB!! because ejSlider's input element is different from the container holding the slider, we use an alternate syntax to retrieve the value
    ∇

    ∇ make1 arg
      :Access public
      JQueryFn←Uses←'ejSlider'
      :Implements constructor
      :If ~0∊⍴arg
          :If 2=|≡arg
              arg←,⊃arg
          :EndIf
          Min Max←2↑arg,(⍴arg)↓⍬ ⍬
          Values←2↓arg
      :EndIf
      InternalEvents←IntEvt
      WidgetDef[5]←⊂'.ejSlider("option","value")'  ⍝ NB!! because ejSlider's input element is different from the container holding the slider, we use an alternate syntax to retrieve the value
    ∇

    ∇ r←Render
      :Access public
      :If ⍬≢Min ⋄ 'minValue'SetIfNotSet Min ⋄ :EndIf
      :If ⍬≢Max ⋄ 'maxValue'SetIfNotSet Max ⋄ :EndIf
      :Select ⊃⍴,Values
      :Case 0
      :Case 1
          'value'Set⊃Values
      :Else
          'values'Set,Values
          'sliderType'SetIfNotSet'⍎ej.SliderType.Range'
          WidgetDef[5]←⊂'.ejSlider("option","values")'
      :EndSelect
      r←⎕BASE.Render
    ∇

:EndClass
