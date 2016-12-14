:class JSON

⍝ Converts JSON (as a character vector) to and from XML and APL.
⍝ The APL format may also save shape information.
⍝ It also includes namespaces but the namespace representation may lose data
⍝ when an object name contains characters that are not valid in APL names.
⍝ Both the APL and XML forms are 100% lossless otherwise.
⍝ This means that:
⍝    json ≡ fromAPL toAPL json   and   json ≡ fromXML toXML json

    ⎕IO←⎕ML←1 ⋄ ⎕pp←34                      ⍝ Version 2.00

    toNum←{(v n)←⎕VFI fixNum ⍵ ⋄ (v≡,1):⊃n ⋄ ⍬}
    deQuote←{'\\"'⎕R'"'⊢'\\\\'⎕R'\\'⊢'""'strip ⍵}
    isRef←{(0=≡⍵)∧326=⎕DR ⍵}
    if←/⍨
    trim←⌽∘{(+/∧\' '=⍵)↓⍵}⍣2
    us←{≠\⍵≠⍺\t≠¯1↓0,t←⍺/≠\¯1↓0,⍵} ⍝ partitioned ≠\
    isChar←{0 2∊⍨10|⎕dr ⍵}
    isSingle←{(1=⊃⍴,⍵)∧2>≡⍵}
    isSimple←{(0∊⍴⍴⍵)∧0=≡⍵}
    isJSON←{0::0 ⋄ ~0∊⍴ toXML ⍵}
    fixNum←{b←'-'=V←⍵ ⋄ (b/V)←'¯' ⋄ ∧/b←'+'≠V:V ⋄ (b≥¯1⌽V∊'eE')/V}
    fmtNum←{(2|⎕dr ⍵)⍲∨/b←'¯'=r←⍕⍵:r ⋄ (b/r)←'-' ⋄ r}
    strip←{⍺←'{}' ⋄ ∧/⍺=(1↑⍵),¯1↑⍵:1↓¯1↓⍵ ⋄ ⍵}
    validName←{('.'∊⍵)<0≤⎕NC ⍵}
    beginsWith←{⍵≡(⍴⍵)↑⍺}
    :field public shared true←⊂'true'
    :field public shared false←⊂'false'
    :field public shared null←⊂'null'

    :section fromAPL

    ∇ r←{options}fromAPL array;typ;ic;drop;ns;preserve;quote;qp;eval;t
    ⍝ array is an APL array
      :Access public shared
      ⎕SIGNAL(1<⍴⍴array)/⊂('EN' 11)('Message' 'Array rank > 1')
      :If isSimple array
          r←fmtNum array ⋄ →0 if 2|typ←⎕DR array ⍝ numbers
          :If (⎕NC⊂'array')∊9.4 9.2
              ⎕SIGNAL(⎕THIS≡array)/⊂('EN' 11)('Message' 'Array cannot be a class')
          :ElseIf 326=typ
              r←1 0 APLObject array
          :Else
              r←1⌽'""',JAchars array
          :EndIf
      :Else ⍝ is not simple (array)
          r←'['↓⍨ic←isChar array
          :If 0∊⍴array
              r←(1+ic)⊃'[]' '""'
              →0
          :ElseIf ic
              r,←1⌽'""',JAchars,array ⍝ strings are displayed as such
          :ElseIf 2=≡array
          :AndIf 0=≢⍴array
          :AndIf isChar⊃array
              r←⊃array
              →0
          :Else
              r,←1↓∊',',¨fromAPL¨,array
          :EndIf
          r,←ic↓']'
      :EndIf
    ∇

    ∇ r←{options}serializeAPL array;typ;ic;drop;ns;preserve;quote;qp;eval;t
    ⍝ array is an APL array
    ⍝ options - formatting options
    ⍝     [1] put "quotes" around names?
    ⍝     [2] preserve APL shape info?
    ⍝     [3] eval? - interpret leading '⍎' as indication to treat as JavaScript rather than as a string
    ⍝ represented by a list of [rank,shape, if we preserve it, then data]
      :Access public shared
      :If 0=⎕NC'options' ⋄ options←0 0 1 ⋄ :EndIf
      qp←(quote preserve eval)←3↑options  ⍝ do we quote the names and preserve APL shape?
      :If isSimple array
          r←fmtNum array ⋄ →0 if 2|typ←⎕DR array ⍝ numbers
          :If ⎕NULL≡array
              r←'null'
          :ElseIf typ=326 ⍝ ref (ns)
              'Cannot work on JSON itself'⎕SIGNAL 611 if ⎕THIS≡array
              r←qp APLObject array
          :Else
              r←1⌽'""',JAchars array
          :EndIf
      :Else ⍝ is not simple (array)
          drop←preserve<ic←isChar array
          r←drop↓'[',preserve/',',⍨(⍕⍴⍴array),∊',',¨⍕¨⍴array
          :If 0∊⍴array
              :If ~preserve ⋄ →0⊣r←(1+ic)⊃'[]' '""' ⋄ :EndIf
              r,←qp fromAPL⊃array ⍝ prototype
          :ElseIf ic
              :If eval
              :AndIf ∨/(array~' ')∘beginsWith¨'function' 'ej.' '$('(,'⍎') ⍝!!! for jQuery (and Syncfusion) options, treat things beginning with function or ej. as literals
                  r←('⍎'=1↑array)↓array
              :Else
                  r,←1⌽'""',JAchars,array ⍝ strings are displayed as such
              :EndIf
          :Else
              ns←⍬⍴(~preserve)×0⌈¯1+⍴⍴array
              r,←1↓∊',',¨qp∘serializeAPL¨,↓⍣ns⊢array
          :EndIf
          r,←drop↓']'
      :EndIf
    ∇

    ∇ js←{trUni}JAchars apl;fnrbt;str;b;ucs;⎕IO
      :Access public shared
     ⍝ Get JSON characters from an APL string
      :If 0<⍴js←str←,apl
          :If 1∊b←str∊fnrbt←'"\/',⎕UCS 12 10 13 8 9
              (b/str)←'\"' '\\' '\/' '\f' '\n' '\r' '\b' '\t'[fnrbt⍳b/str]
          :EndIf
          :If 1∊b←128<ucs←⎕UCS apl
          :AndIf {6::⍵ ⋄ trUni}1
              ⎕IO←0 ⋄ (b/str)←'\u'∘,¨⊂[0](⎕D,⎕A)[(4⍴16)⊤b/ucs]
          :EndIf
          js←∊str
      :EndIf
    ∇

    ∇ j←ns APLfn name;rep
     ⍝ Create a JSON string from an APL fn
      'Invalid fn name'⎕SIGNAL 611 if~(ns.⎕NC name)∊3 4
      rep←fromAPL ns.⎕NR name   ⍝ the code
      j←'"\u2207',name,'":',rep ⍝ its ∇name
    ∇

    ∇ r←options APLObject NS;n;name;quote;preserve
     ⍝ Create a name-value pair JSON string from a namespace
      (quote preserve)←2↑options
      r←,'{'
      :For n :In n←NS.⎕NL-2 9.1
          r,←(quote makeString n),':'    ⍝ the name
          r,←(options fromAPL NS⍎n),','  ⍝ the value
      :EndFor
      :If (0∊⍴n)∧(⊂name←⍕NS)∊'true' 'false' ⋄ →0⊣r←name
      :Else
          :For n :In NS.⎕NL-preserve/3
              r,←(NS APLfn n),','
          :EndFor
      :EndIf
      r←'}',⍨(-1<⍴r)↓r
    ∇

    ∇ r←q makeString name;Q
    ⍝ Find the real string associated with an APL variable name
      :If q∨←'⍙'∊1↑r←name
          r←⎕UCS⊃⌽⎕VFI{b\⍵/⍨b←~⍵∊'⍙_'}name
         ⍝ Special characters " and \ must be taken into account
          ((r∊'"\')/r),⍨←'\'
      :EndIf
      r←Q,(∊r),Q←q/'"'
    ∇

    ∇ r←name toNS data
      :Access public shared
      r←name{r←⎕NS'' ⋄ r⊣r⍎'(',(⍕⍺),')←⍵'}data
    ∇

⍝   ---------------------------------------------------------------------
    :endsection fromAPL


    :section toAPL

    ∇ obj←{options}toAPL str;c1;b
     ⍝ This fn takes a JSON string and turns it into an APL object
     ⍝ The string must follow specific rules in order to be accepted
      :Access public shared
      str←,str
      ⎕SIGNAL(⊂('EN' 11)('Message' 'Argument is not a simple character vector'))if~isChar str
      :If 0=⎕NC'options' ⋄ options←0 ⋄ :EndIf       ⍝ do we preserve APL shape?
      :If '{'=c1←1↑str←trim str~⎕UCS 8 9 10 13 ⍝ is this a ns?
          ⎕SIGNAL(⊂('EN' 2)('Message' 'Invalid JSON - expected }'))if'}'≠¯1↑str
          obj←options parseNS strip str
      :ElseIf '['=c1                           ⍝ an array maybe?
          ⎕SIGNAL(⊂('EN' 2)('Message' 'Invalid JSON - expected ]'))if']'≠¯1↑str
          obj←,⍣(~options)⊢options parseAPLArray 1↓¯1↓str
      :ElseIf '"'=c1
          obj←AJchars 1↓¯1↓str                 ⍝ a string?
      :ElseIf (,1)≡⎕IO⊃b←⎕VFI fixNum str       ⍝ a single number
          obj←⊃⊃⌽b
      :ElseIf 'null'≡str
          obj←⎕NULL
      :ElseIf 'true'≡str
          obj←true
      :ElseIf 'false'≡str
          obj←false
      :Else
          obj←str
      :EndIf
    ∇

    ∇ obj←{options}deserializeAPL str;c1;b
     ⍝ This fn takes a JSON string and turns it into an APL object
     ⍝ The string must follow specific rules in order to be accepted
      :Access public shared
      str←,str
      ⎕SIGNAL(⊂('EN' 11)('Message' 'Argument is not a simple character vector'))if~isChar str
      :If 0=⎕NC'options' ⋄ options←0 ⋄ :EndIf       ⍝ do we preserve APL shape?
      :If '{'=c1←1↑str←trim str~⎕UCS 8 9 10 13 ⍝ is this a ns?
          ⎕SIGNAL(⊂('EN' 2)('Message' 'Invalid JSON - expected }'))if'}'≠¯1↑str
          obj←options parseNS strip str
      :ElseIf '['=c1                           ⍝ an array maybe?
          ⎕SIGNAL(⊂('EN' 2)('Message' 'Invalid JSON - expected ]'))if']'≠¯1↑str
          obj←,⍣(~options)⊢options parseAPLArray 1↓¯1↓str
      :ElseIf '"'=c1
          obj←AJchars 1↓¯1↓str                 ⍝ a string?
      :ElseIf (,1)≡⎕IO⊃b←⎕VFI fixNum str       ⍝ a single number
          obj←⊃⊃⌽b
      :ElseIf 'null'≡str
          obj←⎕NULL
      :ElseIf 'true'≡str
          obj←true
      :ElseIf 'false'≡str
          obj←false
      :Else
          obj←str
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
      str←,⊃,/(~msk)/str
    ∇

    ∇ ns←preserve parseNS s;txt;level;split;n;names;val;msg
     ⍝ Surrounding '{}'s not present here
     ⍝ Elements are separated by ','
      ns←#.⎕NS'' ⋄ →0↓⍨⍴txt←isText s
      level←(+\txt<s∊'[{')-+\txt<s∊']}'
      n←+/split←1,(s∊',:')∧txt<level=0
      msg←'Invalid JSON: ',(1+2|n)⊃'unbalanced braces or brackets' 'bad format'
      msg ⎕SIGNAL 600 if(2|n)∨0≠¯1↑level
      (names val)←↓⍉trim¨(n÷2)2⍴1↓¨split⊂';',s
      names←{makeName deQuote ⍵}¨names
      :For n s :InEach names val
          val←preserve toAPL s
          :If '∇'≠1↑n
              ⍎'ns.',n,'←val'
          :Else ⍝ it's a fn
              {}÷((1↓n)≢ns.⎕FX val)/'Invalid fn defn'
          :EndIf
      :EndFor
    ∇

    ∇ r←makeName str
     ⍝ Make up a name for an APL variable
      :Access public shared
      →0↓⍨('⍙'∊1↑r)∨~validName r←str
      r←'⍙',∊'_',¨⍕¨⎕UCS str
    ∇

    ∇ r←parseName name
    ⍝ parses a name created by makeName
      :Access public shared
      →0↓⍨{∧/⍵∊⎕D,'⍙_'}r←name
      r←⎕UCS r{2⊃⎕VFI ⍵\⍵/⍺}r∊⎕D
    ∇
    ∇ array←preserveShape parseAPLArray str;p;rank;n;txt;level;split;shape
     ⍝ Rank and shape precede data
      shape←⍬
      :If preserveShape
          rank←toNum(¯1+p←str⍳',')↑str ⋄ str←p↓str
          :While rank>0 ⋄ shape,←toNum(¯1+p←str⍳',')↑str ⋄ str←p↓str ⋄ rank-←1 ⋄ :EndWhile
      :EndIf
     
     ⍝ For empty arrays we exit if we don't need to preserve the shape
      →(preserveShape∨~0∊⍴str)↓⍴array←⍬
     
     ⍝ There will alway be at least ONE element (the prototype) so we need to do this:
     ⍝ Elements are separated by ',' - find them
      txt←isText str
      level←(+\txt<str∊'[{')-+\txt<str∊']}'
      'Bad [{}] nesting'⎕SIGNAL 600 if level∨.<0
      split←1,(txt<str=',')∧level=0
      array←preserveShape toAPL¨1↓¨split⊂';',str
      array←(⊃⍣((∨/str∘≡¨'true' 'false')∨preserveShape∧∧/txt))array
      →preserveShape↓0
      array←shape⍴array
    ∇

    :endsection toAPL


    :section JavaScript

    ∇ r←toJQueryParameters arr;t;p;i
    ⍝ Format APL data in a manner consistent with most jQuery-style parameter
    ⍝ arr is one of:
    ⍝ - namespace reference
    ⍝ - character vector of formatted jQuery parameters
    ⍝ - nested vector of names/values
    ⍝ N.B. - be careful with scalar names and character values ('h' 'a')('b' (1 2 3)) >> {ha:{b:[1,2,3]}} because 'h' 'a' ≡ 'ha'
     
      :Access public shared
      :If isRef arr
      :OrIf ∧/isRef¨arr
          r←0 0 1 fromAPL arr
      :Else
⍝          arr←,arr
          :If isChar arr ⍝ simple charvec?
              →0⌿⍨'}{'≡2↑¯1⌽r←arr
          :AndIf isJSON r←'{',(strip arr),'}'
              →0 ⍝ treat it like a parameters vector
          :Else
              :If 1=≡arr   ⍝ only way this happens is with scalar name
                  arr←,⊂(,⊃arr)(1↓arr)
              :ElseIf (2=⍴arr)∧isChar⊃arr ⍝ id
                  arr←,⊂arr
              :EndIf
              r←'{'
              :For i :In ⍳⍴arr
                  p←i⊃arr
                  :If (isChar p)<isChar⊃p
                      r,←(1⊃p),':'
                      :Select |≡t←{(⊃⍣(1<≡⍵))⍵}1↓p
                      :CaseList 0 1
                          r,←fromAPL{(⊃⍣(isSingle ⍵))⍵}t
                      :Else
                          r,←toJQueryParameters⊃t
                      :EndSelect
                  :Else
                      r,←fromAPL p
                  :EndIf
                  r,←','
              :EndFor
              r←(¯1↓r),'}'
          :EndIf
      :EndIf
    ∇

    ∇ r←toAPLJAX nvp;verb;fmt;value;sel;x;d;strip
    ⍝ formats name/value pairs in a manner suitable for processing by the client side of APLJAX
    ⍝ essentially there are 4 verbs:
    ⍝ ('execute' javascript)
    ⍝ ('replace' selector)('data' html)
    ⍝ ('append' selector)('data' html)
    ⍝ ('prepend' selector)('data' html)
      :Access public shared
      nvp←,nvp
      :If 0∊⍴nvp ⋄ r←'[]' ⋄ :Return ⋄ :EndIf
      strip←{(⊂(1↑⍵),¯1↑⍵)∊'""' '[]' '{}':1↓¯1↓⍵ ⋄ ⍵}
      fmt←{(isChar ⍵)>(isJSON ⍵)∨t←'⍎'=1↑,⍵:'"',(JAchars ⍵),'"'
          ⋄ t:1↓⍕⍵
          ⋄ strip toAPLJAX ⍵}
      r←'['
      :Select |≡nvp
      :Case 1  ⍝ if depth 1, assume it's a JSON character string already
          r←⍕nvp ⋄ :Return
      :Case 2 ⍝ vector of vectors
          :While ~0∊⍴nvp
              :Select verb←⊃nvp
              :Case 'execute'
                  r,←'{"',verb,'":',(fmt⊃1↓2↑nvp),'},'
                  nvp↓⍨←2
              :CaseList 'replace' 'prepend' 'append'
                  x sel d value←4↑nvp
                  r,←'{"',verb,'":"',sel,'","',d,'":',(fmt value),'},'
                  nvp↓⍨←4
              :Else
              :EndSelect
          :EndWhile
      :Case 3  ⍝ could be (('execute' 'foo')('execute' 'goo')) OR (('replace' 'sel')('data' 'foo'))
          :Select verb←⊃⊃nvp
          :Case 'execute'
              r,←∊',',⍨¨strip¨toAPLJAX¨nvp
          :Else
              (x sel)(d value)←nvp
              r,←'{"',verb,'":"',sel,'","',d,'":',(fmt value),'},'
          :EndSelect
      :Case 4
          r,←∊',',⍨¨strip¨toAPLJAX¨nvp
      :EndSelect
      r←(¯1↓r),']'
    ∇

    ∇ r←{a}fromTable w;z;t
      :Access public shared
    ⍝ converts a table of APL data into a vector (1 per row in the table) of namespaces containing named objects
    ⍝ suitable for passing to JSON.fromAPL
    ⍝ a - (optional) column headings (names for the objects in the namespaces)
    ⍝ w - matrix of data, if a is not supplied, w[1;] is assumed to be the column headings
      :If 0=⎕NC'a' ⋄ a←,1↑w ⋄ w↓⍨←1 ⋄ :EndIf
      :If (80 82∊⍨⎕DR a) ⋄ :AndIf (⍴,a)=2⊃⍴w ⋄ a←,¨a ⋄ :EndIf
      :If ~0∊⍴r←⎕NS¨(⊃⍴w)⍴⊂''
          r(a{⍺.⍎'(',(⍕makeName¨⍺⍺),')←⍵'})¨{1=⍴⍵:⊃⍵ ⋄ ⍵}¨↓w
      :EndIf
    ∇

    ∇ r←levels nestObjects nss;i;l;mask;n;current
    ⍝ nest a result of JSON.fromTable according to levels
    ⍝ nested items are in object "subItems"
      :Access public shared
      n←+/∧\levels=current←⊃levels
      r←n↑nss
      nss←n↓nss
      levels←n↓levels
      :If ~0∊⍴nss
          n←+/∧\current<levels ⍝ nest the children
          (⊃¯1↑r).subItems←,(n↑levels)nestObjects n↑nss
          nss←n↓nss
          levels←n↓levels
      :EndIf
      :If ~0∊⍴nss ⍝ anything left to do?
          r,←levels nestObjects nss
      :EndIf
    ∇

    ∇ r←{a}TableToJSON w
      :Access public shared
      :If 0=⎕NC'a' ⋄ r←fromAPL fromTable w
      :Else ⋄ r←fromAPL a fromTable w
      :End
    ∇

    ∇ r←aa Add(a w)
      :Access public shared
      r←a(aa{'{}'≡(1↑⍺⍺),¯1↑⍺⍺:(¯1↓⍺⍺),',',⍺,':',⍵,'}' ⋄ ⍺⍺,',',⍺,':',⍵})w
    ∇

    :EndSection


    :Section XML                                                 ⍝ DanB 2011/12

    ∇ xml←{name}toXML str;c1;end;b;tag;beg;item
     ⍝ Parse JSON string into XML
      :Access public shared
      :If 0=⎕NC'name' ⋄ name←'json' ⋄ :EndIf
      tag←''≢name
     ⍝ An empty name is an indication that we want the Value only w/o a complete Tag
      end←tag/'</',name,'>' ⋄ beg←tag/'<',name ⋄ item←tag/'<item'
      :If '{'=c1←1↑str←trim str~⎕UCS 8 9 10 13
          'Invalid JSON: expected }'⎕SIGNAL 600 if'}'≠¯1↑str
          xml←beg,' type="object">',(parseObj strip str),end
      :ElseIf '['=c1
          'Invalid JSON: expected ]'⎕SIGNAL 600 if']'≠¯1↑str
          xml←beg,' type="array">',(parseArr'[]'strip str),end
      :ElseIf '"'=c1
          xml←item,'>',(XJchars'""'strip str),tag/'</item>' ⍝ we could add  type="string"
      :ElseIf ∨/b←'null' 'true' 'false'∊⊂str
          xml←item,' type="',((b⍳1)⊃1 2/'null' 'boolean'),'">',(~1↑b)/str
          xml←xml,(tag/'</item>')
      :ElseIf (,1)≡⎕IO⊃b←⎕VFI fixNum str ⍝ allow nn+Emm
          xml←item,' type="number">',str ⍝ we could also use '17⍕b'
          xml←xml,(tag/'</item>')
      :Else
          'INVALID JSON'⎕SIGNAL 11
      :EndIf
    ∇

    ∇ str←{options}fromXML xml;head;Q;b;ot;n;type
     ⍝ Parse XML statement into JSON
      :Access public shared
      :If 0=⎕NC'options' ⋄ options←0 ⋄ :EndIf     ⍝ do we quote names?
      n←⍴head←xml↑⍨'>'⍳⍨xml←trim xml
      xml←{'>'≠¯1↑⍵:⍵ ⋄ ⍵↓⍨-'<'⍳⍨⌽⍵}n↓xml
      :If 'array'≡type←5↑(head⍳'"')↓head
          →0↓⍨⍴xml{⍺}str←'[]'
          str←'[',(1↓∊',',¨options∘fromXML¨cutItems xml),']'
      :ElseIf 'objec'≡type
          →0↓⍨⍴xml{⍺}str←'{}'
          str←'{',(1↓∊',',¨options∘getObject¨cutObjects xml),'}'
      :Else ⍝ may be boolean or null if empty
          :If ~'='∊head ⋄ str←Q,(JXchars xml),Q←'"'
          :ElseIf 0∊⍴xml ⋄ str←'null'
          :Else ⋄ str←xml ⍝ boolean?
          :EndIf
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
      str←JAchars str
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
      split←1,(s=',')∧txt<level=0
      list←∊'item'∘toXML¨1↓¨split⊂';',s
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
      x[;1]←n←{validName⊢n←deQuote ⍵:'<',n ⋄ 1⌽'"<SN name="',XJchars n}¨pairs[;1]
      x[;3]←{1⌽'></',1↓(¯1+⍵⍳' ')↑⍵}¨n ⍝ end tag
      x[;2]←''∘toXML¨pairs[;2]
      obj←⊃,/,x
    ∇

    ∇ vtv←cutObjects xml;b;n;ot;level
      b←'<'=xml ⋄ n←1↓0,⍨'/'=xml
      level←(+\ot←b>n)-+\b∧n
      vtv←(ot∧level=1)⊂xml
    ∇

    ∇ vtv←cutItems xml;level;start;mask
     ⍝ Cut XML into pieces based on the <item> tag
      mask←0≠level←(+\start←'<item'⍷xml)-+\'</item'⍷xml
      vtv←(mask/start∧level=1)⊂mask/xml
    ∇

    ∇ str←quote getObject xml;n;head;name;b;Q;data
     ⍝ Transform XML into JSON
      n←⍴head←xml↑⍨'>'⍳⍨xml←trim xml ⋄ data←trim{⍵↓⍨-'<'⍳⍨⌽⍵}n↓xml
      name←'<>'strip head
      :If ∨/b←'name='⍷head
          name←JXchars{⍵↑⍨¯1+⍵⍳'"'}(5+b⍳1)↓head
      :Else ⋄ b←' '=name ⍝ 2<+/name='"'
          name←(¯1+b⍳1)↑name
      :EndIf
      :If quote
      :OrIf ~validName name
          name←Q,name,Q←'"'
      :EndIf
     
     ⍝ If the type is boolean or number then nothing to do.
      :If ∨/b←'type='⍷head
          :Select 5↑(5+b⍳1)↓head
          :Case 'array'
              data←1⌽'][',1↓⊃,/',',¨quote∘fromXML¨cutItems xml
          :Case 'objec'
              data←1⌽'}{',1↓⊃,/',',¨quote∘getObject¨cutObjects data
        ⍝ If null then the result is 'null'
          :Case 'null"'
              data←'null'
          :EndSelect
      :Else ⍝ string
          data←Q,(JXchars data),Q←'"'
      :EndIf
      str←name,':',data
    ∇

    :endsection XML

    :section Utils

    ∇ r←{level}Tree ns;n;t;nms
 ⍝ Return indented name tree of APL namespace representation of JSON array
 ⍝ ns - reference to namespace created by JSON.toAPL
      :Access public shared
      r←''
      :If 0=⎕NC'level' ⋄ level←0 ⋄ :EndIf
      :If 2<≡nms←ns.⎕NL-2 9 ⋄ nms←⊃,/nms ⋄ :EndIf
      :For n :In nms
          r,←⊂((2×level)⍴' '),n
          t←ns⍎n
          :Select ⊃ns.⎕NC n
          :Case 2
              :If 326=⎕DR t
                  r,←(level+1)Tree⊃t
              :EndIf
          :Case 9
              r,←(level+1)Tree⊃t
          :EndSelect
      :EndFor
      :If level=0 ⋄ r←↑r ⋄ :EndIf
    ∇

    ∇ r←{level}TreeNames ns;n;t;nms;l
 ⍝ Return namelist of APL namespace representation of JSON array
 ⍝ ns - reference to namespace created by JSON.toAPL
      :Access public shared
      r←''
      :If 0=⎕NC'level' ⋄ level←'' ⋄ :EndIf
      :If 2<≡nms←ns.⎕NL-2 9 ⋄ nms←⊃,/nms ⋄ :EndIf
      :For n :In nms
          l←level,(0∊⍴level)↓'.',n
          t←ns⍎n
          :Select ⊃ns.⎕NC n
          :Case 2
              :If 326=⎕DR t
                  r,←l TreeNames⊃t
              :Else
                  r,←⊂l
              :EndIf
          :Case 9
              r,←l TreeNames⊃t
          :EndSelect
      :EndFor
    ∇
    :endsection


    :section test

    ∇ testAPL;apl;ns;ns2;js;t;bad;rl
      :Access public shared
      {}÷js≡fromAPL toAPL js←'[]'
      {}÷js≡fromAPL toAPL js←'[{}]'
      {}÷js≡fromAPL toAPL js←'[[]]'
      {}÷js≡fromAPL toAPL js←'[{"":12}]'
      {}÷js≡fromAPL toAPL js←'[{"2":null}]'
      {}÷js≡fromAPL toAPL js←'[1]'
      {}÷js≡fromAPL toAPL js←'[true]'
      {}÷js≡fromAPL toAPL js←'["true"]'
      {}÷js≡fromAPL toAPL js←'[false,{}]'
      {}÷js≡fromAPL toAPL js←'null'
      {}÷js≡fromAPL toAPL js←'[[1,1],[1,2],[1,3],[2,1],[2,2],[2,3]]'
      {}÷js≡fromAPL toAPL js←'[null,[]]'
      {}÷js≡fromAPL toAPL js←'[[["J","zz0",["C",[32767,"C3",4.288882164521665],"0","O"]]]]'
      js←'[["42",[32767],-128,["CsaD",2.849477978087825],"2N"],"Q",["$,1"],[[127],["VI6B",false,"51"],"H",'
      js,←'"FSHMNY*",[null,"C","\u00A3",true,32768,"54"],"1"],["\u00A3","BGRKW",2.1447],"3",["MGOB","O",["*C",32'
      js,←'767,"N","K",2.84925],false,[42.59174222]]]'
      {}÷js≡t←fromAPL toAPL js
      js←'[[["M",["K",2.84,"Zz"],"6"],["&ZV"],[[null,"H8",32768,"\u00A394"],["G",false],["MJ",32767,"P"],["Y"]],'
      js,←'["J"],["9B$B0"],[["N",0.046117597181290375,-128]]]]'
      {}÷js≡t←fromAPL toAPL js
      {}÷js≡t←fromAPL toAPL js←'[[],[]]'
      {}÷js≡t←fromAPL toAPL js←'["2"]'
      bad←{600:: ⋄ ÷fromAPL toAPL ⍵}
      bad¨'[{[]}]' '[][]]' '{}{}' '[][]' '[[][]]' '{"\""}'
      {}÷js≡fromAPL toAPL js←'{}'
      {}÷js≡fromAPL toAPL js←'{";":[]}'
      {}÷js≡fromAPL toAPL js←'{"\"":21}'
      {}÷'{z1:"dsa"}'≡t←fromAPL toAPL js←'{"z1":"dsa"}'
      {}÷js≡t←1 fromAPL toAPL js←'{"z1":"dsa"}'
     ⍝ There are no "scalar strings", scalars chars MUST be ravelled
      {}÷apl≡0 toAPL 0 fromAPL apl←,⍳2 3
      {}÷apl≡t←0 toAPL 0 fromAPL apl←(54,⊂,'s')(⎕D'zzzz' 567)('asd'('zz'(⍳8)))
      {}÷apl≡t←1 toAPL 0 1 fromAPL apl←'asd' '',⊂2 1 1⍴99,⊂2 3⍴⎕NULL,(⊂,'s'),2 'asd'(⍪90)(1 2 3)
      {}÷apl≡t←1 toAPL 0 1 fromAPL apl←2 13⍴⎕NULL,(⊂,'s'),⍳8
      ns←⎕NS'' ⋄ ns.(a b c)←apl←2 'dsadsa'(0 23⍴5)
      ns2←1 toAPL 0 1 fromAPL ns
      {}÷9=⎕NC'ns2' ⋄ {}÷(⍪'abc')≡ns2.⎕NL 2 ⋄ {}÷apl≡ns2.(a b c)
      {}÷(↓apl)≡0 toAPL 0 fromAPL apl←⍳2 3
      :For t :In ⍳210
          rl←⎕RL ⋄ js←fromAPL ns←makeDict 3 ¯9 2 1
          {}÷js≡t←fromAPL toAPL js
      :EndFor
    ∇

    ∇ testXML;apl;js;q;noQ;chk
      :Access public shared
      noQ←{⍺:⍵ ⋄ '([{,])"(.*?)":'⎕R'\1\2:'⊢⍵}
      chk←{x←÷(q noQ ⍵)≡q fromXML toXML ⍵}
      :For q :In 0 1
          q chk apl←fromAPL 2 13⍴⎕NULL,'s',⍳8
          q chk apl←fromAPL apl(⍳3 4)
          q chk apl←fromAPL 2 2 2 2 2 3 3⍴⎕AV,⎕UCS⍳32
          q chk apl←fromAPL''
          q chk apl←fromAPL'''asd' '',⊂2 1 1⍴99,⊂2 3⍴⎕NULL,(⊂,'s'),2 'asd'(⍪90)(1 2 3)
          q chk js←'{"z1":"dsa"}'
          {}÷js≡q fromXML toXML js←'{"\"":21}'
          q chk js←'{"z1":"dsa","cxz":[1,2,[33,44]]}'
          q chk js←'{"z1":{"a":"bcder"}}'
      :EndFor
    ∇

    ∇ testjQuery;disp
      :Access public shared
      disp←{⍵⊣⍞←⍕⍵}
      {''}disp toJQueryParameters disp'hello' 'world'
      {''}disp toJQueryParameters disp'h' 'world'
      {''}disp toJQueryParameters disp('hello'('world' 12))
      {''}disp toJQueryParameters disp('h'(12 13 14))
      {''}disp toJQueryParameters disp(('h'(12 13 14))('b'(('cc'(13 'brian'))('cd' 23))))
     
    ∇

    ⎕RL←0

    ∇ ns←makeDict arg;depth;Nentries;i;name;value;⎕IO;VC;nvc
     ⍝ Create a dictionary. This is a list of name/value pairs encapsulated in a namespace.
     ⍝ The argument specifies the depth of the dictionary, the number (<0→max) of entries
     ⍝ and other parameters in the make up of objects themselves.
     ⍝ Ex: makeDict 3 ¯9 2 1 will create a dictionary 3 levels deep of max 9 names each depth 2 of vectors
      ns←⎕NS⍴⎕IO←0 ⋄ nvc←⍴VC←⎕AV~⎕UCS 0 8 9 10 13 4
      Nentries←{⍵≥0:⍵ ⋄ (×⍺)⌈?1+|⍵}/(depth Nentries)←2↑arg←arg,(⍴,arg)↓1 ¯10
      :For i :In ?⍨Nentries
          :While ('.'∊name)∨0≠ns.⎕NC name←makeName VC[?nvc⍴⍨{⍺⌊?3+⍵}⍣4⍨30] ⋄ :EndWhile
          :If (depth>1)∧(i=1)∨1=?2 ⍝ recurse dictionnaries?
              value←makeDict arg-(⍴arg)↑1
          :Else
              value←⍬ makeUpSomething⍨2↓arg
          :EndIf
          name ns.{⍎⍺,'←⍵'}value
      :EndFor
    ∇

      makeUpSomething←{ ⍝ build a structure at random from the argument
          ⎕IO←0         ⍝ ⍺ is depth, ⍴⍴, ⍴/axis, types to use (<0 means random)
         ⍝ Each leaf will be of one type, or mixed if ⍵ is ⍬
         ⍝ A depth ≤1 can generate strings
         ⍝ If ⍴⍴ or ⍴ are <0 then they constitude a maximum
          ne←¯8 ⋄ rk←-?16 ⋄ la←1 rk ne 31 0 ⋄ ⍺←la
          rk←noscalar⌈{⍵≥0:⍵ ⋄ ?1+|⍵}1⊃(de rk ne type noscalar)←la←⍺,(⍴,⍺)↓la
          type←⌽2 2 2 2 2 2 2⊤type ⍝ boolean, int, float, char, nulls, complex, DECF
          n←×/sh←ne genShape rk
          ne=0:sh⍴0
          data←,{~0∊⍴⍵:⍵ ⋄ ∊type/(false true)(127 ¯128 32767 ¯32769)R(⎕D,⎕A,'%&*£$')⎕NULL(+⌿1 ¯3.7J1.1∘.×R)({⎕FR←645 ⋄ ⍟|○⍵}R←¯6.04E¯23 5.5 ¯23.2(*1)(-÷3)1000000000000000000)}⍵
          de≤1:sh{⍺≢⍬:⍵ ⋄ ,⍣(isChar ⍵)+⍵}v←data[?sh⍴⍴data]
          v←sh⍴(?n)⌽n↑1  ⍝ at least one element must NOT be a simple scalar
          ∇{⍵ ⍺⍺ data}¨(4↑la-1↑⍨⍴la)∘,¨v
     
      }

      genShape←{⎕IO←0 ⋄ ⍺>0:⍵⍴⍺ ⍝ exact shape
          1⌈?⍵⍴|⍺               ⍝ generate a shape of rank ⍵
      }

    :endsection tests

:Endclass ⍝ JSONdb  $Revision: 22317 $
