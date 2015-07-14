:Namespace _JQ
    (⎕IO ⎕ML)←1

    :section Common Code
    quote←{'"'∊⍵:⍵ ⋄ '"',⍵,'"'}

    ∇ r←opt(sel Update jqfn)val;v
    ⍝ update an option for a widget
      v←{0 2∊⍨10|⎕DR ⍵:{'⍎'=⊃⍵:1↓⍵ ⋄ quote ⍵}⍵ ⋄ ,⍕⍵}val
      r←#.JQ.Execute'$("',sel,'").',jqfn,'("option","',opt,'",',v,');'
    ∇
    :endsection


    :section Base Classes
    :class _jqObject : #.HtmlElement
        :field public Selector←''   ⍝ Selector to apply the JQuery function to
        :field public JavaScript←'' ⍝ additional JavaScript to run, can be function chain, separate code or both
        :field public Var←''        ⍝ JavaScript variable name for created object
        :field public JQueryFn←''   ⍝ JQuery function to apply
        :field public JQPars←''     ⍝ JQuery function parameters
        :field public shared readonly _true←#.JSON.true     ⍝ same definition as in #.JSON
        :field public shared readonly _false←#.JSON.false   ⍝ same definition as in #.JSON

        ∇ Make0
          :Access public
          :Implements constructor
        ∇

        ∇ Make1 pars
          :Access public
          :Implements constructor
          pars←eis pars
          JQueryFn Selector JQPars JavaScript Var←4↑pars,(⍴pars)↓'' '' '' '' ''
        ∇

        ∇ r←Render
          :Access public
          Use
          r←#.JQ.JQueryfn JQueryFn Selector JQPars JavaScript Var
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
        :field public ContainerType←'div' ⍝ default container type
        :field public Container
        :field public eventHandlers←''
        :field public InternalEvents←'' ⍝ list of events the widget "knows" about

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
        ∇

        ∇ (html js)←Render;build
          :Access public
         
          html←javascript←''
          Use
         ⍝ if the user explicitly specifies a selector,
          :If build←0∊⍴Selector
              Selector←'#',Container.id←SetId
          :EndIf
         
          :If ~0∊⍴eventHandlers
              Options∘RenderHandler¨eventHandlers
          :EndIf
         
          js←#.JQ.JQueryfn JQueryFn Selector Options JavaScript Var
         
          :If build≥0∊⍴Container.Content
              :Select ⊃Selector
              :Case '#' ⍝ id?
                  Container.id←1↓Selector
              :Case '.' ⍝ class?
                  Container.class←1↓Selector
              :EndSelect
              :If ContainerType{⍵≡(⍴⍵)↑⍺}'input'
                  Container.name←('.#'∊⍨⊃Selector)↓Selector
              :EndIf
              Container.Tag←ContainerType
              html←Container.Render
          :EndIf
        ∇

        ∇ {handler}←On args;event;callback;clientData;javaScript;n;i
          :Access public
          ⍝ args - event callback clientData javascript
          args←eis args
          handler←⎕NS''
          handler.(Event Callback ClientData JavaScript)←4↑args,(⍴args)↓'' 1 '' ''
          :If 0∊n←⍴eventHandlers
              eventHandlers,←handler
          :ElseIf n<i←eventHandlers.Event⍳⊂handler.Event
              eventHandlers,←handler
          :Else
              eventHandlers[i]←handler
          :EndIf
        ∇

        ∇ opts RenderHandler args;handler;widgettype;force;syntax;evt;model;page;event;callback;clientdata;javascript;useajax;data;cd;name;selector;type;what
          :Access public
         ⍝ unified event handling core for jQueryUI and Syncfusion widget
         ⍝ Syncfusion and jQueryUI use different models, if other jQuery-based libraries are used, this may need to be changed
         ⍝ args is [1] handler [2] widgettype [3] force
         ⍝ opts - Options namespace for the widget
         ⍝ handler - handler definition
         ⍝ widgettype - three element vector of vectors [1] syntax for calling function, [2] event object name, [3] model object name
         ⍝ force - Boolean to force treatment of event as an InternalEvent
         
          args←eis args
          (handler widgettype force)←3↑args,(⍴args)↓''('event,ui' 'event' 'ui')0
          (syntax evt model)←widgettype
         
          page←''
          :If isInstance _PageRef
              page←_PageRef._PageName
          :EndIf
         
          page←quote page
         
          (event callback clientdata javascript)←handler.(Event Callback ClientData JavaScript)
          useajax←(,0)≢,callback ⍝ callback=0 → don't make callback to server; =1 → use APLJax, =charvec → call ⍎charvec
         
          data←''
          data,←', _event: ',evt,'.type'
          data,←', _what: this.id'
          data,←(isString callback)/', _callback: ',quote callback
          data←2↓data
         
          :Select |≡clientdata
          :CaseList 0 1  ⍝ simple vector
              clientdata←,⊂2⍴⊂clientdata ⍝ name/id are set to the same
          :Case 2
              clientdata←,⊂clientdata
          :EndSelect
         
          :For cd :In clientdata
              cd←eis cd
              (name selector type what)←4↑cd,(⍴cd)↓4⍴⊂''
              :If name≡'serialize'
                  (name selector type what)←4↑(⊂''),cd
              :EndIf
              :If (~0∊⍴name)∨selector≡'serialize'
         
                  :Select selector
         
                  :CaseList 'attr' 'css' 'html' 'is' 'serialize' 'val' 'eval' ⍝ no selector specified, use event.target
                      (type what)←selector type
                      selector←''
         
                  :Case 'string'
                      (type what)←selector(quote type)
                      selector←''
         
                  :Case ''
                      selector←'this' ⍝ null selector means reference the current object
         
                  :CaseList 'event' 'ui' 'argument'
                      :If type≡''
                          name←,'_',selector
                          type←'JSON.stringify(',selector,')'
                      :Else
                          type←selector,'.',⍕type
                      :EndIf
         
                  :Case 'model'
                      :If type≡''
                          name←,'_',selector
                          type←'JSON.stringify(',model,')'
                      :Else
                          type←model,'.',⍕type
                      :EndIf
         
                  :Else
                      :If ∨/mask←'model.' 'event.' 'ui.' 'argument.'{⍺≡(⍴⍺)↑⍵}¨⊂selector
                          (type what)←2↑{⎕ML←3 ⋄ ⍵⊂⍨⍵≠'.'}selector
                          selector←''
                          :If ⊣/mask
                              type←model
                          :EndIf
                      :Else
                          selector←quote selector
                      :EndIf
                  :EndSelect
         
                  :Select type
                  :Case 'eval'
                      type←what
                  :CaseList 'event' 'ui'
                      type←type,'.',what
                  :Case ''
                      type←'val()'
                  :Case 'string'
                      type←what
                  :Else
                      :If type≡'serialize'
                          name,←'_serialized'
                      :EndIf
                      type←type,what ine'(',(quote what),')'
                  :EndSelect
                  data,←',',name,': ',(selector ine'$(',selector,').'),type
              :EndIf
          :EndFor
         
          dtype←'"json"'
          success←'success: function(obj){APLJaxReturn(obj);}'
          ajax←(javascript ine javascript,';'),useajax/'$.ajax({url: ',page,', cache: false, type: "POST", dataType: ',dtype,', data: {',data,'}, ',success,'});'
          event(opts{⍺⍺⍎⍺,'←⍵'})'function(',syntax,'){',ajax,'}'
        ∇

        ∇ {name}Set value
          :Access public
          →(0=⍴,value)⍴0
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

        ∇ name(ref SetOption)value;parent;i;ns;split;set;index;lb;new;now;an;n
          :If 1<|≡name ⍝ multiple names?
              value←(⊂⍣((⎕DR value)∊80 82))value
              name(ref SetOption)¨value
          :Else
         
              set←{⍺⍺⍎'(',⍺,')←⍵'}
         
              :If 0∊⍴parent←(i←-'.'⍳⍨⌽name)↓name
                  name(ref set)value ⍝ single name: assign directly (may be more than 1 name)
              :Else
                  :If ~'['∊parent
                      parent ref.⎕NS''
                  :Else
                      split←parent⍳']'              ⍝ if present, ] will be ≤⍴parent
                      :If (⍴parent)≤split+1         ⍝ if ] is in the last 2 positions
                          an←parent↑⍨¯1+lb←parent⍳'['      ⍝ find the array name
                          index←2⊃⎕VFI lb↓(split-1)↑parent ⍝ the position wanted
                          new←⎕NS¨index⍴⊂⍬
                          :If 0=ref.⎕NC an             ⍝ if it does not exist
                              an(ref set)new           ⍝ create it as a vector
                          :EndIf
                     ⍝ If the index is beyond the current shape, extend it
                          :If index>n←⍴now←ref⍎an
                              an(ref set)now,n↓new
                          :EndIf
                      :EndIf
                      (parent↓⍨1+split)(ref⍎split↑parent).⎕NS''
                  :EndIf
                  (1↓i↑name)((ref⍎parent)set)value
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

        ∇ name Option value
          :Access public
          name Set value
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
          'Accordion title and content lengths do not match'⎕SIGNAL((⍴Titles)≠⍴Tabs)/5
          opts←Options
          :If 2≤|≡Options ⋄ opts←#.JSON.toJQueryParameters Options ⋄ :EndIf
          r←Widget._function Id Titles(RenderTab¨Tabs)opts JavaScript Var
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
        :Field public Selectors←''  ⍝ CSS/JQuery selectors to bind handler to
        :Field public Delegates←''  ⍝
        :Field public Events←''     ⍝ events to bind
        :Field public ClientData←'' ⍝ any additional client data to send to server
        :Field public Callback←1    ⍝ execute AJAX callback to server?  or the name of the server-side callback function
        :Field public JavaScript←'' ⍝ JavaScript to execute prior to server callback
        :Field public Page←''       ⍝ server URL to run for an AJAX callback
        :field public Uses←'JQuery'

        ∇ Make0
          :Access public
          :Implements constructor
          Use
        ∇

        ∇ Make1 params
          :Access public
          :Implements constructor
          params←#.HtmlElement.eis params
          (Selectors Events Callback ClientData Delegates JavaScript Page)←7↑params,(⍴params)↓7⍴⊂''
          :If #.HtmlElement.isClass Page ⋄ Page←Page.Page ⋄ :EndIf ⍝ if request object passed
          Use
        ∇

        ∇ Use;c
          :Access public
          :Trap 0
              c←#.HtmlElement.context'_PageRef'
              :If ~0∊⍴c
                  (c⍎'_PageRef').Use Uses
              :EndIf
          :EndTrap
        ∇

        ∇ r←Render;sel;cd;pg;req
          :Access public
          sel←Selectors
          :If 0∊⍴sel
              sel←'html'
          :EndIf
          pg←Page
          :If 0∊⍴pg
          :AndIf ''≢req←#.HtmlElement.context'_Request'
              pg←req._Request.Page
          :EndIf
          :If ''≢Delegates
              sel←Selectors Delegates
          :EndIf
          cd←ClientData
          :If (~0∊⍴cd)∧2≥|≡cd ⋄ cd←,⊂cd ⋄ :EndIf
          :If ' '=1↑0⍴Callback
          :AndIf ~0∊⍴Callback
              cd,←⊂'_callback' 'string'Callback
          :EndIf
          r←pg #.JQ.On sel Events cd''JavaScript(0≢⊃Callback)
        ∇

    :endclass
    :endsection



:EndNamespace