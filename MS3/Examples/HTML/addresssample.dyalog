﻿:class addresssample: MiPage⍝Sample
⍝ Control:: _html.address 
⍝ Description:: makes text Italic on a separate line 

    ∇ Compose
      :Access public 
      Add'A nice article.'
      Add _.address'Written by me'
      Add'* Just a footnote.'
    ∇
:endclass
