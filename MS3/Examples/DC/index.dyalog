:Class indexDC : MiPageSample
⍝ Control:: _DC
⍝ Description:: Samples Pages

      Section←{
          regex←'^\s*⍝\s*',⍺,':(:.*?)$((\R^⍝(?!\s*\w+::).*?$)*)'
          opts←('Mode' 'M')('DotAll' 1)
          res←(regex ⎕S'\1\2'⍠opts)⍵
          (1↓⊃res)~'⍝'
      }

    ∇ Compose;examples;dirs;descs;dir;currtab;currtr;currtd;pathfile;file;dirfile;gooddirs;desc;source;control;files
      :Access public
     
      dir←'DC' ⍝ Does a page know its own address?
     
      examples←_Request.Server.Config.Root,'Examples/'
      dirs←2↓#.Files.Dir examples,'*.' ⍝ Delete . and ..
     
      descs←'Mini Applications' 'Native HTML5' 'Dyalog Enhanced HTML5' 'jQuery Web Controls' 'SyncFusion Controls' 'Dyalog Controls' 'Other'
      gooddirs←'Apps' 'HTML' 'HTMLplus' 'JQ' 'SF' 'DC'
     
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