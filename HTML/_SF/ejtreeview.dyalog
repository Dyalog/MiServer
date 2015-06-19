:class ejTreeView : #._SF._ejWidget
⍝ Description: Syncfusion TreeView widget
⍝ Constructor: {id} [items]
⍝ id    - the id/name for the accordion
⍝ items - vector of char vectors containing titles to appear on accodion sections
⍝ Public Fields:
⍝ Items - vector of char vectors containing titles to appear on accodion
    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejTreeView.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejTreeView.html'
    :field public Items←⍬
    :field public onNodeSelect←0  ⍝ set to 1 to call APLJax, or the name of the calback function

    ∇ make
      :Access public
      JQueryFn←Uses←'ejTreeView'
      :Implements constructor
      ContainerType←'ul'
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejTreeView'
      :Implements constructor :base args
      ContainerType←'ul'
      :If 1<⍴args←eis args
          Items←2⊃args
      :EndIf
    ∇

    ∇ r←Render;ns;items;n
      :Access Public
      r←''
      items←Items
      :If UNDEF≡id ⋄ id←GenId ⋄ :EndIf
      :Select n←0⌈4-2⊃⍴items
      :CaseList 3 4
          :Return  ⍝ Not enough data to render ejTreeView
      :Case 2 ⍝ no ids or links
          items,←(id,'_item_')∘,∘⍕¨⍳1⊃⍴items ⍝ generate ids
          items,←⊂''
      :Case 1
          items,←⊂''
      :EndSelect
⍝      r←(⎕NEW #._HTML.Script('var ',id,'_data =',(FormatItems items),';')).Render
⍝      (ns←⎕NS'').(dataSource id parentId text hasChild linkAttribute)←'⍎tv_data' 'id' 'pid' 'text' 'hasChild' 'url'
⍝      'fields'Set'⍎',#.JSON.toJQueryParameters ns
      Container.Content←''
      containers←,Container
      :If ~0∊⍴Items
          parent←{2</⍵,0}Items[;1]
          pop←{-0⌈2-/⍵,¯1+⌊/⍵}Items[;1]
          :For i :In ⍳⊃⍴Items
              (level txt id url)←4↑Items[i;],'' '' ''
              li←(⊃¯1↑containers).Add #._html.li
              li.id←id
              :If 0∊⍴url
                  li.Add txt
              :Else
                  li.Add #._html.a txt('href'url)
              :EndIf
              :If parent[i]
                  containers,←li.Add #._html.ul
              :EndIf
              containers←pop[i]↓containers
          :EndFor
      :EndIf
      :If onNodeSelect≢0
          On'nodeSelect'onNodeSelect('node' 'eval' 'JSON.stringify(argument.value)')
      :EndIf
      r,←⎕BASE.Render
    ∇

    ∇ r←FormatItems items
      :Access public shared
      r←⎕NS¨(⊃⍴items)⍴⊂''
      r.id←items[;3]
      {}r{0∊⍴⍵:'' ⋄ ⍺.pid←⊃⍵}¨⌽r.id∘{⍵/⍺}¨↓{⌽<\⍵∧∨\(⍴⍵)⍴(1+¯1↑⍴⍵)↑1}∘.>⍨⌽items[;1]
      r[r.id⍳(⊂'')~⍨∪r{0::'' ⋄ ⍺⍎⍵}¨⊂'pid'].hasChild←#.JSON.true
      r.name←items[;2]
      {}r{0∊⍴⍵:'' ⋄ ⍺.linkAttribute←⊃⍵}¨items[;4]
      r←#.JSON.fromAPL r
    ∇

:EndClass