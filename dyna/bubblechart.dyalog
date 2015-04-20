:Class bubblechart : DyNApage

    ∇ Render;tc;stats
      :Access public
      Add h2'ejChart (type:bubble)'
      tc←Add _SF.ejChart'bc'
     
      'primaryXAxis.title.text'tc.Option'US Dollars'
      'primaryXAxis.range.min'tc.Option 3000
      'primaryXAxis.range.max'tc.Option 10000
      'primaryXAxis.range.interval'tc.Option 500
     
      'primaryYAxis.title.text'tc.Option'% of GDP'
      'primaryYAxis.range.min'tc.Option 0
      'primaryYAxis.range.max'tc.Option 20
      'primaryYAxis.range.interval'tc.Option 2
     
      'load'tc.Option'loadTheme'
      'canResize'tc.Option #.JSON.true
      'title.text'tc.Option'Per Capita Health Care Spending'
      'size.height'tc.Option'600'
      'legend.visible'tc.Option #.JSON.false
     
      'series[1].points'tc.Option GetCIAData
      'series[1].enableAnimation'tc.Option #.JSON.true
      'series[1].tooltip.visible'tc.Option #.JSON.true
      'series[1].tooltip.format'tc.Option'#point.text#<br/>USD : $#point.x#<br/>%GDP : #point.y#%<br/>Population : #point.size#'
      'series[1].type'tc.Option'bubble'
    ∇

    ∇ r←GetCIAData;stats;data
      :Access public shared
      ⍝ [;1] country [;2] % GDP [;3] population [;4] GDP [;5] $/capita
      stats←(20↑1 #.Files.FREAD _Request.Server.Config.AppRoot,'Data/stats.DCF')[;1 2 3 5]
      stats[;4]←⌊0.5+stats[;4]
      r←'text' 'y' 'size' 'x' 'fill'#.JSON.formatData stats,(1↑⍴stats)⍴'Navy' 'Coral' 'Crimson' 'Red' 'Fuchsia' 'Purple' 'OrangeRed'
    ∇

:EndClass