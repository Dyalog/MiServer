:Class ToggleButton : MiPageSample ⍝ EAWC : MiPage : HtmlPage

    ∇ Render
      :Access Public

	⍝ Arguments: [ID [DefaultText [ToggledText]]]
	  
    ⍝ When no arguments are given, the ID is auto-generated, and the button will display "Button", independent of toggle-state:
      Add ejToggleButton

	⍝ No ToggledText is specified, so the given text will remain when toggled:
      Add ejToggleButton'id2' 'I won''t change'

	⍝ Both DefaultText and ToggledText specified:
      Add ejToggleButton'id3' 'Toggle me if you dare...' 'That was a <B>BOLD</B> move!'

   ∇
:EndClass