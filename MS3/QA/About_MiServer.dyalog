 msg←Test dummy;D;A;Dobj;Aobj

 (D A)←'Dyalog-D' 'GitHub'

 ⍝ Check for presence logo and link
 :If 0=⍴msg←∊¯5↓(0=Dobj Aobj←Find¨D A)/D A,¨⊂' not found and '

 ⍝ Check for correct logo and alternative text
 :AndIf 0=⍴msg←5↓∊{(~∨/D⍷Dobj.GetAttribute,⊂⍵)/' and wrong ',⍵}¨'src' 'alt'

 ⍝ Check for correct link address
 :AndIf 0=⍴msg←'wrong link'/⍨~∨/'github.com'⍷Aobj.GetAttribute,⊂'href'

 ⍝ Check for correct link text
     msg←WaitFor⍨A
 :EndIf
