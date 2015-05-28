    :class RadioButtonGroup
        :field public Labels←⍬
        :field public Values←⍬
        :field public SelectedIndex←⍬

        ∇ make args;data;sel
          :Access public
          :Implements constructor
          args←eis args
          data sel←2↑args,(⍴args)↓(0 2⍴⊂'')⍬
          :If ~0∊⍴data
              :Select ⊃⍴⍴data
              :Case 1
                  Labels←Values←data
              :Case 2
                  (Labels Values)←↓[1]data
              :EndSelect
          :EndIf
          SelectedIndex←sel
        ∇

        ∇ html←Render
          :Access public
         
        ∇
    :EndClass