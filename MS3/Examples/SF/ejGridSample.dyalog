﻿:Class ejGridSample : MiPageSample
    
    ∇ Render;rte;frm
      :Access Public   
     
      (frm←Add Form).id←'myform'
     
      frm.Add h2'Health Care Spending'
      mygrid←frm.Add _SF.ejGrid('mygrid'VALUES COLTITLES CELLWIDTHS)
      mygrid.CellFormats←FORMATS
      mygrid.ColNames←COLNAMES
      mygrid.CellAlign←CELLALIGN
      mygrid.Set↓'allowPaging' 'allowSorting' 'allowResizing',[1.5]_true
     
      (frm.Add div).id←'result'
    ∇
    
    ∇ r←CallbackFn;preset
      :Access Public                                               
     
      ∘∘∘
    ∇
    
    ∇ make
      :Access Public
      :Implements Constructor        
     
      VALUES←1 #.Files.FREAD #.Boot.ms.Config.AppRoot,'data\stats.DCF'
      COLTITLES←'Country' '% GDP' 'Population' 'GDP' '$ Per Capita'
      COLNAMES←'Country' 'PctGDP' 'Population' 'GDP' 'PerCap'
      CELLWIDTHS←100 25 40 40 25
      CELLALIGN←1 4/'left' 'right'
      FORMATS←'' '{0:n1}' '{0:n0}' '{0:c0}' '{0:c1}'
    ∇

:EndClass