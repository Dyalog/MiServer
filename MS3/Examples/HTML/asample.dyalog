:class asample : MiPage⍝Sample
⍝ Control:: HTML.asample 
⍝ Description:: this is an example of use of the anchor "a" tag

    ∇ Compose
      :Access public 
      Add 'Click '
      'href' 'http://www.dyalog.com/meet-team-dyalog.htm'Add _.a'here'
      Add ' to meet us.'
    ∇

:endclass
