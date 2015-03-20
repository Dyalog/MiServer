  :class ejTile : #._SF._ejWidget
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTimePicker.html'
    :field public shared readonly ApiLevel←1
    ∇ make
      :Access public
      JQueryFn←Uses←'ejTile'
      :Implements constructor
    ∇
∇ make1 args
:access public
JQueryFn←Uses←{⍵↑⍨1-(⌽⍵)⍳'.'}⍕⊃⊃⎕CLASS ⎕THIS
:implements constructor :base args
 ∇
  :EndClass
