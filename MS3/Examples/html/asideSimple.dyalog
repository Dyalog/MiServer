﻿:class asideSimple: MiPageSample
⍝ Control:: _html.aside 
⍝ Description:: Insert a sidebar with related information
  
    ∇ Compose;note
      :Access public 
      Add'This is the body text...'
      note←Add _.aside'This note is only related, and is therefore set aside.'
      'style'note.Set'text-align:right'
      Add'... it continues down here.'
    ∇
:endclass
