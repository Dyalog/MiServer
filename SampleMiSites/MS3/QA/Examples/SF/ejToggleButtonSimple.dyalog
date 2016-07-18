 msg←Test dummy;button

 button←'CssSelector'Find'.e-btn'

 ⍝ Check if button toggles on
 Click button
 :If 0=⍴msg←button WaitFor'That was a BOLD move!' 'First toggle did not happen'

 ⍝ Check if button toggles off
     Click button
     msg←button WaitFor'Toggle me if you dare...' 'Second toggle did not happen'
 :EndIf