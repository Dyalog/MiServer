:Class ejTreeViewSimple : MiPageSample
⍝ Control:: _SF.ejTreeView
⍝ Description:: Build a simple tree with a node selection callback

    ∇ Compose ;tv
      :Access Public
     
      items←8 3⍴''
      items[;1]← 1 2 2 3 3 1 2 1  ⍝ the level
      items[;2]← 'Item '∘,∘⍕¨⍳8   ⍝ the text
      items[;3]← 'i',∘⍕¨⍳8        ⍝ the ID
     
      Add _.h2 'Here is a Tree'
      tv←'tv' Add _.ejTreeView items
      tv.On 'nodeSelect' 'onNodeSelect' ('node' 'eval' 'argument.id')
     
      'output' Add _.div
    ∇

    ∇ r←onNodeSelect;item
      :Access Public
     
      item←2⊃items[items[;3]⍳⊂Get 'node';]
      r←'#output' Replace _.p (item,' selected.')
    ∇

:EndClass