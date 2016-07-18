:Class Redirect : #._html.meta
    :field public Location←''
    :field public Delay←0

    ∇ make
      :Implements constructor
      :Access public
    ∇

    ∇ make1 args
      :Implements constructor
      :Access public
      (Location Delay)←args defaultArgs Location Delay
    ∇

    ∇ r←Render
      :Access public
      r←''
      :If ~0∊⍴Location
          'http-equiv'Set'refresh'
          'content'Set(⍕Delay),';',Location
          r←⎕BASE.Render
      :EndIf
    ∇
:EndClass
