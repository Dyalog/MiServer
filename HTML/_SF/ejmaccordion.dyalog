  :class ejmAccordion : #._SF._ejWidget
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmAccordion.html'
    :field public shared readonly ApiLevel←1
    :field public Titles←0⍴⊂''
    :field public Sections←0⍴⊂''
    ∇ make
      :Access public
      JQueryFn←Uses←'ejmAccordion'
      :Implements constructor
    ∇
∇ make1 args
:access public
JQueryFn←Uses←{⍵↑⍨1-(⌽⍵)⍳'.'}⍕⊃⊃⎕CLASS ⎕THIS
:implements constructor :base args
 ∇
  :endclass
