:Class ReverseJS : MiPage

    :Include #.HTMLInput

    :Field Public Name←''           ⍝ Name in edit field
    :Field Public Action←''         ⍝ All our buttons will have this name
    ⍝ Uses reversetext.js

    ∇ Render req;html;tbl
      :Access Public
      DoAction                      ⍝ If a button was pressed, deal with it
     
      req.Title'Demo Server: Roll Over ',Name
      'src="reversetext.js"'req.Script''
     
      btn←'Action'Button'Reverse' 'onclick="ReverseText(''Name'')"' ⍝ A button named 'Action' with Caption 'Reverse'
      btn,←'Action'Submit'Clear'    ⍝ ... another button named 'Action'
     
      tbl←2 2⍴⊂''                   ⍝ A 2x2 Table
      tbl[1;1]←⊂'Text:'             ⍝ Legend for the edit field
      tbl[1;2]←⊂'Name'Edit Name     ⍝ An "Edit" called "Name" containing the Name
      tbl[2;2]←⊂btn                 ⍝ Buttons into the 4th cell
     
      html←Table tbl                ⍝ Make into a HTML table
      html←req('submit'Form)html    ⍝ Put a 'submit' form around it
      html,←'a href="/"'Enclose'Home'
     
      html←('h2'Enclose'Roll over...'),html
      req.Return html
    ∇

    ∇ DoAction
      :Select Action
      :Case 'Clear' ⋄ Name←''
      :Case 'Reverse' ⋄ Name←⌽Name
      :EndSelect
    ∇
                                             
:EndClass