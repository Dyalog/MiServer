:class InputGrid : #._html.table

    :field public Border←0
    :field public Labels←''
    :field public Inputs←''
    :field public Headings←''
    :field public LabelPosition←'left' ⍝ valid values are 'left' 'right'
    :field public Horizontal←0 ⍝ default is vertical

    ∇ make
      :Access public
      :Implements constructor :base
    ∇

    ∇ make1 args;data;sel
      :Access public
      :Implements constructor
      args←eis args
      :Select ⊃⍴args
      :Case 1
          :Select ⊃⍴⍴args←⊃args
          :Case 1
              Labels←Values←data
          :Case 2
              (Labels Values)←↓[1]data
          :EndSelect
      :Case 2 ⍝ Labels Inputs
          (Labels Inputs)←args
      :EndSelect
    ∇

    ∇ html←Render;cells;rows
      :Access public
      cells←{⎕NEW #._html.td(⍵)}¨renderIt¨(,Labels),[1.1],Inputs
      cells[;1].style←⊂'text-align:right'
      cells←(⍉⍣Horizontal)cells
      rows←⎕NEW¨(⊃⍴cells)⍴#._html.tr
      rows.Add↓cells
      Content←rows.Render
      Set'border'(⍕Border)
      html←⎕BASE.Render
    ∇
:endclass