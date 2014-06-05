:Class jsTree : MiPage
    
    ∇ Render req;levels;items
      :Access Public
      levels←1 2 2 1
      items←'item'∘,¨⍕¨⍳⍴levels
      req.Return req #.JQO.jsTree 'tree' levels items
    ∇

:EndClass