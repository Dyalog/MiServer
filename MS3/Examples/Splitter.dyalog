﻿:Class Splitter : Dyalog14 
⍝ Demonstrate ejSplitters

    ∇ make0
      :Implements Constructor
      :Access Public
     
      splitter←_SF.ejSplitter
      True←#.JSON.true
      options←⊂↑('animationSpeed' 300)('enableAnimation'True)('height' 300)('width' 200)
      options,←⊂↑('height' 100)('width' 200)
    ∇
    
    ∇ Render;f;docn;ops;tbl
      :Access Public
     
    ⍝  docn←names{⎕NEW _html.a((⍺,'Picker</p>')('href="',⍵.ApiLink,'" target="_blank"'))}¨controls
     
      Add h3'SyncFusion Splitters'
     
      (inner←⎕NEW splitter('#inner'('LEFT inner' 'RIGHT inner'))).Orientation←'horizontal'
      inner.PaneProps←('panesize' 200)('PaneSize' 100)
      (Add outer←⎕NEW splitter('#outer'('Top'inner))).Orientation←'vertical'
      'enableAutoresize'outer.Option True
      (outer inner).{Option/⍵}options
     
      Add br
     
      (Add div).id←'output'
    ∇
    
    ∇ r←APLJax
      :Access public           
      values[names⍳⊂_what]←⊂Get _what
      r←'#output'Replace _HTML.Table(names,⍪values)
    ∇

:EndClass