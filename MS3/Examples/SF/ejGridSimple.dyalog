﻿:Class ejGridSimple : MiPageSample
⍝ Control:: _SF.ejGrid
⍝ Description:: A read-only grid with formatting and alignment options
    
    ∇ InitData
      VALUES←1 #.Files.FREAD #.Boot.ms.Config.AppRoot,'Examples\data\stats.DCF'
      VALUES←VALUES[;1 3 4 2 5]
      VALUES[;3]←VALUES[;3]÷1000000 ⍝ Millions
      COLTITLES←'Name' 'Population' 'GDP ($M)' '% of GDP' '$ Per Capita'
      COLNAMES←'Country' 'Population' 'GDPAmt' 'GDPPct' 'PerCap'
      CELLWIDTHS←100 40 25 40 25
      CELLALIGN←1 4/'left' 'right'
      FORMATS←'' '{0:n0}' '{0:n0}' '{0:n1}' '{0:c1}'
    ∇

    ∇ Compose
      :Access Public 
     
      InitData
      Add _.h2'Health Care Spending'
      mygrid←Add _.ejGrid(VALUES COLTITLES CELLWIDTHS)
      mygrid.CellFormats←FORMATS
      mygrid.ColNames←COLNAMES
      mygrid.CellAlign←CELLALIGN
     
      'allowPaging' 'allowSorting' 'allowResizing' 'showStackedHeader'mygrid.Set¨_true
      'stackedHeaderRows'mygrid.Set'⍎[{stackedHeaderColumns:[{headerText:"Country Facts",column:"Country,Population,GDPAmt"},{headerText:"Health Care Spending",column:"GDPPct,PerCap"}]}]'
    ∇
 
:EndClass
