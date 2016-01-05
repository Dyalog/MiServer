:Class FontIcons

    :field public family←'fa' ⍝ default, can be altered from the constructor or directly setting it
    :field public element←'i' ⍝ default, can be altered from the constructor or directly setting it

    ∇ r←Icon args
      :Access public
      r←⎕NEW _FontIcon args
      ⍝ set the parameters here
      r.(Family Element)←family element ⍝ set
    ∇

    :class _FontIcon : #.HtmlElement
        :field public Family
        :field public Element

        ∇ make args
          :Access public
          :Implements constructor
          icon←args
        ∇

        ∇ r←Render
          :Access public
          Tag←Element
          class←Family,'-',icon
          r←⎕BASE.Render
        ∇

    :EndClass

:EndClass      
