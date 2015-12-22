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
 :ElseIf ClickDoesNotMake'checked'

 :ElseIf 0≡cb←Find'cb2'
     msg←'cb2 not found'
 :ElseIf 'unchecked'≢Value cb
     msg←'cb2 wrong state'
 :ElseIf ClickDoesNotMake'checked'

 :ElseIf 'checked'≢Value cb←Find'cb1'⊣⎕DL 0.2
     msg←'cb1 unexpected change'
 :ElseIf ClickDoesNotMake'indeterminate'
 :ElseIf ClickDoesNotMake'unchecked'
 :ElseIf ClickDoesNotMake'checked'
 :Else
     msg←''
 :EndIf
