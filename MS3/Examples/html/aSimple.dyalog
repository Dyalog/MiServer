:class aSimple : MiPageSample
⍝ Control:: _html.a  
⍝ Description:: Insert a hyperlink

    ∇ Compose
      :Access public 
      Add 'Click '
      'href' 'http://www.dyalog.com/meet-team-dyalog.htm'Add _.a'here'
      Add ' to meet us.'
    ∇

:endclass
