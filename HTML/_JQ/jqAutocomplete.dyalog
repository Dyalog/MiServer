  :class jqAutocomplete : #._JQ._jqUIWidget

    :field public Terms←''

    ∇ Make0
      :Access public
      :Implements constructor
      JQueryFn←'autocomplete'
    ∇

    ∇ Make1 pars
      :Access public
      pars←(⊂'autocomplete'),eis pars
      :Implements constructor :base pars
    ∇

    ∇ r←Render;t;opt
      :Access public
      :If ~0∊⍴Terms
        t←#.JSON.toJQueryParameters'source'Terms
        :If 0∊⍴Options ⋄ opt←t
        :ElseIf 2>|≡Options
          :If '{}'={(1↑⍵),¯1↑⍵}Options ⋄ opt←(¯1↓Options),',',1↓t
          :Else ⋄ opt←'{',Options,',',1↓t
          :EndIf
        :Else ⋄ opt←(¯1↓#.JSON.toJQueryParameters Options),',',1↓t
        :EndIf
        Options←opt
      :EndIf
      r←⎕BASE.Render
    ∇
  :EndClass