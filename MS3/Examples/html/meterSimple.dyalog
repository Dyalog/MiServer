:class meterSimple: MiPageSample
⍝ Control:: _html.meter
⍝ Description:: Display a gauge for measurement within a given range

    ∇ Compose
      :Access public
      (min val max)←+\?3/9
      Add(val' in the range from 'min' to 'max': ')
      ('value'val)('min'min)('max'max)Add _.meter
     
      pct←?0
      Add('%: ',⍨⍕⌊0.5+100×pct)
      'value'pct Add _.meter
     
    ∇
:endclass