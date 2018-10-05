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
    Char←⎕DR ' '

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
          TieNo←fn ⎕NTIE 0
      :Else
          :Trap 0
              TieNo←{0 ⎕NTIE⍨⍵⊣⎕NUNTIE ⍵ ⎕NCREATE 0}fn
          :Else
              1 ##.ms.Log'Unable to open log file "',fn,'"'
              :Return
          :EndTrap
      :EndTrap
      r←0≠TieNo
    ∇

    tryGetting←{0::('-'@(' '∘=))(⊃⎕DM),'-retrieving-"',(∊⍕⍵),'"' ⋄ ∊⍕⍎⍵}

    ∇ Log req;addr;user;ts;method;page;status;msec;bytes
      :Access public
      :If Active
          :Hold 'Lumberjack'
              :Trap 0
                  Cache,←((missing 2⊃req.PeerAddr),' ',(missing req.Session.User),#.Dates.LogFmtNow,'"',req.Method,' ',req.Page,'"',∊' '∘,∘⍕¨req.Response.(Status MSec Bytes)),EOL
              :Else ⍝ something in logging failed, try figuring out what
                  addr←tryGetting'req.PeerAddr'
                  user←tryGetting'req.Session.User'
                  ts←tryGetting'#.Dates.LogFmtNow'
                  method←tryGetting'req.Method'
                  page←tryGetting'req.Page'
                  status←tryGetting'req.Response.Status'
                  msec←tryGetting'req.Response.MSec'
                  bytes←tryGetting'req.Response.Bytes'
                  Cache,←(missing addr),' ',(missing user),ts,'"',method,' ',page,'" ',status,' ',msec,' ',bytes,EOL
              :EndTrap
          :EndHold
      :EndIf
    ∇

    ∇ ClearCache
      :Hold 'Lumberjack'
          :If Char≠⎕DR Cache
              Cache←('?'@{Char≠⎕DR¨⍵})Cache
          :EndIf
          Cache ⎕NAPPEND TieNo
          Cache←''
      :EndHold
    ∇

    ∇ Close
      ⎕NUNTIE TieNo
    ∇
:EndClass
