:class About : MiPageSample
⍝ Control:: About
⍝ Description:: Introduction to MiServer 3.0 and useful links

    ∇ Compose
      :Access public
     
      link←{'target=_blank'((links[⍺]).Add _.p).Add _.A ⍵}
     
      myp←Add _.p'MiServer is a free, open-source web server implemented in Dyalog '
      myp.Add'APL. It enables those knowledgable in APL to build sophisticated '
      myp.Add'websites without any knowledge of HTML, JavaScript, JQuery, etc.'
     
      myp←Add _.p'This website serves as documentation, but at the same time, it '
      myp.Add'showcases many of the core capabilities, as it is built entirely in '
      myp.Add'APL using only MiServer 3.0''s default components. As such, the source '
      myp.Add'code for each sample is at the bottom of the page. You can also open '
      myp.Add'a sample in a new tab by clicking the title, then click the large '
      'src=../Data/Dyalog-D.png' 'alt="Dyalog-D"' 'height="12px"'myp.Add _.img
      myp.Add'to toggle source/output. This applies to the initial index page too.'
     
      (Add _.StackPanel(links←New¨2/_.fieldset)).Horizontal←1
     
      links[1].Add _.legend'External Resources'
      1 link'SyncFusion APIs' 'http://helpjs.syncfusion.com/js/api/ejaccordion'
      1 link'SyncFusion Demos' 'http://js.syncfusion.com/demos/web/'
      1 link'JQueryUI' 'https://jqueryui.com/'
      1 link'HTML' 'http://www.w3schools.com/html/'
      1 link'CSS' 'http://www.w3schools.com/css/'
     
      links[2].Add _.legend'MiServer Resources'
      2 link'Support and feedback' 'mailto:support@dyalog.com'
      2 link'Download' 'https://github.com/Dyalog/MiServer'
      2 link'Forum' 'http://www.dyalog.com/forum/viewforum.php?f=34'
      2 link'Blog' 'http://www.dyalog.com/blog/category/miserver/'
      2 link'Dyalog Ltd.' 'https://www.dyalog.com/'
    ∇

    
:endclass