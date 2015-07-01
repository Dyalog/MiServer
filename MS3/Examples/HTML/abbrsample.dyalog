:class abbrsample : MiPageSample
    ∇ Compose
      :Access public
      Add _.b'abbr'
      Add ' is used for abbreviations in your web pages.<br/>Setting the title attribute will display the its text when you hover over the abbreviation'
     
      Add¨2⍴_.br

      Add'Hover over '
      ('title' 'A Programming Language')Add _.abbr'APL'
      Add' to reveal what it stands for'
     
      Add¨2⍴_.br
      Add'Hint: you may want to define a style to make it more obvious to hover over the abbreviation'
      Add _.br
      Add'Hover over '
      ('title' 'A Programming Language' 'style' 'color:red')Add _.abbr'APL'
      Add' to reveal what it stands for'
    ∇
:endclass
