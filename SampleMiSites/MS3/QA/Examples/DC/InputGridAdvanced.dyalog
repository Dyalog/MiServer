 msg←Test dummy;cell
⍝ Test /Examples/DC/InputGridSimple

 cell←'CssSelector'Find'.myig_label'
 msg←'Auto-assigned ID not found'/⍨~{'First name'≡cell.Text}Retry ⍬