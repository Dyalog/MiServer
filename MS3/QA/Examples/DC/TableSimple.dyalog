 msg←TableSimple
⍝ Just check to see whether the litte multiplication table seems to have been produced

 :If '90' '100'≢(BROWSER.FindElementsByCssSelector⊂'#myTable td')[108 109].Text
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf