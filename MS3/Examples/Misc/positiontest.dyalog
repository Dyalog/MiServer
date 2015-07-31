:Class positionTest : MiPageSample

    ∇ Render;d1
      :Access Public 
      Add #._HTML.Style'.positionDiv'(('position' 'absolute')('width' '75px')('height' '75px')('background' 'green'))
      d1←Add _html.div'' 'id=targetElement'
      (d1.Add _html.div'' 'id=position1 class=positionDiv')Position'center' 'center' '#targetElement'
    ∇
                     
:EndClass