:Class MS3Server : MiServer
⍝ This is an example of a customized MiServer
⍝ The MiServer class exposes several overridable methods that can be customized by the user
⍝ In this case we customize the onServerLoad method
⍝ The ClassName parameter in the Server.xml configuration file is used to specify the customized class

    :Field shared GROUPS←'Dyalog' 'SyncFusion' 'JQueryUI' 'Base HTML' ⍝ groups of elements
    :Field shared NSS←   'DC'     'SF'         'JQ'       'html'      ⍝ corresponding nss
    :Field shared CACHE←'#.CACHE'                                     ⍝ location of cache
    :Field shared FILEEXT←'.mipage'                                   ⍝ Server.xml:DefaultExtension
    :Field shared TREE                                                ⍝ Controls tree

    :SECTION A_MAIN

    ∇ Make config
      :Access Public
      :Implements Constructor :Base config
    ∇

    ∇ onServerLoad
      :Access Public Override
    ⍝ Handle any server startup processing
      :If 14>{⊃(//)⎕VFI ⍵/⍨2>+\'.'=⍵}2⊃'.'⎕WG'APLVersion'
          ⎕←''
          ⎕←'MiServer 3.0 itself will run under Dyalog APL versions 13.2 and later'
          ⎕←'However, the MS3 MiSite uses features found only in Dyalog APL versions beginning with 14.0'
          ⎕←''
          ⎕←'Please restart the MS3 MiSite using Dyalog APL version 14.0 or later...'
          →
      :EndIf
     
      TREE←(Read'Examples/Data/tree.txt')~⊂'' ⍝ load/cache tree and remove blank lines
     
    ∇

    :ENDSECTION

    :SECTION B_UTILS

    ∇ C←C;scores;demoes;list;nl ⍝ Return ref to cache (init one if nonexistant)
      :Hold CACHE                                                  ⍝ prevent clashes
          :If 9≠⎕NC CACHE                                          ⍝ if cache is empty:
              C←⍎CACHE ⎕NS ⍬                                           ⍝ create with shortcut
              C.read←⎕NS ⍬                                             ⍝ init cache for files
              C.read.(keys←data←⍬)                                     ⍝ init keys and data
              C.files←⊃⍪/{List'Examples/',⍵}¨NSS                       ⍝ sample filenames
              demoes←{(Words'Control'Section Read ⍵)~'_',¨NSS}¨C.files ⍝ controls demoed in each
              C.controls←∪↑,/demoes                                    ⍝ cache all controls
              scores←C.controls∘.Score↓⍉↑C.files demoes                ⍝ controls vs files
              C.rankings←(+/0<scores)↑¨↓⍒#.Utils.∆rank 1⊢scores        ⍝ cache all rankings
              C.controlsoi←C.controls∘⍳ ⋄ C.eocontrols←∊∘C.controls    ⍝ cache hash tables
              C.info←FromCSV Read'Examples/Data/info.csv'              ⍝ cache lookup table
              nl←'.*[A-Z].*'⎕S'\0'#._.⎕NL ¯9                           ⍝ all widgets except html
              C.info⍪←↑{⍵('Description'Section ⎕SRC⍎'#._.',⍵)''}¨nl    ⍝ get descriptions
              C.info←C.info[∪⍳⍨C.info[;1];]                            ⍝ filter duplicates out
              C.infooi←C.info[;1]∘⍳ ⋄ C.eoinfo←∊∘(C.info[;1])          ⍝ cache hash tables
          :Else
              C←⍎CACHE                                             ⍝ establish shortcut
          :EndIf
      :EndHold
    ∇

    ∇ r←Read file;i ⍝ Read a file via the #.CACHE.read (C)
      :Trap 0
          :If (≢C.read.keys)≥i←C.read.keys⍳⊂file ⍝ is it cached, and if so, save position
              r←i⊃C.read.data                     ⍝ extract
          :Else
              C.read.data,←⊂r←#.UnicodeFile.ReadNestedText #.Boot.AppRoot,file,(~'.'∊file)/FILEEXT
              C.read.keys,←⊂file
          :EndIf
      :Else
          r←,⊂'[failed to read "',file,'"]'
      :EndTrap
    ∇

    FromCSV←↑{'"'~¨⍨1↓¨t⊂⍨(','=t)∧~≠\'"'=t←',',⍵}¨ ⍝ Convert CSV VTV to matrix (no escaped chars)

    Score←{(102-2×(50↑Z⍵)⍳⊂⍺)-∨/'Advanced'⍷⊃⍵} ⍝ Relevance score on index of control in list


    :ENDSECTION

:EndClass