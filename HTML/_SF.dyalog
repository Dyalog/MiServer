:Namespace _SF

    :section CommonCode

    ∇ r←ApiInfo
      r←{↑⍵∘{6::⍵'' '' ⋄ ⍵(⍺⍎⍵,'.(ApiLevel ApiLink)')}¨'e'⍵.⎕NL-9.4}⎕THIS
    ∇

    ∇ r←opt(sel Update jqfn)val
    ⍝ update an option for a widget
      r←opt(sel #.JQ.Update jqfn)val
    ∇

    :Class _ejWidget : #._JQ._jqWidget
⍝ generic Syncfusion Enterprise JavaScript object

        :Field public Data←''

        ∇ make
          :Access public
          :If 0=⎕NC⊂'Uses' ⋄ Uses←'' ⋄ :EndIf
          :If 0∊⍴Uses ⋄ Uses←'Syncfusion' ⋄ :EndIf
          :Implements constructor
        ∇

        ∇ make1 args
          :Access public
          :If 0=⎕NC⊂'Uses' ⋄ Uses←'' ⋄ :EndIf
          :If 0∊⍴Uses ⋄ Uses←'Syncfusion' ⋄ :EndIf
          :Implements constructor :base args
        ∇

        ∇ r←Render
          :Access public
          JQPars←Options
          r←⎕BASE.Render
        ∇


        ∇ {r}←opts RenderHandler handler;page;event;callback;clientdata;javascript;data;cd;name;id;type;what;dtype;success;useajax;ajax;arg
          :Access public override
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
          :Select |≡clientdata
          :CaseList 0 1  ⍝ simple vector
              clientdata←,⊂2⍴⊂clientdata ⍝ name/id are set to the same
          :Case 2
              clientdata←,⊂clientdata
          :EndSelect
         
          :For cd :In clientdata
              cd←eis cd
              (name id type what)←4↑cd,(⍴cd)↓4⍴⊂''
         
              :If ~0∊⍴name
                  :Select id
                  :CaseList 'attr' 'css' 'html' 'is' 'serialize' 'val' 'eval' 'argument' ⍝ no selector specified, use evt.target
                      (type what)←id type
                      id←''
                  :Case 'string'
                      (type what)←id(quote type)
                      id←''
                  :Case ''
                      id←quote'#',name
                  :Case 'ejModel'
                      id←''
                      :If type≡''
                          name,←'_ejModel'
                          type←'JSON.stringify(argument.model)'
                      :Else
                          type←'argument.model.',⍕type
                      :EndIf
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
                  :Else
                      :If type≡'serialize'
                          name,←'_serialized'
                      :EndIf
                      type←type,what ine'(',(quote what),')'
                  :EndSelect
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