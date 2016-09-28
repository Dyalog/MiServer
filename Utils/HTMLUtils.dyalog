:Namespace HtmlUtils

    (⎕IO ⎕ML)←1
    ⎕FX 'r←CRLF' 'r←⎕UCS 13 10' ⍝ So it will be :Included
    enlist←{⎕ML←1 ⋄ ∊⍵} ⍝ APL2 enlist
    eis←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵} ⍝ Enclose if simple
    ine←{0∊⍴⍺:'' ⋄ ⍵} ⍝ if not empty
    ischar←{0 2∊⍨10|⎕DR⍵}
    quote←{0∊⍴⍵:'' ⋄ '"',({w←⍵⋄((w='"')/w)←⊂'\"'⋄enlist w}⍵),'"'}
    iotaz←{(⍴⍺){⍵×⍺≥⍵}⍺⍳⍵}
    innerhtml←{⊃↓/(⍵ iotaz'>')(-(⌽⍵)iotaz'<') ⍵}
    dtlb←{⍵{((∨\⍵)∧⌽∨\⌽⍵)/⍺}' '≠⍵}
   ⍝ tonum←{0∊⍴⍵:⍬ ⋄ w←⍵ ⋄ ((w='-')/w)←'¯' ⋄ ⊃(//)⎕VFI w}


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

      FormatAttrs←{
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
          0∊⍴⍵:⍺,'{}'
          (0∊⍴⍺)↓⍺,{'{',({';'=¯1↑⍵:⍵ ⋄ ⍵,';'}⍵),'}'}{
              enlist{(×⍴⍺)/⍺,(×⍴⍵)/':',⍵,';'}/,∘⍕¨⊃⍵
          }_pifn¨,2 _box _pifn{
              1=|≡⍵:⍵
              2=|≡⍵:{1=⍴⍴⍵:(⌽2,0.5×⍴⍵)⍴⍵ ⋄ ⍵}⍵
              ↑⍵}⍵
      }

    _box←{⍺←1 ⋄ (⊂⍣(⍺=|≡⍵))⍵}
    _pifn←{({⍵''}⍣(1=|≡⍵))⍵}

    ∇ r←ScriptFollows;lines;pgm;from
     ⍝ Treat following commented lines in caller as a script, lines beginning with ⍝⍝ are stripped out
      :If 0∊⍴lines←(from←⎕IO⊃⎕RSI).⎕NR pgm←2⊃⎕SI
          lines←↓from.(180⌶)pgm
      :EndIf
      r←2↓∊CRLF∘,¨{⍵/⍨'⍝'≠⊃¨⍵}{1↓¨⍵/⍨∧\'⍝'=⊃¨⍵}dtlb¨(1+2⊃⎕LC)↓lines
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

    ∇ html←APLToHTMLColor APL;types;colors;class;codes;apply;lines;head;tail;c;ent
     ⍝ returns APL code formatted for HTML with syntax coloring
      :Trap 0
          colors←⍬
          colors,←⊂'i200comment'(1 26 63)
          colors,←⊂'i200char'(4 29)
          colors,←⊂'i200num'(5 30)
          colors,←⊂'i200local'(10 32 35 53)
          colors,←⊂'i200global'(7 52 55)
          colors,←⊂'i200primitive'(19 44 146 To 153 214 To 221)
          colors,←⊂'i200idiom'(23 48)
          colors,←⊂'i200control'(58 155 To 179 181 To 213 222 To 248)
          colors,←⊂'i200space'(8 9 33 34)
          colors,←⊂'i200quad'(12 To 15 37 To 40)
     
          html←({(+/∨\' '≠⌽⍵)↑¨↓⍵}⍣(1≥|≡APL))APL ⍝ Make VTV if matrix
          lines←∊1↑¨⍨≢¨html
          types←0,0,⍨∊200⌶html                        ⍝ 200⌶ is color coding
     
          :For c ent :InEach '&<'('&amp;' '&lt;')
              ((c⍷∊html)/∊html)←⊂⊂ent
          :EndFor
     
          html←' ',' ',⍨⊃,/html
          :For class codes :In colors
              apply←1 0⍷types∊codes
              (apply/html)←(apply/html),¨⊂'</span>'
          :EndFor
          :For class codes :In colors
              apply←0 1⍷types∊codes
              (apply/html)←(apply/html),¨⊂'<span class="',class,'">'
          :EndFor
          head←1↓⊃html ⋄ tail←¯1↓⊃⌽html
          html←lines⊂1↓¯1↓html
          (⊃html),⍨←head ⋄ (⊃⌽html),←tail
          html←∊¨html
          html,⍨¨←,∘'</span>'¨↓↑('<span class="i200line">['∘,,∘']')¨⍕¨¯1+⍳⍴html ⍝ Prepend line numbers
          html←'pre'Enclose'code'Enclose html
      :Else
          html←APLToHTML APL
      :EndTrap
    ∇

      MakeStyle←{
          ⍺←''
          0∊⍴⍵:''
          (' ',⍨¯2↓enlist(eis ⍺),¨⊂', '),Styles ⍵
      }

    ∇ r←HtmlSafeText txt;i;m;u;ucs;s
    ⍝ make text HTML "safe"
      r←,⎕FMT txt
      i←'&<>"#'⍳r
      i-←(i=1)∧1↓(i=5),0 ⍝ mark & that aren't &#
      m←i∊⍳4
      u←127<ucs←⎕UCS r
      s←' '=r
      (s/r)←⊂'&nbsp;'
      (m/r)←('&amp;' '&lt;' '&gt;' '&quot;')[m/i]
      (u/r)←(~∘' ')¨↓'G<&#ZZZ9;>'⎕FMT u/ucs
      r←enlist r
    ∇

:EndNamespace
