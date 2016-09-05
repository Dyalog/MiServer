 msg←Test dummy;Has

 Has←{(~∨/⍵⍷∊(⌷'CssSelectors'Find'#output p').Text⊣Wait 200⊣'LinkText'Click ⍺)/⍺,' text not visible'}

 :If 0=⍴msg←'Latin'Has'Neque'
 :AndIf 0=⍴msg←'German'Has'Fu en leuchtete'
 :AndIf 0=⍴msg←'English'Has'Continual'
 :AndIf 0=⍴msg←'French'Has'Que ans avez'
 :EndIf
