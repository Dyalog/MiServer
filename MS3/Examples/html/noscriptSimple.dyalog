:class noscriptSimple: MiPageSample
⍝ Control:: _html.noscript _html.script
⍝ Description:: Add alternative content for when JavaScript is turned off or not supported
 
    ∇ Compose
      :Access public 
      Add _.script 'alert("Turn off JavaScript and reload this page!");'
      Add _.noscript 'You may want to turn on JavaScript.'
    ∇

:endclass
