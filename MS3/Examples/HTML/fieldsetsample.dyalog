:Class fieldsetsample: MiPage⍝Sample
⍝ Control:: _html.fieldset 
⍝ Description:: put a box around related input fields

    Data←{''}¨ Types← 'text' 'password' ⋄ Labels← 'Reference #' 'Password'

    ∇ Compose;frm;ig;btn;handler;t;fs;in
      :Access public
     
    ⍝ Retrieve values
      t←Types,⍪Get¨Types
     
    ⍝ Display values in session upon hitting the button
      ⎕←'Postback:'
      :If _Request.isPost
          t←Types,⍪Get¨Types
          ⎕←t
      :EndIf
     
    ⍝ Prepare the window
    ⍝ Show a title
      Add _.h2'WONOWAY Insurance company'
     
      (frm←Add _.Form).id←'myform'
     ⍝ frm.Set 'enctype' 'multipart/form-data'
      fs←frm.Add _.fieldset
      fs.Add _.legend'Customer information'
      in←Labels{x←fs.Add _.label ⍺ ⋄ x←fs.Add _.input ⍵ ⋄ x⊣fs.Add _.br}¨Types
      in.type←in.name←Types
      :If 0
          (ig←fs.Add InputGrid).Border←0
          ig.Labels←Types
          ig.Inputs←{New input ⍵}¨Types
          ig.Inputs.type←ig.Inputs.name←Types
          ig.Inputs.Value←Data
          ig.Inputs.On⊂'change' 'CallbackFn'
      :EndIf
      (fs.Add _.input).(name type value)←⊂'Submit'
     
      (Add _.div).id←'changed'
    ∇

    ∇ r←CallbackFn;data
      :Access public   
      ...
      data←Get _what
      Data[Types⍳⊂_what]←⊂data
      r←'#changed'Replace(⎕←'New value for ',_what,': ',data)
    ∇
:EndClass