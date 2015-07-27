﻿:class detailssample: MiPage⍝Sample
⍝ Control:: HTML.header 
⍝ Description:: this is an example of use of the details tag whoch specifies additional details that the user can view or hide on demand
 
    ∇ Compose;det
      :Access public 
      det←Add _.details 
    ⍝ Add a summary line that will display next to the little arrow
      det.Add _.summary 'Details upon request'
    ⍝ Add the text to be hidden by default
      Add 'And a request has been made to uncover this text!'
    ∇

:endclass
