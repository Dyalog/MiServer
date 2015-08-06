:class meet_team_dyalog: MiPageSample
⍝ Control::
⍝ Description:: Set a document base URI 

    ∇ Compose
      :Access public 
      'href' 'http://www.dyalog.com/' 'target' '_blank' Add _.base
      Add 'Now try again. This time we''ve specified the base URI as http://www.dyalog.com/: '
      'href' 'meet-team-dyalog'Add _.a 'meet-team-dyalog'
    ∇

:endclass
