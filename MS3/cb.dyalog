:Class cb : MiPageSample

    ∇ Render;frm;ig;btn;handler;t;z;i
      :Access public
     
     
      Add h2'Boxes of Checks'
      (frm←Add Form).id←'myform'
     
      (ig←frm.Add InputGrid).Border←0
      ig.Labels←'cb 1' 'cb 2' 'cb 3'
      ig.Inputs←New¨3⍴input
      ig.Inputs.type←⊂'checkbox'
      ig.Inputs.name←'cb1' 'cb2' 'cb3'
      ig.Inputs.On⊂'change' 'CallbackFn'
     
      (frm.Add input).(name type value)←⊂'Submit'
     
      (Add div).id←'changed'
    ∇

    ∇ r←CallbackFn;data
      :Access public
     
      data←Get _what
      Data[Types⍳⊂_what]←⊂data
      r←'#changed'Replace(⎕←'New value for ',_what,': ',data)
    ∇
:EndClass