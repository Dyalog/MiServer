:class Hebrew : MiPageSample
⍝ Control:: Kids' Keyboard
⍝ Description:: Children's educative application for Hebrew alphabet and keyboard

    Sound←{'#sound'Replace'autoplay' ''New _.Audio,⊂'/Examples/Data/Hebrew/',⍵,'.mp3'}
    LetBut←{('.letter',⍕⍵∊'שבגדכפת') ('#letter',⍕⎕UCS ⍵) (RandCol 0) New _.Button ⍵}
    Indent←{('style="margin-left:',(⍕⍵÷2-0∊⍴Get'nowrapper'),'pt;margin-bottom:2pt"')New _.span}

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
     
     
      Add'#play'(Indent 100).Add _.Button'›'
      Add'#new'(Indent 100).Add _.Button'×'
      Add'#hint'(Indent 100).Add _.Button'?'
     
      Add _.hr
     
      keys←'#keys'Add _.div
      keys.Add Keyboard
     
      Add _.Handler'#hint' 'mouseover mouseout' 'Hint'
      Add _.Handler'#hint' 'click' 'OnClick'
      Add _.Handler'#play' 'click' 'OnClick'
      Add _.Handler'#new' 'click' 'OnClick'
     
      '#sound'Add _.div
    ∇

    ∇ kb←Keyboard
      kb←New _.div
      (kb.Add Indent 120).Add¨LetBut¨'קראטוןםפ'
      kb.Add _.br
      (kb.Add Indent 0).Add¨LetBut¨'שדגכעיחלךף'
      kb.Add _.br
      (kb.Add Indent 40).Add¨LetBut¨'זסבהנמצתץ'
      kb.Add _.br
      '#feedback' 'style="font-size:45pt;"' 'dir="ltr"'kb.Add _.bdo
      kb.Add _.Handler'.letter0' 'click' 'OnClick'
      kb.Add _.Handler'.letter1' 'click' 'OnClick'
      kb.Add _.Handler'.letter1' 'mouseover mouseout' 'Bold'
     
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
              r,←'#feedback'Prepend(RandCol 3)New _.span'? '
          :Case TASK
              r←Sound'Yay'
              r,←'#feedback'Prepend(RandCol 2)New _.span'☺ '
              TASK←''
          :Case 'new'
              r←'#keys'Replace Keyboard
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
          :Case 'new'
              r←'#keys'Replace Keyboard
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