:Class HTTPRequest

    (⎕IO ⎕ML)←1 1
    (CR LF)←NL←⎕UCS 13 10

⍝ Common Status Codes
    SC←(200 'OK')(301 'Moved Permanently')(401 'Unauthorized')(404 'Not Found')
    SC,←(500 'Internal Server Error')(503 'Service Unavailable')
    SC←↑SC

⍝ Fields related to the Request

    :Field Public Instance Input
    :Field Public Instance Headers
    :Field Public Instance Command
    :Field Public Instance Page
    :Field Public Instance Filename
    :Field Public Instance RestReq
    :Field Public Instance Arguments
    :Field Public Instance PeerAddr
    :Field Public Instance PeerCert
    :Field Public Instance Data
    :Field Public Instance Cookies
    :field Public Instance MSec
    :field Public Instance Bytes
    :Field Public Instance Session←''
    :Field Public Instance Server←⎕NS ''

⍝ Fields related to the Response

    :Field Public Instance Response

    GetFromTable←{(⍵[;1]⍳⊂#.Strings.lc ,⍺)⊃⍵[;2],⊂''}
    GetFromTableCS←{(⍵[;1]⍳⊂,⍺)⊃⍵[;2],⊂''} ⍝ Case Sensitive
    GetFromTableDefault←{⍺←'' ⋄ (⍺⍺[;1]⍳⊂,⍵)⊃⍺⍺[;2],⊂⍺} ⍝ default (table ∇) value
    ine←{0∊⍴⍺:'' ⋄ ⍵} ⍝ if not empty
    inf←{∨/⍵⍷⍺:'' ⋄ ⍵} ⍝ if not found
    enlist←{⎕ML←1 ⋄ ∊⍵}
    begins←{⍺≡(⍴⍺)↑⍵}
    split←{p←(⍺⍷⍵)⍳1 ⋄ ((p-1)↑⍵)(p↓⍵)} ⍝ Split ⍵ on first occurrence of ⍺

    ∇ r←eis w
      :Access public shared
      r←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵}w ⍝ Enclose if simple
    ∇

    ∇ Make(cmd data);buf;input;args;req;hdrs;i;z;pars;mask;new;s;cookies
      :Access Public Instance
      :Implements Constructor
⍝ Decode an HTTP command line: get /page&arg1=x&arg2=y
⍝ Return namespace containing:
⍝ Command: HTTP Command ('get' or 'post')
⍝ Headers: HTTP Headers as 2 column matrix or name/value pairs
⍝ Page:    Requested page
⍝ Arguments: Arguments to the command (cmd?arg1=value1&arg2=value2) as 2 column matrix of name/value pairs
     
      Response←⎕NS''
      Response.(Status StatusText Headers File HTML HTMLHead PeerAddr NoWrap Bytes)←200 'OK'(0 2⍴⊂'')0 '' '' '' 0(0 0)
      Response.Request←cmd,data
      PeerCert←0 0⍴⊂'' ⋄ Data←0 2⍴⊂''
      PeerAddr←''
      MSec←⎕AI[3]
     
      input←1⊃,req←2⊃DecodeHeader cmd
      Input←input
      hdrs←{(0≠⊃∘⍴¨⍵[;1])⌿⍵}1 0↓req
      Headers←hdrs
     
      Command buf←' 'split input
      Command←#.Strings.lc Command
     
      buf z←'HTTP/'split buf
      Page args←'?'split ¯1↓buf
      Page←ArgXLT Page
     
      Arguments←URLDecodeArgs args
     
⍝ PeerCert←conns.PeerCert
     
      :If (1↑⍴hdrs)≥i←hdrs[;1]⍳⊂'content-type'
      :AndIf 'multipart/form-data'begins z←{(+/∧\⍵=' ')↓⍵}⊃hdrs[i;2]
          z←'--',(8+('boundary='⍷z)⍳1)↓z ⍝ boundary string
          Data←↑DecodeMultiPart¨¯1↓z{(⍴⍺)↓¨(⍺⍷⍵)⊂⍵}data ⍝ ¯1↓ because last boundary has '--' appended
      :ElseIf 'application/x-www-form-urlencoded'begins z
          Data←1 URLDecodeArgs data
      :ElseIf 'text/plain'begins z
          Data←1 2⍴'Data'data ⍝ if text, create artificial "Data" entry
      :Else
          Data←0 2⍴⊂''
      :EndIf
     
      Cookies←0 2⍴⊂''
      :If (1↑⍴hdrs)≥i←hdrs[;1]⍳⊂'cookie'
          cookies←CookieSplit⊃hdrs[i;2]
          :If ~0∊⍴cookies←(2=⊃∘⍴¨cookies)/cookies
              Cookies←↑{((#.Strings.lc(1⊃⍵)~' '))(DeCode 2⊃⍵)}¨cookies
          :EndIf
      :EndIf
     
     
      :If ∨/mask←Data[;1]{⍵≡(-⍴⍵)↑⍺}¨⊂'_serialized' ⍝ do we have any serialized form data from AJAX?
          new←0 2⍴⊂''
          :For s :In mask/Data[;2]
              new⍪←1 URLDecodeArgs s
          :EndFor
          Data←((~(⊃⍴Data)↑mask)⌿Data)⍪new
          Data←{0 1∊⍨⊃⍴⍵:⊃⍵ ⋄ ⍵}¨⊃{⍺ ⍵}#.Boot.∆key/↓[1]Data
      :EndIf
     
      :If ∨/mask←Data[;1]{⍵≡(-⍴⍵)↑⍺}¨⊂'_ejModel' ⍝ do we have any Syncfusion model data?
          :For s :In mask/⍳⍴mask
              Data[s;1]←⊂'_ejModel'{⍵≡⍺:1↓⍺ ⋄ (-⍴⍺)↓⍵}⊃Data[s;1]
              Data[s;2]←#.JSON.toAPL⊃Data[s;2]
          :EndFor
      :EndIf
    ∇

    :section Argument and Data Handling

    ∇ r←ArgXLT r;rgx;rgxu;i;j;z;t;m
      :Access public shared
     ⍝ Translate HTTP command line arguments
      ((r='+')/r)←' '
      rgx←'[0-9a-fA-F]'
      rgxu←'%[uU]',(4×⍴rgx)⍴rgx ⍝ 4 characters
      r←(rgxu ⎕R{{⎕UCS 16⊥⍉¯1+('0123456789ABCDEF'⍳⍵)⌊'0123456789abcdef'⍳⍵}2↓⍵.Match})r
      :If 0≠⍴i←(r='%')/⍳⍴r
      :AndIf 0≠⍴i←(i<¯1+⍴r)/i
          z←r[j←i∘.+1 2]
          t←'UTF-8'⎕UCS 16⊥⍉¯1+('0123456789ABCDEF'⍳z)⌊'0123456789abcdef'⍳z
          r[(⍴t)↑i]←t
          j←(,j),(⍴t)↓i
          m←(⍴r)⍴1 ⋄ m[j]←0
          r←m/r
      :EndIf
    ∇


    ∇ r←GetArgument name
      :Access Public Instance
      r←name GetFromTable Arguments
    ∇


    ∇ r←GetData name
      :Access Public Instance
      r←name GetFromTableCS Data
    ∇

    ∇ r←GetHeader name
      :Access Public Instance
      r←(#.Strings.lc name)GetFromTable Headers
    ∇

    ∇ r←{cs}URLDecodeArgs args
      :Access Public Shared
      cs←{6::0 ⋄ cs}''
      r←(args∨.≠' ')⌿↑'='∘split¨{1↓¨(⍵='&')⊂⍵}'&',args ⍝ Cut on '&'
      r[;2]←ArgXLT¨r[;2]
      :If ~cs ⋄ r[;1]←#.Strings.lc¨r[;1] ⋄ :EndIf
    ∇

    ∇ r←URLEncode data;⎕IO;z;ok;nul;m;enlist
      :Access Public Shared
      nul←⎕UCS ⎕IO←0
      enlist←{⎕ML←3 ⋄ ∊⍵}
      ok←nul,enlist ⎕UCS¨(⎕UCS'aA0')+⍳¨26 26 10
     
      z←⎕UCS'UTF-8'⎕UCS enlist nul,¨,data
      :If ∨/m←~z∊ok
          (m/z)←↓'%',(⎕D,⎕A)[⍉16 16⊤⎕UCS m/z]
          data←(⍴data)⍴1↓¨{(⍵=nul)⊂⍵}enlist z
      :EndIf
     
      r←¯1↓enlist data,¨(⍴data)⍴'=&'
    ∇

    ∇ r←DecodeHeader buf;len;d;i
 ⍝ Decode HTML Header
      :Access public shared
      len←(¯1+⍴NL,NL)+⊃{((NL,NL)⍷⍵)/⍳⍴⍵}buf
      :If len>0
          d←(⍴NL)↓¨{(NL⍷⍵)⊂⍵}NL,len↑buf
          d←↑{((p-1)↑⍵)({(' '=1↑⍵)↓⍵}(p←⍵⍳':')↓⍵)}¨d
          d[i;1]←#.Strings.lc¨d[i←1↓⍳1↑⍴d;1]
      :Else
          d←⍬
      :EndIf
      r←len d
    ∇

    ∇ r←DecodeMultiPart data;d;t;filename;name;i
      d←'Content-Disposition: 'GetParam data
      :If (⍴d)≥i←5+('name="'⍷d)⍳1
          name←(¯1+name⍳'"')↑name←i↓d
      :Else ⋄ name←''
      :EndIf
     
      t←'Content-Type: 'GetParam data
     
      data←(3+((NL,NL)⍷data)⍳1)↓data ⍝ Drop up to 1st doubleCR
      data←(¯1+¯1↑(NL⍷data)/⍳⍴data)↑data ⍝ Drop from last CR
     
      :Select t ⍝ Content type
      :CaseList 'plain/text' 'text/plain' 'text/html' '' ⍝ These are already processed
          ⍝ :Trap 92 ⋄ data←'UTF-8'⎕UCS ⎕UCS data ⋄ :EndTrap ⍝ From UTF-8 (will probably fail in Classic)
 ⍝   :CaseList 'text/xml' 'application/msword' 'application/pdf' 'application/octet-stream' 'image/gif' 'image/pjpeg' 'image/bmp' 'application/x-zip-compressed' 'application/vnd.ms-excel'
      :Else
          :If (⍴d)≥i←9+('filename="'⍷d)⍳1
              filename←(¯1+filename⍳'"')↑filename←i↓d
          :Else ⋄ filename←''
          :EndIf
          data←filename data
⍝    :Else
⍝      ∘
      :EndSelect
      r←name data
    ∇

    ∇ r←header GetValue(name type);i;h
      ⍝ Extract value from HTTP Header structure returned by DecodeHeader
     
      :If (1↑⍴header)<i←header[;1]⍳⊂lc name
          r←⍬ ⍝ Not found
      :Else
          r←⊃header[i;2]
          :If 'Numeric'≡type
              r←1⊃2⊃⎕VFI r
          :EndIf
      :EndIf
    ∇

    ∇ r←name GetParam HTTP;i;z;find
      find←{⊃(⍺⍷⍵)/⍳⍴⍵}
      r←''
      :If 0<i←name find HTTP
      :AndIf 0<i←NL find z←(¯1+i+⍴name)↓HTTP
          r←(i-1)↑z
      :EndIf
    ∇

    :endsection

    :section Cookie Functions

    ∇ DelCookie ctl;name;path
      :Access Public Instance ⍝ Delete a cookie
      :If 1=≡ctl ⋄ ctl←,⊂ctl ⋄ :EndIf
      name path←ctl,(⍴ctl)↓'CookieName' '/'
      SetCookie name''path ¯30 ⍝ Expiry 30 days ago
    ∇

    ∇ r←GetCookie name
      :Access Public Instance
      r←name GetFromTable Cookies
    ∇

    ∇ SetCookie ctl;name;value;path;date;z;keep
      :Access Public Instance ⍝ Set a Cookie
      name value path keep←ctl,(⍴ctl)↓'CookieName' 'CookieValue' '/' 30
      date←#.Dates.IDNToDate keep+#.Dates.DateToIDN 3↑⎕TS ⍝ keep is # of days cookie should be valid
      z←#.Dates.CookieFmt(3↑date),23 59 59
      z←name,'=',(⍕value),'; path=',path,'; expires="',z,'"'
      Response.Headers⍪←'set-cookie'z
    ∇

    :endsection

    :section Request/Response Content Handling

    ∇ Fail x;i;root;f
      :Access Public Instance
     
      :If 3=10|⎕DR x ⍝ Just a status code
          Response.Status←x
          :If (1↑⍴SC[;1])≥i←SC[;1]⍳x
              Response.StatusText←⊃SC[i;2] ⍝ Default text
          :EndIf
      :Else
          Response.(Status StatusText)←x
      :EndIf
      :For root :In Server.Config.(Root MSRoot) ⍝ try site root, then server root
          :If #.Files.Exists f←root,'CommonPages\',(⍕x),'.htm'
              Response.HTML,⍨←(#.Files.GetText f),'<br/>'
              Response.Headers⍪←'content-type' 'text/html; charset=utf-8'
              :Leave
          :EndIf
      :EndFor
    ∇

    ∇ r←isDesktop;cis;desktop;mobile;bot;user_agent ⍝ Detect if we think this is a desktop platform
⍝ Rationale: mobile device detection is a messy subject, therefore it's easier and perhaps safer to detect
⍝            desktop platforms (or bots) and assume that anything else is a mobile platform
     
      :Access public instance
      cis←{~0∊⍴(⍺ ⎕S 0 ⎕OPT'IC' 1)⍵} ⍝ Case Insensitive Search
     
      r←0
     
⍝ Some mobile browsers which look like desktop browsers.
      mobile←'(iphone|ipod|ipad|blackberry|android|palm|windows\s+ce)'
      desktop←'(windows|linux|os\s+[x9]|solaris|bsd)'
      bot←'(spider|crawl|slurp|bot)'
     
      →0⍴⍨0∊⍴user_agent←GetUserAgent
      →0⍴⍨mobile cis user_agent ⍝ Anything that looks like a phone isn't a desktop.
      →0⍴⍨r←desktop cis user_agent ⍝ Anything that looks like a desktop probably is.
      r←bot cis user_agent ⍝ Anything that looks like a bot should default to desktop.
    ∇

    ∇ r←GetUserAgent
      :Access public instance
      ⍝ Some mobile browsers put the User-Agent in a HTTP-X header
      →0↓⍨0∊⍴r←GetHeader'X-OPERAMINI-PHONE-UA'
      →0↓⍨0∊⍴r←GetHeader'X-SKYFIRE-PHONE'
      r←GetHeader'USER-AGENT'
    ∇

    ∇ r←isAPLJax
      :Access public instance
      r←'XMLHttpRequest'≡GetHeader'x-requested-with'
    ∇

    ∇ r←isPost
      :Access public instance
      r←Command≡'post'
    ∇

    ∇ r←isGet
      :Access public instance
      r←Command≡'get'
    ∇

    ∇ r←JSPlugIn file;root ⍝ Retrieve a JavaScript PlugIn
      :Access Public Instance
      root←{(1-(⌽⍵)⍳'\')↓⍵}⎕WSID
      r←#.Files.GetText root,'PlugIns\',file
    ∇

    ∇ Meta attrs ⍝ add a meta tag to the head element
      :Access public instance
      Response.HTMLHead,←'<meta ',attrs,' />'
    ∇

    ∇ {hdrs}Return x;type
      :Access Public Instance
     
      :If 2=⍴⍴x ⋄ :AndIf 2=¯1↑⍴x ⋄ x←URLEncode x ⋄ type←'text/plain' ⍝ 2-column matrix is name/value pairs
      :Else ⋄ type←'text/html'
      :EndIf
      Response.HTML←enlist x
      :If 2=⎕NC'hdrs'
          Response.Headers⍪←hdrs
      :Else
          Response.Headers⍪←'content-type'(type,'; charset=utf-8')
      :EndIf
    ∇

    ∇ {hdrs}ReturnFile x
      :Access Public Instance
      Response.(HTML File)←x 1
      :If 2=⎕NC'hdrs'
          Response.Headers⍪←hdrs
      :Else
          SetContentType x
      :EndIf
    ∇

    ∇ SetContentType x
      :Access public instance
      'content-type'SetHeader'application/binary'(Server.Config.ContentTypes GetFromTableDefault)#.Strings.lc{(1-(⌽⍵)⍳'.')↑⍵}x
    ∇

    ∇ {hdr}SetHeader value;val
      :Access public instance
    ⍝ accepts value in forms
    ⍝ ('hdr1' 'val1')[('hdr2' 'val2')]
    ⍝ 'hdr1:val1' ['hdr2:val2']
    ⍝ 'hdr1' 'val1' ['hdr2' 'val2']
      :If 0=⎕NC'hdr'
          :If 3≡|≡value ⍝ pairs of strings
              val←↑value
          :ElseIf 2≡|≡value
              :If ':'∊¨value
                  val←↑':'split¨value
              :Else
                  val←((0.5×⍴value),2)⍴value
              :EndIf
          :Else
              val←1 2⍴':'split value
          :EndIf
      :Else
          (hdr value)←eis¨hdr value
          val←hdr,⍪value
      :EndIf
      Response.Headers⍪←val
    ∇

    ∇ {tags}Script x
      :Access Public Instance
      :If 0=⎕NC'tags' ⋄ tags←'type="text/javascript"'
      :ElseIf ~∨/'type='⍷tags ⋄ tags,←' type="text/javascript"'
      :EndIf
      Response.HTMLHead,←Response.HTMLHead inf'<script ',tags,'>',(x ine NL,x),'</script>',NL
    ∇

    ∇ {style}Style file ⍝ insert a style into head element
      :Access Public Instance
      :If 0=⎕NC'style'
          :If ~0∊⍴file
              Response.HTMLHead,←Response.HTMLHead inf'<link href="',file,'" rel="stylesheet" type="text/css" />',NL
          :EndIf
      :Else
          :If 1<|≡style ⋄ style←NL,enlist(,∘NL)¨style ⋄ :EndIf
          Response.HTMLHead,←Response.HTMLHead inf'<style type="text/css">',style,'</style>',NL
      :EndIf
    ∇

    ∇ Title x
      :Access Public Instance
      Response.HTMLHead,←'<title>',x,'</title>',NL
    ∇

    ∇ Use x;n;ind
      :Access public instance
      :If 0≠⎕NC⊂'Server.Config.Resources'
      :AndIf ~0∊n←1↑⍴Server.Config.Resources
          :If n≥ind←Server.Config.Resources[;1]⍳⊂x
              (Script∘'')¨{'src="',⍵,'"'}¨{(⊃⍣(2<≡⍵))⍵}(⊂ind 2)⊃Server.Config.Resources
              Style¨{(⊃⍣(2<≡⍵))⍵}(⊂ind 3)⊃Server.Config.Resources
          :Else
              1 Server.Log Page,' references unknown resource: ',x
          :EndIf
      :EndIf
    ∇

    :endsection

      Split←{(⎕IO ⎕ML)←0 3         ⍝ Split Http syntax.
          ⍺←'?&=' ⋄ (,⍺){        ⍝ Default separator chars.
              0=⍴⍺:⍵             ⍝ No separator chars left: finished.
              sepr←↑⍺            ⍝ First char is separator char.
              (1↓⍺)∘∇∘{          ⍝ Recursively split at each sub level.
                  ⍵~sepr         ⍝ Separator removed.
              }¨(1+⍵=sepr)⊂⍵     ⍝ String partitioned at separator char.
          }⍵                     ⍝ Http string.
      }

      CookieSplit←{(⎕IO ⎕ML)←0 3   ⍝ Split cookies
          {{db←{⍵/⍨∨\⍵≠' '} ⋄ ⌽db⌽db ⍵}¨⍵⊂⍨~<\'='=⍵}¨⍵⊂⍨⍵≠';'}


      DeCode←{(⎕IO ⎕ML)←0 3            ⍝ Decode Special chars in HTML string.
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



:EndClass