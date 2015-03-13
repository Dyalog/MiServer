:Class accordion : MiPageSample ⍝ EAWC : MiPage : HtmlPage


    ∇ Render;ac
      :Access public
      ac←Add _SF.ejAccordion
      ac.Container←'#accordion'
      ac.Titles←'First' 'Second'
      ac.Sections←'Text of the first section' 'Second section text'
    ∇

:EndClass