:class WorkshopGuide: MiPageSample
⍝ Control:: WorkshopGuide
⍝ Description:: Embed a PDF file

    ∇ Compose
      :Access public
      Add _.h1'All you need to know'
      ('width'(700+250×0∊⍴Get'nowrapper'))'height="300"' 'data="MiServer 3 Workshop Guide.pdf"'Add _.object
    ∇

:endclass