:Class TableSimple : MiPageSample
⍝ Control::     _DC.Table
⍝ Description:: Display tabular data with a bit of styling

    :Include #.HTMLUtils ⍝ For ScriptFollows

    ∇ Compose;lmt;i10;data;myTable
      :Access public 
     
      Add _.style ScriptFollows
      ⍝ .myStyle table {
      ⍝     border-collapse: collapse;
      ⍝ }
      ⍝ .myStyle table, th, td {
      ⍝     border: 1px solid black;
      ⍝ }
      ⍝ .myStyle th, td {
      ⍝     width: 30px;
      ⍝     text-align: right;
      ⍝     padding: 2px;
      ⍝ }
      ⍝ .myStyle tr td: first-of-type {
      ⍝     font-weight: bold;
      ⍝ }
     
      Add _.h2'The Little Multiplication Table'
     
      lmt←∘.×⍨i10←⍳10
      data←(' ',i10)⍪i10,lmt
      myTable←'myTable .myStyle'Add _.Table data
      myTable.HeaderRows←1
    ∇

:EndClass


