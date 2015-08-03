:class About : MiPageSample
⍝ Title:: About
⍝ Description:: using a function to automate repeated composition

    ∇ Compose
      :Access public
     
      link←{('target=_blank')('href="',(2⊃⍵),'"')((links[⍺]).Add _.p).Add _.a(⊃⍵)}
     
      myp←Add _.p'MiServer is a free, open-source web server implemented in Dyalog APL. '
      myp.Add'It enables those knowledgable in APL to build sophisticated '
      myp.Add'websites without any knowledge of HTML, JavaScript, JQuery, etc.'
     
      links←((Add _.table).Add _.tr).Add¨2/_.td
     
      links[1].Add _.h3'Documentation'
      ⍝1 link'Questions, support, or feedback' 'mailto:support@dyalog.com'
      1 link'SyncFusion APIs' 'http://helpjs.syncfusion.com/js/api/ejaccordion'
      1 link'SyncFusion Demos' 'http://js.syncfusion.com/demos/web/'
      1 link'JQueryUI' 'https://jqueryui.com/'
      1 link'HTML' 'http://www.w3schools.com/html/'
      1 link'CSS' 'http://www.w3schools.com/css/'
     
      links[2].Add _.h3'Resources'
      2 link'Download MiServer' 'https://github.com/Dyalog/MiServer'
      2 link'MiServer Forum' 'http://www.dyalog.com/forum/viewforum.php?f=34'
      2 link'Blog' 'http://www.dyalog.com/blog/category/miserver/'
      2 link'GitHub Repo' 'https://github.com/Dyalog/MiServer'
      2 link'Dyalog APL' 'http://www.dyalog.com'
     
     
    ∇

    
:endclass