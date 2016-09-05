 msg←Test dummy;locs;loc;Fi;i;offset;lis;imgs;X;order;orderedlis;li;adj;t;output;repetition
 Fi←{⍎(⍕⍵)∩⎕D,','}    ⍝ Fix input
 adj←0                ⍝ are we to adjust by ¯80 pixels?
 output←Find'output'
 t←3⊃⎕AI              ⍝ current time
 :For repetition :In ⍳3
     lis←⌷'CssSelectors'Find'#sort li'
     imgs←⌷'CssSelectors'Find'#sort img'

     order←(⊃⌽)¨imgs.GetAttribute⊂,⊂'id' ⍝ the <img> tags have ids DuckX
     locs←{1+Fi ⍵}¨lis.Location          ⍝ adjusted 1 pixel for border thickness
     orderedlis←lis[⍋order]

     :For i :In ⍳11
         :If ∨/'You succeeded'⍷output.Text ⍝ finished?
             :Leave
         :EndIf

         X←i⊃⎕A ⍝ next tile to be considered
         ⍝ Do we need to move it significantly?
         :While ∨/5<|offset←(loc←i⊃locs)-Fi(Find'Duck',X).Location
           ⍝  :If ⎕AI[3]≥10000+t ⍝ catch infinite looping
           ⍝      msg←'Timed out'
           ⍝      →0
           ⍝  :EndIf
             ⍝ We may need to adjust by ¯80 pixels if we are moving a tile to the last column
             offset[1]-←adj×80×(⊃loc)=⌈/⊃¨locs
             adj←~adj                                ⍝ if we adjusted, try not adjusting and vice versa
             orderedlis[i]DragAndDropToOffset offset ⍝ do it!
         :EndWhile
     :EndFor
     :If 3=repetition
         :Leave
     :Else
         Click'shuffle' ⋄ ⎕DL 0.1
     :EndIf
 :EndFor
msg←output WaitFor'You succeeded'
