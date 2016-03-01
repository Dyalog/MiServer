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
          (Add _.meta).Set'http-equiv="content-type" content="text/html;charset=UTF-8"'
     
        ⍝ wrap the content of the <body> element in a div
          Body.Push _.div'id="contentblock"'
     
        ⍝ add a hidden division to the body containing the APL source code
          (Add _.div(#.HTMLInput.APLToHTMLColour src←⎕SRC⊃⊃⎕CLASS ⎕THIS)).Set'id="codeblock"' 'style="display: none;"'
     
        ⍝ create a division with info about the controls used
          ctrlsdiv←CtrlsDiv src
     
        ⍝ extract the content and re-write it in parallel to the controls info div
          c←Body.Content
          Body.Content←''
          (Body.Add _.StackPanel ctrlsdiv c).Horizontal←1
     
        ⍝ wrap the content of the <body> element in a div
          Body.Push _.div'class="bodyblock"'
     
        ⍝ add the footer to the bottom of the page
          Add #.Files.GetText server.Config.Root,'Styles\footer.txt'
     
        ⍝ add the header to the top of the page and wrap the body in a div with id="wrapper"
          Body.Push #.Files.GetText server.Config.Root,'Styles\banner.txt'
     
          Body.Push _.div'id="wrapper"'
     
        ⍝ add a JQuery event handler to toggle the web page/APL source code
          Add _.Script'$(function(){$("#bannerimage").on("click", function(evt){$("#contentblock,#codeblock,.widgethelp").toggle(400,"swing");});});'
     
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
      controls←4/⊂''
      source←(⍳∘'⍝'↑⊢)¨source      ⍝ remove comments
      source←{⍵/⍨~≠\''''=⍵}¨source ⍝ remove strings but leaves one ' as separator
      :For control :In 'Handler' 'Position'~⍨∪('_(DC|SF|JQ|html|)\.(\w+)'⎕S'\2')source ⍝ find controls
         ⍝ add to right list: /¯¯¯¯¯SF¯¯¯¯¯\  /¯¯¯¯¯JQ¯¯¯¯¯\  /¯¯¯¯DC¯¯¯¯\ /¯html
          controls[⊃2 3 1 4/⍨('ej'≡2↑control)('jq'≡2↑control)(⎕A∊⍨⊃control)1],←⊂⊂control
      :EndFor
      controls←{⍵[⍋↑⍵]}¨controls   ⍝ sort the lists
     
     ⍝ Now we create and populate the info div
      r←'.widgethelp'New _.div'This Page Contains<hr/>'
      h←'http://'
      :For ns :In (×≢¨controls)/⍳4 ⍝ do not process if empty
          '.widgetNs'r.Add _.span,⊂ns⊃'Dyalog Controls' 'Syncfusion Widgets' 'jQuery Widgets' 'Native HTML5 Elements'
          ul←r.Add _.ul
          :For control :In ns⊃controls
              li←'<li><a target="_blank" href="/Documentation/DyalogAPIs/WidgetDoc?namespace=_',ns⊃#.MS3SiteUtils.NSS
              ul.Add li,'&widget=',control,'">',control,'</a></li>'
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