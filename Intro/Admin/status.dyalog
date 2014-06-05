:Class Status : MildPage

    :Include #.HTMLInput            ⍝ Useful functions for creating HTML pages

    :Field Public Command←''
    :Field Public LogFile←''

    ∇ Render req;html;tbl;HTML;s;⎕TRAP
      :Access Public
 ⍝ Display Server Status
     
      html←('a href="/"' Enclose 'Home'),'<br/>'
     
      :Select (#.Strings.lc Command)~' '
     
      :CaseList 'status' '' ⍝ Overall Status
          html,←'h2'Enclose'Sessions'
          tbl←1 4⍴'Session' 'User' 'Last Active' 'Pages'
          :For s :In req.Server.SessionHandler.Sessions
              tbl⍪←s.(ID User(#.Dates.TSFmtNice LastActive)(,⍕Pages._PageName))
          :EndFor
     
          html,←Table tbl'border="1"'
     
          :If 9=⎕NC'#.DrA'
              html,←'h2'Enclose'Error Log Files'
              html,←(req.Page,'?Command=ViewLog')#.DrA.GenHTML''
          :EndIf
     
      :Case 'viewlog'
          html,←'h2'Enclose'Log File "',LogFile,'"'
          html,←#.DrA.GenHTML LogFile
          html,←'<br>','p'Enclose'<a href="',req.Page,'">Return to list</a><br>'
     
      :EndSelect
     
      Command←LogFile←''
      req.Return html
    ∇
    
:EndClass