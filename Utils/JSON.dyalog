:namespace JSON

⍝ Converts JSON (as a character vector) to and from any of 3 forms:
⍝ * APL
⍝ * XML
⍝ * Namespace
⍝ Both the APL and XML forms are 100% lossless.
⍝ This means that:
⍝    json ≡ APLtoJSON JSONtoAPL json   and
⍝    json ≡ XMLtoJSON JSONtoXML json
⍝ The namespace representation may lose data when an object name contains characters that are not valid in APL names.

    (⎕IO ⎕ML)←1
    NL←⎕UCS 13 10

    :section Classes

    :Class bool
        :Field private instance _value
        :Property value
        :Access public
            ∇ r←get
              r←_value
            ∇
        :EndProperty
        ∇ ctor value
          :Access public
          :Implements Constructor
          _value←value
          ⎕DF(⎕IO+value)⊃'false' 'true'
        ∇
    :EndClass

    :class null
        :property value
        :access public
            ∇ r←get
              r←⎕NULL
            ∇
        :endproperty
        ∇ ctor
          :Access public
          :Implements constructor
          ⎕DF'null'
        ∇
    :endclass

    :class array
    :access public
        :field public value
        ∇ make array
          :Access public
          :Implements constructor
          value←array
        ∇
    :endclass

    :class object
    :access public
        :field public value←'' ''
        ∇ make object
          :Access public
          :Implements constructor
          value←object
        ∇
        ∇ r←get names;i;mask;inds;v
          :Access public
          names←{2>|≡⍵:,⊂,⍵ ⋄ ⍵}names
          inds←names⍳1⊃¨value
          r←(⍴names)⍴⎕NEW not_found
          v←2⊃¨value
          :For i :In (⍴names){(⍵≤⍺)/⍵}∪inds
              r[i]←{1<⍴⍵:⊂⍵ ⋄ ⍵}(inds=i)/v
          :EndFor
          r←r[names⍳names]
          :If (1=⍴r)
              r←⊃r
          :EndIf
        ∇
        ∇ r←names
          :Access public
          :If 0∊⍴value ⋄ r←⍬ ⋄ →0 ⋄ :EndIf
          r←1⊃¨value
        ∇
    :endclass

    :class not_found
    :endclass

    :Class ValuePairs
⍝ This class associates values with names
⍝ It contains a single Property which returns the pairs

        Names←0⍴⊂'' ⋄ Vals←⍴⎕ml←⎕io←1
        eIs←{⊂⍣(1≡≡⍵)+⍵}

        :property keyed Pairs,Values
        :access public
            ∇ set ra;i;new;there;ind
              there←~new←(⍴Names)<i←Names⍳ind←eIs⊃ra.Indexers
              (Vals Names),←new∘/¨ra.NewValue ind
              Vals[there/i]←there/ra.NewValue
            ∇
            ∇ r←get ra;i;n
              ⎕SIGNAL(1<⍴i←ra.Indexers)⍴4 ⍝ RANK err
              :If 1↑ra.IndexersSpecified
                  r←Vals[Names⍳n←eIs⊃i]
              :Else
                  r←Vals ⋄ n←Names
              :EndIf
              :If ra.Name≡'Pairs'
                  r←↓n,[1.1]r
              :EndIf
            ∇
        :endproperty

        ∇ {m}←remove ids;keep
          :Access public
          keep←~m←Names∊eIs ids
          (Names Vals)←keep∘/¨Names Vals
          m←(⍕+/m),' items removed'
        ∇

    :EndClass
