:Class ejListBoxTest : MiPageSample
⍝ Demonstrate the SyncFusion ejListBox widget

    ∇ Render
      :Access Public
      'lb'Add _SF.ejListBox(⍪'text' 'one' 'two' 'three' 'four')
      (Add _.Button'click').On'click' 'cb'('items' 'eval' 'JSON.stringify($.each($("#lb").ejListBox("model.dataSource"),function(i,obj){$(obj[0]).text}))')
    ∇
    ∇ r←cb
      :Access public
      r←''
      ∘∘∘
    ∇
:EndClass