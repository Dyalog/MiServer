:Class HtmlRenderRequest

    (⎕IO ⎕ML ⎕WX)←1 1 3

    :field public Page
    :field public Data←0 2⍴⊂''
    :field public Headers←0 2⍴⊂''
    :field public Cookies←0 2⍴⊂''
    :field public Arguments←0 2⍴⊂''
    :field public Content←''
    :field public EventArgs←''
    :field URLRoot←'dyalog_root'

    begins←{⍺≡(⍴⍺)↑⍵}
    tableLookup←{(⍺[;1]⍳⊂,⍵)⊃⍺[;2],⊂''}
    lc←{2::0(819⌶)⍵ ⋄ ¯3 ⎕C ⍵} ⍝ lower case
    uc←{2::1(819⌶)⍵ ⋄ 1 ⎕C ⍵} ⍝ upper case
    splitFirst←{⍺←' ' ⋄ ⍵{((⍵-1)↑⍺)(⍵↓⍺)}⌊/⍵⍳⍺}
    dlb←{⍵↓⍨+/∧\⍵=' '}
    CookieSplit←{{{⌽dlb⌽dlb ⍵}¨⍵⊆⍨~<\'='=⍵}¨⍵⊆⍨⍵≠';'}

    ∇ make(args pg)
      :Implements constructor
      :Access public
      EventArgs←args
      URLRoot←(1+0∊⍴pg)⊃pg URLRoot
      URLRoot,←('/'=¯1↑URLRoot)↓'/'
      (Page Arguments)←ParseUrl 8⊃args
      Headers←ParseHeaders 9⊃args
      Cookies←ParseCookies Headers
      Headers ParseData 10⊃args ⍝ creates Data and Content
    ∇

    ∇ (page arguments)←ParseUrl u;args
        ⍝ Parse the URL
      (page arguments)←'?'splitFirst u
      page←XlateArgs{3↓⍵/⍨∨\'://'⍷⍵}page ⍝ drop off http{s}://
      page↓⍨←(≢URLRoot)×URLRoot begins page
      arguments←DecodeUrlArgs arguments
    ∇

    ∇ hdrs←ParseHeaders h
        ⍝ Parse HTTP headers
      hdrs←↑':'splitFirst¨{⍵⊆⍨⍵≠⎕UCS 10}h
      hdrs[;1]←lc¨hdrs[;1]  ⍝ header names are case insensitive
      hdrs[;2]←dlb¨hdrs[;2] ⍝ header data
    ∇

    ∇ hdrs ParseData data;z;mask;new;s
        ⍝ Parse any data passed in the request body
        ⍝ we only parse a couple of MIME types
        ⍝ otherwise we put the data in Content
      :If 'multipart/form-data'begins z←GetHeader'content-type'
          z←'--',(8+('boundary='⍷z)⍳1)↓z ⍝ boundary string
          Data←↑DecodeMultiPart¨¯1↓z{(⍴⍺)↓¨(⍺⍷⍵)⊂⍵}data ⍝ ¯1↓ because last boundary has '--' appended
      :ElseIf 'application/x-www-form-urlencoded'begins z
          Data←DecodeUrlArgs data
