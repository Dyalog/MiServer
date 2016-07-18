:Class Ticker : MiPageSample

    started←0  
    TICKER_TID←¯1
    RATE←0

    ∇ Render;f;list;cur
      :Access public

      Add h2'Currency Ticker'
      (cur←Add _html.select).id←'CURRENCY'
      cur.Content←{⎕NEW _html.option ⍵}¨'USD' 'GBP' 'NOK'
      (Add Button'myButt' 'Start/Stop').On'click' 'Toggle'('CUR' '#CURRENCY' 'val')

      Add Handler'body' 'ping' 'Ping'
      (Add div).id←'output'
    ∇

    ∇ r←Toggle
      ⍝ Called by On/Off button
      :Access public
      started←~started
      r←''
     
      :If started
          TICKER_TID←RunTicker&CUR←Get'CUR'
          r←Execute'$("body").trigger("ping")'
      :Else
          r←'#output'Replace''
          ⎕TKILL TICKER_TID
      :EndIf
    ∇

    ∇ r←Ping
      ⍝ Called by "ping" event on body

      :Access public
      r←''
      :If started
          :If RATE≠#.RATE
              RATE←#.RATE
              r←'#output'Replace'DKK/',CUR,': ',3⍕RATE
          :EndIf
          r,←Execute'$("body").trigger("ping")'
      :EndIf
    ∇
    
    ∇ RunTicker CUR
      ⍝ Run a currency ticker: Update global #.RATE every 3 seconds

      #.RATE←(6.9 10.3 0.86 0.8 1)['USD' 'GBP' 'NOK' 'SEK'⍳⊂CUR]
      :Repeat
          #.RATE←#.RATE×1+0.01×¯2+?3
          ⎕DL 3
      :EndRepeat
    ∇

:EndClass