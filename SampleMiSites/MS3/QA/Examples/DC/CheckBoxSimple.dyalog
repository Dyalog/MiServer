 msg←Test dummy;Value;Wrong;cb;ClickDoesNotMake
 Value←{⍵.GetAttribute⊂'value'}

 ClickDoesNotMake←{
     msg⊢←' wrong state',⍨id←cb.GetAttribute⊂'id'
     ⍵≢Value cb⊣Click id
 }

 msg←''

 ⍝ Each If: failure → set msg and quits
 :If 0≡cb←Find'cb1'
     msg←'cb1 not found'
 :ElseIf 'unchecked'≢Value cb
     msg←'cb1 wrong state'
 :ElseIf ClickDoesNotMake'checked'
 :ElseIf ClickDoesNotMake'unchecked'
 :ElseIf 0≡cb←Find'cb2'
     msg←'cb2 not found'
 :ElseIf 'indeterminate'≢Value cb
     msg←'cb2 wrong state'
 :ElseIf ClickDoesNotMake'unchecked'
 :ElseIf ClickDoesNotMake'checked'
 :ElseIf ClickDoesNotMake'indeterminate'
 :Else
     msg←''
 :EndIf
