﻿:class Hebrew : MiPageSample
⍝ Control:: Kids' Hebrew Keyboard
⍝ Description:: Children's educative application for Hebrew alphabet and keyboard
    Sound←{'autoplay' ''New _.Audio,⊂'/Examples/Data/Hebrew/',⍵,'.mp3'}
    LetBut←{⍺←'.letbut'⋄ ⍺ New _.Button,⊂⍵,⊂'letter',⍕⎕UCS ⍵}
    IndP←{('style="margin-left:',(⍕⍵÷2-0∊⍴Get'nowrapper'),'pt;margin-bottom:2pt"')Add _.span}

    ∇ Compose;style
      :Access public
      TASK←''
      style←''
      :If 0∊⍴Get'nowrapper'
          style,←'.play {margin:2pt;font-size:30pt; max-height: 60pt; width: 60pt}'
          style,←'.letbut {margin:2pt;font-size:40pt; max-height: 60pt; width: 60pt; font-family: serif;}'
      :Else
          style,←'.play {margin:2pt;font-size:15pt; max-height: 30pt; width: 30pt}'
          style,←'.letbut {margin:2pt;font-size:20pt; max-height: 30pt; width: 30pt; font-family: serif;}'
      :EndIf
     
      style,←'.letbut:hover:before {content:"ּ"}'
      style,←'.play:hover {color:lime;}'
      Add _.style style
     
      Add _.h2'Click a letter to hear it or ▶ to hear which letter to find'
     
      ('.play'Add _.Button'▶').On'click' 'OnPlay'
      (IndP 50).Add¨LetBut¨'קראטוןםפ'
      Add _.br
      (IndP 0).Add¨LetBut¨'שדגכעיחלךף'
      Add _.br
      (IndP 40).Add¨LetBut¨'זסבהנמצתץ'
     
      Add _.Handler'.letbut' 'click' 'OnButton'
      '#output'Add _.div
    ∇

    ∇ r←OnButton;sound
      :Access Public
      :If 0∊⍴TASK
          r←Sound _what
      :ElseIf TASK≡_what
          r←Sound'Yay'
          TASK←''
      :Else
          r←Sound'Boo'
      :EndIf
      r←'#output'Replace r
    ∇

    ∇ r←OnPlay
      :Access Public
      TASK←'letter',⍕1487+?27
      r←'#output'Replace Sound TASK
    ∇
:endclass