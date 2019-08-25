:Class DataTable : #._JQ._jqWidget
⍝ Description:: Enhanced searchable and reorderable HTML table
⍝ Constructor:: [data [cellAttr [headerRows [headerAttr [makeCellIds [makeRowIds]]]]]
⍝ Note that constructor arguments are identical to those for Table
⍝ data           - matrix of data to display in the table
⍝ cellAttr       - Cell Attributes
⍝ headerRows     - # of header rows
⍝ headerAttr     - Header attributes
⍝ makeCellIds    - 1 to generate IDs      <td id="tableId_r2c3">
⍝ makeRowIds     - 1 to generate Row IDs  <tr id="tableId_row2">
⍝ Public Fields::
⍝ Data           - matrix of data to display in the table
⍝ CellAttr       - Cell Attributes
⍝ HeaderRows     - # of header rows
⍝ HeaderAttr     - Header attributes
⍝ MakeCellIds    - 1 to generate IDs      <td id="tableId_r2c3">
⍝ MakeRowIds     - 1 to generate Row IDs  <tr id="tableId_row2">
⍝                  Warning: this ids are generated, but if you need them in order to provide
⍝                  meaningful tools for interaction with the table, it is recommended
⍝                  to use DataTable's features instead which may be more useful!
⍝ Width          - (string) width of the table
⍝ InitFilterWith - initalize "Search"-field with this string
⍝ FocusFilter    - put initial focus on Filter-Control (boolean, default=0)
⍝ Bootstrap      - integer (use Boostrap-styling. 0=no, 1 or 4=BS4, 3=BS3)
⍝ PlugIns        - comma delimited list of "official" plugins to use
⍝
⍝  currently supported plugins are:
⍝    yadcf (yet another datatable column filter) - needs to be explicitely referenced
⍝    mark (highlight search results) - setting option "mark" to true is sufficient, does not need to be specified in "Plugin" then
⍝    responsive (responsive layout) - setting option "responsive" to true is sufficient
⍝    buttons -provides options to copy data to Excel, print and toggle columns
⍝    NB: this mechanism currently supports a subset of Datatable's plugins/extensions.
⍝        Please let us know (miserver@dyalog.com) if your favourite Plugin is missing!

    :Field public shared readonly DocBase←'https://www.datatables.net/'
    :field public Data←0 0⍴⊂''
    :field public CellAttr←''
    :field public HeaderRows←1
    :field public HeaderAttr←''
    :field public MakeCellIds←0
    :field public MakeRowIds←0
    :field public Width←''
    :field public InitFilterWith←''
    :field public Plugins←''
    :field public Bootstrap←0
    :field public FocusFilter←0


    :field private JSON_Data←''  ⍝ supporting JSON-Data transparently ("Data" can be JSON)


    ∇ Make0
      :Access public
      JQueryFn←'DataTable'
      :Implements constructor
      Container←⎕NEW #._DC.Table
      ContainerTag←'table'
    ∇

    ∇ Make1 args
      :Access public
      JQueryFn←'DataTable'
      :Implements Constructor
      :If 2=⍴⍴args ⋄ args←,⊂args ⋄ :EndIf
      Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds←args defaultArgs Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds
      Container←⎕NEW #._DC.Table
      ContainerTag←'table'
    ∇

    ∇ html←Render;tab;btn
      :Access public
      :If 2≠⍴⍴Data
      :AndIf #.HtmlElement.isChar Data
          JSON_Data←Data ⋄ Data←0 0⍴0
      :EndIf
      :If 0=≢GetOption'initComplete'
      :AndIf FocusFilter
          SetId
          'initComplete'Set⊂'function(){var table = $("#',id,'").DataTable();$("div.dataTables_filter input", table.table().container()).focus();}'
      :EndIf
      :Select Bootstrap
      :Case 0
          Use'DataTables'
          Use'⍕/DataTables/css/jquery.dataTables.min.css'
      :CaseList 1 4
          Use'DataTables'
          Use'⍎/DataTables/js/dataTables.bootstrap4.min.js'
          Use'⍕/DataTables/css/dataTables.bootstrap4.min.css'
      :Case 3
          Use'DataTables'
          Use'⍎/DataTables/js/dataTables.bootstrap.min.js'
          Use'⍕/DataTables/css/jquery.dataTables.bootstrap.min.css'
      :EndSelect
     
      Plugins,←(_true≡GetOption'responsive')/',responsive'
      Plugins,←(_true≡GetOption'mark')/',mark'
      Plugins,←(0<≢GetOption'yadcf')/',yadcf'
     
      :If 0<≢∊btn←GetOption'buttons'
          :If 326=⎕DR btn
          :AndIf 0<≢∊{0::'' ⋄ ⍵.extend}btn
              Plugins,←∊(⊂',buttons.'),¨⊆btn.extend
          :ElseIf 2=⎕NC'btn'
              Plugins,←∊(⊂',buttons.'),¨⊆btn
              'buttons'Set,⊂∊btn ⍝ ensure it is nested
          :EndIf
      :EndIf
      :If 0<≢InitFilterWith
          'search.search'Set InitFilterWith
      :EndIf
     
      opts←Options
      JavaScript,←RenderPlugins
      Options←opts
      :If 0<⍴JSON_Data ⋄ 'data'Set⊂JSON_Data ⋄ :EndIf
      Container.(Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds)←(Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds)
      :If 0<≢Width
          'width'Container.Set Width
      :EndIf
      SetUse
      html←⎕BASE.Render
    ∇

    ∇ js←RenderPlugins;plugin
    ⍝ might also update Options
      js←''
      ((Plugins='.')/Plugins)←','  ⍝ expand "buttons.colvis" to "buttons,colvis" etc.
     
      :For plugin :In ∪','#.Utils.penclose Plugins
          :Select plugin
          :Case 'yadcf'
              js,←yadcfRender
              Options.⎕EX'yadcf'
          :Case 'mark'
              Use'⍎/DataTables/extras/mark-8.11.0/jquery.mark.min.js'
              Use'⍎/DataTables/extras/mark-8.11.0/datatables.mark.min.js'
              Use'⍕/DataTables/extras/mark-8.11.0/datatables.mark.min.css'
              Options.mark←_true
          :Case 'responsive'
              renderPluginResponsive  ⍝ does not return result, only Uses stuff
              Options.responsive←_true
          :Case 'buttons'
              renderPluginButtons
          :Case 'colvis'
              Use'⍎/DataTables/extras/Buttons-1.5.6/js/buttons.colVis.min.js'
          :Case 'excelHtml5'
              Use'⍎/DataTables/extras/Buttons-1.5.6/js/buttons.html5.min.js'
              Use'⍎/DataTables/extras/JSZip-2.5.0/jszip.min.js'
          :CaseList 'excel' 'copy' 'csv'
              Use'⍎/DataTables/extras/Buttons-1.5.6/js/buttons.flash.min.js'
              Use'⍎/DataTables/extras/Buttons-1.5.6/js/buttons.html5.min.js'
              Use'⍎/DataTables/extras/Buttons-1.5.6/3d-party/jszip3.1.3/jszip.min.js'
          :Case 'print'
              Use'⍎/DataTables/extras/Buttons-1.5.6/js/buttons.print.min.js'
          :CaseList 'pdf' 'pdfHtml5' 'pdfFlash'
              Use'⍎/DataTables/extras/Buttons-1.5.6/js/buttons.flash.min.js'
              Use'⍎/DataTables/extras/Buttons-1.5.6/js/buttons.html5.min.js'
              Use'⍎/DataTables/extras/Buttons-1.5.6/3d-party/pdfmake0.1.36/pdfmake.min.js'
              Use'⍎/DataTables/extras/Buttons-1.5.6/3d-party/pdfmake0.1.36/vfs_fonts.js'
              Use'⍎/DataTables/extras/Buttons-1.5.6/js/buttons.html5.min.js'
          :Case 'pageLength'
      ⍝ does not need anything more than just the plain buttons
          :Else
              'Unknown plugin: ""',plugin,'"'
          :EndSelect
      :EndFor
      :If ∨/∊('pdf' 'copy' 'excel' 'csv')⍷¨⊂Plugins
          js,←';$.fn.dataTable.Buttons.swfPath="../../swf/flashExport.swf";'
      :EndIf
    ∇


    :section render Plugins
    ∇ js←yadcfRender;flt
      js←''
      ⍝ this is done intentionally outside the IF-condition, so that just setting 'yadcf'∊ Plugin and not providing options will still load the resources
      ⍝ (useful when calling yadcf in subsequent AJAX etc.!)
      Use'⍕/DataTables/extras/yadcf-0.9.3/jquery.dataTables.yadcf.css'
      Use'⍎/DataTables/extras/yadcf-0.9.3/jquery.dataTables.yadcf.js'
      Use'JQueryUI'
      :If 0<Options.⎕NC'yadcf.Filters'
      :AndIf ×≢Options.yadcf.Filters
          SetUse
          flt←#.JSON.fromAPL Options.yadcf.Filters
          :If ∨/'"chosen"'⍷flt ⋄ Use'chosen' ⋄ :EndIf     ⍝ load Chosen-Plugin for yadcf-Filters
          js←';yadcf.init($("#',id,'").DataTable(),',flt,');'
      :EndIf
    ∇

    ∇ renderPluginResponsive
      :Select Bootstrap
      :Case 0
          Use'⍕/DataTables/extras/Responsive-2.2.2/css/responsive.dataTables.min.css'
          Use'⍎/DataTables/extras/Responsive-2.2.2/js/dataTables.responsive.min.js'
      :CaseList 1 4
          Use'⍕/DataTables/extras/Responsive-2.2.2/css/responsive.bootstrap4.min.css'
          Use'⍎/DataTables/extras/Responsive-2.2.2/js/dataTables.responsive.min.js'
          Use'⍎/DataTables/extras/Responsive-2.2.2/js/responsive.bootstrap4.min.js'
      :Case 3
          Use'⍕/DataTables/extras/Responsive-2.2.2/css/responsive.bootstrap.min.css'
          Use'⍎/DataTables/extras/Responsive-2.2.2/js/dataTables.responsive.min.js'
          Use'⍎/DataTables/extras/Responsive-2.2.2/js/responsive.bootstrap.min.js'
      :EndSelect
    ∇

    ∇ renderPluginButtons
      :Select Bootstrap
      :Case 0
          Use'⍕/DataTables/extras/Buttons-1.5.6/css/buttons.dataTables.min.css'
          Use'⍎/DataTables/extras/Buttons-1.5.6/js/dataTables.buttons.min.js'
      :CaseList 1 4
          Use'⍕/DataTables/extras/Buttons-1.5.6/css/buttons.bootstrap4.min.css'
          Use'⍎/DataTables/extras/Buttons-1.5.6/js/dataTables.buttons.min.js'
          Use'⍎/DataTables/extras/Buttons-1.5.6/js/buttons.bootstrap4.min.js'
      :Case 3
          Use'⍕/DataTables/extras/Buttons-1.5.6/css/buttons.bootstrap.min.css'
          Use'⍎/DataTables/extras/Buttons-1.5.6/js/dataTables.buttons.min.js'
          Use'⍎/DataTables/extras/Buttons-1.5.6/js/buttons.bootstrap.min.js'
      :EndSelect
     
    ∇
    :endsection render Plugins

:EndClass
