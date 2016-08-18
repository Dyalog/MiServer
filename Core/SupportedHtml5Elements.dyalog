:Namespace SupportedHtml5Elements

 ⍝ this namespace is used to build the _html namespace containing definitions for all supported HTML5 elements

    ∇ Build_html_namespace;Elements;e;endtag;d;script;NoEndTag_X
     
⍝ Sources for the following are
⍝ non-svg:  https://www.w3.org/TR/html-markup/elements.html
⍝ svg~path: https://www.w3.org/TR/SVG11/shapes.html
⍝ path:     https://www.w3.org/TR/SVG11/paths.html#DAttribute
     
⍝ element names followed by '*' have no closing tag
      Elements←{{('*'~⍨⊃⍵)('*'≠⊃⌽⊃⍵)(⊃⌽⍵)}¯1 0↓¨⍵⊂⍨¯1↓1,(⍵⍳' ')=⍳⍴⍵}∘{{1↓¯1↓(~'  '⍷⍵)/⍵}' ',⍵,' '}¨{⍵/⍨'⍝'≠⊃¨⍵}{1↓¨⍵/⍨∧\'⍝'=⊃¨⍵}{⍵{((∨\⍵)∧⌽∨\⌽⍵)/⍺}' '≠⍵}¨(1+⊃⎕LC)↓↓(180⌶)⊃⎕XSI
      ⍝ a          Defines a hyperlink
      ⍝ abbr       Defines an abbreviation or an acronym
      ⍝ address    Defines contact information for the author/owner of a document
      ⍝ area*      Defines an area inside an image-map
      ⍝ article    Defines an article
      ⍝ aside      Defines content aside from the page content
      ⍝ audio      Defines sound content
      ⍝ b          Defines bold text
      ⍝ base*      Specifies the base URL/target for all relative URLs in a document
      ⍝ bdi        Isolates a part of text that might be formatted in a different direction from other text outside it
      ⍝ bdo        Overrides the current text direction
      ⍝ blockquote Defines a section that is quoted from another source
      ⍝ body       Defines the document's body
      ⍝ br*        Defines a single line break
      ⍝ button     Defines a clickable button
      ⍝ canvas     Used to draw graphics, on the fly, via scripting (usually JavaScript)
      ⍝ caption    Defines a table caption
      ⍝ circle*    Defines a circle
      ⍝ cite       Defines the title of a work
      ⍝ code       Defines a piece of computer code
      ⍝ col*       Specifies column properties for each column within a <colgroup> element 
      ⍝ colgroup   Specifies a group of one or more columns in a table for formatting
      ⍝ datalist   Specifies a list of pre-defined options for input controls
      ⍝ dd         Defines a description/value of a term in a description list
      ⍝ del        Defines text that has been deleted from a document
      ⍝ details    Defines additional details that the user can view or hide
      ⍝ dfn        Represents the defining instance of a term
      ⍝ dialog     Defines a dialog box or window
      ⍝ div        Defines a section in a document
      ⍝ dl         Defines a description list
      ⍝ dt         Defines a term/name in a description list
      ⍝ ellipse*   Defines an ellipse
      ⍝ em         Defines emphasized text 
      ⍝ embed*     Defines a container for an external (non-HTML) application
      ⍝ fieldset   Groups related elements in a form
      ⍝ figcaption Defines a caption for a figure element
      ⍝ figure     Specifies self-contained content
      ⍝ footer     Defines a footer for a document or section
      ⍝ form       Defines an HTML form for user input
      ⍝ h1         Defines an HTML heading level 1
      ⍝ h2         Defines an HTML heading level 2
      ⍝ h3         Defines an HTML heading level 3
      ⍝ h4         Defines an HTML heading level 4
      ⍝ h5         Defines an HTML heading level 5
      ⍝ h6         Defines an HTML heading level 6
      ⍝ head       Defines information about the document
      ⍝ header     Defines a header for a document or section
      ⍝ hr*        Defines a thematic change in the content
      ⍝ html       Defines the root of an HTML document
      ⍝ i          Defines a part of text in an alternate voice or mood
      ⍝ iframe     Defines an inline frame
      ⍝ img*       Defines an image
      ⍝ input*     Defines an input control
      ⍝ ins        Defines a text that has been inserted into a document
      ⍝ kbd        Defines keyboard input
      ⍝ keygen     Defines a key-pair generator field (for forms)
      ⍝ label      Defines a label for an input element
      ⍝ legend     Defines a caption for a fieldset element
      ⍝ li         Defines a list item
      ⍝ line*      Defines a line segment that starts at one point and ends at another
      ⍝ link*      Defines the relationship between a document and an external resource (most used to link to style sheets)
      ⍝ main       Specifies the main content of a document
      ⍝ map        Defines a client-side image-map
      ⍝ mark       Defines marked/highlighted text
      ⍝ menu       Defines a list/menu of commands
      ⍝ menuitem   Defines a command/menu item that the user can invoke from a popup menu
      ⍝ meta*      Defines metadata about an HTML document
      ⍝ meter      Defines a scalar measurement within a known range (a gauge)
      ⍝ nav        Defines navigation links
      ⍝ noscript   Defines an alternate content for users that do not support client-side scripts
      ⍝ object     Defines an embedded object
      ⍝ ol         Defines an ordered list
      ⍝ optgroup   Defines a group of related options in a drop-down list
      ⍝ option     Defines an option in a drop-down list
      ⍝ output     Defines the result of a calculation
      ⍝ p          Defines a paragraph
      ⍝ param*     Defines a parameter for an object
      ⍝ path*      Defines a generic shape
      ⍝ polygon*   Defines a closed shape consisting of a set of connected straight line segments
      ⍝ polyline*  Defines a set of connected straight line segments
      ⍝ pre        Defines preformatted text
      ⍝ progress   Represents the progress of a task
      ⍝ q          Defines a short quotation
      ⍝ rect*      Defines a rectangle
      ⍝ rp         Defines what to show in browsers that do not support ruby annotations
      ⍝ rt         Defines an explanation/pronunciation of characters
      ⍝ ruby       Defines a ruby annotation
      ⍝ s          Defines text that is no longer correct
      ⍝ samp       Defines sample output from a computer program
      ⍝ script     Defines a client-side script
      ⍝ section    Defines a section in a document
      ⍝ select     Defines a drop-down list
      ⍝ small      Defines smaller text
      ⍝ source*    Defines multiple media resources for media elements
      ⍝ span       Defines a section in a document
      ⍝ strong     Defines important text
      ⍝ style      Defines style information for a document
      ⍝ sub        Defines subscripted text
      ⍝ summary    Defines a visible heading for a details element
      ⍝ sup        Defines superscripted text
      ⍝ svg        Defines a container for SVG graphics
      ⍝ table      Defines a table
      ⍝ tbody      Groups the body content in a table
      ⍝ td         Defines a cell in a table
      ⍝ textarea   Defines a multiline input control (text area)
      ⍝ tfoot      Groups the footer content in a table
      ⍝ th         Defines a header cell in a table
      ⍝ thead      Groups the header content in a table
      ⍝ time       Defines a date/time
      ⍝ title      Defines a title for the document
      ⍝ tr         Defines a row in a table
      ⍝ track      Defines text tracks for media elements
      ⍝ u          Defines text that should be stylistically different from normal text
      ⍝ ul         Defines an unordered list
      ⍝ var        Defines a variable
      ⍝ video      Defines a video or movie
      ⍝ wbr*       Defines a possible line-break
     
      #._html.(⎕EX ⎕NL ¯9.4)  ⍝ erase all classes
     
      :For e endtag d :In Elements
          NoEndTag_X←'NoEndTag←',⍕~endtag
          script←(':Class ',e,' : #.HtmlElement')('⍝ Description:: ',d)('⍝ Constructor:: ',('[content '∘,,∘']')⍣endtag⊢'[attributes]')
          :Select e
          :CaseList 'h1' 'h2' 'h3' 'h4' 'h5' 'h6'
              script,←⊂':field public shared readonly DocBase←''http://www.w3schools.com/tags/tag_hn.asp'''
          :CaseList 'rect' 'circle' 'ellipse' 'line' 'polyline' 'polygon' 'path'
              script,←⊂':field public shared readonly DocBase←''http://www.w3schools.com/svg/svg_',e,'.asp'''
          :Case 'svg'
              script,←⊂':field public shared readonly DocBase←''http://www.w3schools.com/html/html5_svg.asp'''
          :Else
              script,←⊂':field public shared readonly DocBase←''http://www.w3schools.com/tags/tag_',e,'.asp'''
          :EndSelect
          script,←':field public shared readonly DocDyalog←''/Documentation/DyalogAPIs/html5.html''' ':field public shared readonly APILevel←2'
          script,←'∇make' ':Access Public'NoEndTag_X(':Implements Constructor :Base (,''',e,''')')(,'∇')
          script,←'∇make1 arg' ':Access Public'NoEndTag_X(':Implements Constructor :Base (,''',e,''') ',(''''' '/⍨~endtag),'arg')(,'∇')
          script,←'∇make2 (content attr);a' ':Access Public'NoEndTag_X('a←(⊂,''',e,'''),⊂⍣(isString a)⊢a←content attr')':Implements Constructor :Base a'(,'∇')
          script,←⊂':EndClass'
          #._html.⎕FIX script
      :EndFor
    ∇

:EndNamespace
