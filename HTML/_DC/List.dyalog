:Class List : #._html.ul
    ⍝ Description:: Enhanced HTML ul
    ⍝ Constructor:: [items [levels [links]]]
    ⍝ items     - vector of texts for the list
    ⍝ levels    - optional vector of levels
    ⍝ links     - optional anchor links
    ⍝      OR     matrix [;1] items [;2] levels [;3] links
    ⍝ Public Fields::
    ⍝ Items     - vector of texts for the list
    ⍝ Levels    - optional vector of levels
    ⍝ Links     - optional anchor links
    ⍝ MakeIds   - 1 to assign ids to list items
    ⍝ Ordered   - 1 to make ordered (numbered) list
    ⍝ Examples::
    ⍝ Ul (⊂'Item 1' 'Item 2' 'Item 3')                       ⍝ needs to be enclosed if vector
    ⍝ Ul (('One' 'Two')('http:/one.com' 'http://two.com'))
    ⍝ Ul (('One' 'Two')(('http:/one.com' 'target=_blank') 'http://two.com')) ⍝ Link can have attributes


    :Field Public Items←⍬         ⍝ vector or
    :Field Public Levels←1        ⍝
    :Field Public Links←⍬         ⍝ hyperlinks
    :Field Public MakeIds←0
    :Field Public Ordered←0

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
      (Items Levels Links)←args defaultArgs Items Levels Links
    ∇

    ∇ r←Render;i;link;links;opt;opts;text;n;ids;mat;diff;ul;xp
      :Access public
      Tag←'ol'⊣⍣Ordered⊢'ul'
      SetId
     
      n←≢Items
     
      :If ~0∊n
          opts←{isRef ⍵:⍵ ⋄ HtmlSafeText ⍵}¨eis Items
          links←(⍴Items)↑(eis Links),(⍴Items)⍴⊂''
          text←opts
          opts←⍬
          :For i link :InEach (⍳⍴links)links
              :If ''≡link ⍝ no link
                  opt←text[i]
              :ElseIf 326=⎕DR link ⍝ Nested array
                  (opt←(⊂'href'(⊃link))New _.a(i⊃text)).Set 1↓link
              :Else ⍝ no attrs
                  opt←(⊂'href'link)New _.a(i⊃text)
              :EndIf
              opts,←opt
          :EndFor
     
      :EndIf
     
      mat←⎕XML∊{isRef ⍵:⍵.Render ⋄ '<span>',⍵,'</span>'}¨opts
     
      Levels⍴⍨←n
      diff←0,¯2-/Levels
      ul←≠\2/diff>0           ⍝ Step up: new ul
     
      ids←{'id'⍵}¨id #.Utils.levels2ids Levels
     
      i←⍋⍋(2×n)⍴0 1
      mat←(,Levels∘.+0 1),(((n 2⍴'li' ''),ids)⍪mat[;1+⍳3])[i;]
     
     ⍝ We now insert ul/ols where they belong
      xp←~ul←≠\(1+ul)/ul ⋄ n←≢i←ul/⍳⍴ul
      mat←xp⍀mat
      mat[i;]←mat[i-1;1],n 3⍴Tag'' '' ⍝ same as level before
      mat[;1]+←+\xp\,0,⍨⍪diff           ⍝ the others get corrected
     
     ⍝ Finally we adjust the level number so it starts a 0
      mat[;1]-←1⍴mat
      Add ⎕XML mat                        ⍝ and use ⎕XML to format nicely
     
      r←⎕BASE.Render
    ∇

:endclass
