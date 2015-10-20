 msg←Test dummy;output

 output←Selenium.Find¨'bc1' 'bc2'
 msg←'Barcode images did not have the expected size'/⍨{(116 116)(174 147)≡output.Size.(Height Width)}Selenium.Retry ⍬