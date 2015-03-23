:Namespace _JQ
    (⎕IO ⎕ML)←1

⍝ --- Base Classes ---
    :class _jqObject : #.HtmlElement
        :field public Selector←''   ⍝ Selector to apply the JQuery function to
        :field public JavaScript←'' ⍝ additional JavaScript to run, can be function chain, separate code or both
        :field public Var←''        ⍝ JavaScript variable name for created object
        :field public JQueryFn←''   ⍝ JQuery function to apply
        :field public JQPars←''     ⍝ JQuery function parameters
        :field public shared readonly _true←{⍵⊣⍵.⎕DF'true'}⎕NS ''     ⍝ same definition as in #.JSON
        :field public shared readonly _false←{⍵⊣⍵.⎕DF'false'}⎕NS ''   ⍝ same definition as in #.JSON

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

        :endsection

    :endclass

    :class _jqWidget : _jqObject

        :field public Options←''    ⍝ options for the object to be created
        :field public Updates←''
        :field public ContainerType←'div' ⍝ default container type
        :field public Container
        :field public eventHandlers←''

        ∇ r←{a}rand w;rnd
          :Access public
          rnd←{⍺←⊢ ⋄ t←16807⌶2 ⋄ r←⍺?⍵ ⋄ t←16807⌶t ⋄ r}
          :If 0=⎕NC'a' ⋄ r←rnd w
          :Else ⋄ r←a rnd w ⋄ :EndIf
        ∇

        ∇ Make1 args;selector
          :Access public
          :Implements constructor
          selector←,⊃eis args
          :If (10|⎕DR selector)∊0 2
              :If 0<⍴selector
                  :If isSelector selector
                      Selector←selector
                  :Else
                      id←selector
                  :EndIf
              :EndIf
          :EndIf
        ∇

        ∇ r←Render;build
          :Access public
         
          r←''
          Use
         ⍝ if the user explicitly specifies a selector,
          :If build←0∊⍴Selector
              Selector←'#',Container.id←GenId
          :EndIf
         
          :If ~0∊⍴eventHandlers
              Options∘RenderHandler¨eventHandlers
          :EndIf
         
          r←#.JQ.JQueryfn JQueryFn Selector Options JavaScript Var
         
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
              r,⍨←Container.Render
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

        ∇ r←{opts}RenderHandler handler
          :Access public overridable
        ∇

⍝        ∇ r←Render
⍝          :Access public overridable
⍝          r←''
⍝          :If Selector≡''
⍝          :AndIf (id≡UNDEF)⍱id≡''
⍝              Selector←'#',id
⍝          :EndIf
⍝          r←#.JQ.JQueryfn JQueryFn Selector Options JavaScript Var
⍝        ∇

        ∇ {name}Set value
          :Access public
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

        ∇ {name}Update value
          :Access public
          :If 326≠⎕DR Updates ⋄ Updates←⎕NS'' ⋄ :EndIf
          :If 0=⎕NC'name'
              :Trap 11
                  (name value)←ParseValue value
              :Else
                  ⎕SIGNAL/⎕DMX.(EM EN)
              :EndTrap
          :EndIf
          name(Updates SetOption)value
        ∇
    :endclass

    :class _jqUIWidget : _jqWidget
        ∇ Make1 pars
          :Access public
          :Implements constructor :base pars
          Uses←'JQueryUI'
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
              sel←⊂Selectors Delegates
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