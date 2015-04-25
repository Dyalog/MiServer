:Class Home : MiPageSample

    ∇ Render;frm;t;tbl
      :Access public
     
      Add h2'Syncfusion (_SF) Samples'
     
      Add p'Examples of the use of Syncfusion controls (found in namespace _SF) can be found by following the links below.'
     
      t←0 4⍴⊂''
      t⍪←(New _html.a('ColorPicker'('href' 'ejColorPickerSample')))'YES' 'id value' 'A color picker.'
      t⍪←(New _html.a('Grid'('href' 'ejGridSample')))'YES' 'id values coltitles cellwidths' 'A grid object.'
     
      tbl←Add _HTML.Table(('Control' 'Done' 'Constructor Arguments' 'Description'⍪t)'' 1)
      tbl.Set('border' 1)('cellpadding' 2)
     
      t←0 2⍴⊂''
      t⍪←(New _html.a('Editable Grid'('href' 'ejGridEditSample')))'An editable grid.'
     
      Add p'Extended demos.'
      tbl←Add _HTML.Table(('Name' 'Description'⍪t)'' 1)
      tbl.Set('border' 1)('cellpadding' 2)
    ∇

:EndClass
