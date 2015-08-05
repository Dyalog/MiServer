:class figureSimple: MiPageSample
⍝ Control:: _html.img _html.figure _html.figcaption
⍝ Description:: insert an image

    ∇ Compose
      :Access public 
      Add¨'Isn''t that nice?'_.br
      myfig←Add _.figure
      'src=../Data/smiley.gif' 'alt="Happy face"'myfig.Add _.img
      myfig.Add _.figcaption'Captivating!'
    ∇

:endclass
