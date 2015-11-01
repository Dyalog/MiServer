:class ejChart : #._SF._ejWidget

⍝ Description:: Syncfusion Chart widget
⍝ Constructor:: [data]
⍝ data    - matrix of data to plot [1;] is the column names [2-;] the data
⍝ Public Fields:: None
⍝ Public Methods:: 
⍝ Redraw (callback function) - redraw the chart
⍝ Notes:: 
⍝ ejChart can plot several series of data, all data for each series is stored in the series option setting

    :field public shared readonly DocBase←'http://docs.syncfusion.com/js/api/ejchart'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejChart.html'
    :field public shared readonly IntEvt← 'animationComplete' 'axesLabelRendering' 'axesLabelsInitialize' 'axesRangeCalculate' 'axesTitleRendering' 'chartAreaBoundsCalculate' 'create' 'destroy' 'displayTextRendering' 'legendBoundsCalculate' 'legendItemClick' 'legendItemMouseMove' 'legendItemRendering' 'load' 'pointRegionClick' 'pointRegionMouseMove' 'preRender' 'seriesRendering' 'symbolRendering' 'titleRendering' 'toolTipInitialize' 'trackAxisToolTip' 'trackToolTip'

    ∇ make
      :Access public
      JQueryFn←Uses←'ejChart'
      :Implements constructor
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejChart'
      :Implements constructor
      'series[1].points'Set #.JSON.fromTable args ⍝ set the first series' points
    ∇

    ∇ r←Render
      :Access public
      r←⎕BASE.Render
    ∇

    ∇ r←Redraw
      :Access public
      SetId ⋄ r←Execute'$("#',id,'").data("',JQueryFn,'").redraw();'
    ∇
:EndClass