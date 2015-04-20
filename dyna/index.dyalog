:Class index : DyNApage
  ∇ Render;f;list
    :Access public
    Add h2'Welcome to the DyNA MiServer 3.0 Workshop'
    list←Add ul
    f←{(list.Add li).Add a(⍺('href'⍵))}
    'Bubble Chart'f'bubblechart'
    'Data Binding'f'databinding'
    'Input Form with Syncfusion DatePicker'f'inputform'
    'Mortgage Calculation (callback demo)'f'mortgage'
    'MiServer 2 Game of Life'f'life'
  ∇
:EndClass