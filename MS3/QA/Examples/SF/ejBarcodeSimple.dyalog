 msg←Test dummy;output;ok

 output←Selenium.Find¨'bc1' 'bc2'
 ok←{(116 116)(174 147)≡output.Size.(Height Width)}Selenium.Retry ⍬ ⍝ Wait to see if it gets populated
 msg←(~ok)/'Barcode images did not have the expected size'