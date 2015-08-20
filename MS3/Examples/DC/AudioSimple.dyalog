:class AudioSimple : MiPageSample
⍝ Control:: _DC.Audio
⍝ Description:: Play a sound

    ∇ Compose;duck
      :Access public 
      Add'Wazzup '
      duck←'autoplay' '' Add _.Audio 'quack.mp3'

    ⍝ Give the control an id of 'sound'
      duck.id←'sound'
      Add' duck?'
    ∇

:endclass
