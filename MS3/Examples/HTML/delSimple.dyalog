:class delSimple: MiPageSample
⍝ Control:: _html.del
⍝ Description:: this is an example of use of del which defines deleted text

    ∇ Compose
      :Access public 
      Add 'This is '
      Add _.del 'deleted'
      Add ' text.'
    ∇

:endclass
