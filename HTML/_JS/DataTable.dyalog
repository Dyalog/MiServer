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

    :field public Plugins←''     ⍝ comma delimited list of "official" plugins to use
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
   
      :If _true≡GetOption'mark' 
       Use'DataTable_mark' 
       SetUse
      :EndIf
      opts←Options
      JavaScript,←RenderPlugins
      Options←opts
      Container.(Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds)←(Data CellAttr HeaderRows HeaderAttr MakeCellIds MakeRowIds)
      html←⎕BASE.Render
     
    ∇

    ∇ js←RenderPlugins;plugin
    ⍝ might also update Options
      js←''
      :For plugin :In ','#.Utils.penclose Plugins
          :Select plugin
          :Case 'yadcf'
              js,←yadcfRender
              Options.⎕EX'yadcf'
          :EndSelect
      :EndFor
    ∇


    :section yadcf Plugin
    ∇ js←yadcfRender;flt
      js←''
      :If 0<Options.⎕NC'yadcf.Filters'
      :AndIf 0<⍴Options.yadcf.Filters
          Uses←'DataTable_yadcf'
          flt←#.JSON.fromAPL Options.yadcf.Filters
          :If ∨/'"chosen"'⍷flt ⋄ Use'chosen' ⋄ :EndIf     ⍝ load Chosen-Plugin for yadcf-Filters
          js←';yadcf.init($("#',id,'").DataTable(),',flt,');'
      :EndIf
    ∇
    :endsection

:EndClass
