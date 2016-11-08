 msg←Test dummy;locs;Fi;i;offset;imgs;order;orderedlis;output;repetition;repetitions;orderedimgs;next
 Fi←{⍎(⍕⍵)∩⎕D,','}    ⍝ Fix input
 output←Find'output'
 repetitions←3
 :For repetition :In ⍳repetitions
     imgs←⌷'CssSelectors'Find'#sort img'
     order←(⊃⌽)¨imgs.GetAttribute⊂,⊂'id' ⍝ the <img> tags have ids DuckX
     locs←Fi¨imgs.Location
     orderedimgs←imgs[⍋order]
     :For i :In ⍳12
         :If ∨/'You succeeded'⍷output.Text ⋄ :Leave ⋄ :EndIf ⍝ finished?
         :While ∨/5<|offset←(i⊃locs)-Fi(Find'Duck',i⊃⎕A).Location ⍝ Do we need to move it significantly?
             orderedimgs[i]DragAndDropToOffset offset ⍝ do it!
             :If i∊4 8 ⍝ Last img in row will not move there, so we have it slide in place by moving...
                 next←i⌷'CssSelectors'Find'#sort img' ⍝ ... the one that is occupying the desired position
                 i←⎕A⍳⊃⌽next.GetAttribute,⊂'id'
             :EndIf
         :EndWhile
     :EndFor
     :If repetition=repetitions ⋄ :Leave ⋄ :Else
         Click'shuffle' ⋄ ⎕DL 0.2
     :EndIf
 :EndFor
 msg←output WaitFor'You succeeded'
