:Class Bingo : MiPage

    ⎕ML←1

    :Include #.HTMLInput

⍝ event and what are the standard variables used by JQ.On and APLJax
⍝ event is the event that was triggered
⍝ what is the id attribute of the element that the event was triggered upon
    :field public event
    :field public what

⍝ drag and receiver are created by JQUI.Droppable
⍝ drag is the id attribute of the element that was dragged
⍝ receiver is the id attribute of the element where the dragged element was dropped
    :field public drag
    :field public receiver


⍝ state is used to keep track of the board state
    :field state

⍝ when you tell HTMLInput.Table to generate unique ids for its cells the ids are in the format rRcC
⍝ where R is the row number, and C is the column number.  Example: r3c2 is the cell in row 3 column 2
⍝ parserc is a very simple utility to extract the row and column numbers from such an id
    parserc←{2⊃⎕vfi ⍵{⍵\⍵/⍺}⍵∊⎕D}

    ∇ html←Render req;left;right
      :Access Public
      html←'h2'Enclose'Bingo Sample'
     
     
 ⍝ state is the board state, when an element is dragged and dropped onto the board
 ⍝ the corresponding cell of state will be updated with the row and column of the element that was dropped
      state←3 3⍴⊂⍬ ⍝ initialize board state
     
⍝ ScriptFollows reads the commented text on the following lines and
⍝   converts it into a character string to include in the HTML
⍝   This is useful for javascript, css, even raw HTML
     
      ScriptFollows req.Style'' ⍝ #.HTTPRequest.Style
      ⍝ td{text-align:center;vertical-align:middle;}
      ⍝ .draggable{width:50px;height:50px;padding:0.5em;float:left;margin:10px 10px 10px 0;background-color:yellow;}
      ⍝ .droppable{width:60px;height:60px;padding:0.5em;float:left;margin:10px;}
     
     
⍝ create the left hand table and give it each cell a class of "droppable"
      left←'left'Table(3 3⍴⊂SP'')'border="1"' 'class="droppable"' '' 0 1
     
⍝ create the right  hand table and give it each cell a class of "draggable"
      right←'right'Table(3 3⍴⍳9)'' 'class="draggable"' '' 0 1
     
⍝ wrap both tables in a higher level table
      html,←Table(1 2⍴left right)'' 'cellpadding="5"'
     
⍝ set up items with a class of "draggable" as draggable
      html,←req #.JQUI.Draggable'.draggable'
     
⍝ set up items with a class of "droppable" as droppable, and allow things with a class of "draggable" to be dropped on them
      html,←req #.JQUI.Droppable'.droppable' '.draggable'
     
⍝ add a "Reset" link that just reloads the page
      html,←BR Anchor'Reset'req.Page
     
⍝ add click handler on elements with class "dropped" - tihs will be used to undo a dropped cell
      html,←req #.JQ.On('#left' '.dropped')'click'
    ∇


    ∇ html←APLJax req;js;cell;reset ⍝ APLJax handles all AJAX requests from the browser
      :Access public
     
⍝ event will be the event triggered and was set up by JQ.On (click event) and JQUI.Droppable (drop event)
      :Select event
     
      :Case 'drop' ⍝ an element was dropped
     
⍝ update the board by parsing the row and column of the receiver, and then using that as an index
⍝ into the board state to assign the row and column of the dragged element
          ((parserc receiver)⌷state)←⊂parserc drag
     
⍝ receiver is the id of where the dragged element (with id of drag) was dropped
⍝ the following jquery call...
⍝ - disables the "droppability" of the receiver
⍝ - replaces the HTML content of the receiver with the content of the element that was dropped
⍝ - adds the "dropped" class to the receiver thereby enabling the click handler on this cell for undo
          js←'$("#left #',receiver,'").droppable("disable").html($("#right #',drag,'").html()).addClass("dropped");'
     
⍝ the following jquery call disables the "draggability" of the item that was just dragged
          js,←'$("#right #',drag,'").draggable("disable");'
     
          :If ~(⊂⍬)∊state ⍝ all cells dropped?
              js,←'alert("All items moved!");' ⍝ add the javascript to notify the user
          :EndIf
     
⍝ build the JSON array that the browser will act upon by executing the javascript
          html←#.JSON.fromNVP('execute'js)
     
      :Case 'click' ⍝ an element with class "dropped" was clicked - this is an "undo"
          cell←parserc what ⍝ get the row and column of what was clicked
     
⍝ the cell in state contains the row and column of the item that was dropped here
          reset←∊'rc',¨⍕¨(⊂cell)⊃state ⍝ reconstruct the id for the dropped item
     
⍝ the following jquery call...
⍝ - replaces the HTML content with a non-breaking space (empties the table cell)
⍝ - re-enables the "droppability" of the cell
⍝ - removes the "dropped" class (thereby disabling the click handler on this cell)
          js←'$("#left #',what,'").html("&nbsp;").droppable("enable").removeClass("dropped");'
     
⍝ the following jquery call enables the "draggability" of the cell that was previously dropped
          js,←'$("#right #',reset,'").draggable("enable");'
     
⍝ build the JSON array that the browser will act upon by executing the javascript
          html←#.JSON.fromNVP('execute'js)
     
⍝ update the board state
          (cell⌷state)←⊂⍬
      :EndSelect
     
    ∇
:EndClass