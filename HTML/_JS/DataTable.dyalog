:Class DataTable : #._JQ._jqWidget
⍝ Description:: Enhanced HTML table using DataTables from https://www.datatables.net/
⍝ Constructor:: [Data [CellAttr [HeaderRows [HeaderAttr [MakeCellIds [MakeRowIds]]]]]
⍝               Constructor arguments are identical to those for #._DC.Table
⍝
⍝ Public Fields::
⍝ Data        - matrix of data to display in the table
⍝ CellAttr    - Cell Attributes
⍝ HeaderRows  - # of header rows
⍝ HeaderAttr  - Header attributes
⍝ MakeCellIds - 1 to generate IDs      <td id="tableId_r2c3">
⍝ MakeRowIds  - 1 to generate Row IDs  <tr id="tableId_row2">

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
    ∇

    ∇ Make1 args
      :Access public
      JQueryFn←Uses←'DataTable'
      :Implements Constructor
      :If 2=⍴⍴args ⋄ args←,⊂args ⋄ :EndIf
      Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds←args defaultArgs Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds
    ∇

    ∇ html←Render;tab
      :Access public
      SetId
      Selector←'#',id
      :If 'true'≡⍕GetOption'searchHighlight'
          Use'jquery.Highlight'
          Use'⍎/DataTables/extras/searchHighlight/DataTables.searchHighlight.min.js'
          Use'⍕/DataTables/extras/searchHighlight/DataTables.searchHighlight.css'
      :EndIf
      (tab←⎕NEW #._DC.Table(Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds)).id←id
      html←(tab.Render),⎕BASE.Render
     
     
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