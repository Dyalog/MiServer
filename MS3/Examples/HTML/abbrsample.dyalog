<<<<<<< HEAD
﻿:class abbrsample: MiPage
⍝ Control:: HTML.abbr 
⍝ Description:: this is an example of use of abbr which allows you to display text when hovering over an area
=======
﻿:class abbrsample : MiPage
⍝ Description:: Show usage the abbr HTML tag
>>>>>>> 937c49668f45e6f5299ae9f076d61f4c75c0439e

⍝ This is an example of using the HTML 'abbr' element.

    ∇ Compose
      :Access public 
    ⍝ We simply display the text 'Hover over THIS to reveal.'
     
    ⍝ First we add the text 'Hover over',
      Add'Hover over '

    ⍝ then we add the element 'abbr' containing the text 'THIS',
    ⍝ making sure the text to display when hovering over it
    ⍝ (the title) displays 'True Http Internet Scripts'
      'title' 'True Http Internet Scripts'Add _.abbr'THIS'

    ⍝ then we add the final text.
      Add' to reveal.'
    ∇
:endclass
