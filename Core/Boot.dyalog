:Namespace Boot

    (⎕ML ⎕IO)←1

    :section Startup/Shutdown

    ∇ {msroot}Run root
      :If 0≠⎕NC'msroot' ⋄ MSRoot←msroot ⋄ :EndIf
      AppRoot←folderize root  ⍝ application (website) root
      Load AppRoot ⍝ load essential objects
      ms←Init ConfigureServer AppRoot ⍝ read configuration and create server instance
      Configure ms
      ms.Run
    ∇

    ∇ {msroot}RunWC2 root
      :If 0≠⎕NC'msroot' ⋄ MSRoot←msroot ⋄ :EndIf
      AppRoot←folderize root  ⍝ application (website) root
      Load AppRoot ⍝ load essential objects
      !!!ms←1 Init ConfigureServer AppRoot ⍝ read configuration and create server instance
      Configure ms
      {ms.Run}
    ∇

    ∇ Load AppRoot;filterOut;files;HTML;f;failed;dir;name;file;folder;callingEnv
      ⍝ Load required objects for MiServer
     
      HtmlRenderer←{0::⍵ ⋄ HtmlRenderer}0
     
      :If 0=#.⎕NC'Files' ⋄ ⎕SE.SALT.Load MSRoot,'Utils/Files -target=#' ⋄ :EndIf
     
      filterOut←{⍺←'' ⋄ ⍺{0∊⍴⍺:⍵ ⋄ ⍺{∊¨↓⍵⌿⍨~⍵[;2]∊eis ⍺}↑⎕NPARTS¨⍵}⊃#.Files.Dir ⍵,'/*.dyalog'}
     
      files←'Boot'filterOut MSRoot,'Core'
      files,←'Files'filterOut MSRoot,'Utils' ⍝ find utility libraries
      files,←filterOut MSRoot,'Extensions'
     
      :For f :In files
          disperror ⎕SE.SALT.Load f,' -target=#' ⍝ do not reload already loaded spaces
      :EndFor
     
      HTML←'_JQ' '_JS'{⍵[⍋⍺⍳(↑⎕NPARTS¨⍵)[;2]]}filterOut MSRoot,'HTML' ⍝ prioritize loading of _JQ and _JS
     
      #.SupportedHtml5Elements.Build_html_namespace
     
      ⍝↓↓↓ Some controls may require controls in other folders.
      ⍝    So we attempt to load everything, and keep track of what failed
      ⍝    and then go back and try to load the failed controls again their
      failed←''
      :For f :In HTML
          (folder name)←2↑⎕NPARTS f
          disperror ⎕SE.SALT.Load f,' -target=#'
          :If #.Files.DirExists dir←folder,name,'/'
              dir∘{326=⎕DR ⍵: ⋄ '***'≡3↑⍵:failed,←⊂⍺(('<.+>'⎕S{1↓¯1↓⍵.Match})⍵)}¨⎕SE.SALT.Load dir,'* -target=#.',name
          :EndIf
      :EndFor
     
      :For (f file) :In failed
          disperror ⎕SE.SALT.Load∊'"',file,'" -target=#.',f
      :EndFor
     
      LoadFromFolder MSRoot,'Loadable'
     
      'Pages'#.⎕NS'' ⍝ Container Space for loaded classes
      #.Pages.(MiPage RESTfulPage)←#.(MiPage RESTfulPage)
     
      'CachedPages'#.⎕NS'' ⍝ Container for cached pages
     
      BuildEAWC ⍝ build the Easy As ⎕WC namespace
     
⍝ Now load any code from the MiSite
     
      :If ~0∊⍴AppRoot
          :Trap 22
              :For class :In filterOut AppRoot,'Code' ⍝ Classes in application folder
                  disperror ⎕SE.SALT.Load class,' -target=#'
              :EndFor
     
              :If #.Files.DirExists AppRoot,'/Code/Templates/'
                  disperror ⎕SE.SALT.Load AppRoot,'/Code/Templates/* -target=#.Pages'
              :EndIf
          :EndTrap
      :EndIf
    ∇

    ∇ Cleanup
      #.⎕EX¨classes
      #.⎕EX¨utils
      #.⎕EX'Pages'
      #.⎕EX'CachedPages'
      #.⎕EX¨'MiServer' 'HTTPRequest'
    ∇

    ∇ ms←{HtmlRenderer}Init Config;path;class;classes;e;res;mask
     ⍝ Create instances of MiServer, Session and Authentication Handlers
     
      HtmlRenderer←{0::⍵ ⋄ HtmlRenderer}0  ⍝ using HTMLRenderer?
     
      :If 0≠HtmlRenderer
          ms←⎕NS''
          ms.Config←Config
          ms.Log←{⎕←⍵}
      :Else
          ms←⎕NEW(#⍎Config.ClassName)Config
          path←MSRoot,'Extensions/'
     
          :If 0≠⍴Config.SessionHandler
              class←⎕SE.SALT.Load path,Config.SessionHandler
              ms.SessionHandler←⎕NEW class ms
          :EndIf
     
          :If 0≠⍴Config.Authentication
              class←⎕SE.SALT.Load path,Config.Authentication
              ms.Authentication←⎕NEW class ms
          :EndIf
     
          :If 0≠⍴Config.SupportedEncodings
              {}⎕SE.SALT.Load path,'ContentEncoder'
              :For e :In Config.SupportedEncodings
                  class←⎕SE.SALT.Load path,e
                  ms.Encoders,←⎕NEW class
              :EndFor
              :If ∨/mask←0≠1⊃¨res←ms.Encoders.Init
                  2 ms.Log'Content Encoding Initialization failed for:',∊' ',¨mask/ms.Encoders.Encoding
                  ms.Encoders←(~mask)/ms.Encoders
              :EndIf
          :EndIf
          Config.UseContentEncoding∧←0≠⍴ms.Encoders
     
          :If 0≠⍴Config.Logger
              class←⎕SE.SALT.Load path,Config.Logger
              ms.Logger←⎕NEW class ms
          :EndIf
      :EndIf
    ∇

    ∇ End;classes;z;m
      ⍝ Clean up the workspace
     
      :If 9=⎕NC'ms'
          :Trap 0
              ms.End
          :EndTrap
          {}try'⎕EX⍕⊃⊃⎕CLASS ms.SessionHandler'
          {}try'⎕EX⍕⊃⊃⎕CLASS ms.Authentication'
          {}try'⎕EX⍕⊃⊃⎕CLASS ms.Logger'
          {}try'⎕EX⍕¨∪∊ ⎕CLASS¨ms.Encoders'
          ⎕EX⍕⊃⊃⎕CLASS ms
          ⎕EX'ms'
      :EndIf
     
      :If 9=⎕NC'SQA'
          {}try'SQA.Close''.'''
      :EndIf
     
      :If 0≠⍴classes←↓#.⎕NL 9.4
      :AndIf 0≠⍴classes←(m←2=⊃∘⍴¨z←⎕CLASS¨#⍎¨classes)/classes
      :AndIf 0≠⎕NC'#.MiPage'
          classes←(#.MiPage≡¨2 1∘⊃¨m/z)/classes
          #.⎕EX↑⍕¨classes ⍝ Erase loaded classes
      :EndIf
     
      ⎕EX'#.MiPage'
      ⎕EX'AppRoot'
      {}try'#.DRC.Close ''.'''
      ⎕EX'#.DRC'
    ∇

    ∇ BuildEAWC;src;sources;fields;source;list;mask;refs;target
     ⍝ Build the Easy As ⎕WC namespace from core classes and its own source
     ⍝ Also build the #._ namespace with shortcuts
      sources←#._html #._SF #._JQ #._DC #._JS
⍝      fields←''
      '_'#.⎕NS''
      :For source :In sources
          list←source.⎕NL ¯9.4
          list←list/⍨'_'≠⊃¨list
          :If ∨/mask←0≠refs←source{6::0 ⋄ (⍕⍺){('.'∊1↓s↓r)<⍺≡(s←⍴⍺)↑r←⍕⍵}t←⍺⍎⍵:t ⋄ 0}¨list
              #._⍎∊(mask/list){'⋄',⍺,'←',⍕⍵}¨mask/refs
          :EndIf
      :EndFor
    ∇

    ∇ {root}LoadFromFolder path;type;name;nsName;parts;ns
    ⍝ Loads an APL "project" folder
      root←{6::⍵ ⋄ root}#
      :For name type :In ↓{⍵[⍒⍵[;2];]}⍉↑0 1 #.Files.Dir path,'/*'
          nsName←∊1↓parts←1 ⎕NPARTS name
          :If 1=type ⍝ directory?
              :Select ⊃root.⎕NC nsName
              :Case 9 ⋄ ns←⍕root⍎nsName
              :Case 0 ⋄ ns←nsName root.⎕NS''
              :Else ⋄ Log'"',name,'" is not a namespace'
              :EndSelect
              ⎕SE.SALT.Load name,'/* -target=',⍕ns
          :Else
              :If ~∨/∊(⎕NSI,¨'.')⍷⍨¨⊂'.',(2⊃1 ⎕NPARTS name),'.' ⍝ don't load it if we're being called from it
                  ⎕SE.SALT.Load name,' -target=',⍕root
              :EndIf
          :EndIf
      :EndFor
    ∇

    :endsection

    :section Configuration

    ∇ Configure ms
      ConfigureDatasources ms
      ConfigureVirtual ms
      ConfigureResources ms
      ConfigureContentTypes ms
      ConfigureLogger ms
      ms AddConfiguration'MappingHandlers'
    ∇

    ∇ ms AddConfiguration name;conf
      conf←ReadConfiguration name
      {ms.Config⍎name,'←⍵'}conf
    ∇

    ∇ r←ns Setting pars;name;num;default;mask
    ⍝ returns setting from a config style namespace or provides a default if it doesn't exist
    ⍝ pars - name [num] [default]
    ⍝ ns - namespace reference
    ⍝ name - name of the setting
    ⍝ num - 1 if setting is numeric scalar, (,1) if numeric vector is allowed, 0 otherwise
    ⍝ default - default value if not found
      pars←eis pars
      (name num)←2↑pars,(⍴pars)↓'' 0 ''
      :If 2<⍴pars ⋄ default←3⊃pars
      :Else ⋄ default←(1+num)⊃''⍬
      :EndIf
      r←(⍴ns)⍴⊂default
      :If ∨/mask←0≠⊃¨ns.⎕NC⊂name
          (mask/r)←(((⍴⍴num)∘tonum)⍣(⊃num))¨(mask/ns).⍎⊂name
      :EndIf
      :If 0=⍴⍴r ⋄ r←⊃r ⋄ :EndIf
    ∇

    ∇ config←{element}ReadConfiguration type;serverconfig;file;siteconfig;thing;ind;mask
    ⍝ Attempt to read configuration file
    ⍝ 1) from server root MSRoot
    ⍝ 2) from site root AppRoot
    ⍝ merging the two if they both exist - site settings overrule server settings
      config←''
      :If #.Files.Exists file←MSRoot,'Config/',type,'.xml'
          config←serverconfig←(#.XML.ToNS #.Files.ReadText file)⍎type
      :EndIf
      :If #.Files.Exists file←AppRoot,'Config/',type,'.xml'
          siteconfig←(#.XML.ToNS #.Files.ReadText file)⍎type
          :If 0∊⍴config
              config←siteconfig
          :ElseIf 0=⎕NC'element'
              {}{try'serverconfig.',⍵,'←siteconfig.',⍵}¨siteconfig.⎕NL ¯2
          :Else ⍝ element specifies the element(s) to search on
              :For thing :In siteconfig
                  :If 0≠thing.⎕NC element
                      :If ∨/mask←0≠∊serverconfig.⎕NC⊂element
                          :If (+/mask)<ind←((mask/serverconfig)⍎¨⊂element)⍳⊂thing⍎element
                              serverconfig,←thing
                          :Else
                              serverconfig[(mask/⍳⍴mask)[ind]]←thing
                          :EndIf
                      :Else
                          serverconfig,←thing
                      :EndIf
                  :EndIf
              :EndFor
              config←serverconfig
          :EndIf
      :EndIf
    ∇

    ∇ Config←ConfigureServer AppRoot;file
    ⍝ configure server level settings, setting defaults for needed ones that are not supplied
      Config←ReadConfiguration'Server'
     
      Config.AllowedHTTPMethods←{⎕ML←3 ⋄ ⍵⊂⍨~⍵∊' ,'}#.Strings.lc Config Setting'AllowedHTTPMethods' 0 'get,post'
      Config.AppRoot←AppRoot
      Config.Authentication←Config Setting'Authentication' 0 'SimpleAuth'
      Config.CertFile←Config Setting'CertFile' 0 ''
      Config.ClassName←Config Setting'ClassName' 0 'MiServer'
      Config.CloseOnCrash←Config Setting'CloseOnCrash' 1 0
      Config.Debug←Config Setting'Debug' 1 0
      Config.DefaultExtension←Config Setting'DefaultExtension' 0 '.mipage'
      Config.DefaultPage←Config Setting'DefaultPage' 0 'index.mipage'
      Config.FormatHtml←Config Setting'FormatHtml' 1 0
      Config.Host←Config Setting'Host' 0 'localhost'
      Config.HTTPCacheTime←'m'#.Dates.ParseTime Config Setting'HTTPCacheTime' 0 '0' ⍝ default to off (0)
      Config.IdleTimeout←'s'#.Dates.ParseTime Config Setting'IdleTimeout' 0 '0' ⍝ default to none (0)
      Config.KeyFile←Config Setting'KeyFile' 0 ''
      Config.Lang←Config Setting'Lang' 0 'en'
      Config.LogMessageLevel←Config Setting'LogMessageLevel' 1 1 ⍝ default to error messages only
      Config.Logger←Config Setting'Logger' 0 ''
      Config.MSRoot←MSRoot
      Config.Name←Config Setting'Name' 0 'MiServer'
      Config.Port←Config Setting'Port' 1 8080
      Config.Ports←Config Setting'Ports'(,1)⍬
      Config.Production←Config Setting'Production' 1 0 ⍝ production mode?  (0/1 = development debug framework en/disabled)
      Config.RESTful←Config Setting'RESTful' 1 0 ⍝ RESTful web service?
      Config.RootCertDir←Config Setting'RootCertDir' 0 ''
      Config.Root←AppRoot
      Config.SSLFlags←Config Setting'SSLFlags' 1(32+64)  ⍝ Accept Without Validating, RequestClientCertificate
      Config.Secure←Config Setting'Secure' 1 0
      Config.Server←Config Setting'Server' 0 ''
      Config.SessionHandler←Config Setting'SessionHandler' 0 'SimpleSessions'
      Config.SessionTimeout←'m'#.Dates.ParseTime Config Setting'SessionTimeout' 0 '30m' ⍝ 30 minute timeout
      Config.SupportedEncodings←{(⊂'')~⍨1↓¨(⍵=⊃⍵)⊂⍵}',',Config Setting'SupportedEncodings' 0
      Config.TrapErrors←Config Setting'TrapErrors' 1 0
      Config.WaitTimeout←#.Dates.ParseTime Config Setting'WaitTimeout' 0 '5000ms' ⍝ 5000 msec (5 second timeout)
      Config.UseContentEncoding←Config Setting'UseContentEncoding' 1 0 ⍝ aka HTTP Compression default off (0)
     
      :If 0≠⎕NC'#.DrA' ⍝ Transfer DrA config options
          {}#.DrA.SetDefaults
          #.DrA.AppName←Config.Name
          #.DrA.MailMethod←Config Setting'MailMethod' 0 'NONE'
          #.DrA.MailRecipient←Config Setting'MailRecipient' 0
          #.DrA.Mode←Config.Debug
          #.DrA.NoUser←Config Setting'NoUser' 1 1 ⍝ run without user interaction
          #.DrA.Path←AppRoot ⍝ Where to put log files
          #.DrA.SMTP_Gateway←Config Setting'SMTP_Gateway' 0
          #.DrA.UseHTTP←Config Setting'UseHTTP' 1 0
      :EndIf
    ∇

    ∇ ConfigureDatasources ms;file;ds;name;tmp;orig;dyalog
      ⍝ load any datasource definitions
      :If ~0∊⍴ms.Datasources←'Name'ReadConfiguration'Datasources'
          :For ds :In ms.Datasources
              :For name :In ds.⎕NL ¯2
                  orig←tmp←ds.⍎name
                  tmp←SubstPath tmp
                  :If orig≢tmp
                      ⍎'ds.',name,'←tmp'
                  :EndIf
              :EndFor
          :EndFor
     
          :Trap 0
              :If 0=#.⎕NC'SQA'
                  dyalog←('/\'[1+'Win'≡3↑1⊃#.⎕WG'APLVersion']){⍵,(-⍺=¯1↑⍵)↓⍺}2 ⎕NQ'.' 'GetEnvironment' 'DYALOG'
                  'SQA'#.⎕CY dyalog,'ws/sqapl' ⍝ copy in SQA
              :EndIf
              :If 0≠1⊃#.SQA.Init'' ⍝ and initialize
                  1 ms.Log'SQA failed to initialize'
              :EndIf
          :EndTrap
      :EndIf
    ∇

    ∇ ConfigureVirtual ms;file;virtual;mask;inds;v
      ⍝ load virtual (alias) definitions if any
      ms.Config.Virtual←''
      :If ~0∊⍴virtual←'alias'ReadConfiguration'Virtual'
          :If 0∊mask←{⍵=⍳⍴⍵}inds←{⍵⍳⍵}virtual.alias ⍝ check for duplicate aliases, keep first
              1 ms.Log'Duplicate virtual aliases defined (first occurrence will be used): ',1↓∊',',¨(~mask)/virtual.alias
              virtual←mask/virtual
          :EndIf
          ⍝ substitute server and site root if found
          virtual.path←SubstPath¨virtual.path
          :For v :In virtual
              :If ~#.Files.DirExists v.path ⍝ check if mapped path exists
                  1 ms.Log'Virtual path not found: ',v.path
                  virtual~←v
              :Else
                  :If #.Files.DirExists AppRoot,v.alias ⍝ check if alias conflicts with local path
                      1 ms.Log'Virtual alias "',v.alias,'" overrides site path of same name.'
                  :EndIf
              :EndIf
          :EndFor
          ms.Config.Virtual←virtual
      :EndIf
    ∇

    ∇ ConfigureResources ms;file;mask;inds;names;uses;map;n;res;f;missing;order;files;resources;which
      ⍝ load resource definitions if any
      ms.Config.Resources←0 3⍴⊂''
      :If ~0∊⍴res←'name'ReadConfiguration'Resources'
          :If 0∊mask←{⍵=⍳⍴⍵}inds←{⍵⍳⍵}names←res.name ⍝ check for duplicate aliases, keep first
              1 ms.Log'Duplicate resources defined (first occurence will be used): ',1↓∊',',¨(~mask)/res.name
              res←mask/res
          :EndIf
          ⍝ build the dependency map
          uses←{(eis⍣(⊃0<⍴⍵))⍵}¨res Setting'uses'
          inds←res.name∘⍳¨uses
          n←⊃⍴res
          :If ∨/mask←∨/¨missing←n<inds
              1 ms.Log'Invalid resource dependency found for:',∊' ',¨mask/res.name
              inds←(~missing)/¨inds
          :EndIf
          order←OrderResources inds
          inds←(order∘⍳¨inds)[order]
          res←res[order]
          map←,(2⍴n)⍴(1+n)↑1 ⍝ identity matrix
          map[∊(n×¯1+⍳n)+¨inds]←1
          map←(2⍴n)⍴map
          map←↓{({⍺∨⍺∨.∧⍵}⍣≡)⍨⍵}map
          ⍝ ms.Config.Resources[;1] resource name, [;2] scripts used [;3] styles used
          f←{SubstPath¨{⍵~⊂''}∘∪¨⊃¨,/¨map/¨⊂eis¨⍵}
          ms.Config.Resources←res.name,(f res Setting'script'),[1.1]f res Setting'style'
          resources←∪⊃,/,0 1↓ms.Config.Resources
          files←ms.Config Virtual¨resources
          :If ∨/missing←~#.Files.Exists∘{⍵/⍨∧\⍵≠'?'}¨files
              which←(0 1↓ms.Config.Resources)∊¨⊂missing/resources
              mask←∨/∨/¨which
              1 ms.Log'Resource files not found:'
              1 ms.Log¨↓⍕(1,mask⌿which)/¨mask⌿ms.Config.Resources
              (mask⌿ms.Config.Resources)←(mask⌿ms.Config.Resources)~¨⊂missing/resources
          :EndIf
      :EndIf
    ∇


    ∇ file←Config Virtual page;mask;f;ind;t;path;root
      :Access public shared
    ⍝ checks for virtual directory
      root←(-'/\'∊⍨¯1↑root)↓root←Config.Root
      page←('/\'∊⍨1↑page)↓page
      file←root,'/',page
      :If 0<⍴Config.Virtual
          ind←Config.Virtual.alias⍳⊂t←{(¯1+⍵⍳'/')⍴⍵}page
          :If ind≤⍴Config.Virtual.alias
              path←ind⊃Config.Virtual.path
              file←#.Files.Normalize path,('/\'∊⍨¯1↑path)↓(⍴t)↓page
          :EndIf
      :EndIf
    ∇

    ∇ r←OrderResources inds;n;mask
      n←⍳⍴inds
      r←n/⍨mask←0∘∊∘⍴¨inds ⍝ roots with no dependencies
      inds/⍨←~mask
      n/⍨←~mask
      :While ~0∊⍴inds
          mask←∧/¨inds∊¨⊂r
          r,←mask/n
          inds/⍨←~mask
          n/⍨←~mask
      :EndWhile
    ∇

    ∇ ConfigureContentTypes ms;file;ct;inds;exts;types;mask;exp;n
      ⍝ load supported content types
      ms.Config.ContentTypes←0 2⍴⊂''
      :If ~0∊⍴ct←ReadConfiguration'ContentTypes'
          exts←#.Strings.lc¨ct Setting'ext'
          types←ct Setting'type'
          :If ~0∊⍴inds←{⍵/⍳⍴⍵}∊','∊¨exts
              mask←(⍴exts)⍴1
              exp←{⎕ML←3 ⋄ (⍵≠',')⊂⍵}¨exts[inds]
              mask[inds]←n←⍬∘⍴∘⍴¨exp
              (exts types)←mask∘/¨exts types
              exts[(n/inds)++\~∊n↑¨1]←⊃,/exp
          :EndIf
          ms.Config.ContentTypes←exts,[1.1]types
      :Else
          1 ms.Log'No content types defined?'
      :EndIf
    ∇

    ∇ ConfigureLogger ms;file;log
      ⍝ load logger information
      ms.Config.Logger←⎕NS''
      ms.Config.Logger.active←0
      :If ~0∊⍴log←ReadConfiguration'Logger'
          ms.Config.Logger.active←log Setting'active' 1 0
          ms.Config.Logger.directory←SubstPath log Setting'directory' 0 ''
          ms.Config.Logger.frequency←log Setting'frequency' 0 ''
          ms.Config.Logger.sizelimit←log Setting'sizelimit' 1 0
      :EndIf
    ∇

    :Class ConfigSpace
        :field public config

        ∇ make filename;ns;n
          :Access public
          :Implements constructor
          ns←#.XML.ToNS #.Files.ReadText filename
          'Config file needs a single root node'⎕SIGNAL 11/⍨1≠⍴n←ns.⎕NL ¯9
          config←ns⍎⊃n
        ∇

        ∇ r←Get args
          :Access public
          r←config Setting args
        ∇

        ∇ r←ns Setting pars;name;num;default;mask
    ⍝ returns setting from a config style namespace or provides a default if it doesn't exist
    ⍝ pars - name [num] [default]
    ⍝ ns - namespace reference
    ⍝ name - name of the setting
    ⍝ num - 1 if setting is numeric scalar, (,1) if numeric vector is allowed, 0 otherwise
    ⍝ default - default value if not found
          pars←eis pars
          (name num)←2↑pars,(⍴pars)↓'' 0 ''
          :If 2<⍴pars ⋄ default←3⊃pars
          :Else ⋄ default←(1+num)⊃''⍬
          :EndIf
          r←(⍴ns)⍴⊂default
          :If ∨/mask←0≠⊃¨ns.⎕NC⊂name
              (mask/r)←(((⍴⍴num)∘tonum)⍣(⊃num))¨(mask/ns).⍎⊂name
          :EndIf
          :If 0=⍴⍴r ⋄ r←⊃r ⋄ :EndIf
        ∇

        eis←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵} ⍝ Enclose if simple

          tonum←{⍺←0
              1∊⍺:tonumvec ⍵
              w←⍵ ⋄ ((w='-')/w)←'¯'
              ⊃⊃{~∧/⍺:⎕SIGNAL 11 ⋄ ⍵}/⎕VFI w}

        ∇ r←tonumvec v;to;minus;digits;c;mask
    ⍝ tonum vector version
    ⍝ allows for specific of ranges and comma or space delimited numbers
    ⍝ tonumvec '8080-8090'  or '5,7-9,11-15'
          r←⍬
          ⎕SIGNAL 11/⍨~∧/v∊⎕D,'., -¯'
          to←{⍺←⍵ ⋄ ⍺,⍺+(¯1*⍺>⍵)×⍳|⍺-⍵}
          v←('^\s*|\s*$'⎕R'')('\s+'⎕R' ')('\s*-\s*'⎕R'-')v
          minus←'-'=v
          digits←v∊⎕D,'.'
          ((minus>(minus∨{1↓⍵,0}digits)∧{¯1↓0,⍵}digits)/v)←⊂'¯'
          ((' '=v)/v)←','
          (('-'=v)/v)←⊂' to '
          :Trap 0
              :For c :In {⎕ML←3 ⋄ ⍵⊂⍨⍵≠','}∊v
                  r,←⍎∊c
              :EndFor
          :Else
              ⎕SIGNAL 11
          :EndTrap
        ∇

    :Endclass


    :endsection

    :section Utilities
    disperror←{326=⎕DR ⍵: ⋄ '***'≡3↑⍵:⎕←⍵}
    isWin←'Win'≡3↑1⊃#.⎕WG'APLVersion'
    fileSep←'/\'[1+isWin]
    isRelPath←{{~'/\'∊⍨(⎕IO+2×isWin∧':'∊⍵)⊃⍵}3↑⍵}
    MSRoot←{('.'=⊃⍵)∨isRelPath ⍵:'.',fileSep,⍵ ⋄ ⍵}{(1-⌊/'/\'⍳⍨⌽⍵)↓⍵}⎕WSID
      tonum←{⍺←0
          1∊⍺:tonumvec ⍵
          w←⍵ ⋄ ((w='-')/w)←'¯'
          ⊃⊃{~∧/⍺:⎕SIGNAL 11 ⋄ ⍵}/⎕VFI w}
    try←{0::'' ⋄⍎⍵}
    empty←{0∊⍴⍵}
    notEmpty←~∘empty
    eis←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵} ⍝ Enclose if simple
    isRef←{(0∊⍴⍴⍵)∧326=⎕DR ⍵}
    folderize←{19 22::⍵,'/'↓⍨'/\'∊⍨¯1↑⍵ ⋄ ∊1 ⎕NPARTS⊃{⍺,(⍵=1)/'/'}/0 1 ⎕NINFO ⍵} ⍝ append trailing file separator unless empty and left arg←1
    makeSitePath←{folderize ⍺{((isRelPath ⍵)/⍺),⍵},(2×'./'≡2↑⍵)↓⍵}
    subdirs←{⊃{(⍵=1)/⍺}/0 1(⎕NINFO⍠1)⍵,'/*'}
    Log←{⎕←⍵}

    ∇ {r}←AutoStatus setting
      ⍝ Set Dyalog/Windows AutoStatus setting
      :If r←isWin
          :Trap 0
              :If setting≠r←⎕SE.mb.tools.status_error.Checked
                  1 ⎕NQ ⎕SE.mb.tools.status_error'Select'
              :EndIf
          :EndTrap
      :EndIf
    ∇

    ∇ r←tonumvec v;to;minus;digits;c;mask
    ⍝ tonum vector version
    ⍝ allows for specific of ranges and comma or space delimited numbers
    ⍝ tonumvec '8080-8090'  or '5,7-9,11-15'
      r←⍬
      ⎕SIGNAL 11/⍨~∧/v∊⎕D,'., -¯'
      to←{⍺←⍵ ⋄ ⍺,⍺+(¯1*⍺>⍵)×⍳|⍺-⍵}
      v←('^\s*|\s*$'⎕R'')('\s+'⎕R' ')('\s*-\s*'⎕R'-')v
      minus←'-'=v
      digits←v∊⎕D,'.'
      ((minus>(minus∨{1↓⍵,0}digits)∧{¯1↓0,⍵}digits)/v)←⊂'¯'
      ((' '=v)/v)←','
      (('-'=v)/v)←⊂' to '
      :Trap 0
          :For c :In {⎕ML←3 ⋄ ⍵⊂⍨⍵≠','}∊v
              r,←⍎∊c
          :EndFor
      :Else
          ⎕SIGNAL 11
      :EndTrap
    ∇

    ∇ r←SubstPath r
      r←(#.Strings.subst∘('%ServerRoot%'(¯1↓MSRoot)))r
      r←(#.Strings.subst∘('%SiteRoot%'(¯1↓AppRoot)))r
    ∇

    ∇ r←isRunning
      :Trap r←0
          r←ms.TID∊⎕TNUMS
      :EndTrap
    ∇

    ∇ r←Oops;dmx;ends;xsi
    ⍝ debugging framework to bubble up to user's code when rendering fails
      r←'⎕SIGNAL 811'
      ends←{(,⍺)≡(-⍴,⍺)↑⍵}
      :If {0::0 ⋄ #.HtmlPage∊∊⎕CLASS ⍵}⊃⊃⎕RSI
          r←'⎕TRAP←(800 ''C'' ''→FAIL'')(811 ''E'' ''⎕SIGNAL 801'')(813 ''E'' ''⎕SIGNAL 803'')(812 ''S'')(85 ''N'')(0 ''S'')'
          ⎕←''
          ⎕←'*** MiServer Debug ***'
          ⎕←↑⎕DMX.DM
          ⎕←''
          ⎕←'      ⎕SIGNAL 800 ⍝ to ignore this error and carry on'
          ⎕←'      or Press Ctrl-Enter to invoke debugger'
      :Else
          :Select ⎕DMX.EN
          :Case 801
              xsi←⎕XSI
              :If '.HandleMSP'ends 2⊃xsi
                  r←'→FAIL'
              :ElseIf '.HandleMSP'ends 4⊃xsi
                  :If '.Render'ends 3⊃xsi
                      r←'⎕SIGNAL 813'
                  :EndIf
              :ElseIf '.HandleMSP'ends 3⊃xsi
                  :If '.Wrap'ends 2⊃xsi
                      r←'⎕SIGNAL 813'
                  :EndIf
              :Else
                  r←'⎕SIGNAL 811'
              :EndIf
          :Case 803
              r←'⎕SIGNAL 812'
              ⎕←'Press Ctrl-Enter to invoke debugger'
          :Else
              :Trap 0
                  dmx←⎕DMX
                  ⎕←'*** MiServer Debug ***'
                  ⎕←'' 'occurred at:',⍪dmx.(EM(2⊃DM))
                  ⎕←'' 'SI Stack is ',(⍕¯1+⍴⎕XSI),' levels deep'
                  ⎕←''
              :EndTrap
              ⎕←'      ⎕SIGNAL 800 ⍝ to ignore this error and carry on'
              ⎕←'      ⎕SIGNAL 801 ⍝ to cut back and debug'
              r←''
          :EndSelect
      :EndIf
    ∇
    :endsection

:EndNamespace                           
