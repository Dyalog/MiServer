﻿    :class Form : #._html.form

        :field public Method←'post'
        :field public Action←''
        :field public Serialize←0

        ∇ make;c
          :Access public
          :Implements constructor
          :If {6::0 ⋄ ''≢c∘←##.context ⍵}'_Request'
              Action←c._Request.Page
          :EndIf
        ∇

        ∇ make1 action
          :Access public
          :Implements constructor
          Action←action
        ∇

        ∇ r←Render
          :Access public
          Attr['action' 'method']←Action Method
          r←⎕BASE.Render
        ∇
    :endclass