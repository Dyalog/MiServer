:Class Reverse : MiPage

    :Include #.HTMLInput

    :Field Public Name←''             ⍝ Name of edit field
    :Field Public Action←''           ⍝ All action buttons have this name

    ∇ Render req;html
      :Access Public
      DoAction                        ⍝ If a button was pressed, deal with it
     
      html←'h2'Enclose'Reverse Text Example' ⍝ display a headline
      html,←'<br/>Enter Text: '
      html,←'Name'Edit Name           ⍝ An "Edit" called "Name" containing the Name
      html,←'<br/><br/>'
      html,←'Action'Submit'Reverse'   ⍝ A button named 'Action' with Caption 'Reverse'
      html,←'Action'Submit'Clear'     ⍝ ... another button named 'Action'
     
      html←req('post'Form)html        ⍝ Put a 'submit' form around it
     
      req.Return html
    ∇

    ∇ DoAction
      :Select Action
      :Case 'Clear' ⋄ Name←''
      :Case 'Reverse' ⋄ Name←⌽Name
      :EndSelect
    ∇
    
:EndClass