⍝   ---------------------------------------------------------------------
    :endsection     ⍝ Classes

    :section Common ⍝ common code, variables, etc.

    p∆←{⍺ ⍺⍺ ¯1↓(⍺⍺/⍬),⍵} ⍝ positive shift and compare
    where←{⍵/⍳⍴⍵}
    toNum←{(v n)←⎕VFI NUMtoAPL ⍵ ⋄ (v≡,1):n ⋄ ⍬}
    isNum←{~0∊⍴toNum ⍵} ⍝ verify that the token is a single number
    nonAPLnum←{r←⍕⍵ ⋄ ((r='¯')/r)←'-' ⋄ r}
    isPtr←{(0=≡⍵)∧326=⎕DR ⍵}
    is←{326≠⎕DR ⍺:0 ⋄ 0::0 ⋄ (⎕CLASS ⍺)≡⎕CLASS ⍵}
    cdel←{⎕ML←1 ⋄ 1↓∊',',¨⍵}
    if←/⍨
    rlb←{(+/∧\' '=⍵)↓⍵} ⍝ remove leading blanks
    trim←⌽∘rlb⍣2
    us←{≠\⍵≠⍺\t≠¯1↓0,t←⍺/≠\¯1↓0,⍵} ⍝ partitioned ≠\
    isSimple←{(0∊⍴⍴⍵)∧0=≡⍵}
    isChar←{0 2∊⍨10|⎕dr ⍵}
    isJSON←{0::0 ⋄ ~0∊⍴'XML' fromJSON ⍵}
    NUMtoAPL←{b←'-'=v←⍵ ⋄ (b/v)←'¯' ⋄ ∧/b←'+'≠v:v ⋄ v/⍨b≥¯1⌽v∊'eE'}
    numeric←{1 3 5 7∊⍨10|⎕DR ⍵}

     ⍝ establish type constants (!! must be in same order as tokentypes in tokenizeJSON below)
    (true false nul comma colon objbeg objend arrbeg arrend string number)←⍳11

    ∇ {r}←ptr expect what
      :If ~r←(ptr⊃tokentypes)∊what ⋄ badtoken ptr ⋄ :EndIf
    ∇

    ∇ badtoken ptr
      ('Unexpected token: ',⍕ptr⊃tokens)⎕SIGNAL 600
    ∇

    ∇ (tokeninds tokens)←tokenizeJSON json;slash;chk;strings;bstr;estr;notstring;breaks;digits;decimal;e;num;bnum;enum;t;f;tokentypes;mask;isStr;mask2;n;numb;quote
      json~←⎕UCS 8 9 10 13    ⍝ remove control characters
      quote←'"'=json          ⍝ find double quotes (they delimit strings)
      slash←'\'=json          ⍝ need to check for \" though
      t←slash>¯1↓0,slash      ⍝ start of each group of \
      slash←slash∧t us slash  ⍝ where the real \ are
      quote←quote>¯1↓0,slash  ⍝ where the real " are
      strings←≠\quote         ⍝ mark off strings
      bstr←quote∧strings      ⍝ beginning of strings
      estr←¯1↓0,quote>strings ⍝ 1 past the end of strings
      notstring←(~strings)/json
      breaks←notstring∊'{}[]:, ' ⍝ characters to break on
      digits←notstring∊'-',⎕D ⍝ mark digits
      decimal←notstring='.'   ⍝  and decimal points
      e←notstring∊'eE' ⍝ and e's that are part of scientific notation
      e∧←(1⌽digits)∧¯1⌽digits∨decimal
      num←digits∨decimal∨e ⍝ possible numbers
      bnum←num>p∆ num ⍝ beginning of numbers
      enum←num<p∆ num ⍝ end of numbers
      t←'true'⍷notstring
      f←'false'⍷notstring
      n←'null'⍷notstring
      tokens←((bstr∨estr∨(~strings)\breaks∨bnum∨enum∨t∨f∨n)⊂json)~⊂,' ' ⍝ split into tokens
      tokentypes←'true' 'false' 'null',1⊂',:{}[]'
      tokeninds←tokentypes⍳tokens ⍝ identify the easy token types
      mask←tokeninds>⍴tokentypes
      isStr←{'"'=⍬⍴⍵}
      ((mask\mask2←isStr¨mask/tokens)/tokeninds)←string ⍝ identify the strings
      mask∧←mask\~mask2
      mask2←1∘∊∘⍴¨numb←toNum¨mask/tokens ⍝ find numbers
      ((t←mask\mask2)/tokeninds)←number
      (t/tokens)←mask2/numb ⍝ and replace with numeric values
      mask∧←mask\~mask2
      (mask/tokeninds)←0
      :If ~0∊tokeninds ⍝ if no unknown tokens... assign "odd" values
          ((tokeninds=true)/tokens)←⎕NEW bool 1
          ((tokeninds=false)/tokens)←⎕NEW bool 0
          ((tokeninds=nul)/tokens)←⎕NEW null
      :EndIf
    ∇
