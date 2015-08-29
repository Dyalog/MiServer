:Class mortgagews : RESTful
    
⍝ calculate payment 
    calcpmt←{0::'Error' ⋄ p r n←⍵÷1 1200 (÷12) ⋄ .01×⌈100×p×r÷1-(1+r)*-n}

⍝ calculate principle
    calcprin←{0::'Error' ⋄ r n m←⍵÷1200 (÷12) 1 ⋄ .01×⌈100×m÷r÷1-(1+r)*-n}

    ∇ response←Respond;mask;r ⍝ render the initial page
      :Access Public
     
      r←⎕NS ''
      r.msg←'Please provide either (prin rate term) or (rate term pmt)'

      :if 1=+/mask←⍬∘≡¨r.(prin rate term pmt)←⍬ Get 'prin rate term pmt'

          :if mask[1] ⍝ principle missing
              r.(msg prin)←'' (calcprin r.(rate term pmt))

          :elseif mask[4] ⍝ payment missing
              r.(msg pmt)←'' (calcpmt r.(prin rate term))

          :endif
      :endif 

      response←1 #.JSON.fromAPL r
    ∇

:EndClass