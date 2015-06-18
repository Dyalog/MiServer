:class idiom :MiPage

    ∇ Render
      :Access public
     
      Add _.h2'Search Idiom Database'
     
      Add _.EditField'str'
      (Add input).(id name type value)←'fn' 'finn' 'checkbox' 'finnapl'
      (Add input).(id name type value)←'dl' 'dya' 'checkbox' 'dyalog'
     
      (Add _.Button'Search').On'click' ''
     
      (Add _.div).id←'res'
     
      ⎕SE.SALT.Load'\tmp\allisd'
    ∇
    ∇ APLJax
      :Access public
      r←'#res'Replace _.Table (Idiom⊃get'str')
    ∇

      Idiom←{
          ⍺←allisd
          a←⍺
          a[;3]←a[;3]~¨⊂'XYZ←;'
          ⍺⌿⍨∨/∨/¨a⍷¨⍨⊂⍵
      }
:endclass