⍝   ---------------------------------------------------------------------
    :endsection

    :section toJSON

    ∇ r←OBJtoJSON a
      :Access public shared
      r←fromAPL a
    ∇
    ∇ r←NStoJSON a
      :Access public shared
      r←fromNS a
    ∇

⍝   ---------------------------------------------------------------------
    :endsection

    :section fromNS

    ∇ r←fromNS a
      :If isPtr a   ⍝ it's an object
          r←NSobj a
      :Else         ⍝ it's an array
          r←NSarr a
      :EndIf
    ∇

    ∇ r←NSobj a;n
      :If (a is bool)∨a is null
          r←⍕a
      :Else
          r←''
          :For n :In a.⎕NL-2 9
              r,←'"',n,'":',(NSval a.⍎n),','
          :EndFor
          r←'{',(¯1↓r),'}'
      :EndIf
    ∇

    ∇ r←NSarr a;v
      r←'[',(cdel NSval¨a),']'
    ∇

    ∇ r←NSval a
      :If isPtr a ⍝
          r←NSobj a
      :ElseIf 0 2∊⍨10|⎕DR a ⍝ character?
          r←JAchars a
      :ElseIf 1≠⍴,a
          r←NSarr a
      :Else
          r←cdel nonAPLnum¨a
      :EndIf
    ∇

⍝   ---------------------------------------------------------------------
    :endsection

    :section fromAPL

    ∇ r←fromAPL a;typ
    ⍝ An APL object is either a simple scalar (number, character or ref) or an array
    ⍝ represented by a list of [rank,shape,data]
      :If isSimple a
          r←⍕a ⋄ →0 if 2|typ←⎕DR a ⍝ numbers
          :If ⎕NULL≡a
              r←'null'
          :ElseIf typ=326 ⍝ ref (ns)
              'Cannot work on JSON itself'⎕SIGNAL 611 if ⎕THIS≡a
              r←APLObject a
          :Else
              r←JAchars a
          :EndIf
      :Else ⍝ is not simple (array)
          r←'[',(⍕⍴⍴a),∊',',¨⍕¨⍴a
          :If 0∊⍴a
              r,←',',fromAPL⊃a ⍝ prototype
          :ElseIf isChar a
              r,←',',JAchars,a ⍝ strings are displayed as such
          :Else
              r,←∊',',¨fromAPL¨,a
          :EndIf
          r,←']'
      :EndIf
    ∇

    ∇ js←JAchars apl;fnrbt;str;b;ucs;⎕IO
     ⍝ Get JSON characters from an APL string
      :If 0<⍴js←str←,apl
          :If 1∊b←str∊fnrbt←'"\/',⎕UCS 12 10 13 8 9
              (b/str)←'\"' '\\' '\/' '\f' '\n' '\r' '\b' '\t'[fnrbt⍳b/str]
          :EndIf
          :If 1∊b←128<ucs←⎕UCS apl
              ⎕IO←0 ⋄ (b/str)←'\u'∘,¨⊂[0](⎕D,⎕A)[(4⍴16)⊤b/ucs]
          :EndIf
          js←⊃,/str
      :EndIf
      js←1⌽'""',js
    ∇

    ∇ j←ns APLfn name;rep
     ⍝ Create a JSON string from an APL fn
      'Invalid fn name'⎕SIGNAL 611 if~(ns.⎕NC name)∊3 4
      rep←fromAPL ns.⎕NR name   ⍝ the code
      j←'"\u2207',name,'":',rep ⍝ its ∇name
    ∇

    ∇ r←APLObject a;n
      r←,'{'
      :For n :In a.⎕NL-2 9.1
          r,←(JAchars n),':'    ⍝ the name
          r,←(fromAPL a⍎n),','  ⍝ the value
      :EndFor
      :For n :In a.⎕NL-3
          r,←(a APLfn n),','
      :EndFor
      r←'}',⍨(-1<⍴r)↓r
    ∇

