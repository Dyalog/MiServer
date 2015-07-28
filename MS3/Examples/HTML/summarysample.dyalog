:class summarysample: MiPage⍝Sample
⍝ Control:: HTML.header 
⍝ Description:: specifies a summary that the user can view or hide on demand
 
    ∇ Compose;det
      :Access public 
      det←Add _.details 
    ⍝ Add a summary line that will display next to the little arrow
      det.Add _.summary 'This is the summary'
    ⍝ Add the text to be hidden by default
      det.Add '...and these are the details'
    ∇

:endclass
