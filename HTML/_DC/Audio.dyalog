:class Audio: #._html.audio
⍝ Description: Same as base HTML5 audio element but sets default message for browsers that don't support it
⍝ Constructor: [src]
⍝ src      - location of the audio file to play
⍝ Public Fields:
⍝ src      - location of the audio file to play

    :field public src←''

    ∇ Make0
      :Access public
      :Implements constructor
    ∇

    ∇ Make1 args
      :Access public
      :Implements constructor
      src←args
    ∇

    ∇ html←Render
      :Access public
      :If 0∊⍴Content
          Content←'Your browser does not support the audio tag.'
      :EndIf
      'src'Set src
      html←⎕BASE.Render
    ∇
:endclass