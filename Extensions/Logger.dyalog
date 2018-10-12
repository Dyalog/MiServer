:Class Logger ⍝ Logs HTTP requests

    ⎕IO←⎕ML←1


⍝ /Config/Logger.xml fields (and defaults) are:
⍝  <active>0</active>                      <!-- 1 for yes, 0 for no -->
⍝  <anonymousIPs>1</anonymousIPs>          <!-- 1 for yes (GDPR compliant), 0 for no -->
⍝  <directory>%SiteRoot%/Logs</directory>  <!-- directory to store log files -->
⍝  <interval>10</interval>                 <!-- cache write time interval in seconds, 0 means write immediately (do not cache) -->
⍝  <prefix></prefix>                       <!-- character vector log file prefix -->

    :field public instance Active←0
    :field private instance anonymousIps←1
    :field private instance directory←''
    :field private instance interval←10
    :field private instance prefix←''

    :field private instance TieNo←⍬
    :field private instance Cache←''
    :field private instance tid←¯1

    missing←{0∊⍴⍵:'-' ⋄ ⍵}
    Char←⎕DR ' '

    ∇ Make ms;config
      :Access public
      :Implements Constructor
     
      EOL←⎕UCS 13 10↓⍨~#.Boot.isWin
     
      config←ConfigureLogger ms
     
      Active←config.active
      Anonymize←{3='.'+.=⍵:((-(⌽⍵)⍳'.')↓⍵),'.0' ⋄ ⍵}⍣config.anonymousIps
      Prefix←config.prefix
      Interval←config.interval
      Directory←#.Boot.{folderize SubstPath ⍵}config.directory
      ('Log file directory "',Directory,'" not found!')⎕SIGNAL 11/⍨~#.Files.DirExists Directory
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
                  Cache,←((missing Anonymize 2⊃req.PeerAddr),' ',(missing req.Session.User),#.Dates.LogFmtNow,'"',req.Method,' ',req.Page,'"',∊' '∘,∘⍕¨req.Response.(Status MSec Bytes)),EOL
              :Else ⍝ something in logging failed, try figuring out what
                  addr←tryGetting'req.PeerAddr'
                  user←tryGetting'req.Session.User'
                  ts←tryGetting'#.Dates.LogFmtNow'
                  method←tryGetting'req.Method'
                  page←tryGetting'req.Page'
                  status←tryGetting'req.Response.Status'
                  msec←tryGetting'req.Response.MSec'
                  bytes←tryGetting'req.Response.Bytes'
                  Cache,←(missing Anonymize addr),' ',(missing user),ts,'"',method,' ',page,'" ',status,' ',msec,' ',bytes,EOL
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

    ∇ config←ConfigureLogger ms;file;log;config;Setting
      ⍝ load logger information
      Setting←#.Boot.Setting
      :If 'Logger'≡ms.Config.Logger
          config←ms.Config.LoggerConfig←⎕NS''
          ms.Config.LoggerConfig.active←0
          :If ~0∊⍴log←#.Boot.ReadConfiguration'Logger'
              config.active←log Setting'active' 1 0
              config.anonymousIps←log Setting'anonymousIps' 1 1
              config.directory←#.Boot.SubstPath log Setting'directory' 0 ''
              config.interval←log Setting 'interval' 1 10   ⍝
              config.prefix←log Setting 'prefix' 0 ''
          :EndIf
      :EndIf
    ∇

:EndClass
