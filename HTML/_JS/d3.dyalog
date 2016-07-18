:Class d3 : #._html.script

    ∇ make
      :Implements constructor
      :Access public
    ∇
    ∇ make1 args
      :Implements constructor :base args
      :Access public
    ∇
    ∇ r←Render
      :Access public
      Use'd3'
      SetUse
      r←⎕BASE.Render
    ∇

:EndClass