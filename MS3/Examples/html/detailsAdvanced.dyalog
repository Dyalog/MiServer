﻿:class detailsAdvanced: MiPageSample
⍝ Control:: _html.details _.html.summary
⍝ Description:: Make an expandable menu

    ∇ Compose
      :Access public
      men←Add _.div'Main Menu'
      det1←men.Add _.details
      det1.Add _.summary'1. First Submenu'
      det1.Add _.p'1.1 Menuitem'
      det1.Add _.p'1.2 Another one'
      det13←det1.Add _.details
      det13.Add _.summary'1.3 Sub-sub-menu'
      det13.Add _.p'1.3.1 More stuff'
      det13.Add _.p'1.3.2 Last one'
      det2←men.Add _.details
      det2.Add _.summary'2. Second Submenu'
      det2.Add _.p'2.1 Here we go again'
      det2.Add _.p'2.2 Yesss'
      det2.Add _.p'2.3 That''s it'
    ∇

:endclass