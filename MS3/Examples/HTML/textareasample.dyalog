:class textareasample: MiPage⍝Sample
⍝ Control:: _html.textarea
⍝ Description:: confine text to an area of defined dimensions 
 
    ∇ Compose;ta
      :Access public 
     
    ⍝ First we put in a header
      Add _.header'Here is the header'
     
    ⍝ Then we add an (text) area
      ta←Add _.textarea(888⍴'Curabitur in nisl congue, sollicitudin leo vitae, lacinia mi. ')
      'rows' 'cols'ta.Set 6 80
     
    ∇

:endclass
