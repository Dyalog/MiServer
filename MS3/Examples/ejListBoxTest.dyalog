:Class ejListBoxTest : MiPageSample
⍝ Demonstrate the SyncFusion ejListBox widget
    
    ∇ Render
      :Access Public
⍝ The matrix argument contains the name of the column in the first row
⍝ Because the widget accepts up to 3 arguments we need to enclose it.
      Add _SF.ejListBox(⊂⍪'text' 'one' 'two' 'three' 'four')
    ∇
    
:EndClass