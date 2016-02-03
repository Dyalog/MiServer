:Namespace SupportedHtml5Elements

 ⍝ this namespace is used to build the _html namespace containing definitions for all HTML5 elements
 ⍝ element names followed by '*' have no closing tag

    Elements←' a abbr address area* article aside audio b base* bdi bdo blockquote'
    Elements,←' body br* button canvas caption circle* cite code col* colgroup datalist dd del'
    Elements,←' details dfn dialog div dl dt ellipse* em embed* fieldset figcaption figure footer form'
    Elements,←' h1 h2 h3 h4 h5 h6 head header hr* html i iframe img* input* ins kbd keygen label'
    Elements,←' legend li line* link* main map mark menu menuitem meta* meter nav noscript object ol optgroup option'
    Elements,←' output p param* path* polygon* polyline* pre progress q rect* rp rt ruby s samp script'
    Elements,←' section select small source* span strong style sub summary sup svg table tbody td'
    Elements,←' textarea tfoot th thead time title tr track u ul var video wbr*'


    ∇ Build_html_namespace;e;def;noend;class;make;make1;make2;endclass;make1a;doc
     
      class←,⊂':Class ∆ : #.HtmlElement'
      doc←':field public shared readonly DocBase←''http://www.w3schools.com/tags/tag_∆.asp''' ':field public shared readonly DocDyalog←''/Documentation/DyalogAPIs/html5.html''' ':field public shared readonly APILevel←2'
     
      make←'∇make' ':Access Public' 'NoEndTag←⍺' ':Implements Constructor :Base (,''∆'')' '∇'
      make1←'∇make1 arg' ':Access Public' 'NoEndTag←⍺' ':Implements Constructor :Base (,''∆'') arg' '∇'
      make1a←'∇make1 arg' ':Access Public' 'NoEndTag←⍺' ':Implements Constructor :Base (,''∆'') '''' arg' '∇'
      make2←'∇make2 (content attr);a' ':Access Public' 'NoEndTag←⍺' 'a←(⊂,''∆''),⊂⍣(isString a)⊢a←content attr' ':Implements Constructor :Base a' '∇'
      endclass←,⊂':EndClass'
     
      #._html.(⎕EX ⎕NL ¯9.4)  ⍝ erase all classes
     
      :For e :In {⎕ML←3 ⋄ ⍵⊂⍨⍵≠' '}Elements
          e↓⍨←-noend←'*'=¯1↑e
          doc[1]←'∆'⎕R'hn'⍣(⎕D∊⍨⊃⌽e)⊢doc[1]
          #._html.⎕FIX⊃,/(⍕¨e noend)∘{((,¨'∆⍺')⎕R ⍺),¨⍵}¨(1 1 1,(noend⌽1 0),1 1)/class doc make make1 make1a make2 endclass
      :EndFor
    ∇


:EndNamespace