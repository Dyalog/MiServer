:class KidsKbd : MiPageSample
⍝ Control:: Kids Keyboard
⍝ Description:: Children's educative application for Yiddish alphabet and keyboard

    Sound←{'#sound'Replace'autoplay' ''New _.Audio,⊂'/Examples/Data/KidsKbd/',⍵,'.mp3'}
    LetBut←{('.letter',⍕⍵∊'שבגדכפת') ('#letter',⍕⎕UCS ⍵) (RandCol 0) New _.Button ⍵}
    Indent←{('style="margin-left:',(⍕⍵÷2-0∊⍴Get'nowrapper'),'pt;margin-bottom:2pt;"')New _.span}
    Print←{'#feedback'Prepend('.serif',⍕⍵∊⎕ucs 1487+⍳27)(RandCol ⍺)New _.span⍵}
    RandCol←{'style="color:rgb(',(1↓∊',',¨⍕¨RGB ⍵),');"'}
      RGB←{
          ×⍵:(1-⍵)⌽127 ¯1 ¯1+?3/128
          (¯1 127 ¯1+?1 128 256)[3?3]
      }

    ∇ Compose;style
      :Access public
      {}16807⌶2
      TASK←''

      Add _.Style 'button' ('border-radius' '10px') 

      header←'Press buttons to hear letter names. ' 'Press › to hear which letter to find. '
      style←''
      :If 0∊⍴Get'nowrapper' ⍝ Full-size
          header←,/header
          style,←'th {padding: 0 70px;} '
          style,←'button, #feedback {font-size:40pt;} '
          style,←'button {width: 60pt; height: 60pt; '
      :Else ⍝ Half-size
          style,←'th {padding: 0 10px;} '
          style,←'button, #feedback {font-size:20pt;} '
          style,←'button {width: 30pt; height: 30pt; font-size:20pt; '
      :EndIf
      style,←'margin:2pt; font-family: serif;} '
      style,←'button:hover {font-weight:bold; cursor:pointer;} '
      style,←'.serif1 {font-family: serif;} '
      Add _.style style
      Add _.h2{⍺ ⍵}¨header
     
      menu←Add _.table
      (menu.Add _.tr).Add¨_.th,¨'Hear letter' 'Hear again' 'Show letter' 'Start over'
      buttons←(menu.Add _.tr).Add¨4/_.th
     
      '#play' '.menu'(buttons[1]).Add _.Button'›'
      '#hear' '.menu'(buttons[2]).Add _.Button'»'
      '#hint' '.menu'(buttons[3]).Add _.Button'?'
      '#new' '.menu'(buttons[4]).Add _.Button'×'
     
      Add _.hr
     
      keys←'#keys'Add _.div
      keys.Add Keyboard
     
      Add _.Handler'.menu' 'click' 'OnClick'
     
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
      '#feedback' 'dir="ltr"'kb.Add _.bdo
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

    ∇ r←Bold
      :Access Public
      r←('#',_what)Replace('שבגדכפת'⍳Letter)⊃'שבגדכפתשׁבּגּדּכּפּתּ'⌽⍨7×_event≡'mouseover'
    ∇

:endclass