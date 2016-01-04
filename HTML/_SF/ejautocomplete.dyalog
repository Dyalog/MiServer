:class ejAutocomplete : #._SF._ejWidget
    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejAutocomplete.html'
    :field public shared readonly ApiLevel←1
    ∇ make
      :Access public
      JQueryFn←Uses←'ejAutocomplete'
      :Implements constructor
    ∇
    ∇ make1 args
      :Access public
      JQueryFn←Uses←{⍵↑⍨1-(⌽⍵)⍳'.'}⍕⊃⊃⎕CLASS ⎕THIS
      :Implements constructor :base args
    ∇
:EndClass
