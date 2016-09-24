:class HtmlElement             ⍝ this is the most basic element of a page

⍝∇:require =\JSON.dyalog

    ⎕io←⎕ml←1

    :field public shared _version←1
    :field public NL←⎕ucs 13 ⍝ 10

    :field public Tag←''      ⍝ this is the element name
    :field public Content←⍬   ⍝ content of the element - a series of strings/instances/class+parms
    :field public Handlers←'' ⍝ array of event handlers
    :field public _PageRef←'' ⍝ reference back to the page instance containing this element
    :field public NoEndTag←0  ⍝ set to 1 if this singleton element (does not have a closing tag)
    :field public Position    ⍝ has position information for this element (if position is set)
    :field public Uses←''     ⍝ resources that will be used by this object (can be overridden by derived classes)

    :field public shared readonly _true←#.JSON.true     ⍝ same definition as in #.JSON
    :field public shared readonly _false←#.JSON.false   ⍝ same definition as in #.JSON


⍝ define shortcuts to namespaces (initialized later)
    :field public shared _html ⍝ reference to base HTML elements namespace
    :field public shared _JQ   ⍝ reference to JQuery/JQueryUI widgets namespace
    :field public shared _SF   ⍝ reference to Syncfusion widgets namespace
    :field public shared _JSS  ⍝ reference to JavaScript Snippets namespace
    :field public shared _DC   ⍝ reference to Dyalog Controls namespace
    :field public shared _     ⍝ reference to namespace that refers to all elements/widgets

   ⍝ make shortcuts for some common HTML attributes
    :field public shared readonly UNDEF←⎕NULL  ⍝ setting for undefined attributes
    :field public id←UNDEF                     ⍝ id attribute for the element
    :field public value←UNDEF                  ⍝ value attribute for the element
    :field public name←UNDEF                   ⍝ name attribute for the element
    :field public class←UNDEF                  ⍝ class attribute for the element
    :field public style←UNDEF                  ⍝ style attribute for the element
    :field public title←UNDEF                  ⍝ title attribute for the element
    :field public type←UNDEF                   ⍝ type attribute for the element

    :field public readonly CommonAttributes←'id' 'value' 'name' 'class' 'style' 'title' 'type' ⍝ element attributes that are directly accessible

    _names←_values←0⍴⊂'' ⍝ used for attributes

    :field public _styles←''

    rand←{?⍵⊣⎕RL←0}

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

    ∇ r←isChar w
      :Access public shared
      r←0 2∊⍨10|⎕DR w
    ∇

    ∇ r←isNum w
      :Access public shared
      r←2|⎕DR w
    ∇

    ∇ r←isString w
      :Access public shared
      :Select ≡w
      :Case 2
          :If 1=⍴,w
              r←{(isChar ⍵)∧1∊⍴⍴1/⍵}⊃w
          :Else
              r←0
          :EndIf
      :CaseList 0 1
          r←{(isChar ⍵)∧1∊⍴⍴1/⍵}w
      :Else
          r←0
      :EndSelect
    ∇

    ∇ r←quote w
      :Access public
      r←{'"'∊⍵:⍵ ⋄ '"',⍵,'"'}w
    ∇

    ∇ r←isTrue a
      :Access public shared
      →0⍴⍨r←(,1)≡,a       ⍝ boolean
      →0⍴⍨r←#.JSON.true≡a ⍝ namespace
      →0⍴⍨r←'true'≡a      ⍝ string
      →0⍴⍨r←a≡⊂'true'     ⍝ 7161⌶1
    ∇

    ∇ r←isFalse a
      :Access public shared
      →0⍴⍨r←(,0)≡,a        ⍝ boolean
      →0⍴⍨r←#.JSON.false≡a ⍝ namespace
      →0⍴⍨r←'false'≡a      ⍝ string
      →0⍴⍨r←a≡⊂'false'     ⍝ 7161⌶0
    ∇

    ∇ r←a ine w
      :Access public shared
      r←a{0∊⍴⍺:'' ⋄ ⍵}w ⍝ if not empty
    ∇
    errorIf←{⍺←⊢ ⋄ 0≠⍵:⍺ ⎕SIGNAL ⍵}

    :section Attribute Handling

    ∇ r←fixkeys w
      :Access public shared
      r←{2>|≡⍵:,⊂⍵ ⋄ ⍵}w ⍝ Enclose if simple
    ∇

    ∇ SyncAttrs arg
      :Implements Trigger id,name,class,style,title,type,value
      :If ⊃≢/arg.(NewValue OldValue)
          arg.Name Set arg.NewValue~UNDEF
      :EndIf
    ∇

    :property keyed Attrs       ⍝ element attributes
    :access public

        ∇ set ra;i;new;there;names;ind
          there←~new←(⍴_names)<i←_names⍳names←fixkeys⊃ra.Indexers
          (_values _names),←new∘/¨ra.NewValue names
          _values[there/i]←there/ra.NewValue
          :For i :In {⍵/⍳⍴⍵}7≥'id' 'class' 'style' 'title' 'value' 'type' 'name'⍳names
              ⍎(i⊃names),'←i⊃ra.NewValue'
          :EndFor
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

    ∇ attr←{plain}ParseAttr arg;split;item;t;f;i;eq;nq;items;n
      :Access public shared
     
