 msg←Test dummy;result;output;txt

 ⍝ The dialog should not be visible
 :If 0∊⍴msg←'dialog'WaitFor''

 ⍝ Clicking the button should open it
     Click'show'
 :AndIf 0∊⍴msg←'dialog'WaitFor'This is'

⍝ Closing the window should work too
     Click'dialog_closebutton'
     msg←'dialog'WaitFor''
 :EndIf
