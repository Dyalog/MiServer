:class bdoSimple: MiPageSample
⍝ Control:: _html.bdo 
⍝ Description:: Override the inherent directionality of text, i.e. the left-to-right or right-to-left reading order
    ∇ Compose
      :Access public 
      Add'The next sentence will be reversed: '
      Add _.br
      'dir' 'rtl'Add _.bdo'This sentence is reversed'
    ∇

:endclass
