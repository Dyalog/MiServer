:Class index2 : MiPageSample

    ∇ Compose;left;mid;right;sp;vp
      :Access public
     
      Use'ejTab' ⍝ May get added by callbacks
     
      newdiv←{⍵ New _.div}                                  ⍝ Make a div
      textspan←{'.textspan'New _.span ⍵}                    ⍝ And a span
      horz←{⍺←⊣ ⋄ r⊣(r←⍺ New _.StackPanel ⍵).Horizontal←1}  ⍝ Horizontal StackPanel
     
      Add _.StyleSheet'/Styles/homepage.css'
     
      (left mid right)←newdiv¨'leftBar' 'midBar' 'rightBar'
     
      sp←'mainSP'horz left mid right
      sp.Items[1 3].style←⊂'width: 200px; max-height: 450px;'
      sp.Items[2].style←⊂'margin: 5px;'
      sp.style←'height: 250px; width: 100%;'
     
      vp←Add _.StackPanel sp
      vp.style←'width:100%'
     
      PopulateLeft left
      PopulateMid mid
      PopulateRight right
    ∇

    ∇ PopulateLeft thediv;class;depths;group;items;names;ref;samples;tv;vp
     ⍝ Populate the Left Bar
     
     ⍝ SAMPLE APPS ⍝⍝⍝
      Apps←{0::⍬ ⋄ ¯7↓¨6⊃#.Files.DirX #.Boot.AppRoot,⍵}'/Examples/Apps/*.dyalog'
      thediv.Add textspan'Sample Apps'
      tv←thediv.Add _.ejTreeView(1,[1.5]Apps)
      tv.style←'max-height: 250px'
      tv.On'nodeSelect' 'onSelectApp'('node' 'eval' 'argument.id')
     
      thediv.Add _.hr
     
     ⍝ CONTROLS ⍝⍝⍝
      items←0 3⍴⍬
      :For (group ref) :In ('Base HTML'_html)('Wrapped HTML'_HTML)('Dyalog Controls'_DC)('JQueryUI'_JQ)('SyncFusion'_SF)
          names←{({#.HtmlElement=⊃⊃⌽⎕CLASS ⍵}¨⍵)/⍵}ref.(⍎¨⎕NL ¯9.4)
          class←2↓⍕ref               ⍝ Remove leading #.
          names←(3+⍴class)↓¨⍕¨names  ⍝
          samples←class FindSamples names
          names←(⊂group),⊃,/(⊂¨names),¨samples
          depths←1,∊2,⍪(⍴¨samples)⍴¨3
          items⍪←depths,(⍪names),(⊂class)
      :EndFor
      thediv.Add textspan'Controls'
      tv←thediv.Add _.ejTreeView(0 ¯1↓Samples←items)
      tv.style←'max-height: 450px'
      tv.On'nodeSelect' 'onSelectSample'('node' 'eval' 'argument.id')
     
     
    ∇

    ∇ r←space FindSamples names;folder;i;samples;suffix
      space,←(space≡'_HTML')/'plus' ⍝ _HTML is in the HTMLplus folder
      folder←#.Boot.AppRoot,'Examples/',(1↓space),'/'
      samples←{0::⍬ ⋄ ¯7↓¨6⊃#.Files.DirX ⍵}folder,'*.dyalog'
      r←(⍴names)⍴⊂''
     
      :For suffix :In 'Simple' 'Advanced'
          i←(((-⍴suffix)↑¨samples)∊⊂suffix)/⍳⍴samples
          i←{(⍵≤⍴names)/⍵}names⍳(-⍴suffix)↓¨samples[i]
          r[i]←r[i],¨⊂⊂suffix
      :EndFor
    ∇

    ∇ PopulateRight thediv;pages;ul
     ⍝ Populate the Right Bar
     
      thediv.Add textspan'Documentation'
      pages←1 2⍴'SyncFusion APIs' 'http://helpjs.syncfusion.com/js/api/ejaccordion'
      pages⍪←'SyncFusion Demos' 'http://js.syncfusion.com/demos/web/'
      pages⍪←'JQueryUI' 'https://jqueryui.com/'
      pages⍪←2 2⍴'HTML' 'http://www.w3schools.com/html/' 'CSS' 'http://www.w3schools.com/css/'
      pages[;2]←↓pages[;,2],⊂'target=_blank"'
      ul←thediv.Add _.Ul pages
      ul.style←'font-size: 10px;'
     
      thediv.Add _.br
     
      thediv.Add textspan'Resources'
      pages←1 2⍴'MiServer Forum' 'http://www.dyalog.com/forum/viewforum.php?f=34'
      pages⍪←'Blog' 'http://www.dyalog.com/blog/category/miserver/'
      pages⍪←'GitHub Repo' 'https://github.com/Dyalog/MiServer'
      pages⍪←'dyalog.com' 'http://www.dyalog.com'
      pages[;2]←↓pages[;,2],⊂'target=_blank"'
      ul←thediv.Add _.Ul pages
      ul.style←'font-size: 10px;'
    ∇

    ∇ PopulateMid mid;btns;size;space;code;middiv;url
     
⍝      btns←LinkButton'Download MiServer' '/styles/images/download-zone.png' '/download...'
⍝      btns,←LinkButton'Read More' '/styles/images/support.png' '/readmore...'
⍝      (space←New _.div).style←'width:100px;'
⍝      ('divSampleTab'mid.Add _.div).Add¨(3⍴_.br),horz space,btns
     
      middiv←'divSampleTab'mid.Add _.div
     
      url←'/Examples/Apps/about.dyalog'
      ('src=',url,'?NoWrapper=1')'width="600"' 'height="450"'middiv.Add _.iframe
     
      code←#.HTMLInput.APLToHTMLColour{0::,⊂'[file read failed]' ⋄ #.UnicodeFile.ReadNestedText ⍵}#.Boot.AppRoot,url
      middiv.Add _.div code
     
    ∇

    ∇ r←LinkButton(label image link);a;d;size
     
      d←newdiv'.linkbutton'
      size←'height: 32px; width: 32px;'
      'src' 'style'(d.Add _.img).Set image size
      d.Add textspan label
      r←New _.A d link
    ∇


    ∇ r←onSelectSample;code;control;depth;folder;html;i;iframe;node;p;page;sample;samples;section;simple;source;sp;space;t;tab;text;titles;url
      :Access Public
     ⍝ When a sample is selected, call this
      node←⊃2⊃⎕VFI{((+\⍵='_')⍳2)↓⍵}⊃_PageData.node
     
      (control space section)←3↑,Samples[1+node-(⌽node↑Samples[;1])⍳2 1;2 3]
      (depth sample)←Samples[node;1 2]
     
      :If (depth=2)∧3 'Simple'≡Samples[(⊃⍴Samples)⌊node+1;1 2]
          (depth sample)←3 'Simple' ⍝ Clicked on control which has a Simple Sample
      :EndIf
      space,←(space≡'_HTML')/'plus' ⍝ _HTML is in the HTMLplus folder
      :If depth=2  ⍝ Depth 2 means no sample
          r←'#divSampleTab'Replace''
      :Else
          folder←#.Boot.AppRoot
          url←'Examples/',(1↓space),'/',control,sample,'.dyalog'
          code←{0::,⊂'[file read failed]' ⋄ #.UnicodeFile.ReadNestedText ⍵}folder,url
          code←New _.div(#.HTMLInput.APLToHTMLColour code)⍝).Set'id="codeblock"'
          iframe←'src' 'width' 'height'(New _.iframe).Set('/',url,'?NoWrapper=1')600 450
          r←'#divSampleTab'Replace iframe
          r,←'#divSampleTab'Append code
      :EndIf
    ∇

    ∇ r←onSelectApp;code;iframe;node;sp;url;app
      :Access Public
     ⍝ When an app is selected, call this
      node←⊃2⊃⎕VFI{((+\⍵='_')⍳2)↓⍵}⊃_PageData.node
      app←node⊃Apps
      url←'Examples/Apps/',app,'.dyalog'
      code←{0::,⊂'[file read failed]' ⋄ #.UnicodeFile.ReadNestedText ⍵}#.Boot.AppRoot,url
      code←New _.div(#.HTMLInput.APLToHTMLColour code)⍝).Set'id="codeblock"'
      iframe←'src' 'width' 'height'(New _.iframe).Set('/',url,'?NoWrapper=1')600 450
      r←'#divSampleTab'Replace iframe
      r,←'#divSampleTab'Append code
     
    ∇


:EndClass