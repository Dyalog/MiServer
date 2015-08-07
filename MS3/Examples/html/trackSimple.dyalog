:class trackSimple: MiPageSample
⍝ Control:: _html.video _html.track
⍝ Description:: Specify subtitles 

    ∇ Compose
      :Access public
     
      movie←'autoplay=' 'width="320"' 'height="240"' 'controls='Add _.video
      movie.Add'Your browser does not support the video tag.'
      'src=../Data/animals.mp4'movie.Add _.source
    ⍝ This is a list of available subtitles
      'src="../Data/english.vtt"' 'kind="subtitles"' 'srclang="en"' 'label="English"'movie.Add _.track
      'src="../Data/danish.vtt"' 'kind="subtitles"' 'srclang="da"' 'label="Danish"'movie.Add _.track
     
    ∇
:endclass