:Class bdiSimple: MiPageSample
⍝ Control:: _html.bdi
⍝ Description:: Isolate text that should be displayed with a reading order that is different from the surrounding text

    ∇ Compose
      :Access Public 
      Add'My name is '
    ⍝ The text below will look like XTO in editors which do not support bi-directional text,
    ⍝ but like OTX in a browser (or in the RIDE, which is built on a browser engine)
      Add _.bdi'אדם'
      Add' in Hebrew. (NB: not all browsers support this!)'
    ⍝ See http://www.w3.org/International/questions/qa-visual-vs-logical for more info
    ∇

:EndClass