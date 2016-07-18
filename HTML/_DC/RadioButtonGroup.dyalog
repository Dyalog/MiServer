:class RadioButtonGroup : #._DC.Table
⍝ Description:: Dyalog Radio Button Group widget
⍝ Constructor:: [{Values | ;Labels Values} [SelectedIndex [LabelPos [Horizontal]]]]
⍝ Values           - a vector of values for the radio buttons (Labels will be set to the same as Values)
⍝ ;Labels Values   - a matrix of [;1] labels [;2] values
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

⍝∇:require =\Table.dyalog

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
      :If 2=≡args
      :AndIf ∧/isString¨args
          args←,⊂args
      :EndIf
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

    ∇ r←Render;n;inps;tmpname;tmpid;Name
      :Access public
      Name←UNDEF
      ⍝ for input element widgets, this will set the name to the id if not already set
      ⍝ or the id to the name if not already set
      :If (⊂id)∊UNDEF''
          SetId
      :EndIf
      Name←id
      r←''
      (Labels Values)←Labels{0∊⍴⍵:⍺ ⍺ ⋄ 0∊⍴⍺:⍵ ⍵ ⋄ ⍺ ⍵}Values
      :If ~0∊n←⍴Values
          :If (,Horizontal)≡,1 ⍝ horizontal layout
              inps←Values{⎕NEW #._DC.Input('radio'⍺ ⍵ LabelPos)}¨Labels
              inps.name←⊂Name
              inps.id←(⊂Name,'_'),¨⍕¨⍳n
              :If ⍬≢SelectedIndex ⋄ inps[SelectedIndex].Attrs[⊂'checked']←⊂'checked' ⋄ :EndIf
              Data←(1,⍴inps)⍴inps
          :Else ⍝ vertical layout
              inps←⎕NEW¨n⍴#._html.input
              inps.value←Values
              inps.(name type)←(⊂Name'radio')
              inps.id←(⊂Name,'_'),¨⍕¨⍳n
              :If ⍬≢SelectedIndex ⋄ inps[SelectedIndex].Attrs[⊂'checked']←⊂'checked' ⋄ :EndIf
              Data←Labels,⍪inps
              :If LabelPos≡'left'
                  CellAttr←'style=text-align:right;' ''
              :Else
                  Data←⌽Data
              :EndIf
          :EndIf
          (tmpname tmpid)←Name id
          id←Name,'_container'
          Name←UNDEF
          :If ~0∊⍴⎕THIS.Handlers
              ⎕THIS.Handlers.Selector←⊂1↓∊',#'∘,¨inps.id
          :EndIf
          Name←UNDEF
          r←⎕BASE.Render
          (Name id)←tmpname tmpid
      :EndIf
    ∇
:EndClass
