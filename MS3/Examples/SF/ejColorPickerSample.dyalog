:Class ejColorPickerSample : MiPageSample

    PRESETS←'Basic' 'Mono Chrome' 'Flat Colors' 'Sea Wolf' 'Web Colors' 'Sandy' 'Pink Shades' 'Misty' 'Citrus' 'Vintage' 'Moon Light' 'Candy Crush'

    ∇ Render;rte
      :Access Public   
     
      Add h2'Default Functionality'
      normal←Add _SF.ejColorPicker'NormalCP' '#278787'
     ⍝ normal.On 'change' 'ColorChange'
     
      Add h2'Inline'
     
      Add'Select a "preset" colour scheme: '
      selpreset←Add Select'selpreset'PRESETS
      selpreset.On'select' 'CallbackFn'
     
      inline←Add _SF.ejColorPicker'InlineCP' '#278787'
      inline.Set'displayInline'_true
     
      Add div
    ∇
    
    ∇ r←CallbackFn;z
      :Access Public
     
      z←Get'selpreset'
      ∘∘∘
      'modelType'inline.Update'palette'
      'presetType'inline.Update Get'selpreset'
    ∇

:EndClass