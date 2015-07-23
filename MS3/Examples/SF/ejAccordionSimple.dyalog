:Class ejAccordionAdvanced: MiPageSample
⍝ Description:: simple example of Syncfusion ejAccordion usage 
    ∇ Compse;ac;path
      :Access public
      ac←Add _SF.ejAccordion      ⍝ add the accordion widget
      ac.Titles←'First' 'Second'  ⍝ headings for each of two sections
      path←_Request.Server.Config.AppRoot,'Examples/Data/SampleText'
      ac.Sections←#.Files.GetText¨path∘,¨'1.txt' '2.txt'  ⍝ content for each of 2 sections
    ∇

:EndClass