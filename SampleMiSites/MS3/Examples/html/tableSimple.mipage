:class tableSimple: MiPageSample
⍝ Control:: _html.table _html.tr _html.td
⍝ Description:: Display a matrix as a table

    ∇ Compose;mydata;mytable;row;myrow;col
      :Access public
     
      Add _.h2'The Little Multiplication Table'
      mydata←∘.×⍨⍳10
      mytable←'myTable'Add _.table
      :For row :In ⍳⊃⍴mydata
          myrow←mytable.Add _.tr
          :For col :In ⍳⊃⌽⍴mydata
              myrow.Add _.td,mydata[row;col]
          :EndFor
      :EndFor
    ∇

:endclass