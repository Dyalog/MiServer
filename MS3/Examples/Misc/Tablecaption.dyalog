:class Tablecaption : MiPage⍝Sample
    ∇ r←Compose
      :Access public
      ∘∘∘
      mytable←Add _.Table(3 4⍴⍳12)
      mytable.Add _.caption'A caption is the title of a table'
      Add'That''s all.'
      r←⎕THIS
    ∇
:endclass
