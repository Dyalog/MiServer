:class titlesample: MiPage⍝Sample
⍝ Control:: _html.title
⍝ Description:: set the title of the browser 
 
    ∇ Compose
      :Access public 
     
    ⍝ First we put in a header
      Add _.title'Title example'
     
    ⍝ Then we add an (text) area
      Add 'The title of this window (or tab) should have changed.'     
    ∇

:endclass
