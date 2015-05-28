    :class Style : #._html.style

        :field public Selector←''
        :field public Styles←''

        ∇ Make1 params
          :Access public
          :Implements constructor
          params←eis params
          (Selector Styles)←2↑params,(⍴params)↓'' ''
        ∇

        ∇ html←Render
          :Access public
          Content←Selector,#.HTMLUtils.Styles Styles
          html←⎕BASE.Render
        ∇
    :endclass