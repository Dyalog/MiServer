﻿:class Tabs : #._html.div
⍝ Description:: Dyalog Tabs widget
⍝ Constructor:: [titles [sections]] | [titles_sections]
⍝ titles          - vector of char vectors containing titles to appear on tabs
⍝ sections        - vector of vectors containing HTML content for each tab
⍝ titles_sections - 2-column matrix of titles [;1] and tabs [;2] as above
⍝                   or vector of 2 element title/tab vectors
⍝ Public Fields::
⍝ Titles          - vector of char vectors containing titles to appear on tabs
⍝ Sections        - vector of vectors containing HTML content for each tab
⍝ Theme           - base color for the color theme (default '#808080')
⍝ Examples::
⍝ Tabs 'Title1' 'Title2'
⍝ Tabs ('Title1' 'Title2')('Section1' 'Section2')
⍝ Tabs 2 2⍴'Title1' 'Section1' 'Title2' 'Section2'
⍝ Notes::
⍝    - This control is implemented in HTML+CSS without any JavaScript and is therefore
⍝   extremely lightwight, resulting in faster load times. However, this comes at the
⍝   cost of fewer features compared to competing controls. Use it if you just need
⍝   basic Tabs.

    :field public shared readonly ApiLevel←3
    :Field public Titles←0⍴⊂''
    :Field public Sections←0⍴⊂''
    :Field public Theme←'#000000' ⍝ "Black"

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
          Content,←'<div id="',n,'s">',(RenderCore section),'</div>'
      :EndFor
     
      r←⎕BASE.Render
     
      ⍝ Create color scheme based on the Theme color
     
      ⍝ Specific CSS
      r,←'<style scoped="scoped">'
      r,←'#',id,' > input[type="radio"] + label {color: ',(Mix⊂Theme),';}'
      r,←'#',id,' > input[type="radio"] + label:hover, '
      r,←'#',id,' > input[type="radio"]:checked + label {border-color: ',(Mix⊂Theme),';}'
      r,←'#',id,' > input[type="radio"]:focus + label {background:',(0.1 Mix⊂Theme),'}'
      r,←'#',id,' > div {border-top: solid 1px ',(0.7 Mix⊂Theme),'; margin-top: -1px;}'
      :For n :In numbers
          r,←'#',n,'t:checked~#',n,'s,'
      :EndFor
      r↓⍨←¯1
      r,←'{display:block;}</style>'
    ∇

      Mix←{ ⍝ Arithmetic mean of multiple hex colors with optional ⍺
          ⎕IO←0
          h←⎕D,6↑⎕A
          rgb←⌊0.5+(⊃+/÷≢){16⊥⍉h⍳3 2⍴⍵/⍨6÷≢⍵}¨#.Strings.uc ⍵~¨⊂' #'
          ⍺←1
          'rgba(',(1↓∊(',',⍕)¨rgb,⍺),')'
      }

:endclass
