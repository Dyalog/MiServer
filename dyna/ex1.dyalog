:Class ex1 : DyNApage

    ∇ Render;f
      :Access public
      Add h1'Thanks for coming to the workshop!'
      f←Add Form
      f.Add'Please Enter Your Name: '
      f.Add EditField'inp123' 'Your Name'
      Add Handler'#inp123' 'click'
      (Add div).id←'result'
    ∇

    ∇ r←APLJax;name
      :Access public                                   
      name←Get'inp123'
      r←'#result'Replace'Your name is: ',name,' and reversed it''s ',⌽name
    ∇
:EndClass