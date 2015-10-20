 msg←Test dummy;result
 ('inp'∘,¨⍕¨⍳5)Selenium.SendKeys¨'Morten' 'Kromberg' '52' 'secret'(Selenium.Keys.Right)
 result←Selenium.Find¨'out'∘,¨⍕¨⍳5
 {~0∊∊⍴¨result.Text}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 msg←'Expected output was not produced.'/⍨result.Text≢'Entered: '∘,¨'(optional)Morten' 'Kromberg' '52' '(that''s a secret)' '6'