⍝ Parse html sttributes
⍝ {plain} - Boolean indicating whether to not interpret a plain first token as an if
⍝ args    - vector of tokens to parse
⍝
⍝     1)    In only the first token, a simple string (i.e. not in the form 'abc=def') without a leading '#' or '.' is treated as an id
⍝        'foo'  > id="foo"
⍝
⍝        In all other positions, a string of this type is treated as a singleton attribute
⍝        'foo' 'goo' 'moo' > id="foo" goo="goo" moo="moo"
⍝
⍝     2)    Single simple string beginning with '#' is an id
⍝        '#foo'  > id="foo"
⍝        'goo=moo' '#foo' > goo="moo" id="foo"
⍝
⍝     3)    Single simple string beginning with '.' is treated as a class
⍝        '.foo'  > class="foo"
⍝        'foo' '.goo' 'moo' > id="foo" class="goo" moo="moo"
⍝
⍝     4)    Attributes must be paired either as in 'foo=goo' or ('foo' 'goo'), if there is a single pair, it must be enclosed
⍝        ⊂'href' '#top'  > href="#top"
⍝
⍝        The value portion of an attribute pair may begin with '#' or '.' without special interpretation
⍝        ('href' '#top') '#foo' > href="#top" id="foo"
     
      :If 0=⎕NC'plain' ⋄ plain←0 ⋄ :EndIf
      arg←eis,arg
      attr←⍬
      split←{0=⊢/v←∨\(≠\'"'=⍵)<'='=⍵:⍵ ⋄ ((~v)/⍵)({'"'∧.=∊1 ¯1↑¨⊂⍵:¯1↓1↓⍵ ⋄ ⍵}1↓v/⍵)}
      :For i :In ⍳⍴arg
          :Select |≡item←,i⊃arg
          :Case 1
              :If ~0∊⍴item
                  :If ∨/eq←'='=item              ⍝ any '=' (i.e.
                  :AndIf 0≠n←eq+.∧nq←~≠\'"'=item
                      :If n=1
                          attr,←⊂split item
                      :Else
                          attr,←⊃,/1 ParseAttr¨item{⎕ML←3 ⋄ ⍵⊂⍺}nq⍲item=' '
                      :EndIf
                  :ElseIf 3>f←'#.'⍳1↑item
                      attr,←⊂((f⊃'id' 'class')(1↓item))
                  :ElseIf plain<i=1
                      attr,←⊂'id'item
                  :Else
                      attr,←⊂2⍴⊂item
                  :EndIf
              :EndIf
          :Case 2
              attr,←⊂item
          :Else
              ('Invalid attribute specification: ',⍕item)⎕SIGNAL 11
          :EndSelect
      :EndFor
    ∇

    ∇ {r}←{which}Set attr
      :Access public
      :If 0≠⎕NC'which' ⋄ attr←↓(eis which),[1.1]eis attr
      :Else
          'Set cannot be called with a scalar ref'⎕SIGNAL 11/⍨(0=≡attr)∧326∊⎕DR attr
     
          :If 2=⍴,attr  ⍝ 'attr' 'value' is never shorthanded (e.g. given special treatment for id/class)
          :AndIf 1∧.≥≡¨attr
          :AndIf ~∧/'='∊¨attr
              attr←,⊂attr
          :EndIf
     
          attr←1 ParseAttr attr
      :EndIf
      :If ~0∊⍴attr
          Attrs[1⊃¨attr]←2⊃¨attr
      :EndIf
      r←⎕THIS
    ∇

    ∇ {r}←{which}SetAttribute attr
    ⍝ set attributes, treating
     
      :If 0≠⎕NC'which' ⋄ attr←↓(eis which),[1.1]eis attr
      :Else
          'Set cannot be called with a scalar ref'⎕SIGNAL 11/⍨(0=≡attr)∧326∊⎕DR attr
          attr←ParseAttr attr
      :EndIf
      :If ~0∊⍴attr
          Attrs[1⊃¨attr]←2⊃¨attr
      :EndIf
      r←⎕THIS
    ∇

    ∇ {r}←{which}SetAttr attr
      :Access public
      :If 0=⎕NC'which' ⋄ r←SetAttribute attr
      :Else ⋄ r←which SetAttribute attr
      :EndIf
    ∇

    ∇ {r}←DelAttr attrname;mask
      :Access public
      attrname←eis attrname
      mask←~_names∊attrname ⋄ (_names _values)←mask∘/¨_names _values
      r←⎕THIS
    ∇

    ∇ r←{proto}GetAttr attrname
      :Access public
      :If 0=⎕NC'proto' ⋄ proto←'' ⋄ :EndIf
      attrname←eis attrname
      :If 1=⍴attrname
          :Trap 3 ⍝ index error
              r←_values⊃⍨_names⍳attrname
          :Else
              r←proto
          :EndTrap
      :Else
          proto∘GetAttr¨attrname
      :EndIf
    ∇

    ∇ r←AddClass c
      :Access public
      :If class≡UNDEF
          class←c
      :Else
          class,←' ',c
      :EndIf
    ∇


    ∇ r←AddStyle s;t
      :Access public
      :If style≡UNDEF
          style←s,(';'=¯1↑s)↓';'
      :Else
          style,←(';'=¯1↑style)↓';',s,(';'=¯1↑s)↓';'
      :EndIf
    ∇

    :EndSection

    :Section Styles

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
              msg errorIf 11×~∧/(,2)∘≡∘⍴¨styles
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

  ⍝ The constructors

  ⍝ The first arg is the Tag, followed by its contents, then its attributes, if present
  ⍝ Note that attributes can be specified with the tag as in
  ⍝  button type="submit"

    :Section Constructors

    ∇ Make0
    ⍝ basic constructor
      :Implements constructor
      :Access public
      Init
    ∇

    ∇ Make1 t    ⍝ this can be any length
    ⍝ t - tag/element name (e.g. 'div' or 'table')
      :Implements constructor
      :Access public
      Tag←t
      Init
    ∇

    ∇ Make2(t arg)
    ⍝ t - tag/element name (e.g. 'div' or 'table')
    ⍝ arg - content or (content attrs)
      :Implements constructor
      :Access public
      Make2Code(t arg)
    ∇

    ∇ Make2Code(t arg);attr;content;ref
      :If 1=≡t arg                      ⍝ handle 2-character tag (e.g. 'ul' 'tr')
          Tag←t,arg
      :Else
        ⍝ If we have a couple of items, the second of which is
        ⍝ a string or VTV, then we are dealing with attributes:
          :If (1<|≡arg)∧(,2)≡⍴arg
          :AndIf isAttr 2⊃arg
              (content attr)←arg ⋄ SetAttr attr
          :Else
              content←arg
          :EndIf
          Add content
          Tag←t
      :EndIf
      Init
    ∇

    ∇ Make3(t content attr);ref
    ⍝ t - tag/element name (e.g. 'div' or 'table')
    ⍝ content - content
    ⍝ attr - attrs
      :Implements constructor
      :Access public
      :If 1=≡t content attr    ⍝ handle 3-character tag (e.g. 'pre')
          Tag←t,content,attr
      :ElseIf isClass content
          Make2Code t(content attr)
      :Else
          Tag←t
         ⍝ attr could be a ref. This means that it goes in the contents.
          Add content
          :If (0∊⍴attr)⍱ref←isRef attr
              SetAttr attr
          :ElseIf ref
              Add attr
          :EndIf
      :EndIf
      Init
    ∇

    ∇ Init
      (_html _JQ _SF _DC _JSS _)←#.(_html _JQ _SF _DC _JSS _)
      Position←⎕NS''
    ∇

    ∇ SetUse;c
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

    ∇ Use resource
      :Access public
      :If ~0∊⍴Uses ⋄ Uses←eis Uses ⋄ :EndIf
      Uses,←eis resource
    ∇

    :endsection

    :section Event Handling

    ∇ {handler}←On args;n;i
      :Access public
      args←eis args
      handler←⎕NEW #._JQ.Handler
      handler.(Events Callback ClientData JavaScript Delegates jQueryWrap ScriptWrap Cursor)←args defaultArgs'' 1 '' '' '' 1 1 ¯1
      handler.WidgetRef←⎕THIS
      handler.Page←_PageRef
      :If ¯1=handler.Hourglass ⋄ handler.Hourglass←(,0)≢,handler.Callback ⋄ :EndIf
      :If 0∊n←⍴Handlers
          Handlers,←handler
      :ElseIf n<i←Handlers.Events⍳⊂handler.Events
          Handlers,←handler
      :Else
          Handlers[i]←handler
      :EndIf
    ∇

    ∇ r←RenderHandlers;myid;h
      :Access public ⍝!!! remove this after testing
      r←''
      :If ~0∊⍴Handlers
          :If ∨/0∘∊∘⍴¨Handlers.Selector
              myid←SetId
          :EndIf
          :For h :In Handlers
              :If 0∊⍴h.Selector
                  h.Selector←'#',myid
              :EndIf
              r,←h.Render
          :EndFor
      :EndIf
    ∇
    :endsection

    :section Rendering

⍝ Elements with no End tag (<tag></tag>).

⍝ area base basefont br col frame hr img input isindex link meta param

    ∇ r←a FormatAttr w
      :Access public shared
      r←' ',a,'=',Quote HtmlSafeText,⍕w
    ∇

    ∇ r←Render;av;t;vs;e;h;c;p
      :Access public
    ⍝ Render by first constructing the Tag, complete with attributes, if any
      r←RenderCore Content
      :If ~0∊⍴av←Tag
          h←RenderHandlers
          p←RenderPosition
          :If 0<⍴vs←Attrs[]
              av,←∊FormatAttr/¨vs
          :EndIf
          av,←RenderStyles
          :If (⊂Tag)∊'html' 'body' 'head'
              r←av Enclose r,h,p
          :Else
              r←(av Enclose r),h,p
          :EndIf
      :EndIf
    ∇

    ∇ r←Postrender r
      :Access overridable
    ∇

    ∇ r←RenderCore list;e;t
      :Access public
    ⍝ do the bulk of the rendering work
      r←''
      :For e :In eis list
          :If isInstance⊃e
              r,←e.Render
          :ElseIf isClass⊃e
              r,←(New e).Render
          :Else
              :If 1<⍴⍴t←⍕e
                  t←∊(↓t),¨⊂'<br/>'
              :EndIf
              r,←t
          :EndIf
      :EndFor
    ∇

    ∇ r←HtmlSafeText txt;i;m;u;ucs
      :Access public shared
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
          SetUse
      :EndIf
    ∇

    :endsection

    :section Utilities

    Bracket←{'<',⍵,'>'}

    ∇ SetInputName
      :Access public
      ⍝ for input element widgets, this will set the name to the id if not already set
      ⍝ or the id to the name if not already set
      :If (⊂name)∊UNDEF''
          :If (⊂id)∊UNDEF''
              SetId
          :EndIf
          name←id
      :ElseIf UNDEF≡id
          id←name
      :EndIf
    ∇

    ∇ r←tag Enclose txt;nl
      :Access public shared
      tag←,tag
      r←(tag{NoEndTag∧0∊⍴⍵:Bracket ⍺,'/' ⋄ (Bracket ⍺),⍵,Bracket'/',⍺↑⍨¯1+⍺⍳' '}txt)
    ∇

    ∇ r←{a}eis w
      :Access public shared
      r←((,∘⊂)⍣(((isNum w)∨isString w)∧2>|≡w))w ⍝ enclose if simple character
      ⍝r← (,∘⊂)⍣((326∊⎕DR w)<2>|≡w)⊢w ⍝ Enclose if simple
    ∇

    ∇ da←args defaultArgs defaultvalues
      :Access public shared
      da←da,(⍴,da←eis args)↓defaultvalues
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
              r←⎕NEW∘{2<⍴,⍵:(⊃⍵)({eis ⍵}(1↓⍵)) ⋄ ⍵}args
              :If 0≠⎕NC⊂'_PageRef'
                  r._PageRef←_PageRef
              :EndIf
              :If ~0∊⍴attr
                  r.SetAttr attr
              :EndIf
          :ElseIf isInstance⊃args
              :If ~0∊⍴attr
                  (⊃args).SetAttr attr
              :EndIf
              r←args
          :Else
              (r←⎕NEW HtmlElement).Content←args
          :EndIf
      :EndIf
    ∇

    ∇ {r}←{attr}Push args;c;cl;attr;elm
      :Access public
      :If ~0∊⍴r←args
          c←Content
          :If 0=⎕NC'attr' ⋄ attr←'' ⋄ :EndIf
          r←attr ParseArgs args
          :If isInstance r
              :Trap 4 5 ⍝ rank and length error
                  r.Content,←c
              :Else
                  r.Content,←⊂c
              :EndTrap
              Content←r
          :Else
              Content,⍨←r
          :EndIf
      :EndIf
    ∇

    ∇ {r}←{attr}Add args;cl
    ⍝ add "something" to the Content
    ⍝ args can be an instance, a class, or just html/text
      :Access public
      r←''
      :If ~0∊⍴∊args
          :If 0=⎕NC'attr' ⋄ attr←'' ⋄ :EndIf
          r←attr ParseArgs args
          :Trap 4 5 ⍝ rank and length error
              Content,←r
          :Else
              Content,←⊂r
          :EndTrap
      :EndIf
    ∇

    ∇ {r}←{attr}New args;cl
    ⍝ create a new instance
    ⍝ args can be an instance, a class, or just html/text
      :Access public shared
      r←''
      :If ~0∊⍴∊args
          :If 0=⎕NC'attr' ⋄ attr←'' ⋄ :EndIf
          r←attr ParseArgs args
      :EndIf
    ∇

    ∇ {r}←{attr}Insert args;cl
    ⍝ add "something" to the beginning of Content
    ⍝ args can be an instance, a class, or just html/text
      :Access public
      r←''
      :If ~0∊⍴∊args
          :If 0=⎕NC'attr' ⋄ attr←'' ⋄ :EndIf
          r←attr ParseArgs args
          :Trap 4 5 ⍝ rank and length error
              Content,⍨←r
          :Else
              Content,⍨←⊂r
          :EndTrap
      :EndIf
    ∇

    ∇ {r}←Last
      :Access public
      r←⊃⌽Content
    ∇

    ∇ r←{ref}isClass ao
      :Access public shared
      →0↓⍨r←9.4∊⎕NC⊂'ao'
      :If 0≠⎕NC'ref'
          r←ref∊∊⎕CLASS ao
      :EndIf
    ∇

    ∇ r←{ref}isInstance ao
      :Access public shared
      →0↓⍨r←9.2∊⎕NC⊂'ao'
      :If 0≠⎕NC'ref'
          r←ref∊∊⎕CLASS ao
      :EndIf
    ∇

    ∇ r←isRef obj
      :Access public shared
      r←9∊⎕NC'obj'
    ∇

    ∇ r←isWidget obj
      :Access public shared
      →0↓⍨r←9.2∊⎕NC⊂'obj'
      r←#._JQ._jqWidget∊∊⎕CLASS obj
    ∇

    isattr←{isString ⍵:1 ⋄ isRef ⍵:0 ⋄ ∧/∇¨⍵}

    ∇ r←isAttr obj
      :Access public shared
      r←isattr obj
    ∇

    ∇ r←renderIt It
      :Access public shared
      r←{
          0∊⍴⍵:''
          326=⎕DR ⍵:{
              isString ⍵:∊⍵
              2≤|≡⊃⍵:{
                  isClass⊃⊃⍵:((New⊃⍵).Render),renderIt 1↓⍵
                  ,⍕⍵
              }⍵
              isInstance⊃⍵:((⊃⍵).Render),renderIt 1↓⍵
              isClass⊃⍵:((⎕NEW(⊃⍵)).Render),renderIt 1↓⍵
              isChar⊃⍵:(⊃⍵),renderIt 1↓⍵
              (,⍕⊃⍵),renderIt 1↓⍵}⍵
          ,⍕⍵}It
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

    ∇ r←GenId
      :Access public shared
      r←'id',⍕rand ¯1+2*31
    ∇

    ∇ {myid}←SetId
      :Access public
      :If UNDEF≡myid←id
          :If ''≡myid←⊃Attrs[⊂'id']
              id←myid←GenId
          :Else
              id←myid
          :EndIf
      :EndIf
    ∇

    dtlb←{⍵{((∨\⍵)∧⌽∨\⌽⍵)/⍺}' '≠⍵}

    ∇ r←ScriptFollows
      :Access public shared
      r←2↓∊(⎕UCS 13 10)∘,¨Follows
    ∇

    ∇ r←Follows;n
      :Access public shared
      n←⎕XSI{1++/∧\⍵∘≡¨(⊃⍴⍵)↑¨⍺}(⍕⎕THIS),'.'
      r←{⍵/⍨'⍝'≠⊃¨⍵}{1↓¨⍵/⍨∧\'⍝'=⊃¨⍵}{⍵{((∨\⍵)∧⌽∨\⌽⍵)/⍺}' '≠⍵}¨(1+n⊃⎕LC)↓↓(180⌶)n⊃⎕XSI
    ∇

    ∇ r←MarkdownFollows
      :Access public shared
      r←⊃#.MarkAPL.Markdown2HTML Follows
    ∇

    ∇ r←CodeFollows;n
      :Access public shared
      n←⎕XSI{1++/∧\⍵∘≡¨(⊃⍴⍵)↑¨⍺}(⍕⎕THIS),'.'
      r←2↓∊(⎕UCS 13 10)∘,¨{¯1↓⍵/⍨∨\⌽<\∨/¨'⍝<<end>>'∘⍷¨⍵}(1+n⊃⎕LC)↓↓(180⌶)2⊃⎕XSI
      r←'<pre style="font-family:APL385 Unicode">',r,'</pre>'
    ∇


    ∇ r←WrapFollowing tag;text;SplitOnSpaceLines;Trim;FirstCommentBlock
      :Access public shared
     
     ⍝ USAGE:
     ⍝
     ⍝      Add WrapFollowing 'p class="bodytext"'
     ⍝      ⍝ paragraph may span
     ⍝      ⍝ several lines
     ⍝      ⍝
     ⍝      ⍝ they are separated by empty comment lines
     ⍝
     ⍝ RESULT:
     ⍝
     ⍝      <p class="bodytext">paragraph may span several lines</p>
     ⍝      <p class="bodytext">they are separated by empty comment lines</p>
     ⍝
     
      Trim←{(∨\' '≠⍵)/⍵}¨
      FirstCommentBlock←{1↓¨⍵/⍨∧\'⍝'=⊃¨⍵}
      SplitOnSpaceLines←{1↓¨⍵⊂⍨⍵∧.=¨' '}
      text←(1+2⊃⎕LC)↓↓(⊃⊃⎕CLASS 1⊃⎕RSI).(180⌶)2⊃⎕SI
     
      r←tag∘#.HtmlUtils.Enclose¨∊¨SplitOnSpaceLines' ',¨⍨' ',⌽¨Trim⌽¨FirstCommentBlock Trim text
    ∇

    ∇ r←what Subst text;names;gv;i;repl;fixL;fixR
      :Access public shared
      r←text
      fixL←'[][{}()?*.+\\^$|]'⎕R'\\\0' ⍝ precede regex metacharacters by \
      fixR←'&' '%' '\\'⎕R'\\\0'        ⍝ add \ to & % \
      :Select ⎕NC⊂'what'
      :Case 9.1 ⍝ namespace
          gv←⍒∊⍴¨names←what.⎕NL ¯2 3 ⍝ variables and functions only, sort so that 'foo' matches before 'fo'
          r←(names[gv]⎕R(fixR¨⍕¨what⍎⍕names[gv]))r
      :Case 2.1 ⍝ substitution pairs
          :If 2=|≡what ⋄ what←,⊂what ⋄ :EndIf
          :If 2≠⍴⍴what ⋄ what←↑what ⋄ :EndIf
          what←,¨what
          r←(fixL¨what[;1])⎕R(fixR¨what[;2])⊢r
      :EndSelect
    ∇

    :endsection

:endclass  ⍝ HtmlElement
