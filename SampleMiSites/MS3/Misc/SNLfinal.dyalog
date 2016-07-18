:Namespace SNL    
    ⍝ Snakes and Ladders for Live Code Jugalbandi at #FnConf15 - Windows GUI version.
    ⍝ a game is over when any player reaches final cell first.
    ⍝ a player can arrive at a new position by adding the number to existing position from the throw of dice
    ⍝ a player can arrive at final cell only by throwing on dice the exact number of positions required to reach it.
    ⍝ a player is promoted to head position of ladder when they arrive at a cell containing ladder’s tail
    ⍝ a player is demoted to tail position of snake when they arrive at a cell containing snake’s head
    ⍝ players take turns occupying new positions until the game is over   
    
    ⍝ To Play:
    ⍝    SNL.Init nPlayers
    ⍝    SNL.Play 0
    
    ⎕IO←0              ⍝ Index Origin Zero
    Spaces←{⎕NS¨⍵⍴⊂''} ⍝ ⍵ empty spaces
    
    ∇ InitBoard
      Cells←×/(Rows Cols)←5 6
      (Ladders←Spaces 4).(Head Tail)←(22 3)(8 5)(26 11)(29 20)
      (Snakes←Spaces 4).(Head Tail)←(17 4)(19 7)(21 9)(27 1)
    ∇

    ∇ Init params
      (nPlayers ⎕RL)←2↑params  ⍝ 2nd element of params can be explicit seed to set
      InitBoard
     
      ⍝ Rest of this function is UI setup
      FormSize←MakeUI'c:\dropbox\fnconf15\snakes_and_ladders.jpg'
      (RowHeight ColWidth)←FormSize÷Rows Cols
      Colors←↓255×{⍵[⍋+/⍵;]}⍉2 2 2⊤⍳8 ⍝ All combinations of fully saturated (R,G,B)
      {}UpdateUI Positions←nPlayers⍴1
    ∇

    ∇ Play
      Positions play 0
    ∇
                
      play←{(turn active)←2↑⍵
          positions←⍺
          turn+←1
          ⎕←'Player'active'rolls'(eyes←1+?6)
          (active positions)←(active eyes)moves positions
          z←UpdateUI positions
          Cells∊positions:turn⊣⎕←'Player'active'wins in turn'turn
          ⎕←'Turn'turn'Positions'positions
          positions ∇ turn active ⍝ Tail recursion
      }

      moves←{(player eyes)←⍺
          positions←⍵
          next←(≢positions)|1+player                ⍝ Next player
          newpos←positions[player]+eyes             ⍝ Potential new position
          newpos>Cells:next positions               ⍝ Too far: No-op
          (≢Snakes)>i←Snakes.Head⍳newpos:next positions⊣positions[player]←Snakes[i].Tail⊣⎕←'!!! SNAKE @'newpos
          (≢Ladders)>i←Ladders.Tail⍳newpos:next positions⊣positions[player]←Ladders[i].Head⊣⎕←'!!! LADDER @'newpos
          next positions⊣positions[player]←newpos   ⍝ Normal move
      }


    :Section UI
      MakeUI←{
          z←'BG'⎕WC'Bitmap'⍵ ⍝ Create Bitmap object from file
          size←'BG'⎕WG'Size' ⍝ Extract size
          z←'F1'⎕WC'Form' 'Snakes and Ladders'('Picture' 'BG' 1)('Coord' 'Pixel')('Size'size)
          size               ⍝ Return the size
      }
                                                                                            
      UpdateUI←{
          n←≢⍵                            ⍝ Number of players
          (row col)←↓Rows Cols⊤⍵-1        ⍝ row & col indices
          odd←(2|row)/⍳n                  ⍝ Players in odd rows
          col[odd]←Cols-col[odd]+1        ⍝ Odd columns go right to left
          x←FormSize[0]-RowHeight×row+0.2 ⍝ x convert to distance from top
          y←ColWidth×0.5+col+0.05×⍳n      ⍝ offset tokens a bit more per player
          z←{('F1.C',⍕⍵)⎕WC'Circle'(x[⍵],y[⍵])(RowHeight÷10)('FStyle' 0)('FCol'(⍵⊃Colors))}¨⍳≢⍵
          ⎕DL 0.5                         ⍝ Allow humans to see what happened
      }
    :EndSection
 
    :Section Testing    

    assert←{⎕←(⍵⊃('fail:' 'pass:')) ⍺}

    ∇ Test
      InitBoard
      'normal move'assert(1(2 1))≡0 1 moves 1 1       ⍝ Player 0 rolls 1 at 1
      'hit first ladder'assert(1(22 1))≡0 2 moves 1 1 ⍝ Player 0 rolls 2 at 1
      'hit snake at 21'assert(0(1 9))≡1 1 moves 1 20  ⍝ Player 1 rolls 1 at 20
      'move too far'assert(1(29 1))≡0 6 moves 29 1    ⍝ Player 0 rolls 6 at 29
    ∇

    :EndSection 

:EndNamespace
                                   

