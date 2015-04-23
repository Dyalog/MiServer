:Class ejColorPickerTest : MiPageSample

    ∇ Render;rte
      :Access Public
      normal←Add _SF.ejColorPicker'NormalCP'
      Add br
      inline←Add _SF.ejColorPicker'InlineCP'
      inline.Set'displayInline'_true
    ∇

:EndClass