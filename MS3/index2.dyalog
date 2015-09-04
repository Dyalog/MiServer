:Class index2 : MiPageSample

    :SECTION GLOBALS ⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝

    :Field TYPES←'Simple' 'Advanced'⍝ Types of samples (if not App)
    :Field GROUPS      ⍝ Names of groups of elements
    :Field REFS        ⍝ ... their refs
    :Field APPS        ⍝ List of all apps
    :Field SAMPLES     ⍝ List of all samples (well, groups and controls really)
    :Field INFOLONG    ⍝ Long desc of each control
    :Field INFOSHORT   ⍝ Short (1-3 words) desc of each control
    :Field NAMESLONG   ⍝ Elements that have long info
    :Field NAMESSHORT  ⍝ Elements that have short info
    :Field SEARCH←''   ⍝ Last-search cache
    :Field CONTROLS←'' ⍝ All control names
    :Field APPDESCS    ⍝ Sample Apps' Description::
    :Field APPCTRLS    ⍝ Sample Apps' Control:: (i.e. the title)
    :Field CORE        ⍝ Core subset of controls
    :Field STR←''      ⍝ String to search for
    :Field ALLFILES    ⍝ List of pathnames for all sample files
    :Field SAMPLE←1    ⍝ The current view is a sample (i.e. has source-code and related samples)

    :ENDSECTION

    :SECTION UTILITIES ⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝

    Q←'"'∘,,∘'"'  ⍝ Surround with quotes, a.k.a. APL dragon

    D←{(×≢⍵)/' – ',⍵} ⍝ Prepend a dash if non-empty

    P←{1⌽(×≢#.HTMLInput.dtlb ⍵)/') (',⍵} ⍝ Surround with parens if non-empty

    Words←{(1↓¨(' '∘=⊂⊢)' ',⍵)~⊂''} ⍝ Split at spaces

    SpaceToDir←{'Examples/',1↓⍵} ⍝ Convert Space name to Folder name

    Frame←{'.iframed' ('src=',Q⍵,'?NoWrapper=1') New _.iframe}

    NewWinA←{'target="_blank"'('href=',Q⊃⌽⍵) 'title="Click to pop out"'New _.a (⊃⍵)} ⍝ New link that opens in a new window/tab

    NewDiv←{⍵ New _.div} ⍝ Make a div

    Horz←{⍺←⊢ ⋄ r⊣(r←⍺ New _.StackPanel ⍵).Horizontal←1} ⍝ Horizontal StackPanel

    Type←{P(1⍳⍨∨/¨TYPES⍷¨⊂⍺)⊃(TYPES,¨⊂' sample for ',⍵),⊂'Sample app'} ⍝ Simple/Advanced/App?

    ∇ r←Dread page;i
    ⍝ Read a page via the DREADCACHE
      :Trap 999 ⍝ 0
          :If 0=⎕NC'#.DREADCACHE' ⋄ #.DREADCACHE←⎕NS'' ⋄ #.DREADCACHE.(Keys←Data←⍬) ⋄ :EndIf
          :If (≢#.DREADCACHE.Keys)≥i←#.DREADCACHE.Keys⍳⊂page
              r←i⊃#.DREADCACHE.Data
          :Else
              #.DREADCACHE.Data,←⊂r←#.UnicodeFile.ReadNestedText #.Boot.AppRoot,page,'.dyalog'
              #.DREADCACHE.Keys,←⊂page
          :EndIf
      :Else
          r←,⊂'[file read failed]'
      :EndTrap
    ∇

    ⍝ Dread←{0::,⊂'[file read failed]' ⋄ #.UnicodeFile.ReadNestedText #.Boot.AppRoot,⍵,'.dyalog'} ⍝ Read dyalog file

    Dlist←{0::⍬ ⋄ (Slist #.Boot.AppRoot,⍵,' -raw')[;2]} ⍝ List dyalog files

    Slist←{l←⎕SE.SALT.List ⍵ ⋄ l[;2]←('\\'⎕R'/')(l[;2]) ⋄ l} ⍝ SALT.List with /'s

  ⍝  NodeID←{⍺←⊢ ⋄ ('#node',⊃⍵)∘,¨⍕¨⍺+⍳⍴⊃⌽⍵} ⍝ Generate node ids (⍵='L' items) optional (⍺=offset)

    Split←{{⍵↑⍨+/∨\' '≠⌽⍵}¨('_'⎕R' ')⍵((⍳↑⊣){⍺⍵}(⍳↓⊣))'_'} ⍝ Split at first _ and fix _s

    In←{∨/¨⊃⍷¨/{⎕SE.Dyalog.Utils.lcase¨eis ⍵}¨⍺ ⍵} ⍝ Case-insensitive find

    Names←{1↓¨⍵↑¨⍨¯1+⍵⍳¨':'} ⍝ Extract section names from set of several 'name:: description'

    AddShortInfo←{⍵,¨P¨(4+⍴¨⍵)↓¨(INFOSHORT,⊂'')[NAMESSHORT⍳⍵]} ⍝ ⍵ (ShortDesc)

    ShortInfo←{(4+⍴⍵)↓⊃(INFOSHORT,⊂'')[NAMESSHORT⍳⊂⍵]}

    AddLongInfo←{(New¨_.strong,¨⍵),¨D¨(4+⍴¨⍵)↓¨(INFOLONG,⊂'')[NAMESLONG⍳⍵]} ⍝ ⍵ - LongDesc

    ScoreIn←{(100⊥⌽∨/¨TYPES⍷¨⊂⍵)×(⊂⍺)(∊×⍳⍨)Words'Control'Section Dread ⍵} ⍝ ⍺'s relevance in ⍵ (0=none 1=high 2=lower...)

    Tail←{⍵ ⍺⍺⍨1-(⌽⍵)⍳'/'} ⍝ ↑Tail or ↓Tail

    End←{⍺⍺{⍵↑⍨¯1+⍵⍳'_'}⍺⍺ ⍵} ⍝ ⊢End: until first .   ⌽End: from last .

    NodeToCtrl←{'_',(⊢End 1↓⍵),'.',⌽End ⍵}

    CtrlToNode←{'#',('\.' ⎕R '_')⍵}

    Clean←'[_\-\.]'⎕R' '

    DelEmpty←{((0,⍨2</⍵[;1])∨'/'≠⊃¨⌽¨⍵[;3])⌿⍵}

      DirTree←{
          parent←1(↑Tail ⍵)('/',⍵,'/')
          list←Slist #.Boot.AppRoot,⍵,' -rec -raw'
          0∊⍴list:0 3⍴0 '' ''
          nodir←~list[;1]∊⍨⊂'<DIR>'
          prefix←'/',(↓Tail ⍵),nodir/(↑Tail ⍵),'/' ⍝ Quirk in SALT.List includes path only if has subfolders
          files←prefix∘,¨list[;2]
          levels←2+(+/¨'/'=files)-+/'/'=3⊃parent
          ((list[;1]≡¨⊂'<DIR>')/files),←'/'
          DelEmpty⍣≡parent⍪⍉↑levels(↑Tail¨list[;2])files
      }

      Section←{ ⍝ extract section ⍺:: from code ⍵
          regex←'^\s*⍝\s*',⍺,':(:.*?)$((\R^⍝(?!\s*\w+::).*?$)*)'
          opts←('Mode' 'M')('DotAll' 1)
          res←(regex ⎕S'\1\2'⍠opts)⍵
          (1↓⊃res)~'⍝'
      }

    :ENDSECTION

    :SECTION MAIN ⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝

    ∇ Compose;left;mid;right;sp;list
      :Access public
     
     ⍝ Initialize globals
      CURRFILES←⊂'/About-MiServer'
      CURRCTRL←''
      SAMPLES←0 3⍴⍬
      GROUPS←'Dyalog Controls' 'SyncFusion' 'JQueryUI' 'Base HTML'
      REFS←_DC _SF _JQ _html
      INFOSHORT←'⍝',¨Dread'Examples/Data/infoShort'
      INFOLONG←'⍝',¨Dread'Examples/Data/infoLong'
      NAMESSHORT←Names INFOSHORT
      NAMESLONG←Names INFOLONG
      list←⊃⍪/{Slist #.Boot.AppRoot,'Examples/',⍵,' -rec -raw -full'}¨'DC' 'SF' 'JQ' 'html'
      ALLFILES←list[;2]/⍨list[;1]≢¨⊂'<DIR>'
      TREE←⎕SE.SALT.Load #.Boot.AppRoot,'Examples/Data/tree -noname'
      CORE←⎕SE.SALT.Load #.Boot.AppRoot,'Examples/Data/core -noname'
     
      Add _.StyleSheet'/Styles/homepage.css'
     
      (left mid)←NewDiv¨'#leftBar' '#midBar' ⍝ Create panes
      Add'mainSP'Horz left mid
      PopulateLeft left
      PopulateMid mid
    ∇

    ∇ PopulateLeft thediv;class;depths;group;items;ref;samples;vp;search;menu;i;fs;ac;text;treeall;treecore;names;tree;dirs;levels;core;enames
     
      :If 1
      ⍝ SEARCH FIELD ⍝⍝⍝
          search←New _.EditField'searchfield'⍝).On'change' 'OnSearch'('str' 'val')
          (search,←'#searchbutton' '.menu'New _.button'Search').On'click' 'OnSearch'('str' '#searchfield' 'val')
          thediv.Add Horz search
          thediv.Add _.hr
      :EndIf
     
      ⍝ GETTING STARTED ⍝⍝⍝
      '.cat'thediv.Add _.p'Getting Started'
      tree←0 3⍴0 '' ''
      tree⍪←1 'Start here',CURRFILES
      tree⍪←DirTree'Documentation'
      tree⍪←DirTree'Examples/Techniques'
      tree⍪←DirTree'Examples/Applications'
      tree[;2]←Clean¨tree[;2]
      tree←'#treeG'thediv.Add _.ejTreeView tree
      tree.On'nodeSelect' 'OnGS'('node' 'eval' 'argument.id')
      thediv.Add _.hr
     
      ⍝ CONTROLS ⍝⍝⍝
      '.cat'thediv.Add _.p'Controls'
      tree←0 3⍴0 '' ''
      names←TREE
      dirs←'_'=(⊃⌽)¨names
      ⍝ All
      tree⍪←1 'All' '_'
      levels←1+dirs-⍨+/¨'_'=names
      enames←⌽End¨1↓¨names↓¨⍨-dirs
      tree⍪←⍉↑levels enames names
      ⍝ Core
      core←(2=levels)∨(enames∊CORE) ⍝∧(~dirs) not necessary because no category name appears in core list
      enames/⍨←core
      names/⍨←core
      levels/⍨←core
      levels⌊←3
      core←⍉↑levels enames(names,¨'(')
      tree⍪⍨←⊃⍪/{⍵[1,1+⍋↑1↓⍵[;2];]}¨(2=core[;1])⊂[1]core ⍝ Sort classes
      tree⍪⍨←1 'Core' '_(' ⍝ ( is core suffix
      tree[;2]←Clean¨tree[;2]
      ⍝ Add the whole tree
      tree←'#treeA'thediv.Add _.ejTreeView tree
      tree.On'nodeSelect' 'OnCA'('node' 'eval' 'argument.id')
    ∇

    ∇ PopulateMid mid;url;code;frame;title;navbuts;t;sr;desc
     
     ⍝ Read framed pages
      url←⊃CURRFILES
      code←Dread url
     
     
     ⍝ Create and fill placeholders for title and header
      title←Clean'Control'Section code
     
     ⍝ _html.code
      '#title'Add _.title('MS3: ',title) ⍝ after the : will be updated later on
      '#SampleTitle'mid.Add _.h2 title
     
      desc←'#CtlDescs' 'style="display:none"'mid.Add _.div ⍝ All descriptions will go here
     
     ⍝ Control: Code fragment [View documentation]
      '#ControlDesc'desc.Add _.span
      ('#DocLink'desc.Add _.span).Add'target="_blank'New _.A'View documentation'
      desc.Add _.br
     
     ⍝ Sample: Embed a code fragment [Pop out]
      '#SampleDesc'desc.Add _.span('Description'Section code)
      ('#PopLink'desc.Add _.span).Add NewWinA'Pop out'url
      desc.Add _.br
     
     ⍝ [ ] Show related samples
      t←'onchange="$("#rel").toggle()"'desc.Add _.Input'checkbox' '' 'Show related samples' 'right'
      t.id←'ShowRelated'
      t.style←'margin-left: 0px; margin-top: 10px; margin-bottom: 10px;'
      '#rel' 'style="display: none;"'desc.Add _.div
      desc.Add _.hr
     
     ⍝ Create and fill placeholder for embedded page and its source code
      (mid.Add NewDiv'#SampleFrame').Add Frame url
      mid.Add _.hr
      t←'onchange' '$("#SampleSource").toggle()'mid.Add _.Input'checkbox' '' 'Show source code' 'right'
      t.style←'margin-left: 0px;'
      '#SampleSource' '.samplesource' 'style="display: none;"'mid.Add _.div('small;border:none'#.HTMLInput.APLToHTMLColour Dread⊃CURRFILES)
     
    ∇

    :ENDSECTION

    :SECTION CALLBACKS ⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝


    ∇ r←OnGS;node;list;nodir;prefix;files;out;file;name;item;title;desc;toggle;fromframe
      :Access Public
     
     ⍝ Callback for Getting Started
      node←(1+'tree'≡4↑_what)⊃_what(Get'node') ⍝ get id of node if tree or id of what if not
      fromframe←'_'=⊃⌽node
      node~←'_' ⍝ _ is frame suffix
      :If '/'=⊃⌽node ⍝ Folder (i.e. Category)
          r←''
          :Return
          CURRCTRL←''
          SAMPLE←0
          node←1↓¯1↓node ⍝ Strip outer slashes
          list←Slist #.Boot.AppRoot,node,' -rec -raw'
          nodir←~list[;1]∊⍨⊂'<DIR>'
          prefix←(↓Tail node),nodir/(Clean↑Tail node),'/' ⍝ Quirk in SALT.List includes path only if has subfolders
          files←prefix∘,¨list[;2]
          files/⍨←list[;1]≢¨⊂'<DIR>'
          CURRFILES←files
          out←NewDiv'.framed'
          :For file :In files
              item←('#/',file,'_')'.listitem' 'title="Click here to open"'out.Add _.p
              item.Add _.strong(Clean↑Tail file)
              item.Add' ',#.HTMLInput.dtlb'Description'Section Dread file
          :EndFor
          out.Add _.Handler'.listitem' 'click' 'OnGS'
          title←Clean node
          desc←'Click on a button below to select a sample.'
          r←title title desc out''
          toggle←';scroll(0,0);$("#CtlDescs").hide()'
      :Else ⍝ File (i.e. Page)
          SAMPLE←1
          toggle←(1+fromframe)⊃'$("#CtlDescs").hide();' '$("#CtlDescs").show();'
          r←Update node
      :EndIf
     
      r←(Execute toggle),GenJS r
    ∇

    ∇ r←OnCA;node;control;files;list;file;scores;code;desc;score;controls;out;item;title;coreonly;toggle
      :Access Public
     ⍝ Callback for Core/All Controls
      node←(1+'tree'≡4↑_what)⊃_what(Get'node') ⍝ get id of node if tree or id of what if not
      COREONLY←coreonly←'('∊node
      node↓⍨←-coreonly ⍝ drop ( is core suffix
      :If '_'=⊃⌽node ⍝ Category
          r←''
          :Return
          CURRCTRL←''
          SAMPLE←0
          title←('All '/⍨coreonly<1=⍴node),(coreonly/'Core '),(Clean node),' controls'
          r←title title'' '' ''
          toggle←'$("#CtlDescs").hide();'
      :Else ⍝ Control
          SAMPLE←1
          CURRCTRL←node
          control←NodeToCtrl node
          scores←⍬
          :For file :In ALLFILES
              controls←Words'Control'Section Dread'Examples/',file
              score←102-2×(50↑controls)⍳⊂control ⍝ 100=most relevant, 0=not relevant at all
              score-←∨/'Advanced'⍷file           ⍝ subtract 1 if advanced example
              scores,←0⌈score
          :EndFor
          CURRFILES←'/Examples/'∘,¨(ALLFILES/⍨×scores)[⍒scores/⍨×scores] ⍝ sort descending by score
          :If 0=⍴CURRFILES
              r←control control'' '' ''
              toggle←'$("#CtlDescs").hide();'
          :Else
              r←control Update⊃CURRFILES
              toggle←'$("#CtlDescs").show();'
          :EndIf
     
      :EndIf
      r←(GenJS r),Execute'scroll(0,0);',toggle
    ∇

    ∇ r←OnList;out;file;item;title;node;desc
      :Access Public
     ⍝ Called when user wants the entire list of relevant samples for the current control
      node←¯1↓_what ⍝ Remove desc _ suffix
      out←NewDiv'.framed'
      :If 0=⍴CURRFILES
          '.noitems'out.Add _.p,⊂'[no samples for ',(¯1↓node),' controls]'
              ⍝(2⊃r)←'_',class,'.',AddShortInfo⊂control
              ⍝(3⊃r)←(4↓⊃AddLongInfo,⊂control),' ',('0'=⊃2⊃r)/3⊃r
          r←control(control,' Short Info')'Long info'out''
      :Else
          :For file :In CURRFILES
              item←('#',file,'_')'.listitem' 'title="Click here to open"'out.Add _.p
              item.Add _.strong(↑Tail file)
              item.Add' ',#.HTMLInput.dtlb'Description'Section Dread file
          :EndFor
          out.Add _.Handler'.listitem' 'click' 'OnGS'
          title←NodeToCtrl node
          desc←'Click on a button below to select a sample.'
          r←title title desc out''
      :EndIf
      r←GenJS r
    ∇

    ∇ r←OnSample
      :Access Public
      r←GenJS Update CURRFILES⊃⍨⍎5↓_what ⍝ id="nodeS23"
    ∇

    ∇ r←OnSearch;str;terms;out;i;dir;files;file;url;code;ctrlsec;desc;item;title
      :Access Public
     
      str←(1+STR≡'')⊃STR(Get'str') ⍝ get search string
     
      :If ×≢str ⍝ Continue only if there is a search string
      ⍝⍝⍝ Controls
          terms←INFOSHORT/⍨str In INFOSHORT
          terms,←terms~⍨INFOLONG/⍨str In INFOLONG
          terms←'.',¨∪Names terms
      ⍝⍝⍝ Samples
          out←NewDiv'.framed'
          CURRFILES←''
          i←0
          :For dir :In 'Applications' 'html' 'HTMLplus' 'DC' 'JQ' 'SF'
              files←Dlist'Examples/',dir
              :For file :In files~⊂'index'
                  url←'Examples/',dir,'/',file
                  code←Dread url
                  ctrlsec←'Control'Section code
                  desc←⊂'Description'Section code
                  :If ∨/str In desc
                  :OrIf ∨/∊(terms,⊂str)In¨⊂ctrlsec ⍝ always case sensitive
                      i+←1
                      CURRFILES,←⊂url
                      desc←∊desc,file Type⊃Words ctrlsec
                      item←('#nodeS',⍕i)'.listitem'out.Add _.p desc
                      item.On'click' 'OnSample'
                  :EndIf
              :EndFor
          :EndFor
          :If ~×i
              '.noitems'out.Add _.p,⊂'[no results for ',str,']'
          :EndIf
          title←(⍕≢CURRFILES),' sample pages for ',Q str
          desc←'Click on a button below to select a sample.'
          ⍝r←(Q str)title desc out''
          r←'#SampleFrame'Replace out
          r,←'#SampleTitle'Replace'Samples related to ',Q str
          r,←'#SampleSource'Replace'[No source to display]'
          r,←Execute'$("#CtlDescs").hide();'
          ⍝r,←'#title'Replace(Q str)
          ⍝r,←Execute'$("#SampleFrame").show();'
     
          :Return
          SEARCH←GenJS⍣(STR≡'')⊢r ⍝ Do not finish up if called by OnTree
          STR←'' ⍝ Reset
      :EndIf
      r←SEARCH
    ∇

    ∇ (page title desc url code)←{spacectrl}Update url;ctrlsec;control;space
     ⍝ Create new placeholder values
      code←Dread url
      :If ×⎕NC'spacectrl'
          page←spacectrl
          title←('All '/⍨2≥⍴page),('Core '/⍨'('=⊃⌽page),⌽End page
      :Else
          page←Clean'Control'Section code
          title←page
      :EndIf
      desc←#.HTMLInput.dtlb'Description'Section code
    ∇

    ∇ r←GenJS(page title desc url code);cd;sd;file;scores;controls;score;out;item;control;coreonly
     ⍝ Generate JavaScript for filling placeholders
      r←'#title'Replace'MS3: ',page
     
      :If 'treeA'≢_what ⍝ NOT a control selection
          :If 'treeG'≡_what ⋄ title←'Application ',url
          :Else ⋄ title←'Sample ',url ⋄ :EndIf
          r,←'#ControlDesc'Replace''
          control←'grebmorKnetroM' ⍝ really hope that doesn't find anything!
          r,←'#SampleTitle'Replace title
          (sd←New _.span).Add¨(_.strong'Description: ')(_.em desc)
          r,←'#SampleDesc'Replace sd
          r,←Execute'$("#CtlDescs").',((1+_what≡'treeG')⊃'show' 'hide'),'();'
      :Else
          control←NodeToCtrl CURRCTRL
          r,←(×≢title)/'#SampleTitle'Replace control
          (cd←New _.span).Add¨(_.strong'Control: ')(_.em,⊂ShortInfo⌽End CURRCTRL)
          r,←'#ControlDesc'Replace cd
          (sd←New _.span).Add¨(_.strong'Sample: ')(_.em desc)
          r,←'#SampleDesc'Replace sd
      :EndIf
     
      :If 0
          :If ''≡desc
              coreonly←COREONLY
              control←NodeToCtrl¨TREE/⍨∨/¨(⊂node)⍷¨TREE
              control←(CORE∊⍨{⍵↓⍨⌽⍵⍳'.'}¨control)/⍣coreonly⊢control
              scores←⍬
              :For file :In files←ALLFILES[⍋↑ALLFILES]
                  controls←Words'Control'Section Dread'Examples/',file
                  score←2×∨/control∊controls         ⍝ 2=relevant Simple, 0=not relevant
                  score-←∨/'Advanced'⍷file           ⍝ 1=relevant Advanced
                  scores,←0⌈score
              :EndFor
              CURRFILES←'/Examples/'∘,¨(files/⍨×scores)[⍒scores/⍨×scores] ⍝ put Simple before Advanced
              out←NewDiv'.framed'
              :If 0=⍴CURRFILES
                  '.noitems'out.Add _.p,⊂'[no samples for ',(¯1↓node),' controls]'
              ⍝(2⊃r)←'_',class,'.',AddShortInfo⊂control
              ⍝(3⊃r)←(4↓⊃AddLongInfo,⊂control),' ',('0'=⊃2⊃r)/3⊃r
                  r←control(control,' Short Info')'Long info'out''
              :Else
                  :For file :In CURRFILES
                      item←('#',file,'_')'.listitem' 'title="Click here to open"'out.Add _.p
                      item.Add _.strong(↑Tail file)
                      item.Add' ',#.HTMLInput.dtlb'Description'Section Dread file
                  :EndFor
                  out.Add _.Handler'.listitem' 'click' 'OnGS'
                  title←('All '/⍨coreonly<1=⍴node),(coreonly/'Core '),(Clean node),' controls'
              ⍝desc←'Click on a button below to select a sample.'
     
              :EndIf
          :Else
     
          :EndIf
      :EndIf
     
      scores←⍬
      :For file :In ALLFILES
          controls←Words'Control'Section Dread'Examples/',file
          score←102-2×(50↑controls)⍳⊂control ⍝ 100=most relevant, 0=not relevant at all
          score-←∨/'Advanced'⍷file           ⍝ subtract 1 if advanced example
          scores,←0⌈score
      :EndFor
      CURRFILES←'/Examples/'∘,¨(ALLFILES/⍨×scores)[⍒scores/⍨×scores] ⍝ sort descending by score
      out←NewDiv'.framed'
      :If 1<⍴CURRFILES
          :For file :In 1↓CURRFILES
              item←('#',file,'_')'.listitem' 'title="Click here to open"'out.Add _.p
              item.Add _.strong(↑Tail file)
              item.Add' ',#.HTMLInput.dtlb'Description'Section Dread file
          :EndFor
          out.Add _.Handler'.listitem' 'click' 'OnGS'
      :EndIf
     
     
      r,←'#rel'Replace out
     
      r,←(×≢url)/'#SampleFrame'Replace Frame url
     
      r,←'#PopLink'Replace NewWinA'Pop out'url
      r,←'#SampleSource'Replace'small;border:none'#.HTMLInput.APLToHTMLColour code
      url←∊'/Documentation/DyalogAPIs/WidgetDoc?namespace=_' '&widget=',¨(⊢End{⍺ ⍵}⌽End)1↓CURRCTRL
      :If _what≡'treeA' ⋄ r,←'#DocLink'Replace NewWinA'View documentation'url
      :Else ⋄ r,←'#DocLink'Replace'' ⋄ :EndIf
      r,←'[for=''ShowRelated'']'Replace{'Show ',(⍕⍵),' related sample',((⍵≠1)/'s'),'.'}0⌈¯1+⍴CURRFILES
      :If (0=⍴CURRFILES)∧_what≡'treeA'
          r,←Execute'$("#CtlDescs").show();'
          r,←'#SampleDesc'Replace'.noitems'New _.p,⊂'[no samples using ',control,']'
          r,←'#PopLink'Replace''
          r,←'#SampleSource'Replace''
          r,←'#SampleFrame'Replace''
      :EndIf
    ∇

    ∇ node←GetNode
      node←4↓(1+'tree'≡4↑_what)⊃_what(Get'node')
    ∇
    :ENDSECTION


    :SECTION OBSOLETE ⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝⍝
      JSsafe←{ ⍝ Make text JS safe by escaping problematic chars
          fr←'''' '"' '\\' '\n' '\r',⎕UCS 9 8 12               ⍝ ' " \ NL CR TB BS FF
          to←'\\''' '\\"' '\\\\' '\\n' '\\r' '\\t' '\\b' '\\f' ⍝ problematic in regex too :-)
          Q(fr ⎕R to⍠'Mode' 'D')⍵ ⍝ Replace problematic chars and sourround with quotes
      }

    ∇ r←OnNavBut;file;item;out;title;desc
      :Access Public
      r←''
      :Select 2↓_what
      :Case 'related'
          SAMPLE←0
          out←NewDiv'.framed'
          :For file :In CURRFILES
              item←('#',file,'_')'.listitem' 'title="Click here to open"'out.Add _.p
              item.Add _.strong(Clean↑Tail file)
              item.Add' ',#.HTMLInput.dtlb'Description'Section Dread file
          :EndFor
          out.Add _.Handler'.listitem' 'click' 'OnGS'
          title←''⍝NodeToCtrl node
          desc←'Click on a button below to select a sample.'
          r←GenJS title title desc out''
      :Case 'source'
          :If SAMPLE
              r←'#SampleSource'Replace'small;border:none'#.HTMLInput.APLToHTMLColour Dread⊃CURRFILES
              r,←Execute'location.replace("#source");'
          :EndIf
      :Case 'info'
          :If SAMPLE∧''≢CURRCTRL
              r←Execute'window.open',P Q∊∊'/Documentation/DyalogAPIs/WidgetDoc?namespace=_' '&widget=',¨(⊢End{⍺ ⍵}⌽End)CURRCTRL
          :EndIf
      :Case 'out'
          r←SAMPLE/Execute'window.open',P Q⊃CURRFILES
      :Case 'urce' ⍝ n.b. 2↓
          r←Execute'scroll(0,0);'
      :EndSelect
    ∇

    ∇ js←APLtoJS vtv;act;data
      :Access public shared
     ⍝ Convert vectors of pseudo JS (generated by Replace, Execute, et al.) to proper JS
     
      js←''
      :For act data :In eis vtv
          data←JSsafe⊃⌽eis data ⍝ the last or only one
          :Select ⊃eis act      ⍝ the first or only one
          :Case 'assign'
              js,←(⊃⌽act),' = ',data,';' ⍝ variable = "data"
          :Case 'execute'
              js,←'eval(',data,');' ⍝ eval("data")
          :Case 'replace'
              js,←'$("',(⊃⌽act),'").html(',data,');' ⍝ $("#myid").html("data")
          :Else
              js,←'$("',(⊃⌽act),'").',(⊃act),'(',data,');' ⍝ $("#myid").append("data")
          :EndSelect
      :EndFor
    ∇

    ∇ r←OnTree;node;descs;out;items;spacectrl;control;spacedir;files;file;i;url;code;ctrlsec;desc;item;title;currctrls;core;names;class;group;cat;score
      :Access Public
      node←GetNode
      :If '0'∊node ⍝ Core or All
          core←'_'=2⊃node
          currctrls←(CORE∘∩⍣core)⊃,/CONTROLS ⍝ Filter if core-only
          out←NewDiv'.framed'
          descs←AddLongInfo currctrls
          items←(currctrls,⍨¨⊂'list',1⌽core↓node)out.Add¨_.p,¨descs ⍝ make IDs like 'DC_Button'
          items.Set⊂'.listitem'
          items.On⊂'click' 'OnTree'
          r←(2↓node)(2↓node,' Controls')((⍕⍴currctrls),(core/' core'),' controls')out''
      :ElseIf '_'=⊃node ⍝ Class or core subset thereof
          core←'_'=2⊃node
          node↓⍨←core ⍝ Remove additional _ from '__html' if core-only
          i←REFS⍳⍎node
          currctrls←(CORE∘∩⍣core)i⊃CONTROLS ⍝ Filter if core-only
          out←NewDiv'.framed'
          descs←AddLongInfo currctrls
          items←(currctrls,⍨¨⊂'list',1⌽core↓node)out.Add¨_.p,¨descs ⍝ make IDs like 'DC_Button'
          items.Set⊂'.listitem'
          items.On⊂'click' 'OnTree'
          r←node((i⊃GROUPS),P node)((⍕⍴currctrls),(core/' core'),' controls')out''
      :ElseIf '_'=⊃⌽node ⍝ Category
          (class cat)←Split node
          names←⍎class
          i←(names[;3]/⍨(⊢=⌊/)names[;1])⍳⊂'node',node
          currctrls←1↓i⊃names[;2]⊂⍨(⊢=⌊/)names[;1]
          group←GROUPS⊃⍨REFS⍳⍎'_',class
          out←NewDiv'.framed'
          descs←AddLongInfo currctrls
          items←(currctrls,⍨¨⊂'list',class)out.Add¨_.p,¨descs ⍝ make IDs like 'DC_Button'
          items.Set⊂'.listitem'
          items.On⊂'click' 'OnTree'
          r←('_',class)(group,(P'_',class),' ',cat)(' controls',⍨⍕⍴currctrls)out''
      :Else ⍝ Control
          spacectrl←'_',('_'⎕R'.')node
          (class control)←Split node
          spacedir←'Examples/',class
          files←Dlist spacedir
          out←NewDiv'.framed'
          CURRFILES←0 2⍴0 'url' ⍝ Score URL
          :For file :In files
              url←spacedir,'/',file
              CURRFILES⍪←(spacectrl ScoreIn url)url
          :EndFor
          CURRFILES⌿⍨←×CURRFILES[;1] ⍝ Weed out 0-score samples
          :If 0∊⍴CURRFILES ⍝ Failed to find a sample, so perform a search instead
              STR←spacectrl ⍝ Pass implicit argument to OnSearch
              r←OnSearch ⍝ Capture and modify result
              (1⊃r)←spacectrl
              (2⊃r)←'_',class,'.',AddShortInfo⊂control
              (3⊃r)←(4↓⊃AddLongInfo,⊂control),' ',('0'=⊃2⊃r)/3⊃r
          :Else
              CURRFILES←CURRFILES[⍋CURRFILES[;1];2] ⍝ Sort by score
              r←control Update⊃CURRFILES
          :EndIf
      :EndIf
      r←GenJS r
    ∇
    :ENDSECTION

:EndClass