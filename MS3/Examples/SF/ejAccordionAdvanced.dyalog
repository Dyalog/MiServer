﻿:Class ejAccordionAdvanced: MiPageSample
⍝ Control:: _SF.ejAccordion
⍝ Description:: An accordion which notifies the server on open/close

    ∇ Compose;ac;path
      :Access public
      '#Which' Add _.div  _.p 'Click on the headers to open or close sections.'
      Add _.br

      ac←Add _SF.ejAccordion      ⍝ add the accordion widget
      ac.Titles←'First' 'Second'  ⍝ headings for each of two sections
      path←_Request.Server.Config.AppRoot,'Examples/Data/SampleText'
      ac.Sections←#.Files.GetText¨path∘,¨'1.txt' '2.txt'  ⍝ content for each of 2 sections
      'enableMultipleOpen'ac.Set _true
      'heightAdjustMode'ac.Set'Content'
      'showRoundedCorner'ac.Set _true
      ac.On'activate' 'myCallback'('opened' 'argument' 'activeIndex')
      ac.On'inActivate' 'myCallback'('closed' 'argument' 'inActiveIndex')
    ∇

    ∇ r←myCallback
      :Access public
      r←'#Which' Replace _.p ('You ',_event,'d section ',(''Get'opened closed'))
    ∇

:EndClass