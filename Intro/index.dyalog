:Class Index : MiPage

    :Include #.HTMLInput

    ∇ Render req;html;links;hdr
      :Access Public
      html←'h2'Enclose'Welcome to MiServer!'
      html,←'p'Enclose'This page contains links to a variety of example pages to help demonstrate some of MiServer''s features'
      html,←'p'Enclose'A "MiPage" is a MiServer page.'
      examples←(#.XML.ToNS #.Files.GetText #.Boot.AppRoot,'Examples/Examples.xml').Examples
      html,←Table(↑{(('a href="',⍵.path,'"')Enclose ⍵.name)⍵.description}¨examples)'class="exampletable"'
      req.Return html
    ∇

:EndClass
