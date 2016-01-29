:class ejTab : #._SF._ejWidget
⍝ Description:: Syncfusion Tab widget
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
⍝ ejTab 'Title1' 'Title2'
⍝ ejTab ('Title1' 'Title2')('Section1' 'Section2')
⍝ ejTab 2 2⍴'Title1' 'Section1' 'Title2' 'Section2'

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejTab.html'
    :field public shared readonly ApiLevel←1
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejTab.html'
    :field public shared readonly IntEvt←'active' 'ajaxBeforeLoad' 'ajaxError' 'ajaxLoad' 'ajaxSuccess' 'beforeActive' 'beforeItemRemove' 'create' 'destroy' 'itemAdd' 'itemRemove'

    :field public Titles←0⍴⊂''
    :field public Sections←0⍴⊂''
    :field public IsURL←⍬

    ∇ make
      :Access public
      JQueryFn←Uses←'ejTab'
      :Implements constructor
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejTab'
      :Implements constructor
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
      IsURL←(⊃⍴Titles)⍴0
      InternalEvents←IntEvt
    ∇

    ∇ {title}AddTab content
      :Access public
      :If 0=⎕NC'title' ⋄ title←'Tab ',⍕1+⍴Titles ⋄ :EndIf
      Titles,←⊂title
      Sections,←⊂content
      IsURL←(⊃⍴Titles)↑IsURL
    ∇

    ∇ r←Render;sections;n;ids;i;section
      :Access public
      Content←''
      SetId
      :If ~0∊⍴Titles
          sections←(n←⊃⍴Titles)↑Sections    ⍝ pad out or truncate
          IsURL←n↑IsURL
          ids←('#',id,'_section_')∘,∘⍕¨⍳⍴Titles
          (IsURL/ids)←IsURL/Sections
          (Container.Add _html.ul).Add¨Titles{⎕NEW #._html.li(⎕NEW #._html.a(⍺('href="',⍵,'"')))}¨ids
     
          :For i section :InEach ((~IsURL)∘/¨ids sections)
              Container.Add(i New #._html.div section)
          :EndFor
          :If ∨/IsURL
              'dataType' 'contentType' 'async'Set¨'html' 'html'#.JSON.true
          :EndIf
      :EndIf
      r←⎕BASE.Render
    ∇
:EndClass