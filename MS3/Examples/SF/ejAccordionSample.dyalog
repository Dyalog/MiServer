:Class ejAccordionSample: MiPageSample ⍝ EAWC : MiPage : HtmlPage

    ∇ Render;ac
      :Access public
      ac←Add _SF.ejAccordion
      ac.Titles←'First' 'Second'
      ac.Sections←#.Files.GetText¨(_Request.Server.Config.AppRoot,'Examples/Data/SampleText')∘,¨'1.txt' '2.txt'
    ∇

:EndClass