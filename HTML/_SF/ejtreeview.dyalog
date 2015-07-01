﻿:class ejTreeView : #._SF._ejWidget
⍝ Description: Syncfusion TreeView widget
⍝ Constructor: {id} [items]
⍝ id    - the id/name for the accordion
⍝ items - [;1] level [;2] name [;3] id [;4] link
⍝ Public Fields:
⍝ Items -
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

    ∇ r←Render
      :Access Public
      :If UNDEF≡id ⋄ id←GenId ⋄ :EndIf
      :If onNodeSelect≢0
          On'nodeSelect'onNodeSelect('node' 'eval' 'JSON.stringify(argument.value)')
      :EndIf
      r←#.HTMLInput.JS id FormatItems Items
      'fields'Set'⍎{dataSource: ',(id,'_data'),',id:"id",parentId:"pid",text:"name",hasChild:"hasChild",linkAttribute:"link"}'
      r,←⎕BASE.Render
    ∇

    ∇ r←id FormatItems items;isparent;pid;level;txt;iid;url;i;pind;p
      :Access public shared
      r←'var ',id,'_data = ['
      :If ~0∊⍴items
          :Select n←0⌈4-2⊃⍴items
          :CaseList 3 4
              :Return  ⍝ Not enough data to render ejTreeView
          :Case 2 ⍝ no ids or links
              items,←(id,'_item_')∘,∘⍕¨⍳1⊃⍴items ⍝ generate ids
              items,←⊂''
          :Case 1
              items,←⊂''
          :EndSelect
          :If ~0∊⍴items
              items,←isparent←{2</⍵,0}items[;1]
              items,←(~isparent)×(isparent/⍳⊃⍴items)[+\isparent]
              :For i :In ⍳⊃⍴items
                  (level txt iid url p pind)←items[i;]
                  r,←'{id:"',(⍕iid),'",name:"',txt,'"'
                  :If p ⍝ parent?
                      r,←',hasChild: true'
                  :EndIf
                  :If 0≠pind
                      r,←',pid:"',(⍕(⊂pind 3)⊃items),'"'
                  :EndIf
                  :If ~0∊⍴url
                      r,←'link:"',url,'"'
                  :EndIf
                  r,←'},'
              :EndFor
              r←¯1↓r
          :EndIf
          r,←'];'
      :EndIf
    ∇

:EndClass