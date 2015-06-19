:Class ejTreeViewSample : MiPageSample

    ∇ Compose;items
      :Access Public
      items←8 4⍴⊂''
      items[;1]←1 2 2 3 3 1 2 1
      items[;2]←'Item '∘,∘⍕¨⍳8
      items[;3]←'i',∘⍕¨⍳8
      (Add _.h2'ejTreeView').id←'h2'
      (Add _.ejTreeView'tv'items).onNodeSelect←1
    ∇

    ∇ r←APLJax
      :Access Public
      r←Execute #._JSS.Alert'You clicked ',(⎕UCS 10)~⍨#.JSON.toAPL Get'node'
      r,←Execute'#h2'#._JSS.Toggle'fast'
    ∇
:EndClass