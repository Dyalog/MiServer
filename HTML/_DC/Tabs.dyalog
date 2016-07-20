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
      :Implements constructor
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

    ∇ r←Render;title;section;numbers;n
      :Access public
      SetId
      SetUse
      AddClass'dc-tabs'
      numbers←('dc-tabs-',id,'_','_',⍨⍕)¨⍳≢Sections
      
      ⍝ HTML structure
      Content←''

      :For title n :InEach Titles numbers
          :If isRef title ⋄ title←title.Render ⋄ :EndIf
          Content,←'<input type="radio" name="',id,'" id="',n,'t"'
          :If n≡⊃numbers ⋄ Content,←' checked="checked"' ⋄ :EndIf
          Content,←'/><label for="',n,'t">',title,'</label>'
      :EndFor

      :For section n :InEach Sections numbers
          :If isRef section ⋄ section←section.Render ⋄ :EndIf
          Content,←'<div id="',n,'s">',section,'</div>'
      :EndFor
 
      r←⎕BASE.Render

      ⍝ Specific CSS
      r,←'<style>'
      :For n :In numbers
          r,←'#',n,'t:checked ~ #',n,'s, '
      :EndFor
      r↓⍨←¯2
      r,←'{display: block;}</style>'
    ∇
:endclass
