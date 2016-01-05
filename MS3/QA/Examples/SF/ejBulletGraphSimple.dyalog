 msg←Test dummy;comp;tooltip
 comp←Find'output_svg_ComparativeMeasure_0'
 Selenium.MoveToElement comp
 tooltip←'ClassName'Selenium.Find'tooltipDiv'
 msg←'Values not found'/⍨'Current : 8.9Target : 7.6'≢tooltip.Text~⎕UCS 13 10