⍝          :ElseIf 'text/plain'begins z
⍝              Data←1 2⍴'Data'data ⍝ if text, create artificial "Data" entry
      :Else
          Content←data
      :EndIf
        ⍝↓↓↓ MiPage support
      :If ∨/mask←'_serialized_'∘begins¨Data[;1] ⍝ do we have any serialized form data from AJAX?
          new←0 2⍴⊂''
          :For s :In mask/Data[;2]
              new⍪←DecodeUrlArgs s
          :EndFor
          Data←((~(⊃⍴Data)↑mask)⌿Data)⍪new
          Data←{0 1∊⍨⊃⍴⍵:⊃⍵ ⋄ ⍵}¨⊃{⍺ ⍵}⌸/↓[1]Data
      :EndIf
     
      :If ∨/mask←'_json_'∘begins¨Data[;1] ⍝ do we have any Syncfusion model data?
          :For s :In mask/⍳⍴mask
              Data[s;1]↓⍨←6
              Data[s;2]←,⊆⎕JSON⊃Data[s;2]
          :EndFor
      :EndIf
    ∇

    ∇ r←GetHeader name
      :Access public
      r←Headers tableLookup lc name
    ∇

    ∇ r←GetData name
      :Access public
      r←Data tableLookup name
    ∇

    ∇ r←{proto}Get names;noproto;char
      :Access public
      :If noproto←0=⎕NC'proto' ⋄ proto←'' ⋄ :EndIf
      names←,⊆names
      names←,⍕names
      names←#.Strings.deb names
      :If ' '∊names
          names←{⎕ML←3 ⋄ ⍵⊂⍨⍵≠' '}names
          r←proto∘Get¨names
      :Else
          :If ''≡r←GetData names
              r←proto
          :EndIf
      :EndIf
    ∇

    ∇ cookies←ParseCookies hdrs;cookie
      cookies←0 2⍴⊂''
      :If ~0∊⍴cookie←GetHeader'cookie'
          cookies←↑CookieSplit cookie
          cookies[;1]←lc¨cookies[;1]
          cookies[;2]←DeCode¨cookies[;2]
      :EndIf
    ∇

      DeCode←{(⎕IO ⎕ML)←0 3          ⍝ Decode Special chars in HTML string.
          hex←'0123456789ABCDEF'     ⍝ Hex chars.
          {                          ⍝ Convert numbers.
              v f←⎕VFI ⍵             ⍝ Check for numbers.
              ~∧/v:⍵                 ⍝ Not all numbers: char vec.
              1=⍴f:↑f ⋄ f            ⍝ Numeric scalar or vector.
          }∊{                        ⍝ Enlist of segments.
              '%'≠↑⍵:⍵               ⍝ 1st seg may not contain special char.
              (⎕UCS 16⊥hex⍳1↓3↑⍵),3↓⍵  ⍝ Hex code replaced with corresp. ⎕AV char.
          }¨(1+⍵='%')⊂,⍵             ⍝ Segments split at '%' char.
      }

    ∇ r←XlateArgs r;rgx;rgxu;i;j;z;t;m;⎕IO;lens;fill
      :Access public shared
          ⍝ Translate HTTP command line arguments (lifted from MiServer HTTPRequest)
      ⎕IO←0
      ((r='+')/r)←' '
      rgx←'[0-9a-fA-F]'
      rgxu←'%[uU]',(4×⍴rgx)⍴rgx ⍝ 4 characters
      r←(rgxu ⎕R{{⎕UCS 16⊥⍉16|'0123456789ABCDEF0123456789abcdef'⍳⍵}2↓⍵.Match})r
      :If 0≠⍴i←(r='%')/⍳⍴r
      :AndIf 0≠⍴i←(i≤¯2+⍴r)/i
          z←r[j←i∘.+1 2]
          t←'UTF-8'⎕UCS 16⊥⍉16|'0123456789ABCDEF0123456789abcdef'⍳z
          lens←⊃∘⍴¨'UTF-8'∘⎕UCS¨t  ⍝ UTF-8 is variable length encoding
          fill←i[¯1↓+\0,lens]
          r[fill]←t
          m←(⍴r)⍴1 ⋄ m[(,j),i~fill]←0
          r←m/r
      :EndIf
    ∇

    ∇ r←{cs}DecodeUrlArgs args
      :Access Public Shared
      cs←{6::⍵ ⋄ cs}1 ⍝ default to case sensitive
      r←(args∨.≠' ')⌿↑'='∘splitFirst¨{(⍵≠'&')⊆⍵},args ⍝ Cut on '&'
      r[;1]←{⍵↓⍨¯6×'%5B%5D'≡¯6↑⍵}¨r[;1] ⍝ remove [] from array args
      r[;2]←XlateArgs¨r[;2]
      :If ~cs ⋄ r[;1]←lc¨r[;1] ⋄ :EndIf
    ∇

    ∇ r←DecodeMultiPart data;hdr;ind;d;name;i;filename
      hdr←data↑⍨ind←¯1+1⍳⍨(⎕UCS 13 10 13 10)⍷data
      hdr←hdr⊆⍨~hdr∊⎕UCS 13 10
      d←⊃(hdr/⍨'Content-Disposition:'∘begins¨hdr),⊂''
      name←filename←''
      :If (⍴d)≥i←5+('name="'⍷d)⍳1
          name←(¯1+name⍳'"')↑name←i↓d
      :EndIf
     
      :If (⍴d)≥i←9+('filename="'⍷d)⍳1
          filename←(¯1+filename⍳'"')↑filename←i↓d
      :EndIf
     
      data←(4+ind)↓data ⍝ Drop up to 1st doubleCR
      data←(¯1+¯1↑{⍵/⍳⍴⍵}(⎕UCS 13 10)⍷data)↑data ⍝ Drop from last CR
     
      :If ~0∊⍴filename
          data←filename data
      :EndIf
     
      r←name data
    ∇

    ∇ r←isAPLJax
      :Access public instance
      r←'true'≡GetHeader'isAPLJax'
    ∇


:EndClass
