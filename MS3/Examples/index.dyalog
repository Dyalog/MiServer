:Class index : MiPage⍝Sample

    finddesc← '^\s*⍝\s*Description:(:.*?)$((\R^⍝(?!\s*\w+::).*?$)*)' ⎕s '\1\2' ⍠ ('Mode' 'M') ('DotAll' 1)

    ∇ Compose;examples;dirs;descs;dir;currtab;currtr;currtd;pathfile;file;dirfile;gooddirs;desc
      :Access public
     
      Add _.h2'Samples Pages'
     
      examples←_Request.Server.Config.Root,'Examples/'
      dirs←2↓#.Files.Dir examples,'*.' ⍝ Delete . and ..
     
      descs←'Mini Applications' 'Native HTML5' 'Dyalog Enhanced HTML5' 'jQuery Web Controls' 'SyncFusion Controls' 'Dyalog Controls'
      gooddirs←'Apps' 'HTML' 'HTMLplus' 'JQ' 'SF' 'DC'
      :For dir :In dirs∩gooddirs
          Add _.br
          currtab←Add _.table
          (currtab.Add _.caption).Add _.b,descs[gooddirs⍳⊂dir],¨⊂' (Examples/',dir,')'
          :For file :In #.Files.Dir examples,dir,'/*.dyalog'
              currtr←currtab.Add _.tr
              currtd←currtr.Add _.td
              dirfile←dir,'/',file
              pathfile←examples,dirfile
              ('href'dirfile)currtd.Add _.a,⊂¯7↓file
              desc←1↓⊃finddesc ⎕SE.SALT.Load pathfile,' -source'
              currtr.Add _.td,⊂('\R'⎕R'<br>'⍠'Mode' 'D')desc~'⍝'
          :EndFor
      :EndFor
    ∇

:EndClass