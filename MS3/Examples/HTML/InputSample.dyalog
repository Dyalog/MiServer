:Class InputSamplesample: MiPageSample
⍝ Control:: HTML.InputSample 
⍝ Description:: this is an example of use of InputSample 

    Types←'text' 'password' 'checkbox' 'file'
    Data←(⍴Types)⍴⊂''

    ∇ Render;frm;ig;btn;handler;t;z;i
      :Access public
     
     
      :If _Request.isPost
          ⎕←'Postback:'
          t←Types,⍪Get¨Types
          :If 0≠⍴z←⊃t[i←Types⍳⊂'file';2]
              t[i;2]←⊂(1⊃z)('[',(⍕⍴2⊃z),' bytes]')
          :EndIf
          ⎕←t
      :EndIf
     
     
      Add h2'Basic HTML Input Types'
      (frm←Add Form).id←'myform'
      frm.Set'enctype' 'multipart/form-data'
     
      (ig←frm.Add InputGrid).Border←0
      ig.Labels←Types
      ig.Inputs←{New input ⍵}¨Types
      ig.Inputs.type←ig.Inputs.name←Types
      ig.Inputs.Value←Data
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