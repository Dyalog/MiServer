  :Class ejAccordion : #._SF._ejWidget
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejAccordion.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly _jQueryFn←'ejAccordion'
    :Field public Titles←0⍴⊂''
    :Field public Sections←0⍴⊂''
    ∇ make
      :Access public
      JQueryFn←Uses←_jQueryFn
      :Implements constructor
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
