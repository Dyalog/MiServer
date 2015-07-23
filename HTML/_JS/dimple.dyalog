:Class dimple : #._html.script

    ∇ make
      :Implements constructor
      :Access public
      Uses←'dimple'
    ∇
    ∇ make1 args
      :Implements constructor :base args
      :Access public
      Uses←'dimple'
    ∇
    ∇ r←Render
      :Access public
      Use
      r←⎕BASE.Render
    ∇

:EndClass