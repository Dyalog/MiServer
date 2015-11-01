:class progressSimple: MiPageSample
⍝ Control:: _html.progress
⍝ Description:: Display progress bars

    ∇ Compose;prog
      :Access public
     
      prog←{(('value'⍵)('max'⍺))'' ''Add¨_.progress ⍵ _.br}
     
      Add _.h3'Graphical time stamp'
      23 59 59 prog¨3↑3↓⎕TS
     
    ∇
:endclass