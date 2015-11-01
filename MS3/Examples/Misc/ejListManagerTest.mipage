:Class ejListManagerTest : MiPageSample
⍝ Demonstrate the SyncFusion ejListBox widget

    ∇ Render
      :Access Public
      sp←Add _.StackPanel
      lm←'lm'sp.Add _DC.ejListManager(⍪'one' 'two' 'three' 'four' 'five')
      (sp.Add _.Button'Click Me').On'click' 'cb'(('left'lm.Left.getItems'')('right'lm.Right.getItems''))
      lm.Captions←{⊂_.b ⍵}¨'Left List' 'Right List'
      lm.UseButtons←1
    ∇

    ∇ r←cb
      :Access public
      ⎕←2 2⍴'Left Items'(Get'left')'Right Items'(Get'right')
      r←Execute #._JSS.Alert'Look at the APL session'
    ∇
:EndClass