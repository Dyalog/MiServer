:Class ejToggleButtonSample : MiPageSample ⍝ EAWC : MiPage : HtmlPage
⍝ Control:: _SF.ejToggleButton
⍝ Description:: explains all possible syntaxes

    ∇ Compose
      :Access Public
     
    ⍝ Arguments: [DefaultText [ToggledText]]
     
      Add¨(4/_.br),⊂(_.p'When no arguments are given, the button will display "Button", independent of toggle-state:')
      Add ejToggleButton
     
      Add¨(4/_.br),⊂(_.p'No ToggledText is specified, so the given text will remain when toggled:')
      Add ejToggleButton'I''ve got custom text, but it won''t change'
     
      Add¨(4/_.br),⊂(_.p'Both DefaultText and ToggledText specified:')
      Add ejToggleButton'Toggle me if you dare...' 'That was a <B>BOLD</B> move!'
     
    ∇
:EndClass