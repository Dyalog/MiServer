 msg←Test dummy;fname;fnameValue

 fnameValue←{⍵≡fname.GetAttribute⊂'value'}

 ⍝ First, test that the input field is accepting input
 fname←Find'fname'
 fname SendKeys'Morten'
 :If 0∊⍴msg←'Could not type into fname'/⍨~fnameValue Retry'Morten'

 ⍝ Test that Reset actually clears the form
     Click'Reset'
 :AndIf 0∊⍴msg←'Reset did not work'/⍨~fnameValue Retry''

 ⍝ Test that the submit button works
     fname'lname'SendKeys¨'Morten' 'Kromberg'
     Click'Submit'
     ⎕DL 0.1 ⍝ wait for the page to refresh
     msg←'output'WaitFor'Hello, Morten Kromberg!' 'Submit did not produce expected output'
 :EndIf
