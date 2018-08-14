:class ejTagCloud : #._SF._ejWidget

⍝ Description:: Syncfusion TagCloud widget
⍝ Constructor:: [Data]
⍝ Data     - matrix of data (one row per data point)
⍝            [;1] text to display
⍝   optional [;2] frequency
⍝   optional [;3] URL to open if node is clicked
⍝   optional [;4] HTML attributes for the underlying anchor <a> tag
⍝ Public Fields::
⍝ Data     - matrix of data (one row per data point)
⍝            [;1] text to display
⍝   optional [;2] frequency
⍝   optional [;3] URL to open if node is clicked
⍝   optional [;4] HTML attributes for the underlying anchor <a> tag

    :field public shared readonly DocBase←'https://help.syncfusion.com/js/tagcloud/overview'
    :field public shared readonly ApiLevel←3
    :field public shared readonly IntEvt←'click' 'create' 'destroy' 'mouseout' 'mouseover'

    :field public Data←⍬

    ∇ make
      :Access public
      JQueryFn←Uses←'ejTagCloud'
      :Implements constructor
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejTagCloud'
      :Implements constructor
      Data←args
      InternalEvents←IntEvt
    ∇

    ∇ r←Render;d;n;src
      :Access public
      SetId
      r←''
      :If ~0∊⍴Data
          d←⍪Data
          :If 1=2⊃⍴d ⋄ d,←1 ⋄ :EndIf
          n←2⊃⍴d
          src←id,'_data'
          'dataSource'Set⊂,src
          r←(⎕NEW #._DC.Script('var ',src,' = ',#.JSON.fromAPL⊃#.JSON.fromTable/(n↑'text' 'frequency' 'url' 'htmlAttributes')d)).Render
      :EndIf
      r,←⎕BASE.Render
    ∇
:EndClass
