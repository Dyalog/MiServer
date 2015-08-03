:class bdoSimple: MiPageSample
⍝ Control:: _html.bdo 
⍝ Description:: this is an example of use of bdo which specifies the reading order (ltr - left-to-right or rtl - right-to-left)

    ∇ Compose
      :Access public 
      Add'The next sentence will be reversed: '
      Add _.br
      'dir' 'rtl'Add _.bdo'This sentence is reversed'
    ∇

:endclass
