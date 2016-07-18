 msg←Test dummy;canvas
 canvas←'TagName'Find'canvas'
 :If 0=⍴msg←'canvas not found'/⍨0≡canvas
 :AndIf 0=⍴msg←'wrong role'/⍨'presentation'≢canvas.GetAttribute,⊂'role'
 :EndIf