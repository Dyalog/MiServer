:Class d3 : #._html.script

    ∇ make
      :Implements constructor
      :Access public
      Uses←'d3'
    ∇
    ∇ make1 args
      :Implements constructor :base args
      :Access public
      Uses←'d3'
    ∇
    ∇ r←Render
      :Access public
      Use
      r←⎕BASE.Render
    ∇

:EndClass