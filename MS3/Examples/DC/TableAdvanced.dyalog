:Class TableAdvanced : MiPageSample
⍝ Control::     _DC.Table
⍝ Description:: Display tabular data with a bit of styling

    ∇ Compose;lmt;i10;data;myTable;aTable
      :Access public 
     
      Add _.h2'The Little Multiplication Table'
     
      lmt←∘.×⍨i10←⍳10           ⍝ Compute the table
      data←('×',i10)⍪i10,lmt    ⍝ Add row and column headings
      myTable←'myTable .myStyle'Add _.Table data ⍝ Give it class .myStyle
      myTable.HeaderRows←1      ⍝ Declare first row to be headers (<th> elements)
     
      Add _.h2'... With Default Formatting'
      (aTable←Add _.Table data).HeaderRows←1 ⍝ Add another table with the same data
     
      ⍝ And now describe how to style the .myStyle class
     
      Add _.(style ScriptFollows)
      ⍝ .myStyle {
      ⍝     border: 1px solid black;
      ⍝     border-collapse: collapse;
      ⍝ }
      ⍝ .myStyle td,
      ⍝ .myStyle th {
      ⍝     width: 30px;
      ⍝     text-align: right;
      ⍝     border: 1px solid black;
      ⍝     padding: 3px;
      ⍝     background-color: orange;
      ⍝ }
      ⍝ #myTable th,
      ⍝ #myTable td:first-of-type {
      ⍝     font-weight: bold;
      ⍝     background-color: gold;
      ⍝ }
     
    ∇

:EndClass


