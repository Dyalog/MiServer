:Class httprequest : MildPage

    :Include #.HTMLInput            ⍝ Useful functions for creating HTML pages
    
    :Field Public Name1←'Some Text'
    :Field Public Name2←' Some Other Text'
    :Field Public Action←''

    ∇ Render req;html;tbl;HTML;tblopts
      :Access Public
      ⍝ Document information available via HTTP Request
      tblopts←'border="1" cellpadding="3"'
      tbl←0 2⍴⊂'' ⍝ Basic Information
      tbl⍪←'Command:'req.Command
      tbl⍪←'Page:'req.Page
      tbl⍪←'Fields Set:'(Table('Name1' 'Name2' 'Action',[1.5]Name1 Name2 Action)tblopts)
     
      tbl⍪←'User:'req.Session.User
      tbl⍪←'IP:' req.PeerAddr
      tbl⍪←'Arguments:'(Table req.Arguments tblopts)
      tbl⍪←'Data:'(Table req.Data tblopts)
      tbl⍪←'Headers:'(Table req.Headers tblopts)
      tbl⍪←'Cookies:'(Table req.Cookies tblopts)
      HTML←BRA Table tbl
     
      tbl←2 2⍴⊂'' ⍝ Make a "submit" form
      tbl[1;1]←⊂'Field "Name1":'
      tbl[1;2]←⊂'font face="APL385 Unicode"'Enclose'Name1'Edit Name1
      tbl[2;1]←⊂'Click to'
      tbl[2;2]←⊂'Action'Submit'GET'
     
      html←Table tbl tblopts
      HTML,←BRA req('get'Form)html
     
      tbl[1;1]←⊂'Field "Name2":' ⍝ And a "post" form
      tbl[1;2]←⊂'font face="APL385 Unicode"'Enclose'Name2'Edit Name2
      tbl[2;2]←⊂'Action'Submit'POST'
      html←Table tbl tblopts
      HTML,←req('post'Form)html
     
      HTML←('h2'Enclose'Document HTTP Request Information...'),('a href="/"'Enclose'Home'),HTML
      req.Return HTML
    ∇
    
:EndClass