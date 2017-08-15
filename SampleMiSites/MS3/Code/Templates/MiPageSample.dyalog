:Class MiPageSample : #.MiPage
   ⍝ This is a template that "wraps" the page content by
   ⍝ - adding a header and footer
   ⍝ - adding a handler that will toggle the display of the web page and its APL source code

    ∇ {r}←Wrap;lang;server;src;c
      :Access Public
     
      :If 0∊⍴Get'nowrapper'
          server←_Request.Server
     
        ⍝ we need jQuery to toggle content/source, other resources will be loaded if needed
          Use'JQuery' ⍝ this is a resource defined in Config/Resources.xml
     
        ⍝ set the title display in the browser to the name of the page or application
          Add _.title('Advanced' 'Simple' 'Examples?' 'index' '_'⎕R'' '' ''server.Config.Name' '((-'.'⍳⍨⌽)↓⊢↑⍨1-'/'⍳⍨⌽)_Request.Page)
     
        ⍝ add a link to our CSS stylesheet
          _CssReset←'/Styles/cssreset.css'
          _CssOverride←'/Styles/sampleStyles.css'
     
        ⍝ set a meta tag to make it explicitly UTF-8
        ⍝  (Add _.meta).Set'http-equiv="content-type" content="text/html;charset=UTF-8"'
     
        ⍝ wrap the content of the <body> element in a div
          'contentblock'Body.Push _.div
     
        ⍝ add a hidden division to the body containing the APL source code
          (Add _.div(#.HtmlUtils.APLToHTMLColor src←⎕SRC⊃⊃⎕CLASS ⎕THIS)).Set'id="codeblock"' 'style="display: none;"'
     
     
        ⍝ extract the content and re-write it in parallel to the controls info div
          c←Body.Content
          Body.Content←''
          Body.Add c
     
        ⍝ create a division with info about the controls used
          Body.Add CtrlsDiv src
     
        ⍝ wrap the content of the <body> element in a div
          '.bodyblock'Body.Push _.div
     
        ⍝ add the header to the top of the page and wrap the body in a div with id="wrapper"
          Body.Push #.Files.ReadText server.Config.Root,'Styles/banner.txt'
     
          'wrapper'Body.Push _.div
     
        ⍝ add a JQuery event handler to toggle the web page/APL source code
          Add _.Script ScriptFollows
          ⍝ $(function(){
          ⍝   $("#tocode").click(function(){
          ⍝     $("#contentblock").hide();
          ⍝     $("#codeblock").show();
          ⍝     $("#widgethelp").addClass("sliddown");
          ⍝     $("#topage").removeClass("activetab");
          ⍝     $("#tocode").addClass("activetab");
          ⍝   });
          ⍝   $("#topage").click(function(){
          ⍝     $("#contentblock").show();
          ⍝     $("#codeblock").hide();
          ⍝     $("#widgethelp").removeClass("sliddown");
          ⍝     $("#topage").addClass("activetab");
          ⍝     $("#tocode").removeClass("activetab");
          ⍝   });
          ⍝ });
     
      :Else
          Head.Add _.StyleSheet'/Styles/sampleStyles.css'
          Body.class←'bodyblock'
      :EndIf
     ⍝ call the base class Wrap function
     
      r←⎕BASE.Wrap
    ∇

    ∇ r←CtrlsDiv source;control;controls;ns;pattern
     ⍝ Creates a div with info on the controls used in source
     
     ⍝ First we extract proper lists of controls
      controls←5/⊂''
      source←(⍳∘'⍝'↑⊢)¨source      ⍝ remove comments
      source←{⍵/⍨~≠\''''=⍵}¨source ⍝ remove strings but leaves one ' as separator
      pattern←8⌽')\.(\w+)_(',∊#.MS3SiteUtils.NSS,¨'|'
      :For control :In 'Handler' 'Position'~⍨∪(pattern⎕S'\2')source ⍝ find controls
          :Trap 6 ⍝ unknown
              ns←(#.MS3SiteUtils.NSS(∨/⍷)¨⊂⍕⍎'#._.',control)/⍳⍴#.MS3SiteUtils.NSS ⍝ add to right list
          :Else
              ns←⍬
          :EndTrap
          controls[ns],←⊂⊂control
      :EndFor
      controls←{⍵[⍋↑⍵]}¨controls   ⍝ sort the lists
     
     ⍝ Now we create and populate the info div
      r←'<div id="widgethelp"><span id="used">Controls used on this page:</span>'
      :For ns :In (×≢¨controls)/⍳⍴#.MS3SiteUtils.NSS ⍝ do not process if empty
          r,←'&emsp;',(ns⊃#.MS3SiteUtils.GROUPS),':&nbsp;'
          :For control :In ns⊃controls
              r,←'<a target="_blank" href="/Documentation/DyalogAPIs/WidgetDoc?namespace=_',ns⊃#.MS3SiteUtils.NSS
              r,←'&amp;widget=',control,'">',control,'</a>,&nbsp;'
          :EndFor
          r↓⍨←¯7
      :EndFor
      r,←'</div>'
    ∇

    ∇ r←Walk content;e
      r←⍬
      :For e :In content
          :If (isClass e)∨isInstance e
              r←r,⊃⎕CLASS e
              :Trap 6
                  r,←Walk e.Content
              :EndTrap
          :EndIf
      :EndFor
    ∇

:EndClass
