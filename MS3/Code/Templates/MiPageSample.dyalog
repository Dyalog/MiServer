﻿:Class MiPageSample : #.MiPage
   ⍝ This is a template that "wraps" the page content by
   ⍝ - adding a header and footer
   ⍝ - adding a handler that will toggle the display of the web page and its APL source code

    ∇ {r}←Wrap;lang;server;c;src;ctrlsdiv
      :Access Public
     
      :If 0∊⍴Get'nowrapper'
          server←_Request.Server
     
        ⍝ we need jQuery to toggle content/source, other resources will be loaded if needed
          Use'JQuery' ⍝ this is a resource defined in Config/Resources.xml
     
        ⍝ set the title display in the browser to the name of the application defined in Config/Server.xml
          Add _.title server.Config.Name
     
        ⍝ add a link to our CSS stylesheet
          _CssReset←'/Styles/cssreset.css'
          _CssOverride←'/Styles/sampleStyles.css'
     
        ⍝ set a meta tag to make it explicitly UTF-8
        ⍝  (Add _.meta).Set'http-equiv="content-type" content="text/html;charset=UTF-8"'
     
        ⍝ wrap the content of the <body> element in a div
          'contentblock'Body.Push _.div
     
        ⍝ add a hidden division to the body containing the APL source code
          (Add _.div(#.HTMLInput.APLToHTMLColour src←⎕SRC⊃⊃⎕CLASS ⎕THIS)).Set'id="codeblock"' 'style="display: none;"'
     
        ⍝ create a division with info about the controls used
          ctrlsdiv←CtrlsDiv src
     
        ⍝ extract the content and re-write it in parallel to the controls info div
          c←Body.Content
          Body.Content←''
          (Body.Add _.StackPanel ctrlsdiv c).Horizontal←1
     
        ⍝ wrap the content of the <body> element in a div
          '.bodyblock'Body.Push _.div
     
        ⍝ add the footer to the bottom of the page
          ⍝Add #.Files.GetText server.Config.Root,'Styles\footer.txt'
     
        ⍝ add the header to the top of the page and wrap the body in a div with id="wrapper"
          Body.Push #.Files.GetText server.Config.Root,'Styles\banner.txt'
     
          'wrapper'Body.Push _.div
     
        ⍝ add a JQuery event handler to toggle the web page/APL source code
          Add _.Script'$(function(){$("#banner-logo").on("click", function(evt){$("#contentblock,#codeblock,.widgethelp").toggle(1);});});'
          ⍝Add _.Script'$(function(){$("#banner-logo").on("click", function(evt){$("#contentblock,#codeblock,.widgethelp").toggle(250,"swing");});});'
     
        ⍝ set the language for the page
          lang←server.Config.Lang ⍝ use the language specified in Server.xml
          Set'lang="',lang,'" xml:lang="',lang,'" xmlns="http://www.w3.org/1999/xhtml"'
      :Else
          Head.Add _.StyleSheet'/Styles/sampleStyles.css'
          Body.class←'bodyblock'
      :EndIf
     ⍝ call the base class Wrap function
     
      r←⎕BASE.Wrap
    ∇

    ∇ r←CtrlsDiv source;control;controls;lia;ns;ul;cali;h;li
     ⍝ Creates a div with info on the controls used in source
     
     ⍝ First we extract proper lists of controls
      controls←5/⊂''
      source←(⍳∘'⍝'↑⊢)¨source      ⍝ remove comments
      source←{⍵/⍨~≠\''''=⍵}¨source ⍝ remove strings but leaves one ' as separator
      :For control :In 'Handler' 'Position'~⍨∪('_(DC|SF|JQ|JS|html|)\.(\w+)'⎕S'\2')source ⍝ find controls
          :Trap 6 ⍝ unknown
              ns←(#.MS3SiteUtils.NSS(∨/⍷)¨⊂⍕⍎'#._.',control)/⍳⍴#.MS3SiteUtils.NSS ⍝ add to right list
          :Else
              ns←⍬
          :EndTrap
          controls[ns],←⊂⊂control
      :EndFor
      controls←{⍵[⍋↑⍵]}¨controls   ⍝ sort the lists
     
     ⍝ Now we create and populate the info div
      r←'.widgethelp'New _.div(New _.h3'Controls used<br />on this page')
      h←'http://'
      :For ns :In (×≢¨controls)/⍳⍴#.MS3SiteUtils.NSS ⍝ do not process if empty
          '.widgetNs'r.Add _.span,⊂ns⊃#.MS3SiteUtils.GROUPS
          ul←r.Add _.ul
          :For control :In ns⊃controls
              li←'<li><a target="_blank" href="/Documentation/DyalogAPIs/WidgetDoc?namespace=_',ns⊃#.MS3SiteUtils.NSS
              ul.Add li,'&amp;widget=',control,'">',control,'</a></li>'
          :EndFor
      :EndFor
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
