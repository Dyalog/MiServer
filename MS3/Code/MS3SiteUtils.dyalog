:Namespace MS3SiteUtils ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝
⍝ ┌─────────────────────────────────────────────────────────────────────────────────────────────┐ ⍝
⍝ │ This is the collection of utility functions used by MS3Server and the index page of the     │ ⍝
⍝ │ MiServer Sample Site, MS3, accessible at miserver.dyalog.com                                │ ⍝
⍝ ├─────────────────────────────────────────────────────────────────────────────────────────────┤ ⍝
⍝ │ The code is split up in six sections:                                                       │ ⍝
⍝ │                                                                                             │ ⍝
⍝ │     ∘ A_GENERAL has utilities that appropriate to APL or MiServer in general                │ ⍝
⍝ │                                                                                             │ ⍝
⍝ │     ∘ B_FILES has various tools to list, read, and cache files and their content            │ ⍝
⍝ │                                                                                             │ ⍝
⍝ │     ∘ C_STRINGS string and multi-string manipulation and extraction of information          │ ⍝
⍝ │                                                                                             │ ⍝
⍝ │     ∘ D_ELEMENTS aids to create elements for the HTML Document Object Model                 │ ⍝
⍝ │                                                                                             │ ⍝
⍝ │     ∘ E_JAVASCRIPT shortcuts to MiServer's built-in functions for generating JavaScript     │ ⍝
⍝ │                                                                                             │ ⍝
⍝ │     ∘ F_CONSTANTS niladic functions that return unchanging values and cache                 │ ⍝
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

    Sl←'/'∘= ⍝ Slashes

    In←∨/⍷ ⍝ Is found in

    Z←⊃⌽ ⍝ Last

    Q←'"'∘,,∘'"' ⍝ Surround with quotes

    FromCSV←↑{'"'~¨⍨1↓¨t⊂⍨(','=t)∧~≠\'"'=t←',',⍵}¨ ⍝ Convert CSV VTV to matrix (no escaped chars)

    Of←{⍵/⍨⍺⍺¨⍵} ⍝ Those elements of ⍵ that satisfy ⍺⍺ element

    Clean←'_'⎕R' ' ⍝ Underscores  →  spaces

    FwSl←'[\\/]+'⎕R'/' ⍝ Make all slash-block into single forward-slashes

    CaseLess←{⊃⍺⍺/LowerCase¨⍺ ⍵} ⍝ Apply fn without regard to upper/lower case

      LowerCase←{ ⍝ Fold character array to lowercase
          b←(∊w←⍵)∊#.Strings.upperAlphabet ⍝ location of uppercase chars
          (b/∊w)←#.Strings.lc b/∊w         ⍝ change just those to lowercase
          w                                ⍝ return the entire array
      }

      Section←{ ⍝ Extract section ⍺:: from code ⍵
          regex←'^\s*⍝\s*',⍺,':(:.*?)$((\R^⍝(?!\s*\w+::).*?$)*)' ⍝ find '  ⍝  LeftArg:: some text'
          opts←('Mode' 'M')('DotAll' 1)('ML' 1)                  ⍝ '^'≡linestart  EOL∊'.'  1st-only
          res←regex ⎕S'\1\2'⍠opts⊢⍵                              ⍝ return parts 1 and 2
          #.Strings.deb'⍝'~⍨1↓⊃res                               ⍝ strip spaces and lamp
      }

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

    :SECTION B_FILES ⍝ FUNCTIONS THAT READ FILES

    Relevant←{C.eocontrols⊂⍵:C.files[C.rankings⊃⍨C.controlsoi⊂⍵] ⋄ 0⍴⊂''} ⍝ Samples that demo ⍵

    Score←{(102-2×(50↑Z⍵)⍳⊂⍺)-'Advanced'In⊃⍵} ⍝ Relevance score on index of control in list

      List←{ ⍝ Files in site folder
          ⍺←1↓FILEEXT                                      ⍝ default .ext
          mods←' -rec -raw -full=2 -ext=',⍺                ⍝ subdirs no-format rooted spec-ext
          list←(⎕SE.SALT.List #.Boot.AppRoot,⍵,mods)[;1 2] ⍝ begin at application root (MS3/)
          f←~d←list[;1]≡¨⊂'<DIR>'                          ⍝ find dirs
          list←FwSl list[;2]                               ⍝ normalize slashes for WWW
          (d/list),←'/'                                    ⍝ mark dirs with final slashes
          (f/list),←⊂'.',⍺                                 ⍝ add .ext to files
          list↓¨⍨¯1+1⍳⍨(FwSl ⍵)⍷⊃list                      ⍝ trim
      }

      DirTree←{ ⍝ Make arg for ejTreeView based on files in folder and subfolders
          ⍺←1↓FILEEXT                                      ⍝ default file extention
          list←⍺ List ⍵                                    ⍝ get list of files
          0∊⍴list:0 3⍴0 '' ''                              ⍝ skip parent if no children
          parent←1(LastSub ⍵)('/',⍵,'/')                   ⍝ top level entry
          levels←((+/-Z)¨Sl list)+3-+/Sl 3⊃parent          ⍝ level is / count, adjust for final /
          DelEmpty⍣≡parent⍪⍉↑levels(NoExt∘Name¨list)list ⍝ recursively remove empty dirs
      }

    ∇ r←Read page;i ⍝ Read a page via the #.CACHE.read (C)
      :Trap 0
          :If (≢C.read.keys)≥i←C.read.keys⍳⊂page ⍝ is it cached, and if so, save position
              r←i⊃C.read.data                     ⍝ extract
          :Else
              C.read.data,←⊂r←#.Files.GetVTV #.Boot.AppRoot,page,(~'.'∊page)/FILEEXT
              C.read.keys,←⊂page
          :EndIf
      :Else
          r←,⊂'[failed to read "',page,'"]'
      :EndTrap
    ∇

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

    :SECTION C_STRINGS ⍝ MANIPULATION OF CHARACTER VECTORS AND VECTORS OF CHARACTER VECTORS

    LastSub←{⍵↑⍨1-'/'⍳⍨⌽⍵}     ⍝ '/aaa/bbb/ccc/ddd'  →         'ddd'
    ⍝LastSub←{1 Name ⍵}

    Name←{1↓Z((Sl⊂⊢)⍵)~⊂,'/'}  ⍝ '/aaa/bbb/ccc/ddd/' →         'ddd' (only in BuildTree)
    ⍝Name←{⍺←0 ⋄ {⍵↑⍨1-'/'⍳⍨⌽⍵}{(+/∨\'/'≠⌽⍵)↑⍵}⍣⍺⊢⍵} ⍝ prefix 1 to exclude trailing empty subs

    NsControl←{1↓¨FirstLast ⍵} ⍝ '/aaa/bbb/ccc/ddd'  →  'aaa'  'ddd'

    FirstLast←(⊃Ⓒ Z)(Sl⊂⊢) ⍝ '/aaa/bbb/ccc/ddd'  → '/aaa' '/ddd'
    ⍝NsControl←1∘{⍺←0 ⋄ 1↓¨⍣⍺⊢(⊃Ⓒ Z)(Sl⊂⊢)⍵} ⍝ prefix 1 to remove leading / from substrings

    Core←∊∘FirstLast¨'*'∘∊Of ⍝ Those ending in * but without middle category

    Levels←{(+/¨Sl⍵)+~Sl Z¨⍵} ⍝ Number of /s adjusted for categories' final /

    Words←{(1↓¨(∊∘' .'⊂⊢)' ',⍵)~⊂''} ⍝ Split at spaces and dots and remove empty pieces

    SortFiles←{⍵[⍋↑LastSub¨⍵]} ⍝ Sort by filename while ignoring path

    DelEmpty←{⍵⌿⍨(0,⍨2</⍵[;1])∨'/'≠⊃¨⌽¨⍵[;3]} ⍝ Remove folders that do not have files

    NoExt←{'.'∊⍵:⍵↓⍨-'.'⍳⍨⌽⍵⋄⍵} ⍝ 'aaa.bbb.ccc'  →  'aaa.bbb'

    IsDemo←{∨/∊'Simple' 'Advanced'⍷¨⊂⍵}⍝ Is this sample a one-widget-demo

    NoNL←'\n' '\r'⎕R' ' ''⍠'Mode' 'D'

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

    :SECTION D_ELEMENTS ⍝ FUNCTIONS THAT AUTOMATE THE CREATION OF DOM ELEMENTS AND HTML CODE

    Format←'small;border:none'∘#.HTMLInput.APLToHTMLColour ⍝ Make coloured HTML

    NewObj←{('width=740 height=900 data=',Q ⍵)New _.object} ⍝ Embed a full-page file

    Frame←{⍺←⊢ ⋄ ⍺'.iframed'('src=',Q ⍵,'?NoWrapper=1')New _.iframe} ⍝ _.iframe without wrapper

    NewWinA←{'target="_blank"' 'title="Click to open in a new window"'New _.A,⍵} ⍝ New-tab link

    Horz←{⍺←⊢ ⋄ r⊣(r←⍺ New _.StackPanel ⍵).Horizontal←1}  ⍝ Horizontal StackPanel

    Doc←{∊'/Documentation/DyalogAPIs/WidgetDoc?namespace=_' '&widget=',¨⍵} ⍝ Address of WidgetDoc

    BuildTree←{⍺{(⊂⍺),⍵}¨(Levels NoSt ⍵)(NoExt¨Name¨NoSt ⍵)⍵} ⍝ Build argument for ejTreeView

      Info←{ ⍝ Get info (default: description) on a control
          ⍺←2                                           ⍝ 1=Name, 2=Description, 3=Notes
          control←(⍳∘'.'↓⊢)⍵                            ⍝ remove ns
          C.eoinfo⊂control:C.info[;⍺]⊃⍨C.infooi⊂control ⍝ if we have, use that
          'Description'Section ⎕SRC #⍎⍵                 ⍝ else extract it
      }

⍝     ListItem←{ ⍝ Generate pre-rendered entry for lists
⍝          nost←⍵~'*'
⍝          noext←~'.'∊nost
⍝          r←'<p class="listitem" id="',nost,(noext/FILEEXT),('*'∩⍵),'"><strong>',Clean NoExt LastSub nost
⍝          ∨/noext,FILEEXT⍷nost:r,'</strong> – ',('Description'Section Read nost),'</p>' ⍝ add desc
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
          r,←' – ','Description'Section Read nost  ⍝ add dash and description from source
      :EndIf
      r,←'</p>'                                ⍝ close the paragraph
    ∇

    ∇ div←Tree title;xx;tree;levels;items;ids;id ⍝ Make tree based on its heading
      div←New _.div                                             ⍝ container
      div.Add _.hr                                              ⍝ horizontal ruler
      '.cat'div.Add _.p title                                   ⍝ heading
      xx←⎕A∩title                                               ⍝ initials of heading; XX
      tree←⍎'MakeTree',xx                                       ⍝ calls MakeTreeXX
      (levels items ids)←↓⍉tree                                 ⍝ new syntax
      id←'tree',xx
      tree←('#',id)div.Add _.ejTreeView(items levels)           ⍝ gives id="XX"
      tree.On'nodeSelect' 'OnTree'('node' 'eval' 'argument.id') ⍝ sends along selected node's id
      C.nodeIds⍪←ids,⍪id #.Utils.levels2ids levels
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

    :SECTION F_CONSTANTS ⍝ NILADIC FUNCTIONS THAT ACT LIKE ;include'ABLE CONSTANTS

    ∇ r←NSS
      :Access public
      r←'DC' 'SF' 'JQ' 'JS' 'html'
    ∇

    ∇ r←GROUPS
      :Access public
      r←'Dyalog' 'SyncFusion' 'jQueryUI' 'JavaScript' 'Base HTML'
    ∇

    ∇ r←CACHE
      :Access public
      r←'#.CACHE'
    ∇

    ∇ r←FILEEXT
      :Access public
      r←#.Boot.ms.Config.DefaultExtension
    ∇

    ∇ C←C;scores;list;nl ⍝ Return ref to cache (init one if nonexistant)
      :Access public
      :Hold CACHE                                                    ⍝ prevent clashes
          :If 9≠⎕NC CACHE                                            ⍝ if cache is empty:
              C←⍎CACHE ⎕NS ⍬                                             ⍝ create with shortcut
              C.read←⎕NS ⍬                                               ⍝ init cache for files
              C.read.(keys←data←⍬)                                       ⍝ init keys and data
              C.files←⊃⍪/{List'Examples/',⍵}¨NSS                         ⍝ sample filenames
              C.demoes←{(Words'Control'Section Read ⍵)~'_',¨NSS}¨C.files ⍝ controls demoed in each
              C.controls←∪↑,/C.demoes                                    ⍝ cache all controls
              scores←C.controls∘.Score↓⍉↑C.files C.demoes                ⍝ controls vs files
              C.rankings←(+/0<scores)↑¨↓⍒#.Utils.∆rank 1⊢scores          ⍝ cache all rankings
              C.controlsoi←C.controls∘⍳ ⋄ C.eocontrols←∊∘C.controls      ⍝ cache hash tables
              C.info←FromCSV Read'Examples/Data/info.csv'                ⍝ cache lookup table
              nl←'.*[A-Z].*'⎕S'\0'#._.⎕NL ¯9                             ⍝ all widgets except html
              C.info⍪←↑{⍵(NoNL'Description'Section ⎕SRC⍎'#._.',⍵)''}¨nl  ⍝ get descriptions
              C.info←C.info[∪⍳⍨C.info[;1];]                              ⍝ filter duplicates out
              C.infooi←C.info[;1]∘⍳ ⋄ C.eoinfo←∊∘(C.info[;1])            ⍝ cache hash tables
          :Else
              C←⍎CACHE                                             ⍝ establish shortcut
          :EndIf
      :EndHold
    ∇

    ∇ r←TREE;all;tree
      :Access public
      r←{⍵/⍨⍵∨.≠¨' '}Read'Examples/Data/tree.txt' ⍝ load/cache tree and remove blank lines
      r/⍨←'⍝'≠⊃¨r                                 ⍝ remove comment lines
      →0 ⍝ BPB
      tree←'/([^/*]+)(\*|$)'⎕S'\1'⊢r~¨' '
      all←'^.(?![A-Z])'⎕S'%'⊢#._DC.⎕NL ¯9
      all,←'^[a-z]'⎕S'%'⊢#._html.⎕NL ¯9
      all,←'^ej[A-Z]'⎕S'%'⊢#._SF.⎕NL ¯9
      all,←'^jq[A-Z]'⎕S'%'⊢#._JQ.⎕NL ¯9
      ⎕←{×≢⍵:'** Widgets found in the namespaces, but missing from the tree: ',⍕⍵ ⋄ 0 0⍴0}all~tree
      ⎕←{×≢⍵:'** Widgets found in the tree, but missing from the namespaces: ',⍕⍵ ⋄ 0 0⍴0}tree~all
     
    ∇

    ∇ r←DOCS
      :Access public
      r←(Read'Examples/Data/docs.txt')~⊂'' ⍝ load/cache tree and remove blank lines
    ∇

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝


:EndNamespace
