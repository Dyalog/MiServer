:Class index : Dyalog14
  ∇ Render;f;list
    :Access public
    Add h2'Welcome to MiServer 3.0'
    list←Add ul
    f←{(list.Add li).Add a(⍺('href'⍵))}
    'EAWC without chaining'f'example'
    'EAWC with chaining'f'example2'
    'Input Form with Syncfusion DatePicker'f'inputform'
    'Mortgage Calculation (callback demo)'f'mortgage'
    'Syncfusion Accordion'f'accordion'
    'Syncfusion TagCloud w/database access'f'tagcloud'
    'Syncfusion BubbleChart'f'bubblechart'
    'Syncfusion "Friends" TagCloud'f'friends'
    'Syncfusion "Friends" TagCloud with highlighting'f'fancyfriends'
  ∇
:EndClass