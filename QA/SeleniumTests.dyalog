:Namespace SeleniumTests
  
    ∇ r←Run1Test page;name;ref;Test
     ⍝ eg MS3Test '/QA/DC/InputGridSimple'
     
      Selenium.GoTo SITE,3↓page ⍝ Drop the "QA"
      :If 'Test'≡name←⎕SE.SALT.Load AppRoot,page
          :Trap stopOnError×9999
              :If stopOnError∧0≠⍴r←Test ⍬
                  ⎕←'test for ',page,' failed:' ⋄ ⎕←r ⋄ ⎕←'Rerun:' ⋄ '      Test ⍬'
                  ∘∘∘
              :EndIf
          :Else
              r←'Trapped error: ',,⍕⎕DMX.EN
          :EndTrap
      :Else ⋄ r←AppRoot,page,' does not define a function called Test'
      :EndIf
    ∇

    ∇ r←FindAllFiles root;folders
      r←(⊂root,'/'),¨('*.dyalog'#.Files.List root)[;1]
      :If 0≠⍴folders←{(('.'≠⊃¨⍵[;1])∧⍵[;4])/⍵[;1]}#.Files.List root
          r←r,⊃,/FindAllFiles¨(⊂root,'/'),¨folders
      :EndIf
    ∇

    ∇ {stopOnError}Test site;count;ctl;examples;f;fail;nodot;start;t;time;z;i;START;COUNT;FAIL;Config;selpath;files
     
      :If 0=⍴AppRoot←#.Load site
          ⎕←'Test abandoned' ⋄ →0
      :EndIf
     
      selpath←(AppRoot↓⍨-3⍳⍨+\'/\'∊⍨⌽AppRoot),'/Selenium/'
      :If 0=⎕NC'Selenium'
          :Trap 0 ⋄ ⎕SE.SALT.Load selpath,'/Selenium'
          :Else ⋄ ⎕←'Unable to load Selenium' ⋄ →0
          :EndTrap
      :EndIf
      Selenium.DLLPATH←selpath
     
      Config←#.Boot.ConfigureServer AppRoot
      n←⍴files←(⍴AppRoot)↓¨FindAllFiles AppRoot,'/QA'
      ⍝ // Add code to compare this to the mipages found in the whole app
      SITE←'http://127.0.0.1:',⍕Config.Port
     
      Selenium.InitBrowser''
     
      START←⎕AI[3] ⋄ COUNT←0 ⋄ FAIL←0
      :For i :In ⍳n
          start←⎕AI[3]
          COUNT+←1
          :If 0=⍴t←Run1Test z←i⊃files
              ⍞←'.'
          :Else
              FAIL+←1
              ⎕←'*** FAILED *** ',z,': ',t
          :EndIf
      :EndFor
     
      time←⎕AI[3]-start
      t←(n≠1)/'Run #',(⍕i),'/',(⍕n),': '
     
      ⎕←'Total of ',(⍕COUNT),' samples tested in ',(∊(⍕¨24 60⊤⌊0.5+(⎕AI[3]-START)÷1000),¨'ms'),': ',(⍕FAIL),' failed.'
    ∇

:EndNamespace 