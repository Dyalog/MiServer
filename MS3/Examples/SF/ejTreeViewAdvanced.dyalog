:Class ejTreeViewAdvanced : MiPageSample
⍝ Control:: _SF.ejTreeView
⍝ Description:: A TreeView with checkable nodes and the ability to add & delete nodes

    ∇ Compose;add;del;tv
      :Access Public
     
      count←⊃⍴items←8 3⍴⊂'' ⍝ NB global, used by onAddBranch
      items[;1]←1 2 2 3 3 1 2 1
      items[;2]←'Item '∘,∘⍕¨⍳8
      current←⊃items[;3]←'i',∘⍕¨⍳8
      checked←count⍴0
     
      tv←'tv'New _.ejTreeView items
      tv.Set('showCheckbox'_true)('autoCheck'_false)
      ⍝ Set up callbacks which all return the selected node as information
      {tv.On ⍵'onNode'('node' 'eval' 'argument.id')}¨'nodeSelect' 'nodeCheck' 'nodeUncheck'
     
      (add←'Add'New _.Button'Add').On'click' 'onBranch'
      (del←'Del'New _.Button'Del').On'click' 'onBranch'
     
      ⍝ Create layout: TreeView on left, buttons vertically on the right
      (Add _.StackPanel tv(New _.StackPanel add del)).Horizontal←1
      'output'Add _.div ⍝ Add a place to output messages
    ∇

    ∇ r←onNode;index;item;on
      ⍝ Node select or [un]check
      :Access Public
     
      current←⊃Get'node'
      item←⊃items[index←items[;3]⍳⊂current;2]
      :Select _event
      :Case 'nodeSelect'
          r←'#output'Replace _.p(item,' selected.')
      :CaseList 'nodeCheck' 'nodeUncheck'
          checked[index]←_event≡'nodeCheck' ⍝ On or off
          r←'#output'Replace _.p((⍕+/checked),' items checked.')
      :EndSelect
    ∇

    ∇ r←onBranch;exec;id;index;m;name
      ⍝ Add to, or delete current branch
      :Access Public
     
      index←items[;3]⍳⊂current
      count+←1
      id←'i',⍕count
      name←'Item ',⍕count
     
      :Select _what
      :Case 'Add'
          exec←'$("#tv").data("ejTreeView").addNode({id: "',id,'", text: "',name,'"},$("#',current,'"));'
          m←(1+index)≠⍳1+1↑⍴items ⍝ Expansion mask
          items←m⍀items ⋄ checked←m\checked
          items[index+1;]←(1+items[index;1])name id
      :Case 'Del'
          exec←'$("#tv").data("ejTreeView").removeNode($("#',current,'"));'
          m←index≠⍳1↑⍴items
          m[index+⍳+/∧\index↓items[;1]>items[index;1]]←0 ⍝ Child nodes will go too
          items←m⌿items ⋄ checked←m/checked
      :Else
          ∘∘∘
      :EndSelect
      r←Execute ⎕←exec
    ∇

:EndClass