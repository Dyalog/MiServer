:Namespace _JQ
    (⎕IO ⎕ML)←1

    :section Common Code

    quote←{0∊⍴⍵: '' ⋄ '⍎"'∊⍨⍬⍴⍵:⍵ ⋄ '"',(('"' ⎕R '\\\0')⍵),'"'}
    fmtSelector←{{'this'≡⍵:⍵ ⋄quote ⍵}¯2↓enlist{⍵,', '}¨eis ⍵}

    ∇ r←opt(sel Update jqfn)val
    ⍝ update an option for a widget
      r←#.JQ.Execute'$(',(fmtSelector sel),').',jqfn,'("option","',(quote opt),'",',(quote val),');'
    ∇
    :endsection


    :section Base Classes
    :class _jqObject : #.HtmlElement
        :field public Selector←''      ⍝ Selector to apply the JQuery function to
        :field public JavaScript←''    ⍝ additional JavaScript to run AFTER the jQuery function, can be function chain, separate code or both
        :field public PreJavaScript←'' ⍝ additional JavaScript to run BEFORE the jQuery function
        :field public Var←''           ⍝ JavaScript variable name for created object
        :field public JQueryFn←''      ⍝ JQuery function to apply
        :field public JQPars←''        ⍝ JQuery function parameters
        :field public shared readonly _true←#.JSON.true     ⍝ same definition as in #.JSON
        :field public shared readonly _false←#.JSON.false   ⍝ same definition as in #.JSON
        :field public ScriptOptions←1 1 ⍝ determines how script will be rendered [1] wrap with <script>...</script>, [2] wrap with $(function(){...})

        ∇ Make0
          :Access public
          :Implements constructor
        ∇

        ∇ Make1 pars
          :Access public
          :Implements constructor
          pars←eis pars
          JQueryFn Selector JQPars JavaScript Var PreJavaScript←6↑pars,(⍴pars)↓'' '' '' '' '' ''
        ∇

        ∇ r←Render
          :Access public
          SetUse
          r←ScriptOptions #.JQ.JQueryfn JQueryFn Selector JQPars JavaScript Var PreJavaScript
        ∇

        ∇ r←isSelector str ⍝ checks if str is probably a jQuery selector
          :Access public shared
          r←∨/str∊'''"*[]:>+~()#.'
        ∇

        :section APLJax

        ∇ r←selector Replace content
          :Access public
          :If isClass content ⋄ content←(⎕NEW content).Render ⋄ :EndIf
          r←⊂('replace'selector)('data'content)
        ∇
        ∇ r←selector Append content
          :Access public
          :If isClass content ⋄ content←(⎕NEW content).Render ⋄ :EndIf
          r←⊂('append'selector)('data'content)
        ∇
        ∇ r←selector Prepend content
          :Access public
          :If isClass content ⋄ content←(⎕NEW content).Render ⋄ :EndIf
          r←⊂('prepend'selector)('data'content)
        ∇
        ∇ r←Execute content
          :Access public
          r←⊂('execute'content)
        ∇

        ∇ r←name Assign data
          :Access public
          r←⊂('assign'name)('data'data)
        ∇
        :EndSection

    :endclass

    :class _jqWidget : _jqObject

        :field public Options←''    ⍝ options for the object to be created
        :field public ContainerTag←'div' ⍝ default container type
        :field public Container
        :field public InternalEvents←'' ⍝ list of events the widget "knows" about
        :field _build←0                 ⍝ if 0, we build any HTML infrastructure for the widget, otherwise, assume the user built it
        :field public WidgetSyntax←''
        :field public shared readonly WidgetDef←'event,ui' 'event'  'ui' '$(event.currentTarget)'  ⍝ see _JQ.RenderHandlerCore for details

        ∇ r←{a}rand w;rnd
          :Access public
          rnd←{⍺←⊢ ⋄ t←16807⌶2 ⋄ r←⍺?⍵ ⋄ t←16807⌶t ⋄ r}
          :If 0=⎕NC'a' ⋄ r←rnd w
          :Else ⋄ r←a rnd w ⋄ :EndIf
        ∇

        ∇ Make
          :Access public
          Options←⎕NS''
          Container←⎕NEW #.HtmlElement
          :Implements constructor
          WidgetSyntax←WidgetDef
        ∇

        ∇ r←Render;build;html;handlers;js;opts
          :Access public
         
          r←html←js←''
          SetUse
         
          _build∨←0∊⍴Selector ⍝ if the user explicitly specifies a selector, assume he's built the content himself
         
          :If _build
              Container.(id name type style class title)←Container.(id name type style class title){UNDEF≡⍵:⍺ ⋄ UNDEF≢⍺:⍺ ⋄ ⍵}¨⎕THIS.(id name type style class title)
              :If Container.id≡UNDEF
                  :If Container.name≢UNDEF
                      Container.id←Container.name
                  :Else
                      Container.id←SetId
                  :EndIf
              :EndIf
              Selector←'#',Container.id
          :EndIf
         
          handlers←''
          :If ~0∊⍴Handlers
              handlers←';',⍨∊¯1↓¨Handlers.Render
          :EndIf
         
          opts←{0::⍬ ⋄ 1 0≥_PageRef._Request.isAPLJax}⍬
          js←opts #.JQ.JQueryfn JQueryFn Selector Options(JavaScript,handlers)Var PreJavaScript
         
         
          :If _build≥0∊⍴Container.Content
              :Select ⊃Selector
              :Case '#' ⍝ id?
                  Container.id←1↓Selector
              :Case '.' ⍝ class?
                  Container.class←1↓Selector
              :EndSelect
              :If ContainerTag{⍵≡(⍴⍵)↑⍺}'input'
              :AndIf UNDEF≡Container.name
                  Container.name←('.#'∊⍨⊃Selector)↓Selector
              :EndIf
              Container.Tag←ContainerTag
              html←Container.Render
          :EndIf
          r←html,js
        ∇

        ∇ {handler}←On args;event;callback;clientData;javaScript;n;i
          :Access public
          ⍝ args - event callback clientData javascript
          handler←⎕BASE.On args
          handler.InternalEvents←InternalEvents
          handler.(WidgetDef←WidgetRef.WidgetDef)
        ∇

        ∇ {name}Set value
          :Access public
          →(0∊⍴value)⍴0
          :If 326≠⎕DR Options ⋄ Options←⎕NS'' ⋄ :EndIf
          :If 0=⎕NC'name'
              :Trap 11
                  (name value)←ParseValue value
              :Else
                  ⎕SIGNAL/⎕DMX.(EM EN)
              :EndTrap
          :EndIf
          name(Options SetOption)value
        ∇

        ∇ name SetIfNotSet value
          :Access public
          :If 0∊⍴GetOption name
              name Set value
          :EndIf
        ∇

        ∇ name(ref SetOption)value;set;parent;i;ind;newref;chunk;pos;n;now;new;chunkroot
          →(0∊⍴value)⍴0
          :If 1<|≡name ⍝ multiple names?
              value←(⊂⍣((⎕DR value)∊80 82))value
              name(ref SetOption)¨value
          :Else
         
              set←{⍺⍺⍎'(',⍺,')←⍵'}
         
              :If 0∊⍴parent←(i←-'.'⍳⍨⌽name)↓name
                  name(ref set)value ⍝ single name: assign directly (may be more than 1 name)
              :Else
                  ind←name⍳'.'
                  chunk←¯1↓ind↑name
                  (chunkroot pos)←'[]'#.Utils.penclose chunk
                  pos←2⊃⎕VFI pos
                  :Trap 3 6
                      newref←ref⍎chunk
                  :Case 3 ⍝ index error
                      n←⍴now←ref⍎chunkroot
                      new←⎕NS¨(pos-n)⍴⊂⍬
                      chunkroot(ref set)now,new
                      newref←ref⍎chunk
                  :Case 6 ⍝ value error
                      chunkroot ref.⎕NS''
                      :If ~0∊pos
                          new←⎕NS¨pos⍴⊂⍬
                          chunkroot(ref set)new
                      :EndIf
                      newref←ref⍎chunk
                  :EndTrap
                  (ind↓name)(newref SetOption)value
              :EndIf
          :EndIf
        ∇

        ∇ r←ParseValue value
          :Access shared public
          :If 2=⍴⍴value
          :AndIf 2=¯1↑⍴value
          :ElseIf 2<|≡value
          :AndIf ∧/(,2)∘≡∘⍴¨value
              value←↑value
          :ElseIf 0=2|⍴value
              value←((0.5×⍴value),2)⍴value
          :Else
              'Invalid option format'⎕SIGNAL 11
          :EndIf
          r←↓[1]value
        ∇

        ∇ r←GetOption names
          :Access public
          r←{6::'' ⋄ Options.⍎⍵}¨{⎕ML←3 ⋄ ⍵⊂⍨⍵≠' '}names
          :If 1=⍴r ⋄ r←⊃r ⋄ :EndIf ⍝ if single setting requested
        ∇

        ∇ r←name Update value;v
          :Access public
          r←name(Selector #._JQ.Update JQueryFn)value
          name Set value
        ∇
    :endclass

    :class _jqUIWidget : _jqWidget

        :field public Force←0

        :field public WidgetSyntax ←⊂'event,ui' 'event'  'ui' '$(event.target)' ⍝ see Handler class below

        ∇ make
          :Access public
          :If 0=⎕NC⊂'Uses' ⋄ Uses←'' ⋄ :EndIf
          :If 0∊⍴Uses ⋄ Uses←'JQueryUI' ⋄ :EndIf
          :Implements constructor
        ∇

        ∇ make1 pars
          :Access public
          :If 0=⎕NC⊂'Uses' ⋄ Uses←'' ⋄ :EndIf
          :If 0∊⍴Uses ⋄ Uses←'JQueryUI' ⋄ :EndIf
          :Implements constructor :base pars
        ∇

        ∇ {r}←opts RenderHandler handler
          :Access public
          r←opts ⎕BASE.RenderHandler(handler WidgetDef Force)
        ∇

    :endclass

    :class _jqUITabbedWidget : _jqUIWidget
        :field public Titles←''
        :field public Id←''
        :field public Tabs←''
        :field public Widget

        ∇ Make0
          :Access public
          :Implements constructor
          Widget←⎕NS''
          Widget._function←{}
        ∇

        ∇ Make1 pars;t
          :Access public
          :Implements constructor
          :Select |≡pars
          :Case 2
              :If 2=⍴pars ⍝ could be title/tab or title/title
                  :If (10|⎕DR t←2⊃pars)∊0 2 ⍝ if the second element is character
                  :AndIf 1=⍴⍴t ⍝ and it's a vector
                  :AndIf 20>⍴t ⍝ and it's relatively short
                      pars←,⊂pars
                  :Else
                      pars←#.HtmlElement.eis¨pars
                  :EndIf
              :EndIf
          :Case 0 1
              pars←#.HtmlElement.eis pars
          :EndSelect
          Titles Tabs Options JavaScript Var←5↑pars,(⍴pars)↓'' '' '' '' ''
          Widget←⎕NS''
          Widget._function←{}
        ∇

        ∇ r←Render;opts
          :Access public
          'Title and Contents lengths do not match'⎕SIGNAL((⍴Titles)≠⍴Tabs)/5
          opts←Options
          :If 2≤|≡Options ⋄ opts←#.JSON.toJQueryParameters Options ⋄ :EndIf
          r←Widget._function Id Titles(RenderTab¨Tabs)opts JavaScript Var
          r,←⎕BASE.Render
        ∇

        ∇ r←RenderTab tab;e;t
          :Access public
          :If 326=⎕DR tab
              r←''
              :For e :In tab
                  t←⊃e
                  :If isInstance t
                  :AndIf isHtmlElement t
                      r,←e.Render
                  :ElseIf isClass t
                  :AndIf isHtmlElement t
                      r,←(⎕NEW∘{2<⍴,⍵:(⊃⍵)(1↓⍵) ⋄ ⍵}eis e).Render
                  :Else
                      r,←e
                  :EndIf
              :EndFor
          :Else
              r←,⍕tab
          :EndIf
        ∇

    :endclass
    :endsection

⍝ --- Events ---
    :Section Events

    :Class Handler
        :Field public Selectors←''       ⍝ CSS/jQuery selectors to bind handler to
        :Field public Delegates←''       ⍝ See jQuery.On for information about delegates
        :Field public Events←''          ⍝ events to bind
        :Field public ClientData←''      ⍝ any additional client data to send to server
        :Field public Callback←1         ⍝ execute AJAX callback to server?  or the name of the server-side callback function
        :Field public JavaScript←''      ⍝ JavaScript to execute prior to server callback
        :Field public PostJavaScript←''  ⍝ JavaScript to execute after the server callback
        :Field public Page←''            ⍝ server URL to request for an AJAX callback
        :Field public jQueryWrap←1       ⍝ wrap handler in $(function(){...});
        :Field public ScriptWrap←1       ⍝ wrap handler in <script>...</script>
        :Field public WidgetDef←''       ⍝ widget definitions (e.g. jQuery or Syncfusion, others libraries may different)
                                         ⍝                                          jQuery            Syncfusion
                                         ⍝ [1] event handler syntax:                'event,ui'        'argument'
                                         ⍝ [2] syntax to access the event object:   'event'           'argument'
                                         ⍝ [3] syntax to access the object's model: 'ui'              'argument.model'
                                         ⍝ [4] syntax to access the widget itself:  '$(event.target)' 'this.element'
        :Field public ForceInternal←¯1   ⍝ indicates whether to "force" the event to be treated as a widget internal event
        :Field public WidgetRef←''       ⍝ ref to widget instance if this handler is on
        :Field public Hourglass←¯1       ⍝ indicates whether to display hourglass during callback execution
                                         ⍝ 1 - yes, 0 - no, ¯1 - only if calling back to APL

        :Field public Uses←'JQuery'

        quote←{0∊⍴⍵: '' ⋄ '⍎"'∊⍨⍬⍴⍵:⍵~'⍎' ⋄ '"',(('"' ⎕R '\\\0')⍵),'"'} ⍝ quote unless already quoted or begins with ⍎
        ine←{0∊⍴⍺:'' ⋄ ⍵} ⍝ if not empty
        eis←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵} ⍝ Enclose if simple

        ∇ Make0
          :Access public
          :Implements constructor
          CommonSetup
        ∇

        ∇ Make1 params
          :Access public
          :Implements constructor
          params←#.HtmlElement.eis params
          (Selectors Events Callback ClientData Delegates JavaScript Page)←7↑params,(⍴params)↓7⍴⊂''
          :If #.HtmlPage #.HtmlElement.isInstance Page ⋄ Page←Page.Page ⋄ :EndIf ⍝ if request object passed
          CommonSetup
        ∇

        ∇ CommonSetup;c
          :Access public
          :Trap 0
              c←#.HtmlElement.context'_PageRef'
              :If ~0∊⍴c
                  (c⍎'_PageRef').Use Uses
              :EndIf
          :EndTrap
          WidgetDef←'event,ui' 'event' 'ui' '$(event.target)'
        ∇

        ∇ r←Render;sel;syn_handler;syn_event;syn_model;syn_this;data;useajax;force;cd;selector;arg;verb;name;phrase;datasel;JQfn;jqfn;hg;removehg;dtype;success;status;ajax;widget;syn_value;delegates
          :Access public
          r←''
          :If ~0∊⍴Events ⍝ skip if no events specified
         
              :If #.MiPage #.HtmlElement.isInstance Page
                  Page←Page._PageName
              :EndIf
         
              (selector delegates)←2↑(eis Selectors),'' ''
         
              :If ~0∊⍴Delegates
                  delegates←Delegates
              :EndIf
         
              useajax←(,0)≢,Callback ⍝ callback=0 → don't make callback to server; =1 → use APLJax, =charvec → call ⍎charvec
         
              force←0
              :If widget←#.HtmlElement.isWidget WidgetRef ⍝ is this a widget handler?
                  :If ForceInternal=¯1
                      force←(⊂Events)∊WidgetRef.InternalEvents
                  :Else
                      force←ForceInternal
                  :EndIf
              :EndIf
         
              :If 0∊⍴selector  ⍝ empty selector → use entire page
                  :If widget
                      selector←WidgetRef.Selector
                  :ElseIf #.HtmlElement #.HtmlElement.isInstance ##
                      :If #.MiPage #.HtmlElement.isInstance ##
                          selector←'⍎document'
                      :Else
                          selector←'#',##.id
                      :EndIf
                  :Else
                      selector←'⍎document'
                  :EndIf
              :EndIf
         
              (syn_handler syn_event syn_model syn_this)←WidgetDef
         
              data←'_event: ',syn_event,'.type, '
              data,←'_what: ',syn_this,'.attr("id"), '
              data,←'_value: ',syn_this,'.val(), '
              data,←'_selector: ',(quote selector~'⍎'),', '
              :If #.HtmlElement.isString Callback
                  data,←'_callback: ',(quote Callback),', '
              :EndIf
              data←¯2↓data
         
              :Select |≡ClientData
         
              :CaseList 0 1  ⍝ simple vector
                  ClientData←,⊂2⍴⊂ClientData ⍝ name/id are set to the same
              :Case 2
                  ClientData←,⊂ClientData
              :EndSelect
         
              :For cd :In ClientData
                  cd←#.HtmlElement.eis cd
                  (name verb arg sel)←4↑cd,(⍴cd)↓4⍴⊂''
                  :If ~0∊⍴name
                  :AndIf ~0∊⍴verb
                      jqfn←'' ⍝ jQuery function to call if this client data element refers to a widget
         
                      :If (⊂verb)∊'html' 'val'  ⍝ neither html or val take an argument
                      :AndIf 0∊⍴sel
                          sel←arg
                      :EndIf
         
⍝ build the selector for the data element
                      :If sel≡'' ⍝ it's for the current element/widget
                          :If #.HtmlElement.isWidget WidgetRef
                              datasel←'$(',(quote WidgetRef.Selector),').'
                              :If ~0∊⍴jqfn←WidgetRef.JQueryFn
                                  datasel,←WidgetRef.JQueryFn
                              :EndIf
                          :Else
                              datasel←syn_this,'.'
                          :EndIf
                      :ElseIf #.HtmlElement #.HtmlElement.isInstance sel ⍝ selector is reference to other element
                          :If #._JQ._jqObject #.HtmlElement.isInstance sel ⍝ is it a jQuery-based object?
                              :If 0∊⍴sel.Selector ⍝ no Selector?
                                  sel.SetId
                                  sel.Selector←'#',sel.id
                              :EndIf
                              datasel←'$(',(quote sel.Selector),').'
                              :If ~0∊⍴jqfn←sel.JQueryFn
                                  datasel,←sel.JQueryFn
                              :EndIf
                          :Else ⍝ not a jQuery-based object
                              sel.SetId
                              datasel←'$(',(quote'#',sel.id),').'
                          :EndIf
                      :Else ⍝ sel is not an HtmlElement
                          :Select |≡sel
                          :CaseList 0 1
                              datasel←'$(',(quote sel),').'
                          :Case 2
                              datasel←'$(',(quote(1⊃sel)),').',jqfn←2⊃sel
                          :EndSelect
                      :EndIf
         
⍝ now figure out what data to generate
                      phrase←''
                      :Select verb
         
                      :CaseList 'attr' 'css' 'is' 'prop'
                          datasel,←'().'/⍨~0∊⍴jqfn
                          phrase←datasel,verb,'(',(quote arg),')'
         
                      :CaseList 'html' 'val'
                          datasel,←'().'/⍨~0∊⍴jqfn
                          phrase←datasel,verb,'()'
         
                      :Case 'option' ⍝ jQueryUI and Syncfusion widgets
                          :If 0∊⍴arg
                              phrase←'JSON.stringify(',datasel,'("option"))'
                          :Else
                              phrase←datasel,'("option",',(quote arg),')'
                          :EndIf
         
                      :Case 'event' ⍝ jQueryUI
                          :If 0∊⍴arg
                              phrase←'JSON.stringify(',syn_event,')'
                          :Else
                              phrase←syn_event,'.',arg
                          :EndIf
         
                      :Case 'eval'
                          sel←'' ⍝ ignore selector on eval
                          phrase←'eval(',(quote arg),')'
         
                      :CaseList syn_event syn_model syn_this
                          :If ~0∊⍴jqfn ⍝ these verbs only apply to widgets
                              :If 0∊⍴arg
                                  phrase←'JSON.stringify(',verb,')'
                              :Else
                                  phrase←verb,'.',arg
                              :EndIf
                          :EndIf
         
                      :Case 'string'
                          phrase←quote arg
         
                      :Case 'serialize'
                          :If 0∊⍴sel
                              datasel←'$("form").'
                          :EndIf
                          name,←'_serialized'
                          phrase←datasel,'serialize()'
                      :Else
                          #.Boot.Log'Unknown event handler verb: "',verb,'"'
                          phrase←quote phrase
                      :EndSelect
         
                      data,←',',name,': ',phrase
                  :EndIf
              :EndFor
         
              (hg removehg)←((1+Hourglass=¯1)⊃Hourglass useajax)∘{⍺:'document.body.style.cursor="',⍵,'";' ⋄ ''}¨'wait' 'default'
         
              dtype←'"json"'
              success←'success: function(obj){APLJaxReturn(obj);document.body.style.cursor="default";}'
              status←'statusCode:{ 408: function(){alert("Session timed out");',removehg,'}}'
              ajax←(JavaScript ine JavaScript,';'),useajax/hg,'$.ajax({url: ',(quote Page),', cache: false, type: "POST", dataType: ',dtype,', data: {',data,'}, ',success,', ',status,'});'
         
              :If widget
                  :If force
                      Events(WidgetRef.Options{⍺⍺⍎⍺,'←⍵'})'function(',syn_handler,'){',ajax,'}'
                  :Else
                      r←'.on(',(quote Events),', function(event,ui){',ajax,'});'
                  :EndIf
              :Else
                  r←'$(',(quote selector),').on(',(quote Events),(delegates ine', ',quote delegates),', function(event,ui){',ajax,'});'
                  :If jQueryWrap ⋄ r←'$(function(){',r,'});' ⋄ :EndIf
                  :If ScriptWrap ⋄ r←#.HTMLInput.JS r ⋄ :EndIf
              :EndIf
          :EndIf
        ∇

    :endclass
    :endsection



:EndNamespace