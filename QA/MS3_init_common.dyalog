 r←MS3_init_common params;cmd
⍝ vars are global by design here ;)
⍝ needs the following repos as siblings of the paren't parent (ie /Git/DUI, /Git/GhostRider) : GhostRider
 r←''
 grdui←1  ⍝ during development: run MiServer through GhostRider (the goal, but currentty not working),
          ⍝  1=GhostRider
          ⍝  0=use APLProcess to run DUI and connect to it with GhostRider to adjust Config-Settings,
          ⍝ ¯1=don't use GhostRider (don't fiddle with Config)
          ⍝ we need GhostRider for some fine-tuning of the config of the DUI-Server - but it's not too critical if we can't do that,...⌈
 MSdir←1⊃⎕NPARTS ¯1↓1⊃1 ⎕NPARTS ##.TESTSOURCE
 ⎕SE.SALT.Load'APLProcess'
 ⎕SE.SALT.Load MSdir,'QA/SeleniumTests.dyalog -target=#'
 ⎕SE.SALT.Load MSdir,'../Selenium/Selenium.dyalog -target=#.SeleniumTests'
 :If grdui≥0 ⋄ ⎕SE.SALT.Load(1⊃⎕NPARTS ¯1↓MSdir),'/GhostRider/GhostRider.dyalog -target=#' ⋄ :EndIf
 :If 1<≢##.args.Arguments ⋄ TestCase←2⊃##.args.Arguments ⋄ :Else ⋄ TestCase←'' ⋄ :EndIf
 
⍝ Start a separate APLProcess that serves the pages
 :If grdui=1
     GR←⎕NEW #.GhostRider('RIDE_SPAWNED=0 MiServer=',MSdir,'MS3/ ',params)  ⍝ RIDE_SPAWNED=0 should make the session visible - that has no effect on MB's machine.
     GR.APL'⎕load''',MSdir,'miserver',''''
     GR.(INFO TRACE)←##.verbose×~##.quiet
     GR.DEBUG←##.halt
 :ElseIf grdui=0
     myapl←⎕NEW APLProcess((MSdir,'miserver')('MiServer=',MSdir,'MS3/ ',params)0 'serve:*:4052')
 :Else
     myapl←⎕NEW APLProcess((MSdir,'miserver')('MiServer=',MSdir,'MS3/ ',params))
 :EndIf

⍝ hmmm......???
⍝ 'DUI'#.⎕NS''
 ⍝#.DUI.AppRoot←MSdir,'/MS3/'
 ⍝#.DUI.WC2Root←MSdir
 ⍝{}⎕SE.SALT.Load MSdir,'DUI.dyalog -target=#'
⍝#.Boot.ms.Config.Port←8080

 ⍝{}#.DUI.Initialize
 #.⎕CY MSdir,'miserver'
 {}⎕SE.SALT.Load MSdir,'Core/Boot.dyalog -target=#'
 {}⎕SE.SALT.Load MSdir,'Utils/Files.dyalog -target=#'
 {}⎕SE.SALT.Load MSdir,'Utils/dates.dyalog -target=#'
 {}⎕SE.SALT.Load MSdir,'Utils/Strings.dyalog -target=#'
 {}⎕SE.SALT.Load MSdir,'Utils/xml.dyalog -target=#'
 #.SeleniumTests.Selenium.QUIETMODE←##.quiet

 ⍝ Connect to the MiServer-Instance
 :If grdui>¯1
     :If grdui=0 ⋄ GR←⎕NEW #.GhostRider 4052 ⋄ :End
 ⍝ override settings with appropriate values (according to ]DTest-Flags) in the local DUI (used for testing) as well as the server
     cmd←'#.Boot.ms.Config.LogMessageLevel←',⍕(0 1 ¯1)[(2+##.verbose)*##.quiet=0]   ⍝ 0-none -1-all 1-error/important 2-warning 4-informational 8-Transactional
     {}GR.APL cmd
     cmd←'#.Boot.ms.Config.(Production TrapErrors)←','01'[2-##.halt]
     {}GR.APL cmd
 :EndIf
