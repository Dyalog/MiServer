:class mapSimple: MiPageSample
⍝ Control:: _html.img _html.map _html.area
⍝ Description:: Insert a client-side image-map, i.e. an image with clickable areas

    ∇ Compose
      :Access public
      Add _.p'Click on the sun or on one of the planets to watch it closer:'
     
      settings←'src="../Data/planets.gif"' 'width="145"' 'height="126"'
      settings,←'alt="Planets"' 'usemap="#planetmap"'
      settings Add _.img
     
      data←⊂'shape="rect"' 'coords="0,0,82,126"' 'alt="Sun"' 'href="../Data/sun.htm"'
      data,←⊂'shape="circle"' 'coords="90,58,3"' 'alt="Mercury"' 'href="../Data/mercur.htm"'
      data,←⊂'shape="circle"' 'coords="124,58,8"' 'alt="Venus"' 'href="../Data/venus.htm"'
     
      data('name="planetmap"'Add _.map).Add¨_.area
    ∇

:endclass