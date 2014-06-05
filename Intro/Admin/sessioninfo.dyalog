:Class sessioninfo : MildPage

    :Include #.HTMLInput            ⍝ Useful functions for creating HTML pages

∇ Render req;html;tbl;HTML;s
 :Access Public
      ⍝ Document information available via HTTP Request

 html←''
 :For s :In req.Server.SessionHandler.Sessions
     html,←'h2'Enclose'Session #',⍕s.ID
     tbl←'User:' 'LastActive:',[1.5]s.(User(#.Dates.TSFmtNice LastActive))
     tbl⍪←'Pages:'(Table,[1.5]s.Pages._PageName)
     html,←Table tbl'border="1"'
 :EndFor

 req.Return html
∇
    
:EndClass