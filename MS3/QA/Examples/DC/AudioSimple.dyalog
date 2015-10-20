 msg←Test dummy
⍝ This checks the presense of the audio tag
 msg←'Control not found'/⍨~{0≢Selenium.Find'sound'}Selenium.Retry ⍬