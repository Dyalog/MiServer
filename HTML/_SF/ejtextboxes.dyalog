﻿  :class ejTextBoxes : #._SF._ejWidget
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTextBoxes.html'
    :field public shared readonly ApiLevel←1
    ∇ make
      :Access public
      JQueryFn←Uses←'ejTextBoxes'
      :Implements constructor
    ∇
∇ make1 args
:access public
JQueryFn←Uses←{⍵↑⍨1-(⌽⍵)⍳'.'}⍕⊃⊃⎕CLASS ⎕THIS
:implements constructor :base args
 ∇
  :EndClass
