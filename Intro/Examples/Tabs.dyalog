:Class Tabs : MiPage

    :Include #.HTMLInput

    ∇ Render req;content;headers;html
      :Access Public
     
    ⍝ set up the tab content
      content←3⍴⊂''
      content[1]←⊂TextToHTML #.Files.GetText req.Server.Root,'Data/sample1.txt'
      content[2]←⊂'12px'APLToHTML ⎕VR'#.HTMLInput.Attrs'
      content[3]←⊂#.Files.GetText req.Server.Root,'Data/sample.htm'
     
      headers←'Some Text' 'Some APL Code' 'Some HTML'
     
      html←('h2' Enclose 'Tabs'),req #.JQUI.Tabs'mytabs'headers content'event: "mouseover"'
     
      req.Return html
    ∇

:EndClass