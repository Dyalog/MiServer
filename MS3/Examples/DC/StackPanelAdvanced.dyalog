:Class StackPanelAdvanced : MiPageSample

    rect←{r⊣(r←New _.div).style←2↓∊'; height: ' 'px; width: ' 'px; background-color:',⍪⍕¨⍵}
    addstyle←{⍺.style,←'; ',⍵}

    ∇ Compose;blue;green;red
      :Access public
     
      intro←'Nested StackPanels combined with setting style for the individual items '
      intro,←'provide a very flexible way to manage page layout.<br/><br/>'
      intro,←'Below, a horizontal stackpanel with a light grey background contains three '
      intro,←'vertical stackpanels, each containing a varying number of divs which have been '
      intro,←'styled to have slightly different sizes and colours.<br/><br/>'
      intro,←'Some divs have p elements containing text, with different padding and margins defined.'
     
      Add _.title'_DC.StackPanel - Simple Example '
      Add _.h2'_DC.StackPanel - Layout Management'
      Add _.p intro
     
      rects←rect¨(20 200 '#922')(30 250 '#944')(55 175 '#922')
      rects[2]addstyle'padding: 10px;'
      rects[2].Add _.p'2nd red div<br/>padding 10px'
      (red←New _.StackPanel rects).style←'background-color: #C99;'
      rects←rect¨(40 100 '#494')(105 180 '#696')
      rects[1]addstyle'margin: 5px;'
      rects[1].Add _.p'1st green div<br/>margins 5px'
      rects,←(New _.div)
      (green←New _.StackPanel rects).style←'background-color: #9C9;'
      rects←rect¨(30 180 '#669')(45 100 '#449')(25 120 '#669')(55 100 '#449')
      rects[3].Add _.p'3rd blue<br/>no padding'
      (blue←New _.StackPanel rects).style←'background-color: #99C;'
     
      (outer←Add _.StackPanel(red green blue)).Horizontal←1
      outer.style←'background-color: #AAA; height: 200px;'
    ∇

:EndClass