 msg←Test dummy;data;result;expect;fname;ok
 fname←Selenium.Find'fname'
 'fname'Selenium.SendKeys'Morten'
 :If ~{'Morten'≡fname.GetAttribute⊂'value'}Selenium.Retry ⍬
     msg←'Sendkeys could not update fname' ⋄ →0
 :EndIf
 Selenium.Click'Reset'
 :If ~{0=⍴fname.GetAttribute⊂'value'}Selenium.Retry ⍬
     msg←'Reset did not work' ⋄ →0
 :EndIf

 'fname' 'lname'Selenium.SendKeys¨'Morten' 'Kromberg'
 expect←'Hello, Morten Kromberg!'
 Selenium.Click'Submit'
 result←Selenium.Find'result'
 ok←{expect≡result.Text}Selenium.Retry ⍬ ⍝ Wait (a bit) to see if it gets populated
 msg←(~ok)/'Submit did not produce expected output'
