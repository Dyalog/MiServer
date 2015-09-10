:class hrSimple: MiPageSample
⍝ Control:: _html.hr
⍝ Description:: Draw a horizontal dividing line

    ∇ Compose
      :Access public
     
      Add 'We have to draw a clear line between this text...'
     
     ⍝ Horizontal ruler
      Add _.hr
     
     Add '... and this text.'
     
    ∇
:endclass