:class asample: MiPage⍝Sample
⍝ Control:: HTML.a 
⍝ Description:: this is an example of use of the "a" tag which follows a link when the element is clicked

    ∇ Compose
      :Access public 
      Add'Click '
      'href' 'http://www.dyalog.com/meet-team-dyalog.htm'Add _.a'here'
      Add' to meet us.'
    ∇
:endclass
