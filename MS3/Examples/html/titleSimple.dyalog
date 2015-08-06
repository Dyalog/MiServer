:class titleSimple: MiPageSample
⍝ Control:: _html.title
⍝ Description:: Set the document title in the browser's tab or title bar
 
    ∇ Compose
      :Access public 
     
    ⍝ First we put in a header
      Add _.title'Title example'
     
    ⍝ Then we add an (text) area
      Add 'The title of this window (or tab) should have changed.'     
    ∇

:endclass
