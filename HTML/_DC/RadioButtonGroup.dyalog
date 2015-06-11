:class RadioButtonGroup
    :field public name←''
    :field public Labels←⍬
    :field public Values←⍬
    :field public SelectedIndex←⍬
    :field public LabelsOn←'right'

    ∇ make
      :Access public
      :Implements constructor
    ∇

    ∇ make1 args;data;sel
      :Access public
      :Implements constructor
      args←eis args
      name data sel←3↑args,(⍴args)↓'rbg'(0 2⍴⊂'')⍬
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

    ∇ html←Render;inps
      :Access public
      inps←⎕NEW¨(⍴Values)⍴#._html.input
      inps.(type name)←⊂'radio'name
      inps.value←Values
      :If ⍬≢SelectedIndex ⋄ inps[SelectedIndex].Attrs[⊂'checked']←⊂'checked' ⋄ :EndIf
      html←∊((LabelsOn≡'right')⌽Labels,[1.1]inps.Render),⊂'<br/>'
    ∇
:EndClass