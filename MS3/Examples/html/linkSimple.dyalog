:class linkSimple: MiPageSample
⍝ Control:: _html.link
⍝ Description:: Include an external resource

    ∇ Compose
      :Access public
      'href="../Data/duck.ico"' 'rel="icon"' 'type="image/x-icon"'Add _.link
     
      Add _.title'← LOOK HERE'
     
      ('href'_Request.Page)('target' '_blank')Add _.a'Click here to open this page in a separate tab or window'
     
      Add _.br
     
      Add'Your browser''s tab or window should then have a rubber duck icon.'
    ∇
 
:endclass