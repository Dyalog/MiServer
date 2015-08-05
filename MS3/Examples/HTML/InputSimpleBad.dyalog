:Class inputSimple: MiPageSample
⍝ Control:: _html.input 
⍝ Description:: this is an example of use of input fields with callback

    Types←'text' 'password' 'checkbox' 'file'
    Data←(⍴Types)⍴⊂''

    ∇ Compose;frm;ig;btn;handler;t;z;i
      :Access public
     
     
      :If _Request.isPost
          ⎕←'Postback:'
          t←Types,⍪Get¨Types
          :If 0≠⍴z←⊃t[i←Types⍳⊂'file';2]
              t[i;2]←⊂(1⊃z)('[',(⍕⍴2⊃z),' bytes]')
          :EndIf
          ⎕←t
      :EndIf
     
     
      Add _.h2'Basic HTML Input Types'
      (frm←Add _.Form).id←'myform'
      frm.Set'enctype' 'multipart/form-data'
     
      (ig←frm.Add _.InputGrid).Border←0
      ig.Labels←Types
      ig.Inputs←{New _.input ⍵}¨Types
      ig.Inputs.type←ig.Inputs.name←Types
      ig.Inputs.Value←Data
      ig.Inputs.On⊂'change' 'CallbackFn'
     
      (frm.Add _.input).(name type value)←⊂'Submit'
     
      (Add _.div).id←'changed'
    ∇

    ∇ r←CallbackFn;data
      :Access public   
     
      data←Get _what
      Data[Types⍳⊂_what]←⊂data
      r←'#changed'Replace(⎕←'New value for ',_what,': ',data)
    ∇

:EndClass