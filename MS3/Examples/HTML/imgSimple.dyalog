:class imgSimple: MiPage⍝Sample
⍝ Control:: _html.img _html.figure _html.figurecaption
⍝ Description:: insert an image

    ∇ Compose
      :Access public 
      Add¨'Isn''t that nice?'_.br
      myimg←'src=../Data/smiley.gif' 'alt="Happy face"'Add _.img
      myimg.Add _.figcaption'It sure is!'
    ∇

:endclass
