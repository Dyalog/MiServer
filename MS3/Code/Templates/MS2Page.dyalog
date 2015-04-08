:Class MS2Page : MildPage

    :Include #.HTMLInput

    ∇ Wrap req;body;head;html;footer;banner;content;lang
    ⍝ "Wraps" the HTML body
    ⍝ This version implements a template to create a standard look and feel for all MildPages served by this site
    ⍝ This is provided as an example for some of the uses of Wrap
     
      :Access Public
      req.Use'JQuery'
      head←'title'Enclose req.Server.Config.Name ⍝ Sets the name of the page at the top of the browser to the Name specified in server.xml
      head,←Tag'link href="/Styles/style.css" rel="stylesheet" type="text/css"' ⍝ add the style sheet reference
      head,←Tag'meta http-equiv="content-type" content="text/html;charset=UTF-8"' ⍝ make it UTF-8
     
    ⍝↓↓↓ If your code that builds the page updates HTMLHead (content that goes in the <head> element of the HTML document) it gets appended here.
    ⍝    This means that any style changes introduced by your code will override those in the /Styles/style.css for elements defined by both stylesheets
      head,←req.Response.HTMLHead,CRLF ⍝ Adds additional html head information
      head←'head'Enclose head
     
    ⍝ The design for this template implements a structure for the content within the body of the HMTL file
    ⍝ The <body> element encloses three <div> elements containing: a banner, the content, a footer
      banner←#.Files.GetText req.Server.Config.Root,'Styles\banner.txt'
      content←'div id="contentblock"'Enclose req.Response.HTML
      content,←'div id="codeblock" style="display: none;"'Enclose APLToHTML ⎕SRC⊃⊃⎕CLASS ⎕THIS
      content,←JS'$(function(){$("#bannerimage").on("click", function(evt){$("#contentblock,#codeblock").toggle();});});'
      footer←#.Files.GetText req.Server.Config.Root,'Styles\footer.txt'
     
    ⍝↓↓↓ We enclose the banner/content/footer with a "wrapper" div so that the visible content of the page can be sized, aligned, floated, etc.
    ⍝    <body> serves as the background and overall container (not to mention being required!)
      body←'body'Enclose CRLF,'div id="wrapper"'Enclose banner,CRLF,content,CRLF,footer
     
    ⍝↓↓↓ We use XHTML for this site and recommend its use.  See http://www.w3schools.com/html/html_xhtml.asp for a discussion of HTML v. XHTML
      lang←req.Server.Config.Lang ⍝ use the language specified in Server.xml
      html←'<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">',CRLF
      html,←('html lang="',lang,'" xml:lang="',lang,'" xmlns="http://www.w3.org/1999/xhtml"')Enclose head,body
      req.Response.HTML←html
    ∇

:EndClass