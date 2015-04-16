:Class A3Wservice : RESTful

    ∇ resp←Render;stocks;symb
      :Access public
      resp←⎕NS''
      resp.msg←'Select a stock please'
      :If ~0∊⍴stocks←''Get'stocks'
          symb←{⎕ML←3 ⋄ ⍵⊂⍨⍵≠','}stocks
          resp.quotes←lookup¨symb
          resp.msg←''
      :EndIf
      resp←1 #.JSON.fromAPL resp
    ∇

    ∇ r←lookup symb
      r←symb(?200+⎕RL←0)
    ∇
:EndClass