﻿:Namespace indexUtils ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝
⍝ ┌─────────────────────────────────────────────────────────────────────────────────────────────┐ ⍝
⍝ │ This is the collection of utility functions used by the index page of the MiServer Sample   │ ⍝
⍝ │ MiServer Sample Site, MS3, accessible at miserver.dyalog.com                                │ ⍝
⍝ ├─────────────────────────────────────────────────────────────────────────────────────────────┤ ⍝
⍝ │ The code is split up in five sections called MAIN, CALLBACKS, and SHOW:                     │ ⍝
⍝ │                                                                                             │ ⍝
⍝ │     ∘ GENERAL has utilities that appropriate to APL or MiServer in general                  │ ⍝
⍝ │                                                                                             │ ⍝
⍝ │     ∘ FILES has various tools to list, read, and cache files and their content              │ ⍝
⍝ │                                                                                             │ ⍝
⍝ │     ∘ STRINGS string and multi-string manipulation and extraction of information            │ ⍝
⍝ │                                                                                             │ ⍝
⍝ │     ∘ ELEMENTS aids to create elements for the HTML Document Object Model                   │ ⍝
⍝ │                                                                                             │ ⍝
⍝ │     ∘ JAVASCRIPT shortcuts to MiServer's built-in functions for generating JavaScript       │ ⍝
⍝ │                                                                                             │ ⍝
⍝ └─────────────────────────────────────────────────────────────────────────────────────────────┘ ⍝
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

    :SECTION A_GENERAL ⍝ UTILITY FUNCTIONS THAT ARE NOT SPECIFIC TO THE "MS3" SITE

    ∇ r←{a}Ⓒ w ⍝ Mnemonic for the ⊆ glyph
      r←⊂⍣(1=≡w)⊢w ⍝ enclose if simple
      →0/⍨900⌶⍬    ⍝ but when dyadic...
      r,⍨←⊂a       ⍝ ... Iverson link
    ∇

    NoSt←~∘'*'¨ ⍝ Remove stars from all elements in a VTV

    SlOf←'/'∘= ⍝ Slashes of

    In←∨/⍷ ⍝ Is found in

    Q←'"'∘,,∘'"' ⍝ Surround with quotes

    FromCSV←↑{'"'~¨⍨1↓¨t⊂⍨(','=t)∧~≠\'"'=t←',',⍵}¨ ⍝ Convert CSV VTV to matrix (no escaped chars)

    Of←{⍵/⍨⍺⍺¨⍵} ⍝ Those elements of ⍵ that satisfy ⍺⍺ element

    Clean←'_'⎕R' ' ⍝ Underscores  →  spaces

    CaseLess←{⊃⍺⍺/LowerCase¨⍺ ⍵} ⍝ Apply fn without regard to upper/lower case

      LowerCase←{ ⍝ Fold character array to lowercase
          b←(∊w←⍵)∊(u←⎕SE.Dyalog.Utils).uc ⍝ location of uppercase chars
          (b/∊w)←u.lcase b/∊w              ⍝ change just those to lowercase
          w                                ⍝ return the entire array
      }

      Section←{ ⍝ Extract section ⍺:: from code ⍵
          regex←'^\s*⍝\s*',⍺,':(:.*?)$((\R^⍝(?!\s*\w+::).*?$)*)' ⍝ find '  ⍝  LeftArg:: some text'
          opts←('Mode' 'M')('DotAll' 1)('ML' 1)                  ⍝ '^'≡linestart  EOL∊'.'  1st-only
          res←(regex ⎕S'\1\2'⍠opts)⍵                             ⍝ return parts 1 and 2
          '⍝'~⍨1↓⊃res                                            ⍝ strip spaces and lamp
      }

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

    :SECTION B_FILES ⍝ FUNCTIONS THAT READ FILES

    Relevant←{C.eocontrols⊂⍵:C.files[C.rankings⊃⍨C.controlsoi⊂⍵] ⋄ 0⍴⊂''} ⍝ Samples that demo ⍵

    Score←{(102-2×(50↑⊃⌽⍵)⍳⊂⍺)-'Advanced'In⊃⍵} ⍝ Relevance score on index of control in list

      Slist←{ ⍝ Files in site folder
          ⍺←1↓FILEEXT                              ⍝ default .ext
          mods←' -rec -raw -full=2 -ext=',⍺        ⍝ subfolders no-format rooted-names spec-ext
          list←⎕SE.SALT.List #.Boot.AppRoot,⍵,mods ⍝ begin at application root (MS3/)
          list[;2]←('[\\/]+'⎕R'/')list[;2]         ⍝ normalize slashes for WWW
          list                                     ⍝ return result
      }

      DirTree←{ ⍝ Make arg for ejTreeView based on files in folder and subfolders
          ⍺←1↓FILEEXT                                      ⍝ default file extention
          list←⍺ Slist ⍵                                   ⍝ get list of files
          0∊⍴list:0 3⍴0 '' ''                              ⍝ skip parent if no children
          files←list[;2]↓¨⍨¯1+≢#.Boot.AppRoot              ⍝ trim
          parent←1(LastSub ⍵)('/',⍵,'/')                   ⍝ top level entry
          levels←2+(+/¨'/'=files)-+/'/'=3⊃parent           ⍝ level is / count, adjust for final /
          files,¨←('.',⍺)'/'[1+list[;1]≡¨⊂'<DIR>']         ⍝ append .ext for files, / for dirs
          DelEmpty⍣≡parent⍪⍉↑levels(LastSub¨list[;2])files ⍝ recursively remove empty dirs
      }

    ∇ {C}←Cache ns;scores;demoes;list;nl ⍝ Make cache if nonexistant
      :Hold ns                                                      ⍝ prevent clashes
          :If 9≠⎕NC ns                                              ⍝ if cache is empty:
              C←⍎ns ⎕NS ⍬                                               ⍝ create with shortcut
              C.dread←⎕NS ⍬                                             ⍝ init cache for files
              C.dread.(keys←data←⍬)                                     ⍝ init keys and data
              list←(≢#.Boot.AppRoot)↓¨⊃⍪/{Slist'Examples/',⍵}¨NSS       ⍝ sample filenames
              C.files←list[;2]/⍨list[;1]≢¨⊂'<DIR>'                      ⍝ cache filenames, no dirs
              demoes←{(Words'Control'Section Dread ⍵)~'_',¨NSS}¨C.files ⍝ controls demoed in each
              C.controls←∪↑,/demoes                                     ⍝ cache all controls
              scores←C.controls∘.Score↓⍉↑C.files demoes                 ⍝ controls vs files
              C.rankings←(+/0<scores)↑¨↓⍒#.Utils.∆rank 1⊢scores         ⍝ cache all rankings
              C.controlsoi←C.controls∘⍳ ⋄ C.eocontrols←∊∘C.controls     ⍝ cache hash tables
              C.info←FromCSV Dread'Examples/Data/info.csv'              ⍝ cache lookup table
              nl←'.*[A-Z].*'⎕S'\0'#._.⎕NL ¯9                            ⍝ all widgets except html
              C.info⍪←↑{⍵('Description'Section ⎕SRC⍎'#._.',⍵)''}¨nl     ⍝ get descriptions
              C.info←C.info[∪⍳⍨C.info[;1];]                             ⍝ filter duplicates out
              C.infooi←C.info[;1]∘⍳ ⋄ C.eoinfo←∊∘(C.info[;1])           ⍝ cache hash tables
          :Else
              C←⍎ns                                                 ⍝ establish shortcut
          :EndIf
      :EndHold
    ∇

    ∇ r←Dread page;i ⍝ Read a page via the #.CACHE.dread (C)
      :Trap 0
          :If (≢C.dread.keys)≥i←C.dread.keys⍳⊂page ⍝ is it cached, and if so, save position
              r←i⊃C.dread.data                     ⍝ extract
          :Else
              C.dread.data,←⊂r←#.UnicodeFile.ReadNestedText #.Boot.AppRoot,page,(~'.'∊page)/FILEEXT
              C.dread.keys,←⊂page
          :EndIf
      :Else
          r←,⊂'[failed to read "',page,'"]'
      :EndTrap
    ∇

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

    :SECTION C_STRINGS ⍝ MANIPULATION OF CHARACTER VECTORS AND VECTORS OF CHARACTER VECTORS

    LastSub←{⍵↑⍨1-'/'⍳⍨⌽⍵}       ⍝ '/aaa/bbb/ccc/ddd'  →         'ddd'
    ⍝LastSub←{1 Name ⍵}

    Name←{1↓⊃⌽((SlOf⊂⊢)⍵)~⊂,'/'} ⍝ '/aaa/bbb/ccc/ddd/' →         'ddd' (only in BuildTree)
    ⍝Name←{⍺←0 ⋄ {⍵↑⍨1-'/'⍳⍨⌽⍵}{(+/∨\'/'≠⌽⍵)↑⍵}⍣⍺⊢⍵} ⍝ prefix 1 to exclude trailing empty subs

    NsControl←{1↓¨FirstLast ⍵}   ⍝ '/aaa/bbb/ccc/ddd'  →  'aaa'  'ddd'

    FirstLast←(⊃Ⓒ(⊃⌽))(SlOf⊂⊢)   ⍝ '/aaa/bbb/ccc/ddd'  → '/aaa' '/ddd'
    ⍝NsControl←1∘{⍺←0 ⋄ 1↓¨⍣⍺⊢(⊃Ⓒ(⊃⌽))(SlOf⊂⊢)⍵} ⍝ prefix 1 to remove leading / from substrings

    Core←∊∘FirstLast¨'*'∘∊Of ⍝ Those ending in * but without middle category

    Levels←{(+/¨SlOf⍵)+~SlOf(⊃⌽)¨⍵} ⍝ Number of /s adjusted for categories' final /

    Words←{(1↓¨(∊∘' .'⊂⊢)' ',⍵)~⊂''} ⍝ Split at spaces and dots and remove empty pieces

    SortFiles←{⍵[⍋↑LastSub¨⍵]} ⍝ Sort by filename while ignoring path

    DelEmpty←{⍵⌿⍨(0,⍨2</⍵[;1])∨'/'≠⊃¨⌽¨⍵[;3]} ⍝ Remove folders that do not have files

    NoExt←{'.'∊⍵:⍵↓⍨-'.'⍳⍨⌽⍵⋄⍵} ⍝ 'aaa.bbb.ccc'  →  'aaa.bbb'

    IsDemo←{∨/∊'Simple' 'Advanced'⍷¨⊂⍵}⍝ Is this sample a one-widget-demo

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

    :SECTION D_ELEMENTS ⍝ FUNCTIONS THAT AUTOMATE THE CREATION OF DOM ELEMENTS AND HTML CODE

    Format←'small;border:none'∘#.HTMLInput.APLToHTMLColour ⍝ Make coloured HTML

    NewObj←{('width=740 height=900 data=',Q ⍵)New _.object} ⍝ Embed a full-page file

    Frame←{⍺←⊢ ⋄ ⍺'.iframed'('src=',Q ⍵,'?NoWrapper=1')New _.iframe} ⍝ _.iframe without wrapper

    NewWinA←{'target="_blank"' 'title="Click to open in a new window"'New _.A,⍵} ⍝ New-tab link

    Horz←{⍺←⊢ ⋄ r⊣(r←⍺ New _.StackPanel ⍵).Horizontal←1}  ⍝ Horizontal StackPanel

    Doc←{∊'/Documentation/DyalogAPIs/WidgetDoc?namespace=_' '&widget=',¨⍵} ⍝ Address of WidgetDoc

    BuildTree←{⍺{(⊂⍺),⍵}¨(Levels NoSt ⍵)(Name¨NoSt ⍵)⍵} ⍝ Build argument for ejTreeView

      Info←{ ⍝ Get info on a control
          control←(⍳∘'.'↓⊢)⍵                            ⍝ remove ns
          C.eoinfo⊂control:C.info[;2]⊃⍨C.infooi⊂control ⍝ if we have, use that
          'Description'Section ⎕SRC #⍎⍵                 ⍝ else extract it
      }

⍝     ListItem←{ ⍝ Generate pre-rendered entry for lists
⍝          nost←⍵~'*'
⍝          noext←~'.'∊nost
⍝          r←'<p class="listitem" id="',nost,(noext/FILEEXT),('*'∩⍵),'"><strong>',Clean NoExt LastSub nost
⍝          ∨/noext,FILEEXT⍷nost:r,'</strong> – ',('Description'Section Dread nost),'</p>' ⍝ add desc
⍝          r,'</strong></p>'
⍝      }

    ∇ r←ListItem item;nost;noext ⍝ Generate pre-rendered lists item for performance (OO is slow)
      nost←item~'*'
      noext←~'.'∊nost
      r←'<p class="listitem" '                 ⍝ begin paragraph and set class
      r,←'id=',Q nost,(noext/FILEEXT),'*'∩item ⍝ id is filename, add and * to differ
      r,←'><strong>'                           ⍝ end of paragraph tag - nest bold tag
      r,←Clean NoExt LastSub nost              ⍝ just the name without path or extention
      r,←'</strong>'                           ⍝ end of bold tag
      :If ∨/noext,FILEEXT⍷nost                 ⍝ if default or no extension:
          r,←' – ','Description'Section Dread nost ⍝ add dash and description from source
      :EndIf
      r,←'</p>'                                ⍝ close the paragraph
    ∇

    ∇ div←Tree title;xx;tree ⍝ Make tree based on its heading
      div←New _.div                                             ⍝ container
      div.Add _.hr                                              ⍝ horizontal ruler
      '.cat'div.Add _.p title                                   ⍝ heading
      xx←⎕A∩title                                               ⍝ initials of heading; XX
      tree←⍎'MakeTree',xx                                       ⍝ calls MakeTreeXX
      tree←('#tree',xx)div.Add _.ejTreeView tree                ⍝ gives id="XX"
      tree.On'nodeSelect' 'OnTree'('node' 'eval' 'argument.id') ⍝ sends along selected node's id
    ∇

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

    :SECTION E_JAVASCRIPT ⍝ FUNCTIONS THAT GENERATE PSEUDO-JAVASCRIPT FOR CALLBACKS

    Hide←{Execute'$("',⍵,'").hide()'} ⍝ Toggle object visibility off

    Show←{Execute'$("',⍵,'").show()'} ⍝ Toggle object visibility on

    ∇ r←ReplaceRelMsg ⍝ Replace message with count of related samples
      r←'[for=''ShowRelated'']'Replace{'Show ',(⍕⍵),' related sample','.',⍨'s'/⍨⍵≠1}0⌈¯1+≢CURRFILES
    ∇

    ∇ r←RefreshHandler ⍝ Refresh event handler for newly inserted objects
      r←'#Handler'Replace New _.Handler'.listitem' 'click' 'OnList'
    ∇

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

:EndNamespace