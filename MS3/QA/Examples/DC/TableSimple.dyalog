 msg←Test dummy
⍝ Just check to see whether the litte multiplication table seems to have been produced

 msg←'Expected output was not produced.'/⍨'90' '100'≢('CssSelectors'Find'#myTable td')[98 99].Text
