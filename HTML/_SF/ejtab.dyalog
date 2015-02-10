  :class ejTab : #._SF._ejObject
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejTab.html'
    :field public shared readonly ApiLevel←1

    :field public Titles←0⍴⊂''
    :field public Sections←0⍴⊂''

    ∇ make
      :Access public
      JQueryFn←Uses←'ejTab'
      :Implements constructor
    ∇

    ∇ {r}←{title}AddTab content
      :Access public
      :If 0=⎕NC'title' ⋄ title←'Tab ',⍕1+⍴Titles ⋄ :EndIf
      Titles,←⊂title
      Sections,←r←⎕NEW _html.div content
    ∇

    ∇ r←Render;urls;ids;sections;id;section
      :Access public
      :If ~0∊⍴Titles
        sections←(⊃⍴Titles)↑Sections
        urls←#.Files.LikelyURL¨sections
        ids←'#ejTab'∘,∘⍕¨⍳⍴Titles
        (urls/ids)←urls/Sections
        (ControlContent.Add _html.ul).Add¨Titles{⎕NEW _html.li(⎕NEW _html.a(⍺('href="',⍵,'"')))}¨ids
        :For id section :InEach ids sections
          :If '#'=1↑id
            (ControlContent.Add section).id←1↓id
          :EndIf
        :EndFor
        :If ∨/urls
          'dataType' 'contentType' 'async'Option¨'html' 'html'#.JSON.true
        :EndIf
      :EndIf
      r←⎕BASE.Render
    ∇

  :EndClass