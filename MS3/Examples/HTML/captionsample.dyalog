:class captionsample: MiPage⍝Sample
⍝ Control:: HTML.caption 
⍝ Description:: this is an example of use of caption which defines a table caption 

    ∇ Compose
      :Access public 
      mytable←Add _.table

    ⍝ The <caption> tag must be inserted immediately after the <table> tag
      (mytable.Add _.tr).Add¨_.th,¨100×⍳4
      (mytable.Add _.tr).Add¨_.td,¨10×4+⍳4
      (mytable.Add _.tr).Add¨_.td,¨8+⍳4
      mytable.Add _.caption'A caption is the title of a table'

      Add _.br
      Add'That''s all.'
    ∇

:endclass
