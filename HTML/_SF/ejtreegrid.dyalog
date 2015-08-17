:class ejTreeGrid : #._SF._ejWidget
    :Field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejGrid.html'
    :Field public shared readonly ApiLevel←3
    :Field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejTreeGrid.html'
    :Field public shared readonly IntEvt←'clearSelection' 'collapseAll' 'hideColumn' 'refresh' 'saveCell' 'search' 'showColumn' 'sortColumn'

    :Field Public Values←0 0⍴⊂''
    :Field Public Columns←⍬      ⍝ Vector of namespaces using JSON names
    :Field Public Levels←⍬       ⍝ Level of nesting

    :Field Public ColNames←⍬     ⍝ JSON: field
    :Field Public ColTitles←⍬    ⍝       headerText
    :Field Public CellWidths←⍬   ⍝       width
    :Field Public CellFormats←⍬  ⍝       format
    :Field Public CellAlign←⍬    ⍝       textAlign

    :Field Public width←500      ⍝ default width = 500px
    :Field Public height←⍬

    script←{⎕NEW #._DC.Script ⍵}

    ∇ make
      :Access public
      JQueryFn←Uses←'ejTreeGrid'
      :Implements Constructor
      InternalEvents←IntEvt
    ∇

    ∇ makec args;x;values;cols;widths
      :Access public
      args←eis args
      JQueryFn←Uses←'ejTreeGrid'
      :Implements Constructor
      InternalEvents←IntEvt
      (Values ColTitles Levels CellWidths)←args defaultArgs(0 0⍴⍬)⍬ ⍬ ⍬
      :If 0≠⍴ColTitles
          :If 326=⎕DR⊃ColTitles ⋄ Columns←ColTitles ⋄ ColTitles←⍬
          :Else ⋄ ColNames←ColTitles~¨' '
          :EndIf
      :EndIf
    ∇

    ∇ r←Render;fields;src;rows;cols;coldefs;colfields;i;lev
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
     
          :If ''≡GetOption'sizeSettings.width' ⋄ 'sizeSettings.width'Set⍕width :EndIf
          :If ''≡GetOption'sizeSettings.height' ⋄ :AndIf ~0∊⍴height ⋄ 'sizeSettings.height'Set⍕height ⋄ :EndIf
     
          'columns'Set'⍎',coldefs
          'childMapping'Set'subItems'
          'allowColumnResize'Set _true
          'enableResize'Set _true
          src←id,'_data'
          'dataSource'Set'⍎',src
          lev←1⌈(⊃⍴Values)↑Levels
          r←(⎕NEW #._DC.Script('var ',src,' = ',#.JSON.fromAPL lev #.JSON.nestObjects ColNames #.JSON.fromTable Values)).Render
      :EndIf
      r,←⎕BASE.Render
    ∇

:EndClass