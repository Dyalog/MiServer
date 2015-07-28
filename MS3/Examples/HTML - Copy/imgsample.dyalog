:class imgSimple: MiPage⍝Sample
⍝ Control:: _html.img
⍝ Description:: insert an image

    ∇ Compose;im
      :Access public 
      Add'Isn''t that nice?'
      im←Add _.img
      im.Set 'src=../Data/smiley.gif'
    ∇

:endclass
