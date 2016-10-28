:class ejSpreadsheet : #._SF._ejWidget
    :Field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejSpreadsheet.html'
    :Field public shared readonly ApiLevel←3
    :Field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejSpreadsheet.html'
    :Field public shared readonly IntEvt← 'actionBegin' 'actionComplete' 'autoFillBegin' 'autoFillComplete' 'beforeBatchSave' 'beforeCellFormat' 'beforeCellSelect' 'beforeDrop' 'beforeOpen' 'beforePanelOpen' 'cellClick' 'cellEdit' 'cellFormatting' 'cellHover' 'cellSave' 'contextMenuClick' 'drag' 'dragStart' 'drop' 'editRangeBegin' 'editRangeComplete' 'load' 'loadComplete' 'menuClick' 'openFailure' 'pagerClick' 'ribbonClick' 'seriesRendering' 'tabClick' 'tabSelect'

    :Field Public Sheets←⍬


    ∇ make
      :Access public
      JQueryFn←Uses←'ejSpreadsheet'
      :Implements Constructor
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejSpreadsheet'
      :Implements Constructor
      InternalEvents←IntEvt
      :If 2=⍴⍴args ⋄ Sheets,←⊂args ⋄ :EndIf
    ∇

    ∇ r←Render;fields;src;rows;cols;coldefs;colfields;i
      :Access public
      SetId
      r←''
      sheets←⍬
      :If ~0∊⍴Sheets
          :For sheet :In Sheets
              sheets,←formatSheet sheet
          :EndFor
          src←id,'_sheets'
          'sheets'Set'⍎',src
          r,←'script'#.HtmlUtils.Enclose src #._JSS.JSData sheets
      :EndIf
      r,←⎕BASE.Render
    ∇

    formatSheet←{z←⎕NS'' ⋄ z.rows←{z←⎕NS'' ⋄ z.cells←{z←⎕NS'' ⋄ z.value←⍵ ⋄ z}¨⍵ ⋄ z}¨↓⍵ ⋄ z}
:EndClass
