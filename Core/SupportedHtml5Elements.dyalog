:Namespace SupportedHtml5Elements

 ⍝ this namespace is used to build the _html namespace containing definitions for all HTML5 elements
 ⍝ element names followed by '*' have no closing tag

    Elements←' a abbr acronym address area* article aside audio b base* bdi bdo big blockquote'
    Elements,←' body br* button canvas caption circle* cite code col* colgroup command datalist dd del'
    Elements,←' details dfn div dl dt ellipse* em embed* fieldset figcaption figure footer form g'
    Elements,←' h1 h2 h3 h4 h5 h6 head header hgroup hr* html i iframe img* input* ins kbd keygen label'
    Elements,←' legend li line* link* map mark menu meta* meter nav noscript object ol optgroup option'
    Elements,←' output p param* path* polygon* polyline* pre progress q rect* rp rt ruby s samp script'
    Elements,←' section select small source* span strong style sub summary sup svg table tbody td'
    Elements,←' textarea tfoot th thead time title tr track tt u ul var video wbr'


    ∇ Build_html_namespace;e;def;noend;class;make;make1;make2;endclass;make1a
     
      class←,⊂':Class ∆ : #.HtmlElement'
      make←'∇make' ':Access Public' 'NoEndTag←⍺' ':Implements Constructor :Base ''∆''' '∇'
      make1←'∇make1 arg' ':Access Public' 'NoEndTag←⍺' ':Implements Constructor :Base ''∆'' arg' '∇'
      make1a←'∇make1 arg' ':Access Public' 'NoEndTag←⍺' ':Implements Constructor :Base ''∆'' '''' arg' '∇'
      make2←'∇make2 (content attr)' ':Access Public' 'NoEndTag←⍺' ':Implements Constructor :Base ''∆'' content attr' '∇'
      endclass←,⊂':EndClass'
     
      #._html.(⎕EX ⎕NL ¯9.4)
     
      :For e :In {⎕ML←3 ⋄ ⍵⊂⍨⍵≠1↑⍵}Elements
          e↓⍨←-noend←'*'=¯1↑e
          #._html.⎕FIX⊃,/(⍕¨e noend)∘{((,¨'∆⍺')⎕R ⍺),¨⍵}¨(1 1,(noend⌽1 0),1 1)/class make make1 make1a make2 endclass
      :EndFor
    ∇


:EndNamespace