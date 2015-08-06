:class citeSimple: MiPageSample
⍝ Control:: _html.cite 
⍝ Description:: Include a citation 

    ∇ Compose
      :Access public 
      Add 'These phenomenal words.'
    ⍝ Normally this will be in italics but can be changed through CSS
      Add _.cite '(quoted from this very page)'
    ∇

:endclass
