:Class ejColorPickerSample : MiPageSample
    
    PRESETS←'[none]' 'Basic' 'Mono Chrome' 'Flat Colors' 'Sea Wolf' 'Web Colors' 'Sandy' 'Pink Shades' 'Misty' 'Citrus' 'Vintage' 'Moon Light' 'Candy Crush'

    ∇ Compose;rte;frm
      :Access Public   
     
      (frm←Add Form).id←'myform'
     
      frm.Add h2'Default Functionality'
      normal←'NormalCP'frm.Add _SF.ejColorPicker'#278787'
      normal.On'change' 'CallbackFn'
     
      frm.Add h2'Inline'
     
      frm.Add'Select a "preset" colour scheme: '
      selpreset←'selpreset'frm.Add Select(⊂PRESETS)
      selpreset.On'change' 'CallbackFn'
      frm.Add¨br br
     
      inline←'InlineCP'frm.Add _SF.ejColorPicker'#278787'
      inline.Set'displayInline'_true
      inline.Set'modelType' 'palette'
      inline.Set'presetType' 'basic'
      inline.On'change' 'CallbackFn'
     
      (frm.Add div).id←'result'
    ∇
    
    ∇ r←CallbackFn;preset
      :Access Public                                               
     
      :Select _what
      :Case 'selpreset'
          :If '[none]'≡preset←Get'selpreset'
              r←'modelType'inline.Update'picker'
          :Else
              r←'modelType'inline.Update'palette'
              r,←'presetType'inline.Update(#.Strings.lc preset~' ')
          :EndIf
      :Else
          r←'#result'Replace p('Selected from ',_what,': ',,⍕Get _what)
      :EndSelect
    ∇

:EndClass