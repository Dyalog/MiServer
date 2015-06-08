:Class MS3Page : #.MiPage  
⍝ This is a template that "wraps" the page content by
⍝ - adding a header and footer
⍝ - adding a handler that will toggle the display of the web page and its APL source code 

    ∇ {r}←Wrap;lang
      :Access Public
     
    ⍝ we use JQuery to set up the handler, so we tell the page to include JQuery resources
      Use'JQuery' ⍝ "JQuery" is a resource defined in Config/Resources.xml
     
    ⍝ set the title display in the browser to the name of the application defined in Config/Server.xml
      Add _html.title _Request.Server.Config.Name
     
    ⍝ add a link to our CSS stylesheet
      Insert _DC.StyleSheet '/Styles/style.css'
     
    ⍝ set a meta tag to make it explicitly UTF-8
      (Add _html.meta).Set 'http-equiv="content-type" content="text/html;charset=UTF-8"'
     
    ⍝ wrap the content of the <body> element in a div
      Body.Push _html.div'id="contentblock"'
     
    ⍝ add a hidden division to the body containing the APL source code
      (Add _html.div(#.HTMLInput.APLToHTML ⎕SRC⊃⊃⎕CLASS ⎕THIS)).Set'id="codeblock" style="display: none;"'
     
    ⍝ add a JQuery event handler to toggle the web page/APL source code
      Add _HTML.Script'$(function(){$("#bannerimage").on("click", function(evt){$("#contentblock,#codeblock").toggle();});});'
     
    ⍝ add the footer to the bottom of the page
      Add #.Files.GetText _Request.Server.Config.Root,'Styles\footer.txt'
     
    ⍝ add the header to the top of the page and wrap the body in a div with id="wrapper"
      Body.Push #.Files.GetText _Request.Server.Config.Root,'Styles\banner.txt'
      Body.Push _html.div'id="wrapper"'
     
    ⍝ set the language for the page
      lang←_Request.Server.Config.Lang ⍝ use the language specified in Server.xml
      Set 'lang="',lang,'" xml:lang="',lang,'" xmlns="http://www.w3.org/1999/xhtml"'
     
    ⍝ call the base class Wrap function
      r←⎕BASE.Wrap
    ∇

:EndClass