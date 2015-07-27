:class addresssample: MiPage⍝Sample
⍝ Control:: HTML.address 
⍝ Description:: this is an example of use of address which makes text Italic on a separate line 

    ∇ Compose
      :Access public 
      Add'A nice article.'
      Add _.address'Written by me'
      Add'* Just a footnote.'
    ∇
:endclass
