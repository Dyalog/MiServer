:class about : MiPageSample
⍝ Description:: using a function to automate repeated composition

    ∇ Compose;myp;mydatalist;mya
      :Access public
      Add¨_html.h2 _html.title,¨⊂⊂'About'
      Add¨_.hr _.br
      myp←Add _.p'MiServer is a free, open-source web server implemented in '
      'href' 'http://www.dyalog.com'myp.Add _.a'Dyalog APL'
      myp.Add'. It enables those knowledgable in APL to build sophisticated '
      myp.Add'websites without any knowledge of HTML, JavaScript, JQuery, etc.'
     
      LinkButton'Download MiServer' '/styles/images/download-zone.png' 'https://github.com/Dyalog/MiServer'
      LinkButton'Questions, support, or feedback' '/styles/images/support.png' 'mailto:support@dyalog.com'
     
      Add¨3/_.br
      'src=..\Data\logo.png'Add _.img
     
    ∇
    
    ∇ LinkButton(label image link);lbdiv;lba
      lba←('href'link)Add _.a
      ('src'image)('style' 'height: 32px; width: 32px;')lba.Add _.img
      '.textspan'lba.Add _.big label
     
    ∇
:endclass