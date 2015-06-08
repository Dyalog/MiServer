    :class StyleSheet : #._html.link

        :field public href←''

        ∇ Make1 params
          :Access public
          :Implements constructor
          href←params
        ∇

        ∇ html←Render
          :Access public
          SetAttr(('href'href)('rel' 'stylesheet')('type' 'text/css'))
          html←⎕BASE.Render
        ∇
    :endclass