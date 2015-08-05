:class articleSimple : MiPageSample
⍝ Control:: _html.article
⍝ Description:: mark an independent section of a document, page, or site

    ∇ Compose
      :Access public 
    ⍝ This is the introduction text
      Add'At one time, someone wrote:'
     
    ⍝ Then we put in an article section
      art←Add _.article
    ⍝ whose background is set light grey
      'style'art.Set'background-color:lightgrey'
    ⍝ Then we add the paragraphs that make it
      art.Add _.p'Articles can stand on their own, e.g. forum/blog posts, news stories, comments.'
      art.Add _.p'They should be clear and concise also.'
     
    ⍝ Finally we add text after the article
      Add'They could be right.'
    ∇

:endclass
