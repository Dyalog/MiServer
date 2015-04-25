:Class ejGridEditSample : MiPageSample
    
    ∇ Render;tbi
      :Access Public   
     
      (frm←Add Form).id←'myform'
     
      frm.Add h2'Editable Grid'
      mygrid←frm.Add _SF.ejGrid('mygrid'VALUES COLUMNS)
      (mygrid.Options.editSettings←⎕NS'').(allowEditing allowAdding allowDeleting)←_true
      ⍝ Alternative: 'editSettings' mygrid.Set '⍎{allowEditing: true, allowAdding: true, allowDeleting: true}'
     
      tbi←2↓∊', ej.Grid.ToolBarItems.'∘,¨'Add' 'Edit' 'Delete' 'Update' 'Cancel'
      'toolbarSettings'mygrid.Set'⍎{ showToolbar: true, toolbarItems: [',tbi,']}'
     
      (frm.Add div).id←'result'
    ∇
    
    ∇ r←CallbackFn;preset
      :Access Public                                               
     
      ∘∘∘
    ∇
    
    ∇ make
      :Access Public
      :Implements Constructor        
     
      VALUES←2 3⍴'Citrus' 'Lemon' 30,'Other' 'Pear' 75
      COLUMNS←⎕NS¨3⍴⊂''
      COLUMNS.field←'Type' 'Name' 'Tastiness'
      COLUMNS.headerText←'Type' 'Name' 'Tastiness'
      COLUMNS.width←25 25 10
      COLUMNS.textAlign←2 1/'left' 'right'
      COLUMNS[1].isPrimaryKey←_true
      COLUMNS[3].format←'{0:n0}'
    ∇

:EndClass