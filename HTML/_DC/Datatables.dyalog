:Class Datatables : #._DC.Table
⍝∇:require =\Table.dyalog
⍝ Description:: Enriched html table - with JS providing additional functionality
⍝ Constructor:: [Data [CellAttr [HeaderRows [HeaderAttr [MakeCellIds [MakeRowIds]]]]]  same as for a regular Table-Object.
⍝               All Datatable-specifics handled through Options and additional methods.
⍝
⍝ Public Fields::
⍝ Data        - matrix of data to display in the table
⍝ CellAttr    - Cell Attributes 
⍝ HeaderRows  - # of header rows
⍝ HeaderAttr  - Header attributes
⍝ MakeCellIds - 1 to generate IDs      <td id="tableId_r2c3">
⍝ MakeRowIds  - 1 to generate Row IDs  <tr id="tableId_row2">

    :field public Data←0 0⍴⊂''
    :field public Options←''

    ∇ Make0
      :Access public
      :Implements constructor
      Options←⎕ns''
    ∇

    ∇ Make1 data
      :Access public
      Options←⎕ns''
      :Implements Constructor    :Base data
    ∇

    ∇ html←Render;data;atts;tda;tha;hdrrows;cellids;rowids;rows;x;head;body;table;thead;tbody
      :Access public                                 
      html←⎕BASE.Render
      opts←''
      :If 0<1↑⍴Options.⎕NL 2
          opts←0(7160⌶)Options
      :EndIf
      html,←'<script type="text/javascript">$(document).ready(function() { $("#',id,'").DataTable(',opts,'); } );</script>'
      ⍝ Uses←'DataTables' 
      ⍝not working as intended, BPB looking at it, meanwhile use old fix:
      'DataTables'{6::⍺ ∇ 1↓⍵ ⋄ 0<⍴⍵:(1⊃⍵).Use ⍺}⎕RSI
      
      ⍝***** the following should be optional!
      ⍝
      ⍝ only applied if Options.searchHighlight=#.JSON.true
      'DataTables_searchHighlight'{6::⍺ ∇ 1↓⍵ ⋄ 0<⍴⍵:(1⊃⍵).Use ⍺}⎕RSI
      ⍝ only needed when Options.sDom contains 'W'
      '⍎/DataTables/extras/ColumnFilterWidgets/media/js/ColumnFilterWidgets.js'{6::⍺ ∇ 1↓⍵ ⋄ 0<⍴⍵:(1⊃⍵).Use ⍺}⎕RSI
      '⍕/DataTables/extras/ColumnFilterWidgets/media/css/ColumnFilterWidgets.css'{6::⍺ ∇ 1↓⍵ ⋄ 0<⍴⍵:(1⊃⍵).Use ⍺}⎕RSI
      
    ∇

:EndClass