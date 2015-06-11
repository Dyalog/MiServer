:Class ejAccordion : #._SF._ejWidget
⍝ Description: Syncfusion Accordion widget
⍝ Constructor: {id} [{titles} {sections}]|[{titles_sections}]
⍝ id              - the id/name for the accordion
⍝ titles          - vector of char vectors containing titles to appear on accodion sections 
⍝ sections        - vector of vectors containing HTML content for each section
⍝ titles-sections - 2-column matrix of titles and sections as above
⍝ Public Fields:
⍝ Titles          - vector of char vectors containing titles to appear on accodion sections 
⍝ Sections        - vector of vectors containing HTML content for each section
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