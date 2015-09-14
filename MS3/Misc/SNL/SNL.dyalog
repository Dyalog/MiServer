﻿:Class SNL : MiPageSample

    maxPlayers←4
    colors←'blue' 'purple' 'salmon' 'cyan'
    Positions←¯1
    Players←⍬

    :section Utilities

   ⍝ define a color token (player marker)
    token←{t⊣(t←('#player',⍕⍵)New _.svg '' ('width=50 height=50')).Add _.rect '' ('x=0 y=0 width=50 height=50 fill=',⍺)}

   ⍝ use jQueryUI's Position utility to place tokens on playing board
    moveToken←{('#player',⍕⍺) #.JQ.Position 'left bottom'(∊'left' ' bottom'{⍺,('-+'[1+0⌈×⍵]),(⍕|⍵)}¨(⊂⍺ ⍵)⊃offsets) '#board' 'none'}

    :endsection

    :section Main Rendering
    ∇ Compose;frm;sp;businessLogic
      :Access public
     
      Use'JQueryUI'
     
      Add _.Style'#output table' 'border: 1px solid black;border-collapse:collapse;font-size:.8em;'
      Add _.Style'#output th' 'border: 1px solid black'
      Add _.Style'#output td' 'border: 1px solid black'
      Add _.Style'svg' 'display:none;z-index:2'  ⍝ hide the player tokens
     
      :If 0=#.⎕NC'SNLMS3' ⍝ load the "business logic" if not already loaded
          businessLogic←(_Request.Server.Config.AppRoot,1↓⊃#.Files.SplitFilename _PageName),'SNLMS3'
          ⎕SE.SALT.Load businessLogic,' -target=#'
      :EndIf
     
      Add _.h3'Snakes and Ladders a la MiServer'
      frm←Add _.Form
      ('players'frm.Add _.Input'number' 1 'Number of Players').Set'min' 1 'max'maxPlayers
      (frm.Add _.Button'Play').On'click' 'start'
      ('single'frm.Add _.Button'Single Step').On'click' 'start'
     
      Add _.br
     
      (sp←Add _.StackPanel).Horizontal←1
      sp.Add('board'New _.img''('src'((⊃#.Files.SplitFilename _PageName),'snakes_and_ladders.jpg')))
      sp.Add('output'New _.div)
     
      Add _.Handler'body' 'play' 'playRound'
      Add¨(colors token¨⍳maxPlayers)
    ∇

    :endsection


    :section Callbacks

    ∇ r←start;players
      :Access public
     
      :If 'single'≢_what       ⍝ if we're not single stepping
      :OrIf Positions∨.<0      ⍝ or if the previous game finished
          Positions←#.SNLMS3.Init Players←0 Get'players'
          Turn←0
      :EndIf
     
    ⍝ construct offsets for tokens for all board positions
      offsets←107 ¯107∘×¨⌽¨¯1+⍳#.SNLMS3.(Rows Cols)
      offsets[2 4;]←⌽offsets[2 4;]
      offsets←,⍤2⊢(,0 53∘.,0 ¯53)∘.+offsets
     
      players←'#player'∘,¨⍕¨N←⍳Players
      r←Execute'svg'#._JSS.Hide''
      r←{Execute ⍵ #._JSS.Show''}¨players
      r,←playRound
    ∇

    ∇ r←playRound;Start;Type;Rolls;mask;tab;data
      :Access public
      r←''
      (Turn Start Rolls Positions Type)←Turn #.SNLMS3.playaround Positions
      mask←<\Positions<0 ⋄ (mask/Type)←⊂'Winner!' ⍝ mark first winning position, if any
     
      data←(⊂''),⍉↑Start Rolls(|Positions)Type
      tab←New #._.Table('Player' 'Start' 'Roll' 'End' 'Type'⍪data)
      tab.HeaderRows←1
      tab.CellAttr←(⍴data)⍴⊂''
      tab.CellAttr[;1]←{'style="background-color:',⍵,'"'}¨Players↑colors
      r,←'#output'Replace tab
     
      r,←N{Execute ⍺ moveToken ⍵}¨|Positions
      :If (_what≡'single')<~∨/mask
          r,←Execute'$("body").trigger("play")'
          {}⎕DL 0.8
      :EndIf
    ∇

    :endsection

:EndClass
