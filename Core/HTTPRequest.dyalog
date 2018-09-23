:Class HTTPRequest

    (⎕IO ⎕ML)←1 1
    (CR LF)←NL←⎕UCS 13 10

⍝ Common Status Codes
    SC←(200 'OK')(201 'Created')(204 'No Content')(301 'Moved Permanently')(302 'Found')(303 'See Other')(304 'Not Modified')(305 'Use Proxy')(307 'Temporary Redirect')
    SC,←(400 'Bad Request')(401 'Unauthorized')(403 'Forbidden')(404 'Not Found')(405 'Method Not Allowed')(406 'Not Acceptable')(408 'Request Timeout')(409 'Conflict')
    SC,←(410 'Gone')(411 'Length Required')(412 'Precondition Failed')(413 'Request Entity Too Large')(414 'Request-URI Too Long')(415 'Unsupported Media Type')
    SC,←(500 'Internal Server Error')(501 'Not Implemented')(503 'Service Unavailable')
    SC←↑SC

⍝ Shared Fields

    :Field Public Shared DecodeBuffers←1     ⍝ have Conga decode HTTP message buffers by default (MiServer sets this on initialization)
    :Field Public Shared Server              ⍝ reference back to the server

⍝ Fields related to the Request

    :Field Public Instance Complete←0        ⍝ do we have a complete request?
    :Field Public Instance URI←''            ⍝ the complete URI (page + query string)
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
    :Field Public Instance CloseConnection←0

