:class objectSimple: MiPageSample
⍝ Control:: _html.object 
⍝ Description:: Embed a PDF file

    ∇ Compose
      :Access public 
      Add _.h3'By reading this, you agree to the following licence:'
      'width="750"' 'height="300"' 'data="../Data/licence.pdf"'Add _.object
    ∇

:endclass

