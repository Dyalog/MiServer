:class styleSimple: MiPageSample
⍝ Control:: _html.span 
⍝ Description:: Embed a style sheet

    ∇ Compose
      :Access public 
      Add _.style 'h1 {color:orange;} p {color:orchid;background-color:purple;}'
	  Add _.h1 'Dyalog''s Colour Preferences'
      Add _.p 'We love all shades of purple colours.'
    ∇

:endclass
