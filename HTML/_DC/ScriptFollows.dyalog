 r←ScriptFollows
 :Access public
 r←∊(⎕UCS 13 10)∘,¨{⍵/⍨'⍝'≠⊃¨⍵}{1↓¨⍵/⍨∧\'⍝'=⊃¨⍵}{⍵{((∨\⍵)∧⌽∨\⌽⍵)/⍺}' '≠⍵}¨(1+2⊃⎕LC)↓↓(⊃⊃⎕CLASS 1⊃⎕RSI).(180⌶)2⊃⎕SI