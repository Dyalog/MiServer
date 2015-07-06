:Class ejTreeViewSample2 : MiPageSample

    ∇ Compose;items
      :Access Public
      items←8 4⍴⊂''
      items[;1]←1 2 2 3 3 1 2 1
      items[;2]←'Item '∘,∘⍕¨⍳8
      items[;3]←'i',∘⍕¨⍳8
      (Add _.h2'ejTreeView').On 'click' 'Callback'
      (Add _.ejTreeView'tv'items).onNodeSelect←1
    ∇

    ∇ r←APLJax
      :Access Public
      r←Execute #._JSS.Alert'You clicked ',(⎕UCS 10)~⍨#.JSON.toAPL Get'node'
    ∇
    
    ∇ r←Callback
      :Access Public
      r←'#tv' Replace 'tv' _.ejTreeView.FormatItems 3 3⍴1 'One' 'one' 2 'Two' 'two' 3 'Three' 'three'
    ∇

:EndClass