:class timeSimple: MiPageSample
⍝ Control:: _html.time 
⍝ Description:: indicate a time

    ∇ Compose
      :Access public 
      ts←⍕1000⊥3↑3↓⎕TS
      ts[3 6]←':'
	  Add 'The time was '
      Add _.time ts
      Add ' when this page loaded.'
    ∇

:endclass
