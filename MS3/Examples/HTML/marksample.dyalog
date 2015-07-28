:class marksample: MiPage⍝Sample
⍝ Control:: _html.i 
⍝ Description:: insert marked (highlighted) text 

    ∇ Compose
      :Access public 
      Add 'Dyalog is '
      Add _.mark 'the APL'
      Add 'today!'
    ∇

:endclass
