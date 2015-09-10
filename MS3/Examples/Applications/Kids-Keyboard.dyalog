﻿:class Kids_Keyboard : MiPageSample
⍝ Control:: Kids_Keyboard
⍝ Description:: Children's educative application for Yiddish alphabet and keyboard

    Sound←{'#sound' Replace 'autoplay' '' New _.Audio ('/Examples/Data/KidsKbd/',⍵,'.mp3')}
    LetBut←{('.letter',⍕⍵∊'שבגדכפת') ('#letter',⍕⎕UCS ⍵) (RandCol 0) New _.Button ⍵}
    Indent←{('style="margin-left:',(⍕⍵÷2-BIG),'pt;margin-bottom:2pt;"') New _.span}
    Print←{'#feedback' Prepend ('.serif',⍕⍵∊⎕UCS 1487+⍳27) (RandCol ⍺) New _.span ⍵}
    RandCol←{'style="color:rgb(',(1↓∊',',¨⍕¨RGB ⍵),');"'}
      RGB←{
          ×⍵:(1-⍵)⌽127 ¯1 ¯1+?3/128
          (¯1 127 ¯1+?1 128 256)[3?3]
      }

    ∇ Compose;style
      :Access public
      {}16807⌶2
      TASK←''
      BIG←0∊⍴Get'nowrapper'
      Add _.Style'button'('border-radius' '10px')
      style←''
      style,←'th {padding: 0 ',(⍕10×7*BIG),'px;}'
      style,←'button, #feedback {font-size: ',(⍕20×2*BIG),'pt;} '
      style,←'button {width: ',(⍕30×2*BIG),'pt; height: ',(⍕30×2*BIG),'pt; margin:2pt; font-family: serif;} '
      style,←'button:hover {font-weight:bold; cursor:pointer;} '
      style,←'.serif1 {font-family: serif;} '
      Add _.style style
     
      Add¨_.h3{⍺ ⍵}¨(,/⍣BIG)'Press buttons to hear letter names. ' 'Press › to hear which letter to find. '
     
      menu←Add _.table
      (menu.Add _.tr).Add¨_.th,¨'Hear letter' 'Hear again' 'Show letter' 'Start over'
      buttons←(menu.Add _.tr).Add¨4/_.th
     
      '#play' '.menu'(buttons[1]).Add _.Button'›'
      '#hear' '.menu'(buttons[2]).Add _.Button'»'
      '#hint' '.menu'(buttons[3]).Add _.Button'?'
      '#new' '.menu'(buttons[4]).Add _.Button'×'
     
      Add _.Handler'.menu' 'click' 'OnClick'
     
      Add _.hr
     
      ('#keys'Add _.div).Add Keyboard
     
      '#sound'Add _.div
    ∇

    ∇ l←Letter
      l←⎕UCS⍎6↓_what
    ∇

    ∇ kb←Keyboard
      kb←New _.div
      (kb.Add Indent 120).Add¨LetBut¨'קראטוןםפ'
      kb.Add _.br
      (kb.Add Indent 0).Add¨LetBut¨'שדגכעיחלךף'
      kb.Add _.br
      (kb.Add Indent 40).Add¨LetBut¨'זסבהנמצתץ'
      kb.Add _.br
      kb.Add _.Handler'.letter0' 'click' 'OnClick'
      kb.Add _.Handler'.letter1' 'click' 'OnClick'
      kb.Add _.Handler'.letter1' 'mouseover mouseout' 'Dot'
      '#feedback' 'dir="ltr"'kb.Add _.bdo
    ∇


    ∇ r←OnClick;sound
      :Access Public
      :If ×≢TASK
          :Select _what
          :Case 'play'
              TASK←'letter',⍕1487+?27
              r←Sound TASK
          :Case 'hint'
              r←Sound'Boo'
              r,←1 Print ⎕UCS⍎6↓TASK
          :Case 'hear'
              r←Sound TASK
          :Case TASK
              r←Sound'Yay'
              r,←2 Print'☺ '
              TASK←''
          :Case 'new'
              r←'#keys'Replace Keyboard
              TASK←''
          :Else
              r←Sound'Boo'
              r,←1 Print'☹ '
          :EndSelect
      :Else
          :Select _what
          :Case 'play'
              TASK←'letter',⍕1487+?27
              r←Sound TASK
          :CaseList 'hint' 'hear'
              r←''
          :Case 'new'
              r←'#keys'Replace Keyboard
          :Else
              r←Sound _what
              r,←3 Print Letter
          :EndSelect
      :EndIf
    ∇

    ∇ r←Dot
      :Access Public
     ⍝ Add diacritic middle dot (Dagesh) while hovered over
      r←('#',_what)Replace('שכפתבגד'⍳Letter)⊃(7×_event≡'mouseover')⌽'שכפתבגד',⎕UCS 64304+¯6 11 20 26,⍳3
    ∇

:endclass