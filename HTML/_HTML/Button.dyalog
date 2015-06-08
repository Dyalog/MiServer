    :class Button : #._html.button

        :field _content←''

        ∇ Make0
          :Access public
          :Implements constructor :base
          Set('type' 'button')
        ∇

        ∇ Make args;n;v
          :Access public
          :Implements constructor :base
          ⍝ arguments are name value {content}
          args←eis args
          (n v _content)←3↑args,(⍴args)↓'button' 'button' ''
          :If 0∊⍴_content ⋄ _content←v ⋄ :EndIf
          (name value)←n v
          id←name
          Set('type' 'button')
        ∇

        ∇ html←Render
          :Access public
          :If 0∊⍴Content
              Content←_content
          :EndIf
          html←⎕BASE.Render
        ∇

    :endclass