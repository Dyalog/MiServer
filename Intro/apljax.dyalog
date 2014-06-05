:Class apljax : MiPage

    :Include #.HTMLInput

    NL←⎕UCS 13 10

    :field public s1
    :field public s2
    list1←'To Do' 'Wash Car' 'Vacuum' 'Laundry' 'Cut Grass' 'Clean Garage'
    list2←'Done' 'Go Fishing'
    ids←'s1' 's2'


    ∇ Render req;sortable;html;script;form;ajax;tmp;data
      :Access Public
      sortable←(BRA'Drag items between lists'),req #.JQUI.Sortable 1 ids(list1 list2)'' '' '' 1
      sortable←'div style="height:400px"'Enclose('h2'Enclose'Sortable Lists'),sortable
      html←('h2'Enclose'APLJax Demo - Watch the Server'),sortable
      req.Return html
    ∇

    ∇ APLJax req
      :Access Public
      ⎕←'New Lists Are:'
      (s1 s2)←parse¨s1 s2
      ⎕←↑¨(1↑¨list1 list2),¨{0::'' ⋄ ⍵⊃(list1 list2)}¨¨s1 s2
    ∇

    ∇ r←parse str
      :If 0∊⍴str
          r←0⍴⊂1 1
      :Else
          r←str~'[]'
          r←{1↓¨(⍵=⊃⍵)⊂⍵}' ',{⍵{⍵\⍵/⍺}~⍵∊'=&'}r
          r←((0.5×⍴r),2)⍴r
          r[;2]←{⊃⊃(//)⎕VFI ⍵}¨r[;2]
          r[;1]←ids⍳r[;1]
          r←↓r
      :End
    ∇

:EndClass