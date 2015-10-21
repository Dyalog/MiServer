 msg←Test dummy

 ⍝ Test for chart title
 :If 0∊⍴msg←'mychart_svg_ChartTitle'WaitFor'Workspace Object Sizes' 'Chart title not found'

 ⍝ Test for first pie slice
 :AndIf 0∊⍴msg←'Pie slice not found'⌿⍨0≡Find'mychart_svg_Series0_Point0'

 ⍝ Test that the first slice was removed
     Click'mychart_svg_LegendItemShape0'
     msg←'Wrong first slice'/⍨'{Width=142, Height=154}'≢⍕('CssSelector'Find'g path:first-child').Size
 :EndIf
