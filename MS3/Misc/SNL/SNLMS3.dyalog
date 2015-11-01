:Namespace SNLMS3
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

    ∇ Positions←Init params
      (nPlayers ⎕RL)←2↑params  ⍝ 2nd element of params can be explicit seed to set
      InitBoard
      Positions←nPlayers⍴1
    ∇

    ∇ Play Positions
      playaround Positions
    ∇

      playaround←{⍺←0
          turn←⍺
          oldpositions←positions←⍵
          turn+←1
          eyes←1+?(≢positions)⍴6
          (positions movetypes)←↓[0]↑eyes moveone¨positions
          positions×←¯1*<\positions∊Cells              ⍝ mark first winner as negative number (if any)
          turn oldpositions eyes positions movetypes
      }

      moveone←{position←⍵
          eyes←⍺
          Cells<newpos←position+eyes:position'Too Far'
          (≢Snakes)>i←Snakes.Head⍳newpos:Snakes[i].Tail('!Snake @ 'newpos)
          (≢Ladders)>i←Ladders.Tail⍳newpos:Ladders[i].Head('!Ladder @'newpos)
          newpos'Normal'
      }

:EndNamespace