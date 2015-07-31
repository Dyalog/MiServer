:class blockquoteSimple: MiPageSample
⍝ Control:: _html.blockquote 
⍝ Description:: this is an example of use of blockquote which indent a block of text 

    ∇ Compose
      :Access public 
      Add 'Format '
      Add _.blockquote 'a block'
      Add ' of quoted text.'
    ∇

:endclass
