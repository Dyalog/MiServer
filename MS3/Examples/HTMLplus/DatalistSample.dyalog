:class DatalistSample : MiPageSample
    ∇ Compose
      :Access public 
      Add'Here is a data list of options:'
      'opts' Add _.Datalist ('First option' 'Second choice' 'Third possibility')
      'list' 'opts'Add _.input
      Add'Here, a number is displayed, but the result is the text:'
      'nums'Add _.Datalist(↑(1 'First option')(2 'Second choice')(3 'Third possibility'))
      'list' 'nums'Add _.input
     
    ∇
:endclass
