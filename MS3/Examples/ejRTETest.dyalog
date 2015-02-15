:Class ejRTETest : MiPage

  ∇ Render;rte
    :Access Public
    rte←Add _SF.ejRTE
⍝    rte.(Rows Cols)←10 70
    'rows' 'cols'rte.Container.SetAttr 10 70
    'foo'rte.Option'abc'
    rte.Container.Content←'<i>This is a test</i>'
  ∇

:EndClass