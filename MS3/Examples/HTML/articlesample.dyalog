:class articlesample: MiPage⍝Sample
⍝ Control:: HTML.article 
⍝ Description:: this is an example of use of the article container

    ∇ Compose
      :Access public 
      Add'At one time, someone wrote:'
      art←Add _.article 
      'style' art.Set 'background-color:lightgrey'
      art.Add _.p 'Articles can stand on their own, e.g. forum/blog posts, news stories, comments.'
      art.Add _.p 'They should be clear and concise also.'
      Add'They could be right.'
    ∇

:endclass
