    :class InputSubmit : #._html.input

        ∇ Make
          :Access public
          :Implements constructor :base
          (name value)←'submit' 'submit'
          SetAttr('type' 'submit')
        ∇

        ∇ Make1 args;n;v
          :Access public
          :Implements constructor :base
          args←eis args
          (n v)←2↑args,(⍴args)↓'submit' 'submit'
          (name value)←n v
          SetAttr('type' 'submit')
        ∇
    :endclass