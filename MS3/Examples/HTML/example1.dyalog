:class example1 : MiPage⍝Sample
    ∇ Compose;myp
      :Access public
      Add _.title'This is the title of our page'
      ⍝Attr'bgcolor' 'd1a106'
      'src' 'dyaloglogo.png'Add _.img
      Add _.hr
      Add _.h2'Contact info'
      Add'Click '
      'href' 'http://www.dyalog.com'Add _.a'here'
      Add' Visit us!'
      Add _.br
      Add'Or send us an email at '
      'href' 'mailto:support@example.com'Add _.a'support@example.com'
      Add _.p'Some text about us.'
      myp←Add _.p
      myp.Add _.strong'More'
      myp.Add' stuff and info and such...'
     
      mydatalist←'id' 'opts'Add _.datalist
      'value' 'First option'mydatalist.Add _.option
      'value' 'Second choice'mydatalist.Add _.option
      'value' 'Third possibility'mydatalist.Add _.option
      'list' 'opts'Add _.input
    ∇
:endclass