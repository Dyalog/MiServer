:class ejMenu : #._SF._ejObject

    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejMenu.html'
    :field public shared readonly ApiLevel←1

    :field public Items←⍬
    :field public Text←'Menu'
    :field public Href←'#'   
    
   ⍝ A menu consists of a series of elements that are Strings or menu Items
   ⍝ Each element has an anchor which may or may not have an href

   ⍝ Given the following menu structure (level, description, action):
   ⍝ 1 MK       ↓
   ⍝ 2  BB     #loc
   ⍝ 2  DB      ↓
   ⍝ 3   AB    apl.dk
   ⍝ 3   RH    apl.ca
   ⍝ 1 GC       ↓
   ⍝ 2  HB     #accounts
   ⍝ 2  BC     s.r.us

   ⍝ Example:
   ⍝   M←⎕NEW ejMenu ((1 2 2 3 3 1 2 2)('MK' 'BB' 'DB' 'AB' 'RH' 'GC' 'HB' 'BC')(⍬ '#loc' ⍬ 'apl.dk' 'apl.ca' ⍬ '#accounts' 's.r.us'))

    ∇ make
      :Access public
      JQueryFn←Uses←'ejMenu'
      ContainerType←'ul'
      (Level Text Href)←⊂⍬
      :Implements constructor
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejMenu'
      ContainerType←'ul'
      :If 2=|≡args ⋄ args←⊂¨args ⋄ :EndIf
      (Level Text Href)←3↑args,⊂(⍴1⊃args)⍴⊂''
      :Implements constructor
    ∇

    ∇ {r}←AddItem args;text;href
      :Access public
      :If 2=|≡args ⋄ args←⊂¨args ⋄ :EndIf
      (Level Text Href),←3↑args,⊂⊂r←''
    ∇

    ∇ r←MakeTree(level txt href);ul;mat;n;i;xp;addid;diff;id
     ⍝ Produce an XML form of a tree specified as level, text and references
      →0↓⍨n←⍬⍴⍴r←level        ⍝ 0 element case
      diff←0,¯2-/level
      ul←≠\2/diff>0           ⍝ Step up: new ul
     ⍝ If the text starts with * it is used as id
      addid←'*'=⊃¨txt ⋄ txt←addid↓¨txt
      (href id)←'href' 'id'{⍺∘{(2,⍨⍵∨.≠' ')⍴⍺ ⍵}¨⍵}¨(⍕¨href)(addid/¨txt)
     ⍝ All <li>s have an <a> embedded so we duplicate the lot
      i←⍋⍋(2×n)⍴0 1
      mat←(,level∘.+0 1),(((n 2⍴'li' ''),id)⍪'a',txt,⍪href)[i;]
     ⍝ We now insert ULs where they belong
      xp←~ul←≠\(1+ul)/ul ⋄ n←⍬⍴⍴i←ul/⍳⍴ul
      mat←xp⍀mat
      mat[i;]←mat[i-1;1],n 3⍴'lu' '' '' ⍝ same as level before
      mat[;1]+←+\xp\,0,⍨⍪diff           ⍝ the others get corrected
     ⍝ Finally we adjust the level number so it starts a 0
      mat[;1]-←1⍴mat
      r←⎕XML mat                        ⍝ and use ⎕XML to format nicely
    ∇


    ∇ r←Render;link;i;li
      :Access public
      Container.Content←MakeTree Level Text Href
      r←⎕BASE.Render
    ∇

:EndClass