:Class DemoServer : MildServer

    NL←⎕UCS 13 10

    ∇ make args
      :Access Public
      :Implements Constructor :Base args
    ∇

    ∇ onSessionEnd session;msg
      :Access Public Override
      :With session
          msg←'End of session ',(⍕ID),': User=',User,'; Last active: ',,#.Dates.TSFmtNice LastActive
      :EndWith
      4 Log msg
    ∇

    ∇ onSessionStart req
      :Access Public Override
      4 Log'New session ',(⍕req.Session.ID),' started to process ',req.Page
    ∇

    ∇ level Log msg;report
      :Access Public Override
      report←Config.LogMessageLevel ⍝ report levels specified in config (use 0 for no reporting, ¯1 for all)
      :If report bit level
          ⎕←msg
      :EndIf
    ∇

      bit←{⎕IO←0  ⍝ used by Log
          0=⍺:0 ⍝ all bits turned off
          ¯1=⍺:1 ⍝ all bits turned on
          (⌈2⍟⍵)⊃⌽((1+⍵)⍴2)⊤⍺}

:EndClass