⍝ Fields related to the Response

    :Field Public Instance Response

    GetFromTableCS←{{0∊⍴⍵:'' ⋄ 1=⍴⍵:⊃⍵ ⋄ ⍵}⍵[;2]/⍨⍵[;1]∊⊂⍺} ⍝ Case Sensitive
    GetFromTable←{(#.Strings.lc ⍺)GetFromTableCS ⍵}
    GetFromTableDefault←{⍺←'' ⋄ ⍺{0∊⍴⍵:⍺ ⋄ ⍵}⍵ GetFromTable ⍺⍺} ⍝ default_value (table ∇) value

    ine←{0∊⍴⍺:'' ⋄ ⍵} ⍝ if not empty
    inf←{∨/⍵⍷⍺:'' ⋄ ⍵} ⍝ if not found
    begins←{⍺≡(⍴⍺)↑⍵}
    split←{p←(⍺⍷⍵)⍳1 ⋄ ((p-≢⍺)↑⍵)(p↓⍵)} ⍝ Split ⍵ on first occurrence of ⍺

    ∇ r←eis w
        :Access public shared
        r←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵}w ⍝ Enclose if simple
    ∇

    ∇ Make args;query;cookies
        :Access Public Instance
        :Implements Constructor
    ⍝ args is either:
    ⍝   [1] HTTP method [2] URI [3] HTTP version [4] 2-column headers
    ⍝   character vector if Conga could not parse the HTTP header or if DecodeBuffers is turned off

        args←eis args
        :If 1=≢args ⍝ single arg means Conga did not or could not decode
            :Trap 999
                :If DecodeBuffers  ⍝ this is a header that Conga failed to parse
                    1 Server.Log'Bad HTTP header received:',⊃args       ⍝ may want to improve this if bad header is very long
                :EndIf
                (Method URI HTTPVersion Headers)←ParseHead⊃args
            :Else
                1 Fail 400
                →0
            :EndTrap
        :Else
            (Method URI HTTPVersion Headers)←args
        :EndIf

        Headers[;1]←#.Strings.lc Headers[;1]  ⍝ header names are case insensitive
        Headers←CombineHeaders Headers ⍝ combine any multiple header entries
        Method←#.Strings.lc Method

        Response←⎕NS''
        Response.(Status StatusText Headers File HTML HTMLHead PeerAddr NoWrap Bytes MSec)←200 'OK'(0 2⍴⊂'')0 '' '' '' 0(0 0)(⎕AI[3])

        Host←GetHeader'host'
        Page query←'?'split URI
        Page←PercentDecode Page

        :If '/'≠⊃Page  ⍝!!! need to update this to deal with absolute URI's, see https://tools.ietf.org/html/rfc7230#section-5.3.2
            1 Fail 400
            →0
        :EndIf

        Arguments←URLDecodeArgs query

        :If ~0∊⍴cookies←GetHeader'cookie'
            cookies←CookieSplit cookies
            :If ~0∊⍴cookies←(2=⊃∘⍴¨cookies)/cookies
                Cookies←↑{(' '~⍨1⊃⍵)(2⊃⍵)}¨cookies
            :EndIf
        :EndIf
        :If 'get'≡Method
        :OrIf ∧/0∘∊∘⍴¨GetHeader¨'content-length' 'transfer-encoding'
            FinalizeRequest
        :EndIf
    ∇

    ∇ (method uri version headers)←ParseHead head;start;ind;header;t
    ⍝ manually parse HTTP head
        (start header)←1(↑{⍺ ⍵}↓)(⊂'')~⍨{2↓¨⍵⊂⍨NL⍷⍵}NL,head ⍝ split start line from headers
        ⎕SIGNAL 999/⍨3≠≢t←start⊆⍨' '≠start←∊start ⍝ start line should be method uri httpversion
        (method uri version)←t
        ⎕SIGNAL 999/⍨~∧/':'∊¨header ⍝ a valid header must have a ':'
        headers←↑{dltb¨':'split ⍵}¨header
    ∇

    ∇ ProcessBody args
        :Access public
        Body←args
        FinalizeRequest
    ∇

    ∇ ProcessChunk args;len;chunk
        :Access public
     ⍝ args is either
     ⍝    [1] chunk content [2] chunk-extension name/value pairs (which we don't expect and won't process)
     ⍝ or a character vector if either DecodeBuffers=0 or Conga failed to parse the chunk
        :If DecodeBuffers=1=≡,args  ⍝ if we're Decoding buffers, we expect a nested arg, if not, we expect a simple vector
            1 Fail 400
            →0
        :EndIf

        :If DecodeBuffers
            Body,←1⊃args
        :Else
            :Trap 0
                (len chunk)←NL split args
                Body,←(hex len)↑chunk
            :Else
                1 Fail 400
            :EndTrap
        :EndIf
    ∇

    ∇ ProcessTrailer args;inds;mask;len;trailer;forbidden
        :Access public
     ⍝ args is either
     ⍝    2-column matrix of
     ⍝ or a character vector if either DecodeBuffers=0 or Conga failed to parse the chunk
        :If 1=≢⍴args
            (len trailer)←NL split args
            :If len≢,'0'
                1 Fail 400
                →0
            :EndIf
            args←0 2⍴⊂''
            :If ~0∊⍴trailer
                args←↑{dltb¨':'split ⍵}¨(⊂'')~⍨{2↓¨⍵⊂⍨NL⍷⍵}NL,trailer
            :EndIf
        :EndIf
        :If ~0∊⍴args
            args[;1]←#.Strings.lc args[;1]
    ⍝ The following is an attempt to comply with https://tools.ietf.org/html/rfc7230#section-4.1.2
    ⍝ However, there doesn't seem to be a definitive list of the forbidden trailer fields, so, we do our best...
            forbidden←'age' 'authorization' 'cache-control' 'content-encoding' 'content-length' 'content-range' 'content-type' 'date' 'expect' 'expires' 'host' 'location' 'max-forwards' 'pragma' 'proxy-authenticate' 'proxy-authorization' 'range' 'retry-after' 'set-cookie' 'te' 'trailer' 'transfer-encoding' 'vary' 'warning' 'www-authenticate'
            args⌿←~args[;1]∊forbidden
            mask←(≢Headers)≥inds←Headers[;1]⍳args[;1]
            Headers[mask/inds;2]←mask/args[;2]
            Headers⍪←(~mask)⌿args
        :EndIf
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

    ∇ headers←CombineHeaders headers;inds;hdrs;hdr;i
        :Access public shared
    ⍝ combines any headers that may occur more than once
        :If ~0∊⍴inds←⍸1<≢¨2⌷[2]hdrs←{⍺ ⍵}⌸headers[;1]
            :For (hdr i) :In ↓hdrs[inds;]
                headers[⊃i;2]←⊂¯1↓∊headers[i;2],¨',;'[1+'cookie'≡∊hdr]
            :EndFor
            headers←headers[⊃¨hdrs[;2];]
        :EndIf
    ∇


    ∇ Wipe
        :Access public
    ⍝ clear out all request data
        URI←''
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

        ∇ r←DecodeMultiPart data;ind;hdr;d;name;filename;i;upload
            hdr←data↑⍨ind←1+1⍳⍨(NL,NL)⍷data
            d←#.Strings.dlb'Content-Disposition:'GetParam hdr

            name←filename←''
            :If (⍴d)≥i←5+('name="'⍷d)⍳1
                name←(¯1+name⍳'"')↑name←i↓d
            :EndIf

            :If upload←(⍴d)≥i←9+('filename="'⍷d)⍳1
                filename←(¯1+filename⍳'"')↑filename←i↓d
            :EndIf

            data←(2+ind)↓data ⍝ Drop up to 1st doubleCR
            data←(¯1+¯1↑{⍵/⍳⍴⍵}NL⍷data)↑data ⍝ Drop from last CR

            :If upload>0∊⍴filename
                r←name(filename data)
            :Else
                r←name('UTF-8'⎕UCS ⎕UCS data)
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

        ∇ {flag}Fail x;i;root;f;t;gotFile
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
                    :If gotFile←#.Files.Exists f←root,'CommonPages/',(⍕x),'.htm'
                        :If ~0∊⍴(⎕UCS 13 10)~⍨t←#.Files.ReadText f
                            Response.HTML,⍨←t,'<br/>'
                            Response.Headers⍪←'content-type' 'text/html; charset=utf-8'
                        :EndIf
                        :Leave
                    :EndIf
                :EndFor
                :If ~gotFile
                    Response.HTML,⍨←'Request for "',URI,'" Failed: ',⍕Response.(Status StatusText)
                    Response.Headers⍪←'content-type' 'text/html; charset=utf-8'
                :EndIf
            :EndIf
            Complete←CloseConnection←1
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

        ∇ SetContentType x;ct
            :Access public instance
    ⍝ Sets response content-type header
    ⍝ x is either a file name or extension (if it contains a period), in which case we attempt to look up the appropriate content-type
    ⍝      or the actual setting for content-type
            :If '.'∊x ⍝ contains file extension?
                ct←'application/binary'(Server.Config.ContentTypes GetFromTableDefault)#.Strings.lc{(1-(⌽⍵)⍳'.')↑⍵}x ⍝ attempt to look it up
            :Else
                ct←x
            :EndIf
            'content-type'SetHeader ct
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

    dltb←{                      ⍝ delete leading/trailing blanks
        (⌽∘{⍵/⍨∨\⍵≠' '}⍣2)⍵
    }

    ∇ r←CookieSplit w
        :Access public shared
        r←{                       ⍝ Split cookies
            {dltb¨'='split ⍵}¨⍵⊆⍨⍵≠';'
        }w
    ∇

    ∇ r←hex w;i;⎕IO
        :Access public shared
        ⎕IO←0
        ⎕SIGNAL 11/⍨31∨.<i←'0123456789ABCDEF0123456789abcdef'⍳w
        r←16⊥16|i
    ∇

    ∇ Show
        :Access public
        ↑{⍵(⍎⍵)}¨'URI' 'Method' 'Page' 'Headers' 'Arguments' 'Data' 'Cookies'
    ∇

:EndClass
