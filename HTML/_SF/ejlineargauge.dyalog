:class ejLinearGauge : #._SF._ejWidget

⍝ Description:: Syncfusion Linear Gauge widget
⍝ Constructor:: [value [min [max]]]
⍝ value - value to display on the gauge
⍝ min   - minimum value on the gauge's scale
⍝ max   - maximum value on the gauge's scale
⍝ Public Fields::
⍝ Value - value to display on the gauge
⍝ Min   - minimum value on the gauge's scale
⍝ Max   - maximum value on the gauge's scale

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejLinearGauge.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejLinearGauge.html'
    :field public shared readonly IntEvt←'drawBarPointers' 'drawCustomLabel' 'drawIndicators' 'drawLabels' 'drawMarkerPointers' 'drawRange' 'drawTicks' 'init' 'load' 'mouseClick' 'mouseClickMove' 'mouseClickUp' 'renderComplete'
    :field public Value←⍬
    :field public Min←⍬
    :field public Max←⍬

    ∇ make
      :Access public
      JQueryFn←Uses←'ejLinearGauge'
      :Implements constructor
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejLinearGauge'
      :Implements constructor
      InternalEvents←IntEvt
      (Value Min Max)←args defaultArgs Value Min Max
    ∇

    ∇ r←Render;pointers;member;value
      :Access public
      SetId
      r←''
      :For member value :In ('markerPointers[1].value'Value)('minimum'Min)('maximum'Max)
          :If ~0∊⍴value
              ('scales[1].',member)Set value
          :EndIf
      :EndFor
      r,←⎕BASE.Render
    ∇
:EndClass