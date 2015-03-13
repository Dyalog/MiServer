:Class test : MiPageSample
    ∇ Render;h
      :Access public
     
      Add h2'Dyalog Process Manager Web Front End'
     
      ⍝ btns←{Add InputSubmit ⍵}¨'Start' 'Stop' 'Refresh'
      ⍝ btns.On ⊂'click' 'CallbackFn'
     
      btn←Add InputSubmit'Start'
      btn.On'click' 'CallbackFn'
     
      (Add div).id←'state'
    ∇

    ∇ r←CallbackFn
      :Access public
      ∘∘∘
      r←'#state'Append h2∘∘∘
    ∇
	
:EndClass