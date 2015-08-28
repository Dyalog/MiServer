:class RadioButtonGroup : #._DC.Table
⍝ Description:: Dyalog Radio Button Group widget
⍝ Constructor:: [(Values | [;Labels Values]) [SelectedIndex [LabelPos [Horizontal]]]]
⍝ Values           - a vector of values for the radio buttons (Labels will be set to the same as Values)
⍝ [;Labels Values] - a matrix of [;1] labels [;2] values
⍝ SelectedIndex    - index of a pre-selected choice (⍬ is the default)
⍝ LabelPos         - label position relative to the radio button ('left' is the default)
⍝ Horizontal       - 0 if the labels/buttons are to be arranged in a vertical grid, 1 if horizontal
⍝ Public Fields::
⍝ Values           - a vector of values for the radio buttons (Labels will be set to the same as Values)
⍝ Labels           - a matrix of [;1] labels [;2] values
⍝ SelectedIndex    - index of a pre-selected choice (⍬ is the default)
⍝ LabelPos         - label position relative to the radio button ('left' is the default)
⍝ Horizontal       - 0 if the labels/buttons are to be arranged in a vertical grid, 1 if horizontal
⍝ Notes::
⍝ The underlying input elements all share the same name, and have ids of name,'_1', name,'_2', etc
⍝ The containing table has an id of name,'_container'
⍝ input cells are assigned a class of (id,'_input')

    :field public Labels←⍬
    :field public Values←⍬
    :field public SelectedIndex←⍬
    :field public LabelPos←'left'
    :field public Horizontal←0

    ∇ make
      :Access public
      :Implements constructor
    ∇

    ∇ make1 args;data;sel;pos;horz
      :Access public
      :Implements constructor
      (data SelectedIndex LabelPos Horizontal)←args defaultArgs ⍬ SelectedIndex LabelPos Horizontal
      :If ~0∊⍴data
          :Select ⊃⍴⍴data
          :Case 1
              Labels←Values←data
          :Case 2
              (Labels Values)←↓[1]data
          :EndSelect
      :EndIf
    ∇

    ∇ r←Render;n;inps;tmpname;tmpid
      :Access public
      SetInputName
      r←''
      (Labels Values)←Labels{0∊⍴⍵:⍺ ⍺ ⋄ 0∊⍴⍺:⍵ ⍵ ⋄ ⍺ ⍵}Values
      :If ~0∊n←⍴Values
          :If (,Horizontal)≡,1 ⍝ horizontal layout
              inps←Values{⎕NEW #._DC.Input('radio'⍺ ⍵ LabelPos)}¨Labels
              inps.name←⊂name
              inps.id←(⊂name,'_'),¨⍕¨⍳n
              :If ⍬≢SelectedIndex ⋄ inps[SelectedIndex].Attrs[⊂'checked']←⊂'checked' ⋄ :EndIf
              Data←(1,⍴inps)⍴inps
          :Else ⍝ vertical layout
              inps←⎕NEW¨n⍴#._html.input
              inps.(name type)←(⊂name'radio')
              inps.id←(⊂name,'_'),¨⍕¨⍳n
              :If ⍬≢SelectedIndex ⋄ inps[SelectedIndex].Attrs[⊂'checked']←⊂'checked' ⋄ :EndIf
              Data←Labels,⍪inps
              :If LabelPos≡'left'
                  CellAttr←'style=text-align:right;' ''
              :Else
                  Data←⌽Data
              :EndIf
          :EndIf
          (tmpname tmpid)←name id
          id←name,'_container'
          name←''
          r←⎕BASE.Render
          (name id)←tmpname tmpid
      :EndIf
    ∇
:EndClass