⍝   ---------------------------------------------------------------------
    :endsection

    :section toAPL

    ∇ obj←toAPL str;c1;b
     ⍝ This fn takes a JSON string and turns it into an APL object
     ⍝ The string must follow specific rules in order to be accepted
      :If '{'=c1←1↑str←trim str~⎕UCS 8 9 10 13 ⍝ is this a ns?
          'Invalid JSON: expected }'⎕SIGNAL 600 if'}'≠¯1↑str
          obj←parseNS 1↓¯1↓str
      :ElseIf '['=c1                           ⍝ an array maybe?
          'Invalid JSON: expected ]'⎕SIGNAL 600 if']'≠¯1↑str
          obj←parseAPLArray 1↓¯1↓str
      :ElseIf '"'=c1
          obj←AJchars 1↓¯1↓str                 ⍝ a string?
      :ElseIf (,1)≡⎕IO⊃b←⎕VFI NUMtoAPL str     ⍝ a single number
          obj←⊃⊃⌽b
      :EndIf
    ∇

    ∇ str←AJchars str;sl;msk;bfnrt;u;b;x;⎕IO;Hex;i
     ⍝ Get APL chars from a JSON string
      →0↓⍨⍴,str ⋄ ⎕IO←0
      :If ∨/sl←(¯1⌽msk←isBslash str)∧str∊bfnrt←'bfnrtu'
          b←sl\~u←'u'=sl/str
          (b/str)←⎕UCS 8 12 10 13 9[bfnrt⍳b/str]
          :If ∨/b←sl\u ⍝ any \Uxxxx number?
              Hex←⎕D,'abcdef',⎕D,'ABCDEF'
              x←16⊥⍉16|Hex⍳str[i←(b/⍳⍴b)∘.+1+⍳4]
              (b/str)←⎕UCS x
              msk[i]←1 ⍝ mask out these positions
          :EndIf
      :EndIf
      str←⊃,/(~msk)/str
    ∇

    ∇ ns←parseNS s;txt;level;split;n;names;val
     ⍝ Surrounding '{}'s not present here
     ⍝ Elements are separated by ','
      ns←#.⎕NS'' ⋄ →0↓⍨⍴txt←isText s
      level←(+\txt<s∊'[{')-+\txt<s∊']}'
      n←+/split←1,(s∊',:')∧txt<level=0
      'Invalid JSON: unbalanced braces or brackets'⎕SIGNAL 600 if(2|n)∨0≠¯1↑level
      names val←↓⍉trim¨(n÷2)2⍴1↓¨split⊂';',s
      names←{0≤⎕NC n←1↓¯1↓⍵:n ⋄ AJchars n}¨names
      :For n s :InEach names val
          val←toAPL s
          :If '∇'≠1↑n
              ⍎'ns.',n,'←val'
          :Else ⍝ it's a fn
              {}÷((1↓n)≢ns.⎕FX val)/'Invalid fn defn'
          :EndIf
      :EndFor
    ∇

    ∇ array←parseAPLArray str;p;rank;n;txt;level;split;shape
     ⍝ Rank and shape precede data
      shape←⍬
      rank←toNum(¯1+p←str⍳',')↑str ⋄ str←p↓str
      :While rank>0 ⋄ shape,←toNum(¯1+p←str⍳',')↑str ⋄ str←p↓str ⋄ rank-←1 ⋄ :EndWhile
    ⍝ There will alway be at least ONE element (the prototype) so we need to do this:
    ⍝ Elements are separated by ',' - find them
      txt←isText str
      level←(+\txt<str∊'[{')-+\txt<str∊']}'
      ⍝:If 1<+/
      split←1,(txt<str=',')∧level=0
      array←toAPL¨1↓¨split⊂';',str
      array←⊃⍣(∧/txt)⌷array
      ⍝:EndIf
      array←shape⍴array
    ∇

