 msg←Test dummy;output
⍝ Test /Examples/DC/ScriptSimple
 Selenium.Click'reverse'
 output←Selenium.Find'p1'
 msg←'Expected output was not produced.'/⍨~{⊃'Thank'⍷output.Text}Selenium.Retry ⍬