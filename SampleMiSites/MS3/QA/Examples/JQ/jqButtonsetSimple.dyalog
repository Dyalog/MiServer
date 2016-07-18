 msg←Test dummy;Gives;GO;Boots
 Gives←{'output'WaitFor ⍵⊣'CssSelector'∘Click¨⊂⍣(1=≡⍺)⊢⍺}
 GO←'#menu_2' ⋄ Boots←'label[for="footwear_2"] span'
 msg←''
 :If 0=⍴msg←GO Gives'barefoot'
     msg←Boots GO Gives'Boots'
 :EndIf
