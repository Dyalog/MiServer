:Class ValuePairs
⍝ This class associates values with names
⍝ It contains a single Property which returns the pairs

    Names←0⍴⊂'' ⋄ Vals←⍴⎕ml←⎕io←1
    eIs←{⊂⍣(1≡≡⍵)+⍵}

    ∇ noa
      :Access public
      :Implements constructor
    ∇

    ∇ ana pairs
      :Access public
      :Implements constructor
      pairs←,⊂⍣(2≥|≡pairs)+pairs ⍝ accept 's1' 'val1'
      (Names Vals)←↓⍉↑pairs
    ∇

    :property keyed Pairs,Values,DValues
    :access public
        ∇ set ra;i;new;there;ind
          there←~new←(⍴Names)<i←Names⍳ind←eIs⊃ra.Indexers
          (Vals Names),←new∘/¨ra.NewValue ind
          Vals[there/i]←there/ra.NewValue
        ∇
        ∇ r←get ra;i;n
          ⎕SIGNAL(1<⍴i←ra.Indexers)⍴4 ⍝ RANK err
          :Trap 3/⍨ra.Name≡'DValues' ⍝ allow default values
              :If 1↑ra.IndexersSpecified
                  r←Vals[Names⍳n←eIs⊃i]
              :Else
                  r←Vals ⋄ n←Names
              :EndIf
          :Else
              r←''
          :EndTrap
          :If ra.Name≡'Pairs'
              r←↓n,[1.1]r
          :EndIf
        ∇
    :endproperty

    ∇ {m}←remove ids;keep
      :Access public
      keep←~m←Names∊eIs ids
      (Names Vals)←keep∘/¨Names Vals
      m←(⍕+/m),' items removed'
    ∇

    ∇ yn←exists key
      :Access public
      yn←Names∊⍨eIs key
    ∇

:EndClass