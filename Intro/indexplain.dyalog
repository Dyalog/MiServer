:Class IndexPlain : MildPage

    :Include #.HTMLInput

    ∇ Render req;html;links;hdr
      :Access Public
      hdr←'h2'Enclose'Welcome to MiServer'
      html←'h3' Enclose 'This is the unstyled version... ','a href="index.dyalog"' Enclose 'Click here for the stylish version!'
      html,←#.Files.GetText req.Server.Root,'welcome.txt'
      req.Return hdr,'p'Enclose html
    ∇

:EndClass