:class ejCircularGauge : #._SF._ejWidget
⍝ Description:: Syncfusion Circular Gauge widget
⍝ Constructor:: [pointers]
⍝ data - interpretation depends on the shape of data
⍝        0 1∨.=⍴⍴data  - the value(s) to be rendered on the gauge - each has its own pointer
⍝        matrix - [1;] pointer member names (see Syncfusion documentation)
⍝                 [2-;] values for the pointer members, one row per pointer
⍝ Public Fields::
⍝ Data - interpretation depends on the shape of data
⍝        0 1∨.=⍴⍴data  - the value(s) to be rendered on the gauge - each has its own pointer
⍝        matrix - [1;] pointer member names (see Syncfusion documentation)
⍝                 [2-;] values for the pointer members, one row per pointer

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejCircularGauge.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejCircularGauge.html'
    :field public shared readonly IntEvt←'drawCustomLabel' 'drawIndicators' 'drawLabels' 'drawPointerCap' 'drawPointers' 'drawRange' 'drawTicks' 'load' 'mouseClick' 'mouseClickMove' 'mouseClickUp' 'renderComplete'
    :field public Data←⍬

    ∇ make
      :Access public
      JQueryFn←Uses←'ejCircularGauge'
      :Implements constructor
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejCircularGauge'
      :Implements constructor
      InternalEvents←IntEvt
      Data←args
    ∇

    ∇ r←Render;pointers
      :Access public
      SetId
      r←''
      :If ~0∊⍴Data
          :If 0 1∊⍨⍴⍴Data
              pointers←(⊂'value')⍪⍪Data
          :Else
              pointers←Data
          :EndIf
          'scales[1].pointers'Set #.JSON.fromTable pointers
      :EndIf
      r,←⎕BASE.Render
    ∇

:EndClass