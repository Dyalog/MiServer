:Class MMind : MiPage
⍝ With Thanks to Jerry and Anna Brennan

    :Include #.HTMLInput            ⍝ Useful functions for creating HTML pages

    ⍝ --- Declare HTML Input Fields ---
    ⍝     Will be set on each POST or SUBMIT if present in input
    :Field Public Action←''         ⍝ All Buttons will have this name, Value will tell which one was pressed
    :Field Public Picker←''         ⍝ Dropdowns for guessing animals
    :Field Public nAnim←'3'         ⍝ Number of Animals, used when starting new game
 
    ⍝ --- Additional fields can be declared, in order to preserve state when page (i.e. class) is modified ---
    ⍝     This allows smoother debugging, game does not need to restart on any change
    :Field Public State←⎕NS '' 

    TEST←1                            ⍝ Testing or "production" run?
    Initialised←0                     ⍝ Set to 1 when Init has found images files etc

    ⎕RL←(1+TEST)⊃16807 (+/⎕TS)        ⍝ Predictable or random initialisation

    ∇ Render req;html;tbl;btn;UseAgent;Game;Score;nAnimals;btns;pickers;last;out;fill;done;win
      :Access Public ⍝ This method is called by framework each time Page is displayed
     
      NL←'<br>',CRLF
     
      :If Initialised ⋄ GetState ⋄ :Else ⋄ Init ⋄ :EndIf
      DoAction     ⍝ Take action based on user input
      PutState     ⍝ Store State
     
      ⍝ --- Prepare buttons for later use ---
      btns←('Action'Submit'Start New Game'),' with '       ⍝ Button for starting new game
      btns,←('nAnim'DropDown(,¨'345')(,nAnim)),' animals.' ⍝ Dropdown for picking # animals to guess
     
      ⍝ --- Show user animals who might be in the game ---
      req.Title'Animal Mastermind'                         ⍝ Page title
      html←'h2'Enclose'Animal Mastermind',NL               ⍝ Header in page
      html,←('a href="/"' Enclose 'Home'),NL
      html,←'p'Enclose'These animals are playing today:'
      html,←(Table AnimalImgs[Animals],[0.5]AllAnimals[Animals]),NL
      :If TEST ⋄ html,←'p'Enclose'Test mode, answer is: ',,⍕AllAnimals[Animals[Answer]] ⋄ :EndIf
     
      ⍝ --- Show Turns so far and DropDowns for next guess
      fill←(nAnimals+1)⍴⊂''
      win←3∧.=,¯1↑[1]Score           ⍝ Did we win yet?
      last←1⌈,¯1↑[1]Game             ⍝ Previous guess
      last←AllAnimals[last]          ⍝ ... translated into animal names
      pickers←{'Picker'DropDown(AllAnimals[Animals])⍵}¨last ⍝ Dropdowns for guessing an animal
     
      out←((⍕¨⍳1↑⍴Game),¨'.'),AnimalImgs[Game],(⊂''),ScoreImgs[Score]      ⍝ One row per turn so far
      out⍪←(⊂(~win)/'Action'Submit'Guess'),pickers,fill                    ⍝ Final row: Submit button and dropdowns for next guess
      out⍪←(⊂(0≠1↑⍴Game)/'Round#'),((nAnimals↑'1st' '2nd' '3rd' '4th' '5th'),¨⊂' animal'),fill ⍝ Header row
     
      html,←win/'p'Enclose'Click "Start New Game" to start another game!'  ⍝ If game over, instructions on how to start again
      html,←req('Post'Form)btns,NL,NL,(Table⊖out)                          ⍝ Wrap the above in a 'Post' form so buttons will work
     
      req.Return html
    ∇

    ∇ DoAction;guess;mask;wrong;right;score
      ⍝ Score a turn or start a new game
     
      :Select Action~' +'
      :Case 'StartNewGame' ⋄ Start            ⍝ Start a new game
     
      :Case 'Guess'                           ⍝ Process a guess
     
          guess←(⍴Animals)⌊nAnimals↑AllAnimals[Animals]⍳Picker ⍝ Indices into Game Animals
     
          ⍝ Compute Mastermind score
          wrong←guess{2÷⍨+/|⊃-/(∪⍺,⍵)∘{+/⍺∘.=⍵}¨⍺ ⍵}Answer ⍝ Completely wrong guesses
          right←guess+.=Answer                               ⍝ Exactly right
          score←right,(nAnimals-right+wrong),wrong           ⍝ In middle: Right animal in wrong position
          Game⍪←Animals[guess]
          Score⍪←score/3 2 1 ⍝ Indices into ScoreImgs
     
      :EndSelect
    ∇

    ∇ Init;size;folder
      size←'height=100 width=100 '
     
      folder←req.Server.Root,'jbgames\pics\'       ⍝ This is where we keep the BMP files
      AllAnimals←¯4↓¨('*.bmp'#.Files.List folder)[;1]  ⍝ Use list of files as list of valid animals
      AllAnimals←(1≠⊃∘⍴¨AllAnimals)/AllAnimals   ⍝ ... except single char names (faces for scoring)
     
      AnimalImgs←{'<img src="/jbgames/pics/',⍵,'.bmp" ',size,'/>'}¨AllAnimals ⍝ HTML tags for all animal images
      ScoreImgs←{'<img src="/jbgames/pics/',⍵,'.bmp" ',size,'/>'}¨'USE'       ⍝ For scoring: U=No match, S=Wrong Position, E=Match
     
      :If 2=State.⎕NC'Animals' ⋄ GetState       ⍝ Retrieve saved state
      :Else ⋄ Start ⋄ :EndIf                     ⍝ ... or start a new game
     
      Initialised←1
    ∇

    ∇ Start ⍝ New Game
      nAnimals←⊃2⊃⎕VFI nAnim      ⍝ # of Animals to guess
      Animals←4?⍴AllAnimals       ⍝ Always select 4 Animals who COULD be in the game
      Answer←?nAnimals⍴4          ⍝ The correct answer
      Game←Score←(0,nAnimals)⍴0   ⍝ No "moves" yet
    ∇

    ∇ GetState ⍝ Make contents of State global
      Game Score nAnimals Animals Answer←State.(Game Score nAnimals Animals Answer) ⍝ Extract saved state
    ∇

    ∇ PutState ⍝ Save State for next post
      State.(Game Score nAnimals Animals Answer)←Game Score nAnimals Animals Answer ⍝ "State" is public and will be saved in page
    ∇

:EndClass