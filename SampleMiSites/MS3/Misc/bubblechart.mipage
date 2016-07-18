:Class bubblechart : MiPageTemplate

    ∇ Render;bc
      :Access public
      Add _.h2'ejChart (type:bubble)'
      bc←'bc'Add _.ejChart
     
      'primaryXAxis.title.text'bc.Set'US Dollars'
      'primaryXAxis.range.min'bc.Set 3000
      'primaryXAxis.range.max'bc.Set 10000
      'primaryXAxis.range.interval'bc.Set 500
     
      'primaryYAxis.title.text'bc.Set'% of GDP'
      'primaryYAxis.range.min'bc.Set 0
      'primaryYAxis.range.max'bc.Set 20
      'primaryYAxis.range.interval'bc.Set 2
     
      'load'bc.Set'loadTheme'
      'canResize'bc.Set _true
      'title.text'bc.Set'Per Capita Health Care Spending'
      'size.height'bc.Set'600'
      'legend.visible'bc.Set _false
     
      'series[1].points'bc.Set GetCIAData
      'series[1].enableAnimation'bc.Set _true
      'series[1].tooltip.visible'bc.Set _true
      'series[1].tooltip.format'bc.Set'#point.text#<br/>USD : $#point.x#<br/>%GDP : #point.y#%<br/>Population : #point.size#'
      'series[1].type'bc.Set'bubble'
    ∇

    ∇ r←GetCIAData;stats;data
      :Access public shared
      ⍝ [;1] country [;2] % GDP [;3] population [;4] GDP [;5] $/capita
      stats←(20↑1 #.Files.FREAD _Request.Server.Config.AppRoot,'/Examples/Data/stats.DCF')[;1 2 3 5]
      stats[;4]←⌊0.5+stats[;4]
      r←'text' 'y' 'size' 'x' 'fill'#.JSON.fromTable stats,(1↑⍴stats)⍴'Navy' 'Coral' 'Crimson' 'Red' 'Fuchsia' 'Purple' 'OrangeRed'
    ∇

:EndClass