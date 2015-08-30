:class AudioSimple : MiPageSample
⍝ Control:: _DC.Audio
⍝ Description:: Play a sound

    ∇ Compose;duck
      :Access public 
      Add'Wazzup '
      'sound'('autoplay' 'yes')Add _.Audio'quack.mp3' ⍝ set id to 'sound', and turn autoplay on
      Add' duck?'
    ∇

:endclass
