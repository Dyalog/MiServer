:class psample: MiPage⍝Sample
⍝ Control:: HTML.p 
⍝ Description:: this is an example of use of p 
    ∇ Compose
      :Access public 
      Add'Just a line of text.'
      Add _.p 'Paragraphs, like this one, go on separate lines with spacing.'
      Add'That''s all.'
    ∇
:endclass
