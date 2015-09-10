:Class ejColorPickerTest : MiPageSample

    ∇ Render;rte
      :Access Public   
     
      Add h2'Default Functionality'
      normal←Add _SF.ejColorPicker'NormalCP' '#278787'
     ⍝ normal.On 'change' 'ColorChange'
     
      Add h2'Inline'
      inline←Add _SF.ejColorPicker'InlineCP' '#278787'
      inline.Set'displayInline'_true
     
      Add h2'Preset'
      preset←Add _SF.ejColorPicker'PresetCP' '#F29727'
      ptypes←Add _HTML.Select
      preset.Set('displayInline'_true)('modelType' 'palette')('presetType' 'citrus')
     
      Add div
    ∇
    
    ∇ r←ColorChange
      ∘∘∘
      r←'#output'Replace,⍕_what _PageData.stuff.model.selectedItemIndex
     
    ∇

:EndClass