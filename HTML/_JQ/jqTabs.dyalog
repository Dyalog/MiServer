:class jqTabs : #._JQ._jqUIWidget
⍝ Description:: jQueryUI Tabs widget
⍝
⍝ Constructor:: [titles [sections]] | [titles_sections]
⍝ titles          - vector of char vectors containing titles to appear on tabs
⍝ sections        - vector of vectors containing HTML content for each tab
⍝ titles_sections - 2-column matrix of titles [;1] and tabs [;2] as above
⍝                   or vector of 2 element title/tab vectors
⍝ Public Fields::
⍝ Titles          - vector of char vectors containing titles to appear on tabs
⍝ Sections        - vector of vectors containing HTML content for each tab
⍝ IsURL           - scalar or vector indicating if a section is a URL
⍝
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
      JQueryFn←'tabs'
      InternalEvents←IntEvt
    ∇

    ∇ Make1 args
      :Access public
      :Implements constructor
      JQueryFn←'tabs'
      InternalEvents←IntEvt
      
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

    ∇ {title}AddSection content
      :Access public
      :If 0=⎕NC'title' ⋄ title←'Section ',⍕1+⍴Titles ⋄ :EndIf
      Titles,←⊂title
      Sections,←⊂content
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

:endclass
