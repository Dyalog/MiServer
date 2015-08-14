:class navSimple : MiPageSample
⍝ Control:: _html.nav _html.a
⍝ Description:: Mark the main navigation controls

    ∇ Compose;nav
      :Access public
     
      link←{('target=_blank')('href="',(2⊃⍵),'"')(nav.Add _.p).Add _.a(⊃⍵)}
     
      nav←Add _.nav ⍝ If there is a block of links in a page, it should be in the <nav> section
      link'Home' 'https://www.dyalog.com/'
      link'Wiki' 'http://aplwiki.com'
      link'Blog' 'http://www.dyalog.com/blog/'
      link'Forum' 'http://www.dyalog.com/forum/'
      link'Download' 'http://www.dyalog.com/download-zone.htm'
    ∇

:endclass