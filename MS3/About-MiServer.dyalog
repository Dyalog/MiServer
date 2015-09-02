:class About_MiServer : MiPageSample
⍝ Control:: About_MiServer
⍝ Description:: Introduction to MiServer 3.0

    ∇ Compose;D
      :Access public
     
      Add _.p ScriptFollows
    ⍝  MiServer is a free, open-source web server implemented in Dyalog APL.
    ⍝  It enables the APL user to build sophisticated websites with little to no
    ⍝  knowledge of the underlying web technologies (HTML, JavaScript, CSS, etc).
     
      Add _.p ScriptFollows
    ⍝  This website serves as guide to MiServer 3.0 – providing documentation, samples,
    ⍝  and advice. At the same time, it showcases many of MiServer's capabilities,
    ⍝  as it is built almost entirely in APL using components available in MiServer.
     
      D←'src=/Examples/Data/Dyalog-D.png' 'alt="Dyalog-D"' 'height="20px"' 'style="vertical-align:bottom;"'New _.img
      (Add _.p ScriptFollows).Add¨D'in the top left corner.'
    ⍝  Hover over the four buttons on the top right to see their functions. When a sample is popped out
    ⍝  into its own tab or window, the source code and page content can be toggled by clicking the large Dyalog&nbsp;
    ∇


:endclass