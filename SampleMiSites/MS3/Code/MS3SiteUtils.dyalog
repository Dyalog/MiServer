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
⍝ │     ∘ E_TUTORIAL has subroutines for the Tutorial tab on the index page                     │ ⍝
⍝ │                                                                                             │ ⍝
⍝ │     ∘ F_CONSTANTS niladic functions that return unchanging values and cache                 │ ⍝
⍝ │                                                                                             │ ⍝
⍝ └─────────────────────────────────────────────────────────────────────────────────────────────┘ ⍝
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

    :SECTION A_GENERAL ⍝ UTILITY FUNCTIONS THAT ARE NOT SPECIFIC TO THE "MS3" SITE

    ç←{⊂⍣(1=≡,⍵)⊢⍵} ⍝ enclose if simple     Mnemonic for the V16 glyph

    FwSl←'[\\/]+'⎕R'/' ⍝ Make all slash-block into single forward-slashes

    Q←'"'∘,,∘'"' ⍝ Surround with quotes

    FromCSV←↑{'"'~¨⍨1↓¨t⊂⍨(','=t)∧~≠\'"'=t←',',⍵}¨ ⍝ Convert CSV VTV to matrix (no escaped chars)

      Section←{ ⍝ Extract section ⍺:: from code ⍵
          regex←'^\s*⍝\s*',⍺,':(:.*?)$((\R^⍝(?!\s*\w+::).*?$)*)' ⍝ find '  ⍝  LeftArg:: some text'
          opts←('Mode' 'M')('DotAll' 1)('ML' 1)                  ⍝ '^'≡linestart  EOL∊'.'  1st-only
          res←regex ⎕S'\1\2'⍠opts⊢⍵                              ⍝ return parts 1 and 2
          #.Strings.deb'⍝'~⍨1↓⊃res                               ⍝ strip spaces and lamp
      }

      Controls←{ ⍝ Extract names of controls used in sample ⍵
          (Words'Control'Section Read ⍵)~'_',¨NSS
      }

    Of←{⍵/⍨⍺⍺¨⍵} ⍝ Those elements of ⍵ that satisfy ⍺⍺ element

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

    :SECTION B_FILES ⍝ FUNCTIONS THAT READ FILES

    Score←{(102-2×(50↑⊃⌽⍵)⍳⊂⍺)-∨/'Advanced'⍷⊃⍵} ⍝ Relevance score on index of control in list

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

    Slash←'/'∘=⊂⊢

    Name←{1↓⊃⌽(Slash ⍵)~⊂,'/'}  ⍝ '/aaa/bbb/ccc/ddd/' →         'ddd' (only in BuildTree)

    Words←{(1↓¨(∊∘' .'⊂⊢)' ',⍵)~⊂''} ⍝ Split at spaces and dots and remove empty pieces

    NoExt←{'.'∊⍵:⍵↓⍨-'.'⍳⍨⌽⍵⋄⍵} ⍝ 'aaa.bbb.ccc'  →  'aaa.bbb'

    NoNL←'\n' '\r'⎕R' ' ''⍠'Mode' 'D' ⍝ Replace newlines with spaces

    LastSeg←{⍺←⊢ ⋄ 1↓⍺⊃⌽Slash '/',⍵} ⍝ ⍺th (default 1st) /-separated segment from the end

    Levels←{(+/¨'/'=⍵)+~'/'=(⊃⌽)¨⍵} ⍝ Number of /s adjusted for categories' final /

    Shuffle←(?⍨∘≢⊃¨⊂)⊢⊂⍨⊢≡¨1↑⊢ ⍝ Shuffle the root elements of an XML snippet

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

    :SECTION D_ELEMENTS ⍝ FUNCTIONS THAT AUTOMATE THE CREATION OF DOM ELEMENTS AND HTML CODE

      Over←{
          ⊂'<strong>',⍺,'</strong><br><small>',('/'⎕R'<br />'⊢⍵),'</small>'
      }

      External←{ ⍝ Icon off-site link
          ⍺←''
      ⍝    '.external' 'target=_blank' 'data-dyalog-tip="External link"'New _.A((⍺,'&#x1f517;')⍵)
          '<a class=".external" target="_blank" data-dyalog-tip="External link" href="',⍵,'">',⍺,'&#x1f517;</a>'
      }

      DescrEmbed←{ ⍝ Link to and iframed page
          l←('Description'Section Read ⍵),'<br />'
          l,←'<a target="_blank" href="/',⍵,'">Open this '
          l,←'simple sample' 'advanced sample' 'mini-app'⊃⍨1⍳⍨∨/¨'Simple' 'Advanced'⍷¨⊂⍵
          l,←' in a new tab</a>'
          e←'<iframe src="/',⍵,'?nowrapper=1"></iframe>'
          l e
      }

      Link←{ ⍝ New-tab link with optional (⍺) "tooltip"
          ⍺←0
          ⍝(('data-dyalog-tip=',Q ⍺){⍺ ⍵}⍣(⍺≢0)⊢'target="_blank"')New _.A ⍵
          '<a target="_blank" href=',(Q⊃⌽⍵),((⍺≢0)/' data-dyalog-tip=',Q ⍺),'>',(⊃⍵),'</a>'
      }

      DocLink←{ ⍝ Link to WidgetDoc with appropriate parameters
          link←DocUrl ⍵
          ctor←'ctor'ForControl ⍵
          0=⍴ctor::Link ⍵ link ⍝ upon fail to retrieve info
          ('Constructor: ',ctor)Link ⍵ link
      }

      DocUrl←{
          '/Documentation/DyalogAPIs/WidgetDoc?namespace=_',('ns'ForControl ⍵),'&widget=',⍵
      }

      DocTreeLink←{ ⍝ Link to file in doc folder
          '/'=⊃⌽⍵:''
          ('/Documentation',⍵)'target="_blank"'
      }

      ReadingTree←{ ⍝ Create tree of documentation links
          l←'/',¨⍵~⊂''
          (Name∘NoExt¨l)(Levels l)(DocTreeLink¨l)
      }

    ∇ r←RelDocs w;list;item ⍝ Links to related samples
      list←'relevant'ForControl w
      r←''
      :For item :In list
          r,←'<p>',(Link('filedescr'ForFile item)item),'</p><br/>'
      :EndFor
      r↓⍨←¯5
    ∇

      FormatList←{ ⍝ List of category-title pairs
          ⍺←1↓FILEEXT
          (⍺≡1↓FILEEXT)CatAndItem¨{'/'≠⊃⌽⍵}Of ⍺ List ⍵
      }

      CatAndItem←{ ⍝ (category) (filename/description)
          cat←2 LastSeg ⍵
          cat←'General' 'Mini App'cat['Documentation' 'Applications'⍳⊂cat]
          cat(Link((NoExt LastSeg)⍣(~⍺)('Description'Section Read)⍣⍺⊢⍵)⍵)
      }

      FilterTable←{
          dt←⍺ New _.DataTable ⍵
          dt.Width←'100%'
          dt.Options.autoWidth←_true
          dt.Options.mark←_true                ⍝ highlight search-terms
          dt.Options.columns←⎕NS¨4⍴⊂⍬          ⍝ options per column
          dt.Options.columns[4].visible←_false ⍝ hide column4
          dt.Options.dom←'l<"#fltcnt_',(1⊃⍺),'.fltcnt">ftpr'    ⍝ insert div with id "fltcnt_{id}" into table header
          dt.Plugins←'yadcf'
          dt.Options.yadcf←⎕NS ⍬
          dt.Options.yadcf.Filters←⎕NS ⍬
          dt.Options.yadcf.Filters.(column_number select_type filter_container_id)←3 'chosen' ('fltcnt_',1⊃⍺)
          dt.Options.yadcf.Filters.(filter_type select_type_options filter_default_label)←'multi_select'(⊂'{width:"30em"}')'Filter by library'
          dt.Options.yadcf.Filters/⍨←1 ⍝ needs array of namespaces
          dt
      }

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

    :SECTION E_TUTORIAL ⍝ FUNCTIONS USED BY THE index PAGE'S Tutorial TAB

    ∇ t←Elements;tabs;r;sp;fs;ig;colors;rgbs;button;p;cbs;t2;g
      t←'#div'New _.div'This div is the main container of this tab. ' ⍝ #div
      p←'#p't.Add _.p'This is the beginning of a paragraph, ' ⍝ #p
      '#span'p.Add _.span'but this phrase is a separate piece of text inside the paragraph. ' ⍝ #span
      button←'#Button't.Add _.Button'Button' ⍝ #Button
      sp←'#StackPanel't.Add _.StackPanel ⍝ #StackPanel
      sp.Add'StackPanel'
      '#EditField'sp.Add _.EditField'EditField' 'EditField' ⍝ #EditField
      '#Select'sp.Add _.Select'Red' 'Green' 'Blue' ⍝ #Select
      '#Input1't.Add _.Input'number' 426 ' Number Input: ' ⍝ #Input1
      t.Add _.br
      fs←'#Fieldset1't.Add _.Fieldset'CheckBoxes' ⍝ #Fieldset1
      cbs←{'.CheckBox'New _.CheckBox ⍵}¨'checked' 'unchecked' ⍝ .CheckBox
      ig←'#InputGrid'fs.Add _.InputGrid('Checked' 'Unchecked')cbs ⍝ #InputGrid
      ig.Flip←1 ⍝ #InputGrid
      fs←'#Fieldset2't.Add _.Fieldset'RadioButtonGroup' ⍝ #Fieldset2
      '#RadioButtonGroup'fs.Add _.RadioButtonGroup('Selected' 'Unselected')1 'right' ⍝ #RadioButtonGroup
      '#h5't.Add _.h5'Slider' ⍝ #h52
      '#Input2't.Add _.Input'range' 1 ⍝ #Input2
      '#List't.Add _.List('Primaries' 'Cyan' 'Magenta' 'Yellow' 'Key' 'Black')(1 2 2 2 1 2) ⍝ #List
      colors←'aqua' 'black' 'blue' 'fuchsia' 'gray' 'green' 'lime' 'maroon' ⍝ #Table
      rgbs←'#00FFFF' '#000000' '#0000FF' '#FF00FF' '#808080' '#008000' '#00FF00' '#800000' ⍝ #Table
      colors,←'navy' 'olive' 'purple' 'red' 'silver' 'teal' 'white' 'yellow' ⍝ #Table
      rgbs,←'#000080' '#808000' '#800080' '#FF0000' '#C0C0C0' '#008080' '#FFFFFF' '#FFFF00' ⍝ #Table
      '#Table't.Add _.Table('Color' 'RGB'⍪colors,⍪rgbs)'' 1 ⍝ #Table
      t.Add _.style ScriptFollows
      ⍝ #div {padding: 10px; margin: 10px;}
      ⍝ #Button {vertical-align: top; margin: 5px;}
      ⍝ #StackPanel {display: inline-block; padding: 5px;}
      ⍝ #Fieldset1 {display: inline-block;}
      ⍝ #Fieldset2 {display: inline-block;}
      ⍝ #h5 {margin: 1em 0 0.5em 0;}
      ⍝ #Input1 {width: 4em;}
      ⍝ #Input2 {width: 100%;}
      ⍝ #List {display: inline-block; margin: 1em; padding: 5px 5px 5px 25px;}
      ⍝ #Table {display: inline-block; max-height: 7em; overflow-y: scroll; margin-top: 1em;}
      ⍝
      ⍝ /**/#span:hover, #p:hover, #div:hover, #Button:hover, #StackPanel:hover, #EditField:hover, #Select:hover, #Fieldset1:hover, #Fieldset2:hover, .CheckBox:hover, #RadioButtonGroup:hover, #Input1:hover, #Input2:hover, #h5:hover, #progress:hover, #List:hover, #Table:hover {
      ⍝     box-shadow: 0 0 5px 1px orange,0 0 5px orange inset;
      ⍝ }
      'ShowElementInfo'∘AddHandler¨'#div' '#p' '#span' '#Button' '#EditField' '#StackPanel' '#Select' '#Fieldset1' '#Fieldset2' '.CheckBox' '#RadioButtonGroup' '#Input1' '#h5' '#Input2' '#progress' '#List' '#Table'
      t←'Common elements't
    ∇

    ∇ r←ShowElementInfo;code;ctrl;info
      :Access Public
      ctrl←_selector~'#.12'
      info←'<h2>This element is called <code>_.',ctrl,'</code></h2>'
      info,←P'descr'ForControl ctrl
      info,←'<h3>Constructor (what goes to the right of <code>Add _.',ctrl,'</code>)</h3>'
      info,←P Link('ctor'ForControl ctrl)(DocUrl ctrl)
      code←⊃_selector CodeFrom ⎕NR'Elements'
      info,←'<h3>Put this in the <code>Compose</code> function</h3>',P code
      r←'#info'Replace info
      r,←ShowPdf
    ∇

    ∇ t←Formatting
      t←'#margrad'New _.div'This div has inner padding and gradient backround' ⍝ #margrad
      '#boldin't.Add _.p'Bold indented text which has to be extremely long in order to show that only the first line is being indented.' ⍝ #boldin
      '#huge't.Add _.span'Huge text with outer margin' ⍝ #huge
      '#expund't.Add _.span'Expanded and underlined' ⍝ #expund
      '#bluebox't.Add _.p'Blue box with shadow' ⍝ #bluebox
      '#centshad't.Add _.p'Centered text with shadow' ⍝ #centshad
      '#whimg't.Add _.p'White text on image background' ⍝ #whimg
      '#border't.Add _.p'Surrounded by borders and top-right corner is round' ⍝ #border
      '#img' 'src="Examples/Data/4lines.png"' 'alt="Image"' 'title="Four lines high"'t.Add _.img ⍝ #img
      '#narrow't.Add _.p'Inline paragraph with limited width and single line height.' ⍝ #narrow
      '#mono't.Add _.span'Monospace, ' ⍝ #mono
      '#sans't.Add _.span'Sans-Serif, ' ⍝ #sans
      '#serif't.Add _.span'and Serif.' ⍝ #serif
      t.Add _.style ScriptFollows
      ⍝ #margrad {padding: 2em; background: linear-gradient(White, SkyBlue);}
      ⍝ #boldin {font-weight: bold; text-indent: 2em;}
      ⍝ #huge {font-size: x-large; margin: 2em;}
      ⍝ #expund {text-decoration: underline; letter-spacing: 0.5ex;}
      ⍝ #bluebox {background-color: SkyBlue; box-shadow: 0.25em 0.5em 1em Gray;}
      ⍝ #centshad {text-align: center; text-shadow: 0.1em 0.3em 0.2em Blue;}
      ⍝ #whimg {color: white; background-image: url(Examples/Data/pic3.png);}
      ⍝ #serif {font-family: "Times New Roman", Times, serif; font-size: 150%;}
      ⍝ #sans {font-family: Arial, Helvetica, sans-serif; font-size: 150%;}
      ⍝ #mono {font-family: "Courier New", Courier, monospace; font-size: 150%;}
      ⍝ #border {border: 0.25em solid Blue; border-top-right-radius: 1.5em;}
      ⍝ #img {height: 4em; opacity: 0.5;}
      ⍝ #narrow {width: 20%; display: inline-block; line-height: 1;}
      ⍝
      ⍝ /**/#boldin:hover, #huge:hover, #expund:hover, #centshad:hover, #serif:hover, #sans:hover, #mono:hover, #narrow:hover {
      ⍝     box-shadow: 0 0 5px 1px orange,0 0 5px orange inset;
      ⍝ }
      ⍝ /**/#margrad:hover {box-shadow: 0 0 5px 2px Orange inset;}
      ⍝ /**/#whimg:hover {box-shadow: 0 0 5px 2px Orange;}
      ⍝ /**/#border:hover {box-shadow: 0 0 5px 2px Orange, 0 0 5px 2px Orange inset;}
      ⍝ /**/#img:hover {box-shadow: 0 0 5px 3px Orange,0 0 5px 3px Orange;}
      ⍝ /**/#bluebox:hover {box-shadow:0 0 5px 1px Orange, 0 0 5px 1px Orange inset, 0.25em 0.5em 1em Gray;}
      'ShowInfo'∘AddHandler¨'#margrad' '#boldin' '#huge' '#expund' '#bluebox' '#centshad' '#whimg' '#serif' '#sans' '#mono' '#border' '#img' '#narrow'
      t←'Formatting't
    ∇

    ∇ t←Positioning
      Add _.style ScriptFollows
      ⍝ #parent {position: relative; height: 32em; margin: 1em;}
      ⍝ /**/#parent, #parent div {margin-top: 1em; margin-bottom: 1em; padding: 1ex;}
      ⍝ /**/#parent div {width: 50%; border: 1px solid black; }
      ⍝ #default {/* nothing to see here */}
      ⍝ #textcenter {text-align: center;}
      ⍝ #textright {text-align: right;}
      ⍝ #boxright {margin-left: auto; margin-right: 0;}
      ⍝ #boxcenter {margin-left: auto; margin-right: auto;}
      ⍝ #textbottom {position: relative; height: 4em;}
      ⍝ #textbottom span {position: absolute; bottom: 1ex;}
      ⍝ #boxbottom {position: absolute; bottom: 0;}
      ⍝
      ⍝ /**/#parent:hover, #parent div:hover {
      ⍝     box-shadow: 0 0 5px 1px orange,0 0 5px orange inset;
      ⍝ }
      t←'#parent'New _.div'Parent element with "relative" position so we can align vertically' ⍝ #parent
      '#default't.Add _.div'Default position and text alignment' ⍝ #default
      '#textcenter't.Add _.div'Centered text' ⍝ #textcenter
      '#textright't.Add _.div'Right-aligned text' ⍝ #textright
      '#boxcenter't.Add _.div'Centered element' ⍝ #boxcenter
      '#boxright't.Add _.div'Right-aligned element' ⍝ #boxright
      '#textbottom't.Add _.div,New _.span'Bottom-aligned text' ⍝ #textbottom
      '#boxbottom't.Add _.div'Bottom-aligned element' ⍝ #boxbottom
      'ShowInfo'∘AddHandler¨'#parent' '#default' '#textcenter' '#textright' '#boxcenter' '#boxright' '#textbottom' '#boxbottom'
      t←'Positioning't
    ∇

    ∇ t←Embedding;c
      Add _.style ScriptFollows
      ⍝ #embed>* {margin: 1ex;}
      ⍝ #quack {filter: hue-rotate(-205deg); padding: 2em;}
      ⍝ #quack:hover {filter:  hue-rotate(0deg);}
      ⍝ #bear {padding: 0.2em; border: 1px solid silver; margin: 1ex;}
      ⍝ #duck {height: 12em; transform: rotate(-15deg);}
      ⍝ #poly {height: 240px; width: 200px}
      ⍝ #poly polygon {fill: orange; stroke: purple; stroke-width: 1ex;}
      ⍝ #pdf {height: 240px; width:400px}
      ⍝
      ⍝ /*#bear:hover, #quack:hover, #duck:hover, #poly:hover, #embed>div>div:hover*/ #embed *:hover{
      ⍝     box-shadow: 0 0 5px 1px orange,0 0 5px orange inset;
      ⍝ }
      t←'#embed'New _.div
      t.Add _.br
      '#bear' 'src=Examples/Data/bear.mp4' 'autoplay=' 'loop=' 'muted='t.Add _.video'No video support!' ⍝ #bear
      '#quack' 'controls='t.Add _.Audio'Examples/Data/quack.mp3' ⍝ #quack
      '#duck' 'src=Examples/Data/duck.png' 'alt="Silly Duck"'t.Add _.img'No img support!' ⍝ #duck
      '#poly't.Add _.svg,'points=20,20 50,120 120,190 180,80'New _.polygon ⍝ #poly
      c←'style=display:inline-block;position:relative;'t.Add _.div
      '#pdf' 'style=position:absolute;height:100%;width:100%;top:0;' 'onclick="$(this).hide();"'c.Add _.div
      '#pdf' 'data=Examples/Data/licence.pdf'c.Add _.object ⍝ #pdf
      'ShowInfo'∘AddHandler¨'#bear' '#duck' '#quack' '#poly' '#pdf'
      t←'Embedding't
    ∇

    ∇ r←ShowPdf
      r←(_selector≢'#pdf')/Execute'$("#pdf").show();'
    ∇

    ∇ t←Interaction;cb;m
      Add _.style ScriptFollows
      ⍝ #ui>* {margin: 1ex;}
      ⍝ #adjust {width: 8em;}
      ⍝ #adjust:hover {text-align: justify;}
      ⍝ #adjust:active {text-align: right;}
      ⍝ #callback {width: 8em;}
      ⍝ #move {height: 6em; width: 12em; border: 1px solid black;}
      ⍝ #move div {height: 3em; width: 6em; cursor: move; background: silver;}
      ⍝ /**/ #ui>*:hover {box-shadow: 0 0 5px 1px orange,0 0 5px orange inset;}
      t←'#ui'New _.div
      '#adjust't.Add _.Button'Styling for reaction to hover and click' ⍝ #adjust
      cb←'#callback't.Add _.Button('Update with callback click ',#.Dates.(TSFmt ⎕TS)) ⍝ #callback
      cb.On'click' 'CallbackFn' ⍝ #callback
      '#move't.Add _.div,New _.div'Movable (drag me!)' ⍝ #move
      m←Add _.jqDraggable'#move div' ⍝ #move
      m.Set'containment' 'parent' ⍝ #move
     
      'ShowInfo'∘AddHandler¨'#adjust' '#callback' '#move'
      t←'Interaction't
    ∇

    ∇ r←CallbackFn ⍝ #callback
      :Access Public ⍝ #callback
      r←'#callback'Replace'Update with callback click ',#.Dates.(TSFmt ⎕TS) ⍝ #callback
    ∇ ⍝ #callback     

    ∇ t←Windows;c;p;d
      Add _.style ScriptFollows
      ⍝ #win {margin: 1em; padding: 1ex;}
      ⍝ #win>div {display: inline-block;}
      ⍝ #win>div:hover {box-shadow: 0 0 5px 1px orange,0 0 5px orange inset;}
      t←'#win'New _.div
      t.Add _.p'Choose a color to get a matching notification:'
      d←'#color't.Add _.div
      d.On'mousedown' 'ShowInfo'
      c←d.Add _.ejColorPicker'#ffff00' ⍝ #color
      c.On'close' 'ColorFn'('chosenColor' 'model' 'value') ⍝ #color
      t←'Windows &amp; Popups't
    ∇

    ∇ r←ColorFn;chosen;all;options ⍝ #color
      :Access public ⍝ #color
      chosen←0 #.Utils.hex⍕↓3 2⍴1↓Get'chosenColor' ⍝ #color
      all←(0 0 0)(255 0 0)(0 255 0)(0 0 255)(319 319 0)(255 255 255) ⍝ #color
      (options←⎕NS ⍬).color←'black' 'red' 'green' 'blue' 'yellow' 'black'⊃⍨(⊢⍳⌊/)+/¨2*⍨all-⊂chosen ⍝ #color
      r←Execute options _.jBox.Notice('You chose ',Get'chosenColor') ⍝ #color
    ∇ ⍝ #color     

    ∇ r←ShowInfo;info;css;code;fns
      :Access Public
      (code css)←_selector CodeFrom ⎕SRC⍎NoExt⊃⎕XSI ⍝ this ns
      code←SplitFns code
      info←'<h3>Put this in the <code>Compose</code> function</h3>',P Break⊃code
      fns←1↓code
      :If ×≢css
          info,←'<h3>Put <code>Add _.style''&#8230;''</code> in <code>Compose</code> or add  this to the stylesheet</h3>'
          info,←P Break css
      :EndIf
      :If ×≢fns
          info,←'<h3>Add ','this funtion' 'these functions'⊃⍨2⌊≢fns
          info,←' to the MiPage</h3>',P Break¨fns
      :EndIf
      r←'#info'Replace info
      r,←ShowPdf
    ∇

    ∇ {ctrl}←callbackfn AddHandler sel
      ctrl←sel~'#.12'
      Add _.Handler sel'mousedown'callbackfn'' 'event.stopPropagation()'
    ∇

    Break←{4↓∊'<br>'∘,¨⍵}

      CodeFrom←{
          (css lines)←↓⍉↑('⍝ ',⍺)∘Prep¨⍵/⍨('⍝ ',⍺)∘(∨/⍷)¨⍵
          (lines/⍨~css)(css/lines)
      }

      Prep←{
          c←#.Strings.deb ⍵
          ⍺≡c↑⍨-l←≢⍺:0('\w+\.Add'⎕R'Add'⊢c↓⍨¯1-l)
          1(2↓c)
      }

    P←{∊('<p>',,∘'</p>')¨ç⍵}

    SplitFns←{⍵⊂⍨1,2</≠\'∇'=⊃¨⍵}

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝

    :SECTION F_CONSTANTS ⍝ NILADIC FUNCTIONS THAT ACT LIKE :include'ABLE CONSTANTS

    ∇ r←NSS;types;names
      :Access public
      :If 0=C.⎕NC'NSS'
          C.NSS←1↓¨1↓'_'#.⎕NL ¯9
          names types←0 1⎕NINFO⍠1⊢#.Boot.AppRoot,'Examples/*'
          C.NSS∩←LastSeg¨names/⍨1=types
      :EndIf
      r←C.NSS
    ∇

    ∇ r←GROUPS
      :Access public
      :If 0=C.⎕NC'GROUPS'
          C.GROUPS←{#.Strings.deb(⍳∘'⍝'↓⊢)⊃⎕SRC#⍎⍵}¨'_',¨NSS
      :EndIf
      r←C.GROUPS
    ∇

    ∇ r←CACHE
      :Access public
      r←'#.CACHE'
    ∇

    ∇ r←FILEEXT
      :Access public
      r←#.Boot.ms.Config.DefaultExtension
    ∇

    ∇ C←C;scores;list;refs;srcs;control;i;info;ref;src;ctor;Read;Ø;demo
     ⍝ Return ref to cache (initialize cache if nonexistant)
      :Access public
      Read←#.Files.GetVTV #.Boot.AppRoot∘, ⍝ no-cache reading
      :Hold CACHE                          ⍝ prevent clashes
          :If 9≠⎕NC CACHE                  ⍝ if cache is empty:
              Ø←⊂''
              C←⍎CACHE ⎕NS ⍬       ⍝ create with shortcut
              C.read←⎕NS ⍬         ⍝ init cache for files
              C.read.(keys←data←⍬) ⍝ init keys and data
     
              C.controls←(#._.⎕NL ¯9)~⊂'Handler'                       ⍝ cache all controls
              C.controlsoi←C.controls∘⍳ç ⋄ C.eocontrols←∊∘C.controls ç ⍝ hash tables
              refs←#._⍎¨C.controls                                     ⍝ refs of all controls
              C.ns←3↓¨⍕¨refs.##                                        ⍝ ns of each control
              srcs←⎕SRC¨refs                                           ⍝ all sources
     
              C.files←⊃⍪/{List'Examples/',⍵}¨NSS,⊂'Applications' ⍝ sample filenames
              C.filesoi←C.files∘⍳ç                               ⍝ hash table
              C.filedescr←('Description'Section Read)¨C.files    ⍝ Description:: for all files
              C.demos←Controls¨C.files                           ⍝ controls demoed in each
              scores←C.controls∘.Score↓⍉↑C.files C.demos         ⍝ controls vs files
              C.rankings←(+/0<scores)↑¨↓⍒#.Utils.∆rank 1⊢scores  ⍝ cache all rankings
     
              C.(descr ctor notes relevant reldocs doclinks)←Ø
              info←FromCSV Read'IndexData/info.csv'
              :For control ref src :InEach C.controls refs srcs
                  i←info[;1]⍳⊂control
                  :If i≤≢info
                      C.descr,←info[i;2]
                      C.notes,←info[i;3]
                  :Else
                      C.descr,←⊂NoNL'Description'Section src
                      C.notes,←⊂NoNL'Notes'Section src
                  :EndIf
     
                  ctor←{⍵↑⍨¯1+⌊/⍵⍳⎕UCS 13 10}'Constructor'Section src
                  :If ''≡ctor
                      C.ctor,←'[content [attributes]]' '[attributes]'[1+(⎕NEW ref).NoEndTag]
                  :Else
                      C.ctor,←⊂ctor
                  :EndIf
     
                  :If C.eocontrols⊂control
                      C.relevant,←⊂C.files[C.rankings⊃⍨C.controlsoi⊂control]
                  :Else
                      C.relevant,←Ø
                  :EndIf
     
              :EndFor
              C.cats←GROUPS[NSS⍳3↓¨⍕¨('#._'∘⍎¨C.controls).##]
     
              C.reldocs←(RelDocs¨C.controls),Ø
              C.doclink←(DocLink¨C.controls),Ø
              C.used←{⊂2↓∊', '∘,¨C.doclink[C.controlsoi¨⍵]}¨C.demos
     
              C.tasks←{Link('Description'Section Read ⍵)⍵}¨C.files
     
              C.type←'simple' 'advanced' 'mini-app'[1⍳⍨¨↓⍉∨/¨'Simple' 'Advanced'∘.⍷C.files]
     
              ⍝ These cause an empty result if looked-up is not found
              C.(filedescr demos rankings descr ctor notes notes ns),←Ø
     
          :Else
              C←⍎CACHE ⍝ establish shortcut
          :EndIf
      :EndHold
    ∇

      ForControl←{ ⍝ e.g. 'notes'ForControl'DataTable'
          (C.controlsoi⊂,⍵)⊃C⍎⍺
      }
      ForFile←{ ⍝ e.g. 'filedescr'ForFile'DataTable'
          (C.filesoi⊂,⍵)⊃C⍎⍺
      }

    :ENDSECTION ⍝ ─────────────────────────────────────────────────────────────────────────────────
⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝ ⍝


:EndNamespace
