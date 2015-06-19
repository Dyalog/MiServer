:class captionsample : MiPage⍝Sample
    ∇ Compose
      :Access public 
      mytable←Add _.table
	  mytable.Add _.caption 'A caption is the title of a table'
      (mytable.Add _.tr).Add¨3/⊂_.th 'Cell'
	  (mytable.Add _.tr).Add¨3/⊂_.th 'Cell'
	  Add'That''s all.'
    ∇
:endclass
