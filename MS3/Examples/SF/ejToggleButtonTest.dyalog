:Class ejToggleButtonTest : MiPageSample ⍝ EAWC : MiPage : HtmlPage

    ∇ Render
      :Access Public

	⍝ Arguments: [DefaultText [ToggledText]]
	  
    ⍝ When no arguments are given, the button will display "Button", independent of toggle-state:
      Add ejToggleButton

	⍝ No ToggledText is specified, so the given text will remain when toggled:
      Add ejToggleButton 'I''ve got custom text, but it won''t change'

	⍝ Both DefaultText and ToggledText specified:
      Add ejToggleButton 'Toggle me if you dare...' 'That was a <B>BOLD</B> move!'

   ∇
:EndClass