:Namespace MiServerUtils
⍝ contains utilities to manage a MiServer installation
    make←{'<input type="button" onclick="gotoW3Schools(''',⍵,''')" value="',⍵,'"/>'}
  
    ∇ BuildMSDocs;ns;nss
      nss←#.(_HTML _JQ _SF _DC _JSS)
      Build_htmlHelp
      :For ns :In nss
          :For
          :EndFor
      :EndFor
    ∇

    ∇ Build_htmlHelp
      tab←⎕NEW _HTML.Table(⍉{⍵{⍵⍴(×/⍵)↑⍺}8,⌈(⍴⍵)÷8}make¨(⊂'SALT_Data')~⍨_html.⎕NL ¯9)
      tab.class←'htmltags'
     
    ∇
:EndNamespace