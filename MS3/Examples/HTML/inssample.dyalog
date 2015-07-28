:class inssample: MiPage⍝Sample
⍝ Control:: _html.i 
⍝ Description:: insert (underlined) text 

    ∇ Compose
      :Access public 
      Add 'My favorite colour is '
      Add _.del 'blue'
      Add _.ins 'red!'
    ∇

:endclass
