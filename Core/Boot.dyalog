:Namespace Boot

    ⎕IO←1

    ∇ End;classes;z;m
      ⍝ Clean up the workspace
     
      :If 9=⎕NC'ms'
          ms.End
          {}try'⎕EX⍕⊃⊃⎕CLASS ms.SessionHandler'
          {}try'⎕EX⍕⊃⊃⎕CLASS ms.Authentication'
          {}try'⎕EX⍕⊃⊃⎕CLASS ms.Logger'
          {}try'⎕EX⍕¨∪enlist ⎕CLASS¨ms.Encoders'
          ⎕EX⍕⊃⊃⎕CLASS ms
          ⎕EX'ms'
      :EndIf
     
      :If 9=⎕NC'SQA'
          {}try'SQA.Close''.'''
      :EndIf
     
      :If 0≠⍴classes←↓#.⎕NL 9.4
      :AndIf 0≠⍴classes←(m←2=⊃∘⍴¨z←⎕CLASS¨#⍎¨classes)/classes
          classes←(#.MildPage≡¨2 1∘⊃¨m/z)/classes
          #.⎕EX↑⍕¨classes ⍝ Erase loaded classes
      :EndIf
     
      Load 0
      ⎕EX'#.MildPage'
      ⎕EX'AppRoot'
    ∇

    ∇ ms←Init Config;path;class;classes;e;res;mask
     ⍝ Create instances of MildServer, Session and Authentication Handlers
     
      ms←⎕NEW(#⍎Config.ClassName)Config
      path←MSRoot,'Extensions/'
     
      :If 0≠⍴Config.SessionHandler
          class←⎕SE.SALT.Load path,Config.SessionHandler
          ms.SessionHandler←⎕NEW class ms
      :EndIf
     
      :If 0≠⍴Config.Authentication
          class←⎕SE.SALT.Load path,Config.Authentication
          ms.Authentication←⎕NEW class ms
      :EndIf
     
      :If 0≠⍴Config.SupportedEncodings
          {}⎕SE.SALT.Load path,'ContentEncoder'
          :For e :In Config.SupportedEncodings
              class←⎕SE.SALT.Load path,e
              ms.Encoders,←⎕NEW class
          :EndFor
          :If ∨/mask←0≠1⊃¨res←ms.Encoders.Init
              2 ms.Log'Content Encoding Initialization failed for:',∊' ',¨mask/ms.Encoders.Encoding
              ms.Encoders←(~mask)/ms.Encoders
          :EndIf
      :EndIf
      Config.UseContentEncoding∧←0≠⍴ms.Encoders
     
      :If 0≠⍴Config.Logger
          class←⎕SE.SALT.Load path,Config.Logger
          ms.Logger←⎕NEW class ms
      :EndIf
    ∇

    ∇ {AppRoot}Load yes;files;f;classes;class;utils
    ⍝ DanB 20160607: added :if construct
      classes←''
      :If 0≠⎕NC'AppRoot'
          classes←(⎕SE.SALT.List AppRoot,'Code -raw')[;1 2] ⍝ Classes in application folder
          classes←(empty¨classes[;1])/classes[;2] ⍝ remove directory entries (have <DIR> in [;1])
      :EndIf
      utils←(⎕SE.SALT.List MSRoot,'Utils -raw')[;2]   ⍝ find utility libraries
     
      :If yes
     
          files←'Core/'∘,¨'MildServer' 'HTTPRequest' 'MildPage'
          files,←'Utils/'∘,¨utils
     
          :For f :In files
              ⎕SE.SALT.Load MSRoot,f,' -target=#'
          :EndFor
     
          :If 0≠⍴classes
              :For class :In classes
                  ⎕SE.SALT.Load AppRoot,'Code/',class,' -target=#'
              :EndFor
          :EndIf
     
          'Pages'#.⎕NS'' ⍝ Container Space for loaded classes
          ⎕SE.SALT.Load MSRoot,'Core/MildPage -target=#.Pages'
          :If #.Files.DirExists AppRoot,'/Code/Templates/'
              ⎕SE.SALT.Load AppRoot,'Code/Templates/* -target=#.Pages'
          :EndIf
     
      :Else ⍝ Cleanup
          #.⎕EX¨classes
          #.⎕EX¨utils
          #.⎕EX'Pages'
          #.⎕EX¨'MildServer' 'HTTPRequest'
      :EndIf
    ∇

    ∇ Run root;Config
     
      AppRoot←root,(~(¯1↑root)∊'\/')/'/'
      AppRoot Load 1
      :If #.Files.Exists AppRoot,'Config/Server.xml'
          Config←(#.XML.ToNS #.Files.GetText AppRoot,'Config/Server.xml').Server
      :Else
          Config←⎕NS''
          Config.(ClassName DefaultPage)←'MildServer' 'index'
      :EndIf
      Config.Port←Config Setting'Port' 1 8080
      Config.TrapErrors←Config Setting'TrapErrors' 1 0
      Config.Logger←Config Setting'Logger' 0 ''
      Config.SessionHandler←Config Setting'SessionHandler' 0 'SimpleSessions'
      Config.Authentication←Config Setting'Authentication' 0 ''
      Config.Debug←Config Setting'Debug' 1 0
      Config.Root←MSRoot{((isRelPath ⍵)/⍺),⍵}AppRoot
      Config.TempFolder←Config.Root{0∊⍴⍵:⍵ ⋄ ((isRelPath ⍵)/⍺),⍵}Config Setting'TempFolder' 0
      Config.UseContentEncoding←Config Setting'UseContentEncoding' 1 0 ⍝ aka HTTP Compression default off (0)
      Config.SupportedEncodings←{(⊂'')~⍨1↓¨(⍵=⊃⍵)⊂⍵}',',Config Setting'SupportedEncodings' 0
      Config.LogMessageLevel←Config Setting'LogMessageLevel' 1 ¯1 ⍝ default to all message types
      Config.HttpCacheTime←Config Setting'HttpCacheTime' 1 0 ⍝ default to off (0)
      Config.IdleTimeOut←Config Setting'IdleTimeOut' 1 0 ⍝ default to none (0)
     
      :If 0≠⎕NC'#.DrA' ⍝ Transfer DrA config options
          {}#.DrA.SetDefaults
          #.DrA.Mode←Config Setting'Mode' 1 2 ⍝ Developer mode
          #.DrA.NoUser←Config Setting'NoUser' 1 1 ⍝ run without user interaction
          #.DrA.Path←AppRoot ⍝ Where to put log files
          #.DrA.SMTP_Gateway←Config Setting'SMTP_Gateway' 0
          #.DrA.MailRecipient←Config Setting'MailRecipient' 0
          #.DrA.MailMethod←Config Setting'MailMethod' 0 'NONE'
          #.DrA.AppName←Config Setting'Name' 0
          #.DrA.UseHTTP←Config Setting'UseHTTP' 1 0
      :EndIf
     
      ms←Init Config ⍝ Create instance of MildServer, Session and Authentication handlers
     
      ConfigureDatasources ms
      ConfigureVirtual ms
      ConfigureResources ms
      ConfigureContentTypes ms
      ConfigureLogger ms
     
      ms.Run
    ∇

    ∇ r←ns Setting pars;name;num;default;mask
    ⍝ returns setting from a config style namespace or provides a default if it doesn't exist
    ⍝ pars - name [num] [default]
    ⍝ ns - namespace reference
    ⍝ name - name of the setting
    ⍝ num - 1 if setting is numeric, 0 otherwise
    ⍝ default - default value if not found
      pars←eis pars
      name num←2↑pars,(⍴pars)↓'' 0 ''
      :If 2<⍴pars ⋄ default←3⊃pars
      :Else ⋄ default←(1+num)⊃''⍬
      :EndIf
      r←(⍴ns)⍴⊂default
      :If ∨/mask←0≠⊃¨ns.⎕NC⊂name
          (mask/r)←(tonum⍣num)¨(mask/ns).⍎⊂name
      :EndIf
      :If 0=⍴⍴r ⋄ r←⊃r ⋄ :EndIf
    ∇

    ∇ ConfigureDatasources ms;file;ds;name;tmp;orig
      ⍝ load any datasource definitions
      :If #.Files.Exists file←AppRoot,'Config/Datasources.xml'
      :AndIf 0<⍴ms.Datasources←,(#.XML.ToNS #.Files.GetText file).Datasources
     
          :For ds :In ms.Datasources
              :For name :In ds.⎕NL ¯2
                  orig←tmp←ds.⍎name
                  tmp←SubstPath tmp
                  :If orig≢tmp
                      ⍎'ds.',name,'←tmp'
                  :EndIf
              :EndFor
          :EndFor
     
          :Trap 0
              :If 0=#.⎕NC'SQA'
                  'SQA'#.⎕CY'sqapl' ⍝ copy in SQA
              :EndIf
              :If 0≠1⊃#.SQA.Init'' ⍝ and initialize
                  1 ms.Log'SQA failed to initialize'
              :EndIf
          :Else
              1 ms.Log'SQA failed to initialize'
          :EndTrap
      :EndIf
    ∇

    ∇ ConfigureVirtual ms;file;virtual;mask;inds;v
      ⍝ load virtual resource definitions if any
      ms.Config.Virtual←⍬
      :If #.Files.Exists file←AppRoot,'Config/Virtual.xml'
      :AndIf 0<⍴virtual←,(#.XML.ToNS #.Files.GetText file).Virtual
          :If 0∊mask←{⍵=⍳⍴⍵}inds←{⍵⍳⍵}virtual.alias ⍝ check for duplicate aliases, keep first
              1 ms.Log'Duplicate virtual aliases defined (first occurrence will be used): ',1↓enlist',',¨(~mask)/virtual.alias
              virtual←mask/virtual
          :EndIf
          ⍝ substitute server and site root if found
          virtual.path←SubstPath¨virtual.path
          :For v :In virtual
              :If ~#.Files.DirExists v.path ⍝ check if mapped path exists
                  1 ms.Log'Virtual path not found: ',v.path
                  virtual~←v
              :Else
                  :If #.Files.DirExists AppRoot,v.alias ⍝ check if alias conflicts with local path
                      1 ms.Log'Virtual alias "',v.alias,'" overrides site path of same name.'
                  :EndIf
              :EndIf
          :EndFor
          ms.Config.Virtual←virtual
      :EndIf
    ∇

    ∇ ConfigureResources ms;file;mask;inds;names;uses;map;n;res;f
      ⍝ load virtual resource definitions if any
      ms.Config.Resources←0 3⍴⊂''
      :If #.Files.Exists file←AppRoot,'Config/Resources.xml'
      :AndIf 0<⍴res←,(#.XML.ToNS #.Files.GetText file).Resources
          :If 0∊mask←{⍵=⍳⍴⍵}inds←{⍵⍳⍵}names←res.name ⍝ check for duplicate aliases, keep first
              1 ms.Log'Duplicate resources defined (first occurence will be used): ',1↓enlist',',¨(~mask)/res.name
              res←mask/res
              names←res.name
          :EndIf
          ⍝ build the dependency map
          uses←{(eis⍣(⊃0<⍴⍵))⍵}¨res Setting'uses'
          inds←names∘⍳¨uses
          n←⊃⍴names
          :If ∨/mask←n∨.<¨inds
              1 ms.Log'Invalid resource dependency found for:',enlist' ',¨mask/names
          :EndIf
          map←,(2⍴n)⍴(1+n)↑1 ⍝ identity matrix
          map[enlist(n×¯1+⍳n)+¨(~mask)/¨inds]←1
          map←(2⍴n)⍴map
          map←↓{({⍺∨⍺∨.∧⍵}⍣≡)⍨⍵}map
          ⍝ ms.Config.Resources[;1] resource name, [;2] scripts used [;3] styles used
          f←{SubstPath¨{⍵~⊂''}∘∪¨⊃¨,/¨map/¨⊂eis¨⍵}
          ms.Config.Resources←names,(f res Setting'script'),[1.1]f res Setting'style'
      :EndIf
    ∇

    ∇ ConfigureContentTypes ms;file;ct;inds;exts;types;mask;exp;n
      ⍝ load supported content types
      ms.Config.ContentTypes←0 2⍴⊂''
      :If #.Files.Exists file←MSRoot,'Core/ContentTypes.xml'
      :AndIf 0<⍴ct←(#.XML.ToNS #.Files.GetText file).ContentTypes
          exts←#.Strings.lc¨ct Setting'ext'
          types←ct Setting'type'
          :If ~0∊⍴inds←{⍵/⍳⍴⍵}enlist','∊¨exts
              mask←(⍴exts)⍴1
              exp←{⎕ML←3 ⋄ (⍵≠',')⊂⍵}¨exts[inds]
              mask[inds]←n←⍬∘⍴∘⍴¨exp
              (exts types)←mask∘/¨exts types
              exts[(n/inds)++\~enlist n↑¨1]←⊃,/exp
          :EndIf
          ms.Config.ContentTypes←exts,[1.1]types
      :Else
          1 ms.Log'No content types defined?'
      :EndIf
    ∇

    ∇ ConfigureLogger ms;file;log
      ⍝ load logger information
      ms.Config.Logger←⎕NS''
      ms.Config.Logger.active←0
      :If #.Files.Exists file←AppRoot,'Config/Logger.xml'
      :AndIf 0<⍴log←,(#.XML.ToNS #.Files.GetText file).Logger
          ms.Config.Logger.active←log Setting'active' 1 0
          ms.Config.Logger.directory←SubstPath log Setting'directory' 0 ''
          ms.Config.Logger.frequency←log Setting'frequency' 0 ''
          ms.Config.Logger.sizelimit←log Setting'sizelimit' 1 0
      :EndIf
    ∇

    :section Utilities
    isWin←('.' ⎕WG 'APLVersion')[3]≡⊂,'W'
    fileSep←'/\'[1+isWin]
    MSRoot←{(1-⌊/'/\'⍳⍨⌽⍵)↓⍵}⎕WSID
    isRelPath←{{~'/\'∊⍨(⎕IO+2×isWin∧':'∊⍵)⊃⍵}3↑⍵}
    enlist←{⎕ML←1⋄∊⍵}
    tonum←{w←⍵⋄((w='-')/w)←'¯'⋄2 1⊃⎕VFI w}
    try←{0::'' ⋄⍎⍵}
    empty←{0∊⍴⍵}
    notEmpty←~∘empty
    eis←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵} ⍝ Enclose if simple
    isRef←{(0∊⍴⍴⍵)∧326=⎕DR ⍵}
    folderize←{¯1↑⍵∊'/\':⍵ ⋄ ⍵,fileSep}
    makeSitePath←{⍺{((isRelPath ⍵)/⍺),⍵},folderize ⍵}
    ∇ r←SubstPath r
      r←(#.Strings.subst∘('%ServerRoot%'(¯1↓MSRoot)))r
      r←(#.Strings.subst∘('%SiteRoot%'(¯1↓AppRoot)))r
    ∇
:EndNamespace