:class HtmlElement             ⍝ this is the most basic element of a page

    ⎕io←⎕ml←1

    :field public shared _version←1
    :field public NL←⎕ucs 13 ⍝ 10

    :field public Tag←''      ⍝ this is the element name
    :field public Content←⍬   ⍝ this is a series of strings/instances/class+parms
    :field public Handlers←''
    :field public _PageRef←''
    :field public NoEndTag←0
    :field public Position
    :field public Uses←''     ⍝ resources that will be used by this object (can be overridden by derived classes)

⍝ define shortcuts to namespaces (initialized later)
    :field public _html        ⍝ base HTML elements
    :field public _HTML        ⍝ "Enhanced" HTML elements
    :field public _JQ          ⍝ JQuery/JQueryUI
    :field public _SF          ⍝ SyncFusion
    :field public _JQM         ⍝ JQueryMobile
    :field public _JSS         ⍝ JavaScript Snippets
    :field public _DC          ⍝ Dyalog Controls


   ⍝ make shortcuts for some common HTML attributes
    :field public shared readonly UNDEF←⎕NULL
    :field public id←UNDEF
    :field public value←UNDEF
    :field public name←UNDEF
    :field public class←UNDEF
    :field public style←UNDEF
    :field public title←UNDEF
    :field public type←UNDEF

    _names←_values←0⍴⊂'' ⍝ used for attributes
    :field public _styles←''

    rand←{t←16807⌶2 ⋄r←?⍵ ⋄ t←16807⌶t ⋄ r }

    ∇ r←Version
      :Access public
      r←{⍵,[1.1]{0::¯1 ⋄ ⍵._version}¨⍵}⎕CLASS ⎕THIS
    ∇

    ∇ r←context name
      :Access public shared
      :If 326=⎕DR name ⍝ ref?
          r←⎕RSI{0∊⍴⍺:'' ⋄ 16::''
              ∨/∨/¨(⊂⍵)∊¨(⊃⍺).(⎕CLASS ⎕THIS):⊃⍺
              (1↓⍺)∇ ⍵}name
      :Else
          r←⎕RSI{0∊⍴⍺:''
              ⋄ (⊃⍺){0=⍺.⎕NC⊂⍵:0
                  ⋄ ''≡t←⍺⍎⍵:0
                  ⋄ 1}⍵:⊃⍺
              ⋄ (1↓⍺)∇ ⍵}name
      :EndIf
    ∇

    ∇ r←isString w
      :Access public shared
      :Select ≡w
      :Case 2
          :If 1=⍴,w
              r←{(0 2∊⍨10|⎕DR ⍵)∧1∊⍴⍴1/⍵}⊃w
          :Else
              r←0
          :EndIf
      :CaseList 0 1
          r←{(0 2∊⍨10|⎕DR ⍵)∧1∊⍴⍴1/⍵}w
      :Else
          r←0
      :EndSelect
    ∇

    ∇ r←quote w
      :Access public
      r←{'"'∊⍵:⍵ ⋄ '"',⍵,'"'}w
    ∇

    ∇ r←a ine w
      :Access public
      r←a{0∊⍴⍺:'' ⋄ ⍵}w ⍝ if not empty
    ∇
    errorIf←{⍺←⊢ ⋄ 0≠⍵:⍺ ⎕SIGNAL ⍵ ⋄ ''}

    :section Attribute Handling
    ∇ r←fixkeys w
      :Access public shared
      r←{2>|≡⍵:,⊂⍵ ⋄ ⍵}w ⍝ Enclose if simple
    ∇


    :property keyed Attr       ⍝ element attributes
    :access public
        ∇ set ra;i;new;there;ind
          there←~new←(⍴_names)<i←_names⍳ind←fixkeys⊃ra.Indexers
          (_values _names),←new∘/¨ra.NewValue ind
          _values[there/i]←there/ra.NewValue
        ∇
        ∇ r←get ra;i;n
          ⎕SIGNAL(1<⍴i←ra.Indexers)⍴4 ⍝ RANK err
          :If 1↑ra.IndexersSpecified
              r←(_values,⊂'')[_names⍳n←fixkeys⊃⍣(2≤|≡i)+i]
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
⍝ - in a string of attr=value OR id (if there's no "=", treat it as an id)
     
     
      →0/⍨3≡|≡del←arg ⍝ no further checks, better be all pairs of strings
     
      split←{a←~v←∨\'='=⍵ ⋄ (a/⍵)({'"'∧.=∊1 ¯1↑¨⊂⍵:¯1↓1↓⍵ ⋄ ⍵}1↓v/⍵)}
      :If 2≡|≡arg
          :If ∧/'='∊¨arg ⍝ attr=value in each
              del←split¨del
          :Else
              del←↓((0.5×⍴arg),2)⍴arg
          :EndIf
      :Else ⍝ assume this is one big string of attr=values
          :If '='∊arg
              del←split¨{⎕ML←3 ⋄ ((⍵≠' ')≥{~≠\⍵}'"'=⍵)⊂⍵}arg
          :ElseIf '.'=1↑arg
              del←,⊂'class'(1↓arg)
          :Else
              del←,⊂'id'(arg↓⍨'#'=1↑arg)
          :EndIf
      :EndIf
    ∇

    ∇ {r}←{which}Set attr
      :Access public
      :If 0≠⎕NC'which' ⋄ attr←,(eis which),[1.1]eis attr ⋄ :EndIf
      attr←ParseAttr attr
      Attr[1⊃¨attr]←2⊃¨attr
      r←⎕THIS
    ∇

    ∇ {r}←{which}SetAttr attr
      :Access public
      :If 0=⎕NC'which' ⋄ r←Set attr
      :Else ⋄ r←which Set attr
      :EndIf
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

    ∇ {r}←{what}Style styles;msg
      :Access public
      msg←'Invalid style specification'
      :If 0≠⎕NC'what'
          _styles,←↓(eis what),⍪eis((⍕¨)⍣(2|⎕DR styles))styles
      :Else
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
      :EndIf
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
          :If isString arg
              Content,←arg
          :ElseIf ~isClass⊃arg
              :Trap 4 5
                  (content attr)←arg
                  :If {(isClass ⍵)∨isInstance ⍵}⊃attr
                      content←arg
                      attr←''
                  :EndIf
                  Content,←content
                  :If ~0∊⍴attr
                      SetAttr attr
                  :EndIf
              :Else
                  Add arg
              :EndTrap
          :Else
              Add arg
          :EndIf
          Tag←t
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
      Position←⎕NS''
    ∇

    ∇ Use;c
      :Access public overridable
      :If ~0∊⍴Uses
          :Trap 0
              :If ''≡c←_PageRef
                  c←context'_PageRef'
                  :If ~0∊⍴c
                      c←c._PageRef
                  :EndIf
              :EndIf
              :If ~0∊⍴c
                  c.Use Uses
              :EndIf
          :EndTrap
      :EndIf
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

    ∇ r←RenderHandlers;h;myid;selector;handler;str;callback;event;type;evt;action;JS;a;n
      :Access public ⍝!!! remove this after testing
      r←''
      :If ~0∊⍴Handlers
          myid←SetId
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

    fmtAttr←{' ',⍺,'=',Quote HtmlSafeText,⍕⍵}

    ∇ r←Render;av;t;vs;e;h;c;p
      :Access public
    ⍝ Render by first constructing the Tag, complete with attributes, if any
      r←Compose Content
      :If ~0∊⍴av←Tag
          h←RenderHandlers
          p←RenderPosition
          :For e :In CommonAttributes
              av,←{0::'' ⋄ UNDEF≡t←⍎⍵:'' ⋄ e fmtAttr t}e
          :EndFor
          :If 0<⍴vs←Attr[]
              av,←∊fmtAttr/¨vs
          :EndIf
          av,←RenderStyles
          r←(av Enclose r),h,p
      :EndIf
    ∇

    ∇ r←Postrender r
      :Access overridable
    ∇

    ∇ r←Compose list;e;t
      :Access public
    ⍝ do the bulk of the rendering work
      r←''
      :For e :In eis list
          :If isInstance e
              r,←e.Render
          :ElseIf isClass e
              r,←(⎕NEW e).Render
          :Else
              :If 1<⍴⍴t←⍕e
                  t←∊(↓t),¨⊂'<br/>'
              :EndIf
              r,←t
          :EndIf
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

    ∇ r←RenderPosition
      :Access public
      r←''
      :If ~0∊⍴Position.⎕NL-2
          Uses,←⊂'JQueryUI'
          r←#.JQ.JQueryfn'position'('#',SetId)Position
          Use
      :EndIf
    ∇

    :endsection

    :section Utilities

    Bracket←{'<',⍵,'>'}

    ∇ r←tag Enclose txt;nl
      :Access public shared
      tag←,tag
      r←(tag{NoEndTag∧0∊⍴⍵:Bracket ⍺,'/' ⋄ (Bracket ⍺),⍵,Bracket'/',⍺↑⍨¯1+⍺⍳' '}txt),NL
    ∇

    ∇ r←{a}eis w
      :Access public shared
      r←(,∘⊂)⍣((326∊⎕DR w)<2>|≡w),w ⍝ enclose if simple and not mixed
    ∇

    ∇ r←Quote a;b
      :Access public shared
      b←1↓<⌿¯1 0⌽'\"'∘.=';',a   ⍝ keep \" as is
      (b/a)←⊂'&quot;'
      r←1⌽'""',∊a
    ∇

    ∇ r←attr ParseArgs args
      :Access public
      :If ~0∊⍴r←args
          :If isClass⊃args
              r←⎕NEW∘{2<⍴,⍵:(⊃⍵)({eis ⍵}(1↓⍵)) ⋄ ⍵}eis args
              r._PageRef←_PageRef
              :If ~0∊⍴attr
                  r.SetAttr attr
              :EndIf
          :Else ⍝If isInstance⊃args
              r←args
⍝      :ElseIf isString args
⍝        :If (#._html.span≡⊃⊃⎕CLASS ⎕THIS)⍝∨0∊⍴⎕THIS.Content
⍝          r←args
⍝        :Else
⍝          (r←⎕NEW #._html.span).Content←args
⍝          r._PageRef←_PageRef
⍝        :EndIf
⍝      :Else
⍝        r←args
          :EndIf
      :EndIf
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

    ∇ {r}←{attr}Add args;cl
    ⍝ add "something" to the Content
    ⍝ args can be an instance, a class, or just html/text
      :Access public
      :If 0=⎕NC'attr' ⋄ attr←'' ⋄ :EndIf
      r←attr ParseArgs args
      :Trap 4 5 ⍝ rank and length error
          Content,←r
      :Else
          Content,←⊂r
      :EndTrap
    ∇

    ∇ {r}←{attr}Prepend args;cl
    ⍝ add "something" to the beginning of Content
    ⍝ args can be an instance, a class, or just html/text
      :Access public
      attr←{6::⍵ ⋄ attr}''
      Content,⍨←r←attr ParseArgs args
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

    ∇ r←renderIt It
      :Access public shared
      r←{326=⎕DR⊃⍵:{isInstance⊃⍵:(⊃⍵).Render
              isClass⊃⍵:(⎕NEW(⊃⍵)((⊃⍣(2=⊃⍴⍵))1↓⍵)).Render
              ,⍕⍵}⍵ ⋄ ,⍕⍵}It
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

    ∇ r←GenId
      :Access public shared
      r←'id',⍕rand ¯1+2*31
    ∇

    ∇ myid←SetId
      :Access public
      :If UNDEF≡myid←id
      :AndIf ''≡myid←⊃Attr[⊂'id']
          id←myid←GenId
      :EndIf
    ∇

    :endsection

:endclass  ⍝ HtmlElement