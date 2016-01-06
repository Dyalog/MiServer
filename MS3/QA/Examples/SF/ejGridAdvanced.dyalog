 msg←Test dummy;text;pages

 Click'onSave'

 :If {21=('CssSelectors'Find'#result td').Count}Retry 0
     text←('CssSelectors'Find'#result td')[0 3 4 5].Text
     msg←(text≢'SAVE:' 'Name' 'Type' 'Tastiness')/'Save button not working'
 :Else ⋄ msg←'Save button did not work.'
 :EndIf
