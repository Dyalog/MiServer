    :class EditField : #._html.input

        ∇ make1 nm
          :Access public
          :Implements constructor
          name←nm
          id←name
          type←'text'
        ∇
        ∇ make2(nm val)
          :Access public
          :Implements constructor
          :If ~1=≡name←nm val    ⍝ handle 2-character names
              (name value)←nm val
          :EndIf
          id←name
          type←'text'
        ∇
        ∇ make3(nm val att)
          :Access public
          :Implements constructor
          :If ~1=≡name←nm val att    ⍝ handle 3-character names
              (name value)←nm val
              SetAttr att
          :EndIf
          id←name
          type←'text'
        ∇
    :endclass