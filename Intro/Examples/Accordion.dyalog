:Class Accordion : MiPage

    :Include #.HTMLInput

    ∇ Render req;content;headers;html
      :Access Public
     
    ⍝ set up the Accordion content
      content←3⍴⊂''
      content[1]←⊂TextToHTML #.Files.GetText req.Server.Root,'Data/sample1.txt'
      content[2]←⊂'12px'APLToHTML ⎕VR'#.HTMLInput.Attrs'
      content[3]←⊂#.Files.GetText req.Server.Root,'Data/sample.htm'

      headers←'Some Text' 'Some APL Code' 'Some HTML'

      html←req #.JQUI.Accordion'myaccordion'headers content'fillSpace: true'

      html←('h2'Enclose'Accordion Example'),('style' 'width:600px; height:400px;')#.HTML.div html

      req.Return html
    ∇

:EndClass