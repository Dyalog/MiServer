:Class StackPanelAdvanced : MiPageSample
⍝ Control:: _DC.StackPanel
⍝ Description:: Nested StackPanels provide flexible layout control.

    rect←{r⊣(r←New _.div).style←2↓∊'; height: ' 'px; width: ' 'px; background-color:',⍪⍕¨⍵}
    ⍝ Create a rectangle ⍵[1] high × ⍵[2] wide with colour ⍵[3]

    addstyle←{⍺.style,←'; ',⍵} ⍝ Add style ⍵ to control ⍵

    ∇ Compose;blue;green;red
      :Access Public
     
      intro←'Nested StackPanels combined with setting style for the individual items '
      intro,←'provide a very flexible way to manage page layout.'
      Add _.p intro
     
      intro←'Below, a horizontal stackpanel with a light grey background contains three '
      intro,←'vertical stackpanels, each containing a varying number of divs which have been '
      intro,←'styled to have slightly different sizes and colours.'
      Add _.p intro
     
      intro←'Some divs have p elements containing text, with different padding and margins defined.'
      Add _.p intro
     
      ⍝ Three RED rectangles in a vertical StackPanel with text in the 2nd one
      rects←rect¨(20 200 '#922')(30 250 '#944')(55 175 '#922')
      rects[2]addstyle'padding: 10px;'
      rects[2].Add _.p'2nd red div<br/>padding 10px'
      (red←'red'New _.StackPanel rects).style←'background-color: #C99;'
     
      ⍝ Two GREEN rectangles with 2 lines of text in the 1st one
      rects←rect¨(40 100 '#494')(105 180 '#696')
      rects[1]addstyle'margin: 5px;'
      rects[1].Add _.p'1st green div<br/>margins 5px'
      (green←'green'New _.StackPanel rects).style←'background-color: #9C9;'
     
      ⍝ Four BLUE rectangles with text in the 3rd one
      rects←rect¨(30 180 '#669')(45 100 '#449')(25 120 '#669')(55 100 '#449')
      rects[3].Add _.p'3rd blue<br/>no padding'
      (blue←'blue'New _.StackPanel rects).style←'background-color: #99C;'
     
      ⍝ Put them in an "outer" Horizontal grey StackPanel
      (outer←'outer'Add _.StackPanel(red green blue)).Horizontal←1
      outer.style←'background-color: #AAA; height: 200px;'
    ∇

:EndClass