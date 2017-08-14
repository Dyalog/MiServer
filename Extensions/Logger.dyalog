:Class Logger ⍝ Logs HTTP requests

    ⎕ML←1

    :field public instance Active←0
    :field private instance Directory←''
    :field private instance Interval←10  ⍝ write cache interval in seconds
    :field private instance TieNo←⍬
    :field private instance Cache←''
    :field private instance Prefix←''
    :field private instance tid←¯1
    :field private EOL                  ⍝ End Of Line

    missing←{0∊⍴⍵:'-' ⋄ ⍵}

    ∇ Make ms;file;log
      :Access public
      :Implements Constructor
      ⍝ load logger information
      Active←0
      EOL←⎕UCS 13 10↓⍨~#.Boot.isWin
      :If #.Files.Exists file←ms.Config.Root,'Config/Logger.xml'
      :AndIf ~0∊⍴log←(#.XML.ToNS #.Files.ReadText file).Logger
          Active←log #.Boot.Setting'active' 1 0
          Prefix←log #.Boot.Setting'prefix' 0 ''
          Interval←log #.Boot.Setting'interval' 1 10
          Directory←#.Boot.SubstPath log #.Boot.Setting'directory' 0 ''
          Directory,←(~'/\'∊⍨¯1↑Directory)/'/'
          ('Log file directory "',Directory,'" not found!')⎕SIGNAL 11/⍨~#.Files.DirExists Directory
      :EndIf
      :If Active
          tid←Run&0
      :EndIf
    ∇

    ∇ UnMake
      :Implements destructor
      Stop ⍬
    ∇

    ∇ Stop w
      :Access public
      :Trap 0
          :If Active
              Active←0
              ⎕TKILL tid
              :If Open
                  ClearCache
                  Close
              :EndIf
          :EndIf
      :EndTrap
    ∇

    ∇ Start
      :Access public
      :If ~tid∊⎕TNUMS
          Active←1
          tid←Run&0
      :EndIf
    ∇

    ∇ Run x;done
      :While Active
          {}⎕DL Interval
          :If Open
              ClearCache
              Close
          :EndIf
      :EndWhile
    ∇


    ∇ r←Open;fn
      r←0
      :Trap 6
          fn←#.Files.Normalize Directory,Prefix,(⍕100⊥3↑⎕TS),'.log'
      :Else
          →0
      :EndTrap
     
      :Trap 22 ⍝ file name error
          TieNo←fn ⎕NTIE 0 34
      :Else
          :Trap 0
              ⎕NUNTIE fn ⎕NCREATE 0
              TieNo←fn ⎕NTIE 0 34
          :Else
              1 ##.ms.Log'Unable to open log file "',fn,'"'
              :Return
          :EndTrap
      :EndTrap
      r←0≠TieNo
    ∇

    ∇ Log req
      :Access public
      :If Active
          :Hold 'Lumberjack'
              Cache,←((missing 2⊃req.PeerAddr),' ',(missing req.Session.User),#.Dates.LogFmtNow,'"',req.Command,' ',req.Page,'"',∊' '∘,∘⍕¨req.(Response.Status MSec Response.Bytes)),EOL
          :EndHold
      :EndIf
    ∇

    ∇ ClearCache
      :Hold 'Lumberjack'
          Cache ⎕NAPPEND TieNo
          Cache←''
      :EndHold
    ∇

    ∇ Close
      ⎕NUNTIE TieNo
    ∇
:EndClass