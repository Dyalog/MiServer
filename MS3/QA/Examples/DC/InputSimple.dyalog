﻿ msg←Test dummy;result
 ('inp'∘,¨⍕¨⍳5)SendKeys¨'Morten' 'Kromberg' '52' 'secret'Right
 result←Find¨'out'∘,¨⍕¨⍳5
 :If {~0∊∊⍴¨result.Text}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
     msg←'Expected output was not produced.'/⍨result.Text≢'Entered: '∘,¨'(optional)Morten' 'Kromberg' '52' '(that''s a secret)' '6'
 :Else
     msg←'Missing output.'
 :EndIf
