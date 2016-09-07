:Class DataTable : #._JQ._jqWidget
⍝ Description:: Enhanced searchable and reorderable HTML table
⍝ Constructor:: [data [cellAttr [headerRows [headerAttr [makeCellIds [makeRowIds]]]]]
⍝ Note that constructor arguments are identical to those for Table
⍝ data        - matrix of data to display in the table
⍝ cellAttr    - Cell Attributes
⍝ headerRows  - # of header rows
⍝ headerAttr  - Header attributes
⍝ makeCellIds - 1 to generate IDs      <td id="tableId_r2c3">
⍝ makeRowIds  - 1 to generate Row IDs  <tr id="tableId_row2">
⍝ Public Fields::
⍝ Data        - matrix of data to display in the table
⍝ CellAttr    - Cell Attributes
⍝ HeaderRows  - # of header rows
⍝ HeaderAttr  - Header attributes
⍝ MakeCellIds - 1 to generate IDs      <td id="tableId_r2c3">
⍝ MakeRowIds  - 1 to generate Row IDs  <tr id="tableId_row2">

    :Field public shared readonly DocBase←'https://www.datatables.net/'
    :field public Data←0 0⍴⊂''
    :field public CellAttr←''
    :field public HeaderRows←1
    :field public HeaderAttr←''
    :field public MakeCellIds←0
    :field public MakeRowIds←0

    ∇ Make0
      :Access public
      JQueryFn←Uses←'DataTable'
      :Implements constructor
      Container←⎕NEW #._DC.Table
      ContainerTag←'table'
    ∇

    ∇ Make1 args
      :Access public
      JQueryFn←Uses←'DataTable'
      :Implements Constructor
      :If 2=⍴⍴args ⋄ args←,⊂args ⋄ :EndIf
      Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds←args defaultArgs Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds
      Container←⎕NEW #._DC.Table
      ContainerTag←'table'
    ∇

    ∇ html←Render;tab
      :Access public
      :If 'true'≡⍕GetOption'searchHighlight'
          Use'jquery.Highlight'
          Use'⍎/DataTables/extras/searchHighlight/DataTables.searchHighlight.min.js'
          Use'⍕/DataTables/extras/searchHighlight/DataTables.searchHighlight.css'
      :EndIf
      Container.(Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds)←(Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds)
      html←⎕BASE.Render
     
     
⍝ BPB - to be sorted out with Michael
⍝      ⍝***** the following should be optional!
⍝      ⍝
⍝      ⍝ only applied if Options.searchHighlight=#.JSON.true
⍝      'DataTables_searchHighlight'{6::⍺ ∇ 1↓⍵ ⋄ 0<⍴⍵:(1⊃⍵).Use ⍺}⎕RSI
⍝      ⍝ only needed when Options.sDom contains 'W'
⍝      '⍎/DataTables/extras/ColumnFilterWidgets/media/js/ColumnFilterWidgets.js'{6::⍺ ∇ 1↓⍵ ⋄ 0<⍴⍵:(1⊃⍵).Use ⍺}⎕RSI
⍝      '⍕/DataTables/extras/ColumnFilterWidgets/media/css/ColumnFilterWidgets.css'{6::⍺ ∇ 1↓⍵ ⋄ 0<⍴⍵:(1⊃⍵).Use ⍺}⎕RSI
     
    ∇

:EndClass
