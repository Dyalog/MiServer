:Class TableSimple : MiPageSample
⍝ Control::     _DC.Table
⍝ Description:: Display a matrix as a table

    ∇ Compose
      :Access public
     
      Add _.h2'The Little Multiplication Table'
      'myTable'Add _.Table(∘.×⍨⍳10)
    ∇

:EndClass