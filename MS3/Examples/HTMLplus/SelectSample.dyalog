:Class SelectSample : MiPageSample
     
      FRUITS←'Apples' 'Bananas' 'Grapes' 'Oranges' 'Pears' 'Pineapples' 'Plums'

    ∇ Render;frm;single;multi;btn
      :Access public
     
      Add title '_HTML.Select Sample'
      Add h2 'Please pick some fruits'
     
      (frm←Add Form).id←'myform'
     
      frm.Add _html.a ('Return to _HTML Sample menu'('href' 'Home'))
      frm.Add¨br br
     
      single←'top' frm.Add Select (⊂FRUITS)
      single.On 'change' 'CallbackFn'
      frm.Add¨br br
     
      multi←'bottom' frm.Add Select (⊂FRUITS)
      multi.Set 'multiple' 1       ⍝ Allow multiple selections
      multi.Set 'required' 1       ⍝ No post back unless there is a selection
      multi.Set 'size'(⊃⍴FRUITS)   ⍝ Show them all
      multi.Set 'autofocus' 'true' ⍝ Put the focus here
      multi.On  'change' 'CallbackFn'
      frm.Add¨br br
     
      btn←frm.Add button'Press Me!'
      btn.(id type)←'pressme' 'submit' ⍝ reset the form when pressed
      frm.Add¨br br
     
      (Add div).id←'result'
     
    ∇

    ∇ r←CallbackFn
      :Access Public             
      r←'#result'Replace p ('Selected from ',_what,': ',,⍕_value)
    ∇

:EndClass