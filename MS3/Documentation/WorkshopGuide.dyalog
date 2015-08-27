:class WorkshopGuide: MiPageSample
⍝ Control:: WorkshopGuide
⍝ Description:: Embed a PDF file

    ∇ Compose
      :Access public
      Add _.h3'By reading this, you agree to the following licence:'
      ('width'(700+250×0∊⍴Get'nowrapper'))'height="300"' 'data="MiServer 3 Workshop Guide.pdf"'Add _.object
    ∇

:endclass