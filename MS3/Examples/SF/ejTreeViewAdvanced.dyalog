:Class ejTreeViewAdvanced : MiPageSample
⍝ Control:: _SF.ejTreeView
⍝ Description:: A TreeView with checkable nodes and the ability to add & delete nodes

    ∇ Compose;add;del;exp;mod;tv
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
     
      (add←'Add'New _.Button'Add Child Node').On'click' 'onBranch'
      (del←'Del'New _.Button'Delete Branch').On'click' 'onBranch'
      (exp←'Exp'New _.Button'Expand Children').On'click' 'onBranch'
      (mod←'Mod'New _.Button'Display Model').On'click' 'onModel'('treeModel' 'eval' 'JSON.stringify($("#tv").ejTreeView("model"))')
     
      ⍝ Create layout: TreeView on left, buttons vertically on the right
      (Add _.StackPanel tv(New _.StackPanel add del exp mod)('tvModel'New _.div)).Horizontal←1
      'output'Add _.div ⍝ Add a place to output messages
    ∇

    ∇ r←onNode;index;item;on
      ⍝ Handle node select or check/uncheck
      :Access Public
     
      current←⊃Get'node'
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
     
      :Select _what
     
      :Case 'Add'
          id←'tv_',⍕added ⍝ SyncFusion will give new nodes these id's
          added+←1
          name←'Added Item ',⍕added
     
          exec←'$("#tv").data("ejTreeView").addNode("',name,'");' ⍝ Adds child of current node
          insert←index+(index↓items[;1])⍳depth ⍝ Insertion point will be just before next node at same level
          m←insert≠⍳1+1↑⍴items ⍝ Expansion mask
          items←m⍀items ⋄ checked←m\checked
          items[insert;]←(1+depth)name id
     
      :Case 'Del'
          exec←'$("#tv").data("ejTreeView").removeNode($("#',current,'"));'
          m←index≠⍳1↑⍴items
          m[index+⍳+/∧\index↓items[;1]>items[index;1]]←0 ⍝ Child nodes will go too
          items←m⌿items ⋄ checked←m/checked
          current←⍬ ⍝ No current node
     
      :Case 'Exp'
          exec←'$("#tv").data("ejTreeView").expandAll();'
     
      :Else
          ∘∘∘
      :EndSelect
      r←Execute exec
    ∇
    
    ∇ r←onModel;checked;depth;depths;ids;names;ns;parent
      :Access Public
      ⍝ Display the model
     
      ns←#.JSON.toAPL∊Get'treeModel'
      (ids names parent)←↓[1]↑ns.fields.dataSource.(id name({0::'' ⋄ pid}0))
      checked←(⍳⍴ids)∊1+ns.checkedNodes
      ((~parent∊ids,⊂'')/parent)←⍬⍴ids ⍝ patch up any invalid parents to point to first node (paranoia)
      depths←0=⊃∘⍴¨parent ⍝ Find top level nodes
      depth←1
      :While (0∊depths)∧depth<99
          depths[(parent∊(depths=depth)/ids)/⍳⍴ids]←depth+1
          depth←depth+1
      :EndWhile
     
      r←'#tvModel'Replace _.Table('Depth' 'Name' 'ID' 'Checked'⍪depths,names,ids,⍪checked)
    ∇

:EndClass