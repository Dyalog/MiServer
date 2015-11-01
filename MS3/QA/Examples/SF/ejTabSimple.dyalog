 msg←Test dummy;tabs;i
 tabs←⌷'CssSelectors'Find'#tab1 li'
 :For i :In ⍳⍴tabs
     tabs[i].Click
     :If ~(Find'tab1_section_',⍕i).Displayed
         msg←'Tab ',(⍕i),' did not become visible' ⋄ →0
     :EndIf
 :EndFor
 msg←''