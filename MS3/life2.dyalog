:Class life2 : MiPageSample
    ⎕ML←1

⍝ These fields are for future use when we want to allow the user
⍝ to define the size of his board and delay between generations
    :field rows←23             ⍝ board rows
    :field cols←55             ⍝ board columns

    :field public htmlBoard←'' ⍝ the html returned when the user edits the board

    :field initialized←0       ⍝ flag to indicate if game has been initialized

    lifegen←{⊃1 ⍵∨.∧3 4=+/,¯1 0 1∘.⊖¯1 0 1∘.⌽⊂⍵} ⍝ run a generation of John Conway's "Game of Life", courtesy of John Scholes

    ∇ Init
    ⍝ initialize pattern and board
      :Implements constructor
      :Access public
      generations←0 ⍝ keep track of the number of generations
      pattern←3 3⍴0 1 1 1 1 0 0 1 0  ⍝ our initial pattern
      board←pattern{(⌊0.5×(⍴⍺)-⍵){⍺[1]⊖⍺[2]⌽⍵}⍵↑⍺}rows cols ⍝ center pattern in initial board
      prev←⍬ ⍝ previous generation
      stasis←0
      initialized←1 ⍝ indicate we've been initialized
    ∇

    ∇ Render
      :Access Public
     
      Add h2'Conway''s Game of Life'
     
      ⍝ define the control buttons
      ctrl←Button'Start' 'onclick="runLife()"'
      ctrl,←2 SP'stop'Button'Stop' 'onclick="stopLife()"'
      ctrl,←2 SP'reset'Button'Reset'
      ctrl,←2 SP Button'Step' 'onclick=''$("body").trigger("nextGen")'''
      ctrl,←2 SP'edit'Button'Edit'
      ctrl,←2 BRA 2 SP Button'Video' 'title="Conway''s Game of Life in APL" onclick=''$("#video").slideToggle("slow")'''
      ctrl←'div id="ctrl"'Enclose ctrl
     
      ⍝ define the editor buttons
      edit←'div id="editor" style="display: none;"'Enclose 2 BRA('save'Button'Save'),2 SP'cancel'Button'Cancel'
     
      html,←ctrl,edit
     
      html,←2 BRA'div id="board"'Enclose formatBoard board
      Add iframe('' 'id="video" width=480 height=360 src="http://www.youtube.com/embed/a9xAKttWgP4" frameborder="0" allowfullscreen="yes" style="display:none;"')
      html←'div align="center"'Enclose html
      Add Handler'body' 'nextGen' '' '#board'
      Add Handler'#reset,#cancel,#edit' 'click' '' '#board'
      Add Handler'#save' 'click'('htmlBoard' '#board' 'html')'#board'
      Add Script #.HTMLUtils.ScriptFollows
⍝      var t; var running=0; var delay=50;
⍝      function nextGen(){$("body").trigger("nextGen"); modified=0; t=setTimeout("nextGen()",delay);};
⍝      function runLife(){if (!running){running=1; nextGen();}};
⍝      function stopLife(){clearTimeout(t); running=0;};
⍝      $(function(){$("body").on("click", "span", function(e){$(this).html("-"==$(this).html()?"@":"-")});});
    ∇

    ∇ html←APLJax req;html;toggleButtons ⍝ if the request is from APLJax
      :Access Public
      html←''
      toggleButtons←JS'$("#editor,#ctrl").toggle();'  ⍝ jQuery to toggle button sets
      :Select _event
     
      :Case 'click'
          :Select _what
          :Case 'save'
              board←(⍴board)⍴{'@'=∊('span'∘≡¨⍵[;2])/⍵[;3]}⎕XML htmlBoard
              html,←toggleButtons
          :Case 'edit'
              html←(formatEditBoard board),toggleButtons
              :Return
          :Case 'cancel'
              html,←toggleButtons
          :Case 'reset' ⍝ "reset" button clicked
              Init ⍝ reinitialize the board
          :Else
              ... ⍝ unknown click? this should never happen
          :EndSelect
     
      :Case 'nextGen'
          prev,←⊂board ⋄ prev←(-5⌊⍴prev)↑prev ⋄ board←lifegen board ⋄ generations+←~stasis
      :Else
          ... ⍝ unknown event? this should never happen
      :EndSelect
     
      html,←formatBoard board
      :If (⊂board)∊prev
          statis←1
          html,←BR'h4 align="center"'Enclose'Stasis achieved after ',(⍕generations),' generations.'
          html,←JS'$("#stop").click();'
      :EndIf
    ∇

    formatEditBoard←{('pre style="font-family:Monospace;width:',(⍕7×cols),'px;"') Enclose∊(↓'<span>'∘,¨(,∘'</span>')¨'-@'[1+⍵]),¨⊂CRLF}
    formatBoard←{('pre style="font-family:Monospace;width:',(⍕7×cols),'px;"')Enclose,'-@'[1+⍵],(rows 2)⍴CRLF}

    ∇ r←lifeScript delay
    ⍝ build the script to run life in a timed loop
     
    ∇
:EndClass