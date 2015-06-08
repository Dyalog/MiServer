:Class index : MiPage
    ∇ Render
      :Access public
      Add _.h2'Hello world'
      Add _.h2'Good bye'
      Add _.Script'var newdata;'
      Add _.Handler'h2' 'click' 'cb'
    ∇

    ∇ r←cb
      :Access public
      r←'newdata'Return'⍎',#.JSON.fromAPL⍳10
    ∇
:EndClass