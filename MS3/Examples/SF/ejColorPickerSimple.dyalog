:Class ejColorPickerSimple : MiPageSample
⍝ Control:: _SF.ejColorPicker _.Select
⍝ Description:: Insert a basic colour picker with preset palettes

    PRESETS←'[none]' 'Basic' 'Mono Chrome' 'Flat Colors' 'Sea Wolf' 'Web Colors' 'Sandy' 'Pink Shades' 'Misty' 'Citrus' 'Vintage' 'Moon Light' 'Candy Crush'

    ∇ Compose
      :Access Public
     
      Add _.h2'Default Functionality'
      normal←'NormalCP'Add _.ejColorPicker'#278787'
      normal.On'close' 'CallbackFn'('Color' 'model' 'value')
     
      Add _.h2'Inline'
     
      Add'Select a "preset" colour scheme: '
      selpreset←'selpreset'Add _.Select PRESETS
      selpreset.On'change' 'CallbackFn'
      Add¨_.br _.br
     
      inline←'InlineCP'Add _SF.ejColorPicker'#278787'
      inline.Set⊂'displayInline'_true
      inline.Set⊂'modelType' 'palette'
      inline.Set⊂'presetType' 'basic'
      inline.On'change' 'CallbackFn'('Color' 'model' 'value')
      Add _.br
     
      'result'Add _.div
    ∇

    ∇ r←CallbackFn;preset
      :Access Public
     
      :Select _what
      :Case 'selpreset'
          :If '[none]'≡preset←_value
              r←'modelType'inline.Update'picker'
          :Else
              r←'modelType'inline.Update'palette'
              r,←'presetType'inline.Update(#.Strings.lc preset~' ')
          :EndIf
      :Else
          r←'#result'Replace _.p('Selected from ',_what,': ',,⍕Get'Color')
      :EndSelect
    ∇

:EndClass