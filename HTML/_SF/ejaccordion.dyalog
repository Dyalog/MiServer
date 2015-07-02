:Class ejAccordion : #._SF._ejWidget
⍝ Description:: Syncfusion Accordion widget
⍝ Constructor:: [titles [sections]]|[titles_sections]
⍝ titles          - vector of char vectors containing titles to appear on accordion sections
⍝ sections        - vector of vectors containing HTML content for each section
⍝ titles_sections - 2-column matrix of titles [;1] and sections [;2] as above
⍝                   or vector of 2 element title/section vectors
⍝ Public Fields::
⍝ Titles          - vector of char vectors containing titles to appear on accordion sections
⍝ Sections        - vector of vectors containing HTML content for each section
⍝ Examples::      ejAccordion 'Title1' 'Title2'
⍝                 ejAccordion ('Title1' 'Title2')('Section1' 'Section2')
⍝                 ejAccordion 2 2⍴'Title1' 'Section1' 'Title2' 'Section2'
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
      :Implements constructor :base
      args←eis args
      :If 1=⍴args
          :If 2=⍴⍴1⊃args ⍝ matrix arg?
              (Titles Sections)←↓[2]1⊃args
          :Else ⍝ single title
              Titles←args
          :EndIf
      :Else
          (Titles Sections)←eis¨2↑args
      :EndIf
     
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