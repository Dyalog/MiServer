 msg←Test dummy;data;result;expect;fname;ok

 ⍝ First, test that the input field is accepting input
 fname←Find'fname'
 'fname'SendKeys'Morten'
 :If 0∊⍴msg←'Sendkeys could not update fname'/⍨~{'Morten'≡fname.GetAttribute⊂'value'}Retry ⍬

 ⍝ Test that Reset actually clears the form
     Click'Reset'
 :AndIf 0∊⍴msg←'Reset did not work'/⍨~{0=⍴fname.GetAttribute⊂'value'}Retry ⍬

 ⍝ Test that the submit button works
     'fname' 'lname'SendKeys¨'Morten' 'Kromberg'
     Click'Submit'
     ⎕DL 0.1 ⍝ wait for the page to refresh
     msg←'output'WaitFor'Hello, Morten Kromberg!' 'Submit did not produce expected output'
 :EndIf