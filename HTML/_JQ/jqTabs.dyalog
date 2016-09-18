:class jqTabs : #._JQ._jqUITabbedWidget
⍝ Description:: jQueryUI Tabs widget
⍝ Constructor:: [titles [sections]] | [titles_sections]
⍝ titles          - vector of char vectors containing titles to appear on tabs
⍝ sections        - vector of vectors containing HTML content for each tab
⍝ titles_sections - 2-column matrix of titles [;1] and tabs [;2] as above
⍝                   or vector of 2 element title/tab vectors
⍝ Public Fields::
⍝ Titles          - vector of char vectors containing titles to appear on tabs
⍝ Sections        - vector of vectors containing HTML content for each tab
⍝ Examples::
⍝ jqTabs 'Title1' 'Title2'
⍝ jqTabs ('Title1' 'Title2')('Section1' 'Section2')
⍝ jqTabs 2 2⍴'Title1' 'Section1' 'Title2' 'Section2'    

⍝ Constructor:: [titles [sections]] | [titles_sections]
⍝ titles          - vector of char vectors containing titles to appear on tabbed sections
⍝ sections        - vector of vectors containing HTML content for each section
⍝                   or URL pointing to content to load dynamically
⍝ titles_sections - 2-column matrix of titles [;1] and sections [;2] as above
⍝                   or vector of 2 element title/section vectors
⍝ Public Fields::
⍝ Titles          - vector of char vectors containing titles to appear on tabbed sections
⍝ Sections        - vector of vectors containing HTML content for each section
⍝ IsURL           - scalar or vector indicating if a section is a URL default is 0
⍝ Examples::
⍝ jqTabs 'Title1' 'Title2'
⍝ jqTabs ('Title1' 'Title2')('Section1' 'Section2')
⍝ jqTabs 2 2⍴'Title1' 'Section1' 'Title2' 'Section2'    

    :field public shared readonly DocBase←'https://jqueryui.com/tabs/'
    :field public shared readonly IntEvt←'activate' 'beforeActivate' 'beforeLoad' 'create' 'load'
    :field public shared readonly ApiLevel←3
   
    :Field public Titles←0⍴⊂''
    :Field public Sections←0⍴⊂''
    :Field public IsURL←⍬
    
    ∇ Make
      :Access public
      :Implements constructor
      Widget._function←#.JQUI.Tabs
      JQueryFn←'tabs'
      InternalEvents←IntEvt
    ∇

    ∇ Make1 args
      :Access public
      :Implements constructor :base args
      Widget._function←#.JQUI.Tabs
      JQueryFn←'tabs'
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
