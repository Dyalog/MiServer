 msg←Test dummy;Has

 Has←{'Expected text not visible'/⍨~∨/⍵⍷∊(⌷'CssSelectors'Find'#id1572285864 p').Text⊣Wait 200⊣'LinkText'Click ⍺}

 :If 0=⍴msg←'Latin'Has'Neque'
 :AndIf 0=⍴msg←'German'Has'Fu en leuchtete'
 :AndIf 0=⍴msg←'English'Has'Continual'
 :AndIf 0=⍴msg←'French'Has'Que ans avez'
 :EndIf
