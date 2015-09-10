:class Info : MiPageSample
⍝ Control:: All Info
⍝ Description:: Collate all info on each control

      Section←{ ⍝ extract section ⍺:: from code ⍵
          regex←'^\s*⍝\s*',⍺,':(:.*?)$((\R^⍝(?!\s*\w+::).*?$)*)'
          opts←('Mode' 'M')('DotAll' 1)
          res←(regex ⎕S'\1\2'⍠opts)⍵
          (1↓⊃res)~'⍝'
      }

    Dread←{0::,⊂'[file read failed]' ⋄ #.UnicodeFile.ReadNestedText #.Boot.AppRoot,⍵,'.dyalog'} ⍝ Read dyalog file

    Comments←{⍵/⍨0,∧\1↓' ⍝'∊⍨⊃¨#.HTMLInput.dtlb¨⍵} ⍝ Get comments from source

    Names←{1↓¨⍵↑¨⍨¯1+⍵⍳¨':'} ⍝ Extract section names from set of several 'name:: description'

    ShortInfo←{(4+⍴⍵)↓(NAMESSHORT⍳⊂⍵)⊃INFOSHORT,⊂''}

    LongInfo←{(4+⍴⍵)↓(NAMESLONG⍳⊂⍵)⊃INFOLONG,⊂''}

    ∇ Compose
      :Access public
      style←''
      style,←'pre {'
      style,←'margin:0;'
      style,←'white-space: pre-wrap;'
      style,←'white-space: -moz-pre-wrap;'
      style,←'white-space: -pre-wrap;'
      style,←'white-space: -o-pre-wrap;'
      style,←'word-wrap: break-word;'
      style,←'}'
      Add _.Style style
     
      INFOSHORT←'⍝',¨Dread'Examples/Data/infoShort'
      INFOLONG←'⍝',¨Dread'Examples/Data/infoLong'
      NAMESSHORT←Names INFOSHORT
      NAMESLONG←Names INFOLONG
     
      #.ALLINFO←0 3⍴'Control' 'Source' 'Text'
      :For space :In _DC _SF _JQ _html
     
          :For control :In (space.⎕NL ¯9)~⊂'SALT_Data'
              name←(⍕space),'.',control
              #.ALLINFO⍪←name'infoShort'(ShortInfo control)
              #.ALLINFO⍪←'' 'infoLong'(LongInfo control)
              #.ALLINFO⍪←'' 'Comments'(Comments ⎕SRC⍎name)
          :EndFor
      :EndFor
      Add _.h2'The below table has been assigned to the matrix #.ALLINFO'
      Add _.Table(#.ALLINFO[;1 2],{'<pre>','</pre>',⍨4↓∊'<br>'∘,¨eis ⍵}¨#.ALLINFO[;3])
    ∇


:endclass