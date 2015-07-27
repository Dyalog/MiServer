:class captionsample: MiPage⍝Sample
⍝ Control:: HTML.caption 
⍝ Description:: this is an example of use of caption 
    ∇ Compose
      :Access public 
      mytable←Add _.table
      (mytable.Add _.tr).Add¨_.th,¨⍳4
      (mytable.Add _.tr).Add¨_.td,¨4+⍳4
      (mytable.Add _.tr).Add¨_.td,¨8+⍳4
      mytable.Add _.caption'A caption is the title of a table'
      Add'That''s all.'
    ∇
:endclass
