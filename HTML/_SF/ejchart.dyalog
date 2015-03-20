  :class ejChart : #._SF._ejWidget
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejChart.html'
    :field public shared readonly ApiLevel←1
⍝        :field public series←⍬
    ∇ make
      :Access public
      JQueryFn←Uses←'ejChart'
      :Implements constructor
⍝          Options.series←,⎕NS''
    ∇
∇ make1 args
:access public
JQueryFn←Uses←{⍵↑⍨1-(⌽⍵)⍳'.'}⍕⊃⊃⎕CLASS ⎕THIS
:implements constructor :base args
 ∇
    ∇ r←Render
      :Access public
 ⍝         Options.series←1⌽'[]',#.JSON.fromAPL¨series
      r←⎕BASE.Render
    ∇
  :EndClass
