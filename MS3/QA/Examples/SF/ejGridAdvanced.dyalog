 msg←Test dummy;text;pages

 Selenium.Click'onSave'

 :If {21=('CssSelectors'Selenium.Find'#result td').Count}Selenium.Retry 0
     text←('CssSelectors'Selenium.Find'#result td')[0 3 4 5].Text
     msg←(text≢'SAVE:' 'Name' 'Type' 'Tastiness')/'Save button not working'
 :Else ⋄ msg←'Save button did not work.'
 :EndIf
