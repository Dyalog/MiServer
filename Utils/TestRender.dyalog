 r←TestRender page;p;html
⍝ Render a MiPage for testing
 :If ~#.Boot.isRunning
     r←'*** MiServer is not running'
 :Else
     p←⎕NEW page
     p._Request←⎕NEW #.HTTPRequest('' '')
     p._Request.Server←#.Boot.ms
     p.Compose
     html←p.Wrap
     :Trap 0
         {}⎕XML html
         r←1
     :Else
         r←0
     :EndTrap
 :EndIf