:class footersample: MiPage⍝Sample
⍝ Control:: _html.q 
⍝ Description:: this is an example of use of a footer 

    ∇ Compose
      :Access public 
    ⍝ First we build a page with paragraphs
      Add _.p (999⍴'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ')
      Add _.p (888⍴'Curabitur in nisl congue, sollicitudin leo vitae, lacinia mi.')
      Add _.p (777⍴'Praesent volutpat, lorem quis fringilla posuere, nulla felis fringilla ligula, at vehicula elit mauris vitae nulla.')
      Add _.p (666⍴'Quisque lectus magna, rutrum in fermentum eu, pellentesque a nisl.')

    ⍝ Finally we add the footer
      Add _.footer 'And the footer goes here.'
    ∇

:endclass
