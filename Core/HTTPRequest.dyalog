:Class HTTPRequest

    (⎕IO ⎕ML)←1 1
    (CR LF)←NL←⎕UCS 13 10

⍝ Common Status Codes
    SC←(200 'OK')(201 'Created')(204 'No Content')(301 'Moved Permanently')(302 'Found')(303 'See Other')(304 'Not Modified')(305 'Use Proxy')(307 'Temporary Redirect')
    SC,←(400 'Bad Request')(401 'Unauthorized')(403 'Forbidden')(404 'Not Found')(405 'Method Not Allowed')(406 'Not Acceptable')(408 'Request Timeout')(409 'Conflict')
    SC,←(410 'Gone')(411 'Length Required')(412 'Precondition Failed')(413 'Request Entity Too Large')(414 'Request-URI Too Long')(415 'Unsupported Media Type')
    SC,←(500 'Internal Server Error')(501 'Not Implemented')(503 'Service Unavailable')
    SC←↑SC

⍝ Fields related to the Request

    :Field Public Instance Complete←0        ⍝ do we have a complete request?
    :Field Public Instance Input←''
    :Field Public Instance Headers←0 2⍴⊂''   ⍝ HTTPRequest header fields (plus any supplied from HTTPTrailer event)
    :Field Public Instance Method←''         ⍝ HTTP method (GET, POST, PUT, etc)
    :Field Public Instance Page←''           ⍝ Requested URI
    :Field Public Instance Body←''           ⍝ body of the request
    :Field Public Instance Host←''           ⍝ host header field
    :Field Public Instance Filename←''       ⍝ upload file name
    :Field Public Instance RESTfulReq←0      ⍝ RESTful Request (set to charvec if request is RESTful)
    :Field Public Instance Arguments←0 2⍴⊂'' ⍝ arguments provided in the URI
    :Field Public Instance PeerAddr←''       ⍝ client IP address
    :Field Public Instance PeerCert←0 0⍴⊂''  ⍝ client certificate
    :Field Public Instance Data←0 2⍴⊂''      ⍝ form data
    :Field Public Instance HTTPVersion←''
    :Field Public Instance Cookies←0 2⍴⊂''
    :Field Public Instance Session←''
    :Field Public Instance Server←⎕NS ''
    :Field Public Instance CloseConnection←0

