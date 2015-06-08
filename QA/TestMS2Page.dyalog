:Class TestMiPageTemplate : #.Pages.MS2Page
    ∇ r←Render req
      :Access public
      r←'h2' #.HTMLInput.Enclose 'Hello World!'
    ∇
:EndClass