:class bdiSimple: MiPageSample
⍝ Control:: _html.bdi 
⍝ Description:: this is an example of use of bdi which tag isolates a part of text that might be formatted in a different direction from other text outside it

    ∇ Compose
      :Access public 
      'http-equiv' 'content-type' 'content' 'text/html;charset=UTF-8' Add _.meta
      Add 'Only for Chrome and Firefox! My name is '
      Add _.bdi 'אדם'
      Add ' in Hebrew.'
    ∇

:endclass
