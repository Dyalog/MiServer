:Class ejGridEditSample : MiPageSample
    
    ∇ Render;tbi
      :Access Public   
     
      (frm←Add Form).id←'myform'
     
      frm.Add h2'Editable Grid'
      mygrid←frm.Add _SF.ejGrid('mygrid'VALUES COLUMNS)
      (mygrid.Options.editSettings←⎕NS'').(allowEditing allowAdding allowDeleting)←_true
      ⍝ Alternative: 'editSettings' mygrid.Set '⍎{allowEditing: true, allowAdding: true, allowDeleting: true}'
      mygrid.Options.editSettings.editMode←'Normal'
     
      tbi←2↓∊', ej.Grid.ToolBarItems.'∘,¨'Add' 'Edit' 'Delete' 'Update' 'Cancel'
      'toolbarSettings'mygrid.Set'⍎{ showToolbar: true, toolbarItems: [',tbi,']}'
     
      mygrid.On'endAdd' 'CallbackFn'('editcell' 'argument' 'data')
      mygrid.On'endDelete' 'CallbackFn'('editcell' 'argument' 'data')
      mygrid.On'endEdit' 'CallbackFn'('editcell' 'argument' 'data')
     
      frm.Add¨br br
      (frm.Add div).id←'result'
    ∇
    
    ∇ r←CallbackFn;preset;t
      :Access Public                                               
     
      :Select _event
      :CaseList 'endAdd' 'endDelete' 'endEdit'
          t←'<b>',(3↓_event),': </b>',_PageData.editcell.(2↓∊{', ',⍵,'= ',(,⍕⍎⍵)}¨⎕NL-2)
      :Else
          t←'Unexpected event: ',_event
      :EndSelect
      r←'#result'Replace t
    ∇
    
    ∇ make
      :Access Public
      :Implements Constructor        
     
      VALUES←5 3⍴'Tomato' 'Berry' 30,'Grape' 'Berry' 75,'Apple' 'Pome' 30,'Pear' 'Pome' 56,'Peach' 'Drupe' 45
      COLUMNS←⎕NS¨3⍴⊂''
      COLUMNS.field←'Name' 'Type' 'Tastiness'
      COLUMNS.headerText←'Name' 'Type' 'Tastiness'
      COLUMNS.width←25 25 10
      COLUMNS.textAlign←2 1/'left' 'right'
     
      COLUMNS[1].isPrimaryKey←_true
    ⍝ COLUMNS[2].editType←'ej.Grid.EditingTypeDropDown'
      COLUMNS[3].format←'{0:n0}'
    ∇

:EndClass