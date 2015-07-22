:Class ejRTETest : MiPage

  ∇ Render;rte
    :Access Public
    rte←Add _SF.ejRTE
⍝    rte.(Rows Cols)←10 70
    'rows' 'cols'rte.Container.Set 10 70
    'foo'rte.Set'abc'
    rte.Container.Content←'<i>This is a test</i>'
  ∇

:EndClass