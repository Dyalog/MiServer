:Namespace WC2 ⍝ Web Content Construction for use with HTMLRenderer
⍝ Populated from /HTML/WC2/

    Initialized←0

    APLVersion←{⊃(//)⎕VFI ⍵/⍨2>+\'.'=⍵}2⊃#.⎕WG 'APLVersion'
    SourceFile←{0::'' ⋄ 6:: 4⊃⊃5177⌶⍬ ⋄ SALT_Data.SourceFile}

    ∇ r←{force}Init arg;msPath;path;boot;appPath;app;t
    ⍝ Bootstrap load from
      →0⍴⍨1=⊃r←(16>APLVersion)/1 'Dyalog v16.0 or later is required to use HTMLRenderer-based features'
     
      force←{6::⍵ ⋄ force}0
      :If Initialized>force
          →0⊣r←¯1 'Already initialized'
      :EndIf
     
      arg←,⊆arg
      (msPath appPath)←2↑arg,(⍴arg)↓'' ''
     
      :If 0∊⍴msPath ⍝ if no MiServer path specified, try looking at source path
      :AndIf ~0∊⍴t←SourceFile ⍬
          msPath←⊃1 ⎕NPARTS t,'/../../'
      :EndIf
     
      :If ~⎕NEXISTS path←∊1 ⎕NPARTS msPath,'/'
          →0⊣r←2 'MiServer path not found: "',msPath,'"'
      :EndIf
     
      :If ~0∊⍴app←appPath
      :AndIf ~⎕NEXISTS app←∊1 ⎕NPARTS appPath,'/'
          →0⊣r←3 'Application path not found: "',appPath,'"'
      :EndIf
     
      :If ~⎕NEXISTS boot←path,'Core/Boot.dyalog'
          →0⊣r←4 'Path does not appear to be MiServer: "',msPath,'"'
      :EndIf
     
      ⎕SE.SALT.Load boot,' -target=#'
      #.Boot.(MSRoot AppRoot)←path app
      #.Boot.Load app
      #.Boot.ms←1 #.Boot.Init #.Boot.ConfigureServer app
      #.Boot.(Configure ms)
      Initialized←1
      r←0 'WC2 initialized'
    ∇

:EndNamespace
