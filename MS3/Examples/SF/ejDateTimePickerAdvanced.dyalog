﻿:Class ejDateTimePickerAdvanced : MiPageSample
⍝ Control:: _SF.ejDateTimePicker
⍝ Description::  Let user select dates/times and display the difference

    ∇ Compose;today;fromidn;tbl;tr;td;head;todate;from;to
      :Access Public
      fromidn←dateToIDN 3↑today←⎕TS
     
      Add _.h2'R.U. Inn'_.br'Motel reservation system'
     
    ⍝ The in date
      from←'in'New _SF.ejDateTimePicker today'yyyy/MM/dd HH:mm'
    ⍝ The callback should return the date (value) of the argument for the IN date/time
    ⍝ and the model's value for the OUT date/time
      from.On'change' 'setNewDate',⊂('in' 'argument' 'value')('out' 'eval' '$("#out").ejDateTimePicker("model.value")')
     
    ⍝ The out date
      todate←IDNToDate fromidn+7
      to←'out'New _SF.ejDateTimePicker todate'yyyy/MM/dd HH:mm'
      to.On'change' 'setNewDate',⊂('out' 'argument' 'value')('in' 'eval' '$("#in").ejDateTimePicker("model.value")')
     
      Add #._.InputGrid('Check In' 'Check Out',⍪from to)
     
      'diff'Add _.div
    ∇

    newDate←{'⍎new Date("',(⍕⍵),'")'}
    dateToIDN←{d←2 ⎕NQ'.' 'datetoidn'⍵ ⋄ d+(60⊥3↓6↑⍵)÷86400}
    IDNToDate←{d←3↑2 ⎕NQ'.' 'idntodate'⍵ ⋄ d,0 60 60⊤⌊86400×1|⍵}

    ∇ r←setNewDate;in;out
      :Access public
     
    ⍝ Find the difference between the dates
      in←dateToIDN stringToDate Get'in'
      out←dateToIDN stringToDate Get'out'
      :If in>out
          r←'#diff'Replace'Going back in time?'
      :Else
          r←'#diff'Replace'The difference in days is: ',⍕out-in
      :EndIf
    ∇

    MONTHS←↓12 3⍴'JanFebMarAprMayJunJulAugSepOctNovDec'

    FI←{(b v)←⎕vfi ⍵ ⋄ b/v}

    ∇ dt←stringToDate str;pos;mon;t;ymd
     ⍝ str is of the genre "Wed Aug 05 2015 07:30:21 GMT-0400 (Eastern Daylight Time)"
     ⍝ We need to weed out the day of the week and the time
      str←(+/∧\' '=str)↓str           ⍝ remove the leading spaces
     ⍝ What kind of string is this?
      :If ~∧/1⊃(dt dt)←{b←~⍵∊'/-:' ⋄ ⎕VFI b\b/⍵}str  ⍝ yyyy/mm/dd hh:mm:ss ?
          :If 0∊⍴t←MONTHS ⎕S 0 3⊢str      ⍝ look for the month as a string. If not found
              ymd←3↑FI str                ⍝ grab the 1st 3 numbers found
              ymd←ymd[⍒(2×31<ymd)+ymd<12] ⍝ put in correct order
          :Else                           ⍝ otherwise (if found)
              (pos mon)←0 1+1⊃t
              :If ~0∊⍴t←FI pos↑str        ⍝ any number before the month? (e.g. 2 May 2021)
                  ymd←⌽⍣(31<⍬⍴t)⊢(1↑FI pos↓str),mon,t
              :Else
                  ymd←¯1⌽mon,2↑FI pos↓str
              :EndIf
          :EndIf
     ⍝ Now grab the time
          dt←ymd,FI⍕'(\d+):(\d+):(\d+)'⎕S'\1 \2 \3'⊢str
      :EndIf
    ∇

:EndClass