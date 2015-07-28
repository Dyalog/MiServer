:class tableAdvanced: MiPageSample
⍝ Control:: _html.table _html.tr _html.th _html.td _html.caption _html.tbody _html.thead _html.tfoot
⍝ Description:: this is an example of use of caption which defines a table caption

    ∇ Compose
      :Access public
     
      mydata←?3 5⍴99
     
      mytable←Add _.table
     
    ⍝ Column-wise formatting
      mycolgroup←mytable.Add _.colgroup
      mycols←mycolgroup.Add¨7/_.col ⍝ we don't actually need a col for each column
      mycols.Set⊂'width="50"'
      mycols[4].Set'style=background-color:pink'
      mycols[1 7].Set⊂'style=background-color:orchid'
      ⍝ Columns that did not receive formating remain with the default
     
    ⍝ Header
      myhead←mytable.Add _.thead
      (myhead.Add _.tr).Add¨_.th,¨(⊂''),(¯3+⊃⎕TS)+⍳5
     
     ⍝ Body
      mybody←'data'mytable.Add _.tbody
      'XABCDE'(mybody.Add _.tr).Add¨_.td,¨(⊂'BB'),mydata[1;]
      'YFGHIJ'(mybody.Add _.tr).Add¨_.td,¨(⊂'DB'),mydata[2;]
      'ZKLMNO'(mybody.Add _.tr).Add¨_.td,¨(⊂'AB'),mydata[3;]
      mybody.On'click'
     
     ⍝ Footer
      myfoot←'totals'mytable.Add _.tfoot
      'STUVWXY'(myfoot.Add _.tr).Add¨_.td,¨(⊂'Total'),(+⌿mydata),(+/,mydata) ⍝ uneven rows allowed
      myfoot.On'click'
     
    ⍝ Caption always goes on top, even if added later
      mytable.Add _.caption'Sales'
    ∇
   
    ∇ js←APLJax
      :Access public
      js←''
      :Select _what
      :Case 'data'
          :For letter :In 15↑⎕A
              js,←('#',letter)Replace?99
          :EndFor
      :Case 'totals'
     
      :EndSelect
    ∇
:endclass