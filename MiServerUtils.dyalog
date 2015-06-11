:Namespace MiServerUtils
⍝ contains utilities to manage a MiServer installation
    make←{'<input type="button" onclick="gotoW3Schools(''',⍵,''')" value="',⍵,'"/>'}
    dlb←{⍵↓⍨+/∧\' '=⍵}
    penclose←{⎕ML←3 ⋄ ⍵⊂⍨~⍵∊⍺}
    get←{(⍺[;2],⊂'')⊃⍨⍺[;1]⍳⊂⍵}
    remove←{(⍵∘≢¨⍺[;1])⌿⍺}

    ∇ BuildMSDocs;ns;nss
      ⎕SE.SALT.Load'tools/code/fileUtils'
      nss←#.(_HTML _JQ _SF _DC _JSS)
      Build_htmlHelp
      :For ns :In nss
          :For a :In b
          :EndFor
      :EndFor
    ∇

    ∇ Build_htmlHelp
      tab←⎕NEW _HTML.Table(⍉{⍵{⍵⍴(×/⍵)↑⍺}8,⌈(⍴⍵)÷8}make¨(⊂'SALT_Data')~⍨_html.⎕NL ¯9)
      tab.class←'htmltags'
    ∇

    ∇ r←BuildWidgetHelp ref;src;comments;name;ns;x;mask;chunk;n;t;desc
      r←0 2⍴⊂''
      (x ns name)←'.'penclose⍕ref
      src←1↓⎕SRC ref
      src←dlb¨(+/∧\''∘≡¨src)↓src ⍝ remove leading blank lines
      src←1↓¨src/⍨∧\'⍝'=⊃¨src
      mask←':'∊¨src
      :For chunk :In mask⊂src
          (n t)←2↑':'penclose⊃chunk
          r⍪←(dlb n)(↑(dlb t){0∊⍴⍺:⍵ ⋄ (⊂⍺),⍵}1↓¨1↓chunk)
      :EndFor
      desc←dlb,r get'Description'
      r←r remove'Description'
      r⍪⍨←'Control'(ns,'.',name,{0∊⍴⍵:'' ⋄ ' - ',⍵},desc)
      :If 0≠ref.⎕NC⊂'DocBase'
          r⍪←'Source Doc'(#._HTML.A ref.DocBase)
      :EndIf
    ∇
:EndNamespace