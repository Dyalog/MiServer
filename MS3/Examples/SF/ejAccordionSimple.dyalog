:Class ejAccordionSimple: MiPageSample
⍝ Control:: _SF.ejAccordion
⍝ Description:: Insert an accordion

    ∇ Compose;ac;path
      :Access public
      ac←Add _SF.ejAccordion              ⍝ add the accordion widget
      ac.Titles←'First' 'Second'          ⍝ headings for each of two sections
      path←_Request.Server.Config.AppRoot ⍝ where the sample app is
      path,←'Examples/Data/SampleText'    ⍝ the data folder + common part of the file names
      path←path∘,¨'1.txt' '2.txt'         ⍝ + remaining part of the names
      ac.Sections←#.Files.GetText¨path    ⍝ content for each of 2 sections read from file
    ∇

:EndClass