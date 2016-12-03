:Namespace _JQ
    (⎕IO ⎕ML)←1

    :section Common Code

    eis←{(,∘⊂)⍣((326∊⎕DR ⍵)<2>|≡⍵),⍵} ⍝ Enclose if simple
    quote←{0∊⍴⍵: '' ⋄ '⍎"'∊⍨⍬⍴⍵:⍵ ⋄ '"',(('"' ⎕R '\\\0')⍕⍵),'"'}
    fmtSelector←{{'this'≡⍵:⍵ ⋄quote ⍵}¯2↓∊{⍵,', '}¨eis ⍵}
    fmtValue←{'⍎'=⊃,⍵:⍵ ⋄ #.JSON.fromAPL ⍵}

    ∇ r←opt(sel Update jqfn)val
    ⍝ update an option for a widget
      r←#.JQ.Execute'$(',(fmtSelector sel),').',jqfn,'("option","',opt,'",',(fmtValue val),');'
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
        :field public Type←''          ⍝ Type specification that may precede JQPars
        :field public shared readonly _true←#.JSON.true     ⍝ same definition as in #.JSON
        :field public shared readonly _false←#.JSON.false   ⍝ same definition as in #.JSON
        :field public ScriptOptions←⍬  ⍝ determines how script will be rendered [1] wrap with <script>...</script>, [2] wrap with $(function(){...})

        ∇ Make0
          :Access public
          :Implements constructor
        ∇

        ∇ Make1 pars
          :Access public
          :Implements constructor
          pars←eis pars
          JQueryFn Selector JQPars JavaScript Var PreJavaScript Type←7↑pars,(⍴pars)↓'' '' '' '' '' '' ''
        ∇

        ∇ r←Render
          :Access public
          SetUse
          r←ScriptOptions #.JQ.JQueryfn JQueryFn Selector JQPars JavaScript Var PreJavaScript Type
        ∇

        ∇ r←isSelector str ⍝ checks if str is probably a jQuery selector
          :Access public shared
          r←∨/str∊'''"*[]:>+~()#.'
        ∇

        :section APLJax

        ∇ r←renderContent content;c
          r←''
          content←eis content
          :While ~0∊⍴content
              :Select ≡c←⊃content
              :Case 0
                  :If isClass c
                      :Select ⊃⍴content
                      :Case 1
                          r,←(⎕NEW c).Render
                      :Case 2
                          r,←(⎕NEW c(2⊃content)).Render
                      :Else
                          r,←(⎕NEW c(1↓content)).Render
                      :EndSelect
                  :ElseIf isInstance c
                      r,←c.Render
                  :Else
                      r,←(⎕NEW #.HtmlElement(''content)).Render
                  :EndIf
                  content←''
              :Case 1
                  :If isClass⊃c
                      r,←(⎕NEW(⊃c)(1↓c)).Render
                  :ElseIf isInstance⊃c
                      ∘∘∘ ⍝ should not happen! (I think)
                  :Else
                      r,←(⎕NEW #.HtmlElement(''c)).Render
                  :EndIf
                  content←1↓content
              :Else
                  r,←renderContent c
                  content←1↓content
              :EndSelect
          :EndWhile
        ∇


        ∇ r←selector Replace content
          :Access public
          r←⊂('replace'selector)('data'(renderContent content))
        ∇

        ∇ r←selector Append content
          :Access public
          r←⊂('append'selector)('data'(renderContent content))
        ∇

        ∇ r←selector Prepend content
          :Access public
          r←⊂('prepend'selector)('data'(renderContent content))
        ∇

        ∇ r←Execute content
          :Access public
          r←⊂('execute'(renderContent content))
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
        :field public BuildHTML←1       ⍝ if 0, we build any HTML infrastructure for the widget, otherwise, assume the user built it
        :field public WidgetDef←'event,ui' 'event'  'ui' '$(event.currentTarget)' '.val()'  ⍝ see _JQ.RenderHandlerCore for details

        ∇ r←{a}rand w;⎕RL
          :Access public
          ⎕RL←0
          :If 0=⎕NC'a' ⋄ r←?w
          :Else ⋄ r←a?w ⋄ :EndIf
        ∇

        ∇ Make
          :Access public
          Options←⎕NS''
          Container←⎕NEW #.HtmlElement
          :Implements constructor
        ∇

        ∇ r←Render;build;html;handlers;js;oldJavaScript
          :Access public
          r←html←js←''
          SetUse
         
          BuildHTML∧←0∊⍴Selector ⍝ if the user explicitly specifies a selector, assume he's built the content himself
         
          :If BuildHTML
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
         
          oldJavaScript←JavaScript
          JavaScript,←handlers
          JQPars←Options
          js←⎕BASE.Render
          JavaScript←oldJavaScript
         
          :If BuildHTML≥0∊⍴Container.Content
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

        ∇ {handler}←On args
          :Access public
          ⍝ args - event callback clientData javascript
          handler←⎕BASE.On args
          handler.InternalEvents←InternalEvents
          handler.(WidgetDef←WidgetRef.WidgetDef)
        ∇

        ∇ {r}←{name}Set value
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
          r←⎕THIS
        ∇

        ∇ {r}←name SetIfNotSet value
          :Access public
          :If 0∊⍴GetOption name
              name Set value
          :EndIf
          r←⎕THIS
        ∇

        ∇ name(ref SetOption)value;set;parent;ind;newref;chunk;n;now;new;chunkroot;array;val;pos
          →(0∊⍴value)⍴0
          :If 1<|≡name ⍝ multiple names?
              value←(⊂⍣((⎕DR value)∊80 82))value
              name(ref SetOption)¨value
          :Else
         
              set←{⍺⍺⍎'(',⍺,')←⍵'}
         
              :If 0∊⍴parent←(-'.'⍳⍨⌽name)↓name
                  name(ref set)value ⍝ single name: assign directly (may be more than 1 name)
              :Else
                  ind←name⍳'.'
                  chunk←¯1↓ind↑name
                  (chunkroot pos)←2↑'[]'#.Utils.penclose chunk
         
                  :If array←'[]'≡¯2↑chunk ⍝ is it an array assignment?
                      pos←⍴val←eis value
                      :Select ⊃ref.⎕NC chunkroot
                      :Case 0
                          new←⎕NS¨pos⍴⊂⍬
                          chunkroot(ref set)new
                      :Case 2 ⍝ already exists
                          ('Invalid option specification - length error on "',chunkroot,'".')⎕SIGNAL 5/⍨~(⍴new←ref⍎chunkroot)∊1,pos
                      :Else
                          ('Invalid option specification - "',chunkroot,'" is not an array.')⎕SIGNAL 11
                      :EndSelect
                      new{(ind↓name)(⍺ SetOption)⍵}¨val
         
                  :Else
                      (chunkroot pos)←2↑'[]'#.Utils.penclose chunk
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

⍝        :field public WidgetSyntax ←⊂'event,ui' 'event'  'ui' '$(event.target)' '.val()' ⍝ see Handler class below

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

    :endsection

⍝ --- Events ---
    :Section Events

    :Class Handler
        :Field public Selector←''        ⍝ CSS/jQuery selector to bind handler to
        :Field public Delegates←''       ⍝ See jQuery.On for information about delegates
        :Field public Events←''          ⍝ events to bind
        :Field public ClientData←''      ⍝ any additional client data to send to server
        :Field public Callback←1         ⍝ execute AJAX callback to server?  or the name of the server-side callback function
        :Field public JavaScript←''      ⍝ JavaScript to execute prior to server callback
        :Field public Page←''            ⍝ server URL to request for an AJAX callback
        :Field public jQueryWrap←1       ⍝ wrap handler in $(function(){...});
        :Field public ScriptWrap←1       ⍝ wrap handler in <script>...</script>
        :Field public WidgetDef←''       ⍝ widget definitions (e.g. jQuery or Syncfusion, others libraries may different)
                                         ⍝                                          jQuery            Syncfusion
                                         ⍝ [1] event handler syntax:                'event,ui'        'argument'
                                         ⍝ [2] syntax to access the event object:   'event'           'argument'
                                         ⍝ [3] syntax to access the object's model: 'ui'              'argument.model'
                                         ⍝ [4] syntax to access the widget itself:  '$(event.target)' 'this.element'
                                         ⍝ [5] syntax to access the value of an input widget - this default to '' but may overridden by individual widget
                                         ⍝     see ejSlider as an example
                                         ⍝
        :Field public ForceInternal←¯1   ⍝ indicates whether to "force" the event to be treated as a widget internal event
        :Field public WidgetRef←''       ⍝ ref to widget instance if this handler is on
        :Field public Hourglass←¯1       ⍝ indicates whether to display hourglass during callback execution
                                         ⍝ 1 - yes, 0 - no, ¯1 - only if calling back to APL

        :Field public Uses←'JQuery'
        :Field public _PageRef_←''

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
          (Selector Events Callback ClientData Delegates JavaScript Page)←7↑params,(⍴params)↓7⍴⊂''
          :If #.HtmlPage #.HtmlElement.isInstance Page ⋄ Page←Page.Page ⋄ :EndIf ⍝ if request object passed
          CommonSetup
        ∇

        ∇ CommonSetup;c
          :Access public
          :Trap 0
              c←#.HtmlElement.context'_PageRef'
              :If ~0∊⍴c
                  (c⍎'_PageRef').Use Uses
                  _PageRef_←c._PageRef
              :EndIf
          :EndTrap
          WidgetDef←'event,ui' 'event' 'ui' '$(event.target)' '.val()'
        ∇

        ∇ r←Render;sel;syn_handler;syn_event;syn_model;syn_this;data;useajax;force;cd;selector;arg;verb;name;phrase;datasel;JQfn;jqfn;hg;removehg;dtype;success;status;ajax;widget;syn_value;delegates;v;events;selSelector
          :Access public
          r←''
          :If ~0∊⍴Events ⍝ skip if no events specified
         
              :If #.MiPage #.HtmlElement.isInstance Page
                  Page←Page._PageName
              :EndIf
         
              (selector delegates)←2↑(eis Selector),'' ''
         
              :If ~0∊⍴Delegates
                  delegates←Delegates
              :EndIf
         
              :If useajax←(,0)≢,Callback ⍝ callback=0 → don't make callback to server; =1 → use APLJax, =charvec → call ⍎charvec
              :AndIf (0∊⍴Page)>0∊⍴_PageRef_
                  Page←_PageRef_._PageName
              :EndIf
         
              force←0
              events←Events
              :If widget←#.HtmlElement.isWidget WidgetRef ⍝ is this a widget handler?
                  WidgetDef←WidgetRef.WidgetDef                    
                  :If ForceInternal=¯1
                      :If ∨/', '∊Events ⍝ multiple events?
                          events←', '#.Utils.penclose Events
                      :Else
                          events←,⊂Events
                      :EndIf
                      force←∧/events∊WidgetRef.InternalEvents
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
         
              (syn_handler syn_event syn_model syn_this syn_value)←5↑WidgetDef
              data←'_event: ',syn_event,'.type, '
              data,←'_what: function(arg){try{return arg.attr("id");}catch(e){return"";}}(',syn_this,'), '
              data,←'_value: function(arg){try{return arg',syn_value,';}catch(e){return"";}}(',syn_this,'), '
              data,←'_selector: ',(quote selector~'⍎'),', '
              data,←'_target: function(arg){try{return arg.target.id;}catch(e){return"";}}(',syn_event,'), '
              data,←'_currentTarget: function(arg){try{return arg.currentTarget.id;}catch(e){return"";}}(',syn_event,'), '
         
              :If #.HtmlElement.isString Callback ⍝ numeric Callback 1-call APLJax, 0-no callback to server
              :AndIf ~0∊⍴Callback
                  data,←'_callback: ',(quote Callback),', '
              :EndIf
         
              :If 0∊⍴ClientData ⍝ if you don't specify any clientdata, we serialize any forms on the page
                  data,←'_serialized: $("form").serialize(), '
              :EndIf
         
              data←¯2↓data
         
              :If ~0∊⍴ClientData
                  :Select ≡⊃ClientData
                  :CaseList 0 ⍝ ClientData is a simple vector
                      ClientData←,⊂2⍴⊂,ClientData ⍝ so name and verb are set to the same
                  :CaseList 1 ⍝ first element is a vector
                      ClientData←,⊂ClientData ⍝ enclose it
                  :EndSelect
         
                  :For cd :In ClientData
                      cd←#.HtmlElement.eis cd
                      (name verb arg sel)←4↑cd,(⍴cd)↓4⍴⊂''
                      :If (~0∊⍴name)∨verb≡'serialize'
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
                                  :If 0∊⍴selSelector←sel.Selector ⍝ no Selector?
                                      sel.SetId
                                      selSelector←'#',sel.id
                                  :EndIf
                                  datasel←'$(',(quote selSelector),').'
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
                                  phrase←'APLstringify(',datasel,'("option"))'
                              :Else
                                  phrase←'APLstringify(',datasel,'("option",',(quote arg),'))'
                              :EndIf
         
                          :Case 'method' ⍝ jQueryUI and Syncfusion widgets
                              :If 0∊⍴arg
                                  phrase←'"no method information specified!"'
                              :Else
                                  phrase←datasel,'(',(quote arg),')'
                              :EndIf
         
                          :CaseList 'event' 'this' 'argument'
                              v←('event' 'argument' 'this'⍳⊂verb)⊃syn_event syn_event syn_this
                              :If 0∊⍴arg
                                  phrase←'APLstringify(',v,')'
                              :Else
                                  phrase←'APLstringify(',v,'.',arg,')'
                              :EndIf
         
                          :CaseList 'model' 'ui' ⍝ widgets only
                              :If ~0∊⍴jqfn
                                  datasel,←'().'
                                  :If 0∊⍴arg
                                      phrase←'APLstringify(',syn_model,')'
                                  :Else
                                      phrase←'APLstringify(',syn_model,'.',arg,')'
                                  :EndIf
                              :EndIf
         
                          :Case 'eval'
                              sel←'' ⍝ ignore selector on eval
                              phrase←'eval(',(quote arg),')'
         
                          :Case 'js'
                              sel←''
                              phrase←arg
         
                          :Case 'string'
                              phrase←quote arg
         
                          :Case 'serialize'
                              :If 0∊⍴sel
                                  :If 0∊⍴arg
                                      sel←'form'
                                  :Else
                                      sel←arg
                                  :EndIf
                              :EndIf
                              phrase←'$(',(quote sel),').serialize()'
                              name,←'_serialized'
                          :Else
                              :If '⍎'=⊃verb
                                  sel←''
                                  phrase←1↓verb
         
                              :Else
                                  #.Boot.Log'Unknown event handler verb: "',verb,'"',{0::'' ⋄ ' on page ',##._PageRef._PageName}⍬
                                  phrase←quote phrase
                              :EndIf
                          :EndSelect
         
                          data,←',',name,': ',phrase
                      :EndIf
                  :EndFor
              :EndIf
         
              (hg removehg)←((1+Hourglass=¯1)⊃Hourglass useajax)∘{⍺:'document.body.style.cursor="',⍵,'";' ⋄ ''}¨'wait' 'default'
         
              dtype←'"json"'
              success←'success: function(obj){APLJaxReturn(obj);document.body.style.cursor="default";}'
              status←'statusCode:{ 408: function(){alert("Session timed out");',removehg,'}}'
              ajax←(JavaScript ine JavaScript,(';'=¯1↑JavaScript)↓';'),useajax/hg,'$.ajax({url: ',(quote Page),', cache: false, type: "POST", dataType: ',dtype,', headers:{"isAPLJax": "true"}, data: {',data,'}, ',success,', ',status,'});'
         
              :If widget
                  :If force
                      (eis events)(WidgetRef.Options{⍺⍺⍎⍺,'←⍵'})¨⊂⊂'function(',syn_handler,'){',ajax,'}'
                  :Else
                      r←'.on(',(quote Events),', function(event,ui){',ajax,'});'
                  :EndIf
              :Else
                  r←'$(',(quote selector),').on(',(quote Events),(delegates ine', ',quote delegates),', function(event,ui){',ajax,'});'
                  :If jQueryWrap ⋄ r←'$(function(){',r,'});' ⋄ :EndIf
                  :If ScriptWrap ⋄ r←'<script>',r,'</script>' ⋄ :EndIf
              :EndIf
          :EndIf
        ∇

    :endclass
    :endsection



:EndNamespace
