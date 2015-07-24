:Class ejAccordionSimple: MiPageSample
⍝ Control:: _SF.ejAccordion
⍝ Description:: simple example of Syncfusion ejAccordion usage 
    ∇ Compose;ac;path
      :Access public
      ac←Add _SF.ejAccordion      ⍝ add the accordion widget to the page
      ac.Titles←'First' 'Second'  ⍝ set headings for each of two sections
      path←_Request.Server.Config.AppRoot,'Examples/Data/SampleText'
      ac.Sections←#.Files.GetText¨path∘,¨'1.txt' '2.txt'  ⍝ set content for each of 2 sections
    ∇

:EndClass