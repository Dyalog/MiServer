:Class MildPage

    :Field Public Instance _PageName←'' ⍝ Page file name
    :Field Public Instance _PageDate←'' ⍝ Page saved date

    ∇ Render req ⍝ Called on a GET or POST to the page
      :Access Public Instance
      req.Return'GET of Empty Page: ',req.Page
    ∇
    
    ∇ Wrap req;enc ⍝ Do some minimal wrapping for the page
      :Access public instance
      enc←#.HTMLInput.Enclose
      req.Response.HTML←'html' enc ('head' enc req.Response.HTMLHead),'body' enc req.Response.HTML
    ∇

    ∇ Close session ⍝ Called when the session ends
      :Access Public Instance
    ∇

:EndClass