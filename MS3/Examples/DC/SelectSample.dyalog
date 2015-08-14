:Class SelectSample : MiPageSample

    FRUITS←'Apples' 'Bananas' 'Grapes' 'Oranges' 'Pears' 'Pineapples' 'Plums'

    ∇ Render;frm;single;multi;btn
      :Access public
     
      Add _.title'_.Select Sample'
      Add _.h2'Please pick some fruits'
     
      Add _.a('Return to _DC.Sample menu'('href' 'Home'))
      Add¨_.br _.br
     
      (frm←Add _.Form).id←'myform'
     
      single←'single'frm.Add _.Select FRUITS
      single.On'change' 'CallbackFn'
     
      frm.Add¨_.br _.br
     
      multi←'multi'frm.Add _.Select FRUITS
      multi.Set'multiple' 1       ⍝ Allow multiple selections
      multi.Set'required' 1       ⍝ No post back unless there is a selection
      multi.Set'size'(⊃⍴FRUITS)   ⍝ Show them all
      multi.Set'autofocus' 'true' ⍝ Put the focus here
     
      frm.Add¨_.br _.br
     
      (frm.Add _.Button'Press Me!').On'click' 'CallbackFn'
      frm.Add¨_.br _.br
     
      (Add _.div).id←'result'
     
    ∇

    ∇ r←CallbackFn
      :Access Public
      :Select _event
      :Case 'click'
          r←'#result'Replace('Selected from multi: ',,⍕Get'multi')
      :Else
          r←'#result'Replace('Selected from ',_what,': ',,⍕Get _what)
      :EndSelect
    ∇

:EndClass