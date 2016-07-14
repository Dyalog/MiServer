:Namespace HTMLInput

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
      fontsize←{6::'' ⋄ ';font-size:',⍎⍵}'fontsize'
      :If 1<|≡APL ⋄ APL←enlist,∘CRLF¨APL ⋄ :EndIf
      :Trap 0
          html←3↓¯4↓'whitespace' 'preserve'⎕XML 1 3⍴0 'x'APL
      :Else
          html←APL
      :EndTrap
      html←('pre style="font-family:APL385 Unicode',fontsize,'"')Enclose'code'Enclose CRLF,⍨html
    ∇

    ∇ html←{fontsize}APLToHTMLColour APL;types;spans;colour;mask;⎕ML;colours
     ⍝ returns APL code formatted for HTML with syntax colouring
     ⍝ Uses global APLToHTMLcolours e.g. ('blue' 19 23)('green' 1)('gray' 32)('red' 4)...
      ⎕ML←1
      fontsize←{6::'' ⋄ ';font-size:',⍎⍵}'fontsize'
      :Trap 0
          colours←⍬
          colours,←⊂'i200comment'(1 26 63)
          colours,←⊂'i200char'(4 29)
          colours,←⊂'i200num'(5 30)
          colours,←⊂'i200local'(10 32 35 53)
          colours,←⊂'i200global'(7 52 55)
          colours,←⊂'i200primitive'(19 44 146 To 153 214 To 221)
          colours,←⊂'i200idiom'(23 48)
          colours,←⊂'i200control'(58 155 To 179 181 To 213 248)
          colours,←⊂'i200space'(8 9 33 34)
          
          html←({(+/∨\' '≠⌽⍵)↑¨↓⍵}⍣(1≥|≡APL))APL ⍝ Make VTV if matrix
          html,¨⍨←⎕UCS 13                        ⍝ Mark line beginnings
          types←∊200⌶html                        ⍝ Colour coding
          html←∊html
          spans←1,2≠/types                       ⍝ Colour spans
          html⊂⍨←spans
          types/⍨←spans
          :For colour :In colours ⍝ 'Colour' CodeElementNumber CodeElementNumber ...
              mask←types∊⊃⌽colour
              (mask/html)←{'<span class="',(⊃colour),'">',(HtmlSafeText ⍵),'</span>'}¨mask/html
          :EndFor
          html←∊html          ⍝ Encorporate tags
          html⊂⍨←html=⎕UCS 13 ⍝ Restore lines
          html↓¨⍨←1           ⍝ Remove line markers
          html,⍨¨←↓↑('<span class="i200primitive">['∘,,∘'] </span>')¨⍕¨¯1+⍳⍴html ⍝ Prepend blue line numbers
          html←('pre style="font-family:APL385 Unicode',fontsize,'"')Enclose'code'Enclose CRLF,⍨∊,∘CRLF¨html
      :Else
          html←fontsize APLToHTML APL
      :EndTrap
    ∇

    To←{(¯1↓⍺),((¯1+⊃⌽⍺)+⍳1+(⊃⍵)-(⊃⌽⍺)),1↓⍵}

    ∇ html←{id}Anchor pars;href;title;target;other;content
    ⍝ Builds an anchor <a> tag
    ⍝ pars: content {href} {title} {target} {other_attrs}
      :If 0=⎕NC'id' ⋄ id←'' ⋄ :EndIf
      pars←eis pars
      content href title target other←5↑pars,(⍴pars)↓'' '' '' '' ''
      html←('a',(FormatAttrs'id' 'href' 'title' 'target'{(⍵ ine ⍺)⍵}¨id href title target),FormatAttrs other)Enclose content
    ∇

    ∇ html←{n}BRA html
    ⍝ (BReak After) Add n <br/>'s after html
      :If 0=⎕NC'n' ⋄ n←1 ⋄ :EndIf
      html,←n{(⍺×⍴⍵)⍴⍵}'<br/>'
    ∇

    ∇ html←{n}BR html
    ⍝ (BReak) Add n <br/>'s before html
      :If 0=⎕NC'n' ⋄ n←1 ⋄ :EndIf
      html←(n{(⍺×⍴⍵)⍴⍵}'<br/>'),html
    ∇

    ∇ html←{n}SP html
    ⍝ (SPace) Add n non-breaking spaces &nbsp; before html
      :If 0=⎕NC'n' ⋄ n←1 ⋄ :EndIf
      html←(n{(⍺×⍴⍵)⍴⍵}'&nbsp;'),html
    ∇

    ∇ html←{n}SPA html
    ⍝ (SPace) Add n non-breaking spaces &nbsp; after html
      :If 0=⎕NC'n' ⋄ n←1 ⋄ :EndIf
      html,←n{(⍺×⍴⍵)⍴⍵}'&nbsp;'
    ∇

    ∇ r←{src}JS script
    ⍝ Javascript
    ⍝ script: javascript script if no src or filename if src=1
      :If 0≠⎕NC'src' ⋄ r←('script src=',quote src)Enclose''
      :Else ⋄ r←'script'Enclose script
      :EndIf
    ∇

    ∇ r←{name}DropDown pars;values;display;gv;mask;n
    ⍝ par - items selected_value(s) attributes sort
    ⍝ if items is 2 column matrix, [;1] is values, [;2] is display
      :If 0=⎕NC'name' ⋄ name←'' ⋄ :EndIf
      :If 2=⍴⍴pars ⋄ pars←,⊂pars ⋄ :EndIf
      pars←pars,(⍴pars)↓('Item1' 'Item2')'Item1' '' 0
      :If ~ischar 1⊃pars ⋄ pars[1]←⊂⍕¨1⊃pars ⋄ :EndIf
      :If 1=⍴⍴1⊃pars ⋄ values display←pars[1]
      :Else ⋄ values display←↓[1]1⊃pars
      :EndIf
      mask←values∊⍕¨eis 2⊃pars
      :If 4⊃pars ⋄ gv←⍒mask ⋄ values←values[gv] ⋄ display←display[gv] ⋄ mask←mask[gv] ⋄ :EndIf ⍝ Sort selected items first
      r←'<select ',(3⊃pars),(name ine' id=',n,' name=',n←quote name),'>',CRLF
      r,←enlist(mask{'<option value="',(⍕⍵),'"',(⍺/' selected="selected"'),'>'}¨values),¨display,¨⊂'</option>',CRLF
      r,←'</select>',CRLF
    ∇

    ∇ r←{atts}(method Form)innerhtml
      :If 9=⎕NC'atts' ⋄ atts←'action="',atts.Page,'"' ⍝ MildPage calling
      :ElseIf 0=⎕NC'atts' ⋄ atts←'' ⋄ :EndIf
      atts,←' method="',method,'"'
      atts,←('post'≡#.Strings.lc method)/' enctype="multipart/form-data"'
      r←('form ',atts)Enclose innerhtml
    ∇

    ∇ r←lab Label tag;id
      id←tag GetAttr'id'
      r←tag,⍨('label',id ine' for="',id,'"')Enclose lab
    ∇

    ∇ r←{name}Edit pars;att;size;val
    ⍝ pars: [value] [size] [attributes]
      :If 0=⎕NC'name' ⋄ name←''
      :Else ⋄ name←enlist(,∘('="',name,'"'))¨' id' ' name'
      :EndIf
      pars←,eis pars
      val size att←3↑pars,(⍴pars)↓''⍬''
      r←Tag'input ',att,((~0∊⍴size)/' size="',(⍕size),'"'),' type="text" value="',(⍕val),'"',name
    ∇

    ∇ r←{name}Submit pars
    ⍝ pars: value [attributes]
      :If 0=⎕NC'name' ⋄ name←''
      :Else ⋄ name←enlist(,∘('="',name,'"'))¨' id' ' name'
      :EndIf
      pars←,eis pars
      pars←pars,(⍴pars)↓'Submit' ''
      r←Tag'input type="submit" ',(2⊃pars),' value="',(1⊃pars),'"',name
    ∇

    ∇ r←{name}Button pars
    ⍝ pars: value [attributes]
      :If 0=⎕NC'name' ⋄ name←''
      :Else ⋄ name←enlist(,∘('="',name,'"'))¨' id' ' name'
      :EndIf
      pars←,eis pars
      pars←pars,(⍴pars)↓'Button' ''
      r←Tag'input type="button" ',(2⊃pars),' value="',(1⊃pars),'"',name
    ∇

    ∇ r←{name}File pars
    ⍝ pars: [value [size [attributes]]
      :If 0=⎕NC'name' ⋄ name←''
      :Else ⋄ name←enlist(,∘('="',name,'"'))¨' id' ' name'
      :EndIf
      pars←,eis pars
      pars←pars,(⍴pars)↓''⍬''
      r←Tag'input ',(3⊃pars),' type="file" size="',(⍕2⊃pars),'" value="',(1⊃pars),'"',name
    ∇

    ∇ r←{name}Hidden pars
    ⍝ pars: value [attributes]
      :If 0=⎕NC'name' ⋄ name←''
      :Else ⋄ name←enlist(,∘('="',name,'"'))¨' id' ' name'
      :EndIf
      pars←,eis pars
      pars←pars,(⍴pars)↓'' ''
      r←Tag'input ',(2⊃pars),' type="hidden" value="',(1⊃pars),'"',name
    ∇

    ∇ r←{name}Password pars;att;size;val
    ⍝ pars: [value] [size] [attributes]
      :If 0=⎕NC'name' ⋄ name←''
      :Else ⋄ name←enlist(,∘('="',name,'"'))¨' id' ' name'
      :EndIf
      val size att←3↑pars,(⍴pars)↓''⍬''
      r←Tag'input ',att,((~0∊⍴size)/' size="',(⍕size),'"'),' type="password" value="',val,'"',name
    ∇

    ∇ r←{name}CheckBox pars
    ⍝ pars: checked [attributes]
      :If 0=⎕NC'name' ⋄ name←''
      :Else ⋄ name←enlist(,∘('="',name,'"'))¨' id' ' name'
      :EndIf
      pars←eis pars
      pars←pars,(⍴pars)↓0 ''
      r←Tag'input ',(2⊃pars),' type="checkbox"',name,(0≠1⊃pars)/' checked="checked"'
    ∇

    ∇ r←{name}CheckBoxGroup pars;choices;sel
    ⍝ pars: values/texts
      name←{6::'' ⋄ enlist(,∘('="',name,'"'))¨' id' ' name'}⍬
      :If 2=|≡pars ⋄ choices←pars ⋄ sel←⍬
      :Else ⋄ (choices sel)←pars
      :EndIf
      :If 1=⍴⍴choices ⋄ choices←choices,[1.1]choices ⋄ :EndIf
      sel←(⊃⍴choices)↑sel
      r←enlist name∘{BRA(0 Tag'input type="checkbox"',⍺,' value="',(1⊃⍵),'"',(1=3⊃⍵)/' checked="checked"'),(2⊃⍵)}¨↓choices,sel
    ∇

    ∇ r←{name}RadioButton pars
    ⍝ pars: checked [value [attributes]]
      :If 0=⎕NC'name' ⋄ name←''
      :Else ⋄ name←enlist(,∘('="',name,'"'))¨' id' ' name'
      :EndIf
      pars←eis pars
      pars←pars,(⍴,pars)↓0 name''
      r←Tag'input ',(3⊃pars),' type="radio" value="',(2⊃pars),'"',name,(0≠1⊃pars)/' checked="checked"'
    ∇

    ∇ r←{name}RadioButtonGroup pars;choices;sel
    ⍝ pars: values/texts [sel]
      name←{6::'' ⋄ enlist(,∘('="',name,'"'))¨' id' ' name'}⍬
      :If 2=|≡pars ⋄ choices←pars ⋄ sel←⍬
      :Else ⋄ (choices sel)←pars
      :EndIf
      :If 1=⍴⍴choices ⋄ choices←choices,[1.1]choices ⋄ :EndIf
      sel←(⊃⍴choices)↑sel
      r←enlist name∘{BRA(0 Tag'input type="radio"',⍺,' value="',(1⊃⍵),'"',(1=3⊃⍵)/' checked="checked"'),(2⊃⍵)}¨↓choices,sel
    ∇

    ∇ r←{id}Table pars;x;data;atts;tdc;tda;thc;tha;hdrrows;z;mask;cellids;n;rowids;rows
    ⍝ pars: data table_atts cell_attribs header_attribs #header_rows cell-ids? row-ids?
      :If 0=⎕NC'id' ⋄ id←'' ⋄ :EndIf
      :If 2=⍴⍴pars ⋄ pars←,⊂pars ⋄ :EndIf ⍝ Matrix of data only
      pars←pars,(⍴,pars)↓(1 1⍴⊂'data')'' '' '' 0 0 0
      data atts tda tha hdrrows cellids rowids←pars
      hdrrows←⍬⍴hdrrows
      data←((rows←×/¯1↓⍴data),¯1↑⍴data)⍴data
      x←⍕¨data
      :If cellids ⍝ do we add cell ids?
          r←(' id="'∘,∘(,∘'">')¨{enlist'rc',¨⍕¨⍵}¨⍳⍴data),¨x,¨⊂'</td>'
      :Else
          r←'>',¨x,¨⊂'</td>'
      :EndIf
      :If (⍴tda)≡⍴data
          r←('<td'∘,¨tda ine¨' ',¨tda),¨r
      :ElseIf (⍴tda)=¯1↑⍴data
          r←↑(⊂'<td'∘,¨tda ine¨' ',¨tda),¨¨↓r
      :Else
          r←('<td',tda ine' ',tda)∘,¨r
      :EndIf
      :If z←0≠hdrrows ⋄ r[⍳hdrrows;]←(⊂'<th',(tha ine' ',tha),'>'),¨x[⍳hdrrows;],¨⊂'</th>' ⋄ :EndIf
      :If rowids ⍝ if using row ids, add them for non-header rows
          r←(⍳rows){'<tr id="row_',(⍕⍺),'">',⍵,'</tr>',CRLF}¨,/r
      :Else
          r←'<tr>'∘,¨(,/r),¨⊂'</tr>',CRLF
      :EndIf
      :If z ⋄ mask←(4+⍴r)⍴1 ⋄ mask[n←1,(2 3+hdrrows),⍴mask]←0
          r←mask\r
          r[n]←'<thead>' '</thead>' '<tbody>' '</tbody>',¨⊂CRLF
      :EndIf
      r←('table',(id ine' id="',id,'"'),(atts ine' ',atts))Enclose CRLF,(enlist r),CRLF
    ∇

    ∇ r←{name}List pars;items;ordered;t
    ⍝ pars: items [ordered? 0/1]
      :If 0=⎕NC'name' ⋄ name←'' ⋄ :EndIf
      :Select ≡pars
      :CaseList 1 ¯2 ⋄ ordered←¯1↑pars ⋄ items←eis ¯1↓pars
      :Case 2 ⋄ ordered←0 ⋄ items←pars
      :Else ⋄ (items ordered)←2↑pars,(⍴,pars)↓'' 0
      :EndSelect
      t←(1+ordered)⊃'ul' 'ol'
      r←(t,name ine' id=',quote name)Enclose enlist'li'∘Enclose¨items
    ∇

    ∇ r←{name}MultiEdit pars
    ⍝ pars: (rows cols) [values [attributes]]
      :If 0=⎕NC'name' ⋄ name←'' ⋄ :EndIf
      pars←pars,(⍴pars)↓(10 40)'' ''
      r←'textarea ',(3⊃pars),(name ine' id="',name,'" name="',name,'"'),' rows="',(⍕1 1⊃pars),'" cols="',(⍕1 2⊃pars),'"'
      r←r Enclose CRLF,(2⊃pars),CRLF
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