⍝   ---------------------------------------------------------------------
    :endsection

    :section JSONto

    ∇ r←JSONtoOBJ json
      :Access public shared
      r←'APL'fromJSON json
    ∇

    ∇ r←JSONtoNS json
      :Access public shared
      r←'NS'fromJSON json
    ∇

    ∇ r←{format}fromJSON json;tokens;tokentypes;ns
    ⍝ format: one of 'APL' 'XML' or 'NS'
    ⍝ json: character vector of JSON
      (tokentypes tokens)←tokenizeJSON json
      r←⍬
      :If 0=⎕NC'format' ⋄ format←'APL' ⋄ :EndIf
      :If 0<⍴tokentypes
          :If 0∊tokentypes ⋄ ('Invalid token(s):',(⊃,/' ',¨(tokentypes=0)/tokens))⎕SIGNAL 600 ⋄ :EndIf
          :If arrbeg=1⊃tokentypes
              r←2⊃''parseArray 1
          :Else
              r←2⊃parseObject 1
          :EndIf
      :EndIf
      :If format≡'NS'
          r←APLtoNS r
      :EndIf
    ∇

    ∇ (ptr r)←parseObject ptr;name;nv
      r←⍬
      ptr+←ptr expect objbeg
      :If objend≠ptr⊃tokentypes
     l1:  (ptr nv)←parseNameValue ptr
          r,←⊂nv
          :Select ptr⊃tokentypes
          :Case comma ⋄ ptr+←1 ⋄ →l1
          :Case objend ⋄ ptr+←1
          :Else ⋄ badtoken ptr
          :EndSelect
      :EndIf
      r←⎕NEW object r
    ∇

    ∇ (ptr r)←parseNameValue ptr;name;value;xmlname;attr;arr
      ptr expect string
      name←¯1↓1↓ptr⊃tokens
      ptr+←1
      ptr+←ptr expect colon
      (ptr value arr)←name parseValue ptr
      r←name value
    ∇

    ∇ (ptr r arr)←name parseValue ptr;xmlname;t
      arr←0
      :Select t←ptr⊃tokentypes
      :CaseList number true false nul
          r←⊃ptr⊃tokens ⋄ ptr+←1
      :Case string
          r←AJchars ¯1↓1↓ptr⊃tokens ⋄ ptr+←1
      :Case objbeg
          (ptr r)←parseObject ptr
      :Case arrbeg
          arr←1
          (ptr r)←name parseArray ptr
      :Else ⋄ badtoken ptr
      :EndSelect
    ∇

    ∇ (ptr r)←name parseArray ptr;value;attr;s;i;arr
      r←⍬
      ptr+←ptr expect arrbeg
      :If arrend=ptr⊃tokentypes
          ptr+←1
      :Else
     l1:  (ptr value arr)←name parseValue ptr
          r,←⊂value
          :Select ptr⊃tokentypes
          :Case comma ⋄ ptr+←1 ⋄ →l1
          :Case arrend ⋄ ptr+←1
          :Else ⋄ badtoken ptr
          :EndSelect
      :EndIf
      r←⎕NEW array r
    ∇
