:class navSimple : MiPageSample
⍝ Control:: _html.nav _html.a
⍝ Description:: Mark the main navigation controls

    ∇ Compose
      :Access public
     
      link←{('target=_blank')('href="',(2⊃⍵),'"')(myfs.Add _.p).Add _.a(⊃⍵)}
     
      (myfs←Add _.fieldset).Add _.legend'Navigation'
      link'Home' 'https://www.dyalog.com/'
      link'Wiki' 'http://aplwiki.com'
      link'Blog' 'http://www.dyalog.com/blog/'
      link'Forum' 'http://www.dyalog.com/forum/'
      link'Download' 'http://www.dyalog.com/download-zone.htm'
    ∇


:endclass