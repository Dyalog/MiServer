﻿:Class ejCheckBoxAdvanced : MiPageSample
⍝ Control:: _SF.ejCheckbox
⍝ Description:: Use callback to toggle checkboxes and whether they allow the indeterminate value 

⍝ This example shows how to use the SyncFusion CheckBox widget

⍝ Three series of checkboxes are displayed in a table. They can all be ticked.
⍝ The first one of each line is tristate, that is it can be in one of three states.
⍝ It is ticked if all the boxes to its right are ticked, it is unticked if all the ones to its
⍝ right are not ticked and it is shown as a square if there is a mixture of ticked and unticked
⍝ to its right.
⍝ Furthermore, if it is clicked it turns ON or OFF the boxes to its right to match its own state.
⍝ Finally, a single box on a fourth row is used to turn ON/OFF all the boxes on top of it.
⍝ It is also tristate and will show if all the boxes above are all ON or all OFF or mixed. 

⍝ To specify that a check box is checked we set the option 'checked' to TRUE using a 1.
⍝ To specify that a check box can be in 3 states we set the 'enableTriState' option to TRUE.
⍝ When a box is tristate the option 'checkState' is used to specify which of the 3 states it is in:
⍝ Check, Uncheck or Indeterminate. Note that if the 'checked' option of a tristate box is also 
⍝ set to TRUE it will display as ticked even if the option 'checkState' is set to Uncheck.

    ∇ Compose;cb1;i;tbl;grp;cols;head;body;foot;last;allids;td;tr;c4;c0;r4
      :Access Public
    ⍝ We create a series of SyncFusion check boxes in a table
     
      Add _.p'Click boxes and see that the left and bottom boxes react automatically.'
     
      tbl←Add _.table
     
    ⍝ Column-wise formatting
    ⍝ Columns that did not receive formatting remain with the default
      grp←tbl.Add _.colgroup
      cols←grp.Add¨5/_.col ⍝ we don't actually need a col for each column
      cols.Set⊂'width="20"'
      cols[1].Set'style=background-color:lightgrey' 'align=center'
     
    ⍝ Header
      head←tbl.Add _.thead
      (head.Add _.tr).Add¨_.th,¨'S/U' '' 'C1' 'C2' 'C3' 'C4'
     
    ⍝ Body
      allids←,'C',¨⍕¨10 20 30∘.+0,⍳4
      body←tbl.Add _.tbody
      AllCB←⍬                           ⍝ All but the last check box will be here
      :For i :In 1 6 11
          tr←body.Add _.tr              ⍝ add a row to the table
          td←tr.Add _.td                ⍝ add a column to the row
          c0←(i⊃allids)td.Add _.ejCheckBox 0 ⍝ to which we add a check box
          'enableTriState'c0.Set _false ⍝ which is tristate
        ⍝ If TriState is disabled its checkState value is ignored
          'checkState'c0.Set'indeterminate'
          'showRoundedCorner'c0.Set _true
          tr.Add _.td                   ⍝ add an empty column for spacing
          r4←tr.Add¨4/_.td              ⍝ add 4 more columns for the 2-state boxes
          c4←allids[i+⍳4]r4.Add⊂_.ejCheckBox 0
          c4.Set⊂'size' 'medium'        ⍝ make them a bit bigger
          AllCB,←c0,c4
      :EndFor
     
    ⍝ We tell the server to call program 'chkBoxes' when any box changes
      AllCB.On⊂'change' 'chkBoxes'
     
    ⍝ Footer: add a box for all of them
      foot←'all'tbl.Add _.tfoot
      last←(foot.Add _.tr).Add¨2/_.td              ⍝ we only add 2, uneven rows allowed
      LastCB←1⌷last.Add(_.ejCheckBox 0)'Set all'   ⍝ we add a check box and some text
      LastCB.id←'forall'
      'enableTriState'LastCB.Set _false
      'checkState'LastCB.Set'indeterminate'
      'showRoundedCorner'LastCB.Set _true
    ⍝ We also tell the server to call program 'chkBoxes' when it changes and to record
    ⍝ 'state' which is to 'true' if it (the "model") is checked (FALSE otherwise).
      LastCB.On'change' 'chkBoxes'('state' 'model' 'checked')
     
    ⍝ Caption always goes on top, even if added later
      tbl.Add _.caption'Select any box'
     
    ⍝ Remember the ids and their values here
      Values←{0}¨Allids←'#',¨allids
    ∇

    UCI←  'uncheck'  'check'  'indeterminate'

    ∇ js←chkBoxes;i;mb;b;row;new;c0;uci;previous
      :Access public                          
      js←''
      :If _selector≡'#forall'                                    ⍝ turn everything ON or OFF for everything?
          previous←Values
          Values[]←new←'false'≢Get'state'                        ⍝ keep their setting on the server
          js←⊃,/(⊂'checked')((Values≠previous)/AllCB).Update new ⍝ reset those that have changed
      :Else         ⍝ must be a box above
          i←Allids⍳⊂_selector                                    ⍝ which one is it?
          :If ∨/b←i=1 6 11                                       ⍝ is it one of the left column?
              Values[row←i+0,⍳4]←new←1≠Values[i]                 ⍝ yes, what's its value?
              js←'enableTriState'(AllCB[i]).Update _false        ⍝ turn OFF triState for that box
              js,←⊃,/(⊂'checked')(AllCB[row]).Update new          ⍝ and set its checked state
     
          :Else     ⍝ it's one of the non tri-state boxes
              Values[i]←~Values[i]
              mb←0 1↓3 5⍴Values
             ⍝ Is the line itself all ON or OFF?
              b←<\6 11 16>i
              :If Values[i←b/1 6 11]≠new←0 1 ¯1[uci←0 4⍳+/b⌿mb]  ⍝ has it changed?
                  c0←i⊃AllCB
                  js←'enableTriState'c0.Update uci⊃_false _false _true
                  :If new≠¯1
                      js,←'checked'c0.Update new
                  :EndIf
                  Values[i]←new
              :EndIf
          :EndIf
      :EndIf
     
     ⍝ Finally, set the ALL button properly
      uci←0 12⍳+/,0 1↓3 5⍴Values                                 ⍝ what about the ALL button?
      js,←'enableTriState'LastCB.Update _false _false _true[uci] ⍝ prevent user from setting indeterminate
      :If uci<3
          js,←'checked'LastCB.Update uci-1
      :EndIf
    ∇

:EndClass