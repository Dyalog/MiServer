 r←ShowContent elm
⍝ Show the content hierarchy for elm

     p←⎕NEW page
     p._Request←⎕NEW #.HTTPRequest('' '')
     p._Request.Server←#.Boot.ms
     p.Compose
