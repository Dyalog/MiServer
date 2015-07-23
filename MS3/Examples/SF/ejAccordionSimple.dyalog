<<<<<<< HEAD
﻿:Class ejAccordionSimple: MiPageSample ⍝ EAWC : MiPage : HtmlPage
⍝ Description::  two-part accordion with placeholder text content

    ∇ Compose;ac;path
      :Access public
      ac←Add _SF.ejAccordion              ⍝ add the accordion widget
      ac.Titles←'First' 'Second'          ⍝ headings for each of two sections
      path←_Request.Server.Config.AppRoot ⍝ where the sample app is
      path,←'Examples/Data/SampleText'    ⍝ the data folder + common part of the file names
      path←path∘,¨'1.txt' '2.txt'         ⍝ + remaining part of the names
      ac.Sections←#.Files.GetText¨path    ⍝ content for each of 2 sections read from file
=======
﻿:Class ejAccordionAdvanced: MiPageSample
⍝ Description:: simple example of Syncfusion ejAccordion usage 
    ∇ Compse;ac;path
      :Access public
      ac←Add _SF.ejAccordion      ⍝ add the accordion widget
      ac.Titles←'First' 'Second'  ⍝ headings for each of two sections
      path←_Request.Server.Config.AppRoot,'Examples/Data/SampleText'
      ac.Sections←#.Files.GetText¨path∘,¨'1.txt' '2.txt'  ⍝ content for each of 2 sections
>>>>>>> 40ec4b78ef376d5b1152e9148cc045962a83c1e3
    ∇

:EndClass