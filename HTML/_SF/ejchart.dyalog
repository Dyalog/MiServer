:class ejChart : #._SF._ejWidget
    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejChart.html'
    :field public shared readonly ApiLevel←1
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejChart.html'

    ∇ make
      :Access public
      JQueryFn←Uses←'ejChart'
      :Implements constructor
     
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejChart'
      :Implements constructor :base args
    ∇

    ∇ r←Render
      :Access public
      r←⎕BASE.Render
    ∇
:EndClass