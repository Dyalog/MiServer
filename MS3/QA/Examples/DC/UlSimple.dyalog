 msg←Test dummy
 :If 'Apples' 'Bananas' 'Grapes' 'Oranges'≢(⌷'CssSelectors'Selenium.Find'#fruits li').Text
     msg←'Expected output was not produced.'
 :Else ⋄ msg←''
 :EndIf