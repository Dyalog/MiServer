:class meet_team_dyalogsample: MiPage⍝Sample
⍝ Control:: _html.meet_team_dyalog 
⍝ Description:: this is an example of use of the base tag (see basesample above) 

    ∇ Compose
      :Access public 
      'href' 'http://www.dyalog.com/' 'target' '_blank' Add _.base
      Add 'Now try again. This time we''ve specified the base URL as http://www.dyalog.com/: '
      'href' 'meet-team-dyalog'Add _.a 'meet-team-dyalog'
    ∇

:endclass
