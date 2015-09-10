﻿:class articleSimple : MiPageSample
⍝ Control:: _html.article
⍝ Description:: Mark an independent section

    ∇ Compose
      :Access public 
    ⍝ This is the introduction text
      Add'The following has never been published:'
     
    ⍝ Then we put in an article section
      art←Add _.article
    ⍝ whose background is set light grey
      'style'art.Set'background-color:lightgrey'
    ⍝ Then we add the paragraphs that make it
      art.Add _.p'Articles can stand on their own, e.g. forum/blog posts, news stories, comments.'
      p←art.Add _.p'While they may in principle contain contain any number of text paragraphs, '
      p.Add'they should ideally strive to be clear and concise.'
    ⍝ Finally we add text after the article
      Add'We hope to soon publish this useful information.'
    ∇

:endclass
