﻿:class spanSimple: MiPageSample
⍝ Control:: _html.span 
⍝ Description:: Delimit inline content for later manipulation

    ∇ Compose
      :Access public 
      Add'At Dyalog, '
      myspan←'style="color:orange"'Add _.span'we love '
      'style="background-color:purple"'myspan.Add _.span'purple'
      myspan.Add' colours.'
    ∇

:endclass
