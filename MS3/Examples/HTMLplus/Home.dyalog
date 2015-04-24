:Class Home : MiPageSample

    ∇ Render;frm;ig;btn;handler;t
      :Access public
     
      Add h2'Augmented HTML (_HTML) Samples'
     
      Add p'Examples of the use of "augmented HTML" controls (found in namespace _HTML) can be found by following the links below.'
     
      t←0 4⍴⊂''
      t⍪←(New _html.a('Button'('href' 'ButtonSample')))'-' '' 'A push-button.'
      t⍪←(New _html.a('Datalist'('href' 'DatalistSample')))'-' '' '?'
      t⍪←(New _html.a('EditField'('href' 'EditFieldSample')))'-' '' '?'
      t⍪←(New _html.a('Form'('href' 'FormSample')))'-' '' '?'
      t⍪←(New _html.a('Input'('href' 'InputSample')))'-' '' '?'
      t⍪←(New _html.a('InputGrid'('href' 'InputGridSample')))'Yes' '' 'A 2-column grid containing labels and controls.'
      t⍪←(New _html.a('InputSubmit'('href' 'InputSubmitSample')))'-' '' '?'
      t⍪←(New _html.a('Script'('href' 'ScriptSample')))'-' '' '?'
      t⍪←(New _html.a('Select'('href' 'SelectSample')))'YES' 'name options attrs' '?'
      t⍪←(New _html.a('Style'('href' 'StyleSample')))'-' '' '?'
      t⍪←(New _html.a('StyleSheet'('href' 'StyleSheetSample')))'-' '' '?'
      t⍪←(New _html.a('Table'('href' 'TableSample')))'-' '' '?'
     
      tbl←Add _HTML.Table(('Control' 'Done' 'Constructor Arguments' 'Description'⍪t)'' 1)
      tbl.Set('border' 1)('cellpadding' 2)
    ∇

:EndClass
