:Class ejToggleButtonSimple : MiPageSample
⍝ Control:: _SF.ejToggleButton
⍝ Description:: Add toggleable buttons of all types

    ∇ Compose
      :Access Public
     
    ⍝ Arguments: [DefaultText [ToggledText]]
     
      Add¨(4/_.br),⊂(_.p'When no arguments are given, the button will display "Button", independent of toggle-state:')
      Add _.ejToggleButton
     
      Add¨(4/_.br),⊂(_.p'No ToggledText is specified, so the given text will remain when toggled:')
      Add _.ejToggleButton'I''ve got custom text, but it won''t change'
     
      Add¨(4/_.br),⊂(_.p'Both DefaultText and ToggledText specified:')
      Add _.ejToggleButton'Toggle me if you dare...' 'That was a <b>BOLD</b> move!'
     
    ∇
:EndClass