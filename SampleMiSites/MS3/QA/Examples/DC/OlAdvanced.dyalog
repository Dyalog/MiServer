 msg←Test dummy;link;output
 :If 0∊⍴msg←'list not found'/⍨0≡link←('CssSelectors'Find'#links li')[1]
     output←Find'output'
     msg←'Mouseover test failed'/⍨~{∨/'new'⍷output.Text⊣⎕DL 0.1⊣MoveToElement link 10 10}Retry ⍬
 :EndIf
