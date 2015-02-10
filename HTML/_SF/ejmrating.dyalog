  :class ejmRating  : #._SF._ejObject
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejmRating.html'
    :field public shared readonly ApiLevel←1

    ∇ make1 arg
      :Access public
      :Implements constructor
      Uses←'ejmRating'
      id←arg
    ∇

    ∇ r←Render
      :Access public
      r←(⎕NEW #._html.div(''(('id'id)('data-role' 'ejmrating')))).Render
    ∇

  :EndClass