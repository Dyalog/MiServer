 msg←Test dummy;Has

 Has←{(~∨/⍵⍷∊(⌷'CssSelectors'Find'#output p').Text⊣Wait 200⊣'LinkText'Click ⍺)/⍺,' text not visible'}

 :If 0=⍴msg←'Tab One'Has'Lorem ipsum'
 :AndIf 0=⍴msg←'Another'Has'Ut sed'
 :AndIf 0=⍴msg←'Fourth Tab'Has'Vivamus'
 :AndIf 0=⍴msg←'Third Tab'Has'Donec'
 :EndIf
