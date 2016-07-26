:Class DirectoryBrowser : #._JS.DataTable

    :field public Folder←''
    :field public Filter←''
    :field public Down←0
    :field public Up←0

    ∇ make
      :Access public
      :Implements constructor
      makeCommon
    ∇

    ∇ make1 args
      :Access public
      :Implements constructor
      (Folder Filter Down Up)←args defaultArgs Folder Filter Down Up
      makeCommon
    ∇

    ∇ makeCommon
      :Trap 6
          Root←#.Boot.AppRoot
      :Else
          Root←#.Utils.WSRoot
      :EndTrap
    ∇

    ∇ r←Render;files;filenames;links;sizes
      :Access public
      files←{⍵⌿⍨Down≥⍵[;4]}Filter #.Files.List Root,Folder  ⍝ remove folder entrie if no drilldown
      :If Down>0∊⍴Filter                       ⍝ if filtered and drilldown...
          files⍪←{⍵⌿⍨⍵[;4]}#.Files.List Root,Folder ⍝ ...add in folders
      :EndIf
      Data←0 3⍴⊂''
      files⌿⍨←'.'≠⊃¨files[;1] ⍝ remove current and parent entries
      :If ~0∊⍴files
          files←{⍵[⍒⍵[;4];]}{⍵[⍋#.Strings.lc↑⍵[;1];]}files
          filenames←files[;1]{(⍵/'./'),⍺,⍵/'/'}¨files[;4] 
          links←files[;4](Folder{'<a ',((~⍺)/'target="_blank" '),'href="',(⍺⍺,⍵),'">',⍵,'</a>'})¨filenames
          sizes←#.Strings.commaFmt files[;2]
          (files[;4]/sizes)←⊂'[dir]'
          Data←links,sizes,⍪#.Dates.TSFmt¨files[;3]
      :EndIf
      :If Up>0∊⍴Folder
          Data⍪⍨←((New #._DC.A'..'({⍵↓⍨-⊥⍨'/'≠⍵}¯1↓Folder)).Render)'' ''
      :EndIf
      Data⍪⍨←'Name' 'Size' 'Timestamp'
      'autoWidth'Set _true
      'columns'Set'⍎[{"type":"html","className":"db-left"},{"type":"num-fmt","className":"db-right"},{"type":"date","className":"db-left"}]'
      AddClass'display'
      r←(⎕NEW #._DC.Style((('.db-left')('text-align' 'left'))(('.db-center')('text-align' 'center'))(('.db-right')('text-align' 'right')))).Render
      r,←⎕BASE.Render
    ∇

:EndClass
