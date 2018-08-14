:class ejGrid : #._SF._ejWidget
    :Field public shared readonly DocBase←'https://help.syncfusion.com/js/grid/overview'
    :Field public shared readonly ApiLevel←3
    :Field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejGrid.html'
    :Field public shared readonly IntEvt←'actionBegin' 'actionComplete' 'actionFailure' 'batchAdd' 'batchDelete' 'beforeBatchAdd' 'beforeBatchDelete' 'beforeBatchSave' 'beginEdit' 'cellEdit' 'cellSave' 'cellSelected' 'cellSelecting' 'columnDrag' 'columnDragStart' 'columnDrop' 'columnSelected' 'columnSelecting' 'contextClick' 'contextOpen' 'create' 'dataBound' 'destroy' 'detailsCollapse' 'detailsDataBound' 'detailsExpand' 'endAdd' 'endDelete' 'endEdit' 'load' 'mergeCellInfo' 'queryCellInfo' 'recordClick' 'recordDoubleClick' 'resized' 'resizeEnd' 'resizeStart' 'rightClick' 'rowDataBound' 'rowSelected' 'rowSelecting' 'templateRefresh' 'toolBarClick'

    :Field Public Values←0 0⍴⊂''
    :Field Public Columns←⍬      ⍝ Vector of namespaces using JSON names

    :Field Public ColNames←⍬     ⍝ JSON: field
    :Field Public ColTitles←⍬    ⍝       headerText
    :Field Public CellWidths←⍬   ⍝       width
    :Field Public CellFormats←⍬  ⍝       format
    :Field Public CellAlign←⍬    ⍝       textAlign

    script←{⎕NEW #._DC.Script ⍵}

    ∇ make
      :Access public
      JQueryFn←Uses←'ejGrid'
      :Implements Constructor
      InternalEvents←IntEvt
    ∇

    ∇ makec args;x;values;cols;widths
      :Access public
      args←eis args
      JQueryFn←Uses←'ejGrid'
      :Implements Constructor
      InternalEvents←IntEvt
      (Values ColTitles CellWidths)←args defaultArgs(0 0⍴⍬)⍬ ⍬
      :If 0≠⍴ColTitles
          :If 326=⎕DR⊃ColTitles ⋄ Columns←ColTitles ⋄ ColTitles←⍬
          :Else ⋄ ColNames←ColTitles~¨' '
          :EndIf
      :EndIf
    ∇

    ∇ r←Render;fields;src;rows;cols;coldefs;colfields;i
      :Access public 
      SetId
      r←''
      (rows cols)←⍴Values
      :If 0=cols
          r←'[grid with zero columns]'
      :Else
          :If 0≠⍴Columns ⋄ coldefs←Columns ⋄ ColNames←Columns.field
          :Else ⍝ Put Columns together from individual properties
              coldefs←(cols,0)⍴⊂'' ⋄ colfields←⍬
              :If 0≠⍴ColNames ⋄ coldefs,←ColNames ⋄ colfields,←⊂'field' ⋄ :EndIf
              :If 0≠⍴ColTitles ⋄ coldefs,←ColTitles ⋄ colfields,←⊂'headerText' ⋄ :EndIf
              :If 0≠⍴,CellWidths ⋄ coldefs,←cols⍴CellWidths ⋄ colfields,←⊂'width' ⋄ :EndIf
              :If 0≠⍴CellFormats ⋄ coldefs,←CellFormats ⋄ colfields,←⊂'format' ⋄ :EndIf
              :If 0≠⍴CellAlign ⋄ coldefs,←CellAlign ⋄ colfields,←⊂'textAlign' ⋄ :EndIf
     
              coldefs←colfields #.JSON.fromTable coldefs
              :If 0≠⍴CellFormats ⋄ :AndIf 0≠⍴i←(0=⊃∘⍴¨CellFormats)/⍳⍴CellFormats
                  coldefs[i].⎕EX⊂'format' ⍝ Remove empty formats
              :EndIf
          :EndIf
          coldefs←#.JSON.fromAPL coldefs
     
          'columns'Set⊂,coldefs
     
          src←id,'_data'
          'dataSource'Set⊂,src
          r←(⎕NEW #._DC.Script('var ',src,' = ',#.JSON.fromAPL ColNames #.JSON.fromTable Values)).Render
      :EndIf
      r,←⎕BASE.Render
    ∇

    ∇ r←Refresh items;src;script;fields;ri;rI
      :Access public
      r←''
      items←eis items
      :If 0∊⍴src←GetOption'dataSource'
          r,←Selector Replace∊{'<li>',⍵,'</li>'}¨Items←items
          r,←Execute'$("',Selector,'").',JQueryFn,'({dataSource:',src,'});' ⍝ Do we really need this when 0∊⍴src?
      :Else
          :If (1=ri←⍴⍴items)∧(2=rI←⍴⍴Items)
          :AndIf 1=2⊃⍴Items ⋄ ri←⍴⍴items←⍪items ⋄ :EndIf
          :If 2∧.=ri,rI
          :AndIf (2⊃⍴items)=2⊃⍴Items
              ⍝src←('⍎'=⊃src)↓src            ⍝ We now use ⊂'string' to avoid quotes
              Items←(fields←Items[1;])⍪items
              r,←Selector Replace''
              script←';',src,' = ',#.JSON.fromAPL fields #.JSON.fromTable 1↓Items
              script,←';$("',Selector,'").',JQueryFn,'({dataSource:',src,'});'
              r,←Execute script
          :EndIf
      :EndIf
    ∇

    ∇ r←name getModel subsel;model
      ⍝ Passes the Syncfusion data model back as a variable called 'model' as input to a callback
      ⍝ Usage:     aButton.On 'click' 'onButtonClick' ('model' instance.getModel '')
      :Access Public
      SetId ⋄ model←'model',(0≠⍴subsel)/'.',subsel ⍝ "model" or "model.subsel"
      r←(name'eval'('JSON.stringify($("#',id,'").ejGrid("',model,'"))'))
    ∇
:EndClass
