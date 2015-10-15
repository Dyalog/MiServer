:Class TimerSimple : MiPageSample
⍝ Control:: _DC.Timer
⍝ Description:: Signal timed events to the server

    ∇ Compose
      :Access public 
      Add _.h4'Timer Sample - will append timestamp every 5 seconds'
      Add _.Timer
      'result'Add _.div
      On'tick' 'cb'
    ∇

    ∇ r←cb
      :Access public
      r←'#result'Append'<br/>',⍕⎕TS
    ∇

:EndClass