:Class Homesample: MiPageSample
⍝ Control:: _html.Home 
⍝ Description:: this is an example of use of Home 

    ∇ Render;frm;ig;btn;handler;t
      :Access public
     
      Add h2'Basic HTML (_html) Samples'
     
      Add p'Examples of the use of basic controls (found in namespace _html) can be found by following the links below.'
     
      t←0 4⍴⊂''
      t⍪←(New _html.a('input type=file'('href' 'InputSample')))'YES' '' 'File upload'
     
      tbl←Add _html.Table((1 0 1 1/'Control' 'Done' 'Constructor Arguments' 'Description'⍪(t[;2]∊⊂'YES')⌿t)'' 1)
      tbl.Set('border' 1)('cellpadding' 2)
     
      Add h2'Samples yet to come'
      tbl←Add p(,⍕((~t[;2]∊⊂'YES')⌿t[;1]).Render)
    ∇

:EndClass
