:Class indexhtml : MiPageSample
⍝ Control:: Samples Pages
⍝ Description:: Samples Pages

      Section←{
          regex←'^\s*⍝\s*',⍺,':(:.*?)$((\R^⍝(?!\s*\w+::).*?$)*)'
          opts←('Mode' 'M')('DotAll' 1)
          res←(regex ⎕S'\1\2'⍠opts)⍵
          (1↓⊃res)~'⍝'
      }

    ∇ Compose;dir;examples;dirs;currtab;files;file;currtr;currtd;dirfile;pathfile;source;control;desc
      :Access public
     
      dir←_Request.Page     ⍝ This page
      dir←dir↓⍨-(⌽dir)⍳'/'  ⍝ Chop file name
      dir←dir↑⍨1-(⌽dir)⍳'/' ⍝ Chop parent path
     
      examples←_Request.Server.Config.Root,'Examples/'
      dirs←2↓#.Files.Dir examples,'*.' ⍝ Delete . and ..
     
      currtab←Add _.table
     
      files←#.Files.Dir examples,dir,'/*Simple.dyalog'
      files,←#.Files.Dir examples,dir,'/*Advanced.dyalog'
     
      :For file :In files
          currtr←currtab.Add _.tr
          currtd←currtr.Add _.td
          dirfile←dir,'/',file
          pathfile←examples,dirfile
          source←⎕SE.SALT.Load pathfile,' -source'
          (control desc)←'Control' 'Description'Section¨⊂source
          ('href'dirfile)currtd.Add _.a control
          currtr.Add _.td,⊂('\R'⎕R'<br>'⍠'Mode' 'D')desc
      :EndFor
    ∇

:EndClass