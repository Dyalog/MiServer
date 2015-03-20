  :class ejRTE : #._SF._ejWidget
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejRotator.html'
    :field public shared readonly ApiLevel←3
    ∇ make
      :Access public
      JQueryFn←Uses←'ejRTE'
      ContainerType←'textarea'
      :Implements constructor
    ∇
∇ make1 args
:access public
JQueryFn←Uses←{⍵↑⍨1-(⌽⍵)⍳'.'}⍕⊃⊃⎕CLASS ⎕THIS
:implements constructor :base args
 ∇
  :EndClass
