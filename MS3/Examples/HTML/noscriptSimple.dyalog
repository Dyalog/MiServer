:class noscriptSimple: MiPageSample
⍝ Control:: _html.noscript _html.script
⍝ Description:: insert JavaScript
 
    ∇ Compose
      :Access public 
      Add _.script 'alert("Hello there!");'
      Add _.noscript 'Did you turn JavaScript off?'
    ∇

:endclass
