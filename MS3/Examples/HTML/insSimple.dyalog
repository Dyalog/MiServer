:class insSimple: MiPageSample
⍝ Control:: _html.ins 
⍝ Description:: mark inserted text 

    ∇ Compose
      :Access public 
      Add'This is '
      Add _.ins'inserted'
      Add' here!'
    ∇

:endclass