⍝   ---------------------------------------------------------------------
    :endsection

    :section NS

    APLstartchar←(0≤⎕nc⍪⎕av)/⎕av
    APLchar←APLstartchar,⎕D

    ∇ r←APLtoNS apl
      r←(⎕NS'')NSvalue apl
    ∇

    ∇ r←ns NSvalue obj;name;value;arr;v
      :If obj is array
          r←NSarray obj
      :Else
          :For name :In obj.names
              value←obj.get name
              :If value is object
                  ((NSname name)ns.⎕NS'')NSvalue value
              :ElseIf value is array
                  arr←NSarray value
                  ⍎'ns.',(NSname name),'←arr'
              :Else
                  ⍎'ns.',(NSname name),'←value'
              :EndIf
          :EndFor
          r←ns
      :EndIf
    ∇

    ∇ r←NSname str;mask
      mask←(⍴str)⍴0
      :If 0<⍴str
          mask[1]←(1↑str)∊APLstartchar
          (1↓mask)←(1↓str)∊APLchar
      :EndIf
      r←mask/str
    ∇

    ∇ arr←NSarray value;v
      arr←⍬
      :For v :In value.value
          :If v is object
              arr,←(⎕NS'')NSvalue v
          :Else
              arr,←,⊂v
          :EndIf
      :EndFor
    ∇
