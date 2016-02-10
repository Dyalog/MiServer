:class ejRating : #._SF._ejWidget

⍝ Description:: Syncfusion Rating widget
⍝ Constructor:: [max [value [precision [min]]]]
⍝ max        - maximum rating value
⍝ value      - value for the rating
⍝ precision  - precision for the widget - one of 'full' 'half' or 'exact'
⍝ min        - minimum rating value
⍝
⍝ Public Fields::
⍝ Max        - maximum rating value  (default 5)
⍝ Value      - value for the rating  (default 1)
⍝ Precision  - precision for the widget - one of 'full' 'half' or 'exact' (default 'full')
⍝ Min        - minimum rating value (default 0)

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejRating.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejRating.html'
    :field public shared readonly IntEvt←'change' 'click' 'create' 'destroy' 'mouseout' 'mouseover'
    :field public Max←5
    :field public Min←0
    :field public Value←1
    :field public Precision←'full'

    ∇ make
      :Access public
      JQueryFn←Uses←'ejRating'
      :Implements constructor
      ContainerTag←'input'
    ∇

    ∇ make1 arg  ⍝ [1] max, [2] current, [3] precision, [4] min
      :Access public
      JQueryFn←Uses←'ejRating'
      (Input←⎕NEW #._DC.EditField arg).class←'rating'
      :Implements constructor
      ContainerTag←'input'
      Max Value Precision Min←args defaultArgs Max Value Precision Min
    ∇

    ∇ r←Render
      :Access public
      r←''
      'minValue' 'maxValue' 'precision' 'value'SetIfNotSet¨Min Max Precision Value
      r,←⎕BASE.Render
    ∇
:EndClass