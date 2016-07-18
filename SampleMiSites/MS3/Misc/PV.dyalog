:Class PV : RESTful  ⍝ use the RESTful service template

  ∇ PV←PresentValue(FV rate periods)
  ⍝ Here's the beef: the Present Value calculation
    PV←FV÷(1+rate)*periods
  ∇

  ∇ response←Render;r;mask;ip;ts;fmt;type;t
    :Access public
    ⍝ accept parameters from either URL or POST

    r←⎕NS''                              ⍝ create a namespace to response information
    r.(message status PV)←'' 'failed' 0  ⍝ assign default values
    ip←_Request.PeerAddr[2]              ⍝ IP address of the client
   
    r.(FV r n)←⍬ Get'fv r n'             ⍝ Extract numeric parameters from URL or POST data
   
    :If ∨/mask←⍬∘≡¨r.(FV r n)            ⍝ Any arguments missing?
      r.message,←'Undefined or invalid inputs: ',2↓∊' ,'∘,¨mask/'FV' 'r' 'n'
      r.(FV r n)←''Get'fv r n'           ⍝ Report the textual input back to the user
   
    :Else
      r.(FV r n←⊃¨FV r n)
      :Trap 0
        r.PV←PresentValue r.(FV r n)     ⍝ run the calculation
        r.status←'success'               ⍝ if an error didn't get thrown, it worked

      :Else                              ⍝ Error in the computation of PV
        r.message←'internal error: ',,⍕⎕DMX.DM
      :EndTrap
    :EndIf
   
    :Select type←'json'Get'format'       ⍝ get the format the user asked for (default json)

    :CaseList 'json' 'xml'
      _Request.SetContentType type
      response←1 #.JSON.fromAPL r        ⍝ Convert namespace to JSON
   
      :If type≡'xml' ⍝ Optionally convert JSON to XML
        response←'PVServiceResponse'#.JSON.toXML response
      :EndIf

    :Else                                ⍝ unrecognized format
      r.message,←(2×0∊⍴r.message)↓'; invalid format ''',type,''''
      _Request.SetContentType'json'      
      response←1 #.JSON.fromAPL r
    :EndSelect

    r.(FV r n PV){⍵:0 ⋄ ⍺}←t←mask,∨/mask ⍝ assign 0 for missing values
    Log ip,r.(status FV r n PV),(⊂_Request.Input),0 0,t,0 ⍝ log the request
  ∇

  ∇ Log record;r
  ⍝ log transaction (for now to console, but could be a database, component file, flat file...)
    ⎕←record    
    →0

  ⍝ example code to log to "PV_Log" database specified in Config\DataSources.xml
    r←#.SQL.Do'PV_Log' 'insert into pv_log (Client_IP, Status, FV, r, n, PV, Request) values(:<C255:, :<C255:, :<F:, :<F:, :<I:, :<F:, :<C255:)'record
    :If 0≠r.ReturnCode
      ⎕←'Error logging request record: ',⍕r.(ReturnCode Message)
    :EndIf
  ∇

:EndClass