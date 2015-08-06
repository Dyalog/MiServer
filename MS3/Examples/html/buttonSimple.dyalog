:class buttonSimple: MiPageSample
⍝ Control:: _html.button 
⍝ Description:: Insert a push button

    ∇ Compose
      :Access public 
      Add 'Insert a '
    ⍝ This button does nothing
      Add _.button 'button'
      Add ' in the page.'
    ∇

:endclass
