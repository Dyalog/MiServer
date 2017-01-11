 msg←Test dummy;comp;tooltip
 comp←Find'output_svg_ComparativeMeasure_0'
 MoveToElement comp
 tooltip←'ClassName'Find'tooltipDivoutput'
 msg←'Values not found'/⍨'Current : 8.9Target : 7.6'≢tooltip.Text~⎕UCS 13 10
