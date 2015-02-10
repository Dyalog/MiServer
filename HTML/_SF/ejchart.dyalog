  :class ejChart : #._SF._ejObject
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejChart.html'
    :field public shared readonly ApiLevel←1

⍝        :field public series←⍬

    ∇ make
      :Access public
      JQueryFn←Uses←'ejChart'
      :Implements constructor
⍝          Options.series←,⎕NS''
    ∇

    ∇ r←Render
      :Access public
 ⍝         Options.series←1⌽'[]',#.JSON.fromAPL¨series
      r←⎕BASE.Render
    ∇

  :EndClass