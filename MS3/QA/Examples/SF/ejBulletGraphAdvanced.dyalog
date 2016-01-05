 msg←Test dummy;comp;tooltip;sums;i
 sums←0 0
 :For i :In ¯1+⍳4
     comp←Find'output_svg_FeatureMeasure_',⍕i
     Selenium.MoveToElement comp
     sums+←⊃(//)⎕VFI{b←~⍵∊⎕UCS 13 10 ⋄ b\b/⍵}('ClassName'Selenium.Find'tooltipDiv').Text
 :EndFor
 msg←'wrong tooltip values'/⍨≠/sums