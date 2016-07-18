:Class Ul : #._html.ul
    ⍝ Description:: Enhanced HTML ul
    ⍝ Constructor:: [items [links]]
    ⍝ items     - vector of texts for the list
    ⍝ links     - optional anchor links
    ⍝ Public Fields::
    ⍝ Items     - vector of texts for the list
    ⍝ Links     - optional anchor links
    ⍝ Examples::
    ⍝ Ul (⊂'Item 1' 'Item 2' 'Item 3')                       ⍝ needs to be enclosed if vector
    ⍝ Ul (('One' 'Two')('http:/one.com' 'http://two.com'))
    ⍝ Ul (('One' 'Two')(('http:/one.com' 'target=_blank') 'http://two.com')) ⍝ Link can have attributes


    :Field Public Items←⍬         ⍝ vector or matrix [;1] Items [;2] Links
    :Field Public Links←⍬         ⍝ hyperlinks

    ∇ make
      :Access Public
      :Implements constructor
    ∇

    ∇ make1 args;attr
      :Access public
      :Implements constructor
      :Select ⊃⍴⍴args ⍝ Select on Rank
      :Case 1         ⍝ Vector
          :If 0 2∊⍨10|⎕DR⊃args ⍝ 1st element is simple char
              args←,⊂args
          :EndIf      ⍝ Matrix
      :Case 2 ⋄ args←↓[1]args ⍝ Split columns
      :Else
      :EndSelect
      args←eis args
      (Items Links)←2↑args,(⍴args)↓Items Links
    ∇

    ∇ r←Render;i;link;links;opt;opts;text;n
      :Access public
      SetId
      :If ~0∊n←⍴Items
          opts←{isRef ⍵:⍵ ⋄ HtmlSafeText ⍵}¨eis Items
          :If ~0∊⍴Links
              links←(⍴Items)↑Links,(⍴Items)⍴⊂''
              text←opts
              opts←⍬
              :For i :In ⍳⍴links
                  :If 326=⎕DR link←i⊃links ⍝ Nested array
                      (opt←(⊂'href'(⊃link))New _.a(i⊃text)).Set 1↓link
                  :Else
                      opt←(⊂'href'link)New _.a(i⊃text)
                  :EndIf
                  opts,←opt
              :EndFor
          :EndIf
          ({id,'_',⍕⍵}¨⍳n)Add¨↓_.li,⍪opts
      :EndIf
      r←⎕BASE.Render
    ∇

:endclass