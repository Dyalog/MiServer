 msg←Test dummy;result;m
 ('inp'∘,¨⍕¨⍳5)Selenium.SendKeys¨'Morten' 'Kromberg' '52' 'secret'(Selenium.Keys.Right)
 result←Selenium.Find¨'out'∘,¨⍕¨⍳5
 {~0∊∊⍴¨result.Text}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 m←(,⊂'Entered: ')≡∪9↑¨result.Text
 m←m∧'(optional)Morten' 'Kromberg' '52' '(that''s a secret)'(,'6')≡9↓¨result.Text
 msg←(~m)/'Expected output was not produced.'