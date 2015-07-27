:class buttonsample: MiPage⍝Sample
⍝ Control:: HTML.button 
⍝ Description:: this is an example of use of the button tag 

    ∇ Compose
      :Access public 
      Add 'Insert a '
    ⍝ This button does nothing
      Add _.button 'button'
      Add ' in the page.'
    ∇

:endclass
