﻿:class tableAdvanced: MiPageSample
⍝ Control:: _html.table _html.tbody _.thead _html.tfoot _html.colgroup _html.col _html.tr _html.td _html.th
⍝ Description:: Insert an interactive table with column-wise formatting

    ∇ Compose ;mytable;mycolgroup;mycols;myhead;mybody;myfoot
      :Access public
     
      mydata←?3 5⍴99
     
      Add _.h2 'Interactive Table'
      Add _.p  'Click data or subtotals to recalculate.'
     
      mytable←Add _.table
     
    ⍝ Column-wise formatting
      mycolgroup←mytable.Add _.colgroup
      mycols←mycolgroup.Add¨ 7/_.col ⍝ we don't actually need a col for each column
      mycols.Set ⊂'width="50"'
      mycols[4].Set 'style=background-color:pink'
      mycols[1 7].Set ⊂'style=background-color:orchid'
      ⍝ Columns that did not receive formating remain with the default
     
    ⍝ Header
      myhead←mytable.Add _.thead
      (myhead.Add _.tr).Add¨ _.th,¨' ',¯3+⎕TS[1]+⍳5
     
    ⍝ Body
      mybody←'data' mytable.Add _.tbody
      'VABCDE' (mybody.Add _.tr).Add¨ _.td, ¨(⊂'BB'),mydata[1;]
      'WFGHIJ' (mybody.Add _.tr).Add¨ _.td, ¨(⊂'DB'),mydata[2;]
      'XKLMNO' (mybody.Add _.tr).Add¨ _.td,¨ (⊂'AB'),mydata[3;]
      mybody.On'click' 'callbackPgm'
     
    ⍝ Footer
      myfoot←'totals'mytable.Add _.tfoot
      mytotals←(myfoot.Add _.tr).Add¨ 7/_.td ⍝ uneven rows allowed
      'YPQRSTU' mytotals.Add _.b,¨ (⊂'Total'),(+⌿mydata),(+/,mydata)
      myfoot.On 'click' 'callbackPgm'
     
    ⍝ Caption always goes on top, even if added later
      mytable.Add _.caption 'Sales'
    ∇

    ∇ js←callbackPgm ;i;subtotals
      :Access public
      js←''
      :Select _what
      :Case 'data'
          :For i :In ⍳15
              js,←('#',i⊃⎕A) Replace (i⊃∊mydata)←?99
          :EndFor
      :Case 'totals'
          subtotals←5⍴0
          :For i :In ⍳5
              subtotals[i]←+/mydata[;i]
              js,←('#',i⊃'PQRST') Replace i⊃subtotals
          :EndFor
          js,←'#U' Replace +/subtotals
      :EndSelect
    ∇
:endclass