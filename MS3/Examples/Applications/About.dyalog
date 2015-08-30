:class About : MiPageSample
⍝ Control:: About MiServer
⍝ Description:: Introduction to MiServer 3.0 with links to external and Dyalog-provided resources

    ∇ Compose
      :Access public
     
      link←{myp←⍺.Add _.p
          ('target=_blank')('href=',⊃⌽⍵)myp.Add _.a(⊃⍵)
      }
     
      Add _.p ScriptFollows
    ⍝  MiServer is a free, open-source web server implemented in Dyalog APL.
    ⍝  It enables the APL user to build sophisticated websites with little to no
    ⍝  knowledge of the underlying web technologies (HTML, JavaScript, CSS, etc).
     
      Add _.p ScriptFollows
    ⍝  This website serves as guide to MiServer 3.0, providing documentation, samples, and advice.
    ⍝  At the same time, it showcases many of MiServer's capabilities, as it is built entirely in
    ⍝  APL using components available in  MiServer.
     
      ('src=../Data/Dyalog-D.png' 'alt="Dyalog-D"' 'height="20px"')(Add _.p ScriptFollows).Add _.img
    ⍝  The display of the source code for any page in this site can be toggled by clicking on the large Dyalog&nbsp;
     
     
    ∇


:endclass