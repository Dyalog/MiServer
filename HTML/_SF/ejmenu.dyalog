:class ejMenu : #._SF._ejWidget
⍝ Description:: Syncfusion Menu widget
⍝ Constructor:: Items [Levels [Hreferences]]
⍝ Items       vector of char vectors containing the menu item caption
⍝ Levels      the level of the corresponding item
⍝ Hreferences the HREF string to be used when the corresponding element is chosen (clicked)

    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejMenu.html'
    :field public shared readonly ApiLevel←1
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejMenu.html'
    :field public Items←⍬
    :field public Text←'Menu'
    :field public Href←'#'

⍝ A menu consists of a series of elements that are Strings or other menu Items
⍝ Each element has an anchor which may or may not have an href.
⍝ 
⍝ Example: given the following menu structure (level, description, action):
⍝ 1 MK       ↓
⍝ 2  BB     #loc
⍝ 2  DB      ↓
⍝ 3   AB    apl.dk
⍝ 3   RH    apl.ca
⍝ 1 GC       ↓
⍝ 2  HB     #accounts
⍝ 2  BC     s.r.us
⍝
⍝ If the menu item starts with a star (*) then the ID of the menu items is the same as the caption
⍝  
⍝   M←⎕NEW ejMenu (('*MK' 'BB' 'DB' 'AB' 'RH' '*GC' 'HB' 'BC') (1 2 2 3 3 1 2 2) (⍬ '#loc' ⍬ 'apl.dk' 'apl.ca' ⍬ '#accounts' 's.r.us'))
⍝
 
    ∇ make
      :Access public
      JQueryFn←Uses←'ejMenu'
      ContainerTag←'ul'
      (Text Level Href)←⊂⍬
      :Implements constructor
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejMenu'
      ContainerTag←'ul'
      :If 3=|≡args
          (Text Level Href)←args defaultArgs(0⍴⊂'')(⍬)(0⍴⊂'')
      :Else
          Href←{''}¨Level←{0}¨Text←eis args
      :EndIf
     
      :Implements constructor 
    ∇

    ∇ {r}←AddItem args;text;href
      :Access public ⍝ Obs: max 1
      (Text Level Href),←args defaultArgs'' 0 ''
    ∇
    
    ∇ r←MakeTree(txt level href);ul;mat;n;i;xp;addid;diff;id
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
      mat[i;]←mat[i-1;1],n 3⍴'ul' '' '' ⍝ same as level before
      mat[;1]+←+\xp\,0,⍨⍪diff           ⍝ the others get corrected
     
     ⍝ Finally we adjust the level number so it starts a 0
      mat[;1]-←1⍴mat
      r←⎕XML mat                        ⍝ and use ⎕XML to format nicely
    ∇
    
    ∇ r←Render
      :Access public
      Container.Add MakeTree Text Level Href
      r←⎕BASE.Render
    ∇

:EndClass