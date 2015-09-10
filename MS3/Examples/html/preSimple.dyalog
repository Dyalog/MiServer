:class preSimple: MiPageSample
⍝ Control:: _html.pre 
⍝ Description:: Add preformatted text
 
    ∇ Compose
      :Access public 
      Add 'The following text comes as it is:'
      Add _.pre (⎕vr 'Compose')
      Add 'Presented by the association of APL programmers in your area'
    ∇

:endclass
