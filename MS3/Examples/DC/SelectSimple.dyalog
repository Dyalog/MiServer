:Class SelectSample : MiPageSample

    FRUITS←'Apples' 'Bananas' 'Grapes' 'Oranges' 'Pears' 'Pineapples' 'Plums'

    ∇ Render;frm;single;multi;btn
      :Access public
     
      Add _.title'_.Select Sample'
      Add _.h2'Please pick some fruits'
     
      (frm←Add _.Form).id←'myform'
     
      single←frm.Add _.Select(⊂FRUITS)  ⍝ no preselection
      frm.Add¨2/_.br
     
      multi←frm.Add _.Select(FRUITS(2 5)) ⍝ preselect 2nd and 5th fruit
      multi.Set'multiple' 1       ⍝ Allow multiple selections
      multi.Set'required' 1       ⍝ No post back unless there is a selection
      multi.Set'size'(⊃⍴FRUITS)   ⍝ Show them all
      multi.Set'autofocus' 'true' ⍝ Put the focus here
      frm.Add¨2/_.br
     
      btn←frm.Add _.button'Reset Selections'
      btn.(id type)←'pressme' 'submit'
    ∇

:EndClass