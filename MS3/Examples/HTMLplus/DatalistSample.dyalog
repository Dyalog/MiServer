:class DatalistSample : MiPage⍝Sample
    ∇ Compose
      :Access public 
      Add'Here is a data list of options:'
      Add _.Datalist'opts'('First option' 'Second choice' 'Third possibility')
      'list' 'opts'Add _.input
      Add'Here the choice becomes a number in praxis:'
      Add _.Datalist'nums'(↑(1 'First option')(2 'Second choice')(3 'Third possibility'))
      'list' 'nums'Add _.input
     
    ∇
:endclass
