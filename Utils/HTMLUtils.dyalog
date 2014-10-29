:Namespace HTMLUtils

    ⎕IO ⎕ML←1 0
    ⎕FX 'r←CRLF' 'r←⎕UCS 13 10' ⍝ So it will be :Included
    enlist←{⎕ML←2 ⋄ ∊⍵} ⍝ APL2 enlist
    eis←{2>|≡⍵:,⊂⍵ ⋄ ⍵} ⍝ Enclose if simple
    ine←{0∊⍴⍺:'' ⋄ ⍵} ⍝ if not empty
    ischar←{0 2∊⍨10|⎕DR⍵}
    quote←{0∊⍴⍵:'' ⋄ '"',({w←⍵⋄((w='"')/w)←⊂'\"'⋄enlist w}⍵),'"'}
    iotaz←{(⍴⍺){⍵×⍺≥⍵}⍺⍳⍵}
    innerhtml←{⊃↓/(⍵ iotaz'>')(-(⌽⍵)iotaz'<') ⍵}
    dtlb←{⍵{((∨\⍵)∧⌽∨\⌽⍵)/⍺}' '≠⍵}
    tonum←{0∊⍴⍵:⍬ ⋄ w←⍵ ⋄ ((w='-')/w)←'¯' ⋄ ⊃(//)⎕VFI w}


    ∇ r←atts Enclose innerhtml;i
    ⍝ Put an HTML tag around some HTML
      :If 1<|≡innerhtml ⋄ innerhtml←CRLF,enlist innerhtml,¨⊂CRLF ⋄ :EndIf
      :If 0∊⍴atts
          r←innerhtml
      :Else
          i←¯1+(atts←,atts)⍳' '
          r←'<',atts,'>',innerhtml,'</',(i↑atts),'>',CRLF
      :EndIf
    ∇

    ∇ r←{nl}Tag tag
    ⍝ Make a  self-closing tag
      nl←{6::1 ⋄ nl}⍬
      r←'<',tag,' />',nl/CRLF
    ∇

      Attrs←{
      ⍝ format name/value pairs as tag attributes
      ⍝  ⍵ - name/value pairs, valid forms:
      ⍝  'name="value"'
      ⍝  [n,2⍴] 'name1' 'value1' ['name2' 'value2'...]
      ⍝ ('name1' 'value1') [('name2' 'value2')]
          0∊⍴⍵:''
          {
              enlist{(×⍴⍺)/' ',⍺,(×⍴⍵)/'=',quote ⍵}/,∘⍕¨⊃⍵
          }_pifn¨,2 _box _pifn{
              1=|≡⍵:⍵
              2=|≡⍵:{1=⍴⍴⍵:(⌽2,0.5×⍴⍵)⍴⍵ ⋄ ⍵}⍵
              ↑⍵}⍵
      }

    ∇ r←tag GetAttr attr;attrs
      r←''
      :Trap 6
          →0⍴⍨0∊⍴tag←⎕XML tag
      :EndTrap
      attrs←(⊂1 4)⊃tag
      r←(attrs[;1]⍳⊂attr)⊃attrs[;2],⊂''
    ∇


      Styles←{
      ⍝ format name/value pairs as CSS style attributes
      ⍝  ⍵ - name/value pairs, valid forms:
      ⍝  'name: value'
      ⍝  [n,2⍴] 'name1' 'value1' ['name2' 'value2'...]
      ⍝ ('name1' 'value1') [('name2' 'value2')]
          ⍺←''
          0∊⍴⍵:''
          (0∊⍴⍺)↓⍺,' ',{'{',({';'=¯1↑⍵:⍵ ⋄ ⍵,';'}⍵),' }'}{
              enlist{(×⍴⍺)/' ',⍺,(×⍴⍵)/': ',⍵,';'}/,∘⍕¨⊃⍵
          }_pifn¨,2 _box _pifn{
              1=|≡⍵:⍵
              2=|≡⍵:{1=⍴⍴⍵:(⌽2,0.5×⍴⍵)⍴⍵ ⋄ ⍵}⍵
              ↑⍵}⍵
      }

    _box←{⍺←1 ⋄ (⊂⍣(⍺=|≡⍵))⍵}
    _pifn←{({⍵''}⍣(1=|≡⍵))⍵}

    ∇ r←ScriptFollows
     ⍝ treat following commented lines in caller as a script, lines beginning with ⍝⍝ are stripped out
      r←{⎕ML←1 ⋄ ∊{'⍝'=⊃⍵:'' ⋄ ' ',dtlb ⍵}¨1↓¨⍵/⍨∧\'⍝'=⊃¨⍵}dtlb¨(1+2⊃⎕LC)↓⎕NR 2⊃⎕SI
    ∇


    ∇ html←TextToHTML html;mask;CR
    ⍝ Add/insert <br/>, replaces CR with <br/>,CR
      :If ~0∊⍴html
          :If ∨/mask←html=CR←''⍴CRLF
              (mask/html)←⊂'<br/>',CR
              html←enlist html
          :EndIf
          html,←(~∨/¯2↑mask)/'<br/>',CRLF
      :EndIf
    ∇

    ∇ html←{fontsize}APLToHTML APL
    ⍝ returns APL code formatted for HTML
      fontsize←{6::'' ⋄ ';fontsize:',⍎⍵}'fontsize'
      :If 1<|≡APL ⋄ APL←enlist,∘CRLF¨APL ⋄ :EndIf
      :Trap 0
          html←3↓¯4↓'whitespace' 'preserve'⎕XML 1 3⍴0 'x'APL
      :Else
          html←APL
      :EndTrap
      html←('pre style="font-family:APL385 Unicode',fontsize,'"')Enclose CRLF,⍨html
    ∇

      MakeStyle←{
          ⍺←''
          0∊⍴⍵:''
          (' ',⍨¯2↓enlist(eis ⍺),¨⊂', '),Styles ⍵
      }

    ∇ r←HtmlSafeText txt;i;m;u;ucs
    ⍝ make text HTML "safe"
      r←,⎕FMT txt
      i←'&<>"#'⍳r
      i-←(i=1)∧1↓(i=5),0 ⍝ mark & that aren't &#
      m←i∊⍳4
      u←127<ucs←⎕UCS r
      (m/r)←('&amp;' '&lt;' '&gt;' '&quot;')[m/i]
      (u/r)←(~∘' ')¨↓'G<&#ZZZ9;>'⎕FMT u/ucs
      r←enlist r
    ∇

:EndNamespace