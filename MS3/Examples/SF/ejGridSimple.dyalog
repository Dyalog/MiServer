:Class ejGridSimple : MiPageSample
⍝ Control:: _SF.ejGrid
⍝ Description:: A read-only grid with formatting and alignment options
    
    ∇ Make
      :Access Public
      :Implements Constructor        
     
      VALUES←1 #.Files.FREAD #.Boot.ms.Config.AppRoot,'Examples\data\stats.DCF'
      COLTITLES ← 'Country' '% GDP' 'Population' 'GDP' '$ Per Capita'
      COLNAMES  ← 'Country' 'PctGDP' 'Population' 'GDP' 'PerCap'
      CELLWIDTHS← 100 25 40 40 25
      CELLALIGN ← 1 4/'left' 'right'
      FORMATS   ← '' '{0:n1}' '{0:n0}' '{0:c0}' '{0:c1}'
    ∇

    ∇ Compose
      :Access Public   
      Add _.h2 'Health Care Spending'
      mygrid←Add _.ejGrid (VALUES COLTITLES CELLWIDTHS)
      mygrid.CellFormats←FORMATS
      mygrid.ColNames   ←COLNAMES
      mygrid.CellAlign  ←CELLALIGN
      'allowPaging' 'allowSorting' 'allowResizing' mygrid.Set¨ _true
    ∇
 
:EndClass