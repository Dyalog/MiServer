:class markSimple: MiPageSample
⍝ Control:: _html.mark 
⍝ Description:: insert mark (highlighted) text 

    ∇ Compose
      :Access public 
      Add 'Dyalog is '
      Add _.mark 'the APL'
      Add 'today!'
    ∇

:endclass
