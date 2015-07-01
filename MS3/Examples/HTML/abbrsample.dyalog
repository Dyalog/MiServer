:class abbrsample : MiPage

⍝ This is an example of using the HTML 'abbr' element.

    ∇ Compose
      :Access public 
    ⍝ We simply display the text 'Hover over THIS to reveal.'
     
    ⍝ First we add the text 'Hover over', then
      Add'Hover over '
    ⍝ Then we add the element 'abbr' containing the text 'THIS',
    ⍝ making sure the text to display when hovering over it
    ⍝ (the title) displays 'True Http Internet Scripts'
      'title' 'True Http Internet Scripts'Add _.abbr'THIS'
    ⍝ then we add the final text.
      Add' to reveal.'
    ∇
:endclass
