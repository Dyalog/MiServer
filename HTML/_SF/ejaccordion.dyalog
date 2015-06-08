:Class ejAccordion : #._SF._ejWidget
    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejAccordion.html'
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejAccordion.html'
    :field public shared readonly ApiLevel←3
    :Field public Titles←0⍴⊂''
    :Field public Sections←0⍴⊂''
    ∇ make
      :Access public
      JQueryFn←Uses←'ejAccordion'
      :Implements constructor
    ∇
    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejAccordion'
      :Implements constructor :base args
    ∇
    ∇ r←Render;title;section;h3
      :Access public
      :If ~0∊⍴Titles
          :For title section :InEach Titles((⊃⍴Titles)↑Sections)
              (Container.Add #._html.h3).Add #._html.a title'href="#"'
              Container.Add #._html.div section
          :EndFor
      :EndIf
      r←⎕BASE.Render
    ∇
:EndClass
