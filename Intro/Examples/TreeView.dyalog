:Class jsTree : MiPage
    
    :Include #.HTMLInput

    ∇ Render req;levels;items;html
      :Access Public
      levels←1 2 3 3 2 3 1 2 2
      items←'Item '∘,¨⍕¨⍳⍴levels

      html←'h2' Enclose 'jQuery jsTree Widget'

      html,←req #.JQO.jsTree 'tree' levels items

      req.Return html 
    ∇

:EndClass