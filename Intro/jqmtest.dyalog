:Class JQMTest : MildPage
     
    :include #.HTMLInput

    ∇ Render req;J;p
      :Access Public
      J←JQM.Create req
      p←J.AddPage'Page 1'
      p.AddHeader 'h1' Enclose 'Header'
      p.AddFooter'h4' Enclose 'Footer'
      
      
    ∇

:EndClass