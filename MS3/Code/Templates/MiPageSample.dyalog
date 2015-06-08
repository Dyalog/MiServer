:Class MiPageSample : #.EAWC
⍝ This is a template that "wraps" the page content by
⍝ - adding a header and footer
⍝ - adding a handler that will toggle the display of the web page and its APL source code

    ∇ Wrap;lang;server;controls;sp;c
      :Access Public
     
      server←_Request.Server
     
      controls←∪Walk Body.Content
     
    ⍝ we use Syncfusion (which uses jQuery) to set up the controls to do cool stuff
      Use'Syncfusion' ⍝ this is a resource defined in Config/Resources.xml
     
    ⍝ set the title display in the browser to the name of the application defined in Config/Server.xml
      Add title server.Config.Name
     
    ⍝ add a link to our CSS stylesheet
      (Add link).SetAttr(('href' '/Styles/sampleStyles.css')('rel' 'stylesheet')('type' 'text/css'))
     
    ⍝ set a meta tag to make it explicitly UTF-8
      (Add meta).SetAttr'http-equiv="content-type" content="text/html;charset=UTF-8"'
     
    ⍝ wrap the content of the <body> element in a div
      Body.Push div'id="contentblock"'
     
    ⍝ add a hidden division to the body containing the APL source code
      (Add div(#.HTMLInput.APLToHTML ⎕SRC⊃⊃⎕CLASS ⎕THIS)).SetAttr'id="codeblock"' 'style="display: none;"'
     
    ⍝ add a JQuery event handler to toggle the web page/APL source code
      Add _HTML.Script'$(function(){$("#bannerimage").on("click", function(evt){$("#contentblock,#codeblock,.widgethelp").toggle(400,"swing");});});'
     
      c←Body.Content
      Body.Content←''
      (sp←Body.Add StackPanel''c).Horizontal←1
     
      sp.Items[1]←⊂FormatControls controls
     
    ⍝ add the footer to the bottom of the page
      Add #.Files.GetText server.Config.Root,'Styles\footer.txt'
     
    ⍝ add the header to the top of the page and wrap the body in a div with id="wrapper"
      Body.Push #.Files.GetText server.Config.Root,'Styles\banner.txt'
     
      Body.Push div'id="wrapper"'
     
    ⍝ set the language for the page
      lang←server.Config.Lang ⍝ use the language specified in Server.xml
      Head.SetAttr'lang="',lang,'" xml:lang="',lang,'" xmlns="http://www.w3.org/1999/xhtml"'
     
    ⍝ call the base class Wrap function
      ⎕BASE.Wrap
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

    ∇ r←FormatControls controls;ctrls;ns;desc;field;n;ctrl;i;c;ref;l;u
      ctrls←⊃{⍺ ⍵}⌸/↓[1]0 1↓↑{⎕ML←3 ⋄ {⍵⊂⍨⍵≠'.'}⍕⍵}¨controls
      field←{0::'' ⋄ ⍺⍎⍵}
      ns←'_html' '_HTML' '_JQ' '_SF' '_DC'
      desc←'Native HTML5 Elements' '"Enhanced" HTML Elements' 'Dyalog Developed Controls' 'Syncfusion Widgets' 'jQuery Widgets'
      (r←⎕NEW div).class←'widgethelp'
      r.Add'This Page Contains<br/>'
      :For n ctrl i :In ctrls{↓(⍺,⍵)[⍋⍵;]}ns⍳⊃¨ctrls[;1]
          (r.Add span(i⊃desc)).class←'widgetNs'
          u←r.Add ul
          :For c :In ctrl
              ref←(#.⍎⊃n).⍎c
              :If ''≢l←ref field'MSDoc'
              :AndIf #.Files.Exists #.Boot.MSRoot,l
                  u.Add li(a c(('href'('..',l))('target' '_blank')))
              :ElseIf ''≢l←ref field'BaseDoc'
              :AndIf #.Files.Exists #.Boot.MSRoot,l
                  u.Add li(a c(('href'('..',l))('target' '_blank')))
              :Else
                  u.Add li c
              :EndIf
          :EndFor
      :EndFor
    ∇

:EndClass