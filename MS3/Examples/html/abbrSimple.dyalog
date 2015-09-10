:class abbrSimple: MiPageSample
⍝ Control:: _html.abbr 
⍝ Description:: Display definition when hovering over an abbreviation

    ∇ Compose;p
      :Access Public 
     
      p←Add _.p ⍝ All text should be in a paragraph
      p.Add'Hover over '
      attrs←'title' 'HTML abbreviation element' ⍝ The title attribute defines the text to display
      attrs p.Add _.abbr'abbr'
      p.Add' with the mouse, to see how this element can be used to make expansions of abbreviations visible.'
    ∇
:endclass
