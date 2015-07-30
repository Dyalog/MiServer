:Class index : MiPageTemplate

    ∇ Compose;left;mid;right;sp;vp
      :Access public
     
      Use'ejTab' ⍝ May get added by callbacks
     
      newdiv←{⍵ New _.div}                                  ⍝ Make a div
      textspan←{'.textspan'New _.span ⍵}                    ⍝ And a span
      horz←{⍺←⊣ ⋄ r⊣(r←⍺ New _.StackPanel ⍵).Horizontal←1}  ⍝ Horizontal StackPanel
     
      Add _.StyleSheet'/Styles/homepage.css'
     
      (left mid right)←newdiv¨'leftBar' 'midBar' 'rightBar'
     
      sp←'mainSP'horz left mid right
      sp.Items[1 3].style←⊂'width: 150px; max-height: 300px;'
      sp.Items[2].style←⊂'margin: 5px;'
      sp.style←'height: 250px; width: 100%;'
     
      vp←Add _.StackPanel sp(newdiv'divSampleTab')
      vp.style←'width:100%'
     
      PopulateLeft left
      PopulateMid mid
      PopulateRight right
    ∇

    ∇ PopulateLeft thediv;class;depths;group;items;names;ref;samples;tv;vp
     ⍝ Populate the Left Bar
     
      names←{0::⍬ ⋄ ¯7↓¨6⊃#.Files.DirX #.Boot.AppRoot,⍵}'/Examples/Apps/*.dyalog'
      items←(1,(⍴names)⍴2),(⍪(⊂'Apps'),names),⊂'Apps'
     
      :For (group ref) :In ('Base HTML'_html)('Wrapped HTML'_HTML)('Dyalog Controls'_DC)('JQueryUI'_JQ)('SyncFusion'_SF)
          names←{({#.HtmlElement=⊃⊃⌽⎕CLASS ⍵}¨⍵)/⍵}ref.(⍎¨⎕NL ¯9.4)
          class←2↓⍕ref               ⍝ Remove leading #.
          names←(3+⍴class)↓¨⍕¨names  ⍝
          samples←class FindSamples names
          names←(⊂group),⊃,/(⊂¨names),¨samples
          depths←1,∊2,⍪(⍴¨samples)⍴¨3
          items⍪←depths,(⍪names),(⊂class)
      :EndFor
     
      thediv.Add textspan'Samples'
      tv←thediv.Add _.ejTreeView(0 ¯1↓Samples←items)
      tv.style←'max-height: 300px'
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

    ∇ PopulateMid mid;btns;size
     
      mid.Add¨3⍴_.br
      btns←LinkButton'Download MiServer' '/styles/images/download-zone.png' '/download...'
      btns,←LinkButton'Read More' '/styles/images/support.png' '/readmore...'
      mid.Add horz btns
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
     
      :If (depth=2)∧3 'Simple'≡Samples[(1↑⍴Samples)⌊node+1;1 3]
          (depth sample)←3 'Simple' ⍝ Clicked on control which has a Simple Sample
      :EndIf
      space,←(space≡'_HTML')/'plus' ⍝ _HTML is in the HTMLplus folder
     
      :If (depth=2)∧section≢'Apps'  ⍝ Depth 2 outside Apps means no sample
          r←'#divSampleTab'Replace''
      :Else
          folder←#.Boot.AppRoot
          url←'Examples/',(1↓space),'/',control,sample,'.dyalog'
          code←{0::,⊂'[file read failed]' ⋄ #.UnicodeFile.ReadNestedText ⍵}folder,url
          (code←New _.div(#.HTMLInput.APLToHTMLColour code)).Set'id="codeblock"'
          iframe←'src' 'width'(New _.iframe).Set('/',url,'?NoWrapper=1')800
          sp←New horz code iframe
          r←'#divSampleTab'Replace sp
      :EndIf
    ∇


:EndClass