 msg←Test dummy;First

 First←{('CssSelector'Find'g path:first-child').GetAttribute,⊂⍵}

 ⍝ Test for chart title
 :If 0∊⍴msg←'mychart_svg_ChartTitle'WaitFor'Workspace Object Sizes' 'Chart title not found'

 ⍝ Test for correct first pie slice
 :AndIf 0∊⍴msg←'First pie slice not found'⌿⍨'mychart_svg_Series0_Point0'≢First'id'

 ⍝ Test that the first slice can be removed
     Click'mychart_svg_LegendItemShape0'
     msg←'First slice did not disappear'/⍨'mychart_svg_Series0_Point1'≢First'id'
 :EndIf
