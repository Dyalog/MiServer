:class paramSimple: MiPageSample
⍝ Control:: _html.object _html.param
⍝ Description:: Define parameter for plugin

    ∇ Compose
      :Access public 
      plugin←'data="../Data/quack.mp3"'Add _.object
      'name="autoplay"' 'value="true"'plugin.Add _.param
    ∇
    
:endclass

