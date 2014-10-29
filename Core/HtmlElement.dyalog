:class HtmlElement             ⍝ this is the most basic element of a page

    ⎕io←⎕ml←1

    :field public shared _version←1
    :field public NL←⎕ucs 13 ⍝ 10

    :field public Tag←''       ⍝ this is the element name
    :field public Content←''   ⍝ this is a series of strings/instances/class+parms
    :field public Handlers←''
    :field public PageRef←''

⍝ define shortcuts to namespaces (initialized later)
    :field public _html        ⍝ base HTML elements
    :field public _HTML        ⍝ "Enhanced" HTML elements
    :field public _JQ          ⍝ JQuery/JQueryUI
    :field public _SF          ⍝ SyncFusion
    :field public _JQM         ⍝ JQueryMobile
    :field public _JSS         ⍝ JavaScript Snippets
    :field public _DC          ⍝ Dyalog Controls


   ⍝ make shortcuts for some common HTML attributes
    UNDEF←⎕NULL
    :field public id←UNDEF
    :field public value←UNDEF
    :field public name←UNDEF
    :field public class←UNDEF
    :field public style←UNDEF
    :field public title←UNDEF
    :field public type←UNDEF

    _names←_values←0⍴⊂'' ⍝ used for attributes
    :field public _styles←''


    ∇ r←Version
      :Access public
      r←{⍵,[1.1]{0::¯1 ⋄ ⍵._version}¨⍵}⎕CLASS ⎕THIS
    ∇

    ∇ r←context name
      :Access public shared
      :If 326=⎕DR name ⍝ ref?
          r←(⊃⎕RSI)∘{16::'' ⋄ ⍺≡#:''
              ∨/∨/¨(⊂⍵)∊¨⍺.(⎕CLASS ⎕THIS):⍺
              ⍺.## ∇ ⍵}name
      :Else
          r←(⊃⎕RSI)∘{⍺≡#:'' ⋄ 0≠⍺.⎕NC⊂⍵:⍺ ⋄ ⍺.## ∇ ⍵}name
      :EndIf
    ∇

    ∇ r←isString w
      :Access public
      r←{(0 2∊⍨10|⎕DR ⍵)∧(⍴⍴⍵)∊0 1}w
    ∇

    errorIf←{⍺←⊢ ⋄ 0≠⍵:⍺ ⎕SIGNAL ⍵ ⋄ ''}

    ∇ r←eis w
      :Access public shared
      r←{2>|≡⍵:,⊂⍵ ⋄ ⍵}w ⍝ Enclose if simple
    ∇

    :section Attribute Handling

    :property keyed Attr       ⍝ element attributes
    :access public
        ∇ set ra;i;new;there;ind
          there←~new←(⍴_names)<i←_names⍳ind←eis⊃ra.Indexers
          (_values _names),←new∘/¨ra.NewValue ind
          _values[there/i]←there/ra.NewValue
        ∇
        ∇ r←get ra;i;n
          ⎕SIGNAL(1<⍴i←ra.Indexers)⍴4 ⍝ RANK err
          :If 1↑ra.IndexersSpecified
              r←(_values,⊂'')[_names⍳n←eis⊃⍣(2≤|≡i)+i]
          :Else
              r←↓_names,[1.1]_values
          :EndIf
        ∇
    :endproperty


    ∇ del←ParseAttr arg;split
      :Access public shared
⍝ Parse html sttributes
⍝ The result is Doubly Enclosed List of pairs of strings (del)
     
⍝ The argument comes in various formats:
⍝ - in a doubly enclosed list of pairs (no work to do)
⍝ - an even number of strings alternating attr and value
⍝ - in a list of strings each attr=value
⍝ - in a string of attr=value
     
      →0/⍨3≡|≡del←arg ⍝ no further checks, better be all pairs of strings
     
      split←{a←~v←∨\'='=⍵ ⋄ (a/⍵)({'"'∧.=∊1 ¯1↑¨⊂⍵:¯1↓1↓⍵ ⋄ ⍵}1↓v/⍵)}
      :If 2≡|≡arg
          :If ∧/'='∊¨arg ⍝ attr=value in each
              del←split¨del
          :Else
              del←↓((0.5×⍴arg),2)⍴arg
          :EndIf
      :Else ⍝ assume this is one big string of attr=values
          del←split¨{⎕ML←3 ⋄ (⍵≠' ')⊂⍵}arg
      :EndIf
    ∇

    ∇ {r}←SetAttr attr
      :Access public
      attr←ParseAttr attr
      Attr[1⊃¨attr]←2⊃¨attr
      r←⎕THIS
    ∇

    ∇ {r}←DelAttr attrname;mask
      :Access public
      attrname←eis attrname
      mask←~_names∊attrname
      (_names _values)←mask∘/¨_names _values
      r←⎕THIS
    ∇

    ∇ r←CommonAttributes
      r←'abcdefghijklmnopqrstuvwxyz'⎕NL ¯2.2
    ∇

    :endsection

    :section Styles

    ∇ {r}←Style styles;msg
      :Access public
      msg←'Invalid style specification'
      :Select ≡styles
      :Case 2
          msg errorIf 11×0≠2|⍴styles
          _styles,←↓(2,⍨0.5×⍴styles)⍴styles
      :Case 3
          msg errorIf 11×∧/(,2)∘≡∘⍴¨styles
          _styles,←styles
      :Else
          msg ⎕SIGNAL 11
      :EndSelect
      r←⎕THIS
    ∇

    ∇ r←RenderStyles;style
      r←''
      :If ~0∊⍴_styles
          :For style :In _styles
              r,←∊(⍕¨style),¨':;'
          :EndFor
          r←' style="',r,'" '
      :EndIf
    ∇

    :EndSection

  ⍝                     The constructors

  ⍝ The first arg is the Tag, followed by its contents, then its attributes, if present
  ⍝ Note that attributes can be specified with the tag as in
  ⍝  button type="submit"

    :Section Constructors

    ∇ Make0
      :Implements constructor
      :Access public
      Init
    ∇

    ∇ Make1 t    ⍝ this can be any length
      :Implements constructor
      :Access public
      Tag←t
      Init
    ∇
    ∇ Make2(t arg)            ⍝ attributes can be added here
      :Implements constructor
      :Access public
      Make2Code(t arg)
    ∇

    ∇ Make2Code(t arg);attr;content
      :If 0∧.≡≡¨t arg                      ⍝ handle 2-character tag (e.g. 'ul' 'tr')
          Tag←t,arg
      :Else
          :If 1<|≡arg
          :AndIf ~isClass⊃arg
              (content attr)←arg
              :If ~0∊⍴attr
                  SetAttr attr
              :EndIf
          :Else
              content←arg
          :EndIf
          Tag←t
          Add content
      :EndIf
      Init
    ∇

    ∇ Make3(t content attr)       ⍝ elements and attributes added here
      :Implements constructor
      :Access public
      :If 0∧.≡≡¨t content attr    ⍝ handle 3-character tag (e.g. 'pre')
          Tag←t,content,attr
      :ElseIf isClass content
          Make2Code t(content attr)
      :Else
          Tag←t
          Add content
          :If ~0∊⍴attr
              SetAttr attr
          :EndIf
      :EndIf
      Init
    ∇

    ∇ Init
      (_html _HTML _JQ _SF _JQM _DC _JSS)←#.(_html _HTML _JQ _SF _JQM _DC _JSS)
    ∇

    :endsection

    :section Event Handling

    ∇ {r}←On handler
      :Access public
      handler←eis handler
      Handlers,←r←⎕NEW #._JQ.Handler
      r.(Events Callback ClientData JavaScript)←4↑handler,(⍴handler)↓'' 1 '' ''
    ∇

⍝    ∇ r←{a}APL w
⍝      :Access public shared
⍝      :If 0=⎕NC'a' ⋄ a←⊢ ⋄ :EndIf
⍝      r←a(0 w)
⍝    ∇
⍝    ∇ r←{a}JS w
⍝      :Access public shared
⍝      :If 0=⎕NC'a' ⋄ a←⊢ ⋄ :EndIf
⍝      r←a(1 w)
⍝    ∇
⍝    ∇ r←{a}CSS w
⍝      :Access public shared
⍝      :If 0=⎕NC'a' ⋄ a←⊢ ⋄ :EndIf
⍝      r←a(2 w)
⍝    ∇
⍝    ∇ r←{a}ATTR w
⍝      :Access public shared
⍝      :If 0=⎕NC'a' ⋄ a←⊢ ⋄ :EndIf
⍝      r←a(3 w)
⍝    ∇

    ∇ r←RenderHandlers;h;myid;selector;handler;str;callback;event;type;evt;action;JS;a
      :Access public ⍝!!! remove this after testing
      r←''
      :If ~0∊⍴Handlers
          :If UNDEF≡myid←id
          :AndIf ''≡myid←⊃Attr[⊂'id']
              id←myid←'id',¯10↑'0000000000',⍕?¯1+2*31⊣⎕RL←0
          :EndIf
          :For h :In Handlers
              h.Selectors←'#',myid
              r,←h.Render
          :EndFor
      :EndIf
    ∇
    :endsection

    :section Rendering

⍝ Elements with no End tag (<tag></tag>).

⍝ area base basefont br col frame hr img input isindex link meta param

    NoEndTagElements←'area'  'base'  'basefont'  'br'  'col'  'frame'  'hr'  'img'  'input'  'isindex'  'link'  'meta'  'param'

    fmtAttr←{' ',⍺,'=',Quote HtmlSafeText,⍕⍵}

    ∇ r←Render;av;t;vs;e;h;c
      :Access public
    ⍝ Render by first constructing the Tag, complete with attributes, if any
      r←Compose Content
      :If ~0∊⍴av←Tag
          h←RenderHandlers
          :For e :In CommonAttributes
              av,←{0::'' ⋄ UNDEF≡t←⍎⍵:'' ⋄ e fmtAttr t}e
          :EndFor
          :If 0<⍴vs←Attr[]
              av,←∊fmtAttr/¨vs
          :EndIf
          av,←RenderStyles
          r←(av Enclose r),h
      :EndIf
    ∇

    ∇ r←Postrender r
      :Access overridable
    ∇

    ∇ r←Compose list;e
      :Access public
    ⍝ This is the fn that does the bulk of the rendering work
    ⍝ It lays down the look of each element
      r←''
      :For e :In Eis list
          r,←{326=⎕DR ⍵:⍵.Render ⋄ ⍕⍵⊣÷≡⍵}e ⍝ ** TEMP: ÷≡⍵ to detect simple scalars: there should be none
      :EndFor
    ∇

    ∇ r←HtmlSafeText txt;i;m;u;ucs
    ⍝ make text HTML "safe"
      r←,⎕FMT txt
      i←'&<>"#'⍳r
      i-←(i=1)∧1↓(i=5),0 ⍝ mark & that aren't &#
      m←i∊⍳4
      u←127<ucs←⎕UCS r
      (m/r)←('&amp;' '&lt;' '&gt;' '&quot;')[m/i]
      (u/r)←(~∘' ')¨↓'G<&#ZZZ9;>'⎕FMT u/ucs
      r←∊r
    ∇

    :endsection

    :section Utilities

    Bracket←{'<',⍵,'>'}

    ∇ r←tag Enclose txt;nl
      :Access public
      tag←,tag
      r←(tag{(0∊⍴⍵)∧NoEndTagElements∊⍨⊂t←⍺↑⍨¯1+⍺⍳' ':Bracket ⍺,'/' ⋄ (Bracket ⍺),⍵,Bracket'/',t}txt),NL
    ∇

    ∇ r←Eis w
      :Access public
      r←⊂⍣((326∊⎕DR w)<2>|≡w),w ⍝ enclose if simple and not mixed
    ∇

    ∇ r←Quote a;b
      :Access public
      b←1↓<⌿¯1 0⌽'\"'∘.=';',a   ⍝ keep \" as is
      (b/a)←⊂'&quot;'
      r←1⌽'""',∊a
    ∇

    ∇ {r}←Push args;c;cl;attr;elm
      :Access public
      :If ~0∊⍴r←args
          (cl attr)←{2↑⍵,(⍴⍵)↓'' ''}eis args
          c←Content
          :If isClass cl
              elm←⎕NEW cl
              elm.Content←c
              :If ~0∊⍴attr
                  elm.SetAttr attr
              :EndIf
              r←Content←elm
          :ElseIf 0∊⍴attr
              r←Content,⍨←⊂cl
          :Else
              'Invalid Push arguments'⎕SIGNAL 11
          :EndIf
      :EndIf
    ∇

    ∇ {r}←{front}Add args;cl
    ⍝ add "something" to the Content
    ⍝ args can be an instance, a class, or just html/text
      front←{6::0 ⋄ front}''
      :Access public
      :If ~0∊⍴r←args
          :If isClass cl←⊃args
              r←⎕NEW∘{2<⍴,⍵:(⊃⍵)(1↓⍵) ⋄ ⍵}Eis args
              r.PageRef←PageRef
          :Else
              r←Eis args
          :EndIf
          :If front≠0
              Content,⍨←r
          :Else
              Content,←r
          :EndIf
      :EndIf
    ∇

    ∇ {r}←Last
      :Access public
      r←⊃⌽Content
    ∇

    ∇ r←isClass ao
      :Access public shared
      r←9.4∊⎕NC⊂'ao'
    ∇

    ∇ r←isInstance ao
      :Access public shared
      r←9.2∊⎕NC⊂'ao'
    ∇

    ∇ r←isHtmlElement ao
      :Access public shared
      :Trap r←0
          r←⊃∨/#.HtmlElement=⎕CLASS ao
      :EndTrap
    ∇

    ∇ r←Parse string;b;s
    ⍝ Separate each section of name="..."
      :Access public
      string←(b⍲1⌽b←' '=s)/s←' ',string
      b←(' '=string)>≠\'"'=string
      r←1↓¨b⊂string ⍝ each pair
      s←r⍳¨'='      ⍝ each is separated by =
      r←s{(¯1↓⍺↑⍵)(1↓¯1↓⍺↓⍵)}¨r
    ∇

    ∇ Describe
      :Access public overridable
      ∘∘∘
    ∇
    :endsection

:endclass  ⍝ HtmlElement