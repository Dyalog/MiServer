﻿:class baseSimple: MiPage⍝Sample
⍝ Control:: _html.base 
⍝ Description:: resets the base URL for relative links

    ∇ Compose
      :Access public 
      Add 'Clicking this link will bring you to the indicated page INSIDE the server '
      'href' 'meet-team-dyalog'Add _.a'meet-team-dyalog'
      ∇

:endclass
