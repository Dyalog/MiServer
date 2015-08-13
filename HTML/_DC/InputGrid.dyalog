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
      :If 2=⍴⍴args
          (Labels Inputs)←↓[1]args
      :Else
          args←eis args
          (Labels Inputs)←args
      :EndIf
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