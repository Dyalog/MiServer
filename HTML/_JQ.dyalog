:Namespace _JQ
  (⎕IO ⎕ML)←1

⍝ --- Base Classes ---
  :class JQObject : #.HtmlElement
    :field public Selector←''   ⍝ Selector to apply the JQuery function to
    :field public Options←''    ⍝ options for the object to be created
    :field public JavaScript←'' ⍝ additional JavaScript to run, can be function chain, separate code or both
    :field public Var←''        ⍝ JavaScript variable name for created object
    :field public JQueryFn←''   ⍝ JQuery function to apply
    :field public Uses          ⍝ resources that will be used by this object (can be overridden by derived classes)

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

    ∇ name Option value;parent;i;ns;split;n
      :Access public
      :If 326≠⎕DR Options ⋄ Options←⎕NS'' ⋄ :EndIf
      parent←(i←-'.'⍳⍨⌽name)↓name
      :If 0∊⍴parent
        name(Options{(⍺⍺)⍎⍺,'←⍵'})value
      :Else
        :If ~'['∊parent
          parent Options.⎕NS''
        :Else
          split←parent⍳']'
          :If (⍴parent)≤split+1
            n←parent↑⍨¯1+parent⍳'['
            :If 0=Options.⎕NC n
              Options.⍎n,'←,⎕NS'''''
            :EndIf
          :Else
          :EndIf
          (parent↓⍨1+split)(Options⍎split↑parent).⎕NS''
        :EndIf
        (1↓i↑name)((Options⍎parent){(⍺⍺)⍎⍺,'←⍵'})value
      :EndIf
    ∇

    ∇ r←Render
      :Access public
      r←#.JQ.JQueryfn JQueryFn Selector(#.JSON.toJQueryParameters Options)JavaScript Var
    ∇
  :endclass

  :class JQUIWidget : JQObject

    ∇ Make1 pars
      :Access public
      Uses←'JQueryUI'
      :Implements constructor :base pars
    ∇
  :endclass

  :class JQTabbedWidget :JQUIWidget
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

    ∇ Make1 pars
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
            r,←(⎕NEW∘{2<⍴,⍵:(⊃⍵)(1↓⍵) ⋄ ⍵}Eis e).Render
          :Else
            r,←e
          :EndIf
        :EndFor
      :Else
        r←,⍕tab
      :EndIf
    ∇

  :endclass

⍝ --- Widgets ---
  :section Widgets

  :class jqAccordion : JQTabbedWidget

    ∇ Make0
      :Access public
      :Implements constructor :base
      Widget._function←#.JQUI.Accordion
    ∇

    ∇ Make1 pars
      :Access public
      :Implements constructor :base pars
      Widget._function←#.JQUI.Accordion
    ∇

  :endclass

  :class jqAutocomplete : JQUIWidget

    :field public Terms←''

    ∇ Make0
      :Access public
      :Implements constructor
      JQueryFn←'autocomplete'
    ∇

    ∇ Make1 pars
      :Access public
      pars←(⊂'autocomplete'),eis pars
      :Implements constructor :base pars
    ∇

    ∇ r←Render;t;opt
      :Access public
      :If ~0∊⍴Terms
        t←#.JSON.toJQueryParameters'source'Terms
        :If 0∊⍴Options ⋄ opt←t
        :ElseIf 2>|≡Options
          :If '{}'={(1↑⍵),¯1↑⍵}Options ⋄ opt←(¯1↓Options),',',1↓t
          :Else ⋄ opt←'{',Options,',',1↓t
          :EndIf
        :Else ⋄ opt←(¯1↓#.JSON.toJQueryParameters Options),',',1↓t
        :EndIf
        Options←opt
      :EndIf
      r←⎕BASE.Render
    ∇
  :EndClass

  :Class jqButton : JQUIWidget ⍝!!!
    ∇ Make0
      :Access public
      :Implements constructor
      JQueryFn←'button'
    ∇

    ∇ Make1 pars
      :Access public
      pars←(⊂'button'),eis pars
      :Implements constructor :base pars
    ∇
  :EndClass

  :class jqButtonset : JQUIWidget
    ∇ Make0
      :Access public
      :Implements constructor
      JQueryFn←'buttonset'
    ∇

    ∇ Make1 pars
      :Access public
      pars←(⊂'buttonset'),eis pars
      :Implements constructor :base pars
    ∇
  :endclass

  :Class jqDatePicker: JQUIWidget

    :field public Input←'' ⍝ input element to hold datepicker

    ∇ Make0
      :Access public
      :Implements constructor
      JQueryFn←'datepicker'
    ∇

    ∇ Make1 pars
      :Access public
      :If 0 2∊⍨10|⎕DR pars
        Input←pars
        pars←'#',pars
      :EndIf
      pars←(⊂'datepicker'),eis pars
      :Implements constructor :base pars
    ∇

    ∇ r←Render
      :Access public
      r←''
      :If ~0∊⍴Input
        r,←Input #.HTMLInput.Edit'' 20
      :EndIf
      r,←⎕BASE.Render
    ∇


  :EndClass

  :Class jqDialog : JQObject ⍝!!!
  :EndClass

  :Class jqMenu : JQObject ⍝!!!
  :EndClass

  :Class jqProgressbar : JQObject ⍝!!!
  :EndClass

  :Class jqSlider : JQObject ⍝!!!
  :EndClass

  :Class jqSpinner : JQObject ⍝!!!
  :EndClass

  :Class jqTabs : JQTabbedWidget
    ∇ Make0
      :Access public
      :Implements constructor :base
      Widget._function←#.JQUI.Tabs
    ∇

    ∇ Make1 pars
      :Access public
      :Implements constructor :base pars
      Widget._function←#.JQUI.Tabs
    ∇
  :endclass


  :class jqTooltip : JQObject ⍝!!!
  :endclass
  :endsection

⍝ --- Interactions ---
  :section Interactions ⍝ http://api.jqueryui.com/category/interactions/

  :class jqDraggable : JQObject
    ∇ Make
      :Access public
      :Implements constructor
      JQueryFn←'draggable'
    ∇

  :EndClass

  :Class jqDroppable : JQObject

    :field public Accept ⍝ selector(s) that this droppable will accept

    ∇ Make
      :Access public
      :Implements constructor
      JQueryFn←'droppable'
    ∇

  :EndClass

  :Class jqResizable : JQObject
  :EndClass

  :Class jqSortable : JQObject
  :EndClass

  :Class jqSelectable : JQObject
  :EndClass

  :EndSection

⍝ --- Third Party Plugins ---
  :section Third_Party

  :Class DataTable : JQObject
    :field public Data←''
    ∇ Make0
      :Access public
      :Implements constructor :base
      JQueryFn←'dataTable'
    ∇
    ∇ Make01 pars
      :Access public
      pars←eis pars
      :Implements constructor :base pars
     
    ∇
    ∇ r←{req}DataTable pars;id;tablepars;jqpars;oname;tab;js
    ⍝ req - HTTPRequest object
    ⍝ pars - id tablepars jqpars object-name
    ⍝ id - the id for the table to be sorted
    ⍝ jqpars - TableSorter parameters
    ⍝ tablepars - parameters for the table (see #.HTMLInput.Table)
    ⍝ oname - the object name for the datatable
    ⍝ js - any additional javascript
    ⍝ updates req.Response.head and returns html
     
      :If 9=⎕NC'req'
        req.Use'DataTable'
      :EndIf
     
      pars←eis pars
      id tablepars jqpars oname js←5↑pars,(⍴pars)↓'' '' '' '' ''
      tab←'cellpadding="0" width="100%" cellspacing="0" border="0"'
      :If 0∊⍴id ⋄ id←'myDataTable' ⋄ :EndIf
      :If 0∊⍴tablepars ⋄ r←(tab,' id="',id,'"')#.HTMLInput.Enclose''
      :Else
        :If 2=⍴⍴tablepars ⋄ tablepars←,⊂tablepars ⋄ :EndIf
        tablepars←tablepars,(⍴,tablepars)↓(0 0⍴⊂'')tab'' '' 1 0 1 ⍝ see HTMLInput.Table for
        r←id #.HTMLInput.Table tablepars
      :EndIf
      r,←#.JQ.JQueryfn'dataTable'(makeID id)jqpars js oname
    ∇
  :EndClass


  :endsection

⍝ --- Effects ---
  :Section Effects


  :EndSection


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


⍝ --- Utilities ---
  :section Utilities
  :class Position :JQObject ⍝ http://api.jqueryui.com/position/
    :field public my
    :field public at
    :field public of
    :field public collision

  :endclass
  :endsection

:EndNamespace