:class blockquoteSimple: MiPageSample
⍝ Control:: _html.blockquote 
⍝ Description:: Insert a long quotation of text 

    ∇ Compose
      :Access public 
      Add 'As it was so eloquently put:'
      Add _.blockquote ('T','...',⍨999⍴'his sentence just keeps going on and on and never seems to stop, especially because t')
      Add 'That is exactly how I would express it.'
    ∇

:endclass
