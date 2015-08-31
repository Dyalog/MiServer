:Class ejTreeViewAdvanced : MiPageSample
⍝ Control:: _SF.ejTreeView
⍝ Description:: A TreeView with checkable nodes and the ability to add & delete nodes

    ∇ Compose;add;chk;del;exp;mod
      :Access Public
     
      tvid←'tv'      ⍝ id of the treeview we will create
      count←⊃⍴items←8 3⍴⊂'' ⍝ NB global, used by onAddBranch
      items[;1]←1 2 2 3 3 1 2 1                ⍝ Depth of nesting
      items[;2]←'Item '∘,∘⍕¨⍳8                 ⍝ Node texts
      items[;3]←(⊂tvid),∘⍕¨⍳count              ⍝ Original node ids are tvNNN
      checked←count⍴0
      added←0                                  ⍝ Count added nodes
      current←⍬                                ⍝ No current node
     
      tv←tvid New _.ejTreeView items
      ⍝ Enable checkboxes, but without auto-check of parents & children
      tv.Set('showCheckbox'_true)('autoCheck'_false)
      ⍝ Set up callbacks which all return the selected node as information
      {tv.On ⍵'onNode'('node' 'eval' 'argument.id')}¨'nodeSelect' 'nodeCheck' 'nodeUncheck'
     
      (add←'Add'New _.Button'Add Child').On'click' 'onBranch'
      (del←'Del'New _.Button'Delete').On'click' 'onBranch'
      (exp←'Exp'New _.Button'Expand All').On'click' 'onBranch'
      (chk←'Chk'New _.Button'Toggle').On'click' 'onBranch'
      (mod←'Mod'New _.Button'Display Model(s)').On'click' 'onModel'('model'tv.getModel'')
     
      ⍝ Create layout: TreeView on left, buttons vertically on the right
      (Add _.StackPanel tv(New _.StackPanel add del exp chk mod)('tvModel'New _.div)).Horizontal←1
      'output'Add _.div ⍝ Add a place to output messages
    ∇

    ∇ r←onNode;index;item;on
      ⍝ Handle node select or check/uncheck
      :Access Public
     
      current←Get'node'
      item←⊃items[index←items[;3]⍳⊂current;2]
     
      :Select _event
      :Case 'nodeSelect'
          r←'#output'Replace _.p('Node "',item,'", id="',current,'"')
      :CaseList 'nodeCheck' 'nodeUncheck'
          checked[index]←_event≡'nodeCheck' ⍝ On or off
          r←'#output'Replace _.p((⍕+/checked),' nodes checked.')
      :EndSelect
    ∇

    ∇ r←onBranch;exec;id;index;insert;m;name
      ⍝ Add to, or delete current branch
      :Access Public
     
      :If 0=⍴current ⋄ index←depth←0
      :Else ⋄ index←items[;3]⍳⊂current ⋄ depth←items[index;1]
      :EndIf
      r←⍬
     
      :Select _what
     
      :Case 'Add'
          id←'tv_',⍕added ⍝ SyncFusion will give new nodes these id's
          added+←1
          name←'Added Item ',⍕added
     
          r←tv.addNode name
          insert←index+(index↓items[;1])⍳depth ⍝ Insertion point will be just before next node at same level
          m←insert≠⍳1+1↑⍴items ⍝ Expansion mask
          items←m⍀items ⋄ checked←m\checked
          items[insert;]←(1+depth)name id
     
      :Case 'Del'
          :If index≠0
              r←tv.removeNode current
              m←index≠⍳1↑⍴items
              m[index+⍳+/∧\index↓items[;1]>items[index;1]]←0 ⍝ Child nodes will go too
              items←m⌿items ⋄ checked←m/checked
              current←⍬ ⍝ No current node
          :EndIf
     
      :Case 'Exp'
          r←tv.expandAll
     
      :Case 'Chk'
          :If 0≠index
              checked[index]≠←1 ⍝ toggle
              :If checked[index] ⋄ r←tv.checkNode current
              :Else ⋄ r←tv.uncheckNode current
              :EndIf
          :EndIf
     
      :Else
          ∘∘∘
      :EndSelect
     
      r,←'#tvModel'Replace''
    ∇
    
    ∇ r←onModel;ckd;depth;depths;ids;names;ns;parent;t;t1;t2
      :Access Public
      ⍝ Display the model
     
      ns←Get'model'                    ⍝ tv.getModel causes "model" to be returned
      (ids names parent)←↓[1]↑ns.fields.dataSource.(id name({0::'' ⋄ pid}0))
      ckd←(⍳⍴ids)∊1+ns.checkedNodes    ⍝ nodes checked according to model
      ((~parent∊ids,⊂'')/parent)←⍬⍴ids ⍝ patch up any invalid parents to point to first node (paranoia)
      depths←0=⊃∘⍴¨parent              ⍝ Find top level nodes
      depth←1
      :While (0∊depths)∧depth<99
          depths[(parent∊(depths=depth)/ids)/⍳⍴ids]←depth+1 ⍝ Find next set of descendents
          depth←depth+1
      :EndWhile
     
      t1←'Depth' 'Name' 'ID' 'Checked'⍪items,checked         ⍝ Server-side model
      t2←'Depth' 'Name' 'ID' 'Checked'⍪depths,names,ids,⍪ckd ⍝ Model returned by JavaScript call
     
      :If t1≡t2 ⋄ t←2 1⍴'Server≡Browser'(New _.Table t1)     ⍝ They should be identical
      :Else ⋄ t←2 2⍴'Server' 'Browser',{New _.Table ⍵}¨t1 t2 ⍝ But addNode doesn't maintain the JS model
      :EndIf
     
      r←'#tvModel'Replace(New _.Table t)
    ∇

:EndClass