:Class MarkAPL
⍝ ## Overview
⍝ MarkAPL is a parser that converts Markdown to valid HTML5.\\
⍝ The Markdown can be specified in two ways:
⍝ * As a vector of text vectors.
⍝ * As a filename.
⍝
⍝ ## How to get help
⍝ In order to view MarkAPL's cheat sheet execute this:\\
⍝ ~~~
⍝ #.MarkAPL.Help 0
⍝ ~~~
⍝ This will work if MarkAPL's `Files/` folder lives in the current directory.
⍝ If it doesn't then either make sure that it does or create a parameter
⍝ space by calling `CreateHelpParms` and then specify the folder that hosts
⍝ MarkAPL's `Files/` folder on  `homeFolder`. It will show the cheat sheet
⍝ in your default browser.\\
⍝ If you need comprehensive information call:
⍝ ~~~
⍝ #.MarkAPL.Reference 0
⍝ ~~~
⍝ ## Examples
⍝ ### Creating an HTML file from a Markdown file
⍝ ~~~
⍝ report←#.MarkAPL.ConvertMarkdownFile 'C:\MyMarkdown.md'
⍝ ~~~
⍝ This converts the Markdown in the file `C:\MyMarkdown.md` into fully-fledged
⍝ HTML and writes it to a file `C:\MyMarkdown.html`.\\
⍝ `report` is ideally empty but might be a vector of text vectors with warnings
⍝ or even error messages.a
⍝ The example uses just defaults. Instead you can specify parameters via a
⍝ namespace passed as the optional left argument. See further down an example how
⍝ to do this with the `Markdown2HTML` method.
⍝ ### Creating HTML from Markdown
⍝ Of course you can also convert Markdown from a variable in the workspace:
⍝ ~~~
⍝ MyMarkdown←'# MarkAPL' 'All about **_MarkAPL_**'
⍝ ~~~
⍝ ~~~
⍝ (html ns)←#.MarkAPL.Markdown2HTML MyMarkdown
⍝ ~~~
⍝ This converts `MyMarkdown` into HTML. By default the HTML is just a snippet, not
⍝ a fully-fledged HTML page. You can change that by:
⍝ ~~~
⍝ parms←#.MarkAPL.CreateParms
⍝ parms.inputFilename←'in.md'
⍝ parms.outputFilename←'out.md'
⍝ (html ns)←parms #.MarkAPL.Markdown2HTML ''
⍝ ~~~
⍝ If you want to create a full-blown HTML page without any files being involved you
⍝ can also set the `createFullHtmlPage` parameter to 1.
⍝ ## Misc
⍝ |Homepage:    | <http://aplwiki.com/MarkAPL> |
⍝ |Cheat sheet: | <http://download.aplteam.com/MarkAPL_CheatSheet.html> |
⍝ |Reference:   | <http://download.aplteam.com/MarkAPL.html> |
⍝ Kai Jaeger ⋄ APL Team Ltd

    ⎕IO←1 ⋄ ⎕ML←1

    :Include ##.APLTreeUtils

    ∇ r←Version
      :Access Public Shared
      ⍝ See `History`
      r←(Last⍕⎕THIS)'4.4.5.7' '2018-09-13'
    ∇

    ∇ History
      :Access Public Shared
      ⍝ * 4.4.5
      ⍝   * Bug fix: HTML blocks at the beginning of a document were not recognized.
      ⍝ * 4.4.4
      ⍝   * Bug fix: table cells with an odd number of ticks caused havoc (loss of text).
      ⍝ * 4.4.3
      ⍝   * Bug fixes
      ⍝     * In a definition list the term should never become an <abbr> tag.
      ⍝     * Assigning special attributes on multi-line SetText headers failed to work.
      ⍝     * Special attributes assigned to the definition part of a def list (the <dd> tag) were ignored.
      ⍝ * 4.4.2
      ⍝   * CSS got changes in order to make code better readable.
      ⍝     * Bug fixes:
      ⍝       * An abbreviation title that contained itself an abbreviation led to mutilated HTML.
      ⍝       * Abbreviations did not honour word boundaries.
      ⍝ * 4.4.1
      ⍝   * The MarkAPL.html document had a problem with it's CSS files.
      ⍝   * Documentation improved.
      ⍝ * 4.4.0
      ⍝   * Converted from the APL wiki to GitHub.
    ∇

    :Field Public Shared ReadOnly PartOfNames←⎕A,⎕D,'_∆⍙','qwertyuiopasdfghjklzxcvbnm'
    :Field Public Shared ReadOnly AllWhiteSpaceChars←⎕ucs 32 9 10 11 13

    ⎕IO←1 ⋄ ⎕ML←1

    ∇ {(html ns)}←{parms}Markdown2HTML markdown
    ⍝ `⍵` is one of:
    ⍝   * Vector of character vectors representing a Markdown document.
    ⍝   * Empty vector. In this case the parameter "inputFilename" must be specified.
    ⍝ `⍺` Is a namespace with parameters, typically create by calling `CreateParms`.\\
    ⍝ `←` Is a two-element vector starting from version 1.7.0:
    ⍝ 1. Is always the HTML created. As a side effect this HTML will also be written
    ⍝    to the file specified by `outputFilename` - if that is not empty that is.
    ⍝ 2. The `ns` namespace created by `Init` and needed / processed by `Process. This contains `ns.report`,
    ⍝    something you might want to check.
    ⍝ In case `outputFilename` is not empty the HTML is also written to file.
      :Access Public Shared
      parms←{0<⎕NC ⍵:⍎⍵ ⋄ CreateParms}'parms'
      :If 0∊⍴markdown
          :If 0∊⍴parms.inputFilename
              'Neither "markdown" nor "inputFilename" defined'⎕SIGNAL 6
          :Else
              markdown←ReadUtf8File parms.inputFilename
          :EndIf
      :EndIf
      ns←Init parms markdown
      ns←Process ns
      html←ns.html
      :If (~0∊⍴ns.parms.outputFilename)∧0≠ns.parms.createFullHtmlPage
      :OrIf 1=ns.parms.createFullHtmlPage
          html←ns.parms MakeHTML_Doc html
      :EndIf
      {}html{WriteUtf8File⍣(~0∊⍴⍵)⊣⍵ ⍺}ns.parms.outputFilename
    ∇

    ∇ r←parms MakeHTML_Doc html;bool;lines;sh;ind
    ⍝ Takes HTML, typically created by calling `Process`, and makes it a fully fledged document by adding
    ⍝ <body>, <head> -- with <title> -- and <html> including the DocType. By default CSS is injected as well.
      :Access Public Shared
      r←⊂'<!DOCTYPE html>'
      r,←⊂'<html',((~0∊⍴parms.lang)/' lang="',(parms.lang~'"'),'"'),'>'
      r,←⊂'<head>'
      :If parms.enforceEdge
          ⍝ ↓↓↓ https://blogs.msdn.microsoft.com/askie/2009/03/23/understanding-compatibility-modes-in-internet-explorer-8/
          r,←⊂'<meta http-equiv="X-UA-Compatible" content="IE=edge">'
          ⍝ This MUST be the first <meta> tag!
      :EndIf
      r,←⊂'<meta charset="',parms.charset,'">'
      :If ⎕NULL≡parms.title
          :If 1=+/ind←∨/¨⊃∨/'<h1 ' '<h1>'{⍺∘⍷¨⍵}¨⊂html
              parms.title←{⍵↑⍨¯1+⍵⍳'<'}{⍵↓⍨⍵⍳'>'}{⍵↓⍨¯1+1⍳⍨'<h1'⍷⍵}(ind⍳1)⊃html
          :Else
              parms.title←'MarkAPL'
          :EndIf
      :EndIf
      r,←⊂'<title>',parms.title,'</title>'
      parms←EstablishDefaultHomeFolder parms
      :If 0=parms.noCSS
          :If ⎕NULL≡parms.cssURL
              parms.cssURL←parms.homeFolder
          :EndIf
          parms.cssURL~←'"'
          :If ~0∊⍴parms.cssURL
              parms.cssURL,←{'/'/⍨~(¯1↑⍵)∊'/\'}parms.cssURL
              ((parms.cssURL='\')/parms.cssURL)←'/'
          :EndIf
          :If parms.linkToCSS
              r,←'screen'InjectCssFilenamesIntoHtml parms
              :If ~0∊⍴parms.printCSS
                  r,←'print'InjectCssFilenamesIntoHtml parms
              :EndIf
          :Else
              :If ~0∊⍴parms.screenCSS
                  r,←'screen'InjectCssIntoHtml parms
              :EndIf
              :If ~0∊⍴parms.printCSS
                  r,←'print'InjectCssIntoHtml parms
              :EndIf
          :EndIf
      :EndIf
      :If ~0∊⍴parms.head
          r,←Nest parms.head
      :EndIf
      r,←'</head>' '<body>',html,'</body>' '</html>'
    ∇

    ∇ html←type InjectCssIntoHtml parms;css;cssFiles;cssFile;blockNo;cssFile_
    ⍝ Inject zero, one or many CSS files and embrace them with a <style> tag.
    ⍝ The CSS is converted into a single line if `compressCSS` is 1.
    ⍝ The parameter `tocCaption` is honoured.
      'Invalid CSS media type'⎕SIGNAL 11/⍨0=+/(⊂type)∊'screen' 'print'
      cssFiles←','Split parms.⍎type,'CSS'
      html←''
      :For cssFile :In cssFiles
          :If 0∊⍴parms.cssURL
              cssFile_←cssFile
          :Else
              cssFile_←parms.cssURL,'/',cssFile
          :EndIf
          css←ReadUtf8File MassageFilename cssFile_
          :If type≡'screen'
          :AndIf ~0∊⍴blockNo←'<<maxwidth>>'⎕S 2⊣css
              blockNo+←1
              (blockNo⊃css)←'max-width:',({' '=1↑0⍴⍵:⍵,(0∊⍴⍵~⎕D)/'px' ⋄ (⍕⍵),'px'}parms.width),';'
          :EndIf
          css←2 InsertTocCaption parms css
          css←{CompressCSS 2↓⊃,/(⎕UCS 13 10)∘,¨⍵}⍣parms.compressCSS⊣css
          html,←Nest css
      :EndFor
      :If ~0∊⍴html
          html←(⊂'<style media="',type,'">'),html,(⊂'</style>')
      :EndIf
    ∇

    ∇ html←type InjectCssFilenamesIntoHtml parms;css;cssFiles;cssFile
    ⍝ Inject zero, one or many CSS filenames and embrace them with a <style> tag.
      'Invalid CSS media type'⎕SIGNAL 11/⍨0=+/(⊂type)∊'screen' 'print'
      cssFiles←','Split parms.⍎type,'CSS'
      cssFiles←{0=+/b←'\'=r←⍵~'"':r ⋄ (b/r)←'/' ⋄ r}¨cssFiles
      html←''
      :For cssFile :In cssFiles
          html,←⊂'<link href="',parms.cssURL,cssFile,'" rel="stylesheet" media="',type,'">'
      :EndFor
    ∇

      InsertTocCaption←{
      ⍝ Replace the two occurences of "<<tocCaption>><<showHide>>" in the css against parms.tocCaption
      ⍝ ⍺ is 1 for print CSS and 2 for screen CSS.
          (parms css)←⍵
          lines←Where∨/¨bool←'<<tocCaption>>'∘⍷¨css
          0∊⍴lines:css
          bool←bool[lines]
          (tpd tpu)←⎕UCS 9660 9650   ⍝ Triangle Point Down, Triangle Pointing Up
          (1=⍺)∨1=⍴,lines:css
          css[lines[2]]←⊂'content: ''',(parms.tocCaption,' ',tpu,''''),';'
          css
      }

    ∇ {report}←{parms}ConvertMarkdownFile filename;ns
    ⍝ Converts the contents of `filename` to HTML5. The output filename equals `filename` except that
    ⍝ the extension changes from `.md` to `.html`.\\
    ⍝ This can be overwritten by specifying a parameter space as left argument (typically created
    ⍝ by calling `CreateParms`) and setting `outputFilename`.\\
    ⍝ Note however that when you specify `inputFilename` to anything but '' or `filename an error is
    ⍝ generated. Other settings in parms are honoured.\\
    ⍝ If no left argument is passed then defaults take place, in particular regarding the CSS.\\
    ⍝ Note that by default `ConvertMarkdownFile` creates a fully-fledged HTML page.\\
    ⍝ The result is either an empty text vector or a vector of text vectors. It may contain warnings or error
    ⍝ messages. It's what is returned by `Init` on `ns.report`.
      :Access Public Shared
      parms←{0=⎕NC ⍵:CreateParms ⋄ ⍎⍵}'parms'
      :If ~0∊⍴parms.inputFilename
      :AndIf parms.inputFilename≢filename
          '"inputFilename" must not be specified'⎕SIGNAL 11
      :EndIf
      parms.inputFilename←##.FilesAndDirs.NormalizePath filename
      parms.createFullHtmlPage←(1+¯1≡parms.createFullHtmlPage)⊃parms.createFullHtmlPage 1
      :If 0∊⍴parms.outputFilename
          parms.outputFilename←##.FilesAndDirs.NormalizePath∊(¯1↓⎕NPARTS filename),'.html'
      :EndIf
      ns←Init parms''
      ns←Process ns
      :If parms.createFullHtmlPage
          ns.html←ns.parms MakeHTML_Doc ns.html
      :EndIf
      WriteUtf8File parms.outputFilename ns.html
      report←ns.report
    ∇

    ∇ r←CreateParms;clp;SetTo
    ⍝ Returns a parameter namespace with default values.
    ⍝ Use method `∆List` to list all names and their values.
      :Access Public Shared
      r←⎕NS''
      clp←GetCommandLineParms''
      SetTo←{0=clp.⎕NC ⍺:⍎'r.',⍺,'←⍵' ⋄ ⍎'r.',⍺,'←clp.⍎⍺'}  ⍝ Take command line parms or default
      'bookmarkLink'SetTo 6
      'bookmarkMayStartWithDigit'SetTo 1
      r.debug←IsDevelopment
      'charset'SetTo'utf-8'
      'checkFootnotes'SetTo r.debug
      'checkLinks'SetTo r.debug
      'collapsibleTOC'SetTo 0
      'compileFunctions'SetTo 1
      'compressCSS'SetTo 1
      'createFullHtmlPage'SetTo ¯1
      'cssURL'SetTo ⎕NULL
      'div_h_tag'SetTo 1
      'enforceEdge'SetTo 1
      'footnotesCaption'SetTo'Footnotes'
      'head'SetTo''
      'homeFolder'SetTo ⎕NULL
      'ignoreEmbeddedParms'SetTo 0
      'imageURL'SetTo''
      'inputFilename'SetTo''
      'lang'SetTo'en'
      'leanpubExtensions'SetTo 0
      'leanpubIconsUrl'SetTo'https://download.aplwiki.com/LeanPub/Images/'
      'lineNumberOffset'SetTo 0
      'linkToCSS'SetTo 0
      'markdownStrict'SetTo 0
      'numberHeaders'SetTo 0
      'noCSS'SetTo 0
      'outputFilename'SetTo''
      'printCSS'SetTo'MarkAPL_print.css'
      'reportLinks'SetTo 0
      'reportLinksCaption'SetTo'Link report'
      'screenCSS'SetTo'MarkAPL_screen.css'
      'subTocs'SetTo 1
      'syntaxSugar'SetTo 1
      'title'SetTo ⎕NULL
      'toc'SetTo 0
      'tocCaption'SetTo'Table of contents'
      'verbose'SetTo r.debug
      'width'SetTo 900
      r.⎕FX'r←∆List;⎕IO' '⍝ List all variables and possible references in this namespace' '⎕IO←1' 'r←{⍵,[1.5]⍎¨⍵}⎕NL-2 9'
    ∇

    ∇ parms←CreateHelpParms
      :Access Public Shared
      parms←CreateParms
      parms.linkToCSS←0
      parms.toc←2 3
      parms.numberHeaders←2 3 4 5 6
      parms.bookmarkLink←6
      parms.compileFunctions←0
      parms.viewInBrowser←1
      parms.collapsibleTOC←1
      parms.compressCSS←1
      parms.title←'MarkAPL Reference'
      parms.width←1100
      parms.reportLinks←1
    ∇

    ∇ ns←Init(parms markdown);buffer
    ⍝ Creates a namespace "ns" that contains important stuff needed to process `markdown`.
    ⍝ See "MarkAPL.html" for details.
      :Access Public Shared
      parms←CompileParms parms
      {}CompileMarkAPLFnsAndOprs parms
      markdown←GetMarkdown markdown
      ns←Create_NS ⍬
      ns.markdown←dtb(Nest markdown),⊂''
      ns.lineNumbers←⍳⍴ns.markdown                  ⍝ Useful for reporting problems
      ns←RemoveAllComments ns
      ns←parms ProcessLeanPubExtensions ns
      :If 0<⍴'^ *{:: encoding=".*$'⎕S 0⊣⊃ns.markdown
          ns.markdown←1↓ns.markdown
      :EndIf
      ns.markdownLC←Lowercase ns.markdown           ⍝ We need this often, so we do this ONCE
      buffer←dlb ns.markdown
      ns.emptyLines←GetEmptyLines buffer
      ns.leadingChars←(16⌊⍴∘,¨ns.markdown)↑¨buffer
      ns.withoutBlanks←ns.markdown~¨' '
      ns.parms←parms
      ns←ProcessEmbeddedParms⍣(~parms.ignoreEmbeddedParms)⊣ns
      :If (,0)≢,ns.parms.toc
          ns.parms.bookmarkLink⌈←⌈/ns.parms.toc
      :EndIf
      ns.parms.head←Nest ns.parms.head
    ∇

    ∇ parms←CompileParms parms
      :If 0∊⍴parms
          parms←CreateParms
      :EndIf
      parms←EstablishDefaultHomeFolder parms
      :If ⎕NULL≡parms.cssURL
          parms.cssURL←'file:///',parms.homeFolder
      :EndIf
      ((parms.cssURL='\')/parms.cssURL)←'/'
      ((parms.leanpubIconsUrl='\')/parms.leanpubIconsUrl)←'/'
      parms.cssURL,←(~(¯1↑parms.cssURL)∊' /')/'/'
      parms.leanpubIconsUrl,←(~(¯1↑parms.leanpubIconsUrl)∊' /')/'/'
      parms.(inputFilename outputFilename)←1 CorrectSlash¨parms.(inputFilename outputFilename)
      parms.(cssURL screenCSS printCSS)←0 CorrectSlash¨parms.(cssURL screenCSS printCSS)
    ∇

    ∇ markdown←GetMarkdown markdown;length
      :If 0∊⍴markdown
          'Neither "markdown" nor "inputFilename" are set?!'⎕SIGNAL 6/⍨0∊⍴parms.inputFilename
          markdown←ReadUtf8File parms.inputFilename
      :EndIf
      markdown←,,¨markdown
      'Invalid Markdown (depth)'⎕SIGNAL 11/⍨2≠|≡markdown
      'Invalid Markdown (depth)'⎕SIGNAL 11/⍨(,1)≢∪≡¨markdown
      length←⍴markdown
      :If length>⍴markdown←'\t'⎕R(4⍴' ')⍠('Mode' 'M')⊣markdown              ⍝ Replace all <TAB> chars by 4 spaces
          markdown,←(length-⍴markdown)⍴⊂''                                  ⍝ In order to overcome bug <01446>
      :EndIf
      markdown←{0=+/b←(⎕UCS 0)=⍵:⍵ ⋄ w←⍵ ⋄ (b/w)←⎕UCS 65533 ⋄ w}¨markdown   ⍝ Replace U+0000 by U+FFFD for secutity reasons
     ⍝Done
    ∇

    ∇ ns←Process ns
    ⍝ Takes a namespace, typically created by calling `Init`, and then processes `ns.markdown`,
    ⍝ creating ns.html along the way.
    ⍝
    ⍝ The result is all MarkDown converted to HTML but not a fully-fledged HTML document. In order to
    ⍝ achieve that call `MakeHTML_Doc` in the next step.
      :Access Public Shared
      ns.noOf←1               ⍝ Minimum number of lines to be removed from ns.(markdown leadingChars emptyLines) per cycle.
      ns←ScanMarkdown ns
      ns.toc←CollectToc ns
      ns←SetTitle ns
      ns←NumberHeaders ns
      ns←InjectTOC ns
      ns←InjectSubTOCs ns
      ns←ReplaceLinkIDs ns
      ns←ReportLinks ns
      ns←InjectFootNotes ns
      ns←HandleAbbreviations ns
      ns←CheckInternalLinks ns
      ns←CheckForInvalidFootnotes ns
      :If IsDevelopment
      :AndIf ns.parms.verbose
      :AndIf ~0∊⍴ns.report
          ⎕←⍪ns.report
      :EndIf
      ns.html←{1=≡⍵:⍵ ⋄ ⊃,/⊃⍵}¨ns.html
    ∇

    ∇ r←Execute y
    ⍝ This is used for test purposes only: to execute non-public methods.
      :Access Public Shared
      'Invalid call'⎕SIGNAL 11/⍨~IsDevelopment
      :If 0=⎕NC'ns'
          ⎕SHADOW'ns'
          ns←Create_NS ⍬
      :EndIf
      r←⍎y
    ∇

    ∇ {ns}←{parms}Reference recompileFlag
    ⍝ Displays the file MarkAPL.html with your default browser.
    ⍝
    ⍝ `recompileFlag`:
    ⍝ - A zero shows the file as it stands.
    ⍝ - A 1 lets MarkAPL recompile it from MarkAPL.md first.
    ⍝ Returns either `⍬` or the `ns` namespace created by `Init` and modified by `Process`.
      :Access Public Shared
      parms←{0<⎕NC ⍵:⍎⍵ ⋄ CreateHelpParms}'parms'
      ns←CompileHelp'MarkAPL.html'recompileFlag parms
      :If ¯1≠×recompileFlag  ⍝ This syntax is used only by the `Make` workspace and test cases, therefore it is not documented.
      :AndIf parms.viewInBrowser
          :If ⍬≢ns
              GoToWebPage'file:///',ns.parms.outputFilename
          :Else
              GoToWebPage'file:///',parms.outputFilename
          :EndIf
      :EndIf
    ∇

    ∇ {ns}←{parms}Help recompileFlag
    ⍝ Displays the file MarkAPL_CheatSheet.html with your default browser.
    ⍝
    ⍝ `recompileFlag`:
    ⍝ - A zero shows the file as it stands.
    ⍝ - A 1 lets MarkAPL recompile it from MarkAPL_CheatSheet.md first.
    ⍝ Returns either `⍬` or the `ns` namespace created by `Init` and modified by `Process`.
      :Access Public Shared
      parms←{0<⎕NC ⍵:⍎⍵ ⋄ CreateHelpParms}'parms'
      ns←CompileHelp'MarkAPL_CheatSheet.html'recompileFlag parms
      :If ¯1≠×recompileFlag  ⍝ This syntax is used only by the `Make` workspace and test cases, therefore it is not documented.
      :AndIf parms.viewInBrowser
          :If ⍬≢ns
              GoToWebPage'file:///',ns.parms.outputFilename
          :Else
              GoToWebPage'file:///',parms.outputFilename
          :EndIf
      :EndIf
    ∇

    ∇ r←{colHeader}Matrix2MarkdownTable mat;b;⎕IO;dt;mask;noOfColumns
      :Access Public Shared
    ⍝ Converts an APL matrix into Markdown.\\
    ⍝ Since the Markdown is created automatically we value space & performance more than readability.\\
    ⍝ Without a left argument the right argument transforms into a matrix without
    ⍝ column headers. If a column is strictly numeric it is right-aligned.\\
    ⍝ If a left argument is provided then it is expected to be a vector of text vectors
    ⍝ defining column headers.\\
    ⍝ Such column headers may define column alignment via a leading and/or a trailing `:`; that means
    ⍝ that when using this method you cannot have a trailing `:` in a column header.\\
    ⍝ In case no column headers are specified or the column headers don't define alignment then columns
    ⍝ that contain nothing but numeric data are by default right-aligned while all other columns
    ⍝ are left-aligned.\\
    ⍝ This method does not allow special attributes, although they may be added in a seperate
    ⍝ step of course.
      'Invalid right argument - not a matrix'⎕SIGNAL 11/⍨2≠⍴⍴r←mat
      :If 0<=/b←,∨/¨'|'∊¨r                          ⍝ Any "|" anywhere?!
          (b/,r)←EscapePipeSymbolInCell¨b/,r
      :EndIf
      dt←0=⊃¨0⍴¨r                                   ⍝ Data type
      :If 0=⎕NC'colHeader'                          ⍝ If no left argument...
          colHeader←,[0.5](':-' '-:')[1+∧⌿dt]       ⍝ ... then we right-align numeric cols.
      :Else
          'Left argument: length error'⎕SIGNAL 6/⍨(⍴colHeader)≠2⊃⍴mat
          'Left argument: depth error'⎕SIGNAL 11/⍨2≠≡colHeader
          colHeader←⍉↑(∧⌿dt)BuildColumnHeader¨colHeader
      :EndIf
      r←colHeader⍪r
      dt←((⍴colHeader)⍴0)⍪dt
      ((,dt)/,r)←⍕¨(,dt)/,r                         ⍝ Format numeric cells only
      r←'|',¨r                                      ⍝ Insert the "|" for cell recognition
      noOfColumns←2⊃⍴r
      r←↓r
      r←noOfColumns{⎕ML←3 ⋄ (1<⍺)↓¨∊¨⍵}r
    ∇

    ∇ md←Matrix2MarkdownList mat;i;type
      :Access Public Shared
    ⍝ Converts an APL matrix in to list definition(s).\\
    ⍝ The matrix must have three columns:\\
    ⍝ 1. List type. 0=bulleted list, 1 etc numeric list **and** starting point.
    ⍝ 2. Nesting level. May start with either 0 or 1.
    ⍝ 3. Text vector of vector of text vector.
      'Invalid right argument - not a matrix'⎕SIGNAL 11/⍨2≠⍴⍴mat
      'Invalid right argument - must have 2 columns'⎕SIGNAL 11/⍨3≠2⊃⍴mat
      'First line''s level must be either 0 or 1'⎕SIGNAL 11/⍨~(⊃mat)∊0 1
      'Invalid right argument - must have 2 columns'⎕SIGNAL 11/⍨~∧/mat[;1]∊0,⍳999
      mat[;2]←{⍵-1}⍣(1=⊃mat[;2])⊣mat[;2]        ⍝ Ensure 0 is first level
      md←mat[;2]⍴¨' '
      type←0=mat[;1]
      (type/md)←(type/md),¨⊂'* '
      type←~type
      (type/md)←(type/md),¨(⍕¨type/mat[;1]),¨⊂'. '
      md←⊃,/md{(≡⍵)∊0 1:⊂⍺,⍵ ⋄ (⊂⍺,⊃⍵),(⊂(⍴⍺)⍴' '),¨1↓⍵}¨mat[;3]
      md←'' '',md,'' ''
     ⍝Done
    ∇

    ∇ css←CompressCSS css;start;end;mask;bool;flag;b1;b2;b
      :Access Public Shared
     ⍝ Takes CSS and compresses it to a single line.
     ⍝ Along the way it...
     ⍝ * removes all comments
     ⍝ * removes any spaces around `;:{}`
     ⍝ * replaces <TAB> chars by spaces
     ⍝ * removes multiple spaces
     ⍝
     ⍝ Note that this method can have desastrous results when performed on non-valid CSS!\\
     ⍝ Throws an error in case something is not right with the CSS.
      css←{(1↓⊃,/(⎕UCS 13),¨⍵)}⍣(1≠≡css)⊣css
      start←'/*'⍷css
      end←'*/'⍷css
      mask←~{⍵∨≠\⍵}css='"'
      'Cannot compress CSS: number of occurrences of /* and */ are different'⎕SIGNAL 11/⍨0=≡/+/¨mask∘/¨start end
      'Cannot compress CSS: Invalid nested comments'⎕SIGNAL 11/⍨~0∊⍴(∪⊃-/+\¨start end)~0 1
      start∧←mask
      end∧←mask
      bool←~{⍵∨≠\⍵}start∨end
      bool[1+Where end]←0
      css←bool/css
      css←dmb css~⎕TC
      ((css=⎕UCS 9)/css)←' '
      mask←~{⍵∨≠\⍵}css='"'
      b1←mask\mask/⊃∨/' :' ' ;' ' {' ' }'⍷¨⊂css
      b2←mask\mask/⊃∨/': ' '; ' '{ ' '} '⍷¨⊂css
      b←~b1∨0,¯1↓b2
      css←b/css
    ∇

⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝
⍝                                                                                                           ⍝
⍝                                                   Private stuff                                           ⍝
⍝                                                                                                           ⍝
⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝

      EscapePipeSymbolInCell←{
    ⍝ ⍵ is a cell from any APL matrix.
    ⍝ We convert any | to \| (escaping) except when it lives within code
          c←⍵
          mask←~GetMaskForCode c     ⍝ We must ignore code
          0=+/mask:c                 ⍝ Everything is code? Done!
          b←'|'=mask/c               ⍝ Where are the | when we ignore the code?
          0=+/b:c                    ⍝ None?! Done!
          buff←mask/c                ⍝ Get what's not code
          (b/buff)←⊂'\|'             ⍝ Replace all | by \|
          (mask/c)←buff              ⍝ Put stuff back
          ⊃,/c                       ⍝ Simplify
      }

      BuildColumnHeader←{
          ⍺←0 ⍝ Default data type is 0 (Char)
          dt←⍺
          ~':'∊(1↑⍵),¯1↑⍵:⍵((-dt)⌽':','-')
          '::'≡2↑¯1⌽⍵:(1↓¯1↓⍵)':-:'
          ':'=⊃¯1⌽⍵:(¯1↓⍵)'-:'
          ':'=⊃⍵:(1↓⍵)'-:'
          ':-'
      }

    ∇ r←ProcessLists ns;noOf
      r←0
      :If 0=ns.parms.markdownStrict
      :OrIf ∆LastLineWasEmpty
          :If 3 IsHtmlList⊃ns.markdown
              r←ProcessList ns
          :EndIf
      :EndIf
    ∇

    ∇ r←ProcessDefinitionLists ns;noOf;bool;bl;html;nop;not2;buff;bl2;total;el;not;sa;colons
      r←0
      :If 1<⍴ns.markdown                                ⍝ A definitions has at least two lines
      :AndIf 1≤ScanForPara ns                           ⍝ Exactly one line for a term but there might be no empty line after it.
      :AndIf ~0∊⍴'^\s{0,3}:\s'⎕S 0⊣⊃(+/∧\1↓ns.emptyLines)↓1↓ns.markdown  ⍝ Is there ": " in the first non-empty line?
          noOf←(⍴ns.markdown)⌊(1 1⍷ns.emptyLines)⍳1     ⍝ Maximum number of lines until the last `:` of this definition list
          colons←': '∘≡¨2↑¨noOf↑ns.leadingChars         ⍝ Where are any leading colons followed by a space?
          total←0
      :AndIf 0<+/colons                                 ⍝ Any at all? If not it's not a definition list!
          bl←noOf↑ns.markdown                           ⍝ The whole lot
          html←⊂'<dl>'
          el←{0=⊃¨⍴¨⍵}bl~¨' '                           ⍝ Empty lines
          :Repeat
              :If 1<⍴bl
              :AndIf ~0∊⍴∊1↓bl
              :AndIf ~0∊⍴'^\s{0,3}:\s'⎕S 0⊣{⍵⊃⍨1⍳⍨0<⊃¨⍴¨⍵}1↓bl
                  sa←GetSpecialAttributes⊃bl
                  (⊃bl)←sa DropSpecialAttributes⊃bl
                  buff←('dt',sa)∘Tag¨1⊃¨ns ProcessInlineMarkUp¨1↑bl
                  not←1++/∧\1↓el
                  (bl colons el)←not↓¨bl colons el
              :AndIf 0∊el
              ⍝ Now we pick up everything that fulfills one of the following conditions:
              ⍝ * Starts with a ": "
              ⍝ * Starts with two spaces (plus any leading spaces before the ":")
              ⍝ * Is an empty line
                  nop←+/∧\el∨colons∨{⊃(' '=¯1↓⍵)∧' '≠¯1↑⍵}¨(3++/∧\' '=⊃bl)↑¨bl
              :AndIf 0<⍴bl2←nop↑bl
                  (bl colons el)←(⍴bl2)↓¨bl colons el
              :AndIf ~0∊⍴bl2←(0<⊃¨⍴¨bl2~¨' ')/bl2
                  bl2{v←⍺ ⋄ 0∊⍴⍵:v ⋄ ((¯1+⊃⍵)⊃v)←dmb((¯1+⊃⍵)⊃v),' ',(⊃⍵)⊃v ⋄ ((⊃⍵)⊃v)←'' ⋄ v ∇ 1↓⍵}←⌽Where':'≠⊃¨dlb¨bl2
                  bl2←(0<⊃∘⍴¨bl2)/bl2
                  bl2←{⍵↓⍨1+⍵⍳':'}¨bl2
                  sa←GetSpecialAttributes¨bl2
                  bl2←sa DropSpecialAttributes¨bl2
                  bl2←⊃¨ns ProcessInlineMarkUp¨bl2
                  :If 1=not
                  :AndIf 1=⍴bl2
                      bl2←⊂('dd',⊃sa)Tag⊃bl2
                  :Else
                      :If 1<⍴bl2←((⊂'dd'),¨sa)Tag¨Tag¨bl2
                          (1⊃bl2)←'<p>'⎕R'<p class="first_dd">'⊣1⊃bl2
                      :EndIf
                  :EndIf
                  html,←buff,bl2
                  total+←not+nop
              :Else
                  bl←''
              :EndIf
          :Until 0∊⍴bl
          ns.noOf←total
          html,←⊂'</dl>'
          r←1
          ns.html,←html
          ns←Drop ns
          ∆LastLineWasEmpty←1
      :EndIf
    ∇

    ∇ r←ProcessBlockQuotes ns;parms;md;ns2
    ⍝ Processes any blockquotes recursively. That way they can contain **everything**, including blockquotes.
      r←0
      :If '> '≡2↑⊃ns.leadingChars
          ns.noOf←ScanForBlockQuotes ns
          parms←CreateParms
          parms.bookmarkLink←0
          parms.markdownStrict←ns.parms.markdownStrict
          parms.verbose←0
          parms.checkLinks←0
          parms.checkFootnotes←0
          parms.subTocs←0
          parms.syntaxSugar←ns.parms.syntaxSugar
          parms.lineNumberOffset←⊃ns.lineNumbers
          md←ns.noOf↑ns.markdown
          (1⊃md)←2↓1⊃md
          (1↓md)←(2×'> '∘≡¨2↑¨1↓md)↓¨1↓md
          ns2←Init parms md
          ns2←Process ns2
          ns.html,←(⊂'<blockquote>'),ns2.html,⊂'</blockquote>'
          ns.report,←ns2.report
          ns←Drop ns
          r←1
      :EndIf
    ∇

    ∇ r←ProcessList ns;bl;type;i;startAt;item;pFlag;noOfBlanks;levels;levelChange;buff;sa;lastType;lastItem;toBeAdded;indentations;html;lastWasEmpty;indendations;cb;drop;para;Max;buff2;ns2;parms;ns3;md;report;infoString;buff3
    ⍝ Processing lists is more complex than one would think at first glance for several reasons:
    ⍝ * Lists can be nested at any level.
    ⍝ * A nested list can have a different type.
    ⍝ * Changing the bullet char for bulleted lists (+-*) starts a new list!
    ⍝ * Lists may contain independent paragrahs; their level is defined by indenting.
    ⍝ * MarkAPL allows lazy indenting: if a list items spans over several lines only the first
    ⍝   line must be indented properly. All other lines may or may not be indented.
    ⍝ * A single backslash at the end of an item are interpreted as "inject <br> here". So is
    ⍝   the insertion of `<<br>>` anywhere in the code but `<<br>>` is actually handled at a later stage.
    ⍝      {0=#.⎕NC ⍵: ⋄ #.STOP:.}'STOP'
      :If 0=ns.noOf←IdentifyListItems ns
          r←0
      :Else
          type←,(1+(⊃⊃ns.leadingChars)∊'*+-')⌷'ou'
          bl←dtb GetListBlock ns.noOf↑ns.markdown
          report←''
          :If type='u'
              html←,⊂'<ul>'
          :Else
              startAt←{⍵↑⍨¯1+⌊/⍵⍳'.)'}dlb⊃bl
              html←,⊂'<ol start="',startAt,'">'
          :EndIf
          i←lastWasEmpty←levelChange←0
    ⍝ `levels` and `indentation` record almost the same thing:
    ⍝ * `level` counts white-space until the first non-white-space character.
    ⍝ * `indentation` does the same but then adds the length of the list-marker.
    ⍝ The latter is needed in order to identify the level of paragraphs and code blocks within a list.
          levels←+/∧\' '=⊃bl
          indendations←GetLengthOfLeadingWhitespacePlusListMarker⊃bl
          lastType←⊃dlb⊃bl
          :Repeat
              drop←1
              i←i+1
              :If IsHtmlList dlb⊃bl
                  noOfBlanks←+/∧\' '=⊃bl
                  :If noOfBlanks≠¯1↑levels
                      :If noOfBlanks>¯1↑levels
                          type,←(1+(⊃i⊃ns.leadingChars)∊'*+-')⌷'ou'
                          ((⍴html)⊃html)←'</li>'{⍵↓⍨(-⍴⍺)×⍺≡(-⍴⍺)↑⍵}(⍴html)⊃html
                          :If 'u'=¯1↑type
                              html,←⊂'<ul>'
                          :Else
                              startAt←{⍵↑⍨¯1+⌊/⍵⍳'.)'}dlb⊃bl
                              html,←⊂'<ol start="',startAt,'">'
                          :EndIf
                          levels,←noOfBlanks
                          indendations,←GetLengthOfLeadingWhitespacePlusListMarker⊃bl
                          lastType,←⊃dlb⊃bl
                      :Else
                          levelChange←+/∧\(⌽levels)>noOfBlanks
                          html,←({'</',(¯1↑⍵),'l>'}¨⌽(-levelChange)↑type),¨⊂'</li>'
                          (levels indendations lastType type)←(-levelChange)↓¨levels indendations lastType type
                      :EndIf
                  :ElseIf ~0∊⍴⊃bl
                  :AndIf (¯1↑lastType){~⍺∊'+-*':~⍵∊⎕D ⋄ ⍺≠⍵}⊃dlb⊃bl
                      html,←⊂'</',(¯1↑type),'l>'
                      ((⍴type)⊃type)←(1+(⊃i⊃ns.leadingChars)∊'*+-')⌷'ou'
                      lastType,←⊃dlb⊃bl
                      :If 'u'=¯1↑type
                          html,←⊂'<ul>'
                      :Else
                          startAt←{⍵↑⍨¯1+⍵⍳'.'}dlb⊃bl
                          html,←⊂'<ol start="',startAt,'">'
                      :EndIf
                  :EndIf
              :EndIf
              :If 0∊⍴' '~⍨⊃bl
                  lastWasEmpty←1
              :Else
                  :If IsHtmlList dlb⊃bl
                      (drop item)←CollectItem bl
                      :If ~0∊⍴sa←GetSpecialAttributes⊃bl
                          item←dlb dtb sa DropSpecialAttributes item
                          :If (⊂3↑(⍴html)⊃html)∊'<ul' '<ol'
                              ((⍴html)⊃html)←(¯1↓((⍴html)⊃html)),sa,'>'
                          :EndIf
                      :Else
                          item←dlb dtb item
                      :EndIf
                      i←i+drop-1
                      item←ns CheckOddNumberOfDoubleQuotes item'list item'
                      :If '\'=¯1↑item
                          item,←'<br>'
                      :EndIf
                      buff←⊃¯1↑html
                      :If ~(⊂{' '~⍨{⍵↑⍨⌊/⍵⍳' >'}{⌽⍵↑⍨⍵⍳'<'}⌽⍵}buff)∊'</ul>' '</ol>' '</li>' '<ul' '<ol' '<ul>' '<ol>'
                          (¯1↑html)←⊂buff,'</li>'
                      :EndIf
                      buff3←⊃ns ProcessInlineMarkUp{dlb ⍵↓⍨⍵⍳' '},item
                      html,←⊂'<li>',(dlb buff3),'</li>'
                      lastWasEmpty←0
                  :Else
                      noOfBlanks←+/∧\' '=⊃bl
                      :If (¯1↑indendations){0=⍵:0 ⋄ ⍵≠⍺}noOfBlanks          ⍝ The level has changed
                          :If noOfBlanks∊indendations                       ⍝ Did the user get the indentation right?
                              levelChange←¯1+(⌽indendations)⍳noOfBlanks
                          :Else                                             ⍝ No he did not.
                              levelChange←0⌈¯1++/indendations<noOfBlanks    ⍝ Let's get as close as possible
                          :EndIf
                          :If 0≠levelChange
                              :If '>'=¯1↑buff←⊃¯1↑html
                              :AndIf ~(⊂{⌽⍵↑⍨⍵⍳'<'}⌽buff)∊'</ul>' '</ol>' '<ul>' '<ol>'
⍝                                  (¯1↑html)←⊂buff,'</li>'
                              :EndIf
                              html,←({'</',⍵,'l>'}¨(-levelChange)↑type),¨⊂'</li>'
                              (type levels indendations lastType)←(-levelChange)↓¨type levels indendations lastType
                          :EndIf
                      :EndIf
                      :If lastWasEmpty
                          buff←⊃bl
                          :If ~0∊⍴cb←(¯1↑indendations)GetCodeBlockFrom bl
                              sa←GetSpecialAttributes⊃cb
                              infoString←(¯1↑indendations)GetInfoString⊃cb
                              :If (+/∧\' '=⊃cb)≥⊃noOfBlanks                  ⍝ Max number of spaces is the indentation
                                  cb←MassageCodeBlock cb noOfBlanks
                                  cb←¯1↓1↓cb
                                  :If 0<+/⊃¨⍴¨cb~¨' '
                                      buff2←⊃¯1↑html
                                      :If '</li>'{⍺≡(-⍴⍺)↑⍵}buff2
                                          buff2←(-⍴'</li>')↓buff2
                                          (¯1↑html)←⊂buff2
                                      :EndIf
                                      html,←MarkUpAsCode(2 EscapeSpecialChars¨cb)sa infoString
                                      (¯1↑html)←⊂(⊃¯1↑html),'</li>'
                                  :EndIf
                                  drop←2+⍴cb
                                  i+←1+⍴cb
                              :EndIf
                          :ElseIf '|'=⊃dlb buff                             ⍝ Is it a table?
                          :AndIf (+/∧\' '=buff)≥⊃noOfBlanks                 ⍝ Max number of spaces is the indentation
                              drop←+/∧\'|'=,1↑[2]dlb↑bl
                              buff←drop↑bl
                              parms←CreateParms
                              parms←ns.parms CopyTo parms
                              parms.lineNumberOffset←⊃ns.lineNumbers
                              ns2←Init parms(dlb buff)
                              ns2←Process ns2
                              report,←ns2.report
                              ((⍴html)⊃html)←(-⍴'</li>')↓(⍴html)⊃html
                              html,←ns2.html
                              ((⍴html)⊃html),←'</li>'
                          :ElseIf '> '≡2⍴dlb buff                           ⍝ Is it a blockquote?
                              ns3←⎕NS''
                              ns3.(markdown markdownLC leadingChars emptyLines withoutBlanks lineNumbers)←(ns.noOf-⍴bl)↓¨ns.noOf↑¨ns.(markdown markdownLC leadingChars emptyLines withoutBlanks lineNumbers)
                              drop←ScanForBlockQuotes ns3
                              parms←CreateParms
                              parms.bookmarkLink←0
                              parms.markdownStrict←ns.parms.markdownStrict
                              parms.verbose←0
                              parms.checkLinks←0
                              parms.checkFootnotes←0
                              parms.subTocs←0
                              parms.syntaxSugar←ns.parms.syntaxSugar
                              parms.lineNumberOffset←⊃ns.lineNumbers
                              md←noOfBlanks↓¨drop↑ns3.markdown
                              ns2←Init parms md
                              ns2←Process ns2
                              ((⍴html)⊃html)←(-⍴'</li>')↓(⍴html)⊃html
                              html,←ns2.html
                              ((⍴html)⊃html),←'</li>'
                              report,←ns2.report
                          :Else
                              (drop para)←CollectItemPara bl
                              i←i+drop-1
                              :If '!['{⍺≡(⍴⍺)↑⍵}dlb buff
                              :AndIf '![CDATA['{⍺≢(⍴⍺)↑⍵}dlb buff
                              :AndIf 1
                              ⍝ Regular expression needed that catches the image.
                              ⍝ If nothing is left then any special attributes belong to the image rather than the paragraph.
                              ⍝ OR: The definition of images is wrong and special attributes MUST be specified inside the ()!!!!
                              ⍝ (That's much more likely!)
                                  sa←'' ⍝ then any special attributes
                              :Else
                                  sa←GetSpecialAttributes para
                              :EndIf
                              para←dtb sa DropSpecialAttributes para
                              buff←⊃¯1↑html
                              :If '</li>'≡({{⌽⍵↑⍨⍵⍳'<'}⌽⍵}buff)
                                  buff←(-⍴'</li>')↓buff
                                  (¯1↑html)←⊂buff
                              :EndIf
                              buff3←⊃ns ProcessInlineMarkUp para
                              html,←⊂'<p',sa,'>',(dlb buff3),'</p></li>'
                          :EndIf
                      :Else
                          html,←⊂'<p>',(⊃bl),'</p>'
                      :EndIf
                      lastWasEmpty←0
                  :EndIf
              :EndIf
              bl←drop↓bl
          :Until 0∊⍴bl
          html,←({'</',(¯1↑⍵),'l>'}¨⌽type),¨((¯1+⍴type)⍴⊂'</li>'),⊂''
          html←InjectBR¨html
          ns.html,←html
          ns←Drop ns
          r←1
      :EndIf
    ∇

      GetLengthOfLeadingWhitespacePlusListMarker←{
        ⍝ 9 ← ∇ '  123)   List item'
        ⍝ 0 ← ∇ 'List item'
          ⊃'^\s*?\b\d{1,9}\b[.)]\s+' '^\s*?[-*+]{1}\s+'⎕S 1⊢⍵
      }

      ProcessHorizontalRulers←{
          ns←⍵
          3<+/∧\' '=⊃ns.markdown:0              ⍝ Zero to a maximum of three leading white space characters are allowed.
          sa←GetSpecialAttributes⊃ns.markdown
          0=+/∧/¨(⊂sa DropSpecialAttributes' '~⍨⊃ns.leadingChars)='*-_':0
          line←dlb⊃ns.markdown
          line←sa DropSpecialAttributes line
          3>line+.=⊃line:0
          ~0∊⍴line~' ',⊃line:0
          ns.html,←⊂'<hr',sa,'>'
          ns←Drop ns
          1
      }

    ∇ r←ProcessTable ns;b;max
      r←0
      :If IsTableRow⊃ns.markdown
          max←+/∧\∨/'|'=↑ns.withoutBlanks
          ns.noOf←+/∧\IsTableRow¨max↑ns.markdown
          :If 1<ns.noOf
          :AndIf ∨/{∧/'-'='|: '~⍨⍵}¨2↑ns.markdown
              r←ProcessTable_ ns
          :Else
              r←ProcessTableWithoutColTitles ns
          :EndIf
      :EndIf
    ∇

    ∇ r←ProcessTable_ ns;specialAttrs;ind;align;drop;cells;rows;b;head;noOfCols;footer
      :Trap (~ns.parms.debug)/0
          specialAttrs←GetSpecialAttributes⊃ns.markdown
          ns.html,←⊂{0∊⍴⍵:'<table>' ⋄ '<table',⍵,'>'}specialAttrs
          :If {∧/'-'='|: '~⍨⍵}2⊃ns.markdown
              ns.html,←⊂'<thead>'
              ns.html,←⊂'<tr>'
              ind←{~':'∊⍵:1 ⋄ '::'≡2⍴¯1⌽⍵:3 ⋄ ':'=1⍴⍵:2 ⋄ 4}¨' '~¨⍨SplitTableRowButMaskCode 2⊃ns.markdown
              align←↑¨ind⌷¨⊂'?' 'left' 'center' 'right'
              head←SplitTableRowButMaskCode specialAttrs DropSpecialAttributes 1⊃ns.markdown
              head←ns{⍺ CheckOddNumberOfDoubleQuotes ⍵'header'}¨head
              head←⊃¨ns ProcessInlineMarkUp¨head
              :If ns.parms.syntaxSugar
                  head←ns.parms.lang∘SmartQuotes¨head
              :EndIf
              drop←2
          :Else
              ind←{~':'∊⍵:1 ⋄ '::'≡2⍴¯1⌽⍵:3 ⋄ ':'=1⍴⍵:2 ⋄ 4}¨' '~¨⍨SplitTableRowButMaskCode 1⊃ns.markdown
              align←↑¨ind⌷¨⊂'?' 'left' 'center' 'right'
              drop←1
          :EndIf
          :If ~0∊⍴cells←drop↓ns.noOf↑ns.markdown
              cells←SplitTableRowButMaskCode¨cells
              cells←{dlb∘dtb ⍵}¨¨cells
              cells←ns{⍺ CheckOddNumberOfDoubleQuotes ⍵'header'}¨¨cells
              cells←⊃¨¨ns ProcessInlineMarkUp¨¨cells
              :If ∨/b←∨/¨'?'=align
                  noOfCols←⌈/(⍴align),⊃∘⍴¨cells
                  b←noOfCols↑b
                  :If (⍴align)>noOfCols
                      cells←cells,¨((⍴align)-noOfCols)⍴(⊃⌈/⍴¨cells)⍴⊂,' '
                  :ElseIf (⍴align)<noOfCols
                      align←noOfCols↑align,noOfCols⍴⊂'left'
                  :EndIf
                  :If noOfCols∨.≠⊃∘⍴¨cells
                      cells←noOfCols↑¨cells,¨noOfCols⍴¨⊂,' '
                  :EndIf
                  (b/align)←('left' 'right')[{{0∊⍴⍵~' ':1 ⋄ 1+⊃∧\⊃⎕VFI ⍵}⊃,/' ',¨⍵}¨↓⍉↑b∘/¨cells]
              :EndIf
          :Else
              :If ∨/b←∨/¨'?'=align
                  (b/align)←⊂'left'
              :EndIf
          :EndIf
     
          :If 2=drop
              ns.html,←('th'∘{⍺,⍵}¨1 AddAlignStyle¨align)Tag¨(⍴align)↑head,(⍴align)⍴⊂''
              ns.html,←⊂'</tr>'
              ns.html,←⊂'</thead>'
          :EndIf
          (footer cells)←ns.parms.markdownStrict GetFooter cells
          ns.html,←⊂'<tbody>'
          rows←{('td'∘{⍺,⍵}¨2 AddAlignStyle¨align)Tag¨⍵}¨(⍴align)↑¨cells
          ns.html,←⊃,/{(⊂'<tr>'),⍵,⊂'</tr>'}¨rows
          ns.html,←⊂'</tbody>'
          :If ~0∊⍴footer
              ns.html,←⊂'<tfoot>'
              ns.html,←⊃,/{(⊂'<tr>'),⍵,⊂'</tr>'}¨{('td'∘{⍺,⍵}¨2 AddAlignStyle¨align)Tag¨⍵}¨(⍴align)↑¨footer
              ns.html,←⊂'</tfoot>'
          :EndIf
          ns.html,←⊂'</table>'
          ns←Drop ns
          r←1
      :Else
          r←1
          ns←Drop ns
      :EndTrap
    ∇

      GetFooter←{
          strict←⍺
          strict:''⍵ ⍝ No footers
          cells←⍵
          0=+/bool←{'='∧.=⊃,/⍵}¨cells:''cells
          ind←¯1+bool⍳1
          ((1+ind)↓cells)(ind↑cells)
      }

    ∇ r←ProcessTableWithoutColTitles ns;specialAttrs;cells;align;footer;rows
      r←1
      specialAttrs←GetSpecialAttributes⊃ns.markdown
      ns.html,←⊂{0∊⍴⍵:'<table>' ⋄ '<table',⍵,'>'}specialAttrs
      cells←SplitTableRowButMaskCode¨{(⊂specialAttrs DropSpecialAttributes⊃⍵),1↓⍵}ns.noOf↑ns.markdown
      cells←{dlb∘dtb ⍵}¨¨cells
      cells←ns{⍺ CheckOddNumberOfDoubleQuotes ⍵'header'}¨¨cells
      cells←⊃¨¨ns ProcessInlineMarkUp¨¨cells
      align←('left' 'right')[1+{∧/⊃⎕VFI∊' ',¨⍵}¨↓⍉↑cells]
      (footer cells)←ns.parms.markdownStrict GetFooter cells
      :If ~0∊⍴footer
          ns.html,←⊂'<tfoot>'
          ns.html,←⊃,/{(⊂'<tr>'),⍵,⊂'</tr>'}¨{('td'∘{⍺,⍵}¨2 AddAlignStyle¨align)Tag¨⍵}¨(⍴align)↑¨footer
          ns.html,←⊂'</tfoot>'
      :EndIf
      ns.html,←⊂'<tbody>'
      rows←{('td'∘{⍺,⍵}¨AddAlignStyle¨align)Tag¨⍵}¨(⊃⌈/⍴¨cells)↑¨cells
      ns.html,←⊃,/{(⊂'<tr>'),⍵,⊂'</tr>'}¨rows
      ns.html,←⊂'</tbody>'
      ns.html,←⊂'</table>'
      ns←Drop ns
    ∇

      ProcessHeaders←{
          ns←⍵
          '#'=1⍴⊃ns.leadingChars:ProcessATX_Header ns
          ~0∊⍴' {0,3}\[#{1,6} [~_*a-zA-Z0-9].*] *\(.+\)'⎕S 0⍠('Greedy' 0)⊣1⍴ns.markdown:ProcessATX_HeaderLink ns
          ProcessSetextHeader ns
      }

    ∇ flag←ProcessATX_Header ns;l;txt;sa;c;c2;bookmarkName;anchor
      flag←0
      l←+/∧\'#'=1⊃ns.leadingChars                   ⍝ Level
      'Invalid header level'⎕SIGNAL 11/⍨~l∊⍳6
      txt←1⊃ns.markdown
      :If 4>+/∧\' '=txt                             ⍝ A maximum of three spaces is allowed
      :AndIf ' '=⊃txt~'#'                           ⍝ The first char after the # must be a blank
          sa←GetSpecialAttributes⊃ns.markdown
          txt←sa DropSpecialAttributes txt
          c←{⍵↓⍨-+/∧\(⌽⍵)∊'# '}{⍵↓⍨+/∧\⍵∊'# '}txt   ⍝ Caption. Delete leading and trailing blanks in the process
          c←ns CheckOddNumberOfDoubleQuotes c'header'
          c2←⊃ns ProcessInlineMarkUp c
          bookmarkName←ns GetBookMarkNameFromCaption txt((l≤ns.parms.bookmarkLink)/sa)
          anchor←AddBookmarkLink l ns bookmarkName
          ns.html,←ns.parms.div_h_tag/⊂'<div class="h_tag">'
          ns.html,←{⊂⍣(~0∊⍴⍵)⊣⍵}anchor
          ns.html,←⊂'<h',(⍕l),(RemoveIdFromSpecialAttributes⍣(~0∊⍴anchor)⊣sa),'>',c2,'</h',(⍕l),'>'
          ns.html,←((,0)≢,ns.parms.bookmarkLink)/⊂'</a>'
          ns.html,←ns.parms.div_h_tag/⊂'</div>'
          ns.headers⍪←l bookmarkName c2
          ns.headerLineNos,←⊃ns.lineNumbers
          ns.noOf←1
          ns←Drop ns
          flag←1
      :EndIf
    ∇

    ∇ flag←ProcessATX_HeaderLink ns;row;sa;header
      ⍝ This should only happen when an HTML document that was created by MarkAPL is converted back into Markdown.
      ⍝ We try to limit the damage here but we don't create a link, and such headers are going into a TOC.
      flag←0
      row←⊃ns.markdown
      sa←GetSpecialAttributes ¯1↓dtb row
      :If ∨/' class="autoheader_anchor" '⍷' ',sa,' '
          header←{⍵↑⍨¯1+⍵⍳']'}↑{⍵↓⍨⍵⍳'['}row
          sa←'class="autoheader_anchor"'⎕R''⊣sa
          sa←dmb'id=".*"'⎕R''⊣sa
          header←dlb dtb header,sa
          (1⊃ns.markdown)←header
          (1⊃ns.markdownLC)←Lowercase header
          (1⊃ns.leadingChars)←(16⌊⍴header)↑header
          (1⊃ns.withoutBlanks)←' '~⍨1⊃ns.withoutBlanks
          flag←ProcessATX_Header ns
      :EndIf
    ∇

    ∇ flag←ProcessSetextHeader ns;noOf;ind;sa;l;c;c2;anchor;bookmarkName
      flag←0
      noOf←ScanForPara ns                           ⍝ Because only what qualifies as paragraph can be an ATX header
      :If noOf≠0
      :AndIf noOf<⍴ns.markdown
          ind←noOf+Where∊'-='IotaSetextHeader¨⊂(1+noOf)⌷¨ns.(withoutBlanks markdown emptyLines)
      :AndIf ~0∊⍴ind                             ⍝ It's not a Setext header
          ind←⊃ind
          sa←GetSpecialAttributes(ind-1)⊃ns.markdown
          l←1+'-'=⊃ind⊃ns.leadingChars
          c←CompilePara noOf↑ns.markdown
          c←sa DropSpecialAttributes c
          ns.noOf←1+noOf
          c2←⊃ns ProcessInlineMarkUp c
          c←ns CheckOddNumberOfDoubleQuotes c'header'
          bookmarkName←ns GetBookMarkNameFromCaption c2((l≤ns.parms.bookmarkLink)/sa)
          anchor←AddBookmarkLink l ns bookmarkName
          ns.html,←ns.parms.div_h_tag/⊂'<div class="h_tag">'
          ns.html,←{⊂⍣(~0∊⍴⍵)⊣⍵}anchor
          ns.html,←⊂'<h',(⍕l),(RemoveIdFromSpecialAttributes⍣(~0∊⍴anchor)⊣sa),'>',c2,'</h',(⍕l),'>'
          ns.html,←((,0)≢,ns.parms.bookmarkLink)/⊂'</a>'
          ns.html,←ns.parms.div_h_tag/⊂'</div>'
          ns.headers⍪←l bookmarkName c2
          ns.headerLineNos,←⊃ns.lineNumbers
          ns←Drop ns
          flag←1
      :EndIf
    ∇

    ∇ r←RemoveLampLines ns
      r←0
      :If '⍝'=⊃⊃ns.markdown
          ns←Drop ns
          r←1
      :EndIf
    ∇

    ∇ r←ProcessCodeBlock ns;bl;buff;sa;pattern;min;line;infoString;fence
    ⍝ Handles code block, either "~~~" (Markdown2 Extra) or "```" (Git).
      r←0
      line←⊃ns.markdown
      :If IsFenceStart line
          line←dlb line
          min←{(⊃⍵)+.=⍵}line
          fence←⊃line
          pattern←('^\s{0,3}'),fence,'{',(⍕,min),',}'
      :AndIf ¯1≢ns.noOf←pattern FindFenceEnd 1↓ns.markdown
          :If 2<ns.noOf
              bl←1↓¯1↓ns.noOf↑ns.markdown
              sa←GetSpecialAttributes line
              line←sa DropSpecialAttributes line
              infoString←GetInfoString line
              :If 0<+/⊃∘⍴¨bl~¨' '
                  bl←((+/∧\' '=⊃ns.markdown)⌊⌊/+/∧\' '=↑bl)↓¨bl   ⍝ Drop as many blanks as there are indendet blanks
                  buff←MarkUpAsCode(2 EscapeSpecialChars¨bl)sa infoString
                  :If ns.parms.leanpubExtensions
                      buff←ProcessLeanPubCodeEmphasizing buff
                  :EndIf
                  ns.html,←buff
              :EndIf
              ns.noOf←2+⍴bl
          :ElseIf 2≠ns.noOf
          :OrIf ~0∊⍴(⊃ns.markdown)~'~` '
              ns.noOf←0
              :Return
          :EndIf
          r←1
          ns←Drop ns
      :EndIf
    ∇

      Drop←{
          ns←⍵
          ns.(markdown markdownLC leadingChars emptyLines withoutBlanks lineNumbers)←ns.noOf↓¨ns.(markdown markdownLC leadingChars emptyLines withoutBlanks lineNumbers)
          ns.noOf←1
          ns
      }

    ∇ (html isHtmlBlock)←ns ProcessFunctionCalls html;mask;ind;noOf;call;result;flag;isEmpty
      mask←~GetMaskForCodeTags html
      isHtmlBlock←0
      :If ~0∊⍴ind←'[^⍎]⍎⍎[^⍎]'⎕S 0⊣' ',(mask/html),' '  ⍝ Two blanks for the ≠ to fit start and end. The first one also fixes ⎕io
      :AndIf ~0∊⍴ind←(2×⌊0.5×⍴ind)↑ind
          :Repeat
              html←(⊃ind)⌽html
              noOf←-/ind[2 1]
              call←dlb dtb 1↓(noOf-1)↑1↓html
              html←(2+noOf)↓html
              :If ~0∊⍴result←ns ExecExternalFns call
                  isEmpty←0=⊃∘⍴¨result~¨' '
                  result←(0⌈¯1++/∧\isEmpty)↓(-0⌈¯1++/∧\⌽isEmpty)↓result ⍝ Allow max 1 leading/trailing blank line
                  flag←⊃ns.parms.syntaxSugar
                  isHtmlBlock←CheckForHtmlBlock result(0=⊃∘⍴¨' '~¨⍨result)ns.topOfDocument
                  :If 1=≡result
                      :If flag∧~isHtmlBlock
                          result←⊃ns ProcessInlineMarkUp result
                      :EndIf
                  :Else
                      'Embeded function returned invalid result'⎕SIGNAL 11/⍨(,1)≢∪≡¨,¨result
                      :If flag∧~isHtmlBlock
                          result←Nest result
                          result←,⊃¨ns ProcessInlineMarkUp¨dmb result
                      :EndIf
                  :EndIf
                  'Called function returned an HTML block but does not stand on its own'⎕SIGNAL 11/⍨isHtmlBlock∧0≠⍴html
                  :If 0∊⍴html
                      html←(-ind[1])⌽result,html
                  :Else
                      html←(-ind[1])⌽(⊃⍣(1<≡html)⊣result),html
                  :EndIf
              :EndIf
          :Until 0∊⍴ind←2↓ind
      :EndIf
    ∇

    ∇ {r}←∆LastLineWasEmpty ProcessParagraph ns;sa;para;tag;isHtmlBlock
      r←⍬
      ns.noOf←ScanForPara ns
      ns.noOf←1⌈ns.noOf
      para←CompilePara ns.noOf↑ns.markdown
      para←ns CheckOddNumberOfDoubleQuotes para'paragraph'
      sa←GetSpecialAttributes para
      para←sa DropSpecialAttributes⍣(0<⊃⍴sa)⊣para
      (para isHtmlBlock)←ns ProcessInlineMarkUp para
      :If ~0∊⍴para
          ns.html,←Nest sa{2=≡⍵:⍺∘∇¨⍵ ⋄ '<p',({0∊⍴⍵:'>' ⋄ ⍵,'>'}⍺),⍵,'</p>'}para
      :EndIf
      ns←Drop ns
    ∇

    ∇ r←ScanForBlockQuotes ns;ns2;lc;b;max
      r←0
      ns2←⎕NS''
      lc←↑2↑¨ns.leadingChars        ⍝ Leading two chars
      max←¯1+ns.emptyLines⍳1        ⍝ An empty line marks the end
      ns2.(markdown markdownLC leadingChars emptyLines withoutBlanks lineNumbers)←max↑¨ns.(markdown markdownLC leadingChars emptyLines withoutBlanks lineNumbers)
      lc←max↑lc                     ⍝ Leading chars
      :While 0<ns2.noOf←1 ScanForPara ns2
          lc←ns2.noOf↓lc            ⍝ Leading chars
          :If 0∊⍴lc                 ⍝ No blockquotes...
          :OrIf '> '≢lc[1;]         ⍝ any more?
              r+←ns2.noOf
              :Leave                ⍝ No - we are done
          :EndIf
          ns2.noOf+←+/∧\lc∧.='> '   ⍝ Add them
          r+←ns2.noOf
          ns2←Drop ns2
      :EndWhile
    ∇

    ∇ noOf←{dontCheckForBlockQuote}ScanForPara ns;buff;bool
    ⍝ `noOf` : Number of lines, if any), the next paragraph will comprise.
      dontCheckForBlockQuote←{0<⎕NC ⍵:⍎⍵ ⋄ 0}'dontCheckForBlockQuote'
      :If 1≠noOf←+/∧\0=ns.emptyLines                                                          ⍝ How many lines until next empty line?
      :AndIf 1≠noOf←noOf⌊¯1+⊃'='IotaSetextHeader noOf↑¨ns.(withoutBlanks markdown emptyLines) ⍝ Header (= syntax)
      :AndIf 1≠noOf←noOf⌊¯1+⊃'-'IotaSetextHeader noOf↑¨ns.(withoutBlanks markdown emptyLines) ⍝ Header (- syntax)
      :AndIf 1≠noOf←+/∧\~(noOf↑⊃¨ns.leadingChars)∊'|#='                                       ⍝ header, tables?
      :AndIf 1≠noOf←+/∧\~(noOf↑⊃¨ns.leadingChars)∊'|#='                                       ⍝ HTML header, tables?
      :AndIf 1≠noOf←+/∧\~{⊃⍴'^\s{0,3}[-+\*]\s'⎕S 0⊣⍵}¨noOf↑ns.markdown                        ⍝ bulleted list
      :AndIf 1≠noOf←+/∧\~{⊃⍴'^\s{0,3}[0-9]{1,9}[.)]'⎕S 0⊣⍵}¨noOf↑ns.markdown                  ⍝ Ordered lists?
      :AndIf 1≠noOf←+/∧\~{∨/({⍵⍴⍨3⌊⍴⍵}⍵~' ')∘≡¨'***' '---' '___'}¨noOf↑ns.markdown            ⍝ Horizontal rulers?
      :AndIf 1≠noOf←+/∧\~'```'∘{⍺≡(⍴⍺)↑⍵}¨noOf↑ns.markdown                                    ⍝ Code block (``` syntax)
      :AndIf 1≠noOf←+/∧\~'~~~'∘{⍺≡(⍴⍺)↑⍵}¨noOf↑ns.markdown                                    ⍝ Code block (~~~ syntax)
      :AndIf 1≠noOf←+/∧\'<<subtoc>>'∘≢¨Lowercase noOf↑ns.markdown                             ⍝ Sub TOCs
      :AndIf 1≠noOf←+/∧\{0∊⍴'<pre\b[^>]*>' '<style\b[^>]*>' '<script\b[^>]*>'⎕S 0⊣⍵}¨noOf↑ns.leadingChars               ⍝
      :AndIf ~dontCheckForBlockQuote
          noOf←+/∧\~(noOf↑⊃¨ns.leadingChars)∊'|>#='                                           ⍝ Blockquote (>) MUST be the last check!
      :EndIf
    ∇

    ∇ anchor←AddBookmarkLink(level ns bookmarkName)
      ⍝ Add ID and HREF if that is okay with ns.parms.bookmarkLink
      anchor←''
      :If 0<ns.parms.bookmarkLink
      :AndIf ns.parms.bookmarkLink≥level
          anchor,←' href="#',bookmarkName,'" id="',bookmarkName,'"'
        ⍝ Make sure the class is assigned after ID/Href, otherwise you'll break `CheckInternalLinks`
          anchor,←' class="autoheader_anchor"'
          anchor←'<a',anchor,'>'
      :EndIf
    ∇

      MarkUpAsCode←{
          (code specialAttrs infoString)←⍵
          code←Nest code
          st←'<pre',((~0∊⍴infoString)/' class="',infoString,'"'),'><code',({0∊⍴⍵:⍵ ⋄ ' ',⍵}dmb specialAttrs),'>'    ⍝ Start tag
          (1⊃code)←st,1⊃code
          ((⍴code)⊃code),←'</code></pre>'
          code
      }

    ∇ tx←MarkUpInlineCode tx_;b;s;e;tx2;tx1;tx;ind;even;ind2
      :If 0<+/b←'`'=tx←tx_                  ⍝ We are done if there are no back-ticks
          ind←Where b                       ⍝ All indices
          :If ∨/b←∧\'\'=(' ',tx)[ind]
              ind2←b/ind
              ind←(~b)/ind
          :Else
              ind2←⍬
          :EndIf
      :AndIf 0<⍴ind
          s←⊃ind                            ⍝ First one
          even←(0 1⍴⍨⍴ind)/ind              ⍝ Only these can be closing ones,
          :If 0=e←⊃('`'≠(tx,' ')[even+1])/even   ⍝ Only odd ` with no ` to their right can be a closing back-tick
              e←1+⍴tx
          :EndIf
          tx1←(s-1)⍴tx
          tx2←(e-s-1)↑(⍴tx1)↓tx
          :If ~0∊⍴ind2
              tx1←tx1[(⍳⍴tx1)~ind2-1]
          :EndIf
          tx←e↓tx
          tx2←'<code>',(1↓¯1↓tx2),'</code>'
          tx2←(~'``'⍷tx2)/tx2
          tx←MarkUpInlineCode tx
          tx←tx1,tx2,tx
      :EndIf
    ∇

      Tag←{
          ⍺←'p'
          '<',⍺,'>',⍵,'</',({⍵↑⍨¯1+⍵⍳' '},⍺),'>'
      }

      EscapeSpecialChars←{
      ⍝ ⍵ is typically a line of a Markdown document.
      ⍝ Code is **not** masked here: we need to exchange "<>&" even in code.
      ⍝ See `EscapeSpecialCharsOutsideCode` if you don't want this to happen.
      ⍝ However, don't touch anything between "" inside <> (attribute definitions).
      ⍝ ⍺ may be 1 or 2 and defaults to 1; that means that "<<" remains untouched.
      ⍝ If ⍺ is 2 (typically ⍵ is code then) "<<" is converted, and so is <.
          ⍺←1
          0∊⍴⍵:⍵
          ⍺=1:'(?<!\<)<\<(?!<)' '(?<!\>)>\>(?!>)' '<' '>' '(?<!\\)&'⎕R'&' '&' '\&lt;' '\&gt;' '\&amp;'⊣⍵
          ⍺=2:'<'⎕R'\&lt;'⊣'>'⎕R'\&gt;'⊣'\&'⎕R'&amp;'⊣⍵
          . ⍝ Huuh?! Invalid left argument
      }

      EscapeSpecialCharsOutsideCode←{
      ⍝ ⍵ is typically a line of a Markdown document.
      ⍝ Code is masked here. If you don't want this see `EscapeSpecialChars`
          0∊⍴⍵:⍵
          ((⊂'`.*?`'),,¨'<>&')⎕R'\0' '\&lt;' '\&gt;' '&amp;'⊢⍵
      }

      BringBackSpecialHtmlEntities←{
     ⍝ Bring back the three special HTML entities: &lt; and &gt; and &amp;
     ⍝ Needed in cases processed stuff must be processed again (TOC for example)
          0∊⍴⍵:⍵
          '&amp;'⎕R'\&'⊣'&gt;'⎕R'>'⊣'&lt;'⎕R'<'⊣⍵
      }

    ∇ r←ProcessSubTOC ns;header;level
      r←0
      :If '<<subtoc>>'{⍺≡(⍴⍺)↑⍵}⊃ns.markdownLC
          :If ns.parms.subTocs
              (level header)←{'<h'{⍺≡(⍴⍺)↑⍵}⊃⍵:{({⍎⍵↑⍨¯1+⍵⍳'>'}2↓⍵)({⍵↑⍨¯1+⍵⍳'<'}⍵↓⍨⍵⍳'>')}⊃⍵ ⋄ ∇ 1↓⍵}⌽ns.html
              ns.subToc,←⊂level header
              ns.html,←Lowercase 1↑ns.markdown
          :EndIf
          ns←Drop ns
          r←1
      :EndIf
    ∇

    ∇ ns←InjectSubTOCs ns;where;i;header;level;ind;from;noOf;levels;toc;drop;md;ns2;subToc;parms
      :If (,0)≢,ns.parms.toc
      :AndIf ~0∊⍴ns.subToc
          where←Where∨/¨'<<subtoc>>'∘⍷¨Lowercase ns.html
          :For i :In ⍳⍴ns.subToc
              (level header)←i⊃ns.subToc
              ind←i⊃where
              from←1⍳⍨(ns.headers[;1]=level)∧(ns.headers[;3]≡¨⊂header)
              noOf←+/∧\level<from↓ns.headers[;1]
              levels←noOf↑from↓ns.headers[;1]
              toc←↑3↑¨noOf↑from↓ns.toc
              :If (⊃⍴toc)∊0 1
                  ns.html[i⊃where]←⊂''
                  ns.report,←⊂'No SubTOC injected for "',header,'": no items found'
                  :Leave
              :Else
                  :If (,0)≢,ns.parms.numberHeaders
                      toc,←toc{⍵[;4]⌿⍨⍵[;2]∊⍺[;3]}ns.headers
                  :EndIf
                  drop←⌊/toc[;1]
                  :If (,0)≢,ns.parms.numberHeaders
                      md←{(' '⍴⍨(1⊃⍵)-drop),'* [',(4⊃⍵),' ',(2⊃⍵),'](#',(3⊃⍵),')'}¨↓toc
                  :Else
                      md←{(' '⍴⍨(1⊃⍵)-drop),'* [',(2⊃⍵),'](#',(3⊃⍵),')'}¨↓toc
                  :EndIf
                  parms←CreateParms
                  parms.markdownStrict←ns.parms.markdownStrict
                  parms.verbose←0
                  parms.checkLinks←0
                  parms.checkFootnotes←0
                  parms.syntaxSugar←0
                  ns2←Init parms md
                  {}ProcessLists ns2
                  :If (,0)≢,ns.parms.numberHeaders
                      ns2.html←'href="#\d{0,}-'⎕R'href="#'⍠('Greedy' 0)⊣ns2.html
                  :EndIf
                  subToc←'<nav>'('<p>Topics:</p>'),ns2.html,⊂'</nav>'
                  ns.html[i⊃where]←⊂subToc
              :EndIf
          :EndFor
          ns.html←⊃,/{1=≡⍵:⊂⍵ ⋄ ⍵}¨ns.html
      :EndIf
    ∇

    ∇ r←ProcessReferenceLinks ns;line;id;url;alt;sa
      r←0
      :If '['=⊃⊃ns.leadingChars
      :AndIf ~0∊⍴'\[[A-Za-z0-9_-]*\]:'⎕S 0⊣⊃ns.markdown      ⍝ Find identifiers
          id←{1↓⍵↑⍨¯2+⍵⍳':'}⊃ns.markdown
          url←dlb dtb{⍵↓⍨⍵⍳':'}⊃ns.markdown
      :AndIf {~'='∊⍵↑⍨⌊/⍵⍳'?{'}url   ⍝ `?` parts URL parameter, `{` parts special attributes. Both may carry `=`!
          sa←GetSpecialAttributes url
          url←dtb sa DropSpecialAttributes url
          :If 2=+/'"'=url
              alt←{¯1↓⍵↓⍨⍵⍳'"'}url
              url←dtb{⍵↑⍨¯1+⍵⍳'"'}url
          :Else
              alt←''
          :EndIf
          ns.linkRefs,←⊂id url alt sa
          ns←Drop ns
          r←1
      :EndIf
    ∇

    ∇ ns←ProcessEmbeddedParms ns;mask;buff;bool;noOf;def;i;id;value;b;v
    ⍝ Here we do not need to add ns.parms.lineNumberOffset because there are no
    ⍝ embedded parameters with recursive calls anyway!
      :If 0<noOf←+/∧\'['=⊃¨ns.leadingChars
          buff←noOf↑ns.markdown
          noOf←'[parm]:'{+/∧\⍺∘≡¨{(Lowercase 5↑¨⍵),¨5↓¨⍵}(⍴⍺)↑¨⍵}buff
          ns.noOf←noOf
          buff←noOf↑buff
          ns←Drop ns
          :For i def :InEach (⍳noOf)buff
              :If '='∊def
                  (id value)←¯1 0↓¨7 0↓¨{i←⍵⍳'=' ⋄ (i↑⍵)(i↓⍵)}def
                  id~←' '
                  value←dlb dtb value
                  :If 0∊⍴value
                      ns.report,←⊂'Data definition on line ',(⍕i),' is invalid'
                      :Continue
                  :EndIf
                  :If ''''∊value
                      :If ''''''≡2⍴¯1⌽value
                          value←¯1↓1↓value
                      :Else
                          value←''
                          ns.report,←⊂'Data value definition for line ',(⍕⊃i),' is invalid'
                      :EndIf
                  :Else
                      (b v)←⎕VFI value
                      :If ∧/b
                          value←{1=⍴⍵:⍬⍴⍵ ⋄ ⍵}v
                      :EndIf
                  :EndIf
                  ns.embeddedParms⍪←id value
                  ⍎'ns.parms.',id,'←value'
              :Else
                  ns.report,←⊂'Data definition on line ',(⍕i),' is invalid'
              :EndIf
          :EndFor
          :If ∨/b←~ns.embeddedParms[;1]∊CreateHelpParms.∆List[;1]
              ns.report,←⊂'Invalid embbed parameter',((1<+/b)/'s'),': ',⊃{⍺,',',⍵}/'"',¨'"',⍨¨b/ns.embeddedParms[;1]
          :EndIf
      :EndIf
    ∇

    ∇ r←ProcessDataDefs ns;def;value;id;b;v
      r←0
      :If '['=⊃⊃ns.leadingChars
          :If ~0∊⍴Where'[data]:'≡Lowercase 7↑⊃ns.leadingChars      ⍝ Find identifiers
              def←⊃ns.markdown
              :If '='∊def
                  (id value)←¯1 0↓¨7 0↓¨{i←⍵⍳'=' ⋄ (i↑⍵)(i↓⍵)}def
                  value←dlb dtb value
                  :If ''''∊value
                      :If ''''''≡2⍴¯1⌽value
                          value←¯1↓1↓value
                      :Else
                          value←''
                          ns.report,←⊂'Data value definition for line ',(⍕ns.parms.lineNumberOffset+⊃ns.lineNumbers),' is invalid'
                      :EndIf
                  :Else
                      (b v)←⎕VFI value
                      :If ∧/b
                          value←{1=⍴⍵:⍬⍴⍵ ⋄ ⍵}v
                      :EndIf
                  :EndIf
                  ns.data,←⊂id value
              :Else
                  ns.report,←⊂'Data definition on line ',(⍕ns.parms.lineNumberOffset+⊃ns.lineNumbers),' is invalid'
              :EndIf
              ns←Drop ns
              r←1
          :EndIf
      :EndIf
    ∇

    ∇ r←ProcessAbbreviationDefs ns;def;abbr;comment
      r←0
      :If '*['≡2⍴⊃ns.leadingChars
          r←1
          :If ~0∊⍴'\*\[[\p{L} \/\+-_=&]*\]:'⎕S 0⊣⊃ns.markdown      ⍝ Find identifiers
              (abbr comment)←¯1 0↓¨':'Split 2↓⊃ns.markdown
              (abbr comment)←dlb∘dtb¨abbr comment
              ns.abbreviations⍪←abbr comment
          :Else
              ns.report,←⊂'Invalid abbreviation in line ',⍕ns.parms.lineNumberOffset+⊃ns.lineNumbers
          :EndIf
          ns←Drop ns
      :EndIf
    ∇

    ∇ r←ProcessFootnoteDefs ns;b1;noOf;b2;def;id
      r←0
      :If ~0∊⍴'^\[\^[A-Za-z0-9_⍙∆]*\]:'⎕S 0⊣⊃ns.markdown       ⍝ Find identifiers
          noOf←ScanForPara ns
          noOf←1⍳⍨'[^'∘≡¨2↑¨(noOf-1)↑1↓ns.markdown
          b1←'  '∘≡¨2↑¨noOf↓ns.markdown
          b2←noOf↓ns.emptyLines
          ns.noOf←noOf+(+/∧\b1)⌊1⍳⍨1 1⍷b2
          def←dlb{(⊂{'  ',dlb ⍵↓⍨⍵⍳':'}⊃⍵),1↓⍵}ns.noOf↑ns.markdown
      :AndIf ':'=1↑{⍵↓⍨⍵⍳']'}⊃ns.markdown
          id←{⍵↑⍨¯1+⍵⍳']'}2↓⊃ns.markdown
      :AndIf ∧/~AllWhiteSpaceChars∊id
      :AndIf ~0∊⍴def←(-+/∧\0=⌽⊃¨⍴¨def)↓def
      :AndIf ~0∊⍴def←{1↓¨(' '=⊃¨⍵)⊂⍵}' ',def
      :AndIf ~0∊⍴def←CompilePara¨def
      :AndIf ~0∊⍴def←⊃¨ns ProcessInlineMarkUp¨def
          ns.footnoteDefs⍪←id def
          ns←Drop ns
          r←1
      :EndIf
    ∇

    ∇ r←ProcessEmeddedHTML ns;tags;b;flag
      r←1
      :If CheckForHtmlBlock ns.(markdown emptyLines topOfDocument)
          ⍝ For details see regarding HTML block see http://spec.commonmark.org/0.24/#html-blocks
          ⍝ There's more to it then meets the eye at first glance.
          :If r←ProcessHtmlBlockType_1 ns
          :AndIf r←ProcessHtmlBlockType_2 ns
          :AndIf r←ProcessHtmlBlockType_3 ns
          :AndIf r←ProcessHtmlBlockType_5 ns   ⍝ 5 must be executed ...
          :AndIf r←ProcessHtmlBlockType_4 ns   ⍝ ... before 4!
          :AndIf r←ProcessHtmlBlockType_6 ns
          :AndIf r←ProcessHtmlBlockType_7 ns
          :AndIf ⊃ns.emptyLines
              ns.noOf←1
              ns←Drop ns
          :EndIf
      :EndIf
    ∇

    ∇ r←ProcessHtmlBlockType_1 ns;start
    ⍝ <script>, <style> or <pre>.
    ⍝ These are special because the first two can never be nested while the last one
    ⍝ preserves white space by definition.
    ⍝ ← is 0 when found and processed, otherwise 0.
      r←0
      :If '^<script\b[^>]*>'DetectOpeningTag(⊃ns.emptyLines)↓ns.markdown
          ns←Drop⍣(⊃ns.emptyLines)⊣ns
          ns.noOf←DetectClosingTag ns.markdownLC'</script>'
          ns.html,←'</script>'DropTailAfterClosingTag ns.noOf↑ns.markdown
          ns←Drop ns
      :ElseIf '^<pre\b[^>]*>'DetectOpeningTag(⊃ns.emptyLines)↓ns.markdown
          ns←Drop⍣(⊃ns.emptyLines)⊣ns
          ns.noOf←DetectClosingTag ns.markdownLC'</pre>'
          ns.html,←Process_PRE ns.noOf↑ns.markdown
          ns←Drop ns
      :ElseIf '^<style>'DetectOpeningTag(⊃ns.emptyLines)↓ns.markdown
          ns←Drop⍣(⊃ns.emptyLines)⊣ns
          ns.noOf←DetectClosingTag ns.markdownLC'</style>'
          ns.html,←'</style>'DropTailAfterClosingTag ns.noOf↑ns.markdown
          ns←Drop ns
      :Else
          r←1
      :EndIf
    ∇

    ∇ r←ProcessHtmlBlockType_2 ns;start;e;md
    ⍝ <!-- and -->
    ⍝ ← is 0 when found and processed, otherwise 0.
      r←1
      :If 2<⍴ns.markdown
      :AndIf 1∊e←1↓ns.emptyLines
          md←(1+(1↓ns.emptyLines)⍳1)↑ns.markdown
      :AndIf ∨/'<!--'⍷⊃1↓md
          :If ∨/'-->'⍷⊃¯1↑¯1↓md
              ns.noOf←¯1+⍴md
              ns.html,←'-->'DropTailAfterClosingTag 1↓ns.noOf↑ns.markdown
              ns←Drop ns
              r←0
          :Else
              ns.noOf←⊃ns.emptyLines
          :EndIf
      :EndIf
    ∇

    ∇ r←ProcessHtmlBlockType_3 ns;start;b;md
    ⍝ <? and ?>
    ⍝ ← is 0 when found and processed, otherwise 0.
      r←1
      :If 2<⍴ns.markdown
      :AndIf ⊃ns.emptyLines
      :AndIf '<?'{⍺≡(⍴⍺)↑⍵}2⊃ns.leadingChars
          :If 0<+/b←1↓ns.emptyLines
              md←(b⍳1)↑ns.markdown
          :AndIf 0<ns.noOf←DetectClosingTagBeforeEmptyLine ns.markdown'?>'
              ns.html,←'?>'DropTailAfterClosingTag 1↓ns.noOf↑ns.markdown
              ns←Drop ns
              r←0
          :EndIf
      :EndIf
    ∇

    ∇ r←ProcessHtmlBlockType_4 ns;start
    ⍝ "<!",⎕A
    ⍝ ← is 0 when found and processed, otherwise 0.
      r←1
      :If 2<⍴ns.markdown
      :AndIf 0∊⍴⊃ns.markdown
      :AndIf '<!'{⍺≡(⍴⍺)↑⍵}2⊃ns.leadingChars
      :AndIf 0<ns.noOf←DetectClosingTagBeforeEmptyLine ns.markdown'!>'
          ns.html,←'!>'DropTailAfterClosingTag 1↓ns.noOf↑ns.markdown
          ns←Drop ns
          r←0
      :EndIf
    ∇

    ∇ r←ProcessHtmlBlockType_5 ns;start
    ⍝ <![CDATA[ and ]]
    ⍝ ← is 0 when found and processed, otherwise 0.
      r←1
      :If 2<⍴ns.markdown
      :AndIf 0∊⍴⊃ns.markdown
      :AndIf '<![CDATA['{⍺≡(⍴⍺)↑⍵}2⊃ns.leadingChars
      :AndIf 0<ns.noOf←DetectClosingTagBeforeEmptyLine ns.markdown']]>'
          ns.html,←']]>'DropTailAfterClosingTag 1↓ns.noOf↑ns.markdown
          ns←Drop ns
          r←0
      :EndIf
    ∇

    ∇ r←ProcessHtmlBlockType_6 ns;start;t;f1;f2;buff;tag;noOfEmptyLines
    ⍝ Check for all possible (allowed and block) HTML5 tags.
    ⍝ This is different from others because it may start with a closing tag.
    ⍝ ← is 0 when found and processed, otherwise 1.
      r←1
      :If 1<⍴ns.markdown
      :AndIf ns.topOfDocument∨∆LastLineWasEmpty∨⊃ns.emptyLines
          noOfEmptyLines←+/∧\ns.emptyLines
          :If f1←'</'≡2↑2⊃ns.leadingChars
          :OrIf '<'=⊃⊃noOfEmptyLines↓ns.leadingChars
              :If 1∊(1+noOfEmptyLines)↓ns.emptyLines ⍝ Without a closing empty line it cannot be an HTML block
                  buff←dlb(f1+1)↓⊃noOfEmptyLines↓ns.markdownLC
                  buff←(buff⍳'>')↑buff               ⍝ Drop all behind the closing ">" or a blank
                  :If '/'∊buff
                      tag←⊂buff←buff~'<>/'
                  :Else
                      tag←⊂,'<'~⍨(¯1+⌊/buff⍳AllWhiteSpaceChars,'/>')↑buff
                  :EndIf
                  tag←{⍵↑⍨¯1+⍵⍳' '}¨tag
                ⍝ Most frequently used tags first:
                  :If tag∊,¨'div' 'h1' 'h2' 'h3' 'h4' 'h5' 'h6' 'li' 'ol' 'p' 'table' 'tbody' 'td' 'tfoot' 'th' 'thead' 'tr' 'ul'
                  :OrIf tag∊,¨'address' 'article' 'aside' 'basefont' 'blockquote' 'caption' 'center' 'colgroup' 'col'
                  :OrIf tag∊,¨'dd' 'details' 'dialog' 'dir' 'dl' 'dt' 'fieldset' 'figcaption' 'figure' 'footer' 'form' 'frame'
                  :OrIf tag∊,¨'frameset' 'head' 'header' 'hr' 'html' 'iframe' 'legend' 'link' 'main' 'menu' 'menuitem' 'meta' 'nav'
                  :OrIf tag∊,¨'noframes' 'optgroup' 'option' 'param' 'section' 'source' 'summary' 'title' 'track' 'pre' 'a' 'img'
                      buff←(⍴↑tag)↓buff
                      :If 0∊⍴buff
                      :OrIf '>'=¯1↑buff
                      :OrIf '/>'≡2⍴buff
                      :OrIf (1⍴buff)∊AllWhiteSpaceChars
                          ns.noOf←CalcNumberOfLinesOfHtmlBlock(⊃tag)ns.markdown
                          ∆LastLineWasEmpty←1
                          ns.html,←ns.noOf↑ns.markdown
                          ns←Drop ns
                          r←0
                      :EndIf
                  :EndIf
              :EndIf
          :EndIf
      :EndIf
    ∇

    ∇ r←ProcessHtmlBlockType_7 ns;start;cl
    ⍝ Free-style (= user defined) tags.
    ⍝ ← is 0 when found and processed, otherwise 0.
      r←1
      :If 1<⍴ns.markdown
      :AndIf ns.topOfDocument∨⊃ns.emptyLines
          cl←⊃(+/∧\ns.emptyLines)↓ns.markdownLC
          :If ~0∊⍴'<[a-z]*\b[^>]*>' '</[a-z][^>]*>'⎕S 0⊣cl     ⍝ Look for any tag
          :AndIf 0∊⍴'<script\b[^>]*>' '<style\b[^>]*>' '<pre\b[^>]*>'⎕S 0⊣cl
          :AndIf 0∊⍴{⍵↓⍨⍵⍳'>'}(2⊃ns.markdown)~AllWhiteSpaceChars
              ns.noOf←(1↓ns.emptyLines)⍳1
          :AndIf '>'=¯1↑dtb⊃¯1↑(1-ns.topOfDocument)↓ns.noOf↑ns.markdown
              ns.html,←(1-ns.topOfDocument)↓ns.noOf↑ns.markdown
              ns←Drop ns
              r←0
          :EndIf
      :EndIf
    ∇

    ∇ noOf←CalcNumberOfLinesOfHtmlBlock(tag markdown);open;close
      :If 0∊⍴⊃2↓markdown
          noOf←3            ⍝ The tag stands on its own (=is followed by an empty line)
      :Else
          open←1↓+\{⊃⍴('<',tag,'[^>]*>')⎕S 0⍠('Greedy' 0)('Mode' 'L')('IC' 1)⊣⍵}¨markdown
          close←{⊃⍴('</',tag,'>')⎕S 0⍠('Greedy' 0)('Mode' 'L')('IC' 1)⊣⍵}¨1↓markdown
          noOf←1+{+/∧\0<⍵}open-+\close
          noOf+←2                               ⍝ One for the empty line and 1 for ⎕IO (⎕S is ⎕IO←0!)
      :EndIf
    ∇

    ∇ md←Process_PRE md;first;last
      md←,md
      :If 1=⍴,md
          :If 0=⍴'<code\b[^>]*>'⎕S 0⊣⊃md   ⍝ <code> missing?!
              (⊃md)←'(<pre\b[^>]*>)'⎕R'\1<code>'⊣⊃md
          :EndIf
          :If 0=⍴'</code>'⎕S 0⊣⊃md   ⍝ </code> missing?!
              ((⍴md)⊃md)←'(</pre>)'⎕R'</code>\1'⊣(⍴md)⊃md
          :EndIf
      :Else
          (first last)←md[1,⍴md]
          :If 0∊⍴'<code\b[^>]*>'⎕S 0⊣first
          :AndIf 0∊⍴'<code\b[^>]*>'⎕S 0⊣⊃1↓md ⍝ '<cod'{⍺≢(⍴,⍺)↑⍵}⊃1↓md
              first,←'<code>'
          :EndIf
          :If 0=+/'</code'⍷last
          :AndIf '</cod'{⍺≢(⍴,⍺)↑⍵}⊃¯2↑md
              :If 0∊⍴{⍵↓⍨⍵⍳'>'}last
                  last,⍨←'</code>'
              :Else
                  last←'</code>',last
              :EndIf
          :EndIf
          md[1]←⊂first
          md[⍴md]←⊂last
          :If {(⍴⍵)=+/∧\2≥+\⍵='>'}1⊃md  ⍝ Do <pre> and <code> stand on their own?
              md←(,/2↑md),2↓md
          :EndIf
          :If {(⍴⍵)=+/∧\2≥+\⍵='>'}(⍴md)⊃md  ⍝ Do </pre> and </code> stand on their own?
              md←(¯2↓md),,/¯2↑md
          :EndIf
      :EndIf
      md←'</pre>'DropTailAfterClosingTag md
    ∇

      DeleteTrailingWhiteSpace←{
     ⍝ Blanks, Tabs, you name it.
     ⍝ See https://www.wikiwand.com/en/Whitespace_character for details.
          ⎕IO←1 ⋄ ⎕ML←1
          (2=|≡⍵):∇¨⍵
          ws←⎕UCS 9 10 11 12 13 32 133 160
          (1=⍴⍴⍵):⌽{(+/∧\⍵∊ws)↓⍵}⌽⍵
      }

      IsHtmlList←{
    ⍝ Returns a 1 in case ⍵ qualifies as an LI element of a list.
    ⍝ That is the case if one of the following conditions holds true:
          tx←⍵
          ⍺←99                          ⍝ Number of leading blanks allowed.
          ⍺ IsBulletedHtmlList tx:1
          ⍺ IsOrderedHtmlList tx
      }

      IsOrderedHtmlList←{
    ⍝ Returns a 1 in case ⍵ qualifies as an LI element of an ordered list.
    ⍝ ⍺ is the number of leading blanks allowed (for a starting list item this would be 3).
    ⍝ [1] Zero to many white spaces
    ⍝ [2] 1 to 9 digits ...
    ⍝ [3] ... but not more than 9 of them
    ⍝ [4] Either a `.` or a `)`
    ⍝ [5] One or more white spaces
    ⍝ Then it's an ordered list item
          tx←⍵
          0∊⍴'^\s*?\b\d{1,9}\b[.)]\s+?'⎕S 0⊣tx:0
          ⍺>3:1
          3≥+/∧\' '=tx
      }

      IsBulletedHtmlList←{
    ⍝ Returns a 1 in case ⍵ qualifies as an LI element of a bulleted list.
          tx←,⍵
          ~{(⊃dlb ⍵)∊'*+-'}tx:0
          pattern←'^\s{0,',(⍕⍺),'}[-+\*]\s'
          ~0∊⍴pattern ⎕S 0⊣tx
      }

    ∇ r←IdentifyListItems ns;max;buff;ind;b1;b2;b
    ⍝ Takes "ns" as right argument and figures out how many items belong to the current list.
    ⍝ Things are complicated by ...
    ⍝ * the fact that lazyness is allowed.
    ⍝ * lines might be glued together with a trailing `\` or divided by <<br>>.
    ⍝ * Laziness and indentation might be mixed together.
    ⍝ * Lists might be nested.
    ⍝ Note that a single blank line between items is okay; only more than one empty line breaks a list definition.
    ⍝ We know already where two blank lines occur (max).
      r←max←{0=+/⍵:⍴⍵ ⋄ ⍵⍳1}⍨1 1⍷ns.emptyLines      ⍝ Two empty lines stop a list dead in any case
      buff←max↑ns.markdown
      :If ~0∊⍴ind←(Where max↑ns.emptyLines)~max     ⍝ We are interested in the lines after any empty line
          b1←0=+/∧\' '=↑buff[ind+1]                 ⍝ If those are not indented they potentially break the list
          b2←~IsHtmlList¨buff[ind+1]                ⍝ Which ones are not list items as such at all?
          :If 0<+/b←b1∧b2
              r←⊃b/ind
          :EndIf
      :EndIf
    ∇

      IsGlued←{
    ⍝ Takes a vector of vectors and returns a 1 for those lines
    ⍝ that end either with \ of with <<br>>
          b←'\'=⊃¨¯1↑¨⍵
          0,¯1↓b∨'<<br>>'∘{⍺≡(-⍴⍺)↑⍵}¨⍵
      }

      IdentifyBulletedList←{
      ⍝ This uses ns.leadingChars, meaning that it ignores indentation
          ns←⍵
          max←⍺
          IdentifyList__ ns max'*'
      }

      IdentifyOrderedList←{
          ns←⍵
          max←⍺
          IdentifyList__ ns max'1'
      }


      IdentifyList__←{
          (ns max type)←⍵
          nl←0,¯1↓'\'=⊃¨¯1↑¨max↑ns.markdown                                 ⍝ nl flags all lines that...
          nl∨←0,¯1↓(~max↑ns.emptyLines)∧'  '∘≡¨¯2↑¨max↑ns.markdown          ⍝ ... belong to the predecessor...
          nl∨←0,¯1↓'<<br>>'{⍺∘≡¨(-⍴⍺)↑¨⍵}max↑ns.markdown                    ⍝ ... due to line breaks.
          markers←(1+'*'=type)⊃'0123456789 ' '+-* '                         ⍝ "markers" depends on list type.
          max←+/∧\nl∨(⊃¨max↑ns.leadingChars)∊markers                        ⍝
          '*'≡type:+/∧\{(' '=⍵)∨~⊃∘IsOrderedHtmlList¨⍵}⊃¨max↑ns.markdown    ⍝ No mistake: we check for the ...
          '1'≡type:+/∧\{(' '=⍵)∨~⊃∘IsBulletedHtmlList¨⍵}⊃¨max↑ns.leadingChars  ⍝ OTHER list type here!
          .                                                                 ⍝ Huuh?!
      }


    ∇ (r isHtmlBlock)←ns ProcessInlineMarkUp tx
      ⍝ Note: sequence matters! Think thrice before changing, and run test cases immediately if you do anyway.
      r←1 ProcessInlineMarkUp_ tx ns.parms
      (r isHtmlBlock)←ns ProcessFunctionCalls r
    ∇

    ∇ r←escapeFlag ProcessInlineMarkUp_(tx parms)
      ⍝ Note: sequence matters! Think thrice before changing, and run test cases immediately if you do anyway.
      r←tx
      r←Process_BR r
      r←ProcessAutomaticLinks r
      r←ProcessSpecialHTML_Chars⍣escapeFlag⊣r
      r←parms SmartStuff⍣(⊃parms.syntaxSugar)⊣r
      r←(,¨'<>')⎕R'\&lt;' '\&gt;'⊣r                 ⍝ Needed!
      r←ProcessImages r
      r←parms.bookmarkMayStartWithDigit ProcessLinks r
      r←ProcessDoubleAsterisks r
      r←ProcessAsterisks r
      r←ProcessDoubleUnderscores r
      r←1 ProcessUnderscores r
      r←ProcessDoubleTildes r
      r←MarkUpInlineCode r
      r←RemoveEscapeChars r
      r←InjectBR r
      r←InjectPointyBrackets r
      ⍝Done
    ∇

    ∇ txt←{mask}ProcessAsterisks txt_;noOf;bool;ind;start;end;txt2
    ⍝ Takes a string and marks up everything between * and * as <em>
    ⍝ except when it...
    ⍝ * occurs within a word
    ⍝ * occurs within APL code
    ⍝ * has a white-space char to the right of any opening marker
    ⍝ * has a white-space char to the left of any closing marker
    ⍝ Call this **after** having called ProcessDoubleAsterisks
      txt2←txt←'  ',txt_,'  '
      txt2←'\\\*'⎕R'⌹⌹'⍠('Mode' 'D')⊣txt2
      :If 0<+/bool←(⍳⍴txt)∊2+∊'\s\*[^*|\s]' '[^\s|*]\*[^*]'{⍺ ⎕S 0⍠('Mode' 'D')⊣⍵}¨⊂txt2
      :AndIf 0<+/bool←bool\'\'≠txt[¯1+Where bool]
          mask←GetMaskForCode txt
          bool∧←~mask
      :AndIf ~0∊⍴ind←Where bool
          start←((⍴ind)⍴1 0)/ind
          end←((⍴ind)⍴0 1)/ind
          txt[start]←⊂'<em>'
          txt[end]←⊂'</em>'
          txt←⊃,/txt
      :EndIf
      txt←2↓¯2↓txt
    ∇

    ∇ txt←{mask}ProcessDoubleAsterisks txt_;noOf;bool;ind;start;end
    ⍝ Takes a string and marks up everything between ** and ** as <strong>
    ⍝ except when it occurs within a word or within APL code.
    ⍝ Call this **before** calling ProcessAsterisks.
      txt←'  ',txt_,'  '
      :If 0<+/bool←(⍳⍴txt)∊2+'[^*]\*\*'⎕S 0⍠('Mode' 'D')⊣txt
      :AndIf 0<+/bool←bool∧bool\'*'≠txt[2+Where bool]
      :AndIf 0<+/bool←bool\'\'≠txt[¯1+Where bool]
          mask←GetMaskForCode txt
          bool∧←~mask
      :AndIf ~0∊⍴ind←Where bool
          start←((⍴ind)⍴1 0)/ind
          end←((⍴ind)⍴0 1)/ind
          txt[start]←⊂'<strong>'
          txt[end]←⊂'</strong>'
          txt[1+start,end]←⊂''
          txt←⊃,/txt
      :EndIf
      txt←2↓¯2↓txt
    ∇

    ∇ txt←{mask}ProcessDoubleUnderscores txt_;noOf;bool;ind;start;end
    ⍝ Takes a string and marks up everything between __ and __ as <strong>
    ⍝ except when it occurs within a word or within APL code or as part of a function call.
      txt←'  ',txt_,'  '
      :If 0<+/bool←(⍳⍴txt)∊2+'[^_]__[^_]'⎕S 0⊣txt
      :AndIf 0<+/bool←bool\'\'≠txt[¯1+Where bool]
          mask←GetMaskForCode txt
          bool∧←~mask
      :AndIf ~0∊⍴ind←Where bool
      :AndIf ~0∊⍴ind←((txt 2∘NotWithinWord¨ind))/ind
          start←((⍴ind)⍴1 0)/ind
          end←((⍴ind)⍴0 1)/ind
          txt[start]←⊂'<strong>'
          txt[end]←⊂'</strong>'
          txt[1+start,end]←⊂''
          txt←⊃,/txt
      :EndIf
      txt←2↓¯2↓txt
    ∇

    ∇ txt←{ignoreURLs}ProcessUnderscores txt_;noOf;bool;ind;start;end;txt2;b;buff
    ⍝ Takes a string and marks up everything between _ and _ as <strong>
    ⍝ except when it occurs ...
    ⍝ * within a word
    ⍝ * within APL code
    ⍝ * as part of a function call
    ⍝ * between &amp;pointybracket_open; and &amp;pointybracket_close;
    ⍝ * within the URL
      ignoreURLs←{0<⎕NC ⍵:⍎⍵ ⋄ 0}'ignoreURLs'
      txt2←txt←'  ',txt_,'  '
      txt2←'\\_'⎕R'⌹⌹'⍠('Mode' 'D')⊣txt2
      :If 0<+/bool←(⍳⍴txt)∊2+'\s_[^_\s]' '[^\s_]_[^_]'⎕S 0⍠('Mode' 'D')⊣txt2
      :AndIf 0<+/bool←bool\'\'≠txt[¯1+Where bool]
          bool∧←~GetMaskForCode txt
          :If ignoreURLs
          :AndIf ~0∊⍴buff←'<a .*>*.</a>'⎕S 0 1⍠('Greedy' 0)⊣(~bool){⍺\⍺/⍵}txt
              bool[{⊃,/{⍵[1]+⍳⍵[2]}¨⍵}buff]←0
          :EndIf
          bool∧←~MaskPointyBrackets txt
          bool∧←~MaskTagAttrs txt
          bool∧←~MaskFunctionCall txt
      :AndIf ~0∊⍴ind←Where bool
      :AndIf ~0∊⍴ind←((txt 1∘NotWithinWord¨ind))/ind
          start←((⍴ind)⍴1 0)/ind
          end←((⍴ind)⍴0 1)/ind
          txt[start]←⊂'<em>'
          txt[end]←⊂'</em>'
          txt←⊃,/txt
      :EndIf
      txt←2↓¯2↓txt
    ∇

    ∇ txt←ProcessDoubleTildes txt_;noOf;bool;ind;start;end;mask;bool1;bool2
    ⍝ Takes a string and marks up everything between ~~ and ~~ as <del>
    ⍝ except when it occurs within a word or within APL code.
    ⍝ "~~" might also appear as "~~~", and it might be escaped.
      txt←'  ',txt_,'  '
      :If 0<+/bool←'~~'⍷txt
          ind←Where bool
      :AndIf 0<+/bool1←bool∧bool\~txt[¯1+ind]∊'\~'
      :AndIf 0<+/bool2←bool∧bool\~txt[ind+⍴'~~']∊'~\'
      :AndIf 0<+/bool←bool1∧bool2
          mask←GetMaskForCode txt
          bool∧←~mask
      :AndIf ~0∊⍴ind←Where bool
      :AndIf ~0∊⍴ind←((txt 2∘NotWithinWord¨ind))/ind
          start←((⍴ind)⍴1 0)/ind
          end←((⍴ind)⍴0 1)/ind
          txt[start]←⊂'<del>'
          txt[end]←⊂'</del>'
          txt[1+start,end]←⊂''
          txt←⊃,/txt
      :EndIf
      txt←2↓¯2↓txt
    ∇

      ProcessImages←{
          txt←⍵
          mask←~GetMaskForCode txt
          0∊⍴i1←¯1+Where mask∧'!['⍷txt:txt
          i1←⊃i1
          '![CDATA['{⍺≡(⍴⍺)↑⍵}i1↓txt:txt        ⍝ Invalid <![CDATA[ section (probably missing empty lines)
          txt←i1⌽txt
          alt←2↓¯1↓{⍵↑⍨⍵⍳']'}txt
          txt←{⍵↓⍨⍵⍳']'}txt
          buff←1↓¯1↓txt↑⍨0⍳⍨(+\'('=txt)>+\')'=txt
          specialAttributes←GetSpecialAttributes{'{'≠⊃⍵:'' ⋄ {⍵↑⍨⍵⍳'}'}⍵}(2+⍴buff)↓txt
          txt←specialAttributes DropSpecialImageAttributes txt
          title←{dlb ¯1↓dtb{⍵↑⍨⍵⍳'"'}⍵↓⍨⍵⍳'"'}buff
          url←{dlb dtb ⍵↑⍨¯1+⌊/⍵⍳'"{'}buff
          ((url='\')/url)←'/'
          url←url ProcessImageUrl ns.parms.imageURL
          insert←'<img src="',url,'"'
          insert,←specialAttributes
          (('"'=alt)/alt)←''''
          (title alt)←title{0∊⍴⍺:⊂⍵ ⋄ 0∊⍴⍵:⊂⍺ ⋄ ⍺ ⍵}alt
          insert,←' alt="',alt,'"'
          insert,←(~0∊⍴title)/' title="',title,'"'
          insert,←'>'
          txt←(-i1)⌽insert,(2+⍴buff)↓txt
          ∇ txt
      }

      Process_BR←{
      ⍝ The extended syntax of MarkAPL allows `<<br>>` in the code which will be
      ⍝ converted to <br> in two stages: here we replace this by a ⎕UCS 13 (CR).
          txt←⍵
          '`<<br>>`' '<<br>>'⎕R'\0' '\r'⍠('IC' 1)⊣txt
      }

      ProcessAutomaticLinks←{
      ⍝ This must be done early because later any "<" and ">" will be replaced by there HTML entities.
      ⍝ (It was a very bad idea to use this syntax! [](url} is so obvious!)
      ⍝ Therefore we replace "<" and ">" by made-up HTML entities which we replace later by "<" & ">".
      ⍝ Note that this function escapes any of `_`, `__`, `*`, `**`, `~~`.
          txt←⍵
          mask←~GetMaskForCode txt
          0∊⍴i1←¯1+Where'<'=mask\mask/txt:txt
          txt←i1[1]⌽txt
          (⍴txt)<l←txt⍳'>':(-i1[1])⌽txt
          link←¯1↓1↓l↑txt
          sa←GetSpecialAttributes{'{'∊⍵:{⍵↑⍨⍵⍳'}'}{⍵↓⍨¯1+⍵⍳'{'}⍵ ⋄ ⍵}link
          link←{⍵/⍨~Between ⍵∊'{}'}link
          ∨/link∊AllWhiteSpaceChars:⍵                       ⍝ The link text must not contain any white space
          0={(∨/'://'⍷⍵)∨'@'∊⍵}link:⍵                       ⍝ We need to catch URLs and email addresses
          link,⍨←(0={(∨/'://'⍷⍵)∨'@'∊⍵}link)/'http://'
          link←'\_' '\*' '\~\~'⎕R'\\_' '\\*' '\\~\\~'⍠('Greedy' 0)⊣link
          pbo←'&pointybracket_open;'                        ⍝ Later converted ...
          pbc←'&pointybracket_close;'                       ⍝ ... back to < and >.
          class←' class="',((1+'mailto'{⍺≡(⍴⍺)↑⍵}link)⊃'external_link' 'mailto_link'),'"'
          linkText←sa DropSpecialAttributes'mailto:'{⍵↓⍨(⍴⍺)×⍺≡(⍴⍺)↑⍵}1↓¯1↓l↑txt
          linkText←'\_' '\*' '\~\~'⎕R'\\_' '\\*' '\\~\\~'⍠('Greedy' 0)⊣linkText
          txt←(pbo,'a href="',link,'"',class,sa,pbc,linkText,pbo,'/a',pbc),l↓txt
          txt←(-i1[1])⌽txt
          ∇ txt
      }

      ProcessLinks←{
          ⍺←1
          bookmarkMayStartWithDigit←⍺
          txt←⍵
          mask←~GetMaskForCode txt
          ⍬≡on←mask IsolateLink txt:txt
          txt←on⌽txt
          mask←on⌽mask
          closeBracket←(']('⍷(mask\mask/txt))⍳1
          mask←(closeBracket⍴1),{(+\⍵='(')-+\⍵=')'}closeBracket↓txt  ⍝ Careful: a caption might contain ")" when just ⍳')' would not suffice
          off←1++/∧\1=(∧\0=mask)∨mask>0
          linkDef←off↑txt
          linkDef←dmb ReplaceQTC_byBlank linkDef
          mask←~GetMaskForCode linkDef
          sa←GetSpecialAttributes⌽{'{'∊⍵:{⍵↑⍨⍵⍳'{'}{⍵↓⍨¯1+⍵⍳'}'}⍵ ⋄ ''}⌽mask/linkDef   ⍝ Because special attributes for a link follow straight after the link
          txt←off↓txt
          mask←⌽~GetMaskForCode linkDef
          linkDef←⌽mask{'{'∊⍺/⍵:')',(⍵↓⍨(⍺\⍺/⍵)⍳'{') ⋄ ⍵}⌽linkDef                ⍝ Drop the special attribute but leave any code alone
          (url title)←GetUrlAndTitleFromLink linkDef
          poundFlag←⊃'#'=1⍴url
          mask←~GetMaskForCode linkDef
          linkText←1↓dtb mask{⍵↑⍨¯1+1⍳⍨⍺\']('⍷⍺/⍵}linkDef
          url←linkText(bookmarkMayStartWithDigit∘CompileBookMarkName{(1<⍴⍵)∧'#'=1↑⍵:'#',⍺⍺ ⍵'' ⋄ (,'#')≡,⍵:'#',⍺⍺ ⍺'' ⋄ ⍵})url
          linkText{0∊⍴⍵:⍺ ⋄ ⍵}←(1+poundFlag)⊃linkText title
          linkText←ProcessInlineMarkupInLinkText linkText
          linkText{0∊⍴⍺~' ':⍵ ⋄ ⍺}←url
          tag←'a href="',url,'"'
          tag,←(~poundFlag)/' class="',((1+'mailto'{⍺≡(⍴⍺)↑⍵}url)⊃'external_link' 'mailto_link'),'"'
          tag,←AddBookmarkClassName⍣poundFlag⊣sa
          tag,←((~poundFlag)∧~0∊⍴title)/' title="',title,'"'
          insert←tag Tag linkText
          txt←(-on)⌽insert,txt
          ∇ txt
      }

      ProcessInlineMarkupInLinkText←{
          r←ProcessDoubleAsterisks ⍵
          r←ProcessAsterisks r
          r←ProcessDoubleUnderscores r
          r←0 ProcessUnderscores r
          r←ProcessDoubleTildes r
          ns.parms SmartStuff⍣(⊃ns.parms.syntaxSugar)⊣r
      }

      AddBookmarkClassName←{
          sa←⍵  ⍝ Special attributes - they MAY contain a user-defined class name
          0=+/'class="'⍷sa:sa,' class="bookmark_link"'
          'class="'⎕R'&bookmark_link '⊣sa
      }

    ∇ r←GetMaskForCode txt;noOf
    ⍝ Returns a mask (vector of Booleans with zeros for all APL code in ⍵.
    ⍝ Does not fall over odd number of ticks.
      :If 0<+/r←'`'=' ',txt
          r[Where r]←'\'≠txt[¯1+Where r]
      :AndIf 0<+/r
          :If 0<noOf←+/r
          :AndIf {⍵≠⌊⍵}noOf÷2
              (¯1↑r)←1
          :EndIf
          r←1↓r∨≠\r
      :Else
          r←(⍴txt)⍴0
      :EndIf
    ∇

      GetMaskForCodeTags←{
    ⍝ Returns a mask for everything between <code*> and </code>.
    ⍝ We can savely assume valid HTML5 here.
          txt←⍵
          r←(⍴txt)⍴0=1
          0=+/b←'</code>'⍷txt:r         ⍝ No closing tag? Done!
          r[(¯1+⍴'</code>')+Where b]←1
          ind←Where'<code'⍷txt
          ind←(txt[ind+⍴'<code']∊'> ')/ind
          r[ind]←1
          Between r
      }

      SplitTableRowButMaskCode←{
      ⍝  'First' 'Second' ←→ SplitTableRowButMaskCode 'First',(⎕UCS 13 10),'Second'
      ⍝ (,¨'1' '2' '3') ←→ '.' SplitTableRowButMaskCode '1.2.3'
      ⍝ But:
      ⍝ 'Code' '`{{⍵/⍨2=+⌿0=⍵∘.|⍵}⍳⍵}`' '' ←→ '|' SplitTableRowButMaskCode '|Code | `{{⍵/⍨2=+⌿0=⍵∘.|⍵}⍳⍵}` |
          ⎕ML←⎕IO←1
          txt←dlb dtb ⍵
          txt←(('|'≠⊃txt)/'|'),txt
          txt,←{'|'/⍨('|'≠1↑1↓⍵)∧'\|'≢⊃⍵}¯2⌽txt
          txt←{⍵,'`|'}⍣(1=2|+/txt='`')⊣txt           ⍝ Add trailing tick and pipe in case of odd number of ticks
          mask←~GetMaskForCode txt
          bool←mask\'|'=mask/txt
          bool[1~⍨Where bool]←'\'≠txt[¯1+1~⍨Where bool]
          r←1↓¨¯1↓bool⊂txt
          {0=+/b←'\|'⍷w←⍵:w ⋄ (~b)/w}¨r
      }

      NotWithinWord←{
    ⍝ ⍵ is a vector of hits for, say, `_`
    ⍝ ⍺ is a two-element vector:
    ⍝   [1] Something like a paragraph
    ⍝   [2] Length of markup (_, *, **, __, ~~, ...); 1∨2
    ⍝ Does not recoginze compound names, but they should be between `` anyway!
          (txt length)←⍺
          hit←⍵
          boundaries1←(⊂hit+¯1,length)⌷txt      ⍝ What's to the left and right of the hit
          boundaries2←(⊂hit+¯2,length+1)⌷txt    ⍝ What's to the left and right of boundary1 (for recognizing compound names)
          1 1≢boundaries1∊PartOfNames
      }

    ∇ name←{ns}GetBookMarkNameFromCaption(txt specialAttrs)
    ⍝ Remove all formatting, links, etc.
    ⍝ Remove everything between <>, () and [].
    ⍝ Remove all punctuation except underscores, hyphens, and periods.
    ⍝ Remove all HTML &{word}: entities
    ⍝ Remove all code.
    ⍝ Remove HTML.
    ⍝ Remove leading and trailing spaces.
    ⍝ Replace all remaining spaces with hyphens.
    ⍝ Convert all alphabetic characters to lowercase.
    ⍝ Remove everything up to the first letter or `∆⍙`.
    ⍝ If nothing is left after this, use `section` as identifier.
      ns←{
          0<⎕NC ⍵:⍎⍵
          r←⎕NS''
          r.headerLineNos←⍬
          r.headers←0 3⍴''
          r.lineNumbers←0
          r.report←''
          r.parms←⎕NS''
          r.parms.bookmarkMayStartWithDigit←1
          r.parms.lineNumberOffset←0
          r
      }'ns'
      :If 0={0=⍵.⎕NC'parms.bookmarkLink':1 ⋄ ⍵.parms.bookmarkLink}ns
          name←''
      :Else
          name←ns.parms.bookmarkMayStartWithDigit CompileBookMarkName txt specialAttrs
          :If 0∊⍴name                              ⍝ Nothing left?
              name←'section'                       ⍝ Go for the name section
              ns.report,←⊂'Warning: header on line ',(⍕ns.parms.lineNumberOffset+⊃ns.lineNumbers),': no bookmark name left; name assigned'
          :EndIf
          :If (⊂name)∊ns.headers[;2]               ⍝ Does this bookmark already exist?
              name←1{n←⍵,'-',⍕⍺ ⋄ ~(⊂n)∊ns.headers[;2]:n ⋄ (1+⍺)∇ ⍵}name  ⍝ Append a number
              ns.report,←⊂'Warning: header on line ',(⍕ns.parms.lineNumberOffset+⊃ns.lineNumbers),': ambiguous name; number added'
          :EndIf
      :EndIf
    ∇

    ∇ ns←InjectTOC ns;param;levels;b;h;ns2;html;r;tocHtml;drop;parms;links;noOf;buff;toc
    ⍝ Inject a TOC in case the user has specified this
      :If 1=⍴,ns.parms.toc
          levels←⍳ns.parms.toc
      :Else
          levels←ns.parms.toc
      :EndIf
      :If ~0∊⍴toc←↑((⊃¨ns.toc)∊levels)/ns.toc
          drop←⌊/toc[;1]
          :If (,0)≢,ns.parms.numberHeaders
              toc,←toc{⍵[;4]⌿⍨⍵[;2]∊⍺[;3]}ns.headers
              links←ns.parms.bookmarkMayStartWithDigit{⍺ CompileBookMarkName ⍵''}¨toc[;3]
              tocHtml←ns CreateTOC toc[;1 2 4],links
          :Else
              links←{(3⊃⍵)≡GetBookMarkNameFromCaption(2⊃⍵)'':3⊃⍵ ⋄ 3⊃⍵}¨↓toc
              tocHtml←ns CreateTOC(toc[;1 2],(⊂'')),links
          :EndIf
          :If '<a' '<h'≡2↑¨2↑ns.html                        ⍝ First two lines define a header?!
              noOf←1⍳⍨'</a>'{⍺∘≡¨(⍴⍺)↑¨⍵}ns.html
              ns.html←(noOf↑ns.html),tocHtml,noOf↓ns.html   ⍝ Insert after the first header
          :Else
              ns.html←tocHtml,ns.html                       ⍝ Put TOC before anything else
          :EndIf
      :EndIf
    ∇

    ∇ ns←ScanMarkdown ns;∆LastLineWasEmpty;isHtmlBlock;html
      ∆LastLineWasEmpty←0
      ns.topOfDocument←1
      :Repeat
          :If ~0∊⍴'^⍎⍎[#_A-Za-z∆⍙].*⍎⍎$'⎕S 0⍠('Greedy' 0)⊣⊃ns.markdown ⍝  Does the line call an embedded function but nothing else?
          :AndIf 3=⎕NC{⍵↑⍨¯1+⍵⍳'⍎'}2↓⊃ns.markdown
              (html isHtmlBlock)←ns ProcessFunctionCalls⊃ns.markdown
          :AndIf ~0∊⍴html
              :If 0=isHtmlBlock
                  html←'<p>'∘,¨(Nest html),¨⊂'</p>'
              :EndIf
              ns.html,←Nest html
              ns←Drop ns
          :Else
              :If ProcessEmeddedHTML ns
                  :If ⊃ns.emptyLines
                  ⍝ ns.noOf←+/∧\ns.emptyLines  ⍝ No! Don't do this: it breaks the logic
                      ns←Drop ns
                      ∆LastLineWasEmpty←1
                  :Else
                      :If 0=ProcessSubTOC ns
                      :AndIf 0=ProcessFootnoteDefs ns
                      :AndIf 0=ProcessAbbreviationDefs ns
                      :AndIf 0=ProcessDataDefs ns
                      :AndIf 0=ProcessReferenceLinks ns
                      :AndIf 0=ProcessCodeBlock ns
                      :AndIf 0=ProcessHeaders ns
                      :AndIf 0=RemoveLampLines ns
                      :AndIf 0=ProcessBlockQuotes ns
                      :AndIf 0=ProcessTable ns
                      :AndIf 0=ProcessHorizontalRulers ns
                      :AndIf 0=ProcessLists ns
                      :AndIf 0=ProcessDefinitionLists ns
                          ∆LastLineWasEmpty ProcessParagraph ns      ⍝ This must be the last one!
                          ∆LastLineWasEmpty←0
                      :EndIf
                  :EndIf
              :Else
                  :If ⊃ns.emptyLines
                  :AndIf '<'≠⊃⊃1↑1↓ns.leadingChars
                      ns.noOf←1
                      ns←Drop ns
                  :EndIf
              :EndIf
          :EndIf
          ns.topOfDocument←0
      :Until 0∊⍴ns.leadingChars
      :If ~0∊⍴ns.html
          ns.html←{'&#96;'⎕R'`'⊣⍵}⊣,¨ns.html
      :EndIf
    ∇

      IotaSetextHeader←{
      ⍝ Returns indices as a vector of Booleans for all lines in ns.markdown that in itself would qualify as a SeText header.
      ⍝ "In itself" means that it does not check whether what is above it is a para; that need to be checked independently.
          type←⍺
          (withoutBlanks markdown emptyLines)←⍵
          0=+/b←(~emptyLines)∧withoutBlanks∧.=¨type:1+⍴markdown
          Where b\{4>+/∧\' '=⍵}¨b/markdown          ⍝ Max 3 leading blanks
      }

      CompilePara←{
          para←⍵
          para←('⍝'≠⊃¨para)/para  ⍝ Get rid of lines that start with a lamp symbol.
          para←{'\'≠¯1↑⍵:⍵ ⋄ (¯1↓⍵),⎕UCS 13}¨para
          dmb(1↓⊃,/' ',¨para)
      }

      IsTableRow←{
      ⍝ ⍵ qualifies as a table row if it contains at least 2 un-escaped pipes (`|`).
          row←,⍵
          mask←~GetMaskForCode row
          0=+/b←'|'=mask/row:0
          ∨/'\'≠(' ',row)[Where b]
      }

      IsFenceStart←{
      ⍝ The start of a code block fence may have an info string after the fence as such.
          md←⍵
          3<noOfBlanks←+/∧\' '=md:0             ⍝ Max three blanks
          md←noOfBlanks↓md
          fence←⊃md
          ~fence∊'`~':0
          3>noOfFencingChars←+/∧\md=fence:0     ⍝ At least three fencing characters
          0∊⍴md←noOfFencingChars↓md:1
          ~fence∊md                             ⍝ Any info string must not contain the fence character
      }

      FindFenceEnd←{
      ⍝ The end of a fence must have at last three ⍺ characters and may have leading and trailing blanks as well
      ⍝ but nothing else, in particular no special attributes.
      ⍝ ⍵ is a vector of Markdown vectors.
          pattern←⍺
          ~0∊⍴noOf←1+(pattern,'\s{0,}$')⎕S 2⍠('Mode' 'L')⊣⍵:1+⊃noOf
          1+⍴⍵            ⍝ To the end of the document!
      }

      GetInfoString←{
          ⍺←3
          indendation←⍺
          md←⍵
          fence←⊃md~' '
          0∊⍴md←(+/∧\md=fence)↓md:''
          0∊⍴md←(¯1+md⍳'{')↑md:''               ⍝ Remove special attributes (if any)
          pattern←'^\s{0,',(⍕indendation),'}',fence,'{3,}'
          0∊⍴infoString←dlb dtb pattern ⎕R''⊣md:''
          (~fence∊infoString)/infoString        ⍝ Any info string must not contain a fencing character
      }

      IsStyleBlockStart←{
          start←⍵
          '<style'{⍺≢(⍴⍺)↑⍵}start:0
          later←(⍴'<style')↓start
          '>'=⊃later:1
          0=⍴later:1
      }

      DetectOpeningTag←{
    ⍝ When this is called we know that the first char of the current line is a `<` character.
    ⍝ ⍺ is something like "<style" (Yes, without the closing >!)
    ⍝ We now need to find out whether it is really an HTML tag.
          md←⍵                                  ⍝ Nested vector with all the Markdown
          tag←⍺
          ~0∊⍴tag ⎕S 0⍠('IC' 1)⊣⊃md
      }

      DetectClosingTag←{
      ⍝ Find the tag
          (md tag)←⍵
          (∨/¨tag∘⍷¨md)⍳1
      }

      DetectClosingTagBeforeEmptyLine←{
      ⍝ Find the tag followed by a blank line
          (md tag)←⍵
          b←(∨/¨tag∘⍷¨md)∧((1↓0=⊃¨⍴¨md)),0
          0=+/b:0
          b⍳1
      }


      DropTailAfterClosingTag←{
          html←⍵
          tag←⍺
          buff←(⍴html)⊃html
          buff←((¯1+⍴tag)+1⍳⍨tag⍷Lowercase buff)↑buff
          ((⍴html)⊃html)←buff
          html
      }

      RemoveHTML←{
      ⍝ 'This contains a tag'←∇ 'This contains a <span>tag'</span>
          txt←⍵
          '<>'{⍵/⍨~Between ⍵∊⍺}txt
      }

      ProcessSpecialHTML_Chars←{
          tx←⍵
          0=+/tx∊'&<>':tx
          EscapeSpecialChars tx
      }

    ∇ r←RemoveEscapeChars tx;mask;b;specialChars;ind;b2
    ⍝ Remove the "\" (Escape character) from ⍵ except when ...
    ⍝ * there are two of them in a row (one survives)
    ⍝ * they are part of code (survives untouched)
    ⍝ * it appears with an attribute definition like <div attr="\3">
    ⍝ * any character to the right of the `\` is not one of `_*|<~{}(&`
    ⍝ This does not work on, say, "\\\\\\\\\\\\\\\; that why this is no legal.
      mask←~GetMaskForCodeTags tx
      mask←mask\{~Between ⍵∊'<>'}mask/tx
      b←'\'=(mask/tx),' '
    ⍝ We try to be smart: only those are to be escaped anyway, so nothing else is touched
      specialChars←'_*|<~`{}(&\'
      b∧←b\((mask/tx),' ')[1+Where b]∊specialChars
      b←¯1↓b∧b\'\'≠((mask/tx),' ')[1+Where b]
      r←((~mask)∨mask\~b)/tx
      mask←~GetMaskForCodeTags r
      b←~mask\'\\'⍷mask/r
      r←b/r
    ∇

    ∇ ns←HandleAbbreviations ns;html;abbr;comment;match2;match1;tag1;tag2;b;ignore
      :If ~0∊⍴ns.abbreviations
          html←ns.html
          :For abbr comment :In ↓ns.abbreviations
              :If ns.parms.syntaxSugar
                  comment←EscapeSpecialChars comment
                  comment←ns.parms SmartStuff comment
                  comment←'&'⎕R'\\&'⊣comment         ⍝ & is a reserved character (Dyalog, not PCRE!)
              :EndIf
              tag1←'<abbr title="',comment,'">\&ldquo;',abbr,'\&rdquo;</abbr>'
              tag2←'<abbr title="',comment,'">',abbr,'</abbr>'
              match2←{0=+/b←'&'=w←⍵:w ⋄ (b/w)←⊂'&amp;' ⋄ ⊃,/w}abbr
              match1←'"',match2,'"'
              match2←'\b',match2,'\b'
              ignore←'<img.*>' '<a .*>.*</a>' '<code>.*</code>' '<code .*>.*</code>'
              ignore,←⊂'<abbr .*>.*</abbr>'          ⍝ Abbreviations themselves should be left alone
              ignore,←⊂'<dt>.*</dt>'                 ⍝ The keyword of a definition should not become an <abbr> tag.
              ignore,←⊂'<dt .*>.*</dt>'              ⍝ Same in case of special attributes
              html←(ignore,match1 match2)⎕R((,¨(⍴ignore)⍴'&'),tag1 tag2)⍠('Mode' 'D')('DotAll' 1)('Greedy' 0)⊣html
          :EndFor
          ns.html←html
      :EndIf
    ∇

      InjectFootNotes←{
          ns←⍵
          0∊⍴hits←GatherFootNoteReferences ns:ns
          ns←ReplaceFootnoteReferences ns hits
          AppendFootnoteDefinitions ns
      }

    ∇ ns←ReplaceLinkIDs ns;mask;linkRefs
    ⍝ Replace the [{any link text}][link id] references in the HTML against the real thing: <a href="...
      :If ~0∊⍴ns.linkRefs
      :AndIf 0<+/mask←∨/¨~GetMaskForCodeTags¨ns.html
      :AndIf ~0∊⍴∊linkRefs←GetAllLinkRefs mask/ns.html
          ns ReplaceLinkID¨linkRefs
      :EndIf
    ∇

      ReportLinks←{
      ⍝ Injects a list with all external references together with a remark.
      ⍝ The resulting table is assigned the class "print_only" for obvious reasons.
          ns←⍵
          1≠ns.parms.reportLinks:ns
          html←FlattenHTML ns.html
          hits←'<a[^>]+class="external_link".*</a>'⎕S 0 1⍠('Greedy' 0)('Mode' 'D')⊣html
          0∊⍴hits:ns
          anchors←(-⍴'</a>')↓¨hits{⍺[2]↑⍺[1]⌽⍵}¨⊂html
          urls←'href="'∘{{⍵↑⍨¯1+⍵⍳'"'}⍵↓⍨(¯1+⍴⍺)+1⍳⍨⍺⍷⍵}¨anchors
          b←(urls⍳urls)=⍳⍴urls  ⍝ For dropping doubles
          (anchors urls)←b∘/¨anchors urls
          linkTexts←{⍵↓⍨⍵⍳'>'}¨anchors
          linkTexts←(,¨'<>')⎕R'\&amp;pointybracket_open;' '\&amp;pointybracket_close;'⊣linkTexts
          linkTexts←ns.parms{0 ProcessInlineMarkUp_ ⍵ ⍺}¨linkTexts
          md←CreateMarkdownFromUrlAndLinkText urls linkTexts
          md←'' '---' ''('**',ns.parms.reportLinksCaption,'**')'',md,''
          ns2←Init''md
          ns2←Process ns2
          html2←InjectLinkTextIntoReportLink ns2.html linkTexts
          ns.html,←(⊂'<div id="external_link_report" class="print_only">'),html2,(⊂'</div>')
          ns
      }

    ∇ md←CreateMarkdownFromUrlAndLinkText(urls linkTexts);url;linkText;i;buff
      md←''
      i←0
      :For url linkText :InEach urls linkTexts
          i+←1
          buff←'* <',url,'>'
          :If url≢linkText
              buff,←':<<br>>','{{{{{',(⍕i),'}}}}}'
          :EndIf
          md,←⊂buff
      :EndFor
    ∇

    ∇ html←InjectLinkTextIntoReportLink(html linkTexts);i;pattern;replaceBy;b1;b2;b3
      :For i :In ⍳⍴linkTexts
          pattern←'\{\{\{\{\{',(⍕i),'}}}}}'
          replaceBy←i⊃linkTexts
          b1←replaceBy='\'
          b2←replaceBy='%'
          b3←replaceBy='&'
          (b1/replaceBy)←⊂'\\'
          (b2/replaceBy)←⊂'\&'
          (b3/replaceBy)←⊂'\&'
          replaceBy←⊃,/replaceBy
          html←pattern ⎕R replaceBy⍠('Greedy' 0)⊣html
      :EndFor
    ∇

    ∇ hits←GatherFootNoteReferences ns;i;id;footnote;mask;bool;row;ind
    ⍝ Finds all the references to footnotes in the HTML
    ⍝ `hits` is a matrix with 4 columns:
    ⍝ [;1] Number
    ⍝ [;2] Original name
    ⍝ [;3] Row in ns.html where a hit was found
    ⍝ [;4] Index of the hit in that row.
      hits←0 4⍴⍬
      :For i id footnote :In ↓(⍳⊃⍴ns.footnoteDefs),ns.footnoteDefs
          mask←{~Between⊃∨/'<code>' '</code>'⍷¨⊂⍵}¨ns.html
          :If 0<+/∊bool←('[^',id,']')∘⍷¨mask/¨ns.html
              :For row :In Where∨/¨bool
                  ind←1⍳⍨('[^',id,']')⍷row⊃ns.html                                      ⍝ Only the first one is taken into account
                  :If ~0∊⍴ind←(~ind∊Where GetMaskForCodeTags row⊃ns.html)/ind  ⍝ Remove those between <code tags
                      hits⍪←i,(⊂id),row,ind
                  :EndIf
              :EndFor
          :EndIf
      :EndFor
      hits←{⍵[⍒⍵[;3];]}{⍵[⍒⍵[;4];]}hits   ⍝ It's essential to turn them around!
    ∇

    ∇ ns←ReplaceFootnoteReferences(ns hits);i;ind;row;id;newID
    ⍝ Replaces the original footnote references (which have arbitrary names)
    ⍝ against ones which are strictly numbered from 1 to whatever.
      :For i :In ⍳⊃⍴hits
          (id row ind)←hits[i;1 3 4]
          newID←'<a href="#fnref',(⍕id),'" class="footnote_link"><sup>',(⍕id),'</sup></a>]'
          (row⊃ns.html)←(-ind)⌽newID,{⍵↓⍨⍵⍳']'}ind⌽row⊃ns.html
      :EndFor
    ∇

    ∇ ns←AppendFootnoteDefinitions ns;i;footnote;html
      html←''
      html,←⊂'<div id="footnotes_div">'
      html,←⊂'<hr>'
      html,←⊂'<p><strong>',ns.parms.footnotesCaption,'</strong></p>'
      html,←⊂'<ol>'
      :For i footnote :InEach {(⍳⍴⍵)⍵}ns.footnoteDefs[;2]
          footnote←': '⎕R':<br>'⊣footnote
          html,←⊂'<li id="fnref',(⍕i),'">',(⊃,/Tag¨footnote),'<a href="#fnref',(⍕i),'" class="footnote_anchor"></a>'
      :EndFor
      html,←'</ol>' '</div>'
      ns.html,←html
    ∇

      InjectBR←{
    ⍝ In the original Markdown spec two blanks at the end of a line translate into a <br>
    ⍝ which is bad because the two blanks are invisible to the user. However, we still support this.
    ⍝ Earlier on those two blank have been translated into a `⎕UCS 13` (CR), and now its time to
    ⍝ replace every CR against a "<br>" tag:
          tx←⍵
          0=+/b←tx=⎕UCS 13:tx
          '\r'⎕R' <br>'⍠'Mode' 'D'⊣tx
      }

      HandleEscapedNewLines←{
          items←⍵
          0=+/b←'\'=⊃¨¯1↑¨items:items
          ind←Where b
          items[ind]←{(¯1↓⍵),⎕UCS 13}¨items[ind]
          items
      }

      SmartStuff←{
          parms←⍺
          buff←SmartTypography ⍵
          parms.lang SmartQuotes buff
      }

      SmartTypography←{
    ⍝ Does all the smart stuff except double + single quote handling; see `SmartQuotes` for that.
    ⍝ This function does not check ns.syntaxSugar: that's up to the caller.
          html←⍵
          cb←'(^ {0,3}[~`]{3,}).*\1'                                ⍝ Code blocks (anything between `~~~` and three back ticks.
          bbt←'`[^`].*?`'       ⍝ Between back-ticks (= code)
          html←cb bbt'---'⎕R'\0' '\0' '—'⍠('Mode' 'D')('DotAll' 1)⊣html     ⍝ em dash
          html←cb bbt'--'⎕R'\0' '\0' '–'⍠('Mode' 'D')('DotAll' 1)⊣html      ⍝ en dash
          html←cb bbt'\.\.\.'⎕R'\0' '\0' '…'⍠('Mode' 'D')('DotAll' 1)⊣html  ⍝ Ellipses
          html←cb bbt'<<'⎕R'\0' '\0' '«'⍠('Mode' 'D')('DotAll' 1)⊣html      ⍝ Chevron
          html←cb bbt'>>'⎕R'\0' '\0' '»'⍠('Mode' 'D')('DotAll' 1)⊣html      ⍝ Chevron
          html←cb bbt'\B\(c\)\B' '\B\(tm\)\B' '\B\(C\)\B' '\B\(TM\)\B'⎕R'\0' '\0' '©' '™' '©' '™'⊣html  ⍝ Copyright and Trademark
          html←cb bbt'\B\&lt;==&gt;\B'⎕R'\0' '\0' '↔'⊣html                  ⍝ Left-and-right arrow
          html←cb bbt'\B\&lt;==\B'⎕R'\0' '\0' '←'⊣html                      ⍝ Left arrow
          html←cb bbt'\B\==&gt;\B'⎕R'\0' '\0' '→'⊣html                      ⍝ Right arrow
          html
      }

      SmartQuotes←{
    ⍝ Exchange pairs of double quotes ←→ “„ but in DE, AT and CH ←→ „“.
    ⍝ See also SmartTypography for similar stuff.
    ⍝ This function does not check ns.syntaxSugar: that's up to the caller.
          ⍺←'en'                            ⍝ Default language is English.
          lang←⍺
          html←⍵
          bbt←'`[^`].*?`'                   ⍝ Between back-ticks (= code)
          cdq←'"".+?""'                     ⍝ Catch what is enclosed between two pairs (that is four of them!) of double quotes
          cim←'!\[[^\)].*?\){.*?}'          ⍝ Catch image with special attributes
          cl1←'\[\]\([^)]*.?\)'             ⍝ Catch simple link
          cl2←'\[[^]]*.?\]\([^)]*.?\)'      ⍝ Catch simple link
          ced←'\\"'                         ⍝ Catch escaped double quote
          cpb←'&amp;pointybracket_open([^&]*.?)&amp;pointybracket_close' ⍝ Catch pointy brackets
          me←'\0'
          quotes1←'"(.*?)"'
          quotes2←(1+(⊂lang)∊'de' 'at' 'ch')⊃'“\1”' '„\1“'
          cpb cl1 cl2 cim bbt cdq ced quotes1 ⎕R((6⍴⊂me),'"'quotes2)⍠('Mode' 'D')('DotAll' 1)⊣html
      }

      NumberHeaders←{
          ns←⍵
          (,0)≡,ns.parms.numberHeaders:ns
          ns←CalculateHeaderNumbers ns
          InjectNumberedHeaders ns
      }

      SetTitle←{
          ns←⍵
          ¯1≢ns.parms.title:ns
          1≠ns.headers[;1]+.=1:ns⊣ns.parms.title←'MarkAPL'
          ns.parms.title←{⊃⍵[⍵[;1]⍳1;3]}ns.headers
          ns
      }

      Create_NS←{
          ns←⎕NS''
          ns.markdown←''
          ns.emptyLines←⍬
          ns.leadingChars←''
          ns.lineNumbers←⍬                              ⍝ Useful for reporting problems
          ns.report←''                                  ⍝ That's how MarkAPL tells about potential problem.
          ns.withoutBlanks←⍬
          ns.footnoteDefs←0 2⍴''
          ns.headerLineNos←⍬
          ns.headers←0 3⍴''                             ⍝ Level, bookmark, caption
          ns.html←''                                    ⍝ Our result
          ns.embeddedParms←0 2⍴''
          ns.abbreviations←0 2⍴''
          ns.linkRefs←⍬
          ns.data←⍬
          ns.(subToc toc)←⊂''
          _←'parms'ns.⎕NS''
          ns.parms.syntaxSugar←1
          ns.parms.lang←'en'
          ns
      }

    ∇ {ns}←InjectNumberedHeaders ns;html;no;header;new;level;searchFor;ind;length;levelsToBeNumbered
      :If ~0∊⍴ns.headers  ⍝ Are their any headers at all?
          levelsToBeNumbered←{1≠⍴,⍵:⍵ ⋄ ⍳⍵}ns.parms.numberHeaders
      :AndIf ∨/levelsToBeNumbered∊ns.headers[;1] ⍝ Right levels?!
          html←FlattenHTML ns.html
          :For level header no :In ↓ns.headers[;1 3 4]
              :If level∊levelsToBeNumbered
                  searchFor←'>',header,'</h',(⍕level),'>'
                  ind←1⍳⍨searchFor⍷html
                  length←{¯1+⍵⍳'<'}{m←~GetMaskForCodeTags ⍵ ⋄ m\m/⍵}ind↓html
                  new←no,' ',header
                  html←(-ind)⌽new,length↓ind⌽html
              :EndIf
          :EndFor
          ns.html←(⎕UCS 13)Split html
      :EndIf
    ∇

    ∇ ns←CalculateHeaderNumbers ns;nos;current;level;lastLevel;i;bool;headers
      current←6⍴0
      bool←ns.headers[;1]∊{1=⍴,⍵:⍳⍵ ⋄ ⍵}ns.parms.numberHeaders
      :If ~0∊⍴headers←bool⌿ns.headers
          headers[;1]-←(⊃headers)-1
          nos←(⊃⍴headers)⍴0
          lastLevel←1
          :For i :In ⍳⊃⍴headers
              level←headers[i;1]
              :If lastLevel>level
                  (level↓current)←0
              :EndIf
              current[level]+←1
              nos[i]←⊂level↑current
              lastLevel←level
          :EndFor
          ns.headers,←⊂''
          (bool⌿ns.headers)[;4]←{⊃,/(⍕¨⍵),¨'.'}¨nos
      :EndIf
    ∇

      GetSpecialAttributes←{
      ⍝ Checks whether ⍵ (a single line of Markdown) carries a "special attributes" definition.
      ⍝ If so it returns a vector of definitions.
      ⍝ Example:
      ⍝ 'id="foo" class="cl1 cl2" attr1="A B C" attr2=123' ←→ ∇ '{#foo .cl1 .cl2 attr1="A B C" attr2=123}'
      ⍝  'style="color=red;font-family='APL385 Unicode'"' ←→ ∇ 'style="color:red;font-family:'APL385 Unicode'"
          md←dtb ⍵
          ('!['≡2⍴md)∧0=+/'<<br>>'⍷md:''  ⍝ Might be a stand-alone image!
          '}'≠¯1↑md:''
          '\'=1↑¯2↑md:'' ⍝ Escaped?
          ~'{'∊md:''
          0∊⍴def←dmb{¯1↓1↓⌽⍵↑⍨⍵⍳'{'}⌽md:''
          mask←~Between'"'=def
          defs←1↓¨(1,mask\' '=mask/def)⊂' ',def
          0∊'='∊¨{⍵/⍨~(⊃¨⍵)∊'.#'}defs:''
          0∨.≠2|'"'+.=¨defs:''
          sp←⎕NS''          ⍝ Result space
          sp.r←''           ⍝ Collects the result(s)
          b←'.'=⊃¨defs      ⍝ All class definitions (if any)
          sp{0∊⍴⍵:⍺ ⋄ ⍺ CompileClassNames ⍵}←b/defs
          b←'#'=⊃¨defs      ⍝ An id definitions (if any)
          1<+/b:'Invalid special attribute: more than one "id"'⎕SIGNAL 11
          sp{0∊⍴⍵:⍺ ⋄ ⍺ CompileID_Names ⍵}←(b⍳1)⊃defs,⊂''
          b←~(⊃¨defs)∊'#.'  ⍝ Any attribute defs
          sp{0∊⍴⍵:⍺ ⋄ ⍺ CompileAttributes ⍵}←b/defs
          sp.r/⍨←~''''''⍷sp.r  ⍝ APLers might specify double-quotes, so we remove them.
          {⍵/⍨~'  '⍷⍵}sp.r
      }

      CompileClassNames←{
          sp←⍺
          sp.r,←' class="',(⊃{⍺,' ',⍵}/1↓¨⍵),'"'
          sp
      }

      CompileID_Names←{
          sp←⍺
          sp.r,←' id="',(1↓⍵),'"'
          sp
      }

      CompileAttributes←{
          sp←⍺
          attrs←dmb ⍵
          attrs←CompileAttribute¨attrs
          1=⍴attrs:sp⊣sp.r,←' ',⊃attrs
          sp.r,←⊃{⍺,' ',⍵}/attrs
          sp
      }

      CompileAttribute←{
          attr←⍵
          0≠2|'"'+.=attr:'Special attributes: invalid nunmber of "'⎕SIGNAL 11
          mask←Between'"'=attr
          0<+/mask:' ',attr
          ⊃{⍺,'="',⍵,'"'}/'='Split attr
      }

      CompileBookMarkName←{
    ⍝ Returns the bookmark name
          ⍺←1
          bookmarkMayStartWithDigit←⍺
          (txt specialAttrs)←⍵
          txt←BringBackSpecialHtmlEntities txt
          r←GetIdFromSpecialAttributes specialAttrs
          ~0∊⍴r:{{⍵↑⍨¯1+⍵⍳'"'}⍵↓⍨⍵⍳'"'}r
          r←txt
          r←'&[A-Za-z]*;'⎕R''⊢r                 ⍝ Remove HTML entities (&{word}; only)
          r←'<.+?>'⎕R''⊣r                       ⍝ Remove everything between <>
          r←RemoveHTML r
          r←'\[.*\]'⎕R''⊣r                      ⍝ Remove everything between []
          r←'\(.*\)'⎕R''⊣r                      ⍝ Remove everything between ()
          allowed←' ∆⍙_-',⎕D,⎕A,Lowercase ⎕A
          r←(r∊allowed)/r                       ⍝ Remove invalid characters
          r←allowed{⍵↓⍨+/∧\~⍵∊⍺~⎕D}⍣(~bookmarkMayStartWithDigit)⊣r ⍝ Remove all leading digits if ~bookmarkMayStartWithDigit
          r←dlb dtb r                           ⍝ Remove leading and trailing blanks
          r←{0∊⍴⍵:⍵ ⋄ (⊃⍵)∊'∆⍙_',⎕D,⎕A,Lowercase ⎕A:⍵ ⋄ ∇ 1↓⍵}r
          ((' '=r)/r)←'-'                       ⍝ Replace remaining blanks by hyphens
          r
      }

      DropSpecialAttributes←{
          specialAttrs←⍺
          0∊⍴specialAttrs:⍵
          '\'=1↑¯2↑⍵:⍵
          buff←(⎕UCS 13)Split ⍵     ⍝ In case of <<BR>>!
          tx←dtb⊃buff
          '}'≠¯1↑tx:1↓⊃,/(⎕UCS 13),¨(⊂tx),1↓buff
          ~'{'∊tx:1↓⊃,/(⎕UCS 13),¨(⊂tx),1↓buff
          tx←dtb{⌽⍵↓⍨⍵⍳'{'}1↓⌽tx
          1↓⊃,/(⎕UCS 13),¨(⊂tx),1↓buff
      }

      DropSpecialImageAttributes←{
      ⍝ In general special attributes are always located at the end of an object
      ⍝ while an image might might well be inside something else like a para or a cell etc.
          specialAttrs←⍺
          0∊⍴specialAttrs:⍵
          '\'=1↑¯2↑⍵:⍵
          buff←(⎕UCS 13)Split ⍵     ⍝ In case of <<BR>>!
          tx←dtb⊃buff
          b←('){')⍷tx
          0=+/b:⍵
          tx←(b⍳1)⌽⍵
          (-b⍳1)⌽{⍵↓⍨⍵⍳'}'}tx
      }

      ExecExternalFns←{
          ns←⍺
          (fns __arg)←{∨/' '''∊⍵:(¯1+⌊/⍵⍳' '''){(⍺↑⍵)(dlb ⍺↓⍵)}⍵ ⋄ ⍵ ⍬}⍵
          3≠⎕NC fns:''⊣ns.report,←⊂'Unknown external function: <',fns,'>'
          0::''⊣ns.report,←⊂'External function <',fns,'> did crash'
          1=2⊃1 ⎕AT fns:⍎fns,' ns'
          ⍎'__arg ',fns,' ns'
      }

      GetCommandLineParms←{
          r←⎕NS''
          clp←{⍵/⍨'-'≠⊃¨⍵}1↓2 ⎕NQ #'GetCommandLineArgs'
          0∊⍴clp:r
          0∊⍴clp←{⍵/⍨'='∊¨⍵}clp:r
          clp←'='Split¨clp
          _←r.{⍎⍺,'←',{'''',⍵,''''}⍣(~⊃⊃⎕VFI ⍵)⊢⍵}/¨clp
          r
      }

    ∇ r←GetCurrentDir
      r←¯1↓⊃1 ⎕NPARTS''
    ∇

      CorrectSlash←{
      ⍝ ⍺ is a Boolean that decides whether ⍵ shall be normalized (1) or not (0).
      ⍝ For everything that points to the local file system we want normalization,
      ⍝ but for stuff that potentially points elsewhere (like `cssUrl`) we don't want that:
      ⍝ We don't necessarily know the OS over there!
      ⍝ Default is normalization.
      ⍝ Leave any kind of protocol alone like "http://" etc. but also stuff like "foo://"
      ⍝ while "file://" and "file:///" is removed.
          ⍺←1
          ss←'://' ⍝ Search string
          0=+/bool←ss⍷⍵:##.FilesAndDirs.NormalizePath⍣(⊃⍺)⊣⍵
          length←(¯1+⍴ss)+bool⍳1
          (length↑⍵),##.FilesAndDirs.NormalizePath⍣(⊃⍺)⊣length↓⍵
      }

      InjectPointyBrackets←{
          tx←⍵
          tx←'&amp;pointybracket_open;'⎕R'<'⊣tx
          '&amp;pointybracket_close;'⎕R'>'⊣tx
      }

      GetAllLinkRefs←{
    ⍝ This combs through the html and finds all link references ([][]-syntax).
    ⍝ Ignores in-line code.
    ⍝ Returns a three-item-vector for each hit.
    ⍝ [1] The link text - that can by anything.
    ⍝ [2] The ref id. That's what we hope to find in ns.linkRefs later on.
    ⍝     This must be US ASCII letters and digits and nothing else, not even white space.
    ⍝ [3] The match - -everything between the opening [ and the closing ], including [].
          html←⍵
          mask←GetMaskForCodeTags¨html
          maskedHtml←mask{⎕ML←3 ⋄ 0=+/⍺:⍵ ⋄ w←⍵ ⋄ (⍺/w)←' ' ⋄ w}¨html
          hits←↓⍉↑'\[[^\]]*\]\[[^\]][A-Za-z0-9-_]*\]'⎕S(0 1 2)⊣maskedHtml
          0∊⍴∊hits:hits
          html∘GetLinkRef¨↓⍉↑hits
      }

      GetLinkRef←{
          html←⍺
          (start length row)←⍵
          row+←⎕IO
          buff←row⊃html
          match←(⊂start+⍳length)⌷buff
          '[]['≡3↑match:''(¯1↓3↓match)match
          (linkText id)←{⎕ML←3 ⋄ 0 2↓¨(1++\']['⍷⍵)⊂⍵}¯1↓1↓match
          linkText id match
      }

    ∇ {r}←ns ReplaceLinkID(linkText id searchFor);ind;url;title;sa;new
      r←⍬
      ind←(⊃¨ns.linkRefs)⍳⊂id
      :If ind≤⍴ns.linkRefs
          (url title sa)←1↓ind⊃ns.linkRefs
          :If 0∊⍴title
              :If 0∊⍴linkText
                  linkText←((ind,3)⊃ns.linkRefs)←url
              :Else
                  ((ind,3)⊃ns.linkRefs)←linkText
              :EndIf
          :EndIf
          :If 0∊⍴linkText
              linkText←title
          :EndIf
          new←'<a href="',url,'" class="external_link"',((~0∊⍴title)/' title="',title,'"'),sa,'>',linkText,'</a>'
          ns.html←'<code>.*?</code>'(MakeLiteralForRegex searchFor)⎕R'\0'new⍠('Mode' 'D')('DotAll' 1)⊣ns.html
      :EndIf
    ∇

      MakeLiteralForRegex←{
      ⍝ Escapes all reserved chars in ⍵ which is a RegEx search pattern that needs to be interpreted literal.
          literal←⍵
          reservedChars←'^.\$|?+()['
          b←literal∊reservedChars
          0=+/b:literal
          (b/literal)←('\',¨reservedChars)[reservedChars⍳b/literal]
          ⊃,/literal
      }

      FlattenHTML←{
      ⍝ Typically used to flatten ns.html
      ⍝ Bring back with :
      ⍝ ns.html ←→ (⎕Ucs 13) Split FlattenHTML ns.html
          1↓⊃,/(⎕UCS 13),¨⍵
      }

    ∇ r←ns CheckOddNumberOfDoubleQuotes(txt type);mask;ind;escape;openFlag;i;msg
    ⍝ Check "txt". That can be anything: paragraph, cell, list item, header, blockquote ...
    ⍝ * If it contains no " or an even number nothing changes.
    ⍝ * A single one is escaped.
    ⍝ * When an odd number is found the last one is escaped and a warning is issued, because
    ⍝   that might well not be what the user intended to do.
      r←' ',txt
      msg←''
      mask←~GetMaskForCode r
      :If 0∊⍴ind←Where mask\'"'=mask/r                      ⍝ No double quotes at all? Done!
          r←txt
      :ElseIf 1=⍴ind                                        ⍝ Just one double quote? Done!
          r←'`(.*?)`' '"'⎕R'&' '\\"'⊣txt                    ⍝ Escapes the " but ignores `code`
          msg←'Warning: single double quotes found in ',type
          ns.report,←⊂msg,' (line ',(⍕ns.parms.lineNumberOffset+⊃ns.lineNumbers),')'
      :Else
          :If '\'∧.≠r[ind-1]                                ⍝ Nothing escaped?
              :If 0=2|⍴ind                                  ⍝ Even number of "?
                  r←txt
              :Else                                         ⍝ No, number is odd
                  (txt[¯1+¯1↑ind])←⊂'\"'                    ⍝ Escape the last one.
                  r←⊃,/txt
                  msg←'Warning: odd number of double quotes found in ',type
                  ns.report,←⊂msg,' (line ',(⍕¯1+ns.parms.lineNumberOffset+⊃ns.lineNumbers),')'
              :EndIf
          :Else                                             ⍝ We have some `\"` so we need a loop
              openFlag←1
              txt←' ',txt
              :For i :In ind
                  :If '\"'≢txt[i-1 0]
                      :If openFlag
                          openFlag←0
                      :Else
                          openFlag←1
                      :EndIf
                  :EndIf
              :EndFor
              r←1↓⊃,/txt
          :EndIf
      :EndIf
    ∇

    ∇ ns←CheckForInvalidFootnotes ns;ind;ids;mask;html
    ⍝ At this point if we find any footnote refs they must be invalid, otherwise we wouldn't find them.
      :If ns.parms.checkFootnotes
      :AndIf ~0∊⍴ns.html
          html←FlattenHTML ns.html
          mask←~GetMaskForCodeTags html
      :AndIf ~0∊⍴html←mask/html
      :AndIf ~0∊⍴ind←Where'[^'⍷html
          ids←ind{{⍵↑⍨¯1+⍵⍳']'}(⍺+1)↓⍵}¨⊂html
          ns.report,←'Warning: invalid footnote: '∘,¨ids
      :EndIf
    ∇

    ∇ ns←CheckInternalLinks ns;html;anchors;links
    ⍝ Checks all internal links for being correct (not pointing into nowhere land).
      :If ns.parms.checkLinks
      :AndIf ~0∊⍴ns.html
          html←⊃,/ns.html
      :AndIf ~0∊⍴html←(~GetMaskForCodeTags html)/html
          anchors←GetBookmarkAnchors html
          links←GetBookmarkLinks html
      :AndIf ~0∊⍴links←(~links∊anchors)/links
          ns.report,←'Invalid internal link: ['∘,¨links,¨']'
      :EndIf
    ∇

    ∇ anchors←GetBookmarkAnchors html;buff
    ⍝ There are three different types of bookmark anchors:
    ⍝ * Headers (auto-generated; they have the class "autoheader_anchor")
    ⍝ * Footnotes (they have the class "footnote_anchor")
    ⍝ * Those with an ID assigned by special attributes or as part of an HTML block)
    ⍝ For that reason we need to take anything into account that carries an ID though
    ⍝ they might carry that ID only to be styleable with CSS.
      anchors←''
      buff←'<'Split html
      :If ~0∊⍴buff←(∨/¨'id="'∘⍷¨buff)/buff
      :AndIf ~0∊⍴anchors←(∨/¨' id="'∘⍷¨buff)/buff
          anchors←{⍵{0∊⍴⍵:'' ⋄ {⍵↑⍨¯1+⍵⍳'"'}(+/⍵)↓⍺}⊃'id="'⎕S 0 1⊣⍵}¨anchors
      :EndIf
    ⍝Done
    ∇

    ∇ links←GetBookmarkLinks html;buff
    ⍝ Those have the class "bookmark_link" or "footnote_link" assigned in case they are generated via Markdown.
    ⍝ However, if they are part of an HTML block then they might or not have any class assigned to them.
    ⍝ Therefore we need to take anything into account that carries an HREF attribute.
      links←''
      :If ~0∊⍴buff←'<'Split html
      :AndIf ~0∊⍴links←(∨/¨' href="'∘⍷¨buff)/buff
          links←{⍵{0∊⍴⍵:'' ⋄ {⍵↑⍨¯1+⍵⍳'"'}(+/⍵)↓⍺}⊃'href="'⎕S 0 1⊣⍵}¨links
⍝          links←(~∨/¨'://'∘⍷¨links)/links               ⍝ Drop all external links
⍝          links←(('mailto:'∘{⍺≢(⍴⍺)↑⍵}¨links))/links    ⍝ Drop all "mailto:" links
⍝          links←('#'=⊃¨links)↓¨links
          links←1↓¨('#'=⊃¨links)/links
      :EndIf
    ∇

      CompileMarkAPLFnsAndOprs←{
          parms←⍵
          0=parms.compileFunctions:0    ⍝ Don't?!
          1(400⌶)'Between':0            ⍝ already compiled
          ⍬ ⍝{2(400⌶)⍵}¨↓⎕NL 3
      }

    Between←{⍵∨≠\⍵}

      MaskPointyBrackets←{
      ⍝ Some stuff is marked up internally as "&pointybracket_open;" and "&pointybracket_close;".
      ⍝ In some instances we need to mask whatever is between. This fns returns the mask.
      ⍝ Note that when called the "&" will be converted into "&amp;".
          txt←⍵
          r←(⍴txt)⍴0
          0=+/b←'&amp;pointybracket_open;'⍷txt:r
          start←¯1+Where b
          end←('&amp;pointybracket_close;'{(⍴⍺)+Where ⍺⍷⍵}txt)-start+1
          ((,/start+¨⍳¨end)⌷r)←1
          r
      }

      MaskTagAttrs←{
          txt←⍵
          r←(⍴txt)⍴0
          ~'<'∊txt:r
          ind←∊{(⊃⍵)+⍳1↓⍵}¨'<[a-z]*\b[^>]*>'⎕S(0 1)⊣txt
          r[ind]←1
          r
      }

      MaskFunctionCall←{
          txt←,⍵
          b←(⍴txt)⍴0
          mask←~GetMaskForCodeTags txt
          0∊⍴ind←'[^⍎]⍎⍎[^⍎]'⎕S 0⊣' ',(mask/txt),' ':b
          ind←{↑,/{⍵[1]+⍳⍵[2]-⍵[1]}¨↓(((⍴⍵)÷2),2)⍴⍵}ind
          b[ind]←1
          b
      }

      ReplaceQTC_byBlank←{
          tx←⍵
          0=+/b←tx∊⎕TC:tx
          (b/tx)←' '
          tx
      }

    ∇ (noOf item)←CollectItem bl
    ⍝ Collects as many lines from `bl` as belong to what's a single list item.
    ⍝ bl:    All the lines a list may be compiled from.
    ⍝ The end is defined by one of:
    ⍝ * Empty line
    ⍝ * Line consisting of nothing but spaces
    ⍝ * The next list item (either numbered or bulleted, no matter what the indentation is)
    ⍝ Whatever comes first.
      noOf←+/∧\0≠⊃¨⍴¨bl~¨' '
      noOf←1++/∧\~IsHtmlList¨1↓noOf↑bl
      item←FlattenNestedItem noOf↑bl
    ∇

    ∇ (noOf para)←CollectItemPara bl;options;buff
       ⍝ Collects as many lines from `bl` as belong to what's a paragraph.
       ⍝ bl:    All the lines a list may be compiled from.
       ⍝ indentation:   Number of blanks defining the indentation. May be zero.
       ⍝ ←:     [1]=Number of lines in bl the para is made of; [2]=the para as such
       ⍝ Note: this function must be called only when at least ⊃bl is a para indeed.
      :If 1=noOf←+/∧\0≠⊃¨⍴¨bl
          para←⊃bl
      :Else
          noOf←1++/∧\0=IsHtmlList¨1↓noOf↑bl
          options←('Mode' 'M')('EOL' 'CR')('DotAll' 1)
          :If ~0∊⍴buff←{⍵↑⍨⊃'[~`]{3,}\s{0,}'⎕S 0⍠options⊣⍵}1↓⊃,/(⎕UCS 13),¨dlb¨noOf↑bl
              noOf←⊃((⎕UCS 13)+.={⍵↑⍨⊃'[~`]{3,}\s{0,}'⎕S 0⍠options⊣⍵}1↓⊃,/(⎕UCS 13),¨dlb¨noOf↑bl),noOf
              noOf-←0∊⍴' '~⍨noOf⊃bl
          :EndIf
          para←dlb⊃,/' ',¨noOf↑bl
      :EndIf
    ∇

      GetListBlock←{
          bl←⍵
          mask←~Between{⊃3>⍴⍵:0 ⋄ (⊂3⍴⍵)∊'```' '~~~'}¨bl~¨' '
          bl←(⌊/(~(⍴bl)⍴ns.emptyLines)⌿+/∧\' '=↑bl)↓¨bl
          (mask/bl)←HandleEscapedNewLines mask/bl
          leadingBlanks←+/∧\' '=↑bl
          drop←{⍵⌊⊃⍵}leadingBlanks
          drop↓¨bl
      }

      FlattenNestedItem←{
          item←⍵
          1=⍴,item:⊃item
          1↓⊃,/' ',¨dlb item
      }

    ∇ (url title)←GetUrlAndTitleFromLink link;noOf
    ⍝ Takes something like [Link Text](#A BookMark Link "The Title") and returns
    ⍝ '#a-bookmark-link` `The Title`
    ⍝ or [APL wiki](http://aplwiki.com "foo")
    ⍝ 'http://aplwiki.com' 'foo'
      url←(link⍳']')↓link
      url←(url⍳'(')↓url
      url↓⍨←-{⍵⍳')'}⌽url
      url←dtb url
      ((url='\')/url)←'/'
      :If '"'=¯1↑url           ⍝ Has it a title?!
      :AndIf 2≤'"'+.=url
          noOf←1+{+/∧\1=+\⍵='"'}⌽url
          title←¯1↓1↓(-noOf)↑url
          url←dtb dlb(-noOf)↓url
      :Else
          title←''
      :EndIf
      :If 0=+/'://'⍷url         ⍝ Protocol
     
      :AndIf 'mailto:'{⍺≢(⍴,⍺)↑⍵}url ⍝ Is not a "mailto" link
      :AndIf '#'≠1⍴url          ⍝ Bookmark
      :AndIf ':/'≢2⍴1↓url,'  '  ⍝ Absolute Windows path
      :AndIf './'≢2⍴url,'  '    ⍝ Relative path
      :AndIf '/'≠1⍴url          ⍝ Absolute UNIX path
          url←'http://',url
      :EndIf
    ∇

      GetIdFromSpecialAttributes←{
      ⍝ 'id="foo"' ←→ GetIdFromSpecialAttributes 'class="qwe" id="foo" style="color:red;"'
          0∊⍴buff←⊃'\sid="[^"]*."'⎕S(0 1)⊣⍵:''
          (ind length)←buff
          length↑(ind+1)↓⍵
      }

      RemoveIdFromSpecialAttributes←{
      ⍝ 'class="qwe" style="color:red;"' ←→ RemoveIdFromSpecialAttributes 'class="qwe" id="foo" style="color:red;"'
          '\sid="[^"]*."'⎕R''⊣⍵
      }


    ∇ r←ns CreateTOC def;lastLevel;level;caption;id;no;bf;nf;co;ff
    ⍝ def:
    ⍝ [;1] level
    ⍝ [;2] caption
    ⍝ [;3] running no
    ⍝ [;4] id
      r←⊂'<nav id="main_nav">'
      :If ns.parms.collapsibleTOC
          r,←⊂'<input type="checkbox" id="hide_toc">'
          r,←⊂'<label id="hide_toc_label" for="hide_toc"></label>'
      :Else
          r←⊂'<nav id="main_nav_no_collapse">'
      :EndIf
      r,←⊂'<div class="toc-container">'
      :If ~ns.parms.collapsibleTOC
          r,←⊂'<h3>',ns.parms.tocCaption,'</h3>'
      :EndIf
      r,←⊂'<ul>'
      lastLevel←⊃⊃def
      bf←(,0)≢,ns.parms.bookmarkLink        ⍝ Bookmark flag
      nf←(,0)≢,ns.parms.numberHeaders       ⍝ Numbered flag
      co←1                                  ⍝ Count opened lists
      ff←1                                  ⍝ "First" flag
      :For (level caption no id) :In ↓def
          :If lastLevel<level
              r,←⊂'<ul>'
              co+←1
          :ElseIf lastLevel>level
              ((⍴r)⊃r),←'</li>'
              r,←(lastLevel-level)⍴⊂'</ul>',(co>1)/'</li>'
              co-←lastLevel-level
          :ElseIf lastLevel=level
          :AndIf ~ff
              ((⍴r)⊃r),←'</li>'
          :EndIf
          caption←⊃ns ProcessInlineMarkUp caption
          r,←⊂'<li><a href="#',id,'">',(nf/no,' '),caption,'</a>'
          lastLevel←level
          ff←0
      :EndFor
      r,←(0⌈co-1)⍴⊂'</li></ul></li>'
      r,←⊂'</ul>'
      r,←⊂'</div>'
      r,←⊂'</nav>'
    ∇

    RemoveDoubleSlashes←{'//'{⍵/⍨~⍺⍷⍵}'\\'{⍵/⍨~⍺⍷⍵}⍵}

      EstablishDefaultHomeFolder←{
          p←⍵
          ⎕NULL≢p.homeFolder:p
          this←⍕⎕THIS
          p.homeFolder←GetCurrentDir
          f←∨/##.FilesAndDirs.Exists¨p.homeFolder∘,¨'/MarkAPL.html' '/MarkAPL_CheatSheet.html'
          f:p
          p.homeFolder←GetCurrentDir,'/Files'
          f←∨/##.FilesAndDirs.Exists¨p.homeFolder∘,¨'/MarkAPL.html' '/MarkAPL_CheatSheet.html'
          f:p
          home←(⊃¯1↑'.'SplitPath this){6::(⊃⎕RSI)⍎⍺ ⋄ ⍎⍵}¯1↓⊃'.'SplitPath this
          f←9≠home.⎕NC this,'.SALT_Data'
          f:p⊣p.homeFolder←GetCurrentDir,'/'
          sourceFolder←⊃SplitPath home.⍎'MarkAPL.SALT_Data.SourceFile'
          f←∨/##.FilesAndDirs.Exists¨sourceFolder∘,¨'/MarkAPL.html' '/MarkAPL_CheatSheet.html'
          f:p⊣p.homeFolder←sourceFolder
          p.homeFolder←CorrectSlash sourceFolder,'/Files/'
          p
      }

      RemoveAllComments←{
          ns←⍵
          markdown←ns.markdown
          markdown←1↓∊(⎕UCS 10),¨markdown
          ind←1+'^\s{0,3}[~`]{3,}\s{0,}({.*?})?\s{0,}$'⎕S 0⍠('Mode' 'M')('DotAll' 1)('EOL' 'LF')⊣markdown
          ind,←1+'<pre\b' '</pre>'⎕S 0⍠('Mode' 'M')('DotAll' 1)⊣markdown
          ind←ind[⍋ind]
          b←(⍴markdown)⍴0
          b[ind]←1
          b←Between b
          b∧←markdown≠⎕UCS 10
          markdown[Where b]←' '
          b2←'⍝'≠⊃¨(⎕UCS 10)Split markdown
          ns.markdown←b2/ns.markdown
          ns.lineNumbers←(+\~b2/b2)+b2/ns.lineNumbers
          ns
      }

    ∇ cb←MassageCodeBlock(cb noOfBlanks);pc
      pc←¯1↓1↓cb                            ⍝ Pure code: without the fences.
      :If ' '∧.=⊃,/noOfBlanks↑¨pc           ⍝ We take this as indicator that the pure code has it's own ideas regarding indentation; nothing needs to be done
          (¯1↓1↓cb)←noOfBlanks↓¨pc
      :EndIf
    ∇

    ∇ ns←CompileHelp(filename recompileFlag parms);ps;fn;b
    ⍝ Called by `Help` and `Reference`.
      ns←⍬
      parms←EstablishDefaultHomeFolder parms
      :If ⎕NULL≡parms.cssURL
          parms.cssURL←parms.homeFolder
      :EndIf
      fn←CorrectSlash parms.homeFolder,'/',filename
      :If 0∊⍴parms.inputFilename
          parms.inputFilename←(¯4↓fn),'md'
      :EndIf
      :If 0∊⍴parms.outputFilename
          parms.outputFilename←fn
      :EndIf
      :If |recompileFlag
          :If 0=##.FilesAndDirs.Exists parms.inputFilename
              6 ⎕SIGNAL⍨'File "',parms.inputFilename,'" not found; set "homeFolder"'
          :EndIf
          :If 0∊⍴parms.outputFilename
              parms.outputFilename←fn
          :Else
              fn←parms.outputFilename
          :EndIf
          ns←2⊃parms Markdown2HTML''
      :EndIf
      :If 0=parms.⎕NC'viewInBrowser'
          parms.viewInBrowser←1
      :EndIf
    ∇

    ∇ to←from CopyTo to;id;value;flag
    ⍝ ⍺ is typically something like embedded parms while ⍵ are THE parms
      :For id :In ' '~¨⍨↓from.⎕NL 2
          :If flag←0=to.⎕NC id
              value←from.⍎id
          :Else
              :If flag←¯1≢value←to.⍎id
                  flag←~0∊⍴value
              :EndIf
          :EndIf
          :If flag
              id to.{⍎⍺,'←⍵'}value
          :EndIf
      :EndFor
    ∇

      MassageFilename←{
          CorrectSlash'file:/{2,3}'⎕R''⊣⍵
      }

      AddAlignStyle←{
          ⍺←2
          (⍺=2)∧'left'≡⍵:''                 ⍝ For <th> ⍺←→1: headers default to center rather than left!
          ' style="text-align: ',⍵,';"'     ⍝ For "center" and "right"
      }

    ∇ toc←CollectToc ns;ind;buff;level;caption;IDs
      toc←⍬
      :If ~0∊⍴ind←'<a .*href=".*" class="autoheader_anchor".*>'⎕S 2⍠('Greedy' 0)⊣ns.html
          level←{⍎1↑2↓⊃⍵∘GetHitsFromRegExSearch¨'<h[1-6].*>'⎕S 0 1⍠('Greedy' 0)⊣⍵}¨ns.html[2+ind]
          caption←{1↓¨(-1+⍴'<hx>')↓¨⍵ GetHitsFromRegExSearch¨{⊃'\>.*\</h[1-6]>'⎕S 0 1⍠('Greedy' 0)⊣⍵}¨⍵}ns.html[2+ind]
          caption←{0∊⍴⍵:⍵ ⋄ '&lt;' '&gt;' '&amp;' '<code.*>' '</code>'⎕R('<' '>' '\&' '`' '`')⍠('Greedy' 0)('Mode' 'L')⊣⍵}¨caption
          IDs←{⍵{{⍵↑⍨¯1+⍵⍳'"'}((⍴'id="')+⍵)↓⍺}¨'id="(.*)"'⎕S 0⍠('Greedy' 0)⊣⍵}ns.html[1+ind]
          toc←↓(level,[1.5]caption),IDs
      :EndIf
    ∇

      GetHitsFromRegExSearch←{
      ⍝ ⍺ is a text string to be indexed.
      ⍝ ⍵ is a two-element vector as returned by `⎕S 0 1`: start and length
          ⍵[2]↑⍵[1]↓⍺
      }

    ∇ r←GetEmptyLines md
      ⍝ Returns vector of Booleans for those lines that are empty.
      ⍝ Note that empty lines within code blocks are **ignored**!
      r←0=⊃∘⍴¨md
      r∧←~WhereAreCodeBlocks md
    ∇

    ∇ r←indendations GetCodeBlockFrom list;fence;pattern;bool;noOf
      r←''
      fence←⊃(⊃list)~' '
      :If fence∊'~`'
          pattern←'^\s{0,',(⍕indendations),'}',fence,'{3,}'
      :AndIf ~0∊⍴pattern ⎕S 0⊣⊃list
      :AndIf 0<+/bool←pattern∘{⊃⍴⍺ ⎕S 0⍠('Mode' 'L')('Greedy' 0)⊣⍵}¨1↓list
          noOf←2++/∧\~bool
          r←noOf↑list
      :EndIf
    ∇

    ∇ html←ProcessLeanPubCodeEmphasizing html;patterns;replaceBy;hits;bool
    ⍝ Replaces `leanpub-start-insert` by an opening <span> and `leanpub-start-end` by a closing </span>.
    ⍝ Used to emphasize changes in the code with CSS.
    ⍝ html←'leanpub-start-insert' 'leanpub-end-insert'⎕R'<span class="leanpub_code">' '</span>'⍠('Greedy' 0)('IC' 1)⊣html
      patterns←'^\\leanpub-start-insert' '^\\leanpub-end-insert' '^leanpub-start-insert' '^leanpub-end-insert'
      replaceBy←'leanpub-start-insert' 'leanpub-end-insert' '<span class="leanpub_code">' '</span>'
      html←patterns ⎕R replaceBy⍠('Greedy' 0)('IC' 1)('Mode' 'L')⊣html
      html←1↓∊(⎕UCS 13),¨html
      hits←↑'<span class="leanpub_code">' '</span>'⎕S 0 1 3⍠('Greedy' 0)('IC' 1)('Mode' 'M')⊣html
      :If ~0∊⍴hits
          ⍝ Here we remove the CR between `leanpup-*-insert` and the following line
          bool←(⍴html)⍴1
          bool[1++/hits[;1 2]]←0
          bool←(~bool)⍲(~bool)\(⎕UCS 13)=(~bool)/html  ⍝ Only when it's a CR: the last one does not have one!
          html←bool/html
      :EndIf
      html←(⎕UCS 13)Split html
    ⍝Done
    ∇

    ∇ ns←parms ProcessLeanPubExtensions ns;flag
    ⍝ Replaces `A> ` and alikes against a <div> that is used to give it an outlook similar to what LeanPub is doing.
    ⍝ When this functions runs we have not yet established all embedded parameters from the Markdown, and we can't
    ⍝ at this stage - too early. But we cannot process the LeanPub extensions later either, so we have to look up for
    ⍝ any embedded parameter `leanpubExtensions` ourself.
      :If 0=flag←parms.leanpubExtensions
          :If 0=parms.ignoreEmbeddedParms
              flag←(,1)≡,'leanpubExtensions'LookForEmbeddedParm RemoveLeanpubEncoding ns.markdown
          :EndIf
      :EndIf
      :If flag
          ns←parms ProcessLeanPubExtensions_ ns
      :EndIf
    ∇

    ∇ ns←parms ProcessLeanPubExtensions_ ns;leanPubExtensions;extension;isNotCodeBlock;bool;start;lengths;i;ind;noOf;openDiv;body;html;img;after;report
      leanPubExtensions←'AWTEIQDX'
      :For extension :In leanPubExtensions
          isNotCodeBlock←~WhereAreCodeBlocks ns.markdown
          :If 0<+/bool←isNotCodeBlock\(3↑¨isNotCodeBlock/ns.markdown)≡¨⊂extension,'> '
          :AndIf ~0∊⍴start←Where 0 1⍷bool
              lengths←,+/¨bool{⎕ML←3 ⋄ ⍺⊂⍵}bool
              :For i :In ⍳⍴start
                  ind←i⊃start
                  :If 0∊⍴ind⊃ns.markdown            ⍝ The line before must be empty
                      noOf←i⊃lengths
                      after←1+ind+noOf
                      :If 0∊⍴after⊃ns.markdown      ⍝ The line after must be empty
                          openDiv←⊂'<div class="leanpub',((extension≡'A')/'_A'),'">'
                          body←3↓¨ns.markdown[ind+⍳lengths[i]]
                          (html report)←ConvertLeanpubExtension2Markdown body
                          :If extension≠'A'
                              img←'<img src="',(parms LeanPubImageFor extension),'" alt="',(LeanPubAltTextFor extension),'">'
                              html←img'<div>',html,⊂'</div>'
                          :EndIf
                          html←openDiv,html,⊂'</div>'
                          ns.markdown←(ind↑ns.markdown),html,(ind+noOf)↓ns.markdown
                          ns.lineNumbers←(ind↑ns.lineNumbers),((⍴html)⍴⊂(1+ind),ind+noOf),(ind+noOf)↓ns.lineNumbers
                          :If ~0∊⍴report
                              ns.report,←((ind+1)⊃ns.lineNumbers)∘{i←-(⌽⍵)⍳' ' ⋄ (i↓⍵),' ',({1=⍴,⍵:⍕⍵ ⋄ ⊃{⍺,'-',⍵}/⍕¨⍵}⍺),')'}¨report
                          :EndIf
                          (i↓start)←(i↓start)+(⍴html)-noOf
                      :EndIf
                  :EndIf
              :EndFor
          :EndIf
      :EndFor
    ∇

    ∇ (html report)←ConvertLeanpubExtension2Markdown markdown;parms;ns
    ⍝ `markdown` comes from an aside (= LeanPub extension like `A> `).
    ⍝ This requires to be converted to HTML with MarkAPL but without...
    ⍝ * header anchors
    ⍝ * numbering headers
    ⍝ etc.
      parms←CreateParms
      parms.numberHeaders←0
      parms.bookmarkLink←0
      parms.createFullHtmlPage←0
      parms.verbose←0
      parms.ignoreEmbeddedParms←1
      parms.div_h_tag←0
      (html ns)←parms Markdown2HTML markdown
      html←ConvertH1AndH2HeadersToH3 html
      report←ns.report
    ⍝Done
    ∇

      ConvertH1AndH2HeadersToH3←{
      ⍝ This is called on code blocks within any Asid (LeanPub extension).
      ⍝ Since screen readers read out any H1 and H2 tags we convert those to h3.
          html←⍵
          html←'<h1>' '<h2>'⎕R'<h3>'⊣html
          '</h1>' '</h2>'⎕R'</h3>'⊣html
      }

      LeanPubImageFor←{
          icons←'error.png' 'discussion.png' 'information.png' 'warning.png' 'question.png' 'tip.png' 'exercise.png'
          extension←'ediwqtx'
          icon←(extension⍳Lowercase ⍵)⊃icons
          parms←⍺
          parms.leanpubIconsUrl,icon
      }

      LeanPubAltTextFor←{
          altText←'Error' 'Discussion' 'Information' 'Warning' 'Question' 'Tip' 'Exercise'
          extension←'ediwqtx'
          (extension⍳Lowercase ⍵)⊃altText
      }

      ProcessImageUrl←{
          base←⍵
          0∊⍴base:⍺
          url←⍺
          base,(('/'≠¯1↑base)/'/'),url
      }

    ∇ bool←WhereAreCodeBlocks md;b1;b2;fences;first
      md←{⍵↓⍨3⌊+/∧\' '=⍵}¨md
      b1←'~'IsFence¨md
      b2←'`'IsFence¨md
      :If 0=+/b1+b2                     ⍝ No code blocks at all: done!
          bool←(⍴md)⍴0
      :Else
          :If >/b1 b2⍳¨1
              (b2 b1)←b1 b2
          :EndIf
          b1←Between b1
          (b1/b2)←0
          b2←Between b2
          bool←b1∨b2
          :Return
     
          fences←'~`'
          first←>/⌊/¨Where¨b1 b2,¨1     ⍝ 0=~, 1=`
          :If 0<+/b1
              b1←b1\(fences[first+1])CheckForCodeBlocks b1/md
          :EndIf
          :If 0<+/b2
              b2←b2\(fences[first+1])CheckForCodeBlocks b2/md
          :EndIf
          :If 0∨.≠2|(+/b1)(+/b2)        ⍝ If ~ or ` have on odd number of opening/closing then special treatment is needed
              :If first
                  (¯1↑b1)←1
              :Else
                  (¯1↑b2)←1
              :EndIf
          :EndIf
          bool←Between b1∨b2
      :EndIf
    ∇

      IsFence←{
      ⍝ ⍺ must be either ~ or `
      ⍝ Returns 1 in case ⍵ is a valid fence for a code block.
          md←⍵
          fence←⍺
          pattern←'^ {0,3}',fence,'{3,}'
          0∊⍴pattern ⎕S 0⍠('Greedy' 0)('Mode' 'L')⊣md:0
          remains←pattern ⎕R''⍠('Greedy' 0)('Mode' 'L')⊣md
          ~fence∊{⍵↓⍨+/∧\fence=⍵}remains
      }

      LookForEmbeddedParm←{
          markdown←⍵
          valueName←⍺
          searchFor←'[parm]:'
          0=+/bool←searchFor∘≡¨(⍴searchFor)↑¨markdown:''
          buff←(⍴searchFor)↓¨bool/markdown
          0=+/bool←valueName∘≡¨(⍴valueName)↑¨buff:''
          buff←(⍴searchFor)↓(bool⍳1)⊃markdown
          valueName≢(⍴valueName)↑buff:''
          value←(1+⍴valueName)↓buff
          ''''=1⍴value:1↓¯1↓value
          ⊃(//)⎕VFI value
      }

    ∇ flag←CheckForHtmlBlock(markdown emptyLines topOfDocument);row
    ⍝ Returns 1 if `markdown` starts with an HTML block and 0 otherwise
      flag←0
      :If topOfDocument
      :OrIf ⊃⍴'^<pre.*>' '^<script.*>' '^<style.*>'⎕S 0⍠('Greedy' 0)⊣⊃markdown  ⍝ <pre>, <script>, <style> don't require empty lines around them.
      :OrIf ∆LastLineWasEmpty∨(⊃emptyLines)∧'<'=1↑⊃⊃1↓markdown                  ⍝ But it MAY have a blank leading line anyway!
          row←⊃(⊃emptyLines)↓markdown
          flag←'<'=1⍴row
          :If flag
              flag←0∊⍴'<([a-zA-Z0-9]){3,5}://'⎕S 0⊣row                          ⍝ Tell implicit link (like <http://aplwiki.com>) from an HTML block!
          :EndIf
      :EndIf
    ∇

      RemoveLeanpubEncoding←{
          0∊⍴'^ *{:: encoding=".*$'⎕S 0⊣⊃⍵:⍵
          1↓⍵
      }

      IsolateLink←{
          txt←⍵
          mask←⍺
          0=+/b←']('⍷mask\mask/txt:⍬
          link←⌽(b⍳1)↑txt
          (⍴link)-1++/∧\~(+\link='[')=+\link=']'
      }

:EndClass
