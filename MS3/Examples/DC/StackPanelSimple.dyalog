﻿:Class StackPanelSimple : MiPageSample
⍝ Control:: _DC.StackPanel
⍝ Description:: Vertical and Horizontal "stacking" of content.
    
    ∇ Compose;content;vsp;intro;hsp;uses
      :Access public
     
      intro←'StackPanel objects allow you to manage the layout of your page. '
      intro,←'The constructor argument is simply a vector of content elements. The default '
      intro,←'orientation is Vertical: set the Horizontal property to 1 to get a horizontal panel.'
     
      Add _.p intro
      Add _.p'The following stack panels contain a Select, some text, and a Button.'
     
      Add _.h3'Vertical Stack Panel'
     
      content←New _.Select('Bananas' 'Pears' 'Oranges')
      content,←New _.span'This is some text'
      content,←New _.Button'Useless button'
      vsp←'vsp'Add _.StackPanel content
      
      Add _.h3'Horizontal Stack Panel'
      Add _.p'The same controls, arranged horizontally.'
     
      hsp←'hsp'Add _.StackPanel content
      hsp.Horizontal←1
    ∇

:EndClass