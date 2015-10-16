 msg←Test dummy
⍝ Just check to see whether the little multiplication table seems to have been produced

 :If '90' '100'≢('CssSelectors'Selenium.Find'#myt td')[108 109].Text
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf