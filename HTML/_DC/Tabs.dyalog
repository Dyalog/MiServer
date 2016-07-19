:class Tabs : #._html.div
⍝ Description:: Dyalog Tabs widget
⍝ Constructor:: [titles [sections]] | [titles_sections]
⍝ titles          - vector of char vectors containing titles to appear on tabs
⍝ sections        - vector of vectors containing HTML content for each tab
⍝ titles_sections - 2-column matrix of titles [;1] and tabs [;2] as above
⍝                   or vector of 2 element title/tab vectors
⍝ Public Fields::
⍝ Titles          - vector of char vectors containing titles to appear on tabs
⍝ Sections        - vector of vectors containing HTML content for each tab
⍝ Examples::
⍝ Tabs 'Title1' 'Title2'
⍝ Tabs ('Title1' 'Title2')('Section1' 'Section2')
⍝ Tabs 2 2⍴'Title1' 'Section1' 'Title2' 'Section2'

    :field public shared readonly ApiLevel←3
    :Field public Titles←0⍴⊂''
    :Field public Sections←0⍴⊂''

    ∇ Make
      :Access public
      :Implements constructor
      Uses←'dcTabs'
    ∇

    ∇ Make1 args
      :Access public
      :Implements constructor :base args
      Uses←'dcTabs'
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

    ∇ r←Render;title;section;numbers;n;group
      :Access public
      group←2↓GenId
      numbers←{2↓GenId}¨Sections
      
      ⍝ HTML structure
      r←'<div class="dc-tabs">'
      :For title n :InEach Titles numbers
          :If isRef title ⋄ title←title.Render ⋄ :EndIf
          r,←'<input type="radio" name="dc-tabs',group,'" id="dc-tabT',n,'" '
          :If n≡⊃numbers ⋄ r,←' checked="checked"' ⋄ :EndIf
          r,←'/><label for="dc-tabT',n,'">',title,'</label>'
      :EndFor
      :For section n :InEach Sections numbers
          :If isRef section ⋄ section←section.Render ⋄ :EndIf
          r,←'<div id="dc-tabS',n,'">',section,'</div>'
      :EndFor
      r,←'</div>'
     
      ⍝ CSS This matchs tabs displaying to their associated radio inputs
      r,←'<style>'
      :For n :In numbers
          r,←'#dc-tabT',n,':checked ~ #dc-tabS',n,', '
      :EndFor
      r↓⍨←¯2
      r,←'{display: block;}</style>'
    ∇
:endclass
