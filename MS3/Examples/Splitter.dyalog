:Class Splitter : Dyalog14 
⍝ Demonstrate ejSplitters

    ∇ make0
      :Implements Constructor
      :Access Public
     
      splitter←_SF.ejSplitter
      True←#.JSON.true
     
      outeropt←↑('height' '100px')('width' '300px') ⍝ ('animationSpeed' 30)('enableAnimation'True)
      inneropt←↑,⊂('width' 100) ⍝ ('enableAutoresize'#.JSON.false)
    ∇
    
    ∇ Render;f;docn;ops;tbl
      :Access Public
     
      Add h3'SyncFusion Splitters'
      Add p'Click to read <a href="',splitter.ApiLink,'" target="_blank">Syncfusion documentation</a>.'
     
      (inner←⎕NEW splitter('#inner'('TOP inner' 'BOTTOM inner'))).Orientation←'vertical'
      inner.Option/inneropt
      inner.PaneProps←('paneSize' 100)('paneSize' 100)
     
      (Add outer←⎕NEW splitter('#outer'('LEFT<br>outer'inner))).Orientation←'horizontal'
      outer.Option/outeropt
      outer.PaneProps←('paneSize' 200)⍬
      (outer inner).{On'resize' 'APLJax'(('collapsed' 'argument' 'collapsed')('expanded' 'argument' 'expanded'))}'outer' 'inner'
      Add br
     
      (Add div).id←'output'
    ∇
    
    ∇ r←APLJax
      :Access public   
⍝      ∘
      r←''
      →0
      values[names⍳⊂_what]←⊂Get _what
      r←'#output'Replace _HTML.Table(names,⍪values)
    ∇

:EndClass