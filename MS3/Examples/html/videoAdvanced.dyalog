:class videoAdvanced: MiPageSample
⍝ Control:: _html.video _html.source
⍝ Description:: specify a list of alternate video sources

    ∇ Compose
      :Access public
     
      mysound←'autoplay=' 'loop=' 'controls=' Add _.video'Your browser does not support the video tag.'
     
    ⍝ This is a list of alternative clips in preferred order
      'src=../Data/unicorn.mp4'mysound.Add _.source
      'src=../Data/lego.ogg'mysound.Add _.source
      'src=../Data/animals.mp4'mysound.Add _.source
     
      Add _.p'What do you see?'
      mylist←Add _.ul
      mylist.Add _.li'Unicorn: You must have added a file to the Data folder. (How does a unicorn look?)'
      mylist.Add _.li'Lego: Your browser can play .ogg files, e.g. Chrome, Firefox, Opera.'
      mylist.Add _.li'Animals: Your browser can only play .mp4 files, e.g. Internet Explorer, Safari.'
      mylist.Add _.li'Nothing: Your screen may be off. (Are you using a screen reader?)'
    ∇
:endclass