:Class SelectSample : MiPageSample

    ∇ Render;frm;fruits
      :Access public
      Add h2'Please pick a fruit'
      (frm←Add Form).id←'myform'
      fruits←frm.Add Select'fruits'('Apples' 'Bananas' 'Grapes' 'Oranges' 'Pears' 'Pineapples' 'Plums')
      fruits.Set('multiple' 1)
      fruits.On'change' 'CallbackFn'
      (Add div).id←'result'
    ∇

    ∇ r←CallbackFn
      :Access public                        
      r←'#result'Replace h2('You selected ',Get'fruits')
    ∇

:EndClass                                   