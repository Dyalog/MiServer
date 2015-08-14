:Class ejTreeViewSimple : MiPageSample
⍝ Control:: _SF.ejTreeView
⍝ Description:: A simple TreeView with a node selection callback

    ∇ Compose
      :Access Public
     
      items←8 3⍴⊂''
      items[;1]←1 2 2 3 3 1 2 1
      items[;2]←'Item '∘,∘⍕¨⍳8
      items[;3]←'i',∘⍕¨⍳8
     
      Add _.h2'Here is a Tree'
      tv←'tv'Add _.ejTreeView items
      tv.On'nodeSelect' 'onNodeSelect'('node' 'eval' 'argument.id')
     
      'output'Add _.div
    ∇

    ∇ r←onNodeSelect;item
      :Access Public
     
      item←⊃items[items[;3]⍳⊂Get'node';2]
      r←'#output'Replace _.p(item,' selected.')
    ∇

:EndClass