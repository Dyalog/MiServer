﻿:Class ejListBoxTest : MiPageSample
⍝ Demonstrate the SyncFusion ejListBox widget

    ∇ Render
      :Access Public
      lb←'lb'Add _SF.ejListBox(⍪'one' 'two' 'three' 'four')
      (Add _.Button'click').On'click' 'cb'('items'lb.getItems'')
    ∇
    ∇ r←cb
      :Access public
      r←''
      ∘∘∘
    ∇
:EndClass