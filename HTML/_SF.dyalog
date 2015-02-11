:Namespace _SF

  :section CommonCode

  ∇ r←ApiInfo
    r←{↑⍵∘{6::⍵'' '' ⋄ ⍵(⍺⍎⍵,'.(ApiLevel ApiLink)')}¨'e'⍵.⎕NL-9.4}⎕THIS
  ∇

  :class _ejObject : #._JQ.JQObject
⍝ generic Syncfusion Enterprise JavaScript object
    :field public ContainerType←'div'
    :field public Data←''
    :field public Container
    :field public eventHandlers←''  ⍝!!! make private

    rand←{⍺←⊢ ⋄t←16807⌶2 ⋄r←⍺?⍵ ⋄ t←16807⌶t ⋄ r }

    ∇ make
      :Access public
      Options←⎕NS''
      Container←⎕NEW #.HtmlElement
      :If 0=⎕NC⊂'Uses' ⋄ Uses←'' ⋄ :EndIf
      :If 0∊⍴Uses ⋄ Uses←'Syncfusion' ⋄ :EndIf
      :Implements constructor
    ∇

    ∇ make1 args
      :Access public
      :Implements constructor
      Options←⎕NS''
      Container←⎕NEW #.HtmlElement
      :If 0=⎕NC⊂'Uses' ⋄ Uses←'' ⋄ :EndIf
      :If 0∊⍴Uses ⋄ Uses←'Syncfusion' ⋄ :EndIf
      :If 0<⍴args←eis args
        Selector←⊃args
      :EndIf
    ∇


    ∇ r←Render;d;opts;att;sel
      :Access public
      r←''
      :If 0∊⍴Selector
        Selector←'#id',¯10↑'0000000000',⍕rand ¯1+2*31
      :EndIf
      :If ∧/(#.Strings.uc Selector)∊#.Strings.upper ⍝ if it looks likely to be an id
        Selector,⍨←'#' ⍝ treat it as an id
      :EndIf
      att←''
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
      r←Container.Render
     
      :If ~0∊⍴eventHandlers
        Options∘RenderHandler¨eventHandlers
      :EndIf
      r,←⎕BASE.Render ⍝#._JQ.JQObject.Render
    ∇

    ∇ {handler}←On args;event;callback;clientData;javaScript;n;i
      :Access public
    ⍝ args - event callback clientData javascript
      args←eis args
      handler←⎕NS''
      handler.(Event Callback ClientData JavaScript)←4↑args,(⍴args)↓'' 1 '' ''
      :If 0∊n←⍴eventHandlers
        eventHandlers,←handler
      :ElseIf n<i←eventHandlers.event⍳⊂handler.event
        eventHandlers,←handler
      :Else
        eventHandlers[i]←handler
      :EndIf
    ∇

    ∇ r←opts RenderHandler handler;page;event;callback;clientdata;javascript;data;cd;name;id;type;what;dtype;success;useajax;ajax;arg
      :Access public
      r←page←''
      :If isInstance _PageRef
        page←_PageRef._PageName
      :EndIf
      page←quote page
      (event callback clientdata javascript)←handler.(Event Callback ClientData JavaScript)
      useajax←(,0)≢,callback
      data←''
      data,←', _event: argument.type'
      data,←', _what: this._id'
      data,←(isString callback)/', _callback: ',quote callback
      data←2↓data
     
      :If 2=|≡clientdata ⋄ clientdata←,⊂clientdata ⋄ :EndIf
      :For cd :In clientdata
        cd←eis cd
        (name id type what)←4↑cd,(⍴cd)↓4⍴⊂''
        :If ~0∊⍴name
          :If 'ejModel'≡name
            name←'_ejModel'
            type←'JSONSubset(argument.model,',(quote id),')'
            id←''
          :Else
            :Select id
            :CaseList 'attr' 'css' 'html' 'is' 'serialize' 'val' 'eval' 'argument' 'ejModel'  ⍝ no selector specified, use evt.target
              (type what)←id type
              id←''
            :Case 'string'
              (type what)←id(quote type)
              id←''
            :Case ''
              id←quote'#',name
            :Else
              :If 'argument.'{⍺≡(⍴⍺)↑⍵}id
                (type what)←2↑{⎕ML←3 ⋄ ⍵⊂⍨⍵≠'.'}id
                id←''
              :Else
                id←quote id
              :EndIf
            :EndSelect
     
            :Select type
            :Case 'eval'
              type←what
            :Case 'argument'
              type←type,'.',what
            :Case ''
              type←'val()'
            :Case 'string'
              type←what
            :Case 'ejModel'
              name,←'_ejModel'
              type←'JSONSubset(argument.model,',(quote what),')'
            :Else
              :If type≡'serialize'
                name,←'_serialized'
              :EndIf
              type←type,'(',(what ine quote what),')'
            :EndSelect
          :EndIf
          data,←',',name,': ',(id ine'$(',id,').'),type
        :EndIf
      :EndFor
     
      dtype←'"json"'
      success←'success: function(obj){APLJaxReturn(obj);}'
      ajax←(javascript ine javascript,';'),useajax/'$.ajax({url: ',page,', cache: false, type: "POST", dataType: ',dtype,', data: {',data,'}, ',success,'});'
      event(opts{⍺⍺⍎⍺,'←⍵'})'function(argument){',ajax,'}'
    ∇

  :EndClass
  :endsection
:EndNamespace