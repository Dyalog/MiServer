:Class MiPageSample : #.MiPage
   ⍝ This is a template that "wraps" the page content by
   ⍝ - adding a header and footer
   ⍝ - adding a handler that will toggle the display of the web page and its APL source code

    ∇ {r}←Wrap;lang;server;controls;sp;c
      :Access Public
     
      :If 0∊⍴Get'nowrapper'
          server←_Request.Server
     
          controls←'' ⍝∪Walk Body.Content
     
        ⍝ we use Syncfusion (which uses jQuery) to set up the controls to do cool stuff
          Use'Syncfusion' ⍝ this is a resource defined in Config/Resources.xml
     
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
          (Add _.div(#.HTMLInput.APLToHTMLColour ⎕SRC⊃⊃⎕CLASS ⎕THIS)).Set'id="codeblock"' 'style="display: none;"'
     
          :If ~0∊⍴controls
              c←Body.Content
              Body.Content←''
              (sp←Body.Add _.StackPanel(⊂FormatControls controls)c).Horizontal←1
     
          :EndIf
     
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

    ∇ r←Walk content;e
      r←⍬
      :For e :In content
          :If (#.HtmlElement.isClass e)∨#.HtmlElement.isInstance e
              r←r,⊃⎕CLASS e
              :Trap 6
                  r,←Walk e.Content
              :EndTrap
          :EndIf
      :EndFor
    ∇

    ∇ r←FormatControls controls;ctrls;ns;desc;field;n;ctrl;i;c;ref;l;u;nss;item;cn
      ctrls←⊃{⍺ ⍵}#.Utils.∆key/↓[1]0 1↓↑{⎕ML←3 ⋄ {⍵⊂⍨⍵≠'.'}⍕⍵}¨controls
      field←{0::'' ⋄ ⍺⍎⍵}
      nss←'_DC' '_SF' '_JQ' '_html'
      desc←'Dyalog Controls' 'Syncfusion Widgets' 'jQuery Widgets' 'Native HTML5 Elements'
      (r←⎕NEW _.div).class←'widgethelp'
      r.Add'This Page Contains<hr/>'
      :Trap 0
          :For (ns ctrl i) :In ctrls{↓(⍺,⍵)[⍋⍵;]}nss⍳{(⊃⍣(¯1+≡⍵))⍵}¨ctrls[;1]
              (r.Add _.span(i⊃desc)).class←'widgetNs'
              u←r.Add _.ul
              n←#.⍎ns←⊃ns
              :For c :In ctrl
                  ref←n.⍎c
                  item←⍬
                  :Select ns
                  :Case '_DC'
                      item←u.Add _.li(New _.a(c(('href=/Documentation/DyalogAPIs/WidgetDoc?namespace=',ns,'&widget=',c)'target=_blank')))
                  :Case '_SF'
                      item←u.Add _.li(New _.a c(('href'('http://js.syncfusion.com/demos/web/default.htm#!/azure/',#.Strings.lc(2×'ej'≡2↑c)↓c))('target' '_blank')))
                  :Case '_JQ'
                      item←u.Add _.li(New _.a c(('href'('http://jqueryui.com/',(2×'jq'≡2↑c)↓c))('target' '_blank')))
                  :Case '_html'
                      cn←c
                      :If ~0∊⍴('^h[1-6]$'⎕S{⍵.Match})c
                          cn←'hn'
                      :EndIf
                      item←u.Add _.li(New _.a c(('href'('http://www.w3schools.com/tags/tag_',cn,'.asp'))('target' '_blank')))
                  :EndSelect
                  :If 0∊⍴item
                      u.Add _.li c
                  :EndIf
              :EndFor
          :EndFor
      :EndTrap
    ∇

:EndClass