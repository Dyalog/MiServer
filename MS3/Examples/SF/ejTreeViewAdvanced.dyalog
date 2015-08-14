:Class ejTreeViewAdvanced : MiPageSample
⍝ Control:: _SF.ejTreeView
⍝ Description:: An updateable TreeView with a node selection callback

    ∇ Compose;items
      :Access Public

      items←8 3⍴⊂''
      items[;1]←1 2 2 3 3 1 2 1
      items[;2]←'Item '∘,∘⍕¨⍳8
      items[;3]←'i',∘⍕¨⍳8

      Add _.h2'Here is a Tree'
      tv←'tv'Add _.ejTreeView items
      tv.On'nodeSelect' 'onNodeSelect'('node' 'eval' 'argument.id')
      (Add _.Button 'Add Branch').On 'click' 'onAddBranch'

      'output' Add _.div
    ∇

    ∇ r←onNodeSelect;item
      :Access Public
     
      item←⊃items[items[;3]⍳⊂Get'node';2]
      r←'#output' Replace _.p ('Item ',item,' selected.')
    ∇

    ∇ r←onAddBranch;n
      :Access Public

      n←1+1↑⍴items
      items⍪←1 ('Item ',⍕n) ('i',⍕n)
      r←'#tv' Replace 'tv' _.ejTreeView.FormatItems items ⍝ Add a branch
    ∇

:EndClass