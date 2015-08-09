:class TTTClient :MiPageSample
⍝ Control:: TTT (Client)
⍝ Description:: Play text-based Tic Tac Toe while storing data client side
      
    ∇ Compose;board;row;bcap;rows;cell;cells;xo;reset;size;width
      :Access public
     
      size←3                   ⍝ Board size
      wins←{(1 1⍉⌽⍵)⍪(1 1⍉⍵)⍪(⍉⍵)⍪⍵}size size⍴⍳size*2
      xos←' X ' ' O '          ⍝ Symbol for each player
      width←⊃⌈/⍴¨,¨xos         ⍝ Cell size
      xos←width↑¨xos           ⍝ Equalize lengths
      blank←⊂width⍴''          ⍝ Empty cells of matching width
      all←,(size↑⎕A)∘.,⍕¨⍳size ⍝ All cell names
     
      board←Add _.table                 ⍝ Framework for board
      bcap←board.Add _.caption          ⍝ Caption
      bcap.Add¨(_.big'Board')_.br _.hr  ⍝ ... and its content
      rows←board.Add¨size/_.tr          ⍝ Board
     
      :For row :In ⍳size
          cell←(row⌷rows).Add¨size/_.td ⍝ Add single row of cells
          cells←cell.Add⊂_.pre,blank    ⍝ Keep constant width
          cells.id←(size↑⎕A),¨⍕row      ⍝ Spreadsheet cell naming style
          cells.On⊂'click' '',⊂{⍵('#',⍵)'html'}¨all ⍝ Send board along
      :EndFor
     
      Add _.br
      player←Add _.p'Next: '
      xo←player.Add _.span(⊃xos) ⍝ Placeholder for symbol
      xo.id←'xo'
      reset←Add _.button'Clear board'
      reset.id←'reset'
      reset.On'click'
    ∇

    ∇ js←APLJax;curr;reset;ccc;next ⍝ Universal callback function
      :Access public
      js←''
      reset←'reset'≡_what                ⍝ Did user click Reset?
      ccc←Get¨all                        ⍝ Client Condition Capture
      ccc←{⍵↑⍨¯1+⍵⍳'<'}¨ccc              ⍝ Strip script content
      :If reset∨(Won ccc)∨~blank∊ccc     ⍝ Reset the board?
          js,←⊃,/('#',¨all)Replace¨blank ⍝ Client
          →reset/0
      :EndIf
      curr←all⍳⊂_what                 ⍝ Index of chosen cell
      next←Who ccc                    ⍝ Who is current player?
      :If blank≡curr⌷ccc              ⍝ Is selection available?
          js,←('#',_what)Replace next ⍝ Client update
          ccc[curr]←⊂next             ⍝ Server update
          :If Won ccc
              js,←Msg next,' wins'
          :ElseIf ~blank∊ccc
              js,←Msg'Tie game'
          :Else
              js,←'#xo'Replace Who ccc   ⍝ Update footer
          :EndIf
      :Else
          js←Msg'That spot is occupied'
      :EndIf
    ∇
    
    Who←{xos⊃⍨⊃⍋+/xos∘.≡⍵}
    Won←{1∊∧/xos∘.≡⍵[wins]}          ⍝ Scalar boolean if any player won
    Msg←{Execute'alert("',⍵,'!")'}   ⍝ Generate JavaScript for alert popup

:endclass
