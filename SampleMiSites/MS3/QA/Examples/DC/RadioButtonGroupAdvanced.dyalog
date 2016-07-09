 msg←Test dummy;t2

⍝ Test if it is there at all
 :If 0=⍴msg←'Radio button not found'/⍨0≡t2←Find'Transport_2'

⍝ Test if it is checked
     msg←'RadioButton not checked as expected.'/⍨'true'≢t2.GetAttribute⊂'checked'
 :EndIf