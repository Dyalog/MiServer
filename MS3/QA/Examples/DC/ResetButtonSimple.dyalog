 msg←Test dummy;fname;HasValue
 HasValue←{'Unexpected content.'/⍨⍵≢⍺.GetAttribute⊂'value'}
 fname←Find'fname'
 :If 0=⍴msg←fname HasValue''
     fname SendKeys'Morten'
 :AndIf 0=⍴msg←fname HasValue'Morten'
     Click'Reset'
 :AndIf 0=⍴msg←fname HasValue''
 :EndIf
