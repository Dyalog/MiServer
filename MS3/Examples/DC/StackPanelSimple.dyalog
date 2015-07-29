:Class StackPanelSimple : MiPageSample

    ∇ Compose;content;hsp;tb;vsp
      :Access public
     
      intro←'StackPanel objects allow you to manage the layout of your page. '
      intro,←'The constructor argument is simply a vector of content elements. The default '
      intro,←'orientation is Vertical: set the Horizontal property to 1 to get a horizontal panel.'
     
      Add title'_DC.StackPanel - Simple Example '
      Add h2'_DC.StackPanel - Layout Management'
      Add p intro
      Add p'The following stack panels contain a Select, some text, and a Button.'
     
      Add h3'Vertical Stack Panel'
     
      content←(New Select('Bananas' 'Pears' 'Oranges'))
      content,←(New span'This is some text')
      content,←(New Button'Press Me!')
      vsp←Add _DC.StackPanel content
     
      Add h3'Horizontal Stack Panel'
      hsp←Add StackPanel content
      hsp.Horizontal←1
    ∇

:EndClass