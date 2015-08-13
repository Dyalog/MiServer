    :class Input : #._html.input

        :field public Label←''
        

        ∇ Make1 args;l;n;t;v
          :Access public
          :Implements constructor
          args←eis args
          t n v l←4↑args,(⍴args)↓'text' '' '' ''
          (type value Label)←t v l
          :If ~0∊⍴n ⋄ name←id←n ⋄ :EndIf
        ∇

        ∇ html←Render
          :Access public
          html←''
          :If ~0∊⍴Label
              :If id≡⎕NULL ⋄ id←'gen',⍕?1000 ⋄ :EndIf
              html,←'<label for="',(⍕id),'">',Label,'</label>'
          :EndIf
          html,←⎕BASE.Render
        ∇
    :endclass