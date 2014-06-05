:Class tablesorter : MiPage

    :Include #.HTMLInput
    

    ∇ Render req;data;tablesorter
      :Access Public   
      
    ⍝ set up the TableSorter data
      data←4 3⍴'Name' 'Age' 'Sex' 'Fred' 35 'Male' 'Susan' 50 'Female' 'Chris' 18 'Female'

      tablesorter←(BRA'h2'Enclose'TableSorter'),'Click on column heading to sort by that column'

      tablesorter,←BRA req #.JQO.TableSorter'mytable' data

      req.Return tablesorter
    ∇

:EndClass
