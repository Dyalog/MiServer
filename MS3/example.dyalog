:Class Example : Dyalog14

    ∇ Render;h
      :Access public
      h←Add h2'Welcome to MiServer 3.0'
      h.Style'color' 'red'
      h.Attr[⊂'onclick']←⊂'alert("Hello world!")'
    ∇

:EndClass