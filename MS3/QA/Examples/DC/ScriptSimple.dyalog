 msg←Test dummy;output
⍝ Test /Examples/DC/ScriptSimple
 Selenium.Click'reverse'
 output←Selenium.Find'p1'
 msg←output Selenium.WaitFor 'Thank' 'Expected output was not produced'