:Class InputSample : MiPageSample

    ∇ Render;frm;ig;btn;handler;t
      :Access public
     
      :If isPost
          ⎕←'Postback:'
          ⎕←Types,⍪Get¨Types
      :Else
          Types←'text' 'password' 'checkbox' 'file'
          Data←(⍴Types)⍴⊂''
      :EndIf
     
     
      Add h2'Basic HTML Input Types'
      (frm←Add Form).id←'myform'
      'enctype'frm.Set'multipart/form-data'
      (ig←frm.Add InputGrid).Border←0
      ig.Labels←Types
      ig.Inputs←{New input ⍵}¨Types
      ig.Inputs.type←ig.Inputs.name←Types
      ig.Inputs.Value←Data
      (3↑ig.Inputs).On⊂'change' 'CallbackFn'
     
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
