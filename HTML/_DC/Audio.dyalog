:class Audio: #._html.audio
⍝ <audio src=⍵>Your browser does not support the audio tag.</ audio>

    :field public src←''

    ∇ Make1 args
      :Access public
      :Implements constructor
      src←args
    ∇

    ∇ html←Render
      :Access public
      Content←'Your browser does not support the audio tag.'
      'src'Set src
      html←⎕BASE.Render
    ∇
:endclass