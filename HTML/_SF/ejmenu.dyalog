  :class ejMenu : #._SF._ejObject
    :field public shared readonly ApiLink←'http://help.syncfusion.com/UG/JS_CR/ejMenu.html'
    :field public shared readonly ApiLevel←1

    :field public Items←⍬
    :field public Text←'Menu'
    :field public Href←'#'

    ∇ make
      :Access public
      JQueryFn←Uses←'ejMenu'
      ContainerType←'ul'
      :Implements constructor
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejMenu'
      ContainerType←'ul'
      AddItem args
      :Implements constructor
    ∇

    ∇ {r}←AddItem args;text;href
      :Access public
      args←eis args
      text href←2↑args,(⍴args)↓'Menu Item' '#'
      Items,←r←⎕NEW MenuItem(text href)
    ∇

    ∇ r←Render;link;i;li
      :Access public
      :For i :In Items
        Add i.Render
      :EndFor
      r←⎕BASE.Render
    ∇

    :class MenuItem : #._html.li
      :field public Text
      :field public Items←⍬
      :field public Href

      ∇ make(text href)
        :Access public
        :Implements constructor
        Text←text
        'href'SetAttr href
      ∇

      ∇ {r}←AddItem args;text;href
        :Access public
        args←eis args
        text href←2↑args,(⍴args)↓'Menu Item' '#'
        Items,←r←⎕NEW MenuItem(text href)
      ∇

      ∇ r←Render;link;i
        :Access public
        (Add #._html.a).SetAttr'href'Href
        :For i :In Items
          :If ~0∊⍴i.Items
            (Add #._html.ul).Add i.Render
          :EndIf
        :EndFor
        r←⎕BASE.Render
      ∇

    :endclass

  :EndClass