⍝   ---------------------------------------------------------------------
    :endsection

    :section XML                                                 ⍝ DanB 2011/12

    ∇ xml←{name}JSONtoXML str;c1;end;b;tag;beg;item
     ⍝ Parse JSON string into XML
      :If 0=⎕NC'name' ⋄ name←'root' ⋄ :EndIf
      tag←'V'≢name
     ⍝ V as a name is an indication that we want the Value only w/o a complete Tag
      end←tag/'</',name,'>' ⋄ beg←tag/'<',name ⋄ item←tag/'<item'
      :If '{'=c1←1↑str←trim str~⎕UCS 8 9 10 13
          'Invalid JSON: expected }'⎕SIGNAL 600 if'}'≠¯1↑str
          xml←beg,' type="object">',(parseObj 1↓¯1↓str),end
      :ElseIf '['=c1
          'Invalid JSON: expected ]'⎕SIGNAL 600 if']'≠¯1↑str
          xml←beg,' type="array">',(parseArr 1↓¯1↓str),end
      :ElseIf '"'=c1
          xml←item,'>',(XJchars 1↓¯1↓str),tag/'</item>' ⍝ we could add  type="string"
      :ElseIf ∨/b←'null' 'true' 'false'∊⊂str
          xml←item,' type="',((b⍳1)⊃1 2/'null' 'boolean'),'">',(~1↑b)/str
          xml←xml,(tag/'</item>')
      :ElseIf (,1)≡⎕IO⊃b←⎕VFI NUMtoAPL str ⍝ allow nn+Emm
          xml←item,' type="number">',str ⍝ we could also use '17⍕b'
          xml←xml,(tag/'</item>')
      :EndIf
    ∇

    ∇ str←XMLtoJSON xml;head;Q;b;ot;n;type
     ⍝ Parse XML statement into JSON
      n←⍴head←xml↑⍨'>'⍳⍨xml←trim xml
      xml←trim{⍵↓⍨-'<'⍳⍨⌽⍵}n↓xml
      :If 'array'≡type←5↑(head⍳'"')↓head
          →0↓⍨⍴xml{⍺}str←'[]'
          str←'[',(1↓∊',',¨XMLtoJSON¨cutItems xml),']'
      :ElseIf 'objec'≡type
          →0↓⍨⍴xml{⍺}str←'{}'
          str←'{',(1↓∊',',¨getObject¨cutObjects xml),'}'
      :Else ⍝ may be null if empty
          :If 0<⍴Q←('='∊head)↓'"' ⋄ xml←XJchars xml ⋄ :EndIf
          str←Q,Q,⍨xml,(0∊⍴xml)/'null'
      :EndIf
    ∇

    ∇ str←XJchars str;set;sl;msk;bfnrt;u;b;x;⎕IO;Hex;i
     ⍝ Get XML from a JSON string
      →0↓⍨⍴,str ⋄ ⎕IO←0
      sl←(¯1⌽msk←isBslash str)∧str∊bfnrt←'bfnrtu'
      :If ∨/b←str∊set←'<>&"' ⍝ we could also change other specific chars here
          (b/str)←'&lt;' '&gt;' '&amp;' '&quot;'[set⍳b/str]
      :EndIf
      :If ∨/sl
          b←sl\~u←'u'=sl/str
          (b/str)←⎕UCS 8 12 10 13 9[bfnrt⍳b/str]
          :If ∨/b←sl\u ⍝ any \Uxxxx number?
              Hex←⎕D,'abcdef',⎕D,'ABCDEF'
              x←16⊥⍉16|Hex⍳str[i←(b/⍳⍴b)∘.+1+⍳4]
              (b/str)←⎕UCS x
              msk[i]←1 ⍝ mask out these positions
          :EndIf
      :EndIf
      str←⊃,/(~msk)/str
    ∇

    ∇ str←JXchars str;char;b;msk;i;rep;seq;fnrbt
     ⍝ Get JSON from an XML &..; sequences
      msk←1 ⋄ seq←';&#x'∘,¨'CAD89cad' ⋄ fnrbt←⎕UCS 12 10 13 8 9
      :For char rep :InEach ('&lt;' '&gt;' '&quot;' '&amp;',seq)('<>"&',8⍴fnrbt)
          i←b/⍳⍴b←char⍷str
          msk>←≠\(¯1⌽b)∨(-⍴b)↑(-⍴char)↓b
          str[i]←rep
      :EndFor
      str←msk/str
      :If ∨/b←str∊char←'"\/',fnrbt
          (b/str)←'\',¨'"\/fnrbt'[char⍳b/str]
          str←∊str
      :EndIf
    ∇

    ∇ slash←isBslash txt;t
     ⍝ Find where real backslashes are
      slash←'\'=txt           ⍝ need to check for multiple \
      t←slash>¯1↓0,slash      ⍝ start of each group of \
      slash←slash∧t us slash  ⍝ where the real \ are
    ∇

    ∇ mask←isText json;t;slash;quote
      quote←'"'=json          ⍝ find double quotes (they delimit strings)
      slash←isBslash json
      quote←quote>¯1↓0,slash  ⍝ where the real " are
      mask←quote∨≠\quote
    ∇

    ∇ list←parseArr s;txt;level;split
     ⍝ Surrounding '[]'s not present here
     ⍝ Elements are separated by ','
      →(s∧.=' ')⍴⍴list←''
     ⍝ Find the separating commas
      txt←isText s
      level←(+\txt<s∊'[{')-+\txt<s∊']}'
      split←1,(s=',')∧level=0
      list←∊'item'∘JSONtoXML¨1↓¨split⊂';',s
    ∇

    ∇ obj←parseObj s;txt;level;split;n;pairs;x
     ⍝ Surrounding '{}'s not present here
     ⍝ Elements are separated by ','
      →(s∧.=' ')⍴⍴obj←''
     ⍝ Find the separating commas
      txt←isText s
      level←(+\txt<s∊'[{')-+\txt<s∊']}'
      n←+/split←1,(s∊',:')∧txt<level=0
      'Invalid JSON: unbalanced braces or brackets'⎕SIGNAL 600 if(2|n)∨0≠¯1↑level
      x←0,{0}¨pairs←trim¨(n÷2)2⍴1↓¨split⊂';',s
      x[;1]←n←{0≤⎕NC n←1↓¯1↓⍵:'<',n ⋄ 1⌽'"<SN name="',XJchars n}¨pairs[;1]
      x[;3]←{1⌽'></',1↓(¯1+⍵⍳' ')↑⍵}¨n ⍝ end tag
      x[;2]←'V'JSONtoXML¨pairs[;2]
      obj←⊃,/,x
    ∇

    ∇ vtv←cutObjects xml;b;n;ot;level
      b←'<'=xml ⋄ n←1↓0,⍨'/'=xml
      level←(+\ot←b>n)-+\b∧n
      vtv←(ot∧level=1)⊂xml
    ∇

    ∇ vtv←cutItems xml;level;start
     ⍝ Cut XML into pieces based on the <item> tag
      level←(+\start←'<item'⍷xml)-+\'</item'⍷xml
      vtv←(start∧level=1)⊂xml
    ∇

    ∇ str←getObject xml;n;head;name;b;Q;data
     ⍝ Transform XML into JSON
      n←⍴head←xml↑⍨'>'⍳⍨xml←trim xml ⋄ xml←trim{⍵↓⍨-'<'⍳⍨⌽⍵}n↓xml ⋄ Q←'"'
      name←Q,⍨Q,head~'<>'
      :If ∨/b←'name='⍷head
          name←Q,Q,⍨JXchars{⍵↑⍨¯1+⍵⍳'"'}(5+b⍳1)↓head
      :ElseIf 2<+/Q=name
          name←Q,⍨(¯1+name⍳' ')↑name
      :EndIf
     
     ⍝ If the type is boolean or number then nothing to do.
      data←xml
      :If ∨/b←'type='⍷head
          :Select 5↑(5+b⍳1)↓head
          :Case 'array'
              data←1⌽'][',1↓⊃,/',',¨XMLtoJSON¨cutItems xml
          :Case 'objec'
              data←1⌽'}{',1↓⊃,/',',¨getObject¨cutObjects xml
        ⍝ If null then the result is 'null'
          :Case 'null"'
              data←'null'
          :EndSelect
      :Else ⍝ string
          data←Q,Q,⍨JXchars xml
      :EndIf
      str←name,':',data
    ∇
