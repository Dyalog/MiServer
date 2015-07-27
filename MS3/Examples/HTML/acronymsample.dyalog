:class acronymsample : MiPage
⍝ Control:: HTML.acronymsample 
⍝ Description:: this is an example of use of acronym which allows you to display text when hovering over an area  

    ∇ Compose
      :Access public 
      Add 'In '
      'title' 'Hyper Text Markup Language Five' Add _.acronym 'HTML5'
      Add ' the acronym tag is not supported.'
    ∇

:endclass
