:Class ejListBoxTest : MiPageSample
⍝ Demonstrate the SyncFusion ejListBox widget

    ∇ Render
      :Access Public
      lb←'lb'Add _SF.ejListBox(⍪'text' 'one' 'two' 'three' 'four')
      (Add _.Button'click').On'click' 'cb'('item'lb.getSelectedItem'')
    ∇
    ∇ r←cb
      :Access public
      r←''
      ∘∘∘
    ∇
:EndClass