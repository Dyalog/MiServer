 msg←Test dummy;dtp
 dtp←Find'dtp'
 ⍝ Will fail in 1:3600
 msg←'Expected date not found'/⍨~{(⍎dtp.GetAttribute⊂'value')≡4↑⎕TS}Retry ⍬ ⍝ Wait (a bit) to see if it gets populated