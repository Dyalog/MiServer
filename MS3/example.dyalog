:Class Example : MiPageSample

    ∇ Render;h
      :Access public
      h←Add h2'Welcome to MiServer 3.0'
      h.Style'color' 'red'
      h.Attrs[⊂'onclick']←⊂'alert("Hello world!")'
    ∇

:EndClass