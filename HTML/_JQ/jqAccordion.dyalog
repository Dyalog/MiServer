:class jqAccordion : #._JQ._jqUITabbedWidget
⍝ Description:: jQueryUI Accordion widget
⍝ Constructor:: [titles [sections]] | [titles_sections]
⍝ titles          - vector of char vectors containing titles to appear on accordion sections
⍝ sections        - vector of vectors containing HTML content for each section
⍝ titles_sections - 2-column matrix of titles [;1] and sections [;2] as above
⍝                   or vector of 2 element title/section vectors
⍝ Public Fields::
⍝ Titles          - vector of char vectors containing titles to appear on accordion sections
⍝ Sections        - vector of vectors containing HTML content for each section
⍝ Examples::
⍝ jqAccordion 'Title1' 'Title2'
⍝ jqAccordion ('Title1' 'Title2')('Section1' 'Section2')
⍝ jqAccordion 2 2⍴'Title1' 'Section1' 'Title2' 'Section2'

    :field public shared readonly DocBase←'https://jqueryui.com/accordion/'
    :field public shared readonly IntEvt←'activate' 'beforeActivate' 'create'
    :field public shared readonly ApiLevel←3
    :Field public Titles←0⍴⊂''
    :Field public Sections←0⍴⊂''
    
    ∇ Make
      :Access public
      :Implements constructor
      Widget._function←#.JQUI.Accordion
      JQueryFn←'accordion'
      InternalEvents←IntEvt
    ∇

    ∇ Make1 args
      :Access public
      :Implements constructor :base args
      Widget._function←#.JQUI.Accordion
      JQueryFn←'accordion'
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
      InternalEvents←IntEvt
    ∇

    ∇ {title}AddSection content
      :Access public
      :If 0=⎕NC'title' ⋄ title←'Section ',⍕1+⍴Titles ⋄ :EndIf
      Titles,←⊂title
      Sections,←⊂content
    ∇

:endclass