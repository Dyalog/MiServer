:Class ejDatePickerAdvanced : MiPageSample
⍝ Control:: _SF.ejDatePicker
⍝ Description::  advance functionality.
⍝ Show 2 calendars to select reservation dates.
⍝ The first date cannot be before today and the second cannot be the
⍝ date before tomorrow. Its default is 1 week after check in.

    ∇ Compose;today;fromidn;minto;tbl;tr;td;head;todate;from
      :Access Public
      today←3↑⎕TS
      fromidn←dateToIDN today
     
      Add _.h1'Drop ↓ Inn'
      Add _.h2'Hotel reservation system'
     
    ⍝ The table header
      tbl←Add _.table
      head←tbl.Add _.thead
      (head.Add _.tr).{Add _.th ⍵}¨'Check in' 'Check out'
     
      tr←tbl.Add _.tr
    ⍝ The in date
      td←tr.Add _.td
      from←'in'td.Add _SF.ejDatePicker today'yyyy/MM/dd'
      from.Set'minDate'(newDate today)
      from.On'change' 'setNewDate',⊂('in' 'model' 'value')('out' 'eval' '$("#out").ejDatePicker("model.value")')
     
    ⍝ The out date
      td←tr.Add _.td
      todate←IDNToDate fromidn+7
      TO←'out'td.Add _SF.ejDatePicker todate'yyyy/MM/dd'
      minto←newDate IDNToDate fromidn+1
      TO.Set'minDate'minto
    ∇

    newDate←{'⍎new Date("',(⍕⍵),'")'}
    dateToIDN←{2 ⎕NQ'.' 'datetoidn'⍵}
    IDNToDate←{3↑ 2 ⎕NQ'.' 'idntodate'⍵}

    ∇ r←setNewDate;in;out
      :Access public
    ⍝ Reset minimum reservation check out date
      in←dateToIDN stringToDate⍕Get'in'
      r←'minDate'TO.Update newDate IDNToDate in+1
     
      out←dateToIDN stringToDate⍕Get'out'
     
    ⍝ If the new IN date is not before the OUT date we reset OUT to 1 week after
      :If in≥out
          r,←'value'TO.Update newDate IDNToDate in+7
      :EndIf
    ∇

    MONTHS←↓12 3⍴'JanFebMarAprMayJunJulAugSepOctNovDec'

    FI←{(b v)←⎕vfi ⍵ ⋄ b/v}

    ∇ ymd←stringToDate str;pos;mon;t
     ⍝ str is of the genre "Wed Aug 05 2015 00:00:00 GMT-0400 (Eastern Daylight Time)"
     ⍝ We need to weed out the day of the week and the time
      str←(+/∧\' '=str)↓str           ⍝ remove the leading spaces
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
    ∇

:EndClass