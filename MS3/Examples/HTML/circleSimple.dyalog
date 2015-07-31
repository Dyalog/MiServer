:class circleSimple: MiPageSample 
⍝ Control:: _html.circle 
⍝ Description:: this is an example of use of circle which creates one

    ∇ Compose
      :Access public 
      Add'Nice circle:'
     
     ⍝ We need SVG to paint a circle:
      mysvg←'height' '100' 'width' '100' Add _.svg
      'cx' '50' 'cy' '50' 'r' '40' 'stroke' 'black' 'stroke-width' '3' 'fill' 'red' mysvg.Add _.circle
     
      Add'That''s all.'
    ∇

:endclass
