 msg←Test dummy;result;m
 result←Selenium.Find¨'alpha' 'beta' 'gamma'
 {~0∊∊⍴¨result.Text}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 m←result.Text≡3⍴⊂,'0'
 msg←(~m)/'Expected output was not produced.'