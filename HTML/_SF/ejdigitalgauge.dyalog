:class ejDigitalGauge : #._SF._ejWidget

⍝ Description:: Syncfusion Digital Gauge widget
⍝ Constructor:: [text [typeface [spacing [seglength [segwidth]]]]]
⍝ text       - text to render in the digital gauge
⍝ typeface   - typeface to use - choices are:
⍝             '7' - 7-segment
⍝             '14' - 14-segment
⍝             '16' - 16-segment
⍝             '88dot' - 8×8 dot matrix with round dots
⍝             '88square' - 8×8 dot matrix with square dots
⍝ spacing    - spacing between characters
⍝ seglength  - numeric segment length (default based on typeface)
⍝ segwidth   - numeric segment width (default based on typeface)
⍝
⍝ Public Fields::
⍝ Text - text to render in the digital gauge
⍝ Typeface   - typeface to use - choices are:
⍝             '7' - 7-segment
⍝             '14' - 14-segment
⍝             '16' - 16-segment
⍝             '88dot' - 8×8 dot matrix with round dots
⍝             '88square' - 8×8 dot matrix with square dots
⍝ Spacing    - spacing between characters (default 4)
⍝ SegLength  - numeric segment length (default based on typeface)
⍝ SegWidth   - numeric segment width (default based on typeface)

    :field public shared readonly DocBase←'https://help.syncfusion.com/js/digitalgauge/overview'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejDigitalGauge.html'
    :field public shared readonly IntEvt←'init' 'itemRendering' 'load' 'renderComplete'
    :field public Text←''
    :field public Typeface←'16'
    :field public Spacing←4
    :field public SegLength←⍬
    :field public SegWidth←⍬

    ∇ make
      :Access public
      JQueryFn←Uses←'ejDigitalGauge'
      :Implements constructor
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejDigitalGauge'
      :Implements constructor
      InternalEvents←IntEvt
      Text Typeface Spacing SegLength SegWidth←args defaultArgs Text Typeface Spacing SegLength SegWidth
    ∇

    ∇ r←Render;typeface;ind;text
      :Access public
      :If ~0∊⍴Text ⍝ if the user doesn't specify Text, then we assume he's setting everything himself manually
          'items[1].value'Set text←⍕,Text
          ind←((,'7')'14' '16' '88dot' '88square')⍳⊂,Typeface
          :If 0∊⍴SegLength
              SegLength←ind⊃10 10 10 3 3 10
          :EndIf
          :If 0∊⍴SegWidth
              SegWidth←ind⊃1 1 1 3 3 1
          :EndIf
          'items[1].characterSettings.type'SetIfNotSet ind⊃'sevensegment' 'fourteensegment' 'sixteensegment' 'eightcrosseightdotmatrix' 'eightcrosseightsquarematrix' 'sixteensegment'
          'items[1].characterSettings.spacing'SetIfNotSet Spacing
          'items[1].segmentSettings.count'SetIfNotSet⊃⍴,text
          'items[1].segmentSettings.length'SetIfNotSet SegLength
          'items[1].segmentSettings.width'SetIfNotSet SegWidth
      :EndIf
      r←⎕BASE.Render
    ∇
:EndClass