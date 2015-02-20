  :Class jqDatePicker : #._JQ._jqUIWidget

    :field public Input←'' ⍝ input element to hold datepicker

    ∇ Make0
      :Access public
      :Implements constructor
      JQueryFn←'datepicker'
    ∇

    ∇ Make1 pars
      :Access public
      :If 0 2∊⍨10|⎕DR pars
        Input←pars
        pars←'#',pars
      :EndIf
      pars←(⊂'datepicker'),eis pars
      :Implements constructor :base pars
    ∇

    ∇ r←Render
      :Access public
      r←''
      :If ~0∊⍴Input
        r,←Input #.HTMLInput.Edit'' 20
      :EndIf
      r,←⎕BASE.Render
    ∇


  :EndClass