﻿:Class ejListBoxTest : MiPageSample
⍝ Demonstrate the SyncFusion ejListBox widget

    ∇ Render
      :Access Public
      tg←'tg'Add _SF.ejTreeGrid(('First' 'Second' 'Third' 'Fourth',⍪'one' 'two' 'three' 'four')('Place' 'Value')(1 2 1 2))
    ∇
    ∇ r←cb
      :Access public
      r←''
      ∘∘∘
    ∇
:EndClass