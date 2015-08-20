:class Hebrew : MiPageSample
⍝ Control:: Kids' Hebrew Keyboard
⍝ Description:: Children's educative application for Hebrew alphabet and keyboard
    
    Sound←{'autoplay' ''New _.Audio,⊂'/Examples/Data/Hebrew/',⍵,'.mp3'}
    LetBut←{('.letter',⍕⍵∊'שבגדכפת') ('#letter',⍕⎕UCS ⍵)New _.Button ⍵}
    Indent←{('style="margin-left:',(⍕⍵÷2-0∊⍴Get'nowrapper'),'pt;margin-bottom:2pt"')Add _.span}

    ∇ Compose;style
      :Access public
      TASK←''
     
      style←''
      :If 0∊⍴Get'nowrapper' ⍝ Full-size
          style,←'#play {margin:2pt;font-size:30pt; max-height: 60pt; width: 60pt}'
          style,←'.letter0, .letter1 {margin:2pt;font-size:40pt; max-height: 60pt; width: 60pt; font-family: serif;}'
      :Else ⍝ Half-size
          style,←'#play {margin:2pt;font-size:15pt; max-height: 30pt; width: 30pt}'
          style,←'.letter0, .letter1 {margin:2pt;font-size:20pt; max-height: 30pt; width: 30pt; font-family: serif;}'
      :EndIf
      style,←'button:hover {font-weight:bold; cursor:pointer;}'
      Add _.style style
     
      Add _.h2'Click a letter to hear it or ▶ to hear which letter to find'
     
      '#play'Add _.Button'▶'
      (Indent 50).Add¨LetBut¨'קראטוןםפ'
      Add _.br
      (Indent 0).Add¨LetBut¨'שדגכעיחלךף'
      Add _.br
      (Indent 40).Add¨LetBut¨'זסבהנמצתץ'
     
      Add _.Handler'button' 'click' 'OnButton'
      Add _.Handler'.letter1' 'mouseover mouseout' 'OnMouse'
     
      '#output'Add _.div
    ∇

    ∇ r←OnButton;sound
      :Access Public
      :If 'play'≡_what
          TASK←'letter',⍕1487+?27
          r←Sound TASK
      :ElseIf 0∊⍴TASK
          r←Sound _what
      :ElseIf TASK≡_what
          r←Sound'Yay'
          TASK←''
      :Else
          r←Sound'Boo'
          r,←_what Set
      :EndIf
      r←'#output'Replace r
    ∇

    ∇ r←OnMouse
      :Access Public
      r←('#',_what)Replace('שבגדכפת'⍳⎕UCS⍎6↓_what)⊃'שבגדכפתשׁבּגּדּכּפּתּ'⌽⍨7×_event≡'mouseover'
    ∇
:endclass
