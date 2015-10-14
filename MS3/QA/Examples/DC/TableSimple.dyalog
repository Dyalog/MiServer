 msg←Test dummy
⍝ Just check to see whether the litte multiplication table seems to have been produced

 :If '90' '100'≢('CssSelectors'Selenium.Find'#myTable td')[98 99].Text
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf