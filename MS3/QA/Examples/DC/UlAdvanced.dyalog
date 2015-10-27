 msg←Test dummy;link
 :If 0∊⍴msg←'list not found'/⍨0≡link←('CssSelectors'Find'#links li')[1]
     MoveToElement link 10 10
     msg←'output'WaitFor'this' 'Mouseover test failed'
 :EndIf