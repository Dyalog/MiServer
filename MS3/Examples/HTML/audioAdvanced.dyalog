:class audioAdvanced: MiPageSample
⍝ Control:: _html.audio _html.source
⍝ Description:: specify a list of alternate audio sources

    ∇ Compose
      :Access public
     
      mysound←'autoplay='Add _.audio'Your browser does not support the audio tag.'
     
    ⍝ This is a list of alternative sounds in preferred order
      'src=../Data/unicorn.mp3'mysound.Add _.source ⍝ this file doesn't exist
      'src=../Data/horse.ogg'mysound.Add _.source
      'src=../Data/rooster.wav'mysound.Add _.source
      'src=../Data/quack.mp3'mysound.Add _.source
     
      Add _.p'Which animal do you hear?'
      mylist←Add _.ul
      mylist.Add _.li'Unicorn: You must have added a file to the Data folder. How does a unicorn sound?'
      mylist.Add _.li'Horse: Your browser can play .ogg files, e.g. Chrome, Firefox, Opera.'
      mylist.Add _.li'Rooster: Your browser can play .wav files, but not .ogg files, e.g. Safari.'
      mylist.Add _.li'Duck: Your browser can only play .mp3 files, e.g. Internet Explorer.'
      mylist.Add _.li'None: Your speakers may be off (that is, if you have any at all...)'
    ∇
:endclass