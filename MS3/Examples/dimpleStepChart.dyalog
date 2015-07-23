:Class dimpleStepChart : MiPageSample

    :include #.HTMLUtils

    ∇ Compose
      :Access Public
      'chartContainer'Add _.div
      Add _.dimple ScriptFollows
⍝    var svg = dimple.newSvg("#chartContainer", 590, 400);
⍝    var myChart = new dimple.chart(svg);
⍝    myChart.data = [{"Period":1,"Factor":50},{"Period":4,"Factor":100},{"Period":9,"Factor":50}];
⍝    myChart.setBounds(60, 30, 505, 305);
⍝    var x = myChart.addCategoryAxis("x", "Period");
⍝    myChart.addMeasureAxis("y", "Factor");
⍝    var s = myChart.addSeries(null, dimple.plot.line);
⍝    s.interpolation = "step";
⍝    myChart.draw();
    ∇

:EndClass
