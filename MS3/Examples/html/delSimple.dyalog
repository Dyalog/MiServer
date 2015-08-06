:class delSimple: MiPageSample
⍝ Control:: _html.del
⍝ Description:: Mark deleted text

    ∇ Compose
      :Access public 
      Add 'This is '
      Add _.del 'deleted'
      Add ' text.'
    ∇

:endclass
