:class About : MiPageSample
⍝ Control:: About MiServer
⍝ Description:: Introduction to MiServer 3.0 with links to external and Dyalog-provided resources

    ∇ Compose
      :Access public
     
      link←{myp←⍺.Add _.p
          ('target' '_blank')('href'(⊃⌽⍵))myp.Add _.a(⊃⍵)
      }
     
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
     
      (Add _.StackPanel((left right)←New¨2/_.fieldset)).Horizontal←1
     
      left.Add _.legend'External Resources'
      left link'SyncFusion APIs' 'http://helpjs.syncfusion.com/js/api/ejaccordion'
      left link'SyncFusion Demos' 'http://js.syncfusion.com/demos/web/'
      left link'JQueryUI' 'https://jqueryui.com/'
      left link'HTML' 'http://www.w3schools.com/html/'
      left link'CSS' 'http://www.w3schools.com/css/'
     
      right.Add _.legend'MiServer Resources'
      right link'Support and feedback' 'mailto:support@dyalog.com'
      right link'Download' 'https://github.com/Dyalog/MiServer'
      right link'Forum' 'http://www.dyalog.com/forum/viewforum.php?f=34'
      right link'Blog' 'http://www.dyalog.com/blog/category/miserver/'
      right link'Dyalog Ltd.' 'https://www.dyalog.com/'
    ∇


:endclass