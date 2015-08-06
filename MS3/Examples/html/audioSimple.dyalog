:class audioSimple: MiPageSample
⍝ Control:: _html.audio 
⍝ Description:: Embed an audio stream 

    ∇ Compose
      :Access public 
      Add'Wazzup '
      'src=../Data/quack.mp3' 'autoplay='Add _.audio'Your browser does not support the audio tag.'
      Add' duck?'
    ∇
:endclass
