:Class PV : RESTful  ⍝ use the RESTful service template

    ∇ PV←PresentValue(FV rate periods)
      ⍝ Here's the beef: the Present Value calculation
      PV←FV÷(1+rate)*periods
    ∇

    ∇ response←Render;r;mask;ip;ts;fmt;type;t
      :Access public
     
      r←⎕NS''
      r.(message status PV)←'' 'failed' 0
      ip←_Request.PeerAddr[2]      ⍝ IP address of the client
     
      r.(FV r n)←⍬ Get'fv r n'     ⍝ Extract numeric parameters from URL or POST data
     
      :If ∨/mask←⍬∘≡¨r.(FV r n)    ⍝ Any arguments missing?
          r.message,←'Undefined or invalid inputs: ',2↓∊' ,'∘,¨mask/'FV' 'r' 'n'
          r.(FV r n)←''Get'fv r n' ⍝ Report the textual input back to the user
     
      :Else
          r.(FV r n←⊃¨FV r n)
          :Trap 0
              r.PV←PresentValue r.(FV r n)
              r.status←'success'
          :Else ⍝ Error in the computation of PV
              r.message←'internal error: ',,⍕⎕DMX.DM
          :EndTrap
      :EndIf
     
      :Select type←'json'Get'format'
     
      :CaseList 'json' 'xml'
          _Request.SetContentType type
          response←1 #.JSON.fromAPL r ⍝ Convert namespace to JSON
     
          :If type≡'xml' ⍝ Optionally convert JSON to XML
              response←'PVServiceResponse'#.JSON.toXML response
          :EndIf
     
      :Else
          r.message,←(2×0∊⍴r.message)↓'; invalid format ''',type,''''
          _Request.SetContentType'json'
          response←#.JSON.fromAPL r
      :EndSelect
     
      r.(FV r n PV){⍵:0 ⋄ ⍺}←t←mask,∨/mask  ⍝ assign 0 for missing values
      Log ip,r.(status FV r n PV),(⊂_Request.Input)
    ∇

    ∇ Log record;r
  ⍝ log transaction to console
      ⎕←record
    ∇

:EndClass