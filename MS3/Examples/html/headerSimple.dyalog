:class headerSimple: MiPageSample
⍝ Control:: _html.header 
⍝ Description:: this is a type of title
 
    ∇ Compose
      :Access public 

    ⍝ First we put in a header
      Add _.header 'A header is a type of title'

    ⍝ The we add the text
      Add _.p (888⍴'Curabitur in nisl congue, sollicitudin leo vitae, lacinia mi.')
      Add _.p (777⍴'Praesent volutpat, lorem quis fringilla posuere, nulla felis fringilla ligula, at vehicula elit mauris vitae nulla.')
      Add _.p (666⍴'Quisque lectus magna, rutrum in fermentum eu, pellentesque a nisl.')
    ∇

:endclass
