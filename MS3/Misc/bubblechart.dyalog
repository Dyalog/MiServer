:Class bubblechart : MiPageTemplate

    ∇ Render;bc
      :Access public
      Add _.h2'ejChart (type:bubble)'
      bc←'bc'Add _.ejChart
     
      'primaryXAxis.title.text'bc.Option'US Dollars'
      'primaryXAxis.range.min'bc.Option 3000
      'primaryXAxis.range.max'bc.Option 10000
      'primaryXAxis.range.interval'bc.Option 500
     
      'primaryYAxis.title.text'bc.Option'% of GDP'
      'primaryYAxis.range.min'bc.Option 0
      'primaryYAxis.range.max'bc.Option 20
      'primaryYAxis.range.interval'bc.Option 2
     
      'load'bc.Option'loadTheme'
      'canResize'bc.Option _true
      'title.text'bc.Option'Per Capita Health Care Spending'
      'size.height'bc.Option'600'
      'legend.visible'bc.Option _false
     
      'series[1].points'bc.Option GetCIAData
      'series[1].enableAnimation'bc.Option _true
      'series[1].tooltip.visible'bc.Option _true
      'series[1].tooltip.format'bc.Option'#point.text#<br/>USD : $#point.x#<br/>%GDP : #point.y#%<br/>Population : #point.size#'
      'series[1].type'bc.Option'bubble'
    ∇

    ∇ r←GetCIAData;stats;data
      :Access public shared
      ⍝ [;1] country [;2] % GDP [;3] population [;4] GDP [;5] $/capita
      stats←(20↑1 #.Files.FREAD _Request.Server.Config.AppRoot,'Data/stats.DCF')[;1 2 3 5]
      stats[;4]←⌊0.5+stats[;4]
      r←'text' 'y' 'size' 'x' 'fill'#.JSON.fromTable stats,(1↑⍴stats)⍴'Navy' 'Coral' 'Crimson' 'Red' 'Fuchsia' 'Purple' 'OrangeRed'
    ∇

:EndClass