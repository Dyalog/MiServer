:Namespace MiServerUtils
⍝ contains utilities to manage a MiServer installation
    make←{'<input type="button" onclick="gotoW3Schools(''',⍵,''')" value="',⍵,'"/>'}
    dlb←{⍵↓⍨+/∧\' '=⍵}
    penclose←{⎕ML←3 ⋄ ⍵⊂⍨~⍵∊⍺}
    get←{(⍺[;2],⊂'')⊃⍨⍺[;1]⍳⊂⍵}
    remove←{(⍵∘≢¨⍺[;1])⌿⍺}


    ∇ BuildMSDocs;ns;nss;w;z
      ⎕SE.SALT.Load'tools/code/fileUtils'
      nss←#.(_HTML _JQ _SF _DC _JSS)
      Build_htmlHelp
      :For ns :In nss
          :For w :In ns.⎕NL ¯9.4
              BuildWidgetHelp ns⍎w
          :EndFor
      :EndFor
    ∇

    ∇ Build_htmlHelp
      tab←⎕NEW _HTML.Table(⍉{⍵{⍵⍴(×/⍵)↑⍺}8,⌈(⍴⍵)÷8}make¨(⊂'SALT_Data')~⍨_html.⎕NL ¯9)
      tab.class←'htmltags'
    ∇

    ∇ BuildWidgetHelp ref;src;comments;name;ns;x;mask;chunk;n;t;desc;api;r;p;path;filesep
      :If 0=⎕NC'fileUtils' ⋄ ⎕SE.SALT.Load'tools/code/fileUtils' ⋄ :EndIf
      filesep←¯1↑path←{⍵↓⍨1-⌊/'\/'⍳⍨⌽⍵}⎕WSID
      r←0 2⍴⊂''
      (x ns name)←'.'penclose⍕ref
      src←1↓⎕SRC ref
      src←dlb¨(+/∧\''∘≡¨src)↓src ⍝ remove leading blank lines
      src←1↓¨src/⍨∧\'⍝'=⊃¨src
      mask←{∨/'::'⍷⍵}¨src
      :For chunk :In mask⊂src
          (n t)←2↑':'penclose⊃chunk
          r⍪←(dlb n)(↑(dlb t){0∊⍴⍺:⍵ ⋄ (⊂⍺),⍵}1↓¨1↓chunk)
      :EndFor
      api←{6::'' ⋄ ' (API Level ',(⍕⍵.ApiLevel),')'}ref
      desc←dlb,r get'Description'
      r←r remove'Description'
      r⍪⍨←'Control'(ns,'.',name,{0∊⍴⍵:'' ⋄ ' - ',⍵},desc,api)
     
      :If 0≠ref.⎕NC⊂'DocBase'
          r⍪←'Source Doc'(({⎕NEW #._html.a(⍵('href'⍵))}ref.DocBase).Render)
      :EndIf
      :If 0
          r←{⎕NEW #._html.td ⍵}¨r
          r[;2].class←⊂'language-apl'
          r[;2].Push #._html.pre
          r←{⎕NEW #._html.tr(⊂⍵)}¨↓r
          r.class←(⍴r)⍴'odd' 'even'
          (r←⎕NEW #._html.table r).class←'api'
          p←⎕NEW #.HtmlPage
          p.Add #._html.meta'content="text/html; charset=utf-8" http-equiv="Content-Type"'
          p.Add #._html.link'' 'href="../../Styles/MiServerHelp.css" rel="stylesheet" type="text/css"'
          p.Add #._html.title'MiServer 3.0 - ',name
          p.Add r
          'UTF8'fileUtils.WriteFile(path,'Documentation',filesep,'DyalogAPIs',filesep,ns,filesep,name,'Help.html')(p.Render)
    ∇
:EndNamespace
