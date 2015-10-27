 msg←Test dummy;dtp
 dtp←Selenium.Find'dtp'
 ⍝ Will fail in 1:3600
 msg←'Expected date not found'/⍨~{(⍎dtp.GetAttribute⊂'value')≡(¯4↑12)|4↑⎕TS}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated