:Class Factors : MildPage
⍝ With Thanks to Jerry and Anna Brennan

    :Include #.HTMLInput            ⍝ Useful functions for creating HTML pages

    ⍝ --- Declare HTML Input Fields ---
    ⍝     Will be set on each POST or SUBMIT if present in input
    :Field Public Action←''         ⍝ All Buttons will have this name, Value will tell which one was pressed
    :Field Public Picker←''         ⍝ Dropdowns for guessing animals
    :Field Public nCells←'100'      ⍝ Number of Animals, used when starting new game
    :Field Public AgentCmds←''      ⍝ Hidden input field for driving the MS Agent

    ⍝ --- Additional fields can be declared, in order to preserve state when page (i.e. class) is modified ---
    ⍝     This allows smoother debugging, game does not need to restart on any change
    :Field Public State←⎕NS '' 

    TEST←1                            ⍝ Testing or "production" run?
    Initialised←0                     ⍝ Set to 1 when Init has found images files etc
    Colors←'white' 'red' 'yellow'
    enlist←{⎕ML←2 ⋄ ∊⍵}

      factors←{⎕ML ⎕IO←1          ⍝ Prime factors of ⍵ - from ws "dfns"
          ⍵{                      ⍝ note: ⎕wa>(⍵*÷2)×2*4.
              ⍵,(⍺÷×/⍵)~1         ⍝ append factor > sqrt(⍵).
          }∊⍵{                    ⍝ concatenated,
              (0=(⍵*⍳⌊⍵⍟⍺)|⍺)/⍵   ⍝ powers of each prime factor.
          }¨⍬{                    ⍝ remove multiples:
              nxt←⊃⍵              ⍝ next prime, and
              msk←0≠nxt|⍵         ⍝ ... mask of non-multiples.
              ∧/1↓msk:⍺,⍵         ⍝ all non multiples - finished.
              (⍺,nxt)∇ msk/⍵      ⍝ sieve remainder.
          }⍵{                     ⍝ from,
              (0=⍵|⍺)/⍵           ⍝ divisors of ⍵ in:
          }2,(1+2×⍳⌊0.5×⍵*÷2),⍵   ⍝ 2,3 5 .. sqrt(⍵),⍵
      }


    ∇ Render req;UseAgent;NL;atts;Board;Factors;board;bhtml;btns;html;user1;user2
      :Access Public ⍝ This method is called by framework each time Page is displayed
     
      UseAgent←∨/'MSIE'⍷req.GetHeader'user-agent' ⍝ Use MS Agent if browser is Internet Explorer
      NL←'<br>',CRLF
     
      :If Initialised ⋄ GetState ⋄ :Else ⋄ Init ⋄ :EndIf
      DoAction     ⍝ Take action based on user input
      PutState     ⍝ Store State
     
      ⍝ --- Prepare buttons for later use ---
      btns←('Action'Submit'Start New Game'),' with '       ⍝ Button for starting new game
      btns,←('nCells'DropDown(⍕¨3 4 5 6 7 10*2)(,nCells)),' cells.' ⍝ Dropdown for picking # of cells
     
      ⍝ --- Insert colors into grid
      html←bhtml ⍝ Take copy of base board HTML
      ((html='#')/html)←Colors[1+,Board] ⋄ html←enlist html ⍝ Insert colors
      html←req('Post'Form)html,NL,NL,btns,NL,NL             ⍝ Wrap the above in a 'Post' form so buttons will work
     
      user1←'<b>User 1</b><br><br>State<br>Info>'
      user2←'<b>User 2</b><br><br>State<br>Info>'
      html←Table(1 3⍴user1 html user2)'border=1'
     
      ⍝ --- Add OCX Controls for the Agent ---
      :If UseAgent
          html,←'AgentCmds'Hidden AgentCmds        ⍝ Hidden input field with Agent commands
          html,←'<object ID=''TruVoice'' width=0 height=0 CLASSID=''CLSID:B8F2846E-CE36-11D0-AC83-00C04FD97575'' CodeBase=''#VERSION=6,0,0,0''></object>',CRLF
          html,←'<object ID="AgentControl" ClassID="CLSID:D45FD31B-5C6E-11D1-9EC1-00C04FD7081F" CodeBase="#VERSION=2,0,0,0" style="display:none"></Object>',CRLF
          html,←JS'AgentDoCmds()'
          'src="/scripts/AgentDoCmds.js"'req.Script''   ⍝ JavaScript module which turns contents of AgentCmds into calls to OCX's
      :EndIf
     
      req.Return html
    ∇

    ∇ DoAction;cell;m
     
      :If 'StartNewGame'≡Action~' +' ⋄ Start ⋄ Action←''
      :ElseIf ∨/m←(4↑¨req.Data[;1])∊⊂'Cell' ⍝ Any input Named Cell** ?
          cell←,1+(⍴Board)⊤¯1+2⊃⎕VFI⊃req.Data[m⍳1;2]
          Board[⊂cell]←2⌊Board[⊂cell]+1
          AgentCmds←'moveto 100,100;show 1;play Greet;speak You have selected ',(⍕+/,Board≠0),' cells. '
          AgentCmds,←';play Explain;play Pleased;Hide 1'
      :EndIf
    ∇

    ∇ Init
      :If 2=State.⎕NC'Board' ⋄ GetState          ⍝ Retrieve saved state
      :Else ⋄ Start ⋄ :EndIf                     ⍝ ... or start a new game
      Initialised←1
    ∇

    ∇ Start;n;board;atts ⍝ New Game
      n←(⊃2⊃⎕VFI nCells)*0.5      ⍝ Board Size
      Board←(n,n)⍴0
      Factors←(⍴Board)⍴∪∘factors¨⍳⍴,Board ⍝ Compute all factors
     
      board←(⍴Board)⍴⍳×/⍴Board
      atts←'title="Factors: '∘,¨{2↓enlist', '∘,¨⍕¨⍵}¨Factors
      atts←atts,¨⊂'" style="height:30px; width:70px; font-size: 14px; background-color: #;"'
      bhtml←Table(⍕¨board){('Cell',⍺)Submit ⍺ ⍵}¨atts ⍝ Global Variable; reuse each time
     
      AgentCmds←'moveto 100,100;show 1;play Greet;speak Click on a cell to select it. '
      AgentCmds,←';play Explain;play Pleased;Hide 1'
    ∇

    ∇ GetState ⍝ Make contents of State global
      Board Factors bhtml←State.(Board Factors bhtml)
    ∇

    ∇ PutState ⍝ Save State for next post
      State.(Board Factors bhtml)←Board Factors bhtml
    ∇

:EndClass