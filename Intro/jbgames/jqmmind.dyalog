:Class JQMMind : MildPage

    :Include #.HTMLInput            ⍝ Useful functions for creating HTML pages

    :Field Public nAnim←'3'         ⍝ Number of Animals, used when starting new game

    ⍝ --- Additional fields can be declared, in order to preserve state when page (i.e. class) is modified ---
    ⍝     This allows smoother debugging, game does not need to restart on any change
    :Field Public State←⎕NS ''

    TEST←1                            ⍝ Testing or "production" run?
    Initialised←0                     ⍝ Set to 1 when Init has found images files etc

    ⎕RL←(1+TEST)⊃16807 (+/⎕TS)        ⍝ Predictable or random initialisation



    ∇ Render req;html;styles;js
      :Access Public
      :If Initialised ⋄ GetState ⋄ :Else ⋄ Init ⋄ :EndIf
      styles←'.choices, .chosen'MakeStyle'list-style-type' 'none' 'margin' '0' 'padding' '0'
      styles,←CRLF,'li'MakeStyle'margin' '3px 3px 3px 0' 'padding' '1px' 'float' 'left' 'width' '100px' 'height' '100px'
      styles req.Style''
      #.JQ.IncludeJQueryUI req
     
      html←#.JQ.JQueryfn'draggable' '".choices>li"' 'cursor: "crosshair", helper: "clone"'
      html,←'ul class="choices"'Enclose enlist CRLF∘,¨{⍵{('li id="choice_',(⍕⍵),'"')Enclose ⍺}¨⍳⍴⍵}AnimalImgs[Animals]
     
      html,←'div class="clear"'Enclose''
     
      js←'drop: function(event, ui){$(this).replaceWith(ui.draggable.text)}'
⍝      js,←CRLF,
     
      html,←#.JQ.JQueryfn'droppable' '".chosen>li"'('accept: ".choices>li", ',js)
      html,←'ul class="chosen"'Enclose enlist CRLF∘,¨{⍵{('li id="chosen_',(⍕⍵),'"')Enclose ⍺}¨⍳⍴⍵}3⍴⊂UnknownImg
     
     
      req.Return html,'div class="clear"'Enclose''
    ∇

    ∇ Init;size;folder
      size←'height=100 width=100 '
      folder←req.Server.Root,'jbgames\pics\'       ⍝ This is where we keep the BMP files
      AllAnimals←¯4↓¨('*.bmp'#.Files.List folder)[;1]  ⍝ Use list of files as list of valid animals
      AllAnimals←(1≠⊃∘⍴¨AllAnimals)/AllAnimals   ⍝ ... except single char names (faces for scoring)
      AnimalImgs←{'<img src="/jbgames/pics/',⍵,'.bmp" ',size,'/>'}¨AllAnimals ⍝ HTML tags for all animal images
      ScoreImgs←{'<img src="/jbgames/pics/',⍵,'.bmp" ',size,'/>'}¨'USE'       ⍝ For scoring: U=No match, S=Wrong Position, E=Match
      UnknownImg←'<img src="/jbgames/pics/Q.bmp" ',size,'/>'
      :If 2=State.⎕NC'Animals' ⋄ GetState       ⍝ Retrieve saved state
      :Else ⋄ Start ⋄ :EndIf                     ⍝ ... or start a new game
      Initialised←1
    ∇

    ∇ Start ⍝ New Game
      nAnimals←⊃2⊃⎕VFI nAnim      ⍝ # of Animals to guess
      Animals←4?⍴AllAnimals       ⍝ Always select 4 Animals who COULD be in the game
      Answer←?nAnimals⍴4          ⍝ The correct answer
      Game←Score←(0,nAnimals)⍴0   ⍝ No "moves" yet
      PutState
    ∇

    ∇ GetState ⍝ Make contents of State global
      Game Score nAnimals Animals Answer←State.(Game Score nAnimals Animals Answer) ⍝ Extract saved state
    ∇

    ∇ PutState ⍝ Save State for next post
      State.(Game Score nAnimals Animals Answer)←Game Score nAnimals Animals Answer ⍝ "State" is public and will be saved in page
    ∇

:EndClass