⍝ Fields related to the Response

    :Field Public Instance Response

    GetFromTableCS←{{0∊⍴⍵:'' ⋄ 1=⍴⍵:⊃⍵ ⋄ ⍵}⍵[;2]/⍨⍵[;1]∊⊂⍺} ⍝ Case Sensitive
    GetFromTable←{(#.Strings.lc ⍺)GetFromTableCS ⍵}
    GetFromTableDefault←{⍺←'' ⋄ ⍺{0∊⍴⍵:⍺ ⋄ ⍵}⍵ GetFromTable ⍺⍺} ⍝ default_value (table ∇) value

    ine←{0∊⍴⍺:'' ⋄ ⍵} ⍝ if not empty
    inf←{∨/⍵⍷⍺:'' ⋄ ⍵} ⍝ if not found
    begins←{⍺≡(⍴⍺)↑⍵}
    split←{p←(⍺⍷⍵)⍳1 ⋄ ((p-1)↑⍵)(p↓⍵)} ⍝ Split ⍵ on first occurrence of ⍺

    ∇ r←eis w
      :Access public shared
      r←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵}w ⍝ Enclose if simple
    ∇

    ∇ Make args;query;cookies
      :Access Public Instance
      :Implements Constructor
    ⍝ args [1] HTTP method [2] URI [3] HTTP version [4] 2-column headers
     
      (Method Input HTTPVersion Headers)←args
      Headers[;1]←#.Strings.lc Headers[;1]  ⍝ header names are case insensitive
      Method←#.Strings.lc Method
     
      Response←⎕NS''
      Response.(Status StatusText Headers File HTML HTMLHead PeerAddr NoWrap Bytes MSec)←200 'OK'(0 2⍴⊂'')0 '' '' '' 0(0 0)(⎕AI[3])
     
      Host←GetHeader'host'
      Page query←'?'split Input
      Page←PercentDecode Page
     
      :If '/'≠⊃Page  ⍝!!! need to update this to deal with absolute URI's, see https://tools.ietf.org/html/rfc7230#section-5.3.2
          1 Fail 400
          →0
      :EndIf
     
      Arguments←URLDecodeArgs query
     
      :If ~0∊⍴cookies←GetHeader'cookie'
          cookies←CookieSplit cookies
          :If ~0∊⍴cookies←(2=⊃∘⍴¨cookies)/cookies
              Cookies←↑{(' '~⍨1⊃⍵)(DeCode 2⊃⍵)}¨cookies
          :EndIf
      :EndIf
      :If 'get'≡Method
      :OrIf ∧/0∘∊∘⍴¨GetHeader¨'content-length' 'transfer-encoding'
          FinalizeRequest
      :EndIf
    ∇

    ∇ ProcessBody args
      :Access public
      Body←args
      FinalizeRequest
    ∇

    ∇ ProcessChunk args
      :Access public
     ⍝ args is [1] chunk content [2] chunk-extension name/value pairs (which we don't expect and won't process)
      Body,←1⊃args
    ∇

    ∇ ProcessTrailer args;inds;mask
      :Access public
      args[;1]←#.Strings.lc args[;1]
      mask←(≢Headers)≥inds←Headers[;1]⍳args[;1]
      Headers[mask/inds;2]←mask/args[;2]
      Headers⍪←(~mask)⌿args
      FinalizeRequest
    ∇

    ∇ FinalizeRequest;contentType;boundary;mask;new;s
      :If ~0∊⍴contentType←GetHeader'content-type'
      :AndIf 'multipart/form-data'begins contentType
          boundary←'--',(8+('boundary='⍷contentType)⍳1)↓contentType ⍝ boundary string
          Data←↑DecodeMultiPart¨¯1↓boundary{(⍴⍺)↓¨(⍺⍷⍵)⊂⍵}Body ⍝ ¯1↓ because last boundary has '--' appended
      :ElseIf 'application/x-www-form-urlencoded'begins contentType
          Data←URLDecodeArgs Body
      :EndIf
      :If ∨/mask←Data[;1]#.Strings.beginsWith¨⊂'_serialized_' ⍝ do we have any serialized form data from AJAX?
          new←0 2⍴⊂''
          :For s :In mask/Data[;2]
              new⍪←URLDecodeArgs s
          :EndFor
          Data←((~(⊃⍴Data)↑mask)⌿Data)⍪new
          Data←{0 1∊⍨⊃⍴⍵:⊃⍵ ⋄ ⍵}¨⊃{⍺ ⍵}⌸/↓[1]Data
      :EndIf
     
      :If ∨/mask←Data[;1]#.Strings.beginsWith¨⊂'_json_' ⍝ do we have any Syncfusion model data?
          :For s :In mask/⍳⍴mask
              Data[s;1]↓⍨←6
              Data[s;2]←eis #.JSON.toAPL⊃Data[s;2]
          :EndFor
      :EndIf
      Complete←1
      CloseConnection←'close'≡GetHeader'connection'
    ∇

    ∇ Wipe
      :Access public
    ⍝ clear out all request data
      Input←''
      Headers←''
      Method←''
      Page←''
      Filename←''
      RESTfulReq←0
      Arguments←''
      PeerAddr←''
      PeerCert←⍬
      Data←⍬
      Cookies←''
      Session←''
      Server←⎕NS''
      Response←⎕NS''
    ∇


    :Section Argument and Data Handling

    ∇ r←PercentDecode r;rgx;rgxu;i;j;z;t;m;⎕IO;lens;fill
      :Access public shared
    ⍝ Decode a Percent Encoded string https://en.wikipedia.org/wiki/Percent-encoding
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
    ⍝ Decode arguments passed in the URI
      cs←{6::⍵ ⋄ cs}1 ⍝ default to case sensitive
      r←(args∨.≠' ')⌿↑'='∘split¨{1↓¨(⍵='&')⊂⍵}'&',args ⍝ Cut on '&'
      r[;1]←{⍵↓⍨¯6×'%5B%5D'≡¯6↑⍵}¨r[;1] ⍝ remove [] from array args
      r[;2]←PercentDecode¨r[;2]
      :If ~cs ⋄ r[;1]←#.Strings.lc¨r[;1] ⋄ :EndIf
    ∇

    ∇ r←URLEncode data;⎕IO;z;ok;nul;m
      :Access Public Shared
      nul←⎕UCS ⎕IO←0
      ok←nul,∊⎕UCS¨(⎕UCS'aA0')+⍳¨26 26 10
     
      z←⎕UCS'UTF-8'⎕UCS∊nul,¨,data
      :If ∨/m←~z∊ok
          (m/z)←↓'%',(⎕D,⎕A)[⍉16 16⊤⎕UCS m/z]
          data←(⍴data)⍴1↓¨{(⍵=nul)⊂⍵}∊z
      :EndIf
     
      r←¯1↓∊data,¨(⍴data)⍴'=&'
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

    ∇ r←DecodeMultiPart data;ind;hdr;d;name;filename;i
      hdr←data↑⍨ind←1+1⍳⍨(NL,NL)⍷data
      d←'Content-Disposition: 'GetParam hdr
     
      name←filename←''
      :If (⍴d)≥i←5+('name="'⍷d)⍳1
          name←(¯1+name⍳'"')↑name←i↓d
      :EndIf
     
      :If (⍴d)≥i←9+('filename="'⍷d)⍳1
          filename←(¯1+filename⍳'"')↑filename←i↓d
      :EndIf
     
      data←(2+ind)↓data ⍝ Drop up to 1st doubleCR
      data←(¯1+¯1↑{⍵/⍳⍴⍵}NL⍷data)↑data ⍝ Drop from last CR
      :If (0∊⍴filename)∧0∊⍴data
          r←name''
      :Else
          r←name(filename data)
      :EndIf
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
      ctl←eis ctl
      name path←ctl,(⍴ctl)↓'CookieName' '/'
      SetCookie name''path ¯30 ⍝ Expiry 30 days ago
    ∇

    ∇ r←GetCookie name
      :Access Public Instance
      r←name GetFromTableCS Cookies ⍝ cookie names are case sensitive
    ∇

    ∇ SetCookie ctl;name;value;path;date;z;keep;other
      :Access Public Instance ⍝ Set a Cookie
      ⍝  ctl [1] cookie name, [2] value, [3] path that cookie applies to,
      ⍝      [4] expires - can be a single number of days to offset from today
      ⍝                    a character vector of a properly formatted timestamp (see #.Dates.CookieFmt)
      ⍝                    an integer vector of 3-6 elements in ⎕TS format
      ⍝      [5] a character vector of any other cookie parameters - e.g. HttpOnly
      ctl←eis ctl
      name value path keep other←ctl,(⍴ctl)↓'CookieName' 'CookieValue' '/' 30 ''
      :If ~0∊⍴date←keep
          :If 2|⎕DR keep
              :If 1=⍴,keep
                  date←#.Dates.IDNToDate keep+#.Dates.DateToIDN ⎕TS ⍝ keep is # of days cookie should be valid
              :EndIf
              date←#.Dates.CookieFmt 6↑date
          :EndIf
      :EndIf
      z←name,'=',(⍕value),(path ine'; Path=',path),(date ine'; Expires=',date),other ine('; '≡2↑other)↓'; ',other
      Response.Headers⍪←'Set-Cookie'z
    ∇

    :endsection

    :section Request/Response Content Handling

    ∇ r←HttpStatus code
      :Access public shared
      r←code((SC[;1]⍳code)⊃SC[;2],⊂'')
    ∇

    ∇ {flag}Fail x;i;root;f;t
      :Access Public Instance
      :If 0=⎕NC'flag' ⋄ flag←0 ⋄ :EndIf
      :If 3=10|⎕DR x ⍝ Just a status code
          Response.Status←x
          :If (1↑⍴SC[;1])≥i←SC[;1]⍳x
              Response.StatusText←⊃SC[i;2] ⍝ Default text
          :EndIf
      :Else
          Response.(Status StatusText)←x
      :EndIf
      :If flag<0≡RESTfulReq
          :For root :In Server.Config.(Root MSRoot) ⍝ try site root, then server root
              :If #.Files.Exists f←root,'CommonPages\',(⍕x),'.htm'
                  :If ~0∊⍴(⎕UCS 13 10)~⍨t←#.Files.ReadText f
                      Response.HTML,⍨←t,'<br/>'
                      Response.Headers⍪←'content-type' 'text/html; charset=utf-8'
                  :EndIf
                  :Leave
              :EndIf
          :EndFor
      :EndIf
    ∇

    ∇ {code}Redirect location
      :Access public
      :If 0=⎕NC'code' ⋄ code←301 ⋄ :EndIf ⍝ default to permanent redirection
      Response.(Status StatusText)←code((SC[;1]⍳code)⊃SC[;2],⊂'')
      'Location'SetHeader location
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
      r←'true'≡GetHeader'isAPLJax'
    ∇

    ∇ r←isPost
      :Access public instance
      r←Method≡'post'
    ∇

    ∇ r←isGet
      :Access public instance
      r←Method≡'get'
    ∇

    ∇ r←JSPlugIn file;root ⍝ Retrieve a JavaScript PlugIn
      :Access Public Instance
      root←{(1-⌊/'/\'⍳⍨⌽⍵)↓⍵}⎕WSID
      r←#.Files.ReadText root,'PlugIns\',file
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
      Response.HTML←∊x
      :If 2=⎕NC'hdrs'
          Response.Headers⍪←hdrs
      :ElseIf ~∨/Response.Headers[;1](≡#.Strings.nocase)¨⊂'content-type'
          Response.Headers⍪←'content-type'(type,'; charset=utf-8') ⍝ set content-type if not already set
      :EndIf
    ∇

    ∇ {hdrs}ReturnFile filename
    ⍝ Queues a file to be returned to client
    ⍝ filename - physical name of the file
    ⍝ {hdrs}   - optional 2-column header name/value pairs
    ⍝ if hdrs is not supplied, we attempt to set the content type of file response based on the file extension
      :Access Public Instance
      :If #.Files.Exists filename
          Response.(HTML File)←filename 1
          :If 2=⎕NC'hdrs'
              Response.Headers⍪←hdrs
          :Else
              SetContentType filename
          :EndIf
      :Else
          Fail 404  ⍝ file not found
      :EndIf
    ∇

    ∇ SetContentType x
      :Access public instance
      'content-type'SetHeader'application/binary'(Server.Config.ContentTypes GetFromTableDefault)#.Strings.lc{(1-(⌽⍵)⍳'.')↑⍵}x
    ∇

    ∇ {hdr}SetHeaderIfNotSet value;val;mask
      :Access public instance
    ⍝ accepts value in forms
    ⍝ ('hdr1' 'val1')[('hdr2' 'val2')]
    ⍝ 'hdr1:val1' ['hdr2:val2']
    ⍝ 'hdr1' 'val1' ['hdr2' 'val2']
      :If 0=⎕NC'hdr'
          :If 3≡|≡value ⍝ pairs of strings
              val←↑value
          :ElseIf 2≡|≡value
              :If ∧/':'∊¨value
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
      :If ∨/mask←~hdr(∊#.Strings.nocase)Response.Headers[;1]
          Response.Headers⍪←mask⌿val
      :EndIf
    ∇

    ∇ {hdr}SetHeader value;val;mask
      :Access public instance
    ⍝ accepts value in forms
    ⍝ ('hdr1' 'val1')[('hdr2' 'val2')]
    ⍝ 'hdr1:val1' ['hdr2:val2']
    ⍝ 'hdr1' 'val1' ['hdr2' 'val2']
      :If 0=⎕NC'hdr'
          :If 3≡|≡value ⍝ pairs of strings
              val←↑value
          :ElseIf 2≡|≡value
              :If ∧/':'∊¨value
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
          :If 1<|≡style ⋄ style←NL,∊(,∘NL)¨style ⋄ :EndIf
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


    ∇ Show
      :Access public
      ↑{⍵(⍎⍵)}¨'Input' 'Method' 'Page' 'Headers' 'Arguments' 'Data' 'Cookies'
    ∇

:EndClass