⍝   ---------------------------------------------------------------------
    :endsection


    :section fromNVP ⍝ from name/value pairs
    ∇ r←fromNVP nvp;ns;d;p;x
      :If 0∊⍴nvp ⋄ r←'[]' ⋄ :Return ⋄ :EndIf
      r←'['
      :Select |≡nvp
      :Case 1
          nvp←,⊂,¨nvp
      :CaseList 2 3
          nvp←,⊂nvp
      :EndSelect
      :For p :In nvp
          :Select |≡p
          :Case 2
              d←{(isChar ⍵)>isJSON ⍵:'"',(1↓¯1↓JAchars ⍵),'"' ⋄ ⍕⍵}2⊃p
              r,←'{"',(1⊃p),'":',d,'},'
          :Case 3
              r,←'{'
              :For x :In p
                  d←{(isChar ⍵)>isJSON ⍵:'"',(1↓¯1↓JAchars ⍵),'"' ⋄ ⍕⍵}2⊃x
                  r,←'"',(1⊃x),'":',d,','
              :EndFor
              r←(¯1↓r),'},'
          :EndSelect
      :EndFor
      r←(¯1↓r),']'
    ∇

    :endsection

    :section fromArray

    fmtElement←{isChar ⍵: JAchars ⍵ ⋄ nonAPLnum ⍵}

    ∇ r←fromArray arr;n;a
    ⍝ build JSON array from APL array
      r←'['
      :If 2≥|≡arr
          :If isChar arr
              r,←JAchars arr
          :Else
              :For n :In arr
                  r,←(fmtElement n),', '
              :EndFor
              r←¯2↓r
          :EndIf
      :Else
          :For a :In arr
              r,←(fromArray a),','
          :EndFor
          r←¯1↓r
      :EndIf
      r,←']'
    ∇

:Endnamespace
