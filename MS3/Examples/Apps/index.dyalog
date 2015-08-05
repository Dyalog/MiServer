:Class indexApps : MiPageSample
⍝ Control:: Samples Pages
⍝ Description:: Click on one of the below listed samples
      Section←{
          regex←'^\s*⍝\s*',⍺,':(:.*?)$((\R^⍝(?!\s*\w+::).*?$)*)'
          opts←('Mode' 'M')('DotAll' 1)
          res←(regex ⎕S'\1\2'⍠opts)⍵
          (1↓⊃res)~'⍝'
      }

    ∇ Compose;dir;examples;dirs;files;dirfile;pathfile;source;desc;entry;types;type;file;notapps
      :Access public
     
      dir←_Request.Page     ⍝ This page
      dir←dir↓⍨-(⌽dir)⍳'/'  ⍝ Chop file name
      dir←dir↑⍨1-(⌽dir)⍳'/' ⍝ Chop parent path
     
      notapps←'Apps'≢dir
      Add _.h2(notapps/'_'),(dir↓⍨¯4×'HTMLplus'≡dir)
     
      examples←_Request.Server.Config.Root,'Examples/'
      dirs←2↓#.Files.Dir examples,'*.' ⍝ Delete . and ..
     
      files←¯7↓¨⊃↓⍉'*.dyalog'#.Files.List examples,dir
      types←'Simple' 'Advanced'
     
      :For file :In files~⊂'index'
          dirfile←dir,'/',file
          pathfile←examples,dirfile
          source←⎕SE.SALT.Load pathfile,' -source'
          desc←('\R'⎕R'<br>'⍠'Mode' 'D')'Description'Section source
          entry←Add _.p
          (('href="',file,'"',⍨'?NoWrapper=1'/⍨~0∊⍴Get'nowrapper')entry.Add _.a).Add _.button'>'
          type←1⍳⍨∨/¨types⍷¨⊂file
          type⊃←types,⊂'App'
          entry.Add desc,notapps/' (',type,')'
      :EndFor
    ∇

:EndClass
