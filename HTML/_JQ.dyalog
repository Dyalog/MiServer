:Namespace _JQ
    (⎕IO ⎕ML)←1

⍝ --- Base Classes ---
    :class _jqObject : #.HtmlElement
        :field public Selector←''   ⍝ Selector to apply the JQuery function to
        :field public JavaScript←'' ⍝ additional JavaScript to run, can be function chain, separate code or both
        :field public Var←''        ⍝ JavaScript variable name for created object
        :field public JQueryFn←''   ⍝ JQuery function to apply
        :field public JQueryPars←'' ⍝ JQuery function parameters
        :field public Uses←''       ⍝ resources that will be used by this object (can be overridden by derived classes)
        :field public shared _true←{⍵⊣⍵.⎕DF'true'}⎕NS ''     ⍝ same definition as in #.JSON
        :field public shared _false←{⍵⊣⍵.⎕DF'false'}⎕NS ''   ⍝ same definition as in #.JSON

        ∇ Make0
          :Access public
          :Implements constructor
          Use
        ∇

        ∇ Make1 pars
          :Access public
          :Implements constructor
          pars←eis pars
          JQueryFn Selector JavaScript Var←4↑pars,(⍴pars)↓'' '' '' ''
          Use
        ∇

        ∇ Use;c
          :Access public overridable
          :If ~0∊⍴Uses
              :Trap 0/0
                  :If ''≡c←_PageRef
                      c←#.HtmlElement.context'_PageRef'
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

        ∇ r←Render
          :Access public
          r←#.JQ.JQuery JQueryFn Selector JQueryPars JavaScript Var
        ∇

    :endclass

    :class _jqWidget : _jqObject

        :field public Options←''    ⍝ options for the object to be created

        ∇ r←Render
          :Access public
          r←#.JQ.JQueryfn JQueryFn Selector Options JavaScript Var
        ∇

        ∇ name Option value;parent;i;ns;split;Set;index;lb;new;now;an;n
          :Access public
          :If 326≠⎕DR Options ⋄ Options←⎕NS'' ⋄ :EndIf
          :If 1<|≡name ⍝ multiple names?
              value←(⊂⍣((⎕DR value)∊80 82))value
              name Option¨value
          :Else
              Set←{⍺⍺⍎'(',⍺,')←⍵'}
              :If 0∊⍴parent←(i←-'.'⍳⍨⌽name)↓name
                  name(Options Set)value ⍝ single name: assign directly (may be more than 1 name)
              :Else
                  :If ~'['∊parent
                      parent Options.⎕NS''
                  :Else
                      split←parent⍳']'              ⍝ if present, ] will be ≤⍴parent
                      :If (⍴parent)≤split+1         ⍝ if ] is in the last 2 positions
                          an←parent↑⍨¯1+lb←parent⍳'['      ⍝ find the array name
                          index←2⊃⎕VFI lb↓(split-1)↑parent ⍝ the position wanted
                          new←⎕NS¨index⍴⊂⍬
                          :If 0=Options.⎕NC an             ⍝ if it does not exist
                              an(Options Set)new           ⍝ create it as a vector
                          :EndIf
                     ⍝ If the index is beyond the current shape, extend it
                          :If index>n←⍴now←Options⍎an
                              an((Options)Set)now,n↓new
                          :EndIf
                      :EndIf
                      (parent↓⍨1+split)(Options⍎split↑parent).⎕NS''
                  :EndIf
                  (1↓i↑name)((Options⍎parent)Set)value
              :EndIf
          :EndIf
        ∇

        ∇ r←GetOption names
          :Access public
          r←{6::'' ⋄ Options.⍎⍵}¨{⎕ML←3 ⋄ ⍵⊂⍨⍵≠' '}names
          :If 1=⍴r ⋄ r←⊃r ⋄ :EndIf ⍝ if single setting requested
        ∇

        ∇ r←SetOption args
          :Access public
          ∘∘∘
        ∇
    :endclass

    :class _jqUIWidget : _jqWidget

        ∇ Make1 pars
          :Access public
          Uses←'JQueryUI'
          :Implements constructor :base pars
        ∇
    :endclass

    :class _jqTabbedWidget : _jqUIWidget
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