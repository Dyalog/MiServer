﻿:Class dimple7d : MiPageSample

    ∇ Compose;chart;text
      :Access public
      Use'dimple'
      Add _.h4'An example of what "dimple" can do'
     
      Add'Copied from '
      Add _.A'dimplejs.org' 'http://dimplejs.org/advanced_examples_viewer.html?id=advanced_animated_multiple_pie_bubbles'
     
      (chart←'chartContainer'New _.div).Add _.Script ScriptFollows
⍝    var svg = dimple.newSvg("#chartContainer", 590, 400);
⍝    d3.tsv("/Examples/Data/example_data.tsv", function (data) {
⍝      var myChart = new dimple.chart(svg, data);
⍝      myChart.setBounds(60, 30, 495, 330);
⍝
⍝      // Define all the axes
⍝      var xAxis = myChart.addMeasureAxis("x", "Distribution");
⍝      var yAxis = myChart.addMeasureAxis("y", "Price");
⍝      var segments = myChart.addMeasureAxis("p", "Unit Sales");
⍝      var size = myChart.addMeasureAxis("z", "Sales Value");
⍝      var ring = myChart.addSeries(["Price Tier", "Channel"], dimple.plot.pie);
⍝      var pie = myChart.addSeries(["Price Tier", "Owner"], dimple.plot.pie);
⍝
⍝      // Zoom in the axis bounds
⍝      xAxis.overrideMin = 40;
⍝      xAxis.overrideMax = 70;
⍝      yAxis.overrideMax = 150;
⍝
⍝      // Set the maximum radius for the bubbles
⍝      ring.radius = 75;
⍝      pie.radius = 75;
⍝
⍝      // Create fixed 10px ring with a 5px
⍝      // margin (negative sizes are calculated inwards)
⍝      ring.innerRadius = "-10px";
⍝      pie.outerRadius = "-15px";
⍝
⍝      // Draw averages for the pie and ring
⍝      ring.aggregate = dimple.aggregateMethod.avg;
⍝      pie.aggregate = dimple.aggregateMethod.avg;
⍝
⍝      // Animate by date
⍝      myChart.setStoryboard("Date");
⍝
⍝      myChart.draw();
⍝    });
     
      (text←New _.p ScriptFollows).style←'width: 200px'
⍝ "This demonstrates both combining pie and ring charts and using them with a storyboard
⍝ to display seven different dimensions.<br><br>REMEMBER: Just because you can, doesn't mean you should!"
     
      (Add _.StackPanel(chart text)).Horizontal←1
     
    ∇
:EndClass