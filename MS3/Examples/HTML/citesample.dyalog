:class citesample: MiPage⍝Sample
⍝ Control:: HTML.cite 
⍝ Description:: this is an example of use of cite which defines the title of a work 

    ∇ Compose
      :Access public 
      Add 'Indicate '
    ⍝ In this case this will be in italics but can be changes through CSS
      Add _.cite 'cited'
      Add ' works.'
    ∇

:endclass
