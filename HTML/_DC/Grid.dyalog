:Class Grid : #._DC.Table
⍝ Description:: Grid - like _.Table but with borders - accepts matrix of data
⍝ Constructor:: [Data [CellAttr [HeaderRows [HeaderAttr [MakeCellIds [MakeRowIds]]]]]
⍝
⍝ Public Fields::
⍝ Data        - matrix of data to display in the table
⍝ CellAttr    - Cell Attributes
⍝ HeaderRows  - # of header rows
⍝ HeaderAttr  - Header attributes
⍝ MakeCellIds - 1 to generate IDs      <td id="tableId_r2c3">
⍝ MakeRowIds  - 1 to generate Row IDs  <tr id="tableId_row2">

⍝∇:require =/Table.dyalog

    ∇ Make0
      :Access public
      :Implements constructor
    ∇

    ∇ Make1 data
      :Access public
      :Implements constructor :base data
    ∇

    ∇ html←Render;sel;styles
      :Access public
      SetId
      sel←'#',id
      styles←(sel(('border-collapse' 'collapse')('border' '1px solid black')))((sel,' th')('border' '1px solid black'))((sel,' td')('border' '1px solid black'))
      html←(⎕NEW #._DC.Style styles).Render
      html,←⎕BASE.Render
    ∇

:EndClass
