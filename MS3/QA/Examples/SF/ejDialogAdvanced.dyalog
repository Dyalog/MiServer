 msg←Test dummy;TryClick

 ⍝ 'msg if not clickable' 'msg if clickable' TryClick 'elementid'
 TryClick←{90::⊃⍺ ⋄ ⊃⌽⍺⊣Click ⍵}

 :If 1 ⍝ For consistency, and to make it easy to insert more tests

 ⍝ Is the dialog open and modal so it blocks the banner?
 :AndIf 0∊⍴msg←'' 'Dialog not modal'TryClick'banner'

 ⍝ Check dialog content
 :AndIf 0∊⍴msg←'dialog'WaitFor'Please'

 ⍝ Whack the smiley
 :AndIf 0∊⍴msg←'popup'WaitFor'Ouch'⊣Click'whack'

 ⍝ Ensure that the original dialog does not block the popup
 :AndIf 0∊⍴msg←'Parent blocks child' ''TryClick'popup'

 ⍝ Close the original dialog, and check mode
 :AndIf 0∊⍴msg←'Failed to unblock' ''TryClick'banner'⊣⎕DL 0.2⊣Click'dialog_closebutton'

 ⍝ Re-invoke the dialog and check that it blocks the orphan popup
 :AndIf 0∊⍴msg←'' 'Dialog not modal'TryClick'popup_closebutton'⊣Click'show'

 :EndIf
