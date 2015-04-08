:Class DatePicker : MS2Page

    :Include #.HTMLInput

    ∇ Render req;html
      :Access Public
      ∘∘∘
      html←'h2'Enclose'jQuery''s DatePicker'
     
      html,←'h4'Enclose'Using Multiple Months and yyyy-mm-dd format'
     
      html,←2 BRA'Date: ',req #.JQUI.DatePicker'mydate1'('' 20)'numberOfMonths: 2,showButtonPanel: true,dateFormat: "yy-mm-dd"'
     
      html,←'h4'Enclose'Using Month and Year Menus and DD, dd MM yyyy format'
     
      html,←'Date: ',req #.JQUI.DatePicker'mydate2'('' 35)'changeMonth: true,changeYear: true,dateFormat: "DD, d MM yy"'
     
      req.Return html
    ∇

:EndClass