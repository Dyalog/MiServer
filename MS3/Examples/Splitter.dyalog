:Class Splitter : Dyalog14 
⍝ Demonstrate ejSplitters

    ∇ make0
      :Implements Constructor
      :Access Public
     
      splitter←_SF.ejSplitter
     
      outeropt←↑('height' '100px')('width' '300px')('enableAnimation'False)
      inneropt←↑('height' '99px')('width' '92px')('animationSpeed' 3000) ⍝ slow expand/collapse
    ∇
    
    ∇ Render;f;docn;ops;tbl
      :Access Public
     
      Add h3'SyncFusion Splitters'
      Add p'Click to read <a href="',splitter.ApiLink,'" target="_blank">Syncfusion documentation</a>.'
     
      (inner←⎕NEW splitter('#inner'('TOP inner' 'BOTTOM inner'))).Orientation←'vertical'
      inner.Option/inneropt
      inner.PaneProps←('paneSize' 60)('paneSize' 20)
     
      (Add outer←⎕NEW splitter('#outer'('LEFT<br>outer'inner))).Orientation←'horizontal'
      outer.Option/outeropt
      outer.PaneProps←('paneSize' 200)⍬
     
      (outer inner).On⊂'resize' 'APLJax'('stuff' 'ejModel')
      Add br
     
      (Add div).id←'output'
    ∇
    
    ∇ r←APLJax
      :Access public   
     
      r←'#output'Replace,⍕_what _PageData.stuff.model.properties.paneSize
    ∇

:EndClass