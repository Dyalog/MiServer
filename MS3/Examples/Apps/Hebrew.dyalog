:class Hebrew : MiPageSample
⍝ Control:: Kids' Keyboard
⍝ Description:: Children's educative application for Hebrew alphabet and keyboard

    Sound←{'#sound'Replace'autoplay' ''New _.Audio,⊂'/Examples/Data/Hebrew/',⍵,'.mp3'}
    LetBut←{('.letter',⍕⍵∊'שבגדכפת') ('#letter',⍕⎕UCS ⍵) (RandCol 0) New _.Button ⍵}
    Indent←{('style="margin-left:',(⍕⍵÷2-0∊⍴Get'nowrapper'),'pt;margin-bottom:2pt"')Add _.span}

      RandCol←{
          ×⍵:'style="color:rgb(',(1↓∊',',¨⍕¨(1-⍵)⌽127 ¯1 ¯1+?3/128),');"'
          'style="color:rgb(',(1↓∊',',¨⍕¨(¯1 127 ¯1+?1 128 256)[3?3]),');"'
      }

    ∇ Compose;style
      :Access public
      {}16807⌶2
      TASK←''
     
      style←''
      :If 0∊⍴Get'nowrapper' ⍝ Full-size
          style,←'button {width: 60pt; height: 60pt; font-size:40pt; '
      :Else ⍝ Half-size
          style,←'button {width: 30pt; height: 30pt; font-size:20pt; '
      :EndIf
      style,←'margin:2pt; font-family: serif;} button:hover {font-weight:bold;',' cursor:pointer;'⊢'}'
      Add _.style style
     
      Add _.h2'Click a letter to hear it or › to hear which letter to find. Hover over ? to repeat what to find, and click to see the letter to find.'
     
      '#play' 'style="font-size:30pt;"'Add _.Button'›'
      '#hint' '.menu'(Indent 400).Add _.Button'?'
     
      Add _.hr
      BUTTONS←''
      BUTTONS,←(Indent 120).Add¨LetBut¨'קראטוןםפ'
      Add _.br
      BUTTONS,←(Indent 0).Add¨LetBut¨'שדגכעיחלךף'
      Add _.br
      BUTTONS,←(Indent 40).Add¨LetBut¨'זסבהנמצתץ'
     
      Add _.Handler'button' 'click' 'OnClick'
      Add _.Handler'.letter1' 'mouseover mouseout' 'Bold'
      Add _.Handler'#hint' 'mouseover mouseout' 'Hint'
     
      '#sound'Add _.div
      '#feedback' 'style="font-size:30pt;"' 'dir="ltr"'Add _.bdo
    ∇

    ∇ r←OnClick;sound
      :Access Public
      :If ×≢TASK
          :Select _what
          :Case 'play'
              TASK←'letter',⍕1487+?27
              r←Sound TASK
          :Case 'hint'
              r←'#hint'Replace ⎕UCS⍎6↓TASK
          :Case TASK
              r←Sound'Yay'
              r,←'#feedback'Prepend(RandCol 2)New _.span'☺ '
              TASK←''
          :Else
              r←Sound'Boo'
              r,←'#feedback'Prepend(RandCol 1)New _.span'☹ '
          :EndSelect
      :Else
          :Select _what
          :Case 'play'
              TASK←'letter',⍕1487+?27
              r←Sound TASK
          :Case 'hint'
              r←''
          :Else
              r←Sound _what
              r,←'#feedback'Prepend(RandCol 3)New _.span(⎕UCS⍎6↓_what)
          :EndSelect
      :EndIf
    ∇

    ∇ r←Bold
      :Access Public
      r←('#',_what)Replace('שבגדכפת'⍳⎕UCS⍎6↓_what)⊃'שבגדכפתשׁבּגּדּכּפּתּ'⌽⍨7×_event≡'mouseover'
    ∇

    ∇ r←Hint
      :Access Public
      :If ×≢TASK
          :Select _event
          :Case 'mouseover'
              r←Sound TASK
          :Case 'mouseout'
              r←'#hint'Replace'?'
          :EndSelect
      :Else
          r←''
      :EndIf
    ∇
:endclass