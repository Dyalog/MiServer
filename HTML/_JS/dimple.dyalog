:Class dimple : #._html.script

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
      Use'dimple'
      SetUse
      r←⎕BASE.Render
    ∇

:EndClass