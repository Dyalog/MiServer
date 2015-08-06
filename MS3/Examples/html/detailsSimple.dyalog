:class detailsSimple: MiPageSample
⍝ Control:: _html.details _.html.summary
⍝ Description:: Add a summary with revealable details
 
    ∇ Compose;det
      :Access public 
      det←Add _.details
    ⍝ Add a summary line that will display next to the little arrow
      det.Add _.summary'Details upon request'
    ⍝ Add the text to be hidden by default
      det.Add'And a request has been made to uncover this text!'
    ∇

:endclass
