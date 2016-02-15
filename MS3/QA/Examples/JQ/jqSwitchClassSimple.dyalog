 msg←Test dummy;output;button;Then;Is
 (output button)←Find¨'output' 'button'
 Is←{⍵≡output.GetAttribute⊂'class'}
 Then←{
     0=⍴msg←'Wrong initial class'/⍨~Is ⍺:msg
     0=⍴msg←'Missing transistion'/⍨Is ⍵⊣⎕DL 0.1⊣Click button:msg
     0=⍴msg←'Wrong final class'/⍨~Is ⍵⊣⎕DL 1:msg
     ''
 }

 :If 1 ⍝ for consistency and easy of inserting more tests

 :AndIf 0=⍴msg←'redclass'Then'yelclass' ⍝ switched class

 :AndIf 0=⍴msg←'yelclass'Then'yelclass' ⍝ make sure it doesn't toggle

 :EndIf