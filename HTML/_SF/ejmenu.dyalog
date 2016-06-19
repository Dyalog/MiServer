:class ejMenu : #._SF._ejWidget
⍝ Description:: Syncfusion Menu widget
⍝ Constructor:: [items [levels [links]]]
⍝ items   - vector of char vectors containing the menu item caption
⍝ levels  - the level of the corresponding item
⍝ links   - the HREF string to be used when the corresponding element is chosen (clicked)
⍝ Public Fields::
⍝ Items   - vector of char vectors containing the menu item caption
⍝ Levels  - the level of the corresponding item
⍝ Links   - the HREF string to be used when the corresponding element is chosen (clicked)
⍝ MakeIds - 1 makes ids in the format myid_1_2

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejMenu.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejMenu.html'
    :field public Levels←1
    :field public Items←⍬
    :field public Links←⍬
    :field public MakeIds←0  

    ∇ make
      :Access public
      JQueryFn←Uses←'ejMenu'
      ContainerTag←'ul'
      (Items Levels Links)←⊂⍬
      :Implements constructor
    ∇

    ∇ make1 args
      :Access public
      :Implements constructor
      JQueryFn←Uses←'ejMenu'
      ContainerTag←'ul'
     
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

    ∇ {r}←AddItem args
      :Access public ⍝ Obs: max 1
      (Items Levels Links),←args defaultArgs'' 1 ''
    ∇


    ∇ r←Render;i;link;links;opt;opts;text;n;ids;mat;diff;ul;xp
      :Access public
      Tag←'ul'
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
     
      r←(id New _.ul(⎕XML mat)).Render  ⍝ and use ⎕XML to format nicely
     
      r,←⎕BASE.Render
    ∇

:EndClass
