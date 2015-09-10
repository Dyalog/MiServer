:class ejTreeView : #._SF._ejWidget
⍝ Description:: Syncfusion TreeView widget
⍝ Constructor::  [items]
⍝ items - [;1] level [;2] name [;3] id [;4] link
⍝
⍝ Public Fields::
⍝ Items - [;1] level [;2] name [;3] id [;4] link 
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


    :field public shared readonly DocBase←'http://help.syncfusion.com/UG/JS_CR/ejTreeView.html'
    :field public shared readonly ApiLevel←3
    :field public shared readonly DocDyalog←'/Documentation/DyalogAPIs/Syncfusion/ejTreeView.html'
    :field public shared readonly IntEvt←'beforeCollapse' 'beforeEdit' 'beforeExpand' 'created' 'destroyed' 'inlineEditValidation' 'keyPress' 'nodeCheck' 'nodeClick' 'nodeCollapse' 'nodeDrag' 'nodeDragStart' 'nodeDragStop' 'nodeDropped' 'nodeExpand' 'nodeSelect' 'nodeUncheck'
    :field public Items←⍬
    :field public onNodeSelect←0  ⍝ set to 1 to call APLJax, or the name of the callback function
        
    ∇ make
      :Access public
      JQueryFn←Uses←'ejTreeView'
      :Implements constructor
      InternalEvents←IntEvt
    ∇

    ∇ make1 args
      :Access public
      JQueryFn←Uses←'ejTreeView'
      :Implements constructor
      InternalEvents←IntEvt
      ContainerType←'ul'
      Items←args
    ∇

    ∇ r←Render
      :Access Public
      SetId
      :If onNodeSelect≢0
          On'nodeSelect'onNodeSelect('node' 'eval' 'JSON.stringify(argument.id)')
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
                      r,←'link:"',url,'"'
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
    ⍝ which want to call SyncFusion API calls. The set of functions is not complete, please
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
    
:EndClass
