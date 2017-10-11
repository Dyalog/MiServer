 msg←Test dummy;comp;tooltip;sums;i;Nums
 Nums←{⊃(//)⎕VFI b\⍵/⍨b←~⍵∊⎕UCS 13 10}
 sums←0 0
 :For i :In ¯1+⍳4
     comp←Find'output_svg_FeatureMeasure_',⍕i
     MoveToElement comp
     tooltip←'ClassName'Find'tooltipDivoutput'
     sums+←Nums tooltip.Text
 :EndFor
 msg←'wrong tooltip values'/⍨≠/sums
