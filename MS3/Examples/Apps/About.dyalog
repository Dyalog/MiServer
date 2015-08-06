:class About : MiPageSample
⍝ Title:: About
⍝ Description:: Introduction to MiServer 3.0 and useful links

    ∇ Compose
      :Access public
     
      link←{('target=_blank')('href="',(2⊃⍵),'"')((links[⍺]).Add _.p).Add _.a(⊃⍵)}
     
      myp←Add _.p'MiServer is a free, open-source web server implemented in Dyalog APL. '
      myp.Add'It enables those knowledgable in APL to build sophisticated '
      myp.Add'websites without any knowledge of HTML, JavaScript, JQuery, etc.'
     
      myp←Add _.p'This website serves as documentation, but at the same time, '
      myp.Add'it showcases many of the core capabilities, as it is built '
      myp.Add'entirely in APL using only MiServer 3.0''s default components.'
     
      myp←Add _.p'APL source code for each sample can be found at the bottom of the page. '
      myp.Add'Alternatively, click the title of the current sample to open it in a '
      myp.Add'separate tab. Then click the '
      'src=../Data/Dyalog-D.png' 'alt="Dyalog-D"' 'height="12px"'myp.Add _.img
      myp.Add'to toggle between source '
      myp.Add'and output. This applies to the initial index page too.'
     
      links←((Add _.table).Add _.tr).Add¨2/_.td
     
      links[1].Add _.h3'Documentation'
      1 link'SyncFusion APIs' 'http://helpjs.syncfusion.com/js/api/ejaccordion'
      1 link'SyncFusion Demos' 'http://js.syncfusion.com/demos/web/'
      1 link'JQueryUI' 'https://jqueryui.com/'
      1 link'HTML' 'http://www.w3schools.com/html/'
      1 link'CSS' 'http://www.w3schools.com/css/'
     
      links[2].Add _.h3'Resources'
      2 link'Questions, support, or feedback' 'mailto:support@dyalog.com'
      2 link'Download MiServer' 'https://github.com/Dyalog/MiServer'
      2 link'MiServer Forum' 'http://www.dyalog.com/forum/viewforum.php?f=34'
      2 link'Blog' 'http://www.dyalog.com/blog/category/miserver/'
      2 link'GitHub Repo' 'https://github.com/Dyalog/MiServer'
    ∇

    
:endclass