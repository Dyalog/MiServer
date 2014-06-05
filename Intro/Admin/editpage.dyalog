:Class EditPage : MildPage

    :Include #.HTMLInput              ⍝ Useful functions for creating HTML pages

    :Field Public FileName←''         ⍝ Name of page to edit
    :Field Public Contents←''         ⍝ 
    :Field Public Message←''        
    :Field Public Action←''           ⍝ All action buttons have this name
    :Field Private Loaded←''          ⍝ The Loaded File     
  
    ∇ Render req;html;⎕TRAP;z
      :Access Public
      ⎕TRAP←0 'S'
     
      DoAction                        ⍝ If a button was pressed, deal with it
     
      html←'<H1>Editing File ',Loaded,'</H1>'
      html,←'Save As: ',('FileName'Edit FileName),' ',('Action'Submit'Save'),' ',('Action'Submit'Reload')
      html,←(0≠⍴Message)/'<br><br>',Message,'<br>'
      html,←'<br><b>Edit Source:</b> (and click <a href="',FileName,'" target="_new">HERE</a> to test after saving)<br>'
     
      html,←'Contents'MultiEdit(100 100)Contents'class=apl' ⍝ An "Edit" called "Name" containing the Name
      html,←'<br><br>'
     
      html←req('post'Form)html        ⍝ Put a 'submit' form around it
     
      req.Title'Editing File ',Loaded
      req.Return html
    ∇

    ∇ DoAction;file
      file←req.Server.Root,{((1↑⍵)∊'/\')↓⍵}FileName
     
      :Select Action
      :Case 'Save'
          ⎕SE.UnicodeFile.Write file Contents
          Message←'File "',FileName,'" updated.'
      :CaseList '' 'Reload'
          Message←'File "',FileName,'" loaded.'
      :EndSelect
      Contents←⎕SE.UnicodeFile.ReadText file
      Loaded←FileName
    ∇
    
:EndClass