:Namespace SeleniumTests
⍝ needs Selenium/ in a folder that is on the same level as the DUI- or MiServer-Folder (ie /Git/MiServer & /Git/Selenium)


    ∇ x←eis x
⍝ Enclose if simple
      :If (≡x)∊0 1 ⋄ x←,⊂,x ⋄ :EndIf
    ∇

    ∇ r←lopFirst url
    ⍝ remove first segment of URL
      r←{⍵/⍨(1+'/'=1↑⍵)≤+\'/'=⍵}url
    ∇

    ∇ r←stop Run1Test page;name;ref;Test;pg
     ⍝ eg MS3Test '/QA/DC/InputGridSimple'
      :Trap 11
          Selenium.GoTo SITE,lopFirst page ⍝ Drop the "QA"
      :Else
          r←'Error while opening "',(lopFirst page),'": ',⎕DM
          →(stop=0)/0
          ∘∘∘
      :EndTrap
      :If 9=⎕NC'#.DUI' ⋄ pg←#.DUI.AppRoot,page ⋄ :Else ⋄ pg←AppRoot,page ⋄ :EndIf
      :If 'Test'≡name←⎕SE.SALT.Load pg
          :Trap stop×9999
              'Test'⎕STOP⍨1/⍨2=stop ⍝ stop on line 1 if stop=2
              :If stop⌊0≠⍴r←Test ⍬
                  ⎕←'test for ',page,' failed:' ⋄ ⎕←r ⋄ ⎕←'Rerun:' ⋄ '      Test ⍬'
                  ∘∘∘
              :EndIf
          :Else
              r←'Trapped error: ',,⍕⎕DMX.EN
          :EndTrap
      :Else ⋄ r←pg,' does not define a function called Test'
      :EndIf
    ∇

    ∇ r←{ext}FindAllFiles root;folders;ext
      :If 0=⎕NC'ext'
          :If 0=⎕NC'Config.DefaultExtension' ⋄ ext←'.dyalog'
          :Else ⋄ ext←Config.DefaultExtension
          :EndIf
      :EndIf
      root,←'/'/⍨~'/\'∊⍨¯1↑root ⍝ append trailing / if missing
      r←root∘,¨(('*',ext)#.Files.List root)[;1]
      :If 0≠⍴folders←{(('.'≠⊃¨⍵[;1])∧⍵[;4])/⍵[;1]}#.Files.List root
          r←r,⊃,/ext∘FindAllFiles¨root∘,¨folders
      :EndIf
    ∇
 
    ∇ r←stop_port Test site;count;ctl;examples;f;fail;nodot;start;t;time;z;i;START;COUNT;FAIL;Config;selpath;files;n;ext;filter;⎕PATH;keynames;maxlen;⎕USING;stopOnError;stop;dui;appr;cfg
      ⍝ stop: 0 (default) ignore but report errors; 1 stop on error; 2 stop before every test
      ⍝⍵: site filter config
      ⍝                config refers to a named entry in Selenium/settings.json
      ⍝ ie. Test'./MS3' '' 'HTMLRenderer'
      stop←⊃stop_port
      r←''
      dui←9=⎕NC'#.DUI'
     
      (site filter config)←3↑(eis site),'' '' ''
      :If dui
          #.DUI.WC2Root←1⊃⎕NPARTS ¯1↓1⊃⎕NPARTS SALT_Data.SourceFile
          #.DUI.AppRoot←site
      :Else
          ⍝:If 0=⍴AppRoot←#.Load site
          :If 0=⍴AppRoot←∊1⎕nparts site
              ⎕←'Test abandoned' ⋄ →0
          :EndIf
          #.Boot.DyalogRoot←{{11 19 22::⍵,'/'↓⍨'/\'∊⍨¯1↑⍵ ⋄ ∊1 ⎕NPARTS⊃{⍺,(('/'=¯1↑⍺)<⍵=1)/'/'}/0 1 ⎕NINFO ⍵}∊⍕⍵}  2 ⎕NQ'.' 'GetEnvironment' 'DYALOG'  ⍝ avoid errors on "folderize"
      :EndIf
     
     ⍝ selpath←({∊'/',⍨¨¯1↓'/\'#.Utils.penclose ⍵}#.Boot.MSRoot),'Selenium/'
      selpath←(1⊃⎕NPARTS ¯1↓1⊃⎕NPARTS ¯1↓1⊃⎕NPARTS SALT_Data.SourceFile),'Selenium/'
      :If 0=⎕NC'Selenium'
          :Trap 0 ⋄ ⎕SE.SALT.Load selpath,'Selenium'
          :Else
              ⎕←'Selenium library not found at: ',selpath
              →0⍴⍨0∊⍴selpath←{⍞↓⍨⍴⍞←⍵,': '}'Selenium path'
              :Trap 0 ⋄ ⎕SE.SALT.Load selpath,'Selenium'
              :Else ⋄ ⎕←'Unable to load Selenium' ⋄ →0
              :EndTrap
          :EndTrap
      :EndIf
      ⎕PATH,←' Selenium'
      Selenium.DLLPATH←selpath  ⍝ backward compatibility
      Selenium.ApplySettings config
      Selenium.QUIETMODE←{6::(,1)≡,2⊃⎕VFI ⍵ ⋄ Selenium.QUIETMODE ⋄ }2 ⎕NQ'.' 'GetEnvironment' 'QUIETMODE'  ⍝ for automated tests! ;)
     
      :If dui
          :If 0≠⊃z←#.DUI.Initialize
              ⎕←'Error initializing!' ⋄ ⎕←z
              ∘∘∘
          :EndIf
          appr←#.DUI.AppRoot
          cfg←#.Boot.ms.Config
      :Else
          Config←#.Boot.ConfigureServer AppRoot
          ext←Config.DefaultExtension
          Config.DefaultExtension←'.dyalog' ⍝ We are searching for code
          appr←AppRoot
          cfg←Config
      :EndIf
     
      n←⍴files←(⍴appr)↓¨{∊2↑⎕nparts ⍵}¨FindAllFiles appr,'QA'
      ⍝ // Add code to compare this to the mipages found in the whole app
      :If 0≠≢filter
          files←(filter ⎕S'%')files
          :If ~Selenium.QUIETMODE ⋄ ⎕←'Selected: ',(⍕≢files),' of ',(⍕n),' tests.'⋄:endif
      :EndIf
      n←⍴files
      ⍝SITE←'http://127.0.0.1:',⍕⊃1↓stop_port,Config.Port
      ⍝SITE←'http://',(2 ⎕NQ'.' 'TCPGetHostID'),':',(⍕{6::⍵.MSPort ⋄ ⍵.Port}#.Boot.ms.Config)
      :if 2=Selenium.SETTINGS.⎕nc'SITEROOT'
      SITE←Selenium.SETTINGS.SITEROOT
      :else
      SITE←'http://',(2 ⎕NQ'.' 'TCPGetHostID'),':',⍕⊃1↓stop_port,⍎⍕{6::⍵.MSPort ⋄ ⍵.Port}cfg
      :endif
      :if ~Selenium.QUIETMODE
      ⎕←'Site=',SITE
      :endif
     
⍝⍝ Un-comment to play music while testing:
⍝      :If site filter≡'MS3' ''
⍝          ⎕CMD('"\Program Files (x86)\Windows Media Player\wmplayer.exe" "',AppRoot,'\Examples\Data\tellintro.mp3"')''
⍝      :EndIf
     
      Selenium.InitBrowser''
     
     ⍝ Localize non-alphanumeric key names for easy access
      keynames←⍕#.SeleniumTests.Selenium.Keys.⎕NL ¯2
      ⍎keynames,'←∊#.SeleniumTests.Selenium.Keys.(',keynames,')'
     
      START←⎕AI[3] ⋄ COUNT←0 ⋄ FAIL←0
      maxlen←¯2+⌈/⊃∘⍴¨files
     
      :For i :In ⍳n
          COUNT+←1
          :If 0=⍴t←stop Run1Test z←i⊃files
              :If ~Selenium.QUIETMODE ⋄ ⎕←z,' *** PASSED ***' ⋄ :EndIf
          :Else
              FAIL+←1
              r,←⊂z,': ',t
              :If ~Selenium.QUIETMODE  ⍝ only show msg if not running with quietmode
              ⎕←z,' *** FAILED *** #',(⍕i),' of ',(⍕n),': ',z,': ',t
              :endif
          :EndIf
      :EndFor
      :If ~Selenium.QUIETMODE ⋄ :OrIf 0<FAIL
          ⎕←'Total of ',(⍕COUNT),' samples tested in ',(∊(⍕¨24 60⊤⌊0.5+(⎕AI[3]-START)÷1000),¨'ms'),': ',(⍕FAIL),' failed.'
      :EndIf
      Selenium.BROWSER.Quit
    ∇

:EndNamespace
