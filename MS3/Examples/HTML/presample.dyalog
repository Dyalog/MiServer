:class presample: MiPageSample
⍝ Control:: _html.pre 
⍝ Description:: this is an example of use of pre-formatted paragraph
 
    ∇ Compose
      :Access public 
      Add 'The following text comes as it is:'
      Add _.pre (⎕vr 'Compose')
      Add 'Presented by the association of APL programmers in your area'
    ∇

:endclass
