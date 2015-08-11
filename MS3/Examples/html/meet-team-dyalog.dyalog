:class meet_team_dyalog: MiPageSample
⍝ Control::
⍝ Description:: Set a document base URI 

    ∇ Compose
      :Access public 
      'href' 'http://www.dyalog.com/'Add _.base
      Add'Now try again. This time we''ve specified the base URI as http://www.dyalog.com/: '
      'href' 'meet-team-dyalog'Add _.a'meet-team-dyalog'
      Add¨2/_.br
      Add'Also notice how the Dyalog logo in the top left corner fails to load, and how the "Home" '
      Add'button in the top right coner now leads to dyalog.com. This is because the browser now '
      Add'lets all relative references have http://www.dyalog.com/ as origin.'
    ∇

:endclass
