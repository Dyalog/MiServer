:class basesample: MiPage⍝Sample
⍝ Control:: HTML.base 
⍝ Description:: this is an example of use of base which resets the base URL for relative links

    ∇ Compose
      :Access public 
      Add 'Clicking this link will bring you to the indicated page INSIDE the server '
      'href' 'meet-team-dyalog'Add _.a'meet-team-dyalog'
      ∇

:endclass
