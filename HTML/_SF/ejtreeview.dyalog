:class ejTreeView : #._SF._ejWidget
⍝ Description:: Syncfusion TreeView widget
⍝ Constructor::  [items [levels [links]]]
⍝ items  - vector of character vectors containing the tree node texts
⍝ levels - the levels of the corresponding items
⍝ links  - the href string to be used when the corresponding element is chosen (clicked)
⍝ Public Fields::
⍝ Items        - vector of character vectors containing the tree node texts
⍝ Levels       - the levels of the corresponding items
⍝ Links        - the href string to be used when the corresponding element is chosen (clicked)
⍝ MakeIds      - 1 to generate IDs
⍝ onNodeSelect - 1 to call APLJax, or the name of the callback function
⍝
⍝ Public Method to request model data to be return to the server::
⍝    r←name getModel subsel - Passes the TreeView model back as a variable called 'model' as input to a callback
⍝
⍝ Public Methods to be used in Callbacks::
⍝    r←addNode name - Will add a node with id "tv_n", where n starts at 0 and increases each time a node is added
⍝    r←removeNode node - Removes the identified node
⍝    r←checkAll - Check everything below the current node
⍝    r←checkNode node - Check a node
⍝    r←uncheckAll - Uncheck everything below the current node
⍝    r←uncheckNode node - Uncheck a node
⍝    r←expandAll - Expands everything below the current node
⍝    r←expandNode node - Expands everything below a node
⍝    r←collapseAll - Collapses everything below the current node
⍝    r←collapseNode node - Collapses everything below a node
⍝    r←selectNode node - Select a node
⍝    r←unselectNode node - Unselect a node
⍝

    :field public shared readonly DocBase←'http://help.syncfusion.com/js/api/ejTreeView.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejTreeView.html'
    :field public shared readonly IntEvt←'beforeCollapse' 'beforeEdit' 'beforeExpand' 'created' 'destroyed' 'inlineEditValidation' 'keyPress' 'nodeCheck' 'nodeClick' 'nodeCollapse' 'nodeDrag' 'nodeDragStart' 'nodeDragStop' 'nodeDropped' 'nodeExpand' 'nodeSelect' 'nodeUncheck'
    :field public Items←,⊂''
    :field public Levels←⍬
    :field public Links←,⊂''
    :field public MakeIds←0
    :field public onNodeSelect←0  ⍝ set to 1 to call APLJax, or the name of the callback function
 ⍝   :field public Ordered←0  ⍝ Ordered      - insert numbering before item names (1 1.1 1.1.1 2 etc.)


    ∇ make
      :Access public
      JQueryFn←Uses←'ejTreeView'
      :Implements constructor
      InternalEvents←IntEvt
      ContainerTag←'ul'
    ∇

    ∇ make1 args;fixed
      :Access public
      JQueryFn←Uses←'ejTreeView'
      :Implements constructor
      InternalEvents←IntEvt
      ContainerTag←'ul'
     
      fixed←FixArgs args
      Items Levels Links←↓⍉fixed,⍤1⊢(⊃⌽⍴fixed)↓'' 0 ''
    ∇

    ∇ r←Render;mat
      :Access Public
      mat←FixArgs Items Levels Links
     
      mat←((≢mat),4)↑mat,⊂''
      mat←mat[;2 1 4 3]
     
      mat[;2]←'\&#x([[:xdigit:]]+);'⎕R'\\u\1'⊢mat[;2]
      mat[;2]←'\&#(\d+);'⎕R{'\u',∊#.Utils.tohex⍎⍵.Match∩⎕D}mat[;2]
     
      SetId
      mat[;3]←id #.Utils.levels2ids mat[;1] ⍝ auto-generate node ids
     
⍝      mat[;2]←((,¨'_' '$')⎕R'.' '\&#8195;'⊢(1+≢id)↓¨mat[;3]),¨⍣Ordered⊢mat[;2] ⍝ add numbering if ordered
⍝
      :If onNodeSelect≢0
          On'nodeSelect'onNodeSelect('node' 'eval' 'JSON.stringify(argument.id)')
      :EndIf
      r←#.HTMLInput.JS id FormatItems mat
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
          :If ~0∊⍴items ⍝ Unnecessary, as we never get here if empty
              items,←isparent←{2</⍵,0}items[;1]
              items,←{⌽+/∨\(∘.<⍨⍳⍴⍵)∧∘.>⍨⌽⍵}items[;1]
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
                      r,←',link:"',url,'"'
                  :EndIf
                  r,←'},'
              :EndFor
              r←¯1↓r
          :EndIf
      :EndIf
      r,←'];'
    ∇

    :Section SF APIs
    ⍝ This section contains methods that are suitable results for call-back functions
    ⍝ which want to call Syncfusion API calls. The set of functions is not complete, please
    ⍝ see the Syncfusion documentation for details and feel free to implement additions

    ∇ r←addNode name
      ⍝ Will add a node with id "tv_n", where n starts at 0 and increases each time a node is added
      ⍝ /// NB due to a bug in the Syncfusion widget (August 2015), the "model" is not updated
      :Access Public
      SetId ⋄ r←Execute'$("#',id,'").data("ejTreeView").addNode("',name,'");'
    ∇

    ∇ r←removeNode node
      ⍝ Removes the identified node
      :Access Public
      SetId ⋄ r←Execute'$("#',id,'").data("ejTreeView").removeNode($("#',node,'"));'
    ∇

    ∇ r←checkAll
      ⍝ Check everything below the current node
      :Access Public
      SetId ⋄ r←Execute'$("#',id,'").data("ejTreeView").checkAll();'
    ∇

    ∇ r←checkNode node
      ⍝ Check a node
      :Access Public
      SetId ⋄ r←Execute'$("#',id,'").data("ejTreeView").checkNode($("#',node,'"));'
    ∇

    ∇ r←uncheckAll
      ⍝ Uncheck everything below the current node
      :Access Public
      SetId ⋄ r←Execute'$("#',id,'").data("ejTreeView").uncheckAll();'
    ∇

    ∇ r←uncheckNode node
      ⍝ Uncheck a node
      :Access Public
      SetId ⋄ r←Execute'$("#',id,'").data("ejTreeView").uncheckNode($("#',node,'"));'
    ∇

    ∇ r←expandAll
      ⍝ Expands everything below the current node
      :Access Public
      SetId ⋄ r←Execute'$("#',id,'").data("ejTreeView").expandAll();'
    ∇

    ∇ r←expandNode node
      ⍝ Expands everything below a node
      :Access Public
      SetId ⋄ r←Execute'$("#',id,'").data("ejTreeView").expandNode($("#',node,'"));'
    ∇

    ∇ r←collapseAll
      ⍝ Collapses everything below the current node
      :Access Public
      SetId ⋄ r←Execute'$("#',id,'").data("ejTreeView").collapseAll();'
    ∇

    ∇ r←collapseNode node
      ⍝ Collapses everything below a node
      :Access Public
      SetId ⋄ r←Execute'$("#',id,'").data("ejTreeView").collapseNode($("#',node,'"));'
    ∇

    ∇ r←selectNode node
      ⍝ Select a node
      :Access Public
      SetId ⋄ r←Execute'$("#',id,'").data("ejTreeView").selectNode($("#',node,'"));'
    ∇

    ∇ r←unselectNode node
      ⍝ Unselect a node
      :Access Public
      SetId ⋄ r←Execute'$("#',id,'").data("ejTreeView").unselectNode($("#',node,'"));'
    ∇

    ∇ r←name getModel subsel;model
      ⍝ Passes the TreeView model back as a variable called 'model' as input to a callback
      ⍝ Usage:     aButton.On 'click' 'onButtonClick' ('model' tvinstance.getModel '')
      :Access Public
      SetId ⋄ model←'model',(0≠⍴subsel)/'.',subsel ⍝ "model" or "model.subsel"
      r←(name'eval'('JSON.stringify($("#',id,'").ejTreeView("',model,'"))'))
    ∇

    :EndSection

    :section test
    ∇ r←test;c;m
      :Access public shared
      ⎕SHADOW,∊¨'cm'∘.,⊂¨⍕¨⍳14
     
      c1←'abc' 'def'                          ⍝
      m1←⍪c1
     
      c2←('abc' 'def')(1 2)                   ⍝
      m2←⍉↑c2
     
      c3←('abc' 'def')(1 2)('www' 'www1')     ⍝
      m3←⍉↑c3
     
      c4←2 1⍴⊂¨'abc' 'def'                    ⍝
      m4←c4
     
      c5←⍉↑('abc' 'def')(1 2)                 ⍝
      m5←c5
     
      c6←⍉↑('abc' 'def')(1 2)('www' 'www1')   ⍝
      m6←c6
     
      c7←('abc' 'def')1
      m7←⍉↑('abc' 'def')(1 1)
     
      c8←('abc' 'def')1('www' 'www1')
      m8←⍉↑('abc' 'def')(1 1)('www' 'www1')
     
      c9←('abc' 'def')(1 2)(,⊂'www')
      m9←⍉↑('abc' 'def')(1 2)('www' 'www')
     
      c10←('abc' 'def')(1 2)'www'
      m10←m9
     
      c11←('abc' 'def')1(,⊂'www')
      m11←⍉↑('abc' 'def')(1 1)('www' 'www')
     
      c12←('abc' 'def')1 'www'
      m12←m11
     
      c13←'abc' 1
      m13←1 2⍴c13
     
      c14←'abc' 1 'www'
      m14←1 3⍴c14
     
      r←⍬
      :For c m :InEach ↓∊¨'cm'∘.,⊂¨⍕¨⍳14
          r,←÷(⍎m)≡FixArgs⍎c
      :EndFor
    ∇

  ⍝  eis←{⊂⍣(1=≡⍵)⊢⍵}
    link←{(⊂⍺),eis ⍵}

    ∇ m←FixArgs c
      :If 2=≢⍴c ⍝ matrix
          m←c
          →0
      :EndIf
     
      :If (1=≢∪⎕DR¨c)∧∧/1≥|≡¨c  ⍝ 'abc' 'def'
          m←⍪,¨c
          →0
      :EndIf
     
      :If 1=≢∪≢¨c ⍝ ('abc' 'def') (1 2)
          m←⍉↑c
          →0
      :EndIf
     
      m←↑⊃link¨/eis¨c
     
    ∇



    :endsection
:EndClass
