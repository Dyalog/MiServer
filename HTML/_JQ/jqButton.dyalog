  :Class jqButton : #._JQ._jqUIWidget ⍝!!!
    ∇ Make0
      :Access public
      :Implements constructor
      JQueryFn←'button'
    ∇

    ∇ Make1 pars
      :Access public
      pars←(⊂'button'),eis pars
      :Implements constructor :base pars
    ∇
  :EndClass